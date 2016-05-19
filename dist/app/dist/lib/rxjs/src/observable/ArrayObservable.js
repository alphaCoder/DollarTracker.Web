System.register(['../Observable', './ScalarObservable', './EmptyObservable', '../util/isScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, ScalarObservable_1, EmptyObservable_1, isScheduler_1;
    var ArrayObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (ScalarObservable_1_1) {
                ScalarObservable_1 = ScalarObservable_1_1;
            },
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            },
            function (isScheduler_1_1) {
                isScheduler_1 = isScheduler_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            ArrayObservable = (function (_super) {
                __extends(ArrayObservable, _super);
                function ArrayObservable(array, scheduler) {
                    _super.call(this);
                    this.array = array;
                    this.scheduler = scheduler;
                    if (!scheduler && array.length === 1) {
                        this._isScalar = true;
                        this.value = array[0];
                    }
                }
                ArrayObservable.create = function (array, scheduler) {
                    return new ArrayObservable(array, scheduler);
                };
                /**
                 * Creates an Observable that emits some values you specify as arguments,
                 * immediately one after the other, and then emits a complete notification.
                 *
                 * <span class="informal">Emits the arguments you provide, then completes.
                 * </span>
                 *
                 * <img src="./img/of.png" width="100%">
                 *
                 * This static operator is useful for creating a simple Observable that only
                 * emits the arguments given, and the complete notification thereafter. It can
                 * be used for composing with other Observables, such as with {@link concat}.
                 * By default, it uses a `null` Scheduler, which means the `next`
                 * notifications are sent synchronously, although with a different Scheduler
                 * it is possible to determine when those notifications will be delivered.
                 *
                 * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
                 * var numbers = Rx.Observable.of(10, 20, 30);
                 * var letters = Rx.Observable.of('a', 'b', 'c');
                 * var interval = Rx.Observable.interval(1000);
                 * var result = numbers.concat(letters).concat(interval);
                 * result.subscribe(x => console.log(x));
                 *
                 * @see {@link create}
                 * @see {@link empty}
                 * @see {@link never}
                 * @see {@link throw}
                 *
                 * @param {...T} values Arguments that represent `next` values to be emitted.
                 * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
                 * the emissions of the `next` notifications.
                 * @return {Observable<T>} An Observable that emits each given input value.
                 * @static true
                 * @name of
                 * @owner Observable
                 */
                ArrayObservable.of = function () {
                    var array = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        array[_i - 0] = arguments[_i];
                    }
                    var scheduler = array[array.length - 1];
                    if (isScheduler_1.isScheduler(scheduler)) {
                        array.pop();
                    }
                    else {
                        scheduler = null;
                    }
                    var len = array.length;
                    if (len > 1) {
                        return new ArrayObservable(array, scheduler);
                    }
                    else if (len === 1) {
                        return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
                    }
                    else {
                        return new EmptyObservable_1.EmptyObservable(scheduler);
                    }
                };
                ArrayObservable.dispatch = function (state) {
                    var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
                    if (index >= count) {
                        subscriber.complete();
                        return;
                    }
                    subscriber.next(array[index]);
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    state.index = index + 1;
                    this.schedule(state);
                };
                ArrayObservable.prototype._subscribe = function (subscriber) {
                    var index = 0;
                    var array = this.array;
                    var count = array.length;
                    var scheduler = this.scheduler;
                    if (scheduler) {
                        return scheduler.schedule(ArrayObservable.dispatch, 0, {
                            array: array, index: index, count: count, subscriber: subscriber
                        });
                    }
                    else {
                        for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
                            subscriber.next(array[i]);
                        }
                        subscriber.complete();
                    }
                };
                return ArrayObservable;
            }(Observable_1.Observable));
            exports_1("ArrayObservable", ArrayObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvQXJyYXlPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTs7OztlQUlHO1lBQ0g7Z0JBQXdDLG1DQUFhO2dCQTBGbkQseUJBQW1CLEtBQVUsRUFBUyxTQUFxQjtvQkFDekQsaUJBQU8sQ0FBQztvQkFEUyxVQUFLLEdBQUwsS0FBSyxDQUFLO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQVk7b0JBRXpELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN4QixDQUFDO2dCQUNILENBQUM7Z0JBOUZNLHNCQUFNLEdBQWIsVUFBaUIsS0FBVSxFQUFFLFNBQXFCO29CQUNoRCxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQVNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFtQ0c7Z0JBQ0ksa0JBQUUsR0FBVDtvQkFBYSxlQUE4Qjt5QkFBOUIsV0FBOEIsQ0FBOUIsc0JBQThCLENBQTlCLElBQThCO3dCQUE5Qiw4QkFBOEI7O29CQUN6QyxJQUFJLFNBQVMsR0FBYyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbkQsRUFBRSxDQUFDLENBQUMseUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDZCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ25CLENBQUM7b0JBRUQsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1osTUFBTSxDQUFDLElBQUksZUFBZSxDQUFTLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLG1DQUFnQixDQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDM0QsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsSUFBSSxpQ0FBZSxDQUFJLFNBQVMsQ0FBQyxDQUFDO29CQUMzQyxDQUFDO2dCQUNILENBQUM7Z0JBRU0sd0JBQVEsR0FBZixVQUFnQixLQUFVO29CQUVoQix1QkFBSyxFQUFFLG1CQUFLLEVBQUUsbUJBQUssRUFBRSw2QkFBVSxDQUFXO29CQUVsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUN0QixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFFRCxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUU5QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBRUQsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUVqQixJQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQWFTLG9DQUFVLEdBQXBCLFVBQXFCLFVBQXlCO29CQUM1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDekIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDM0IsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFFakMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTs0QkFDckQsT0FBQSxLQUFLLEVBQUUsT0FBQSxLQUFLLEVBQUUsT0FBQSxLQUFLLEVBQUUsWUFBQSxVQUFVO3lCQUNoQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsQ0FBQzt3QkFDRCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBbkhBLEFBbUhDLENBbkh1Qyx1QkFBVSxHQW1IakQ7WUFuSEQsNkNBbUhDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9BcnJheU9ic2VydmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1NjYWxhck9ic2VydmFibGV9IGZyb20gJy4vU2NhbGFyT2JzZXJ2YWJsZSc7XG5pbXBvcnQge0VtcHR5T2JzZXJ2YWJsZX0gZnJvbSAnLi9FbXB0eU9ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7aXNTY2hlZHVsZXJ9IGZyb20gJy4uL3V0aWwvaXNTY2hlZHVsZXInO1xuaW1wb3J0IHtUZWFyZG93bkxvZ2ljfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5T2JzZXJ2YWJsZTxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuXG4gIHN0YXRpYyBjcmVhdGU8VD4oYXJyYXk6IFRbXSwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBBcnJheU9ic2VydmFibGUoYXJyYXksIHNjaGVkdWxlcik7XG4gIH1cblxuICBzdGF0aWMgb2Y8VD4oaXRlbTE6IFQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD47XG4gIHN0YXRpYyBvZjxUPihpdGVtMTogVCwgaXRlbTI6IFQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD47XG4gIHN0YXRpYyBvZjxUPihpdGVtMTogVCwgaXRlbTI6IFQsIGl0ZW0zOiBULCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+O1xuICBzdGF0aWMgb2Y8VD4oaXRlbTE6IFQsIGl0ZW0yOiBULCBpdGVtMzogVCwgaXRlbTQ6IFQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD47XG4gIHN0YXRpYyBvZjxUPihpdGVtMTogVCwgaXRlbTI6IFQsIGl0ZW0zOiBULCBpdGVtNDogVCwgaXRlbTU6IFQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IE9ic2VydmFibGU8VD47XG4gIHN0YXRpYyBvZjxUPihpdGVtMTogVCwgaXRlbTI6IFQsIGl0ZW0zOiBULCBpdGVtNDogVCwgaXRlbTU6IFQsIGl0ZW02OiBULCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPFQ+O1xuICBzdGF0aWMgb2Y8VD4oLi4uYXJyYXk6IEFycmF5PFQgfCBTY2hlZHVsZXI+KTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHNvbWUgdmFsdWVzIHlvdSBzcGVjaWZ5IGFzIGFyZ3VtZW50cyxcbiAgICogaW1tZWRpYXRlbHkgb25lIGFmdGVyIHRoZSBvdGhlciwgYW5kIHRoZW4gZW1pdHMgYSBjb21wbGV0ZSBub3RpZmljYXRpb24uXG4gICAqXG4gICAqIDxzcGFuIGNsYXNzPVwiaW5mb3JtYWxcIj5FbWl0cyB0aGUgYXJndW1lbnRzIHlvdSBwcm92aWRlLCB0aGVuIGNvbXBsZXRlcy5cbiAgICogPC9zcGFuPlxuICAgKlxuICAgKiA8aW1nIHNyYz1cIi4vaW1nL29mLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgKlxuICAgKiBUaGlzIHN0YXRpYyBvcGVyYXRvciBpcyB1c2VmdWwgZm9yIGNyZWF0aW5nIGEgc2ltcGxlIE9ic2VydmFibGUgdGhhdCBvbmx5XG4gICAqIGVtaXRzIHRoZSBhcmd1bWVudHMgZ2l2ZW4sIGFuZCB0aGUgY29tcGxldGUgbm90aWZpY2F0aW9uIHRoZXJlYWZ0ZXIuIEl0IGNhblxuICAgKiBiZSB1c2VkIGZvciBjb21wb3Npbmcgd2l0aCBvdGhlciBPYnNlcnZhYmxlcywgc3VjaCBhcyB3aXRoIHtAbGluayBjb25jYXR9LlxuICAgKiBCeSBkZWZhdWx0LCBpdCB1c2VzIGEgYG51bGxgIFNjaGVkdWxlciwgd2hpY2ggbWVhbnMgdGhlIGBuZXh0YFxuICAgKiBub3RpZmljYXRpb25zIGFyZSBzZW50IHN5bmNocm9ub3VzbHksIGFsdGhvdWdoIHdpdGggYSBkaWZmZXJlbnQgU2NoZWR1bGVyXG4gICAqIGl0IGlzIHBvc3NpYmxlIHRvIGRldGVybWluZSB3aGVuIHRob3NlIG5vdGlmaWNhdGlvbnMgd2lsbCBiZSBkZWxpdmVyZWQuXG4gICAqXG4gICAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgMTAsIDIwLCAzMCwgdGhlbiAnYScsICdiJywgJ2MnLCB0aGVuIHN0YXJ0IHRpY2tpbmcgZXZlcnkgc2Vjb25kLjwvY2FwdGlvbj5cbiAgICogdmFyIG51bWJlcnMgPSBSeC5PYnNlcnZhYmxlLm9mKDEwLCAyMCwgMzApO1xuICAgKiB2YXIgbGV0dGVycyA9IFJ4Lk9ic2VydmFibGUub2YoJ2EnLCAnYicsICdjJyk7XG4gICAqIHZhciBpbnRlcnZhbCA9IFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCk7XG4gICAqIHZhciByZXN1bHQgPSBudW1iZXJzLmNvbmNhdChsZXR0ZXJzKS5jb25jYXQoaW50ZXJ2YWwpO1xuICAgKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICAgKlxuICAgKiBAc2VlIHtAbGluayBjcmVhdGV9XG4gICAqIEBzZWUge0BsaW5rIGVtcHR5fVxuICAgKiBAc2VlIHtAbGluayBuZXZlcn1cbiAgICogQHNlZSB7QGxpbmsgdGhyb3d9XG4gICAqXG4gICAqIEBwYXJhbSB7Li4uVH0gdmFsdWVzIEFyZ3VtZW50cyB0aGF0IHJlcHJlc2VudCBgbmV4dGAgdmFsdWVzIHRvIGJlIGVtaXR0ZWQuXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBBIHtAbGluayBTY2hlZHVsZXJ9IHRvIHVzZSBmb3Igc2NoZWR1bGluZ1xuICAgKiB0aGUgZW1pc3Npb25zIG9mIHRoZSBgbmV4dGAgbm90aWZpY2F0aW9ucy5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxUPn0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGVhY2ggZ2l2ZW4gaW5wdXQgdmFsdWUuXG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSBvZlxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIG9mPFQ+KC4uLmFycmF5OiBBcnJheTxUIHwgU2NoZWR1bGVyPik6IE9ic2VydmFibGU8VD4ge1xuICAgIGxldCBzY2hlZHVsZXIgPSA8U2NoZWR1bGVyPmFycmF5W2FycmF5Lmxlbmd0aCAtIDFdO1xuICAgIGlmIChpc1NjaGVkdWxlcihzY2hlZHVsZXIpKSB7XG4gICAgICBhcnJheS5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBsZW4gPSBhcnJheS5sZW5ndGg7XG4gICAgaWYgKGxlbiA+IDEpIHtcbiAgICAgIHJldHVybiBuZXcgQXJyYXlPYnNlcnZhYmxlPFQ+KDxhbnk+YXJyYXksIHNjaGVkdWxlcik7XG4gICAgfSBlbHNlIGlmIChsZW4gPT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgU2NhbGFyT2JzZXJ2YWJsZTxUPig8YW55PmFycmF5WzBdLCBzY2hlZHVsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEVtcHR5T2JzZXJ2YWJsZTxUPihzY2hlZHVsZXIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkaXNwYXRjaChzdGF0ZTogYW55KSB7XG5cbiAgICBjb25zdCB7IGFycmF5LCBpbmRleCwgY291bnQsIHN1YnNjcmliZXIgfSA9IHN0YXRlO1xuXG4gICAgaWYgKGluZGV4ID49IGNvdW50KSB7XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2luZGV4XSk7XG5cbiAgICBpZiAoc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN0YXRlLmluZGV4ID0gaW5kZXggKyAxO1xuXG4gICAgKDxhbnk+IHRoaXMpLnNjaGVkdWxlKHN0YXRlKTtcbiAgfVxuXG4gIC8vIHZhbHVlIHVzZWQgaWYgQXJyYXkgaGFzIG9uZSB2YWx1ZSBhbmQgX2lzU2NhbGFyXG4gIHZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGFycmF5OiBUW10sIHB1YmxpYyBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghc2NoZWR1bGVyICYmIGFycmF5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5faXNTY2FsYXIgPSB0cnVlO1xuICAgICAgdGhpcy52YWx1ZSA9IGFycmF5WzBdO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5hcnJheTtcbiAgICBjb25zdCBjb3VudCA9IGFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcblxuICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoQXJyYXlPYnNlcnZhYmxlLmRpc3BhdGNoLCAwLCB7XG4gICAgICAgIGFycmF5LCBpbmRleCwgY291bnQsIHN1YnNjcmliZXJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50ICYmICFzdWJzY3JpYmVyLmlzVW5zdWJzY3JpYmVkOyBpKyspIHtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2ldKTtcbiAgICAgIH1cbiAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
