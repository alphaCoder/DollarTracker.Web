System.register(['../Subscription', '../util/tryCatch', '../util/errorObject', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscription_1, tryCatch_1, errorObject_1, OuterSubscriber_1, subscribeToResult_1;
    var BufferWhenOperator, BufferWhenSubscriber;
    /**
     * Buffers the source Observable values, using a factory function of closing
     * Observables to determine when to close, emit, and reset the buffer.
     *
     * <span class="informal">Collects values from the past as an array. When it
     * starts collecting values, it calls a function that returns an Observable that
     * tells when to close the buffer and restart collecting.</span>
     *
     * <img src="./img/bufferWhen.png" width="100%">
     *
     * Opens a buffer immediately, then closes the buffer when the observable
     * returned by calling `closingSelector` function emits a value. When it closes
     * the buffer, it immediately opens a new buffer and repeats the process.
     *
     * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var buffered = clicks.bufferWhen(() =>
     *   Rx.Observable.interval(1000 + Math.random() * 4000)
     * );
     * buffered.subscribe(x => console.log(x));
     *
     * @see {@link buffer}
     * @see {@link bufferCount}
     * @see {@link bufferTime}
     * @see {@link bufferToggle}
     * @see {@link windowWhen}
     *
     * @param {function(): Observable} closingSelector A function that takes no
     * arguments and returns an Observable that signals buffer closure.
     * @return {Observable<T[]>} An observable of arrays of buffered values.
     * @method bufferWhen
     * @owner Observable
     */
    function bufferWhen(closingSelector) {
        return this.lift(new BufferWhenOperator(closingSelector));
    }
    exports_1("bufferWhen", bufferWhen);
    return {
        setters:[
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            BufferWhenOperator = (function () {
                function BufferWhenOperator(closingSelector) {
                    this.closingSelector = closingSelector;
                }
                BufferWhenOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
                };
                return BufferWhenOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            BufferWhenSubscriber = (function (_super) {
                __extends(BufferWhenSubscriber, _super);
                function BufferWhenSubscriber(destination, closingSelector) {
                    _super.call(this, destination);
                    this.closingSelector = closingSelector;
                    this.subscribing = false;
                    this.openBuffer();
                }
                BufferWhenSubscriber.prototype._next = function (value) {
                    this.buffer.push(value);
                };
                BufferWhenSubscriber.prototype._complete = function () {
                    var buffer = this.buffer;
                    if (buffer) {
                        this.destination.next(buffer);
                    }
                    _super.prototype._complete.call(this);
                };
                BufferWhenSubscriber.prototype._unsubscribe = function () {
                    this.buffer = null;
                    this.subscribing = false;
                };
                BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.openBuffer();
                };
                BufferWhenSubscriber.prototype.notifyComplete = function () {
                    if (this.subscribing) {
                        this.complete();
                    }
                    else {
                        this.openBuffer();
                    }
                };
                BufferWhenSubscriber.prototype.openBuffer = function () {
                    var closingSubscription = this.closingSubscription;
                    if (closingSubscription) {
                        this.remove(closingSubscription);
                        closingSubscription.unsubscribe();
                    }
                    var buffer = this.buffer;
                    if (this.buffer) {
                        this.destination.next(buffer);
                    }
                    this.buffer = [];
                    var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
                    if (closingNotifier === errorObject_1.errorObject) {
                        this.error(errorObject_1.errorObject.e);
                    }
                    else {
                        closingSubscription = new Subscription_1.Subscription();
                        this.closingSubscription = closingSubscription;
                        this.add(closingSubscription);
                        this.subscribing = true;
                        closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
                        this.subscribing = false;
                    }
                };
                return BufferWhenSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2J1ZmZlcldoZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWdDRztJQUNILG9CQUE4QixlQUFzQztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUZELG1DQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNRDtnQkFFRSw0QkFBb0IsZUFBc0M7b0JBQXRDLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtnQkFDMUQsQ0FBQztnQkFFRCxpQ0FBSSxHQUFKLFVBQUssVUFBMkIsRUFBRSxNQUFXO29CQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDdkYsQ0FBQztnQkFDSCx5QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFzQyx3Q0FBdUI7Z0JBSzNELDhCQUFZLFdBQTRCLEVBQVUsZUFBc0M7b0JBQ3RGLGtCQUFNLFdBQVcsQ0FBQyxDQUFDO29CQUQ2QixvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7b0JBSGhGLGdCQUFXLEdBQVksS0FBSyxDQUFDO29CQUtuQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRVMsb0NBQUssR0FBZixVQUFnQixLQUFRO29CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFFUyx3Q0FBUyxHQUFuQjtvQkFDRSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUMzQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNoQyxDQUFDO29CQUNELGdCQUFLLENBQUMsU0FBUyxXQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRVMsMkNBQVksR0FBdEI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELHlDQUFVLEdBQVYsVUFBVyxVQUFhLEVBQUUsVUFBZSxFQUM5QixVQUFrQixFQUFFLFVBQWtCLEVBQ3RDLFFBQWlDO29CQUMxQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQsNkNBQWMsR0FBZDtvQkFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNsQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELHlDQUFVLEdBQVY7b0JBRVEsa0RBQW1CLENBQVU7b0JBRW5DLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUNqQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDcEMsQ0FBQztvQkFFRCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hDLENBQUM7b0JBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7b0JBRWpCLElBQU0sZUFBZSxHQUFHLG1CQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7b0JBRXpELEVBQUUsQ0FBQyxDQUFDLGVBQWUsS0FBSyx5QkFBVyxDQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLG1CQUFtQixHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO3dCQUN6QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7d0JBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQ3hCLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDbEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCwyQkFBQztZQUFELENBdEVBLEFBc0VDLENBdEVxQyxpQ0FBZSxHQXNFcEQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3IvYnVmZmVyV2hlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge3RyeUNhdGNofSBmcm9tICcuLi91dGlsL3RyeUNhdGNoJztcbmltcG9ydCB7ZXJyb3JPYmplY3R9IGZyb20gJy4uL3V0aWwvZXJyb3JPYmplY3QnO1xuXG5pbXBvcnQge091dGVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7SW5uZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9Jbm5lclN1YnNjcmliZXInO1xuaW1wb3J0IHtzdWJzY3JpYmVUb1Jlc3VsdH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5cbi8qKlxuICogQnVmZmVycyB0aGUgc291cmNlIE9ic2VydmFibGUgdmFsdWVzLCB1c2luZyBhIGZhY3RvcnkgZnVuY3Rpb24gb2YgY2xvc2luZ1xuICogT2JzZXJ2YWJsZXMgdG8gZGV0ZXJtaW5lIHdoZW4gdG8gY2xvc2UsIGVtaXQsIGFuZCByZXNldCB0aGUgYnVmZmVyLlxuICpcbiAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5Db2xsZWN0cyB2YWx1ZXMgZnJvbSB0aGUgcGFzdCBhcyBhbiBhcnJheS4gV2hlbiBpdFxuICogc3RhcnRzIGNvbGxlY3RpbmcgdmFsdWVzLCBpdCBjYWxscyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXRcbiAqIHRlbGxzIHdoZW4gdG8gY2xvc2UgdGhlIGJ1ZmZlciBhbmQgcmVzdGFydCBjb2xsZWN0aW5nLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2J1ZmZlcldoZW4ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogT3BlbnMgYSBidWZmZXIgaW1tZWRpYXRlbHksIHRoZW4gY2xvc2VzIHRoZSBidWZmZXIgd2hlbiB0aGUgb2JzZXJ2YWJsZVxuICogcmV0dXJuZWQgYnkgY2FsbGluZyBgY2xvc2luZ1NlbGVjdG9yYCBmdW5jdGlvbiBlbWl0cyBhIHZhbHVlLiBXaGVuIGl0IGNsb3Nlc1xuICogdGhlIGJ1ZmZlciwgaXQgaW1tZWRpYXRlbHkgb3BlbnMgYSBuZXcgYnVmZmVyIGFuZCByZXBlYXRzIHRoZSBwcm9jZXNzLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgYW4gYXJyYXkgb2YgdGhlIGxhc3QgY2xpY2tzIGV2ZXJ5IFsxLTVdIHJhbmRvbSBzZWNvbmRzPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciBidWZmZXJlZCA9IGNsaWNrcy5idWZmZXJXaGVuKCgpID0+XG4gKiAgIFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCArIE1hdGgucmFuZG9tKCkgKiA0MDAwKVxuICogKTtcbiAqIGJ1ZmZlcmVkLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBidWZmZXJ9XG4gKiBAc2VlIHtAbGluayBidWZmZXJDb3VudH1cbiAqIEBzZWUge0BsaW5rIGJ1ZmZlclRpbWV9XG4gKiBAc2VlIHtAbGluayBidWZmZXJUb2dnbGV9XG4gKiBAc2VlIHtAbGluayB3aW5kb3dXaGVufVxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKTogT2JzZXJ2YWJsZX0gY2xvc2luZ1NlbGVjdG9yIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogYXJndW1lbnRzIGFuZCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBzaWduYWxzIGJ1ZmZlciBjbG9zdXJlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxUW10+fSBBbiBvYnNlcnZhYmxlIG9mIGFycmF5cyBvZiBidWZmZXJlZCB2YWx1ZXMuXG4gKiBAbWV0aG9kIGJ1ZmZlcldoZW5cbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWZmZXJXaGVuPFQ+KGNsb3NpbmdTZWxlY3RvcjogKCkgPT4gT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgQnVmZmVyV2hlbk9wZXJhdG9yPFQ+KGNsb3NpbmdTZWxlY3RvcikpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1ZmZlcldoZW5TaWduYXR1cmU8VD4ge1xuICAoY2xvc2luZ1NlbGVjdG9yOiAoKSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPFRbXT47XG59XG5cbmNsYXNzIEJ1ZmZlcldoZW5PcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFRbXT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xvc2luZ1NlbGVjdG9yOiAoKSA9PiBPYnNlcnZhYmxlPGFueT4pIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUW10+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBCdWZmZXJXaGVuU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmNsb3NpbmdTZWxlY3RvcikpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBCdWZmZXJXaGVuU3Vic2NyaWJlcjxUPiBleHRlbmRzIE91dGVyU3Vic2NyaWJlcjxULCBhbnk+IHtcbiAgcHJpdmF0ZSBidWZmZXI6IFRbXTtcbiAgcHJpdmF0ZSBzdWJzY3JpYmluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGNsb3NpbmdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUW10+LCBwcml2YXRlIGNsb3NpbmdTZWxlY3RvcjogKCkgPT4gT2JzZXJ2YWJsZTxhbnk+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMub3BlbkJ1ZmZlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKSB7XG4gICAgdGhpcy5idWZmZXIucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgIGlmIChidWZmZXIpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChidWZmZXIpO1xuICAgIH1cbiAgICBzdXBlci5fY29tcGxldGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdW5zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5idWZmZXIgPSBudWxsO1xuICAgIHRoaXMuc3Vic2NyaWJpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIG5vdGlmeU5leHQob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogYW55LFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgYW55Pik6IHZvaWQge1xuICAgIHRoaXMub3BlbkJ1ZmZlcigpO1xuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaWJpbmcpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuQnVmZmVyKCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbkJ1ZmZlcigpIHtcblxuICAgIGxldCB7IGNsb3NpbmdTdWJzY3JpcHRpb24gfSA9IHRoaXM7XG5cbiAgICBpZiAoY2xvc2luZ1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZW1vdmUoY2xvc2luZ1N1YnNjcmlwdGlvbik7XG4gICAgICBjbG9zaW5nU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgaWYgKHRoaXMuYnVmZmVyKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQoYnVmZmVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuXG4gICAgY29uc3QgY2xvc2luZ05vdGlmaWVyID0gdHJ5Q2F0Y2godGhpcy5jbG9zaW5nU2VsZWN0b3IpKCk7XG5cbiAgICBpZiAoY2xvc2luZ05vdGlmaWVyID09PSBlcnJvck9iamVjdCkge1xuICAgICAgdGhpcy5lcnJvcihlcnJvck9iamVjdC5lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2luZ1N1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgIHRoaXMuY2xvc2luZ1N1YnNjcmlwdGlvbiA9IGNsb3NpbmdTdWJzY3JpcHRpb247XG4gICAgICB0aGlzLmFkZChjbG9zaW5nU3Vic2NyaXB0aW9uKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJpbmcgPSB0cnVlO1xuICAgICAgY2xvc2luZ1N1YnNjcmlwdGlvbi5hZGQoc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgY2xvc2luZ05vdGlmaWVyKSk7XG4gICAgICB0aGlzLnN1YnNjcmliaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
