System.register(['../Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1;
    var RangeObservable;
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
            RangeObservable = (function (_super) {
                __extends(RangeObservable, _super);
                function RangeObservable(start, count, scheduler) {
                    _super.call(this);
                    this.start = start;
                    this._count = count;
                    this.scheduler = scheduler;
                }
                /**
                 * Creates an Observable that emits a sequence of numbers within a specified
                 * range.
                 *
                 * <span class="informal">Emits a sequence of numbers in a range.</span>
                 *
                 * <img src="./img/range.png" width="100%">
                 *
                 * `range` operator emits a range of sequential integers, in order, where you
                 * select the `start` of the range and its `length`. By default, uses no
                 * Scheduler and just delivers the notifications synchronously, but may use
                 * an optional Scheduler to regulate those deliveries.
                 *
                 * @example <caption>Emits the numbers 1 to 10</caption>
                 * var numbers = Rx.Observable.range(1, 10);
                 * numbers.subscribe(x => console.log(x));
                 *
                 * @see {@link timer}
                 * @see {@link interval}
                 *
                 * @param {number} [start=0] The value of the first integer in the sequence.
                 * @param {number} [count=0] The number of sequential integers to generate.
                 * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
                 * the emissions of the notifications.
                 * @return {Observable} An Observable of numbers that emits a finite range of
                 * sequential integers.
                 * @static true
                 * @name range
                 * @owner Observable
                 */
                RangeObservable.create = function (start, count, scheduler) {
                    if (start === void 0) { start = 0; }
                    if (count === void 0) { count = 0; }
                    return new RangeObservable(start, count, scheduler);
                };
                RangeObservable.dispatch = function (state) {
                    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
                    if (index >= count) {
                        subscriber.complete();
                        return;
                    }
                    subscriber.next(start);
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    state.index = index + 1;
                    state.start = start + 1;
                    this.schedule(state);
                };
                RangeObservable.prototype._subscribe = function (subscriber) {
                    var index = 0;
                    var start = this.start;
                    var count = this._count;
                    var scheduler = this.scheduler;
                    if (scheduler) {
                        return scheduler.schedule(RangeObservable.dispatch, 0, {
                            index: index, count: count, start: start, subscriber: subscriber
                        });
                    }
                    else {
                        do {
                            if (index++ >= count) {
                                subscriber.complete();
                                break;
                            }
                            subscriber.next(start++);
                            if (subscriber.isUnsubscribed) {
                                break;
                            }
                        } while (true);
                    }
                };
                return RangeObservable;
            }(Observable_1.Observable));
            exports_1("RangeObservable", RangeObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvUmFuZ2VPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTs7OztlQUlHO1lBQ0g7Z0JBQXFDLG1DQUFrQjtnQkErRHJELHlCQUFZLEtBQWEsRUFDYixLQUFhLEVBQ2IsU0FBcUI7b0JBQy9CLGlCQUFPLENBQUM7b0JBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDN0IsQ0FBQztnQkFwRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQTZCRztnQkFDSSxzQkFBTSxHQUFiLFVBQWMsS0FBaUIsRUFDakIsS0FBaUIsRUFDakIsU0FBcUI7b0JBRnJCLHFCQUFpQixHQUFqQixTQUFpQjtvQkFDakIscUJBQWlCLEdBQWpCLFNBQWlCO29CQUU3QixNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdEQsQ0FBQztnQkFFTSx3QkFBUSxHQUFmLFVBQWdCLEtBQVU7b0JBRWhCLHVCQUFLLEVBQUUsbUJBQUssRUFBRSxtQkFBSyxFQUFFLDZCQUFVLENBQVc7b0JBRWxELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRXZCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFFRCxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3hCLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFFakIsSUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFlUyxvQ0FBVSxHQUFwQixVQUFxQixVQUE4QjtvQkFDakQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNkLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQ3ZCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzFCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBRWpDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7NEJBQ3JELE9BQUEsS0FBSyxFQUFFLE9BQUEsS0FBSyxFQUFFLE9BQUEsS0FBSyxFQUFFLFlBQUEsVUFBVTt5QkFDaEMsQ0FBQyxDQUFDO29CQUNMLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sR0FBRyxDQUFDOzRCQUNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ3JCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQ0FDdEIsS0FBSyxDQUFDOzRCQUNSLENBQUM7NEJBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDOzRCQUN6QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQ0FDOUIsS0FBSyxDQUFDOzRCQUNSLENBQUM7d0JBQ0gsQ0FBQyxRQUFRLElBQUksRUFBRTtvQkFDakIsQ0FBQztnQkFDSCxDQUFDO2dCQUNILHNCQUFDO1lBQUQsQ0EvRkEsQUErRkMsQ0EvRm9DLHVCQUFVLEdBK0Y5QztZQS9GRCw2Q0ErRkMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vYnNlcnZhYmxlL1JhbmdlT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7VGVhcmRvd25Mb2dpY30gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgUmFuZ2VPYnNlcnZhYmxlIGV4dGVuZHMgT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgYSBzZXF1ZW5jZSBvZiBudW1iZXJzIHdpdGhpbiBhIHNwZWNpZmllZFxuICAgKiByYW5nZS5cbiAgICpcbiAgICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkVtaXRzIGEgc2VxdWVuY2Ugb2YgbnVtYmVycyBpbiBhIHJhbmdlLjwvc3Bhbj5cbiAgICpcbiAgICogPGltZyBzcmM9XCIuL2ltZy9yYW5nZS5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAgICpcbiAgICogYHJhbmdlYCBvcGVyYXRvciBlbWl0cyBhIHJhbmdlIG9mIHNlcXVlbnRpYWwgaW50ZWdlcnMsIGluIG9yZGVyLCB3aGVyZSB5b3VcbiAgICogc2VsZWN0IHRoZSBgc3RhcnRgIG9mIHRoZSByYW5nZSBhbmQgaXRzIGBsZW5ndGhgLiBCeSBkZWZhdWx0LCB1c2VzIG5vXG4gICAqIFNjaGVkdWxlciBhbmQganVzdCBkZWxpdmVycyB0aGUgbm90aWZpY2F0aW9ucyBzeW5jaHJvbm91c2x5LCBidXQgbWF5IHVzZVxuICAgKiBhbiBvcHRpb25hbCBTY2hlZHVsZXIgdG8gcmVndWxhdGUgdGhvc2UgZGVsaXZlcmllcy5cbiAgICpcbiAgICogQGV4YW1wbGUgPGNhcHRpb24+RW1pdHMgdGhlIG51bWJlcnMgMSB0byAxMDwvY2FwdGlvbj5cbiAgICogdmFyIG51bWJlcnMgPSBSeC5PYnNlcnZhYmxlLnJhbmdlKDEsIDEwKTtcbiAgICogbnVtYmVycy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gICAqXG4gICAqIEBzZWUge0BsaW5rIHRpbWVyfVxuICAgKiBAc2VlIHtAbGluayBpbnRlcnZhbH1cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgdmFsdWUgb2YgdGhlIGZpcnN0IGludGVnZXIgaW4gdGhlIHNlcXVlbmNlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvdW50PTBdIFRoZSBudW1iZXIgb2Ygc2VxdWVudGlhbCBpbnRlZ2VycyB0byBnZW5lcmF0ZS5cbiAgICogQHBhcmFtIHtTY2hlZHVsZXJ9IFtzY2hlZHVsZXJdIEEge0BsaW5rIFNjaGVkdWxlcn0gdG8gdXNlIGZvciBzY2hlZHVsaW5nXG4gICAqIHRoZSBlbWlzc2lvbnMgb2YgdGhlIG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgb2YgbnVtYmVycyB0aGF0IGVtaXRzIGEgZmluaXRlIHJhbmdlIG9mXG4gICAqIHNlcXVlbnRpYWwgaW50ZWdlcnMuXG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSByYW5nZVxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShzdGFydDogbnVtYmVyID0gMCxcbiAgICAgICAgICAgICAgICBjb3VudDogbnVtYmVyID0gMCxcbiAgICAgICAgICAgICAgICBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiBuZXcgUmFuZ2VPYnNlcnZhYmxlKHN0YXJ0LCBjb3VudCwgc2NoZWR1bGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwYXRjaChzdGF0ZTogYW55KSB7XG5cbiAgICBjb25zdCB7IHN0YXJ0LCBpbmRleCwgY291bnQsIHN1YnNjcmliZXIgfSA9IHN0YXRlO1xuXG4gICAgaWYgKGluZGV4ID49IGNvdW50KSB7XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlci5uZXh0KHN0YXJ0KTtcblxuICAgIGlmIChzdWJzY3JpYmVyLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhdGUuaW5kZXggPSBpbmRleCArIDE7XG4gICAgc3RhdGUuc3RhcnQgPSBzdGFydCArIDE7XG5cbiAgICAoPGFueT4gdGhpcykuc2NoZWR1bGUoc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydDogbnVtYmVyO1xuICBwcml2YXRlIF9jb3VudDogbnVtYmVyO1xuICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyO1xuXG4gIGNvbnN0cnVjdG9yKHN0YXJ0OiBudW1iZXIsXG4gICAgICAgICAgICAgIGNvdW50OiBudW1iZXIsXG4gICAgICAgICAgICAgIHNjaGVkdWxlcj86IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuX2NvdW50ID0gY291bnQ7XG4gICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPG51bWJlcj4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBzdGFydCA9IHRoaXMuc3RhcnQ7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLl9jb3VudDtcbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcblxuICAgIGlmIChzY2hlZHVsZXIpIHtcbiAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoUmFuZ2VPYnNlcnZhYmxlLmRpc3BhdGNoLCAwLCB7XG4gICAgICAgIGluZGV4LCBjb3VudCwgc3RhcnQsIHN1YnNjcmliZXJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChpbmRleCsrID49IGNvdW50KSB7XG4gICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmliZXIubmV4dChzdGFydCsrKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
