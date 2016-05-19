System.register(['../scheduler/async', '../util/isDate', '../Subscriber', '../Notification'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var async_1, isDate_1, Subscriber_1, Notification_1;
    var DelayOperator, DelaySubscriber, DelayMessage;
    /**
     * Delays the emission of items from the source Observable by a given timeout or
     * until a given Date.
     *
     * <span class="informal">Time shifts each item by some specified amount of
     * milliseconds.</span>
     *
     * <img src="./img/delay.png" width="100%">
     *
     * If the delay argument is a Number, this operator time shifts the source
     * Observable by that amount of time expressed in milliseconds. The relative
     * time intervals between the values are preserved.
     *
     * If the delay argument is a Date, this operator time shifts the start of the
     * Observable execution until the given date occurs.
     *
     * @example <caption>Delay each click by one second</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
     * delayedClicks.subscribe(x => console.log(x));
     *
     * @example <caption>Delay all clicks until a future date happens</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var date = new Date('March 15, 2050 12:00:00'); // in the future
     * var delayedClicks = clicks.delay(date); // click emitted only after that date
     * delayedClicks.subscribe(x => console.log(x));
     *
     * @see {@link debounceTime}
     * @see {@link delayWhen}
     *
     * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
     * a `Date` until which the emission of the source items is delayed.
     * @param {Scheduler} [scheduler=async] The Scheduler to use for
     * managing the timers that handle the time-shift for each item.
     * @return {Observable} An Observable that delays the emissions of the source
     * Observable by the specified timeout or Date.
     * @method delay
     * @owner Observable
     */
    function delay(delay, scheduler) {
        if (scheduler === void 0) { scheduler = async_1.async; }
        var absoluteDelay = isDate_1.isDate(delay);
        var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
        return this.lift(new DelayOperator(delayFor, scheduler));
    }
    exports_1("delay", delay);
    return {
        setters:[
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (isDate_1_1) {
                isDate_1 = isDate_1_1;
            },
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Notification_1_1) {
                Notification_1 = Notification_1_1;
            }],
        execute: function() {
            DelayOperator = (function () {
                function DelayOperator(delay, scheduler) {
                    this.delay = delay;
                    this.scheduler = scheduler;
                }
                DelayOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
                };
                return DelayOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DelaySubscriber = (function (_super) {
                __extends(DelaySubscriber, _super);
                function DelaySubscriber(destination, delay, scheduler) {
                    _super.call(this, destination);
                    this.delay = delay;
                    this.scheduler = scheduler;
                    this.queue = [];
                    this.active = false;
                    this.errored = false;
                }
                DelaySubscriber.dispatch = function (state) {
                    var source = state.source;
                    var queue = source.queue;
                    var scheduler = state.scheduler;
                    var destination = state.destination;
                    while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
                        queue.shift().notification.observe(destination);
                    }
                    if (queue.length > 0) {
                        var delay_1 = Math.max(0, queue[0].time - scheduler.now());
                        this.schedule(state, delay_1);
                    }
                    else {
                        source.active = false;
                    }
                };
                DelaySubscriber.prototype._schedule = function (scheduler) {
                    this.active = true;
                    this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
                        source: this, destination: this.destination, scheduler: scheduler
                    }));
                };
                DelaySubscriber.prototype.scheduleNotification = function (notification) {
                    if (this.errored === true) {
                        return;
                    }
                    var scheduler = this.scheduler;
                    var message = new DelayMessage(scheduler.now() + this.delay, notification);
                    this.queue.push(message);
                    if (this.active === false) {
                        this._schedule(scheduler);
                    }
                };
                DelaySubscriber.prototype._next = function (value) {
                    this.scheduleNotification(Notification_1.Notification.createNext(value));
                };
                DelaySubscriber.prototype._error = function (err) {
                    this.errored = true;
                    this.queue = [];
                    this.destination.error(err);
                };
                DelaySubscriber.prototype._complete = function () {
                    this.scheduleNotification(Notification_1.Notification.createComplete());
                };
                return DelaySubscriber;
            }(Subscriber_1.Subscriber));
            DelayMessage = (function () {
                function DelayMessage(time, notification) {
                    this.time = time;
                    this.notification = notification;
                }
                return DelayMessage;
            }());
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2RlbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FzQ0c7SUFDSCxlQUF5QixLQUFrQixFQUNsQixTQUE0QjtRQUE1Qix5QkFBNEIsR0FBNUIseUJBQTRCO1FBQ25ELElBQU0sYUFBYSxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFNLFFBQVEsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFTLEtBQUssQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFMRCx5QkFLQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7O1lBTUQ7Z0JBQ0UsdUJBQW9CLEtBQWEsRUFDYixTQUFvQjtvQkFEcEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtvQkFDYixjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUN4QyxDQUFDO2dCQUVELDRCQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN4RixDQUFDO2dCQUNILG9CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFFRDs7OztlQUlHO1lBQ0g7Z0JBQWlDLG1DQUFhO2dCQXVCNUMseUJBQVksV0FBMEIsRUFDbEIsS0FBYSxFQUNiLFNBQW9CO29CQUN0QyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFGRCxVQUFLLEdBQUwsS0FBSyxD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QUcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVTLG1DQUFTLEdBQW5CO29CQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQywyQkFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7Z0JBQzNELENBQUM7Z0JBQ0gsc0JBQUM7WUFBRCxDQS9EQSxBQStEQyxDQS9EZ0MsdUJBQVUsR0ErRDFDO1lBRUQ7Z0JBQ0Usc0JBQW9CLElBQVksRUFDWixZQUFpQjtvQkFEakIsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFDWixpQkFBWSxHQUFaLFlBQVksQ0FBSztnQkFDckMsQ0FBQztnQkFDSCxtQkFBQztZQUFELENBSkEsQUFJQyxJQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2RlbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3luY30gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7aXNEYXRlfSBmcm9tICcuLi91dGlsL2lzRGF0ZSc7XG5pbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1NjaGVkdWxlcn0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge05vdGlmaWNhdGlvbn0gZnJvbSAnLi4vTm90aWZpY2F0aW9uJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogRGVsYXlzIHRoZSBlbWlzc2lvbiBvZiBpdGVtcyBmcm9tIHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSBieSBhIGdpdmVuIHRpbWVvdXQgb3JcbiAqIHVudGlsIGEgZ2l2ZW4gRGF0ZS5cbiAqXG4gKiA8c3BhbiBjbGFzcz1cImluZm9ybWFsXCI+VGltZSBzaGlmdHMgZWFjaCBpdGVtIGJ5IHNvbWUgc3BlY2lmaWVkIGFtb3VudCBvZlxuICogbWlsbGlzZWNvbmRzLjwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL2RlbGF5LnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIElmIHRoZSBkZWxheSBhcmd1bWVudCBpcyBhIE51bWJlciwgdGhpcyBvcGVyYXRvciB0aW1lIHNoaWZ0cyB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGJ5IHRoYXQgYW1vdW50IG9mIHRpbWUgZXhwcmVzc2VkIGluIG1pbGxpc2Vjb25kcy4gVGhlIHJlbGF0aXZlXG4gKiB0aW1lIGludGVydmFscyBiZXR3ZWVuIHRoZSB2YWx1ZXMgYXJlIHByZXNlcnZlZC5cbiAqXG4gKiBJZiB0aGUgZGVsYXkgYXJndW1lbnQgaXMgYSBEYXRlLCB0aGlzIG9wZXJhdG9yIHRpbWUgc2hpZnRzIHRoZSBzdGFydCBvZiB0aGVcbiAqIE9ic2VydmFibGUgZXhlY3V0aW9uIHVudGlsIHRoZSBnaXZlbiBkYXRlIG9jY3Vycy5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5EZWxheSBlYWNoIGNsaWNrIGJ5IG9uZSBzZWNvbmQ8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGRlbGF5ZWRDbGlja3MgPSBjbGlja3MuZGVsYXkoMTAwMCk7IC8vIGVhY2ggY2xpY2sgZW1pdHRlZCBhZnRlciAxIHNlY29uZFxuICogZGVsYXllZENsaWNrcy5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+RGVsYXkgYWxsIGNsaWNrcyB1bnRpbCBhIGZ1dHVyZSBkYXRlIGhhcHBlbnM8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGRhdGUgPSBuZXcgRGF0ZSgnTWFyY2ggMTUsIDIwNTAgMTI6MDA6MDAnKTsgLy8gaW4gdGhlIGZ1dHVyZVxuICogdmFyIGRlbGF5ZWRDbGlja3MgPSBjbGlja3MuZGVsYXkoZGF0ZSk7IC8vIGNsaWNrIGVtaXR0ZWQgb25seSBhZnRlciB0aGF0IGRhdGVcbiAqIGRlbGF5ZWRDbGlja3Muc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBzZWUge0BsaW5rIGRlYm91bmNlVGltZX1cbiAqIEBzZWUge0BsaW5rIGRlbGF5V2hlbn1cbiAqXG4gKiBAcGFyYW0ge251bWJlcnxEYXRlfSBkZWxheSBUaGUgZGVsYXkgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIChhIGBudW1iZXJgKSBvclxuICogYSBgRGF0ZWAgdW50aWwgd2hpY2ggdGhlIGVtaXNzaW9uIG9mIHRoZSBzb3VyY2UgaXRlbXMgaXMgZGVsYXllZC5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyPWFzeW5jXSBUaGUgU2NoZWR1bGVyIHRvIHVzZSBmb3JcbiAqIG1hbmFnaW5nIHRoZSB0aW1lcnMgdGhhdCBoYW5kbGUgdGhlIHRpbWUtc2hpZnQgZm9yIGVhY2ggaXRlbS5cbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgdGhhdCBkZWxheXMgdGhlIGVtaXNzaW9ucyBvZiB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlIGJ5IHRoZSBzcGVjaWZpZWQgdGltZW91dCBvciBEYXRlLlxuICogQG1ldGhvZCBkZWxheVxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5PFQ+KGRlbGF5OiBudW1iZXJ8RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZXI6IFNjaGVkdWxlciA9IGFzeW5jKTogT2JzZXJ2YWJsZTxUPiB7XG4gIGNvbnN0IGFic29sdXRlRGVsYXkgPSBpc0RhdGUoZGVsYXkpO1xuICBjb25zdCBkZWxheUZvciA9IGFic29sdXRlRGVsYXkgPyAoK2RlbGF5IC0gc2NoZWR1bGVyLm5vdygpKSA6IE1hdGguYWJzKDxudW1iZXI+ZGVsYXkpO1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBEZWxheU9wZXJhdG9yKGRlbGF5Rm9yLCBzY2hlZHVsZXIpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxheVNpZ25hdHVyZTxUPiB7XG4gIChkZWxheTogbnVtYmVyIHwgRGF0ZSwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbn1cblxuY2xhc3MgRGVsYXlPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWxheTogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IERlbGF5U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmRlbGF5LCB0aGlzLnNjaGVkdWxlcikpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBEZWxheVN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgcHJpdmF0ZSBxdWV1ZTogQXJyYXk8YW55PiA9IFtdO1xuICBwcml2YXRlIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGVycm9yZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIHN0YXRpYyBkaXNwYXRjaChzdGF0ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3Qgc291cmNlID0gc3RhdGUuc291cmNlO1xuICAgIGNvbnN0IHF1ZXVlID0gc291cmNlLnF1ZXVlO1xuICAgIGNvbnN0IHNjaGVkdWxlciA9IHN0YXRlLnNjaGVkdWxlcjtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHN0YXRlLmRlc3RpbmF0aW9uO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDAgJiYgKHF1ZXVlWzBdLnRpbWUgLSBzY2hlZHVsZXIubm93KCkpIDw9IDApIHtcbiAgICAgIHF1ZXVlLnNoaWZ0KCkubm90aWZpY2F0aW9uLm9ic2VydmUoZGVzdGluYXRpb24pO1xuICAgIH1cblxuICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBkZWxheSA9IE1hdGgubWF4KDAsIHF1ZXVlWzBdLnRpbWUgLSBzY2hlZHVsZXIubm93KCkpO1xuICAgICAgKDxhbnk+IHRoaXMpLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvdXJjZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkZWxheTogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2NoZWR1bGUoc2NoZWR1bGVyOiBTY2hlZHVsZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKERlbGF5U3Vic2NyaWJlci5kaXNwYXRjaCwgdGhpcy5kZWxheSwge1xuICAgICAgc291cmNlOiB0aGlzLCBkZXN0aW5hdGlvbjogdGhpcy5kZXN0aW5hdGlvbiwgc2NoZWR1bGVyOiBzY2hlZHVsZXJcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIHNjaGVkdWxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPGFueT4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lcnJvcmVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgY29uc3QgbWVzc2FnZSA9IG5ldyBEZWxheU1lc3NhZ2Uoc2NoZWR1bGVyLm5vdygpICsgdGhpcy5kZWxheSwgbm90aWZpY2F0aW9uKTtcbiAgICB0aGlzLnF1ZXVlLnB1c2gobWVzc2FnZSk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9zY2hlZHVsZShzY2hlZHVsZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCkge1xuICAgIHRoaXMuc2NoZWR1bGVOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uLmNyZWF0ZU5leHQodmFsdWUpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpIHtcbiAgICB0aGlzLmVycm9yZWQgPSB0cnVlO1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCkge1xuICAgIHRoaXMuc2NoZWR1bGVOb3RpZmljYXRpb24oTm90aWZpY2F0aW9uLmNyZWF0ZUNvbXBsZXRlKCkpO1xuICB9XG59XG5cbmNsYXNzIERlbGF5TWVzc2FnZTxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZTogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjogYW55KSB7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
