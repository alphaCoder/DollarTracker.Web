System.register(['../Subscriber', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, async_1;
    var BufferTimeOperator, BufferTimeSubscriber;
    /**
     * Buffers the source Observable values for a specific time period.
     *
     * <span class="informal">Collects values from the past as an array, and emits
     * those arrays periodically in time.</span>
     *
     * <img src="./img/bufferTime.png" width="100%">
     *
     * Buffers values from the source for a specific time duration `bufferTimeSpan`.
     * Unless the optional argument `bufferCreationInterval` is given, it emits and
     * resets the buffer every `bufferTimeSpan` milliseconds. If
     * `bufferCreationInterval` is given, this operator opens the buffer every
     * `bufferCreationInterval` milliseconds and closes (emits and resets) the
     * buffer every `bufferTimeSpan` milliseconds.
     *
     * @example <caption>Every second, emit an array of the recent click events</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var buffered = clicks.bufferTime(1000);
     * buffered.subscribe(x => console.log(x));
     *
     * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var buffered = clicks.bufferTime(2000, 5000);
     * buffered.subscribe(x => console.log(x));
     *
     * @see {@link buffer}
     * @see {@link bufferCount}
     * @see {@link bufferToggle}
     * @see {@link bufferWhen}
     * @see {@link windowTime}
     *
     * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
     * @param {number} [bufferCreationInterval] The interval at which to start new
     * buffers.
     * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
     * intervals that determine buffer boundaries.
     * @return {Observable<T[]>} An observable of arrays of buffered values.
     * @method bufferTime
     * @owner Observable
     */
    function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
        if (bufferCreationInterval === void 0) { bufferCreationInterval = null; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
    }
    exports_1("bufferTime", bufferTime);
    function dispatchBufferTimeSpanOnly(state) {
        var subscriber = state.subscriber;
        var prevBuffer = state.buffer;
        if (prevBuffer) {
            subscriber.closeBuffer(prevBuffer);
        }
        state.buffer = subscriber.openBuffer();
        if (!subscriber.isUnsubscribed) {
            this.schedule(state, state.bufferTimeSpan);
        }
    }
    function dispatchBufferCreation(state) {
        var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
        var buffer = subscriber.openBuffer();
        var action = this;
        if (!subscriber.isUnsubscribed) {
            action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
            action.schedule(state, bufferCreationInterval);
        }
    }
    function dispatchBufferClose(arg) {
        var subscriber = arg.subscriber, buffer = arg.buffer;
        subscriber.closeBuffer(buffer);
    }
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            BufferTimeOperator = (function () {
                function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
                    this.bufferTimeSpan = bufferTimeSpan;
                    this.bufferCreationInterval = bufferCreationInterval;
                    this.scheduler = scheduler;
                }
                BufferTimeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler));
                };
                return BufferTimeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            BufferTimeSubscriber = (function (_super) {
                __extends(BufferTimeSubscriber, _super);
                function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
                    _super.call(this, destination);
                    this.bufferTimeSpan = bufferTimeSpan;
                    this.bufferCreationInterval = bufferCreationInterval;
                    this.scheduler = scheduler;
                    this.buffers = [];
                    var buffer = this.openBuffer();
                    if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
                        var closeState = { subscriber: this, buffer: buffer };
                        var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
                        this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
                        this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
                    }
                    else {
                        var timeSpanOnlyState = { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan };
                        this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
                    }
                }
                BufferTimeSubscriber.prototype._next = function (value) {
                    var buffers = this.buffers;
                    var len = buffers.length;
                    for (var i = 0; i < len; i++) {
                        buffers[i].push(value);
                    }
                };
                BufferTimeSubscriber.prototype._error = function (err) {
                    this.buffers.length = 0;
                    _super.prototype._error.call(this, err);
                };
                BufferTimeSubscriber.prototype._complete = function () {
                    var _a = this, buffers = _a.buffers, destination = _a.destination;
                    while (buffers.length > 0) {
                        destination.next(buffers.shift());
                    }
                    _super.prototype._complete.call(this);
                };
                BufferTimeSubscriber.prototype._unsubscribe = function () {
                    this.buffers = null;
                };
                BufferTimeSubscriber.prototype.openBuffer = function () {
                    var buffer = [];
                    this.buffers.push(buffer);
                    return buffer;
                };
                BufferTimeSubscriber.prototype.closeBuffer = function (buffer) {
                    this.destination.next(buffer);
                    var buffers = this.buffers;
                    buffers.splice(buffers.indexOf(buffer), 1);
                };
                return BufferTimeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2J1ZmZlclRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F1Q0c7SUFDSCxvQkFBOEIsY0FBc0IsRUFDdEIsc0JBQXFDLEVBQ3JDLFNBQTRCO1FBRDVCLHNDQUFxQyxHQUFyQyw2QkFBcUM7UUFDckMseUJBQTRCLEdBQTVCLHlCQUE0QjtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFJLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFKRCxtQ0FJQyxDQUFBO0lBeUZELG9DQUFvQyxLQUFVO1FBQzVDLElBQU0sVUFBVSxHQUE4QixLQUFLLENBQUMsVUFBVSxDQUFDO1FBRS9ELElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNmLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELEtBQUssQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDSCxDQUFDO0lBT0QsZ0NBQW1DLEtBQXVCO1FBQ2hELHlEQUFzQixFQUFFLHFDQUFjLEVBQUUsNkJBQVUsRUFBRSwyQkFBUyxDQUFXO1FBQ2hGLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QyxJQUFNLE1BQU0sR0FBNkIsSUFBSSxDQUFDO1FBQzlD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QUNILDJCQUFDO1lBQUQsQ0F4REEsQUF3REMsQ0F4RHFDLHVCQUFVLEdBd0QvQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9idWZmZXJUaW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7QWN0aW9ufSBmcm9tICcuLi9zY2hlZHVsZXIvQWN0aW9uJztcbmltcG9ydCB7YXN5bmN9IGZyb20gJy4uL3NjaGVkdWxlci9hc3luYyc7XG5cbi8qKlxuICogQnVmZmVycyB0aGUgc291cmNlIE9ic2VydmFibGUgdmFsdWVzIGZvciBhIHNwZWNpZmljIHRpbWUgcGVyaW9kLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Db2xsZWN0cyB2YWx1ZXMgZnJvbSB0aGUgcGFzdCBhcyBhbiBhcnJheSwgYW5kIGVtaXRzXG4gKiB0aG9zZSBhcnJheXMgcGVyaW9kaWNhbGx5IGluIHRpbWUuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvYnVmZmVyVGltZS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBCdWZmZXJzIHZhbHVlcyBmcm9tIHRoZSBzb3VyY2UgZm9yIGEgc3BlY2lmaWMgdGltZSBkdXJhdGlvbiBgYnVmZmVyVGltZVNwYW5gLlxuICogVW5sZXNzIHRoZSBvcHRpb25hbCBhcmd1bWVudCBgYnVmZmVyQ3JlYXRpb25JbnRlcnZhbGAgaXMgZ2l2ZW4sIGl0IGVtaXRzIGFuZFxuICogcmVzZXRzIHRoZSBidWZmZXIgZXZlcnkgYGJ1ZmZlclRpbWVTcGFuYCBtaWxsaXNlY29uZHMuIElmXG4gKiBgYnVmZmVyQ3JlYXRpb25JbnRlcnZhbGAgaXMgZ2l2ZW4sIHRoaXMgb3BlcmF0b3Igb3BlbnMgdGhlIGJ1ZmZlciBldmVyeVxuICogYGJ1ZmZlckNyZWF0aW9uSW50ZXJ2YWxgIG1pbGxpc2Vjb25kcyBhbmQgY2xvc2VzIChlbWl0cyBhbmQgcmVzZXRzKSB0aGVcbiAqIGJ1ZmZlciBldmVyeSBgYnVmZmVyVGltZVNwYW5gIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5FdmVyeSBzZWNvbmQsIGVtaXQgYW4gYXJyYXkgb2YgdGhlIHJlY2VudCBjbGljayBldmVudHM8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGJ1ZmZlcmVkID0gY2xpY2tzLmJ1ZmZlclRpbWUoMTAwMCk7XG4gKiBidWZmZXJlZC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+RXZlcnkgNSBzZWNvbmRzLCBlbWl0IHRoZSBjbGljayBldmVudHMgZnJvbSB0aGUgbmV4dCAyIHNlY29uZHM8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGJ1ZmZlcmVkID0gY2xpY2tzLmJ1ZmZlclRpbWUoMjAwMCwgNTAwMCk7XG4gKiBidWZmZXJlZC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgYnVmZmVyfVxuICogQHNlZSB7QGxpbmsgYnVmZmVyQ291bnR9XG4gKiBAc2VlIHtAbGluayBidWZmZXJUb2dnbGV9XG4gKiBAc2VlIHtAbGluayBidWZmZXJXaGVufVxuICogQHNlZSB7QGxpbmsgd2luZG93VGltZX1cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYnVmZmVyVGltZVNwYW4gVGhlIGFtb3VudCBvZiB0aW1lIHRvIGZpbGwgZWFjaCBidWZmZXIgYXJyYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gW2J1ZmZlckNyZWF0aW9uSW50ZXJ2YWxdIFRoZSBpbnRlcnZhbCBhdCB3aGljaCB0byBzdGFydCBuZXdcbiAqIGJ1ZmZlcnMuXG4gKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcj1hc3luY10gVGhlIHNjaGVkdWxlciBvbiB3aGljaCB0byBzY2hlZHVsZSB0aGVcbiAqIGludGVydmFscyB0aGF0IGRldGVybWluZSBidWZmZXIgYm91bmRhcmllcy5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8VFtdPn0gQW4gb2JzZXJ2YWJsZSBvZiBhcnJheXMgb2YgYnVmZmVyZWQgdmFsdWVzLlxuICogQG1ldGhvZCBidWZmZXJUaW1lXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVmZmVyVGltZTxUPihidWZmZXJUaW1lU3BhbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyQ3JlYXRpb25JbnRlcnZhbDogbnVtYmVyID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlcjogU2NoZWR1bGVyID0gYXN5bmMpOiBPYnNlcnZhYmxlPFRbXT4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBCdWZmZXJUaW1lT3BlcmF0b3I8VD4oYnVmZmVyVGltZVNwYW4sIGJ1ZmZlckNyZWF0aW9uSW50ZXJ2YWwsIHNjaGVkdWxlcikpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1ZmZlclRpbWVTaWduYXR1cmU8VD4ge1xuICAoYnVmZmVyVGltZVNwYW46IG51bWJlciwgYnVmZmVyQ3JlYXRpb25JbnRlcnZhbD86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUW10+O1xufVxuXG5jbGFzcyBCdWZmZXJUaW1lT3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUW10+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBidWZmZXJUaW1lU3BhbjogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGJ1ZmZlckNyZWF0aW9uSW50ZXJ2YWw6IG51bWJlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZXI6IFNjaGVkdWxlcikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFRbXT4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IEJ1ZmZlclRpbWVTdWJzY3JpYmVyKFxuICAgICAgc3Vic2NyaWJlciwgdGhpcy5idWZmZXJUaW1lU3BhbiwgdGhpcy5idWZmZXJDcmVhdGlvbkludGVydmFsLCB0aGlzLnNjaGVkdWxlclxuICAgICkpO1xuICB9XG59XG5cbnR5cGUgQ3JlYXRpb25TdGF0ZTxUPiA9IHtcbiAgYnVmZmVyVGltZVNwYW46IG51bWJlcjtcbiAgYnVmZmVyQ3JlYXRpb25JbnRlcnZhbDogbnVtYmVyLFxuICBzdWJzY3JpYmVyOiBCdWZmZXJUaW1lU3Vic2NyaWJlcjxUPjtcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXI7XG59O1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgQnVmZmVyVGltZVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcHJpdmF0ZSBidWZmZXJzOiBBcnJheTxUW10+ID0gW107XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8VFtdPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBidWZmZXJUaW1lU3BhbjogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGJ1ZmZlckNyZWF0aW9uSW50ZXJ2YWw6IG51bWJlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzY2hlZHVsZXI6IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICBjb25zdCBidWZmZXIgPSB0aGlzLm9wZW5CdWZmZXIoKTtcbiAgICBpZiAoYnVmZmVyQ3JlYXRpb25JbnRlcnZhbCAhPT0gbnVsbCAmJiBidWZmZXJDcmVhdGlvbkludGVydmFsID49IDApIHtcbiAgICAgIGNvbnN0IGNsb3NlU3RhdGUgPSB7IHN1YnNjcmliZXI6IHRoaXMsIGJ1ZmZlciB9O1xuICAgICAgY29uc3QgY3JlYXRpb25TdGF0ZTogQ3JlYXRpb25TdGF0ZTxUPiA9IHsgYnVmZmVyVGltZVNwYW4sIGJ1ZmZlckNyZWF0aW9uSW50ZXJ2YWwsIHN1YnNjcmliZXI6IHRoaXMsIHNjaGVkdWxlciB9O1xuICAgICAgdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoQnVmZmVyQ2xvc2UsIGJ1ZmZlclRpbWVTcGFuLCBjbG9zZVN0YXRlKSk7XG4gICAgICB0aGlzLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hCdWZmZXJDcmVhdGlvbiwgYnVmZmVyQ3JlYXRpb25JbnRlcnZhbCwgY3JlYXRpb25TdGF0ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0aW1lU3Bhbk9ubHlTdGF0ZSA9IHsgc3Vic2NyaWJlcjogdGhpcywgYnVmZmVyLCBidWZmZXJUaW1lU3BhbiB9O1xuICAgICAgdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoQnVmZmVyVGltZVNwYW5Pbmx5LCBidWZmZXJUaW1lU3BhbiwgdGltZVNwYW5Pbmx5U3RhdGUpKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpIHtcbiAgICBjb25zdCBidWZmZXJzID0gdGhpcy5idWZmZXJzO1xuICAgIGNvbnN0IGxlbiA9IGJ1ZmZlcnMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGJ1ZmZlcnNbaV0ucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9lcnJvcihlcnI6IGFueSkge1xuICAgIHRoaXMuYnVmZmVycy5sZW5ndGggPSAwO1xuICAgIHN1cGVyLl9lcnJvcihlcnIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpIHtcbiAgICBjb25zdCB7IGJ1ZmZlcnMsIGRlc3RpbmF0aW9uIH0gPSB0aGlzO1xuICAgIHdoaWxlIChidWZmZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGRlc3RpbmF0aW9uLm5leHQoYnVmZmVycy5zaGlmdCgpKTtcbiAgICB9XG4gICAgc3VwZXIuX2NvbXBsZXRlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3Vuc3Vic2NyaWJlKCkge1xuICAgIHRoaXMuYnVmZmVycyA9IG51bGw7XG4gIH1cblxuICBvcGVuQnVmZmVyKCk6IFRbXSB7XG4gICAgbGV0IGJ1ZmZlcjogVFtdID0gW107XG4gICAgdGhpcy5idWZmZXJzLnB1c2goYnVmZmVyKTtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9XG5cbiAgY2xvc2VCdWZmZXIoYnVmZmVyOiBUW10pIHtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoYnVmZmVyKTtcbiAgICBjb25zdCBidWZmZXJzID0gdGhpcy5idWZmZXJzO1xuICAgIGJ1ZmZlcnMuc3BsaWNlKGJ1ZmZlcnMuaW5kZXhPZihidWZmZXIpLCAxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEJ1ZmZlclRpbWVTcGFuT25seShzdGF0ZTogYW55KSB7XG4gIGNvbnN0IHN1YnNjcmliZXI6IEJ1ZmZlclRpbWVTdWJzY3JpYmVyPGFueT4gPSBzdGF0ZS5zdWJzY3JpYmVyO1xuXG4gIGNvbnN0IHByZXZCdWZmZXIgPSBzdGF0ZS5idWZmZXI7XG4gIGlmIChwcmV2QnVmZmVyKSB7XG4gICAgc3Vic2NyaWJlci5jbG9zZUJ1ZmZlcihwcmV2QnVmZmVyKTtcbiAgfVxuXG4gIHN0YXRlLmJ1ZmZlciA9IHN1YnNjcmliZXIub3BlbkJ1ZmZlcigpO1xuICBpZiAoIXN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAoPGFueT50aGlzKS5zY2hlZHVsZShzdGF0ZSwgc3RhdGUuYnVmZmVyVGltZVNwYW4pO1xuICB9XG59XG5cbmludGVyZmFjZSBEaXNwYXRjaEFyZzxUPiB7XG4gIHN1YnNjcmliZXI6IEJ1ZmZlclRpbWVTdWJzY3JpYmVyPFQ+O1xuICBidWZmZXI6IEFycmF5PFQ+O1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEJ1ZmZlckNyZWF0aW9uPFQ+KHN0YXRlOiBDcmVhdGlvblN0YXRlPFQ+KSB7XG4gIGNvbnN0IHsgYnVmZmVyQ3JlYXRpb25JbnRlcnZhbCwgYnVmZmVyVGltZVNwYW4sIHN1YnNjcmliZXIsIHNjaGVkdWxlciB9ID0gc3RhdGU7XG4gIGNvbnN0IGJ1ZmZlciA9IHN1YnNjcmliZXIub3BlbkJ1ZmZlcigpO1xuICBjb25zdCBhY3Rpb24gPSA8QWN0aW9uPENyZWF0aW9uU3RhdGU8VD4+PnRoaXM7XG4gIGlmICghc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgIGFjdGlvbi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlPERpc3BhdGNoQXJnPFQ+PihkaXNwYXRjaEJ1ZmZlckNsb3NlLCBidWZmZXJUaW1lU3BhbiwgeyBzdWJzY3JpYmVyLCBidWZmZXIgfSkpO1xuICAgIGFjdGlvbi5zY2hlZHVsZShzdGF0ZSwgYnVmZmVyQ3JlYXRpb25JbnRlcnZhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hCdWZmZXJDbG9zZTxUPihhcmc6IERpc3BhdGNoQXJnPFQ+KSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlciwgYnVmZmVyIH0gPSBhcmc7XG4gIHN1YnNjcmliZXIuY2xvc2VCdWZmZXIoYnVmZmVyKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
