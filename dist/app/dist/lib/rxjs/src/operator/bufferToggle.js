System.register(['../Subscription', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1, subscribeToResult_1, OuterSubscriber_1;
    var BufferToggleOperator, BufferToggleSubscriber;
    /**
     * Buffers the source Observable values starting from an emission from
     * `openings` and ending when the output of `closingSelector` emits.
     *
     * <span class="informal">Collects values from the past as an array. Starts
     * collecting only when `opening` emits, and calls the `closingSelector`
     * function to get an Observable that tells when to close the buffer.</span>
     *
     * <img src="./img/bufferToggle.png" width="100%">
     *
     * Buffers values from the source by opening the buffer via signals from an
     * Observable provided to `openings`, and closing and sending the buffers when
     * a Subscribable or Promise returned by the `closingSelector` function emits.
     *
     * @example <caption>Every other second, emit the click events from the next 500ms</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var openings = Rx.Observable.interval(1000);
     * var buffered = clicks.bufferToggle(openings, i =>
     *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
     * );
     * buffered.subscribe(x => console.log(x));
     *
     * @see {@link buffer}
     * @see {@link bufferCount}
     * @see {@link bufferTime}
     * @see {@link bufferWhen}
     * @see {@link windowToggle}
     *
     * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
     * buffers.
     * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
     * the value emitted by the `openings` observable and returns a Subscribable or Promise,
     * which, when it emits, signals that the associated buffer should be emitted
     * and cleared.
     * @return {Observable<T[]>} An observable of arrays of buffered values.
     * @method bufferToggle
     * @owner Observable
     */
    function bufferToggle(openings, closingSelector) {
        return this.lift(new BufferToggleOperator(openings, closingSelector));
    }
    exports_1("bufferToggle", bufferToggle);
    return {
        setters:[
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            }],
        execute: function() {
            BufferToggleOperator = (function () {
                function BufferToggleOperator(openings, closingSelector) {
                    this.openings = openings;
                    this.closingSelector = closingSelector;
                }
                BufferToggleOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
                };
                return BufferToggleOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            BufferToggleSubscriber = (function (_super) {
                __extends(BufferToggleSubscriber, _super);
                function BufferToggleSubscriber(destination, openings, closingSelector) {
                    _super.call(this, destination);
                    this.openings = openings;
                    this.closingSelector = closingSelector;
                    this.contexts = [];
                    this.add(subscribeToResult_1.subscribeToResult(this, openings));
                }
                BufferToggleSubscriber.prototype._next = function (value) {
                    var contexts = this.contexts;
                    var len = contexts.length;
                    for (var i = 0; i < len; i++) {
                        contexts[i].buffer.push(value);
                    }
                };
                BufferToggleSubscriber.prototype._error = function (err) {
                    var contexts = this.contexts;
                    while (contexts.length > 0) {
                        var context = contexts.shift();
                        context.subscription.unsubscribe();
                        context.buffer = null;
                        context.subscription = null;
                    }
                    this.contexts = null;
                    _super.prototype._error.call(this, err);
                };
                BufferToggleSubscriber.prototype._complete = function () {
                    var contexts = this.contexts;
                    while (contexts.length > 0) {
                        var context = contexts.shift();
                        this.destination.next(context.buffer);
                        context.subscription.unsubscribe();
                        context.buffer = null;
                        context.subscription = null;
                    }
                    this.contexts = null;
                    _super.prototype._complete.call(this);
                };
                BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
                };
                BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
                    this.closeBuffer(innerSub.context);
                };
                BufferToggleSubscriber.prototype.openBuffer = function (value) {
                    try {
                        var closingSelector = this.closingSelector;
                        var closingNotifier = closingSelector.call(this, value);
                        if (closingNotifier) {
                            this.trySubscribe(closingNotifier);
                        }
                    }
                    catch (err) {
                        this._error(err);
                    }
                };
                BufferToggleSubscriber.prototype.closeBuffer = function (context) {
                    var contexts = this.contexts;
                    if (contexts && context) {
                        var buffer = context.buffer, subscription = context.subscription;
                        this.destination.next(buffer);
                        contexts.splice(contexts.indexOf(context), 1);
                        this.remove(subscription);
                        subscription.unsubscribe();
                    }
                };
                BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
                    var contexts = this.contexts;
                    var buffer = [];
                    var subscription = new Subscription_1.Subscription();
                    var context = { buffer: buffer, subscription: subscription };
                    contexts.push(context);
                    var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
                    if (!innerSubscription || innerSubscription.isUnsubscribed) {
                        this.closeBuffer(context);
                    }
                    else {
                        innerSubscription.context = context;
                        this.add(innerSubscription);
                        subscription.add(innerSubscription);
                    }
                };
                return BufferToggleSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2J1ZmZlclRvZ2dsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQ0c7SUFDSCxzQkFBbUMsUUFBa0MsRUFDbEMsZUFBeUQ7UUFDMUYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBb0IsQ0FBTyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBSEQsdUNBR0MsQ0FBQTs7Ozs7Ozs7Ozs7OztZQU1EO2dCQUVFLDhCQUFvQixRQUFrQyxFQUNsQyxlQUF5RDtvQkFEekQsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7b0JBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUEwQztnQkFDN0UsQ0FBQztnQkFFRCxtQ0FBSSxHQUFKLFVBQUssVUFBMkIsRUFBRSxNQUFXO29CQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUN4RyxDQUFDO2dCQUNILDJCQUFDO1lBQUQsQ0FUQSxBQVNDLElBQUE7WUFPRDs7OztlQUlHO1lBQ0g7Z0JBQTJDLDBDQUFxQjtnQkFHOUQsZ0NBQVksV0FBNEIsRUFDcEIsUUFBa0MsRUFDbEMsZUFBZ0U7b0JBQ2xGLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUZELGFBQVEsR0FBUixRQUFRLENBQTBCO29CQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUQ7b0JBSjVFLGFBQVEsR0FBNEIsRUFBRSxDQUFDO29CQU03QyxJQUFJLENBQUMsR0FBRyxDQUFDLHFDQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDO2dCQUVTLHNDQUFLLEdBQWYsVUFBZ0IsS0FBUTtv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QkFBQztZQUFELENBaEdBLEFBZ0dDLENBaEcwQyxpQ0FBZSxHQWdHekQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvYnVmZmVyVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcGVyYXRvcn0gZnJvbSAnLi4vT3BlcmF0b3InO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaWJhYmxlT3JQcm9taXNlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtJbm5lclN1YnNjcmliZXJ9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5cbi8qKlxuICogQnVmZmVycyB0aGUgc291cmNlIE9ic2VydmFibGUgdmFsdWVzIHN0YXJ0aW5nIGZyb20gYW4gZW1pc3Npb24gZnJvbVxuICogYG9wZW5pbmdzYCBhbmQgZW5kaW5nIHdoZW4gdGhlIG91dHB1dCBvZiBgY2xvc2luZ1NlbGVjdG9yYCBlbWl0cy5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+Q29sbGVjdHMgdmFsdWVzIGZyb20gdGhlIHBhc3QgYXMgYW4gYXJyYXkuIFN0YXJ0c1xuICogY29sbGVjdGluZyBvbmx5IHdoZW4gYG9wZW5pbmdgIGVtaXRzLCBhbmQgY2FsbHMgdGhlIGBjbG9zaW5nU2VsZWN0b3JgXG4gKiBmdW5jdGlvbiB0byBnZXQgYW4gT2JzZXJ2YWJsZSB0aGF0IHRlbGxzIHdoZW4gdG8gY2xvc2UgdGhlIGJ1ZmZlci48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9idWZmZXJUb2dnbGUucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQnVmZmVycyB2YWx1ZXMgZnJvbSB0aGUgc291cmNlIGJ5IG9wZW5pbmcgdGhlIGJ1ZmZlciB2aWEgc2lnbmFscyBmcm9tIGFuXG4gKiBPYnNlcnZhYmxlIHByb3ZpZGVkIHRvIGBvcGVuaW5nc2AsIGFuZCBjbG9zaW5nIGFuZCBzZW5kaW5nIHRoZSBidWZmZXJzIHdoZW5cbiAqIGEgU3Vic2NyaWJhYmxlIG9yIFByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGBjbG9zaW5nU2VsZWN0b3JgIGZ1bmN0aW9uIGVtaXRzLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkV2ZXJ5IG90aGVyIHNlY29uZCwgZW1pdCB0aGUgY2xpY2sgZXZlbnRzIGZyb20gdGhlIG5leHQgNTAwbXM8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIG9wZW5pbmdzID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAqIHZhciBidWZmZXJlZCA9IGNsaWNrcy5idWZmZXJUb2dnbGUob3BlbmluZ3MsIGkgPT5cbiAqICAgaSAlIDIgPyBSeC5PYnNlcnZhYmxlLmludGVydmFsKDUwMCkgOiBSeC5PYnNlcnZhYmxlLmVtcHR5KClcbiAqICk7XG4gKiBidWZmZXJlZC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgYnVmZmVyfVxuICogQHNlZSB7QGxpbmsgYnVmZmVyQ291bnR9XG4gKiBAc2VlIHtAbGluayBidWZmZXJUaW1lfVxuICogQHNlZSB7QGxpbmsgYnVmZmVyV2hlbn1cbiAqIEBzZWUge0BsaW5rIHdpbmRvd1RvZ2dsZX1cbiAqXG4gKiBAcGFyYW0ge1N1YnNjcmliYWJsZU9yUHJvbWlzZTxPPn0gb3BlbmluZ3MgQSBTdWJzY3JpYmFibGUgb3IgUHJvbWlzZSBvZiBub3RpZmljYXRpb25zIHRvIHN0YXJ0IG5ld1xuICogYnVmZmVycy5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24odmFsdWU6IE8pOiBTdWJzY3JpYmFibGVPclByb21pc2V9IGNsb3NpbmdTZWxlY3RvciBBIGZ1bmN0aW9uIHRoYXQgdGFrZXNcbiAqIHRoZSB2YWx1ZSBlbWl0dGVkIGJ5IHRoZSBgb3BlbmluZ3NgIG9ic2VydmFibGUgYW5kIHJldHVybnMgYSBTdWJzY3JpYmFibGUgb3IgUHJvbWlzZSxcbiAqIHdoaWNoLCB3aGVuIGl0IGVtaXRzLCBzaWduYWxzIHRoYXQgdGhlIGFzc29jaWF0ZWQgYnVmZmVyIHNob3VsZCBiZSBlbWl0dGVkXG4gKiBhbmQgY2xlYXJlZC5cbiAqIEByZXR1cm4ge09ic2VydmFibGU8VFtdPn0gQW4gb2JzZXJ2YWJsZSBvZiBhcnJheXMgb2YgYnVmZmVyZWQgdmFsdWVzLlxuICogQG1ldGhvZCBidWZmZXJUb2dnbGVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXJUb2dnbGU8VCwgTz4ob3BlbmluZ3M6IFN1YnNjcmliYWJsZU9yUHJvbWlzZTxPPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2luZ1NlbGVjdG9yOiAodmFsdWU6IE8pID0+IFN1YnNjcmliYWJsZU9yUHJvbWlzZTxhbnk+KTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgQnVmZmVyVG9nZ2xlT3BlcmF0b3I8VCwgTz4ob3BlbmluZ3MsIGNsb3NpbmdTZWxlY3RvcikpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1ZmZlclRvZ2dsZVNpZ25hdHVyZTxUPiB7XG4gIDxPPihvcGVuaW5nczogU3Vic2NyaWJhYmxlT3JQcm9taXNlPE8+LCBjbG9zaW5nU2VsZWN0b3I6ICh2YWx1ZTogTykgPT4gU3Vic2NyaWJhYmxlT3JQcm9taXNlPGFueT4pOiBPYnNlcnZhYmxlPFRbXT47XG59XG5cbmNsYXNzIEJ1ZmZlclRvZ2dsZU9wZXJhdG9yPFQsIE8+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgVFtdPiB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcGVuaW5nczogU3Vic2NyaWJhYmxlT3JQcm9taXNlPE8+LFxuICAgICAgICAgICAgICBwcml2YXRlIGNsb3NpbmdTZWxlY3RvcjogKHZhbHVlOiBPKSA9PiBTdWJzY3JpYmFibGVPclByb21pc2U8YW55Pikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFRbXT4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IEJ1ZmZlclRvZ2dsZVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5vcGVuaW5ncywgdGhpcy5jbG9zaW5nU2VsZWN0b3IpKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgQnVmZmVyQ29udGV4dDxUPiB7XG4gIGJ1ZmZlcjogVFtdO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIEJ1ZmZlclRvZ2dsZVN1YnNjcmliZXI8VCwgTz4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgTz4ge1xuICBwcml2YXRlIGNvbnRleHRzOiBBcnJheTxCdWZmZXJDb250ZXh0PFQ+PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFRbXT4sXG4gICAgICAgICAgICAgIHByaXZhdGUgb3BlbmluZ3M6IFN1YnNjcmliYWJsZU9yUHJvbWlzZTxPPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjbG9zaW5nU2VsZWN0b3I6ICh2YWx1ZTogTykgPT4gU3Vic2NyaWJhYmxlT3JQcm9taXNlPGFueT4gfCB2b2lkKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9wZW5pbmdzKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuY29udGV4dHM7XG4gICAgY29uc3QgbGVuID0gY29udGV4dHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnRleHRzW2ldLmJ1ZmZlci5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Vycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgY29uc3QgY29udGV4dHMgPSB0aGlzLmNvbnRleHRzO1xuICAgIHdoaWxlIChjb250ZXh0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gY29udGV4dHMuc2hpZnQoKTtcbiAgICAgIGNvbnRleHQuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBjb250ZXh0LmJ1ZmZlciA9IG51bGw7XG4gICAgICBjb250ZXh0LnN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dHMgPSBudWxsO1xuICAgIHN1cGVyLl9lcnJvcihlcnIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuY29udGV4dHM7XG4gICAgd2hpbGUgKGNvbnRleHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjb250ZXh0cy5zaGlmdCgpO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGNvbnRleHQuYnVmZmVyKTtcbiAgICAgIGNvbnRleHQuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBjb250ZXh0LmJ1ZmZlciA9IG51bGw7XG4gICAgICBjb250ZXh0LnN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dHMgPSBudWxsO1xuICAgIHN1cGVyLl9jb21wbGV0ZSgpO1xuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBhbnksIGlubmVyVmFsdWU6IE8sXG4gICAgICAgICAgICAgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIsXG4gICAgICAgICAgICAgaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBPPik6IHZvaWQge1xuICAgIG91dGVyVmFsdWUgPyB0aGlzLmNsb3NlQnVmZmVyKG91dGVyVmFsdWUpIDogdGhpcy5vcGVuQnVmZmVyKGlubmVyVmFsdWUpO1xuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBPPik6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VCdWZmZXIoKDxhbnk+IGlubmVyU3ViKS5jb250ZXh0KTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbkJ1ZmZlcih2YWx1ZTogTyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjbG9zaW5nU2VsZWN0b3IgPSB0aGlzLmNsb3NpbmdTZWxlY3RvcjtcbiAgICAgIGNvbnN0IGNsb3NpbmdOb3RpZmllciA9IGNsb3NpbmdTZWxlY3Rvci5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgIGlmIChjbG9zaW5nTm90aWZpZXIpIHtcbiAgICAgICAgdGhpcy50cnlTdWJzY3JpYmUoY2xvc2luZ05vdGlmaWVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZUJ1ZmZlcihjb250ZXh0OiBCdWZmZXJDb250ZXh0PFQ+KTogdm9pZCB7XG4gICAgY29uc3QgY29udGV4dHMgPSB0aGlzLmNvbnRleHRzO1xuXG4gICAgaWYgKGNvbnRleHRzICYmIGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHsgYnVmZmVyLCBzdWJzY3JpcHRpb24gfSA9IGNvbnRleHQ7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoYnVmZmVyKTtcbiAgICAgIGNvbnRleHRzLnNwbGljZShjb250ZXh0cy5pbmRleE9mKGNvbnRleHQpLCAxKTtcbiAgICAgIHRoaXMucmVtb3ZlKHN1YnNjcmlwdGlvbik7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyeVN1YnNjcmliZShjbG9zaW5nTm90aWZpZXI6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRleHRzID0gdGhpcy5jb250ZXh0cztcblxuICAgIGNvbnN0IGJ1ZmZlcjogQXJyYXk8VD4gPSBbXTtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgY29uc3QgY29udGV4dCA9IHsgYnVmZmVyLCBzdWJzY3JpcHRpb24gfTtcbiAgICBjb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaW5uZXJTdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBjbG9zaW5nTm90aWZpZXIsIDxhbnk+Y29udGV4dCk7XG5cbiAgICBpZiAoIWlubmVyU3Vic2NyaXB0aW9uIHx8IGlubmVyU3Vic2NyaXB0aW9uLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICB0aGlzLmNsb3NlQnVmZmVyKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAoPGFueT4gaW5uZXJTdWJzY3JpcHRpb24pLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICB0aGlzLmFkZChpbm5lclN1YnNjcmlwdGlvbik7XG4gICAgICBzdWJzY3JpcHRpb24uYWRkKGlubmVyU3Vic2NyaXB0aW9uKTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
