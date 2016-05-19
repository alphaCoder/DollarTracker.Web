System.register(['../Subject', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, OuterSubscriber_1, subscribeToResult_1;
    var WindowOperator, WindowSubscriber;
    /**
     * Branch out the source Observable values as a nested Observable whenever
     * `windowBoundaries` emits.
     *
     * <span class="informal">It's like {@link buffer}, but emits a nested Observable
     * instead of an array.</span>
     *
     * <img src="./img/window.png" width="100%">
     *
     * Returns an Observable that emits windows of items it collects from the source
     * Observable. The output Observable emits connected, non-overlapping
     * windows. It emits the current window and opens a new one whenever the
     * Observable `windowBoundaries` emits an item. Because each window is an
     * Observable, the output is a higher-order Observable.
     *
     * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var interval = Rx.Observable.interval(1000);
     * var result = clicks.window(interval)
     *   .map(win => win.take(2)) // each window has at most 2 emissions
     *   .mergeAll(); // flatten the Observable-of-Observables
     * result.subscribe(x => console.log(x));
     *
     * @see {@link windowCount}
     * @see {@link windowTime}
     * @see {@link windowToggle}
     * @see {@link windowWhen}
     * @see {@link buffer}
     *
     * @param {Observable<any>} windowBoundaries An Observable that completes the
     * previous window and starts a new window.
     * @return {Observable<Observable<T>>} An Observable of windows, which are
     * Observables emitting values of the source Observable.
     * @method window
     * @owner Observable
     */
    function window(windowBoundaries) {
        return this.lift(new WindowOperator(windowBoundaries));
    }
    exports_1("window", window);
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            WindowOperator = (function () {
                function WindowOperator(windowBoundaries) {
                    this.windowBoundaries = windowBoundaries;
                }
                WindowOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new WindowSubscriber(subscriber, this.windowBoundaries));
                };
                return WindowOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            WindowSubscriber = (function (_super) {
                __extends(WindowSubscriber, _super);
                function WindowSubscriber(destination, windowBoundaries) {
                    _super.call(this, destination);
                    this.destination = destination;
                    this.windowBoundaries = windowBoundaries;
                    this.add(subscribeToResult_1.subscribeToResult(this, windowBoundaries));
                    this.openWindow();
                }
                WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.openWindow();
                };
                WindowSubscriber.prototype.notifyError = function (error, innerSub) {
                    this._error(error);
                };
                WindowSubscriber.prototype.notifyComplete = function (innerSub) {
                    this._complete();
                };
                WindowSubscriber.prototype._next = function (value) {
                    this.window.next(value);
                };
                WindowSubscriber.prototype._error = function (err) {
                    this.window.error(err);
                    this.destination.error(err);
                };
                WindowSubscriber.prototype._complete = function () {
                    this.window.complete();
                    this.destination.complete();
                };
                WindowSubscriber.prototype.openWindow = function () {
                    var prevWindow = this.window;
                    if (prevWindow) {
                        prevWindow.complete();
                    }
                    var destination = this.destination;
                    var newWindow = this.window = new Subject_1.Subject();
                    destination.add(newWindow);
                    destination.next(newWindow);
                };
                return WindowSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3dpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbUNHO0lBQ0gsZ0JBQTBCLGdCQUFpQztRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUZELDJCQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7WUFNRDtnQkFFRSx3QkFBb0IsZ0JBQWlDO29CQUFqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO2dCQUNyRCxDQUFDO2dCQUVELDZCQUFJLEdBQUosVUFBSyxVQUFxQyxFQUFFLE1BQVc7b0JBQ3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLENBQUM7Z0JBQ0gscUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBa0Msb0NBQXVCO2dCQUd2RCwwQkFBc0IsV0FBc0MsRUFDeEMsZ0JBQWlDO29CQUNuRCxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFGQyxnQkFBVyxHQUFYLFdBQVcsQ0FBMkI7b0JBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBRW5ELElBQUksQ0FBQyxHQUFHLENBQUMscUNBQWlCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNwQixDQUFDO2dCQUVELHFDQUFVLEdBQVYsVUFBVyxVQUFhLEVBQUUsVUFBZSxFQUM5QixVQUFrQixFQUFFLFVBQWtCLEVBQ3RDLFFBQWlDO29CQUMxQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQsc0NBQVcsR0FBWCxVQUFZLEtBQVUsRUFBRSxRQUFpQztvQkFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsQ0FBQztnQkFFRCx5Q0FBYyxHQUFkLFVBQWUsUUFBaUM7b0JBQzlDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFFUyxnQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVTLGlDQUFNLEdBQWhCLFVBQWlCLEdBQVE7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFUyxvQ0FBUyxHQUFuQjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM5QixDQUFDO2dCQUVPLHFDQUFVLEdBQWxCO29CQUNFLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQy9CLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2YsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QixDQUFDO29CQUNELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ3JDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQkFBTyxFQUFLLENBQUM7b0JBQ2pELFdBQVcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzNCLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBQ0gsdUJBQUM7WUFBRCxDQWhEQSxBQWdEQyxDQWhEaUMsaUNBQWUsR0FnRGhEIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3dpbmRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICcuLi9TdWJqZWN0JztcblxuaW1wb3J0IHtPdXRlclN1YnNjcmliZXJ9IGZyb20gJy4uL091dGVyU3Vic2NyaWJlcic7XG5pbXBvcnQge0lubmVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vSW5uZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7c3Vic2NyaWJlVG9SZXN1bHR9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuXG4vKipcbiAqIEJyYW5jaCBvdXQgdGhlIHNvdXJjZSBPYnNlcnZhYmxlIHZhbHVlcyBhcyBhIG5lc3RlZCBPYnNlcnZhYmxlIHdoZW5ldmVyXG4gKiBgd2luZG93Qm91bmRhcmllc2AgZW1pdHMuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgYnVmZmVyfSwgYnV0IGVtaXRzIGEgbmVzdGVkIE9ic2VydmFibGVcbiAqIGluc3RlYWQgb2YgYW4gYXJyYXkuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvd2luZG93LnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdpbmRvd3Mgb2YgaXRlbXMgaXQgY29sbGVjdHMgZnJvbSB0aGUgc291cmNlXG4gKiBPYnNlcnZhYmxlLiBUaGUgb3V0cHV0IE9ic2VydmFibGUgZW1pdHMgY29ubmVjdGVkLCBub24tb3ZlcmxhcHBpbmdcbiAqIHdpbmRvd3MuIEl0IGVtaXRzIHRoZSBjdXJyZW50IHdpbmRvdyBhbmQgb3BlbnMgYSBuZXcgb25lIHdoZW5ldmVyIHRoZVxuICogT2JzZXJ2YWJsZSBgd2luZG93Qm91bmRhcmllc2AgZW1pdHMgYW4gaXRlbS4gQmVjYXVzZSBlYWNoIHdpbmRvdyBpcyBhblxuICogT2JzZXJ2YWJsZSwgdGhlIG91dHB1dCBpcyBhIGhpZ2hlci1vcmRlciBPYnNlcnZhYmxlLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkluIGV2ZXJ5IHdpbmRvdyBvZiAxIHNlY29uZCBlYWNoLCBlbWl0IGF0IG1vc3QgMiBjbGljayBldmVudHM8L2NhcHRpb24+XG4gKiB2YXIgY2xpY2tzID0gUnguT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpO1xuICogdmFyIGludGVydmFsID0gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwKTtcbiAqIHZhciByZXN1bHQgPSBjbGlja3Mud2luZG93KGludGVydmFsKVxuICogICAubWFwKHdpbiA9PiB3aW4udGFrZSgyKSkgLy8gZWFjaCB3aW5kb3cgaGFzIGF0IG1vc3QgMiBlbWlzc2lvbnNcbiAqICAgLm1lcmdlQWxsKCk7IC8vIGZsYXR0ZW4gdGhlIE9ic2VydmFibGUtb2YtT2JzZXJ2YWJsZXNcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgd2luZG93Q291bnR9XG4gKiBAc2VlIHtAbGluayB3aW5kb3dUaW1lfVxuICogQHNlZSB7QGxpbmsgd2luZG93VG9nZ2xlfVxuICogQHNlZSB7QGxpbmsgd2luZG93V2hlbn1cbiAqIEBzZWUge0BsaW5rIGJ1ZmZlcn1cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGU8YW55Pn0gd2luZG93Qm91bmRhcmllcyBBbiBPYnNlcnZhYmxlIHRoYXQgY29tcGxldGVzIHRoZVxuICogcHJldmlvdXMgd2luZG93IGFuZCBzdGFydHMgYSBuZXcgd2luZG93LlxuICogQHJldHVybiB7T2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFQ+Pn0gQW4gT2JzZXJ2YWJsZSBvZiB3aW5kb3dzLCB3aGljaCBhcmVcbiAqIE9ic2VydmFibGVzIGVtaXR0aW5nIHZhbHVlcyBvZiB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKiBAbWV0aG9kIHdpbmRvd1xuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpbmRvdzxUPih3aW5kb3dCb3VuZGFyaWVzOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8VD4+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgV2luZG93T3BlcmF0b3I8VD4od2luZG93Qm91bmRhcmllcykpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1NpZ25hdHVyZTxUPiB7XG4gICh3aW5kb3dCb3VuZGFyaWVzOiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8VD4+O1xufVxuXG5jbGFzcyBXaW5kb3dPcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIE9ic2VydmFibGU8VD4+IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpbmRvd0JvdW5kYXJpZXM6IE9ic2VydmFibGU8YW55Pikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPE9ic2VydmFibGU8VD4+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBXaW5kb3dTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMud2luZG93Qm91bmRhcmllcykpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBXaW5kb3dTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIGFueT4ge1xuICBwcml2YXRlIHdpbmRvdzogU3ViamVjdDxUPjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGVzdGluYXRpb246IFN1YnNjcmliZXI8T2JzZXJ2YWJsZTxUPj4sXG4gICAgICAgICAgICAgIHByaXZhdGUgd2luZG93Qm91bmRhcmllczogT2JzZXJ2YWJsZTxhbnk+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIHdpbmRvd0JvdW5kYXJpZXMpKTtcbiAgICB0aGlzLm9wZW5XaW5kb3coKTtcbiAgfVxuXG4gIG5vdGlmeU5leHQob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogYW55LFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgYW55Pik6IHZvaWQge1xuICAgIHRoaXMub3BlbldpbmRvdygpO1xuICB9XG5cbiAgbm90aWZ5RXJyb3IoZXJyb3I6IGFueSwgaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5fZXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5fY29tcGxldGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMud2luZG93Lm5leHQodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9lcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIHRoaXMud2luZG93LmVycm9yKGVycik7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLndpbmRvdy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3BlbldpbmRvdygpOiB2b2lkICB7XG4gICAgY29uc3QgcHJldldpbmRvdyA9IHRoaXMud2luZG93O1xuICAgIGlmIChwcmV2V2luZG93KSB7XG4gICAgICBwcmV2V2luZG93LmNvbXBsZXRlKCk7XG4gICAgfVxuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICBjb25zdCBuZXdXaW5kb3cgPSB0aGlzLndpbmRvdyA9IG5ldyBTdWJqZWN0PFQ+KCk7XG4gICAgZGVzdGluYXRpb24uYWRkKG5ld1dpbmRvdyk7XG4gICAgZGVzdGluYXRpb24ubmV4dChuZXdXaW5kb3cpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
