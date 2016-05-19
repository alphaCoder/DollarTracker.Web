System.register(['../util/isNumeric', '../Observable', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isNumeric_1, Observable_1, async_1;
    var IntervalObservable;
    return {
        setters:[
            function (isNumeric_1_1) {
                isNumeric_1 = isNumeric_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            IntervalObservable = (function (_super) {
                __extends(IntervalObservable, _super);
                function IntervalObservable(period, scheduler) {
                    if (period === void 0) { period = 0; }
                    if (scheduler === void 0) { scheduler = async_1.async; }
                    _super.call(this);
                    this.period = period;
                    this.scheduler = scheduler;
                    if (!isNumeric_1.isNumeric(period) || period < 0) {
                        this.period = 0;
                    }
                    if (!scheduler || typeof scheduler.schedule !== 'function') {
                        this.scheduler = async_1.async;
                    }
                }
                /**
                 * Creates an Observable that emits sequential numbers every specified
                 * interval of time, on a specified Scheduler.
                 *
                 * <span class="informal">Emits incremental numbers periodically in time.
                 * </span>
                 *
                 * <img src="./img/interval.png" width="100%">
                 *
                 * `interval` returns an Observable that emits an infinite sequence of
                 * ascending integers, with a constant interval of time of your choosing
                 * between those emissions. The first emission is not sent immediately, but
                 * only after the first period has passed. By default, this operator uses the
                 * `async` Scheduler to provide a notion of time, but you may pass any
                 * Scheduler to it.
                 *
                 * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
                 * var numbers = Rx.Observable.interval(1000);
                 * numbers.subscribe(x => console.log(x));
                 *
                 * @see {@link timer}
                 * @see {@link delay}
                 *
                 * @param {number} [period=0] The interval size in milliseconds (by default)
                 * or the time unit determined by the scheduler's clock.
                 * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
                 * the emission of values, and providing a notion of "time".
                 * @return {Observable} An Observable that emits a sequential number each time
                 * interval.
                 * @static true
                 * @name interval
                 * @owner Observable
                 */
                IntervalObservable.create = function (period, scheduler) {
                    if (period === void 0) { period = 0; }
                    if (scheduler === void 0) { scheduler = async_1.async; }
                    return new IntervalObservable(period, scheduler);
                };
                IntervalObservable.dispatch = function (state) {
                    var index = state.index, subscriber = state.subscriber, period = state.period;
                    subscriber.next(index);
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    state.index += 1;
                    this.schedule(state, period);
                };
                IntervalObservable.prototype._subscribe = function (subscriber) {
                    var index = 0;
                    var period = this.period;
                    var scheduler = this.scheduler;
                    subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
                        index: index, subscriber: subscriber, period: period
                    }));
                };
                return IntervalObservable;
            }(Observable_1.Observable));
            exports_1("IntervalObservable", IntervalObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvSW50ZXJ2YWxPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTs7OztlQUlHO1lBQ0g7Z0JBQXdDLHNDQUFrQjtnQkFxRHhELDRCQUFvQixNQUFrQixFQUNsQixTQUE0QjtvQkFEcEMsc0JBQTBCLEdBQTFCLFVBQTBCO29CQUMxQix5QkFBb0MsR0FBcEMseUJBQW9DO29CQUM5QyxpQkFBTyxDQUFDO29CQUZVLFdBQU0sR0FBTixNQUFNLENBQVk7b0JBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQW1CO29CQUU5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLE9BQU8sU0FBUyxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQztvQkFDekIsQ0FBQztnQkFDSCxDQUFDO2dCQTdERDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBZ0NHO2dCQUNJLHlCQUFNLEdBQWIsVUFBYyxNQUFrQixFQUNsQixTQUE0QjtvQkFENUIsc0JBQWtCLEdBQWxCLFVBQWtCO29CQUNsQix5QkFBNEIsR0FBNUIseUJBQTRCO29CQUN4QyxNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7Z0JBRU0sMkJBQVEsR0FBZixVQUFnQixLQUFVO29CQUNoQix1QkFBSyxFQUFFLDZCQUFVLEVBQUUscUJBQU0sQ0FBVztvQkFFNUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFdkIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUVELEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO29CQUVWLElBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQWFTLHVDQUFVLEdBQXBCLFVBQXFCLFVBQThCO29CQUNqRCxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2hCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzNCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBRWpDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFO3dCQUNyRSxPQUFBLEtBQUssRUFBRSxZQUFBLFVBQVUsRUFBRSxRQUFBLE1BQU07cUJBQzFCLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBQ0gseUJBQUM7WUFBRCxDQXpFQSxBQXlFQyxDQXpFdUMsdUJBQVUsR0F5RWpEO1lBekVELG1EQXlFQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvSW50ZXJ2YWxPYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7aXNOdW1lcmljfSBmcm9tICcuLi91dGlsL2lzTnVtZXJpYyc7XG5pbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge2FzeW5jfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIEludGVydmFsT2JzZXJ2YWJsZSBleHRlbmRzIE9ic2VydmFibGU8bnVtYmVyPiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBzZXF1ZW50aWFsIG51bWJlcnMgZXZlcnkgc3BlY2lmaWVkXG4gICAqIGludGVydmFsIG9mIHRpbWUsIG9uIGEgc3BlY2lmaWVkIFNjaGVkdWxlci5cbiAgICpcbiAgICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkVtaXRzIGluY3JlbWVudGFsIG51bWJlcnMgcGVyaW9kaWNhbGx5IGluIHRpbWUuXG4gICAqIDwvc3Bhbj5cbiAgICpcbiAgICogPGltZyBzcmM9XCIuL2ltZy9pbnRlcnZhbC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICpcbiAgICogYGludGVydmFsYCByZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBhbiBpbmZpbml0ZSBzZXF1ZW5jZSBvZlxuICAgKiBhc2NlbmRpbmcgaW50ZWdlcnMsIHdpdGggYSBjb25zdGFudCBpbnRlcnZhbCBvZiB0aW1lIG9mIHlvdXIgY2hvb3NpbmdcbiAgICogYmV0d2VlbiB0aG9zZSBlbWlzc2lvbnMuIFRoZSBmaXJzdCBlbWlzc2lvbiBpcyBub3Qgc2VudCBpbW1lZGlhdGVseSwgYnV0XG4gICAqIG9ubHkgYWZ0ZXIgdGhlIGZpcnN0IHBlcmlvZCBoYXMgcGFzc2VkLiBCeSBkZWZhdWx0LCB0aGlzIG9wZXJhdG9yIHVzZXMgdGhlXG4gICAqIGBhc3luY2AgU2NoZWR1bGVyIHRvIHByb3ZpZGUgYSBub3Rpb24gb2YgdGltZSwgYnV0IHlvdSBtYXkgcGFzcyBhbnlcbiAgICogU2NoZWR1bGVyIHRvIGl0LlxuICAgKlxuICAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5FbWl0cyBhc2NlbmRpbmcgbnVtYmVycywgb25lIGV2ZXJ5IHNlY29uZCAoMTAwMG1zKTwvY2FwdGlvbj5cbiAgICogdmFyIG51bWJlcnMgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xuICAgKiBudW1iZXJzLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICpcbiAgICogQHNlZSB7QGxpbmsgdGltZXJ9XG4gICAqIEBzZWUge0BsaW5rIGRlbGF5fVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BlcmlvZD0wXSBUaGUgaW50ZXJ2YWwgc2l6ZSBpbiBtaWxsaXNlY29uZHMgKGJ5IGRlZmF1bHQpXG4gICAqIG9yIHRoZSB0aW1lIHVuaXQgZGV0ZXJtaW5lZCBieSB0aGUgc2NoZWR1bGVyJ3MgY2xvY2suXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyPWFzeW5jXSBUaGUgU2NoZWR1bGVyIHRvIHVzZSBmb3Igc2NoZWR1bGluZ1xuICAgKiB0aGUgZW1pc3Npb24gb2YgdmFsdWVzLCBhbmQgcHJvdmlkaW5nIGEgbm90aW9uIG9mIFwidGltZVwiLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBBbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYSBzZXF1ZW50aWFsIG51bWJlciBlYWNoIHRpbWVcbiAgICogaW50ZXJ2YWwuXG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSBpbnRlcnZhbFxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShwZXJpb2Q6IG51bWJlciA9IDAsXG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyOiBTY2hlZHVsZXIgPSBhc3luYyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBJbnRlcnZhbE9ic2VydmFibGUocGVyaW9kLCBzY2hlZHVsZXIpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BhdGNoKHN0YXRlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB7IGluZGV4LCBzdWJzY3JpYmVyLCBwZXJpb2QgfSA9IHN0YXRlO1xuXG4gICAgc3Vic2NyaWJlci5uZXh0KGluZGV4KTtcblxuICAgIGlmIChzdWJzY3JpYmVyLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGUuaW5kZXggKz0gMTtcblxuICAgICg8YW55PiB0aGlzKS5zY2hlZHVsZShzdGF0ZSwgcGVyaW9kKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVyaW9kOiBudW1iZXIgPSAwLFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyID0gYXN5bmMpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmICghaXNOdW1lcmljKHBlcmlvZCkgfHwgcGVyaW9kIDwgMCkge1xuICAgICAgdGhpcy5wZXJpb2QgPSAwO1xuICAgIH1cbiAgICBpZiAoIXNjaGVkdWxlciB8fCB0eXBlb2Ygc2NoZWR1bGVyLnNjaGVkdWxlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IGFzeW5jO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8bnVtYmVyPikge1xuICAgIGNvbnN0IGluZGV4ID0gMDtcbiAgICBjb25zdCBwZXJpb2QgPSB0aGlzLnBlcmlvZDtcbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcblxuICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShJbnRlcnZhbE9ic2VydmFibGUuZGlzcGF0Y2gsIHBlcmlvZCwge1xuICAgICAgaW5kZXgsIHN1YnNjcmliZXIsIHBlcmlvZFxuICAgIH0pKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
