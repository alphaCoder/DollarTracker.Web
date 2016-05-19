System.register(['../Subscriber', '../Subject', '../scheduler/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Subject_1, async_1;
    var WindowTimeOperator, WindowTimeSubscriber;
    /**
     * Branch out the source Observable values as a nested Observable periodically
     * in time.
     *
     * <span class="informal">It's like {@link bufferTime}, but emits a nested
     * Observable instead of an array.</span>
     *
     * <img src="./img/windowTime.png" width="100%">
     *
     * Returns an Observable that emits windows of items it collects from the source
     * Observable. The output Observable starts a new window periodically, as
     * determined by the `windowCreationInterval` argument. It emits each window
     * after a fixed timespan, specified by the `windowTimeSpan` argument. When the
     * source Observable completes or encounters an error, the output Observable
     * emits the current window and propagates the notification from the source
     * Observable. If `windowCreationInterval` is not provided, the output
     * Observable starts a new window when the previous window of duration
     * `windowTimeSpan` completes.
     *
     * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.windowTime(1000)
     *   .map(win => win.take(2)) // each window has at most 2 emissions
     *   .mergeAll(); // flatten the Observable-of-Observables
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Every 5 seconds start a window 1 second long, and emit at most 2 click events per window</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.windowTime(1000, 5000)
     *   .map(win => win.take(2)) // each window has at most 2 emissions
     *   .mergeAll(); // flatten the Observable-of-Observables
     * result.subscribe(x => console.log(x));
     *
     * @see {@link window}
     * @see {@link windowCount}
     * @see {@link windowToggle}
     * @see {@link windowWhen}
     * @see {@link bufferTime}
     *
     * @param {number} windowTimeSpan The amount of time to fill each window.
     * @param {number} [windowCreationInterval] The interval at which to start new
     * windows.
     * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
     * intervals that determine window boundaries.
     * @return {Observable<Observable<T>>} An observable of windows, which in turn
     * are Observables.
     * @method windowTime
     * @owner Observable
     */
    function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
        if (windowCreationInterval === void 0) { windowCreationInterval = null; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
    }
    exports_1("windowTime", windowTime);
    function dispatchWindowTimeSpanOnly(state) {
        var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
        if (window) {
            window.complete();
        }
        state.window = subscriber.openWindow();
        this.schedule(state, windowTimeSpan);
    }
    function dispatchWindowCreation(state) {
        var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
        var window = subscriber.openWindow();
        var action = this;
        var context = { action: action, subscription: null };
        var timeSpanState = { subscriber: subscriber, window: window, context: context };
        context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
        action.add(context.subscription);
        action.schedule(state, windowCreationInterval);
    }
    function dispatchWindowClose(arg) {
        var subscriber = arg.subscriber, window = arg.window, context = arg.context;
        if (context && context.action && context.subscription) {
            context.action.remove(context.subscription);
        }
        subscriber.closeWindow(window);
    }
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            WindowTimeOperator = (function () {
                function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
                    this.windowTimeSpan = windowTimeSpan;
                    this.windowCreationInterval = windowCreationInterval;
                    this.scheduler = scheduler;
                }
                WindowTimeOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler));
                };
                return WindowTimeOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            WindowTimeSubscriber = (function (_super) {
                __extends(WindowTimeSubscriber, _super);
                function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
                    _super.call(this, destination);
                    this.destination = destination;
                    this.windowTimeSpan = windowTimeSpan;
                    this.windowCreationInterval = windowCreationInterval;
                    this.scheduler = scheduler;
                    this.windows = [];
                    if (windowCreationInterval !== null && windowCreationInterval >= 0) {
                        var window_1 = this.openWindow();
                        var closeState = { subscriber: this, window: window_1, context: null };
                        var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
                        this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
                        this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
                    }
                    else {
                        var window_2 = this.openWindow();
                        var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
                        this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
                    }
                }
                WindowTimeSubscriber.prototype._next = function (value) {
                    var windows = this.windows;
                    var len = windows.length;
                    for (var i = 0; i < len; i++) {
                        var window_3 = windows[i];
                        if (!window_3.isUnsubscribed) {
                            window_3.next(value);
                        }
                    }
                };
                WindowTimeSubscriber.prototype._error = function (err) {
                    var windows = this.windows;
                    while (windows.length > 0) {
                        windows.shift().error(err);
                    }
                    this.destination.error(err);
                };
                WindowTimeSubscriber.prototype._complete = function () {
                    var windows = this.windows;
                    while (windows.length > 0) {
                        var window_4 = windows.shift();
                        if (!window_4.isUnsubscribed) {
                            window_4.complete();
                        }
                    }
                    this.destination.complete();
                };
                WindowTimeSubscriber.prototype.openWindow = function () {
                    var window = new Subject_1.Subject();
                    this.windows.push(window);
                    var destination = this.destination;
                    destination.add(window);
                    destination.next(window);
                    return window;
                };
                WindowTimeSubscriber.prototype.closeWindow = function (window) {
                    window.complete();
                    var windows = this.windows;
                    windows.splice(windows.indexOf(window), 1);
                };
                return WindowTimeSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3dpbmRvd1RpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnREc7SUFDSCxvQkFBOEIsY0FBc0IsRUFDdEIsc0JBQXFDLEVBQ3JDLFNBQTRCO1FBRDVCLHNDQUFxQyxHQUFyQyw2QkFBcUM7UUFDckMseUJBQTRCLEdBQTVCLHlCQUE0QjtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFrQixDQUFJLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFKRCxtQ0FJQyxDQUFBO0lBeUdELG9DQUF1QyxLQUEyQjtRQUN4RCxpQ0FBVSxFQUFFLHFDQUFjLEVBQUUscUJBQU0sQ0FBVztRQUNyRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFDRCxLQUFLLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqQyxJQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBYUQsZ0NBQW1DLEtBQXVCO1FBQ2xELHlDQUFjLEVBQUUsNkJBQVUsRUFBRSwyQkFBUyxFQUFFLHFEQUFzQixDQUFXO1FBQzlFLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxJQUFJLE1BQU0sR0FBNkIsSUFBSSxDQUFDO1FBQzVDLElBQUksT0FBTyxHQUFlLEVBQUUsUUFBQSxNQUFNLEVBQUUsWUFBWSxFQUFPLElBQUksRUFBRSxDQUFDO1FBQzlELElBQU0sYUFBYSxHQUFtQixFQUFFLFlBQUEsVUFBVSxFQUFFLFFBQUEsTUFBTSxFQUFFLFNB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Q0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixRQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ3BCLENBQUM7b0JBQ0gsQ0FBQztvQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM5QixDQUFDO2dCQUVELHlDQUFVLEdBQVY7b0JBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBTyxFQUFLLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUMxQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNyQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELDBDQUFXLEdBQVgsVUFBWSxNQUFrQjtvQkFDNUIsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNsQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUM3QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0gsMkJBQUM7WUFBRCxDQWpFQSxBQWlFQyxDQWpFcUMsdUJBQVUsR0FpRS9DIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3dpbmRvd1RpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAnLi4vU3ViamVjdCc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtBY3Rpb259IGZyb20gJy4uL3NjaGVkdWxlci9BY3Rpb24nO1xuaW1wb3J0IHthc3luY30gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcblxuLyoqXG4gKiBCcmFuY2ggb3V0IHRoZSBzb3VyY2UgT2JzZXJ2YWJsZSB2YWx1ZXMgYXMgYSBuZXN0ZWQgT2JzZXJ2YWJsZSBwZXJpb2RpY2FsbHlcbiAqIGluIHRpbWUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgYnVmZmVyVGltZX0sIGJ1dCBlbWl0cyBhIG5lc3RlZFxuICogT2JzZXJ2YWJsZSBpbnN0ZWFkIG9mIGFuIGFycmF5Ljwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3dpbmRvd1RpbWUucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2luZG93cyBvZiBpdGVtcyBpdCBjb2xsZWN0cyBmcm9tIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUuIFRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBzdGFydHMgYSBuZXcgd2luZG93IHBlcmlvZGljYWxseSwgYXNcbiAqIGRldGVybWluZWQgYnkgdGhlIGB3aW5kb3dDcmVhdGlvbkludGVydmFsYCBhcmd1bWVudC4gSXQgZW1pdHMgZWFjaCB3aW5kb3dcbiAqIGFmdGVyIGEgZml4ZWQgdGltZXNwYW4sIHNwZWNpZmllZCBieSB0aGUgYHdpbmRvd1RpbWVTcGFuYCBhcmd1bWVudC4gV2hlbiB0aGVcbiAqIHNvdXJjZSBPYnNlcnZhYmxlIGNvbXBsZXRlcyBvciBlbmNvdW50ZXJzIGFuIGVycm9yLCB0aGUgb3V0cHV0IE9ic2VydmFibGVcbiAqIGVtaXRzIHRoZSBjdXJyZW50IHdpbmRvdyBhbmQgcHJvcGFnYXRlcyB0aGUgbm90aWZpY2F0aW9uIGZyb20gdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZS4gSWYgYHdpbmRvd0NyZWF0aW9uSW50ZXJ2YWxgIGlzIG5vdCBwcm92aWRlZCwgdGhlIG91dHB1dFxuICogT2JzZXJ2YWJsZSBzdGFydHMgYSBuZXcgd2luZG93IHdoZW4gdGhlIHByZXZpb3VzIHdpbmRvdyBvZiBkdXJhdGlvblxuICogYHdpbmRvd1RpbWVTcGFuYCBjb21wbGV0ZXMuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+SW4gZXZlcnkgd2luZG93IG9mIDEgc2Vjb25kIGVhY2gsIGVtaXQgYXQgbW9zdCAyIGNsaWNrIGV2ZW50czwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgcmVzdWx0ID0gY2xpY2tzLndpbmRvd1RpbWUoMTAwMClcbiAqICAgLm1hcCh3aW4gPT4gd2luLnRha2UoMikpIC8vIGVhY2ggd2luZG93IGhhcyBhdCBtb3N0IDIgZW1pc3Npb25zXG4gKiAgIC5tZXJnZUFsbCgpOyAvLyBmbGF0dGVuIHRoZSBPYnNlcnZhYmxlLW9mLU9ic2VydmFibGVzXG4gKiByZXN1bHQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coeCkpO1xuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkV2ZXJ5IDUgc2Vjb25kcyBzdGFydCBhIHdpbmRvdyAxIHNlY29uZCBsb25nLCBhbmQgZW1pdCBhdCBtb3N0IDIgY2xpY2sgZXZlbnRzIHBlciB3aW5kb3c8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHJlc3VsdCA9IGNsaWNrcy53aW5kb3dUaW1lKDEwMDAsIDUwMDApXG4gKiAgIC5tYXAod2luID0+IHdpbi50YWtlKDIpKSAvLyBlYWNoIHdpbmRvdyBoYXMgYXQgbW9zdCAyIGVtaXNzaW9uc1xuICogICAubWVyZ2VBbGwoKTsgLy8gZmxhdHRlbiB0aGUgT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlc1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayB3aW5kb3d9XG4gKiBAc2VlIHtAbGluayB3aW5kb3dDb3VudH1cbiAqIEBzZWUge0BsaW5rIHdpbmRvd1RvZ2dsZX1cbiAqIEBzZWUge0BsaW5rIHdpbmRvd1doZW59XG4gKiBAc2VlIHtAbGluayBidWZmZXJUaW1lfVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dUaW1lU3BhbiBUaGUgYW1vdW50IG9mIHRpbWUgdG8gZmlsbCBlYWNoIHdpbmRvdy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2luZG93Q3JlYXRpb25JbnRlcnZhbF0gVGhlIGludGVydmFsIGF0IHdoaWNoIHRvIHN0YXJ0IG5ld1xuICogd2luZG93cy5cbiAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyPWFzeW5jXSBUaGUgc2NoZWR1bGVyIG9uIHdoaWNoIHRvIHNjaGVkdWxlIHRoZVxuICogaW50ZXJ2YWxzIHRoYXQgZGV0ZXJtaW5lIHdpbmRvdyBib3VuZGFyaWVzLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFQ+Pn0gQW4gb2JzZXJ2YWJsZSBvZiB3aW5kb3dzLCB3aGljaCBpbiB0dXJuXG4gKiBhcmUgT2JzZXJ2YWJsZXMuXG4gKiBAbWV0aG9kIHdpbmRvd1RpbWVcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aW5kb3dUaW1lPFQ+KHdpbmRvd1RpbWVTcGFuOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dDcmVhdGlvbkludGVydmFsOiBudW1iZXIgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVyOiBTY2hlZHVsZXIgPSBhc3luYyk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxUPj4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBXaW5kb3dUaW1lT3BlcmF0b3I8VD4od2luZG93VGltZVNwYW4sIHdpbmRvd0NyZWF0aW9uSW50ZXJ2YWwsIHNjaGVkdWxlcikpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1RpbWVTaWduYXR1cmU8VD4ge1xuICAod2luZG93VGltZVNwYW46IG51bWJlciwgd2luZG93Q3JlYXRpb25JbnRlcnZhbD86IG51bWJlciwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFQ+Pjtcbn1cblxuY2xhc3MgV2luZG93VGltZU9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgT2JzZXJ2YWJsZTxUPj4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luZG93VGltZVNwYW46IG51bWJlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB3aW5kb3dDcmVhdGlvbkludGVydmFsOiBudW1iZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgc2NoZWR1bGVyOiBTY2hlZHVsZXIpIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxPYnNlcnZhYmxlPFQ+Piwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgV2luZG93VGltZVN1YnNjcmliZXIoXG4gICAgICBzdWJzY3JpYmVyLCB0aGlzLndpbmRvd1RpbWVTcGFuLCB0aGlzLndpbmRvd0NyZWF0aW9uSW50ZXJ2YWwsIHRoaXMuc2NoZWR1bGVyXG4gICAgKSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIENyZWF0aW9uU3RhdGU8VD4ge1xuICB3aW5kb3dUaW1lU3BhbjogbnVtYmVyO1xuICB3aW5kb3dDcmVhdGlvbkludGVydmFsOiBudW1iZXI7XG4gIHN1YnNjcmliZXI6IFdpbmRvd1RpbWVTdWJzY3JpYmVyPFQ+O1xuICBzY2hlZHVsZXI6IFNjaGVkdWxlcjtcbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFdpbmRvd1RpbWVTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIHByaXZhdGUgd2luZG93czogU3ViamVjdDxUPltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPE9ic2VydmFibGU8VD4+LFxuICAgICAgICAgICAgICBwcml2YXRlIHdpbmRvd1RpbWVTcGFuOiBudW1iZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgd2luZG93Q3JlYXRpb25JbnRlcnZhbDogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIGlmICh3aW5kb3dDcmVhdGlvbkludGVydmFsICE9PSBudWxsICYmIHdpbmRvd0NyZWF0aW9uSW50ZXJ2YWwgPj0gMCkge1xuICAgICAgbGV0IHdpbmRvdyA9IHRoaXMub3BlbldpbmRvdygpO1xuICAgICAgY29uc3QgY2xvc2VTdGF0ZSA9IHsgc3Vic2NyaWJlcjogdGhpcywgd2luZG93LCBjb250ZXh0OiA8YW55Pm51bGwgfTtcbiAgICAgIGNvbnN0IGNyZWF0aW9uU3RhdGU6IENyZWF0aW9uU3RhdGU8VD4gPSB7IHdpbmRvd1RpbWVTcGFuLCB3aW5kb3dDcmVhdGlvbkludGVydmFsLCBzdWJzY3JpYmVyOiB0aGlzLCBzY2hlZHVsZXIgfTtcbiAgICAgIHRoaXMuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaFdpbmRvd0Nsb3NlLCB3aW5kb3dUaW1lU3BhbiwgY2xvc2VTdGF0ZSkpO1xuICAgICAgdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoV2luZG93Q3JlYXRpb24sIHdpbmRvd0NyZWF0aW9uSW50ZXJ2YWwsIGNyZWF0aW9uU3RhdGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHdpbmRvdyA9IHRoaXMub3BlbldpbmRvdygpO1xuICAgICAgY29uc3QgdGltZVNwYW5Pbmx5U3RhdGUgPSB7IHN1YnNjcmliZXI6IHRoaXMsIHdpbmRvdywgd2luZG93VGltZVNwYW4gfTtcbiAgICAgIHRoaXMuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaFdpbmRvd1RpbWVTcGFuT25seSwgd2luZG93VGltZVNwYW4sIHRpbWVTcGFuT25seVN0YXRlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKSB7XG4gICAgY29uc3Qgd2luZG93cyA9IHRoaXMud2luZG93cztcbiAgICBjb25zdCBsZW4gPSB3aW5kb3dzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCB3aW5kb3cgPSB3aW5kb3dzW2ldO1xuICAgICAgaWYgKCF3aW5kb3cuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgd2luZG93Lm5leHQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfZXJyb3IoZXJyOiBhbnkpIHtcbiAgICBjb25zdCB3aW5kb3dzID0gdGhpcy53aW5kb3dzO1xuICAgIHdoaWxlICh3aW5kb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHdpbmRvd3Muc2hpZnQoKS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCkge1xuICAgIGNvbnN0IHdpbmRvd3MgPSB0aGlzLndpbmRvd3M7XG4gICAgd2hpbGUgKHdpbmRvd3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgd2luZG93ID0gd2luZG93cy5zaGlmdCgpO1xuICAgICAgaWYgKCF3aW5kb3cuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgd2luZG93LmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgfVxuXG4gIG9wZW5XaW5kb3coKTogU3ViamVjdDxUPiB7XG4gICAgY29uc3Qgd2luZG93ID0gbmV3IFN1YmplY3Q8VD4oKTtcbiAgICB0aGlzLndpbmRvd3MucHVzaCh3aW5kb3cpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICBkZXN0aW5hdGlvbi5hZGQod2luZG93KTtcbiAgICBkZXN0aW5hdGlvbi5uZXh0KHdpbmRvdyk7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGNsb3NlV2luZG93KHdpbmRvdzogU3ViamVjdDxUPikge1xuICAgIHdpbmRvdy5jb21wbGV0ZSgpO1xuICAgIGNvbnN0IHdpbmRvd3MgPSB0aGlzLndpbmRvd3M7XG4gICAgd2luZG93cy5zcGxpY2Uod2luZG93cy5pbmRleE9mKHdpbmRvdyksIDEpO1xuICB9XG59XG5cbmludGVyZmFjZSBUaW1lU3Bhbk9ubHlTdGF0ZTxUPiB7XG4gIHdpbmRvdzogU3ViamVjdDxhbnk+O1xuICB3aW5kb3dUaW1lU3BhbjogbnVtYmVyO1xuICBzdWJzY3JpYmVyOiBXaW5kb3dUaW1lU3Vic2NyaWJlcjxUPjtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hXaW5kb3dUaW1lU3Bhbk9ubHk8VD4oc3RhdGU6IFRpbWVTcGFuT25seVN0YXRlPFQ+KSB7XG4gIGNvbnN0IHsgc3Vic2NyaWJlciwgd2luZG93VGltZVNwYW4sIHdpbmRvdyB9ID0gc3RhdGU7XG4gIGlmICh3aW5kb3cpIHtcbiAgICB3aW5kb3cuY29tcGxldGUoKTtcbiAgfVxuICBzdGF0ZS53aW5kb3cgPSBzdWJzY3JpYmVyLm9wZW5XaW5kb3coKTtcbiAgKDxhbnk+dGhpcykuc2NoZWR1bGUoc3RhdGUsIHdpbmRvd1RpbWVTcGFuKTtcbn1cblxuaW50ZXJmYWNlIENvbnRleHQ8VD4ge1xuICBhY3Rpb246IEFjdGlvbjxDcmVhdGlvblN0YXRlPFQ+PjtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG59XG5cbmludGVyZmFjZSBEaXNwYXRjaEFyZzxUPiB7XG4gIHN1YnNjcmliZXI6IFdpbmRvd1RpbWVTdWJzY3JpYmVyPFQ+O1xuICB3aW5kb3c6IFN1YmplY3Q8VD47XG4gIGNvbnRleHQ6IENvbnRleHQ8VD47XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoV2luZG93Q3JlYXRpb248VD4oc3RhdGU6IENyZWF0aW9uU3RhdGU8VD4pIHtcbiAgbGV0IHsgd2luZG93VGltZVNwYW4sIHN1YnNjcmliZXIsIHNjaGVkdWxlciwgd2luZG93Q3JlYXRpb25JbnRlcnZhbCB9ID0gc3RhdGU7XG4gIGxldCB3aW5kb3cgPSBzdWJzY3JpYmVyLm9wZW5XaW5kb3coKTtcbiAgbGV0IGFjdGlvbiA9IDxBY3Rpb248Q3JlYXRpb25TdGF0ZTxUPj4+dGhpcztcbiAgbGV0IGNvbnRleHQ6IENvbnRleHQ8VD4gPSB7IGFjdGlvbiwgc3Vic2NyaXB0aW9uOiA8YW55Pm51bGwgfTtcbiAgY29uc3QgdGltZVNwYW5TdGF0ZTogRGlzcGF0Y2hBcmc8VD4gPSB7IHN1YnNjcmliZXIsIHdpbmRvdywgY29udGV4dCB9O1xuICBjb250ZXh0LnN1YnNjcmlwdGlvbiA9IHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaFdpbmRvd0Nsb3NlLCB3aW5kb3dUaW1lU3BhbiwgdGltZVNwYW5TdGF0ZSk7XG4gIGFjdGlvbi5hZGQoY29udGV4dC5zdWJzY3JpcHRpb24pO1xuICBhY3Rpb24uc2NoZWR1bGUoc3RhdGUsIHdpbmRvd0NyZWF0aW9uSW50ZXJ2YWwpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaFdpbmRvd0Nsb3NlPFQ+KGFyZzogRGlzcGF0Y2hBcmc8VD4pIHtcbiAgY29uc3QgeyBzdWJzY3JpYmVyLCB3aW5kb3csIGNvbnRleHQgfSA9IGFyZztcbiAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5hY3Rpb24gJiYgY29udGV4dC5zdWJzY3JpcHRpb24pIHtcbiAgICBjb250ZXh0LmFjdGlvbi5yZW1vdmUoY29udGV4dC5zdWJzY3JpcHRpb24pO1xuICB9XG4gIHN1YnNjcmliZXIuY2xvc2VXaW5kb3cod2luZG93KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
