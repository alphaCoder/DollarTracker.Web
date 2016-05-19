System.register(['../Subscriber', '../Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subscriber_1, Subject_1;
    var WindowCountOperator, WindowCountSubscriber;
    /**
     * Branch out the source Observable values as a nested Observable with each
     * nested Observable emitting at most `windowSize` values.
     *
     * <span class="informal">It's like {@link bufferCount}, but emits a nested
     * Observable instead of an array.</span>
     *
     * <img src="./img/windowCount.png" width="100%">
     *
     * Returns an Observable that emits windows of items it collects from the source
     * Observable. The output Observable emits windows every `startWindowEvery`
     * items, each containing no more than `windowSize` items. When the source
     * Observable completes or encounters an error, the output Observable emits
     * the current window and propagates the notification from the source
     * Observable. If `startWindowEvery` is not provided, then new windows are
     * started immediately at the start of the source and when each window completes
     * with size `windowSize`.
     *
     * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.windowCount(3)
     *   .map(win => win.skip(1)) // skip first of every 3 clicks
     *   .mergeAll(); // flatten the Observable-of-Observables
     * result.subscribe(x => console.log(x));
     *
     * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.windowCount(2, 3)
     *   .mergeAll(); // flatten the Observable-of-Observables
     * result.subscribe(x => console.log(x));
     *
     * @see {@link window}
     * @see {@link windowTime}
     * @see {@link windowToggle}
     * @see {@link windowWhen}
     * @see {@link bufferCount}
     *
     * @param {number} windowSize The maximum number of values emitted by each
     * window.
     * @param {number} [startWindowEvery] Interval at which to start a new window.
     * For example if `startWindowEvery` is `2`, then a new window will be started
     * on every other value from the source. A new window is started at the
     * beginning of the source by default.
     * @return {Observable<Observable<T>>} An Observable of windows, which in turn
     * are Observable of values.
     * @method windowCount
     * @owner Observable
     */
    function windowCount(windowSize, startWindowEvery) {
        if (startWindowEvery === void 0) { startWindowEvery = 0; }
        return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
    }
    exports_1("windowCount", windowCount);
    return {
        setters:[
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            WindowCountOperator = (function () {
                function WindowCountOperator(windowSize, startWindowEvery) {
                    this.windowSize = windowSize;
                    this.startWindowEvery = startWindowEvery;
                }
                WindowCountOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
                };
                return WindowCountOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            WindowCountSubscriber = (function (_super) {
                __extends(WindowCountSubscriber, _super);
                function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
                    _super.call(this, destination);
                    this.destination = destination;
                    this.windowSize = windowSize;
                    this.startWindowEvery = startWindowEvery;
                    this.windows = [new Subject_1.Subject()];
                    this.count = 0;
                    var firstWindow = this.windows[0];
                    destination.add(firstWindow);
                    destination.next(firstWindow);
                }
                WindowCountSubscriber.prototype._next = function (value) {
                    var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
                    var destination = this.destination;
                    var windowSize = this.windowSize;
                    var windows = this.windows;
                    var len = windows.length;
                    for (var i = 0; i < len; i++) {
                        windows[i].next(value);
                    }
                    var c = this.count - windowSize + 1;
                    if (c >= 0 && c % startWindowEvery === 0) {
                        windows.shift().complete();
                    }
                    if (++this.count % startWindowEvery === 0) {
                        var window_1 = new Subject_1.Subject();
                        windows.push(window_1);
                        destination.add(window_1);
                        destination.next(window_1);
                    }
                };
                WindowCountSubscriber.prototype._error = function (err) {
                    var windows = this.windows;
                    while (windows.length > 0) {
                        windows.shift().error(err);
                    }
                    this.destination.error(err);
                };
                WindowCountSubscriber.prototype._complete = function () {
                    var windows = this.windows;
                    while (windows.length > 0) {
                        windows.shift().complete();
                    }
                    this.destination.complete();
                };
                return WindowCountSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3dpbmRvd0NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0ErQ0c7SUFDSCxxQkFBK0IsVUFBa0IsRUFDbEIsZ0JBQTRCO1FBQTVCLGdDQUE0QixHQUE1QixvQkFBNEI7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBbUIsQ0FBSSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFIRCxxQ0FHQyxDQUFBOzs7Ozs7Ozs7O1lBTUQ7Z0JBRUUsNkJBQW9CLFVBQWtCLEVBQ2xCLGdCQUF3QjtvQkFEeEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtvQkFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO2dCQUM1QyxDQUFDO2dCQUVELGtDQUFJLEdBQUosVUFBSyxVQUFxQyxFQUFFLE1BQVc7b0JBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUkscUJBQXFCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDMUcsQ0FBQztnQkFDSCwwQkFBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUF1Qyx5Q0FBYTtnQkFJbEQsK0JBQXNCLFdBQXNDLEVBQ3hDLFVBQWtCLEVBQ2xCLGdCQUF3QjtvQkFDMUMsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBSEMsZ0JBQVcsR0FBWCxXQUFXLENBQTJCO29CQUN4QyxlQUFVLEdBQVYsVUFBVSxDQUFRO29CQUNsQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7b0JBTHBDLFlBQU8sR0FBaUIsQ0FBRSxJQUFJLGlCQUFPLEVBQUssQ0FBRSxDQUFDO29CQUM3QyxVQUFLLEdBQVcsQ0FBQyxDQUFDO29CQU14QixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxXQUFXLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM3QixXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVTLHFDQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDL0YsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDckMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDN0IsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFFM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDekIsQ0FBQztvQkFDRCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDN0IsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsSUFBTSxRQUFNLEdBQUcsSUFBSSxpQkFBTyxFQUFLLENBQUM7d0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUM7d0JBQ3JCLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBTSxDQUFDLENBQUM7d0JBQ3hCLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBTSxDQUFDLENBQUM7b0JBQzNCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFUyxzQ0FBTSxHQUFoQixVQUFpQixHQUFRO29CQUN2QixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUM3QixPQUFPLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7d0JBQzFCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRVMseUNBQVMsR0FBbkI7b0JBQ0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDN0IsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUMxQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzdCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFDSCw0QkFBQztZQUFELENBbERBLEFBa0RDLENBbERzQyx1QkFBVSxHQWtEaEQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivd2luZG93Q291bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAnLi4vU3ViamVjdCc7XG5cbi8qKlxuICogQnJhbmNoIG91dCB0aGUgc291cmNlIE9ic2VydmFibGUgdmFsdWVzIGFzIGEgbmVzdGVkIE9ic2VydmFibGUgd2l0aCBlYWNoXG4gKiBuZXN0ZWQgT2JzZXJ2YWJsZSBlbWl0dGluZyBhdCBtb3N0IGB3aW5kb3dTaXplYCB2YWx1ZXMuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgYnVmZmVyQ291bnR9LCBidXQgZW1pdHMgYSBuZXN0ZWRcbiAqIE9ic2VydmFibGUgaW5zdGVhZCBvZiBhbiBhcnJheS48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy93aW5kb3dDb3VudC5wbmdcIiB3aWR0aD1cIjEwMCVcIj5cbiAqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB3aW5kb3dzIG9mIGl0ZW1zIGl0IGNvbGxlY3RzIGZyb20gdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZS4gVGhlIG91dHB1dCBPYnNlcnZhYmxlIGVtaXRzIHdpbmRvd3MgZXZlcnkgYHN0YXJ0V2luZG93RXZlcnlgXG4gKiBpdGVtcywgZWFjaCBjb250YWluaW5nIG5vIG1vcmUgdGhhbiBgd2luZG93U2l6ZWAgaXRlbXMuIFdoZW4gdGhlIHNvdXJjZVxuICogT2JzZXJ2YWJsZSBjb21wbGV0ZXMgb3IgZW5jb3VudGVycyBhbiBlcnJvciwgdGhlIG91dHB1dCBPYnNlcnZhYmxlIGVtaXRzXG4gKiB0aGUgY3VycmVudCB3aW5kb3cgYW5kIHByb3BhZ2F0ZXMgdGhlIG5vdGlmaWNhdGlvbiBmcm9tIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUuIElmIGBzdGFydFdpbmRvd0V2ZXJ5YCBpcyBub3QgcHJvdmlkZWQsIHRoZW4gbmV3IHdpbmRvd3MgYXJlXG4gKiBzdGFydGVkIGltbWVkaWF0ZWx5IGF0IHRoZSBzdGFydCBvZiB0aGUgc291cmNlIGFuZCB3aGVuIGVhY2ggd2luZG93IGNvbXBsZXRlc1xuICogd2l0aCBzaXplIGB3aW5kb3dTaXplYC5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5JZ25vcmUgZXZlcnkgM3JkIGNsaWNrIGV2ZW50LCBzdGFydGluZyBmcm9tIHRoZSBmaXJzdCBvbmU8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHJlc3VsdCA9IGNsaWNrcy53aW5kb3dDb3VudCgzKVxuICogICAubWFwKHdpbiA9PiB3aW4uc2tpcCgxKSkgLy8gc2tpcCBmaXJzdCBvZiBldmVyeSAzIGNsaWNrc1xuICogICAubWVyZ2VBbGwoKTsgLy8gZmxhdHRlbiB0aGUgT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlc1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5JZ25vcmUgZXZlcnkgM3JkIGNsaWNrIGV2ZW50LCBzdGFydGluZyBmcm9tIHRoZSB0aGlyZCBvbmU8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIHJlc3VsdCA9IGNsaWNrcy53aW5kb3dDb3VudCgyLCAzKVxuICogICAubWVyZ2VBbGwoKTsgLy8gZmxhdHRlbiB0aGUgT2JzZXJ2YWJsZS1vZi1PYnNlcnZhYmxlc1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayB3aW5kb3d9XG4gKiBAc2VlIHtAbGluayB3aW5kb3dUaW1lfVxuICogQHNlZSB7QGxpbmsgd2luZG93VG9nZ2xlfVxuICogQHNlZSB7QGxpbmsgd2luZG93V2hlbn1cbiAqIEBzZWUge0BsaW5rIGJ1ZmZlckNvdW50fVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aW5kb3dTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiB2YWx1ZXMgZW1pdHRlZCBieSBlYWNoXG4gKiB3aW5kb3cuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0V2luZG93RXZlcnldIEludGVydmFsIGF0IHdoaWNoIHRvIHN0YXJ0IGEgbmV3IHdpbmRvdy5cbiAqIEZvciBleGFtcGxlIGlmIGBzdGFydFdpbmRvd0V2ZXJ5YCBpcyBgMmAsIHRoZW4gYSBuZXcgd2luZG93IHdpbGwgYmUgc3RhcnRlZFxuICogb24gZXZlcnkgb3RoZXIgdmFsdWUgZnJvbSB0aGUgc291cmNlLiBBIG5ldyB3aW5kb3cgaXMgc3RhcnRlZCBhdCB0aGVcbiAqIGJlZ2lubmluZyBvZiB0aGUgc291cmNlIGJ5IGRlZmF1bHQuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPE9ic2VydmFibGU8VD4+fSBBbiBPYnNlcnZhYmxlIG9mIHdpbmRvd3MsIHdoaWNoIGluIHR1cm5cbiAqIGFyZSBPYnNlcnZhYmxlIG9mIHZhbHVlcy5cbiAqIEBtZXRob2Qgd2luZG93Q291bnRcbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aW5kb3dDb3VudDxUPih3aW5kb3dTaXplOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRXaW5kb3dFdmVyeTogbnVtYmVyID0gMCk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxUPj4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBXaW5kb3dDb3VudE9wZXJhdG9yPFQ+KHdpbmRvd1NpemUsIHN0YXJ0V2luZG93RXZlcnkpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dDb3VudFNpZ25hdHVyZTxUPiB7XG4gICh3aW5kb3dTaXplOiBudW1iZXIsIHN0YXJ0V2luZG93RXZlcnk/OiBudW1iZXIpOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8VD4+O1xufVxuXG5jbGFzcyBXaW5kb3dDb3VudE9wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgT2JzZXJ2YWJsZTxUPj4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luZG93U2l6ZTogbnVtYmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIHN0YXJ0V2luZG93RXZlcnk6IG51bWJlcikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPE9ic2VydmFibGU8VD4+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBXaW5kb3dDb3VudFN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy53aW5kb3dTaXplLCB0aGlzLnN0YXJ0V2luZG93RXZlcnkpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgV2luZG93Q291bnRTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgU3Vic2NyaWJlcjxUPiB7XG4gIHByaXZhdGUgd2luZG93czogU3ViamVjdDxUPltdID0gWyBuZXcgU3ViamVjdDxUPigpIF07XG4gIHByaXZhdGUgY291bnQ6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPE9ic2VydmFibGU8VD4+LFxuICAgICAgICAgICAgICBwcml2YXRlIHdpbmRvd1NpemU6IG51bWJlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzdGFydFdpbmRvd0V2ZXJ5OiBudW1iZXIpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gICAgY29uc3QgZmlyc3RXaW5kb3cgPSB0aGlzLndpbmRvd3NbMF07XG4gICAgZGVzdGluYXRpb24uYWRkKGZpcnN0V2luZG93KTtcbiAgICBkZXN0aW5hdGlvbi5uZXh0KGZpcnN0V2luZG93KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCkge1xuICAgIGNvbnN0IHN0YXJ0V2luZG93RXZlcnkgPSAodGhpcy5zdGFydFdpbmRvd0V2ZXJ5ID4gMCkgPyB0aGlzLnN0YXJ0V2luZG93RXZlcnkgOiB0aGlzLndpbmRvd1NpemU7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgIGNvbnN0IHdpbmRvd1NpemUgPSB0aGlzLndpbmRvd1NpemU7XG4gICAgY29uc3Qgd2luZG93cyA9IHRoaXMud2luZG93cztcbiAgICBjb25zdCBsZW4gPSB3aW5kb3dzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHdpbmRvd3NbaV0ubmV4dCh2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGMgPSB0aGlzLmNvdW50IC0gd2luZG93U2l6ZSArIDE7XG4gICAgaWYgKGMgPj0gMCAmJiBjICUgc3RhcnRXaW5kb3dFdmVyeSA9PT0gMCkge1xuICAgICAgd2luZG93cy5zaGlmdCgpLmNvbXBsZXRlKCk7XG4gICAgfVxuICAgIGlmICgrK3RoaXMuY291bnQgJSBzdGFydFdpbmRvd0V2ZXJ5ID09PSAwKSB7XG4gICAgICBjb25zdCB3aW5kb3cgPSBuZXcgU3ViamVjdDxUPigpO1xuICAgICAgd2luZG93cy5wdXNoKHdpbmRvdyk7XG4gICAgICBkZXN0aW5hdGlvbi5hZGQod2luZG93KTtcbiAgICAgIGRlc3RpbmF0aW9uLm5leHQod2luZG93KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Vycm9yKGVycjogYW55KSB7XG4gICAgY29uc3Qgd2luZG93cyA9IHRoaXMud2luZG93cztcbiAgICB3aGlsZSAod2luZG93cy5sZW5ndGggPiAwKSB7XG4gICAgICB3aW5kb3dzLnNoaWZ0KCkuZXJyb3IoZXJyKTtcbiAgICB9XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpIHtcbiAgICBjb25zdCB3aW5kb3dzID0gdGhpcy53aW5kb3dzO1xuICAgIHdoaWxlICh3aW5kb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIHdpbmRvd3Muc2hpZnQoKS5jb21wbGV0ZSgpO1xuICAgIH1cbiAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
