System.register(['../Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1;
    var ErrorObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            ErrorObservable = (function (_super) {
                __extends(ErrorObservable, _super);
                function ErrorObservable(error, scheduler) {
                    _super.call(this);
                    this.error = error;
                    this.scheduler = scheduler;
                }
                /**
                 * Creates an Observable that emits no items to the Observer and immediately
                 * emits an error notification.
                 *
                 * <span class="informal">Just emits 'error', and nothing else.
                 * </span>
                 *
                 * <img src="./img/throw.png" width="100%">
                 *
                 * This static operator is useful for creating a simple Observable that only
                 * emits the error notification. It can be used for composing with other
                 * Observables, such as in a {@link mergeMap}.
                 *
                 * @example <caption>Emit the number 7, then emit an error.</caption>
                 * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
                 * result.subscribe(x => console.log(x), e => console.error(e));
                 *
                 * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
                 * var interval = Rx.Observable.interval(1000);
                 * var result = interval.mergeMap(x =>
                 *   x === 13 ?
                 *     Rx.Observable.throw('Thirteens are bad') :
                 *     Rx.Observable.of('a', 'b', 'c')
                 * );
                 * result.subscribe(x => console.log(x), e => console.error(e));
                 *
                 * @see {@link create}
                 * @see {@link empty}
                 * @see {@link never}
                 * @see {@link of}
                 *
                 * @param {any} error The particular Error to pass to the error notification.
                 * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
                 * the emission of the error notification.
                 * @return {Observable} An error Observable: emits only the error notification
                 * using the given error argument.
                 * @static true
                 * @name throw
                 * @owner Observable
                 */
                ErrorObservable.create = function (error, scheduler) {
                    return new ErrorObservable(error, scheduler);
                };
                ErrorObservable.dispatch = function (arg) {
                    var error = arg.error, subscriber = arg.subscriber;
                    subscriber.error(error);
                };
                ErrorObservable.prototype._subscribe = function (subscriber) {
                    var error = this.error;
                    var scheduler = this.scheduler;
                    if (scheduler) {
                        return scheduler.schedule(ErrorObservable.dispatch, 0, {
                            error: error, subscriber: subscriber
                        });
                    }
                    else {
                        subscriber.error(error);
                    }
                };
                return ErrorObservable;
            }(Observable_1.Observable));
            exports_1("ErrorObservable", ErrorObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvRXJyb3JPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTs7OztlQUlHO1lBQ0g7Z0JBQXFDLG1DQUFlO2dCQW1EbEQseUJBQW1CLEtBQVUsRUFBVSxTQUFxQjtvQkFDMUQsaUJBQU8sQ0FBQztvQkFEUyxVQUFLLEdBQUwsS0FBSyxDQUFLO29CQUFVLGNBQVMsR0FBVCxTQUFTLENBQVk7Z0JBRTVELENBQUM7Z0JBbkREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBdUNHO2dCQUNJLHNCQUFNLEdBQWIsVUFBaUIsS0FBVSxFQUFFLFNBQXFCO29CQUNoRCxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVNLHdCQUFRLEdBQWYsVUFBZ0IsR0FBZ0I7b0JBQ3RCLHFCQUFLLEVBQUUsMkJBQVUsQ0FBUztvQkFDbEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFNUyxvQ0FBVSxHQUFwQixVQUFxQixVQUFlO29CQUNsQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN6QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUVqQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNkLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFOzRCQUNyRCxPQUFBLEtBQUssRUFBRSxZQUFBLFVBQVU7eUJBQ2xCLENBQUMsQ0FBQztvQkFDTCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBbkVBLEFBbUVDLENBbkVvQyx1QkFBVSxHQW1FOUM7WUFuRUQsNkNBbUVDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9FcnJvck9ic2VydmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1RlYXJkb3duTG9naWN9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGF0Y2hBcmcge1xuICBlcnJvcjogYW55O1xuICBzdWJzY3JpYmVyOiBhbnk7XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgRXJyb3JPYnNlcnZhYmxlIGV4dGVuZHMgT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgbm8gaXRlbXMgdG8gdGhlIE9ic2VydmVyIGFuZCBpbW1lZGlhdGVseVxuICAgKiBlbWl0cyBhbiBlcnJvciBub3RpZmljYXRpb24uXG4gICAqXG4gICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5KdXN0IGVtaXRzICdlcnJvcicsIGFuZCBub3RoaW5nIGVsc2UuXG4gICAqIDwvc3Bhbj5cbiAgICpcbiAgICogPGltZyBzcmM9XCIuL2ltZy90aHJvdy5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICpcbiAgICogVGhpcyBzdGF0aWMgb3BlcmF0b3IgaXMgdXNlZnVsIGZvciBjcmVhdGluZyBhIHNpbXBsZSBPYnNlcnZhYmxlIHRoYXQgb25seVxuICAgKiBlbWl0cyB0aGUgZXJyb3Igbm90aWZpY2F0aW9uLiBJdCBjYW4gYmUgdXNlZCBmb3IgY29tcG9zaW5nIHdpdGggb3RoZXJcbiAgICogT2JzZXJ2YWJsZXMsIHN1Y2ggYXMgaW4gYSB7QGxpbmsgbWVyZ2VNYXB9LlxuICAgKlxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0IHRoZSBudW1iZXIgNywgdGhlbiBlbWl0IGFuIGVycm9yLjwvY2FwdGlvbj5cbiAgICogdmFyIHJlc3VsdCA9IFJ4Lk9ic2VydmFibGUudGhyb3cobmV3IEVycm9yKCdvb3BzIScpKS5zdGFydFdpdGgoNyk7XG4gICAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSwgZSA9PiBjb25zb2xlLmVycm9yKGUpKTtcbiAgICpcbiAgICogQGV4YW1wbGUgPGNhcHRpb24+TWFwIGFuZCBmbGF0dGVucyBudW1iZXJzIHRvIHRoZSBzZXF1ZW5jZSAnYScsICdiJywgJ2MnLCBidXQgdGhyb3cgYW4gZXJyb3IgZm9yIDEzPC9jYXB0aW9uPlxuICAgKiB2YXIgaW50ZXJ2YWwgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICAgKiB2YXIgcmVzdWx0ID0gaW50ZXJ2YWwubWVyZ2VNYXAoeCA9PlxuICAgKiAgIHggPT09IDEzID9cbiAgICogICAgIFJ4Lk9ic2VydmFibGUudGhyb3coJ1RoaXJ0ZWVucyBhcmUgYmFkJykgOlxuICAgKiAgICAgUnguT2JzZXJ2YWJsZS5vZignYScsICdiJywgJ2MnKVxuICAgKiApO1xuICAgKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCksIGUgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gICAqXG4gICAqIEBzZWUge0BsaW5rIGNyZWF0ZX1cbiAgICogQHNlZSB7QGxpbmsgZW1wdHl9XG4gICAqIEBzZWUge0BsaW5rIG5ldmVyfVxuICAgKiBAc2VlIHtAbGluayBvZn1cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IGVycm9yIFRoZSBwYXJ0aWN1bGFyIEVycm9yIHRvIHBhc3MgdG8gdGhlIGVycm9yIG5vdGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIEEge0BsaW5rIFNjaGVkdWxlcn0gdG8gdXNlIGZvciBzY2hlZHVsaW5nXG4gICAqIHRoZSBlbWlzc2lvbiBvZiB0aGUgZXJyb3Igbm90aWZpY2F0aW9uLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBlcnJvciBPYnNlcnZhYmxlOiBlbWl0cyBvbmx5IHRoZSBlcnJvciBub3RpZmljYXRpb25cbiAgICogdXNpbmcgdGhlIGdpdmVuIGVycm9yIGFyZ3VtZW50LlxuICAgKiBAc3RhdGljIHRydWVcbiAgICogQG5hbWUgdGhyb3dcbiAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICovXG4gIHN0YXRpYyBjcmVhdGU8VD4oZXJyb3I6IGFueSwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvck9ic2VydmFibGUoZXJyb3IsIHNjaGVkdWxlcik7XG4gIH1cblxuICBzdGF0aWMgZGlzcGF0Y2goYXJnOiBEaXNwYXRjaEFyZykge1xuICAgIGNvbnN0IHsgZXJyb3IsIHN1YnNjcmliZXIgfSA9IGFyZztcbiAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlcnJvcjogYW55LCBwcml2YXRlIHNjaGVkdWxlcj86IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBhbnkpOiBUZWFyZG93bkxvZ2ljIHtcbiAgICBjb25zdCBlcnJvciA9IHRoaXMuZXJyb3I7XG4gICAgY29uc3Qgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG5cbiAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKEVycm9yT2JzZXJ2YWJsZS5kaXNwYXRjaCwgMCwge1xuICAgICAgICBlcnJvciwgc3Vic2NyaWJlclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
