System.register(['../util/isNumeric', '../Observable', '../scheduler/async', '../util/isScheduler', '../util/isDate'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isNumeric_1, Observable_1, async_1, isScheduler_1, isDate_1;
    var TimerObservable;
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
            },
            function (isScheduler_1_1) {
                isScheduler_1 = isScheduler_1_1;
            },
            function (isDate_1_1) {
                isDate_1 = isDate_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            TimerObservable = (function (_super) {
                __extends(TimerObservable, _super);
                function TimerObservable(dueTime, period, scheduler) {
                    if (dueTime === void 0) { dueTime = 0; }
                    _super.call(this);
                    this.period = -1;
                    this.dueTime = 0;
                    if (isNumeric_1.isNumeric(period)) {
                        this.period = Number(period) < 1 && 1 || Number(period);
                    }
                    else if (isScheduler_1.isScheduler(period)) {
                        scheduler = period;
                    }
                    if (!isScheduler_1.isScheduler(scheduler)) {
                        scheduler = async_1.async;
                    }
                    this.scheduler = scheduler;
                    this.dueTime = isDate_1.isDate(dueTime) ?
                        (+dueTime - this.scheduler.now()) :
                        dueTime;
                }
                /**
                 * Creates an Observable that starts emitting after an `initialDelay` and
                 * emits ever increasing numbers after each `period` of time thereafter.
                 *
                 * <span class="informal">Its like {@link interval}, but you can specify when
                 * should the emissions start.</span>
                 *
                 * <img src="./img/timer.png" width="100%">
                 *
                 * `timer` returns an Observable that emits an infinite sequence of ascending
                 * integers, with a constant interval of time, `period` of your choosing
                 * between those emissions. The first emission happens after the specified
                 * `initialDelay`. The initial delay may be a {@link Date}. By default, this
                 * operator uses the `async` Scheduler to provide a notion of time, but you
                 * may pass any Scheduler to it. If `period` is not specified, the output
                 * Observable emits only one value, `0`. Otherwise, it emits an infinite
                 * sequence.
                 *
                 * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
                 * var numbers = Rx.Observable.timer(3000, 1000);
                 * numbers.subscribe(x => console.log(x));
                 *
                 * @example <caption>Emits one number after five seconds</caption>
                 * var numbers = Rx.Observable.timer(5000);
                 * numbers.subscribe(x => console.log(x));
                 *
                 * @see {@link interval}
                 * @see {@link delay}
                 *
                 * @param {number|Date} initialDelay The initial delay time to wait before
                 * emitting the first value of `0`.
                 * @param {number} [period] The period of time between emissions of the
                 * subsequent numbers.
                 * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
                 * the emission of values, and providing a notion of "time".
                 * @return {Observable} An Observable that emits a `0` after the
                 * `initialDelay` and ever increasing numbers after each `period` of time
                 * thereafter.
                 * @static true
                 * @name timer
                 * @owner Observable
                 */
                TimerObservable.create = function (initialDelay, period, scheduler) {
                    if (initialDelay === void 0) { initialDelay = 0; }
                    return new TimerObservable(initialDelay, period, scheduler);
                };
                TimerObservable.dispatch = function (state) {
                    var index = state.index, period = state.period, subscriber = state.subscriber;
                    var action = this;
                    subscriber.next(index);
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    else if (period === -1) {
                        return subscriber.complete();
                    }
                    state.index = index + 1;
                    action.schedule(state, period);
                };
                TimerObservable.prototype._subscribe = function (subscriber) {
                    var index = 0;
                    var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
                    return scheduler.schedule(TimerObservable.dispatch, dueTime, {
                        index: index, period: period, subscriber: subscriber
                    });
                };
                return TimerObservable;
            }(Observable_1.Observable));
            exports_1("TimerObservable", TimerObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvVGltZXJPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTs7OztlQUlHO1lBQ0g7Z0JBQXFDLG1DQUFrQjtnQkF1RXJELHlCQUFZLE9BQTBCLEVBQzFCLE1BQTJCLEVBQzNCLFNBQXFCO29CQUZyQix1QkFBMEIsR0FBMUIsV0FBMEI7b0JBR3BDLGlCQUFPLENBQUM7b0JBUEYsV0FBTSxHQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNwQixZQUFPLEdBQVcsQ0FBQyxDQUFDO29CQVExQixFQUFFLENBQUMsQ0FBQyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzFELENBQUM7b0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLHlCQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixTQUFTLEdBQWUsTUFBTSxDQUFDO29CQUNqQyxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMseUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLFNBQVMsR0FBRyxhQUFLLENBQUM7b0JBQ3BCLENBQUM7b0JBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7b0JBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQzt3QkFDNUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUN2QixPQUFRLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBeEZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkF5Q0c7Z0JBQ0ksc0JBQU0sR0FBYixVQUFjLFlBQStCLEVBQy9CLE1BQTJCLEVBQzNCLFNBQXFCO29CQUZyQiw0QkFBK0IsR0FBL0IsZ0JBQStCO29CQUczQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFFTSx3QkFBUSxHQUFmLFVBQWdCLEtBQVU7b0JBRWhCLHVCQUFLLEVBQUUscUJBQU0sRUFBRSw2QkFBVSxDQUFXO29CQUM1QyxJQUFNLE1BQU0sR0FBVSxJQUFLLENBQUM7b0JBRTVCLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRXZCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDL0IsQ0FBQztvQkFFRCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQTJCUyxvQ0FBVSxHQUFwQixVQUFxQixVQUE4QjtvQkFDakQsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNoQixJQUFBLFNBQTJDLEVBQW5DLGtCQUFNLEVBQUUsb0JBQU8sRUFBRSx3QkFBUyxDQUFVO29CQUU1QyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTt3QkFDM0QsT0FBQSxLQUFLLEVBQUUsUUFBQSxNQUFNLEVBQUUsWUFBQSxVQUFVO3FCQUMxQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFDSCxzQkFBQztZQUFELENBcEdBLEFBb0dDLENBcEdvQyx1QkFBVSxHQW9HOUM7WUFwR0QsNkNBb0dDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9UaW1lck9ic2VydmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzTnVtZXJpY30gZnJvbSAnLi4vdXRpbC9pc051bWVyaWMnO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHthc3luY30gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7aXNTY2hlZHVsZXJ9IGZyb20gJy4uL3V0aWwvaXNTY2hlZHVsZXInO1xuaW1wb3J0IHtpc0RhdGV9IGZyb20gJy4uL3V0aWwvaXNEYXRlJztcbmltcG9ydCB7VGVhcmRvd25Mb2dpY30gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgVGltZXJPYnNlcnZhYmxlIGV4dGVuZHMgT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgc3RhcnRzIGVtaXR0aW5nIGFmdGVyIGFuIGBpbml0aWFsRGVsYXlgIGFuZFxuICAgKiBlbWl0cyBldmVyIGluY3JlYXNpbmcgbnVtYmVycyBhZnRlciBlYWNoIGBwZXJpb2RgIG9mIHRpbWUgdGhlcmVhZnRlci5cbiAgICpcbiAgICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0cyBsaWtlIHtAbGluayBpbnRlcnZhbH0sIGJ1dCB5b3UgY2FuIHNwZWNpZnkgd2hlblxuICAgKiBzaG91bGQgdGhlIGVtaXNzaW9ucyBzdGFydC48L3NwYW4+XG4gICAqXG4gICAqIDxpbWcgc3JjPVwiLi9pbWcvdGltZXIucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAqXG4gICAqIGB0aW1lcmAgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYW4gaW5maW5pdGUgc2VxdWVuY2Ugb2YgYXNjZW5kaW5nXG4gICAqIGludGVnZXJzLCB3aXRoIGEgY29uc3RhbnQgaW50ZXJ2YWwgb2YgdGltZSwgYHBlcmlvZGAgb2YgeW91ciBjaG9vc2luZ1xuICAgKiBiZXR3ZWVuIHRob3NlIGVtaXNzaW9ucy4gVGhlIGZpcnN0IGVtaXNzaW9uIGhhcHBlbnMgYWZ0ZXIgdGhlIHNwZWNpZmllZFxuICAgKiBgaW5pdGlhbERlbGF5YC4gVGhlIGluaXRpYWwgZGVsYXkgbWF5IGJlIGEge0BsaW5rIERhdGV9LiBCeSBkZWZhdWx0LCB0aGlzXG4gICAqIG9wZXJhdG9yIHVzZXMgdGhlIGBhc3luY2AgU2NoZWR1bGVyIHRvIHByb3ZpZGUgYSBub3Rpb24gb2YgdGltZSwgYnV0IHlvdVxuICAgKiBtYXkgcGFzcyBhbnkgU2NoZWR1bGVyIHRvIGl0LiBJZiBgcGVyaW9kYCBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgb3V0cHV0XG4gICAqIE9ic2VydmFibGUgZW1pdHMgb25seSBvbmUgdmFsdWUsIGAwYC4gT3RoZXJ3aXNlLCBpdCBlbWl0cyBhbiBpbmZpbml0ZVxuICAgKiBzZXF1ZW5jZS5cbiAgICpcbiAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdHMgYXNjZW5kaW5nIG51bWJlcnMsIG9uZSBldmVyeSBzZWNvbmQgKDEwMDBtcyksIHN0YXJ0aW5nIGFmdGVyIDMgc2Vjb25kczwvY2FwdGlvbj5cbiAgICogdmFyIG51bWJlcnMgPSBSeC5PYnNlcnZhYmxlLnRpbWVyKDMwMDAsIDEwMDApO1xuICAgKiBudW1iZXJzLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAgICpcbiAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdHMgb25lIG51bWJlciBhZnRlciBmaXZlIHNlY29uZHM8L2NhcHRpb24+XG4gICAqIHZhciBudW1iZXJzID0gUnguT2JzZXJ2YWJsZS50aW1lcig1MDAwKTtcbiAgICogbnVtYmVycy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gICAqXG4gICAqIEBzZWUge0BsaW5rIGludGVydmFsfVxuICAgKiBAc2VlIHtAbGluayBkZWxheX1cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ8RGF0ZX0gaW5pdGlhbERlbGF5IFRoZSBpbml0aWFsIGRlbGF5IHRpbWUgdG8gd2FpdCBiZWZvcmVcbiAgICogZW1pdHRpbmcgdGhlIGZpcnN0IHZhbHVlIG9mIGAwYC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwZXJpb2RdIFRoZSBwZXJpb2Qgb2YgdGltZSBiZXR3ZWVuIGVtaXNzaW9ucyBvZiB0aGVcbiAgICogc3Vic2VxdWVudCBudW1iZXJzLlxuICAgKiBAcGFyYW0ge1NjaGVkdWxlcn0gW3NjaGVkdWxlcj1hc3luY10gVGhlIFNjaGVkdWxlciB0byB1c2UgZm9yIHNjaGVkdWxpbmdcbiAgICogdGhlIGVtaXNzaW9uIG9mIHZhbHVlcywgYW5kIHByb3ZpZGluZyBhIG5vdGlvbiBvZiBcInRpbWVcIi5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGEgYDBgIGFmdGVyIHRoZVxuICAgKiBgaW5pdGlhbERlbGF5YCBhbmQgZXZlciBpbmNyZWFzaW5nIG51bWJlcnMgYWZ0ZXIgZWFjaCBgcGVyaW9kYCBvZiB0aW1lXG4gICAqIHRoZXJlYWZ0ZXIuXG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSB0aW1lclxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShpbml0aWFsRGVsYXk6IG51bWJlciB8IERhdGUgPSAwLFxuICAgICAgICAgICAgICAgIHBlcmlvZD86IG51bWJlciB8IFNjaGVkdWxlcixcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgVGltZXJPYnNlcnZhYmxlKGluaXRpYWxEZWxheSwgcGVyaW9kLCBzY2hlZHVsZXIpO1xuICB9XG5cbiAgc3RhdGljIGRpc3BhdGNoKHN0YXRlOiBhbnkpIHtcblxuICAgIGNvbnN0IHsgaW5kZXgsIHBlcmlvZCwgc3Vic2NyaWJlciB9ID0gc3RhdGU7XG4gICAgY29uc3QgYWN0aW9uID0gKDxhbnk+IHRoaXMpO1xuXG4gICAgc3Vic2NyaWJlci5uZXh0KGluZGV4KTtcblxuICAgIGlmIChzdWJzY3JpYmVyLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChwZXJpb2QgPT09IC0xKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIHN0YXRlLmluZGV4ID0gaW5kZXggKyAxO1xuICAgIGFjdGlvbi5zY2hlZHVsZShzdGF0ZSwgcGVyaW9kKTtcbiAgfVxuXG4gIHByaXZhdGUgcGVyaW9kOiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBkdWVUaW1lOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyO1xuXG4gIGNvbnN0cnVjdG9yKGR1ZVRpbWU6IG51bWJlciB8IERhdGUgPSAwLFxuICAgICAgICAgICAgICBwZXJpb2Q/OiBudW1iZXIgfCBTY2hlZHVsZXIsXG4gICAgICAgICAgICAgIHNjaGVkdWxlcj86IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoaXNOdW1lcmljKHBlcmlvZCkpIHtcbiAgICAgIHRoaXMucGVyaW9kID0gTnVtYmVyKHBlcmlvZCkgPCAxICYmIDEgfHwgTnVtYmVyKHBlcmlvZCk7XG4gICAgfSBlbHNlIGlmIChpc1NjaGVkdWxlcihwZXJpb2QpKSB7XG4gICAgICBzY2hlZHVsZXIgPSA8U2NoZWR1bGVyPiBwZXJpb2Q7XG4gICAgfVxuXG4gICAgaWYgKCFpc1NjaGVkdWxlcihzY2hlZHVsZXIpKSB7XG4gICAgICBzY2hlZHVsZXIgPSBhc3luYztcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB0aGlzLmR1ZVRpbWUgPSBpc0RhdGUoZHVlVGltZSkgP1xuICAgICAgKCtkdWVUaW1lIC0gdGhpcy5zY2hlZHVsZXIubm93KCkpIDpcbiAgICAgICg8bnVtYmVyPiBkdWVUaW1lKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8bnVtYmVyPik6IFRlYXJkb3duTG9naWMge1xuICAgIGNvbnN0IGluZGV4ID0gMDtcbiAgICBjb25zdCB7IHBlcmlvZCwgZHVlVGltZSwgc2NoZWR1bGVyIH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShUaW1lck9ic2VydmFibGUuZGlzcGF0Y2gsIGR1ZVRpbWUsIHtcbiAgICAgIGluZGV4LCBwZXJpb2QsIHN1YnNjcmliZXJcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
