System.register(['../Subject', '../util/tryCatch', '../util/errorObject', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, tryCatch_1, errorObject_1, OuterSubscriber_1, subscribeToResult_1;
    var WindowOperator, WindowSubscriber;
    /**
     * Branch out the source Observable values as a nested Observable using a
     * factory function of closing Observables to determine when to start a new
     * window.
     *
     * <span class="informal">It's like {@link bufferWhen}, but emits a nested
     * Observable instead of an array.</span>
     *
     * <img src="./img/windowWhen.png" width="100%">
     *
     * Returns an Observable that emits windows of items it collects from the source
     * Observable. The output Observable emits connected, non-overlapping windows.
     * It emits the current window and opens a new one whenever the Observable
     * produced by the specified `closingSelector` function emits an item. The first
     * window is opened immediately when subscribing to the output Observable.
     *
     * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks
     *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
     *   .map(win => win.take(2)) // each window has at most 2 emissions
     *   .mergeAll(); // flatten the Observable-of-Observables
     * result.subscribe(x => console.log(x));
     *
     * @see {@link window}
     * @see {@link windowCount}
     * @see {@link windowTime}
     * @see {@link windowToggle}
     * @see {@link bufferWhen}
     *
     * @param {function(): Observable} closingSelector A function that takes no
     * arguments and returns an Observable that signals (on either `next` or
     * `complete`) when to close the previous window and start a new one.
     * @return {Observable<Observable<T>>} An observable of windows, which in turn
     * are Observables.
     * @method windowWhen
     * @owner Observable
     */
    function windowWhen(closingSelector) {
        return this.lift(new WindowOperator(closingSelector));
    }
    exports_1("windowWhen", windowWhen);
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
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
            WindowOperator = (function () {
                function WindowOperator(closingSelector) {
                    this.closingSelector = closingSelector;
                }
                WindowOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new WindowSubscriber(subscriber, this.closingSelector));
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
                function WindowSubscriber(destination, closingSelector) {
                    _super.call(this, destination);
                    this.destination = destination;
                    this.closingSelector = closingSelector;
                    this.openWindow();
                }
                WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.openWindow(innerSub);
                };
                WindowSubscriber.prototype.notifyError = function (error, innerSub) {
                    this._error(error);
                };
                WindowSubscriber.prototype.notifyComplete = function (innerSub) {
                    this.openWindow(innerSub);
                };
                WindowSubscriber.prototype._next = function (value) {
                    this.window.next(value);
                };
                WindowSubscriber.prototype._error = function (err) {
                    this.window.error(err);
                    this.destination.error(err);
                    this.unsubscribeClosingNotification();
                };
                WindowSubscriber.prototype._complete = function () {
                    this.window.complete();
                    this.destination.complete();
                    this.unsubscribeClosingNotification();
                };
                WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
                    if (this.closingNotification) {
                        this.closingNotification.unsubscribe();
                    }
                };
                WindowSubscriber.prototype.openWindow = function (innerSub) {
                    if (innerSub === void 0) { innerSub = null; }
                    if (innerSub) {
                        this.remove(innerSub);
                        innerSub.unsubscribe();
                    }
                    var prevWindow = this.window;
                    if (prevWindow) {
                        prevWindow.complete();
                    }
                    var window = this.window = new Subject_1.Subject();
                    this.destination.next(window);
                    var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
                    if (closingNotifier === errorObject_1.errorObject) {
                        var err = errorObject_1.errorObject.e;
                        this.destination.error(err);
                        this.window.error(err);
                    }
                    else {
                        this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
                        this.add(window);
                    }
                };
                return WindowSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3dpbmRvd1doZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUNHO0lBQ0gsb0JBQThCLGVBQXNDO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUZELG1DQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSx3QkFBb0IsZUFBc0M7b0JBQXRDLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtnQkFDMUQsQ0FBQztnQkFFRCw2QkFBSSxHQUFKLFVBQUssVUFBcUMsRUFBRSxNQUFXO29CQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDbkYsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFrQyxvQ0FBdUI7Z0JBSXZELDBCQUFzQixXQUFzQyxFQUN4QyxlQUFzQztvQkFDeEQsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBRkMsZ0JBQVcsR0FBWCxXQUFXLENBQTJCO29CQUN4QyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7b0JBRXhELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFFRCxxQ0FBVSxHQUFWLFVBQVcsVUFBYSxFQUFFLFVBQWUsRUFDOUIsVUFBa0IsRUFBRSxVQUFrQixFQUN0QyxRQUFpQztvQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxzQ0FBVyxHQUFYLFVBQVksS0FBVSxFQUFFLFFBQWlDO29CQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixDQUFDO2dCQUVELHlDQUFjLEdBQWQsVUFBZSxRQUFpQztvQkFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFUyxnQ0FBSyxHQUFmLFVBQWdCLEtBQVE7b0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVTLGlDQUFNLEdBQWhCLFVBQWlCLEdBQVE7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRVMsb0NBQVMsR0FBbkI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRU8seURBQThCLEdBQXRDO29CQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDekMsQ0FBQztnQkFDSCxDQUFDO2dCQUVPLHFDQUFVLEdBQWxCLFVBQW1CLFFBQXdDO29CQUF4Qyx3QkFBd0MsR0FBeEMsZUFBd0M7b0JBQ3pELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUN6QixDQUFDO29CQUVELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQy9CLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2YsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN4QixDQUFDO29CQUVELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQkFBTyxFQUFLLENBQUM7b0JBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUU5QixJQUFNLGVBQWUsR0FBRyxtQkFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDO29CQUN6RCxFQUFFLENBQUMsQ0FBQyxlQUFlLEtBQUsseUJBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQU0sR0FBRyxHQUFHLHlCQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcscUNBQWlCLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7d0JBQzlFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCx1QkFBQztZQUFELENBdEVBLEFBc0VDLENBdEVpQyxpQ0FBZSxHQXNFaEQiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb3BlcmF0b3Ivd2luZG93V2hlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICcuLi9TdWJqZWN0JztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuXG5pbXBvcnQge3RyeUNhdGNofSBmcm9tICcuLi91dGlsL3RyeUNhdGNoJztcbmltcG9ydCB7ZXJyb3JPYmplY3R9IGZyb20gJy4uL3V0aWwvZXJyb3JPYmplY3QnO1xuXG5pbXBvcnQge091dGVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7SW5uZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9Jbm5lclN1YnNjcmliZXInO1xuaW1wb3J0IHtzdWJzY3JpYmVUb1Jlc3VsdH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5cbi8qKlxuICogQnJhbmNoIG91dCB0aGUgc291cmNlIE9ic2VydmFibGUgdmFsdWVzIGFzIGEgbmVzdGVkIE9ic2VydmFibGUgdXNpbmcgYVxuICogZmFjdG9yeSBmdW5jdGlvbiBvZiBjbG9zaW5nIE9ic2VydmFibGVzIHRvIGRldGVybWluZSB3aGVuIHRvIHN0YXJ0IGEgbmV3XG4gKiB3aW5kb3cuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgYnVmZmVyV2hlbn0sIGJ1dCBlbWl0cyBhIG5lc3RlZFxuICogT2JzZXJ2YWJsZSBpbnN0ZWFkIG9mIGFuIGFycmF5Ljwvc3Bhbj5cbiAqXG4gKiA8aW1nIHNyYz1cIi4vaW1nL3dpbmRvd1doZW4ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2luZG93cyBvZiBpdGVtcyBpdCBjb2xsZWN0cyBmcm9tIHRoZSBzb3VyY2VcbiAqIE9ic2VydmFibGUuIFRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBlbWl0cyBjb25uZWN0ZWQsIG5vbi1vdmVybGFwcGluZyB3aW5kb3dzLlxuICogSXQgZW1pdHMgdGhlIGN1cnJlbnQgd2luZG93IGFuZCBvcGVucyBhIG5ldyBvbmUgd2hlbmV2ZXIgdGhlIE9ic2VydmFibGVcbiAqIHByb2R1Y2VkIGJ5IHRoZSBzcGVjaWZpZWQgYGNsb3NpbmdTZWxlY3RvcmAgZnVuY3Rpb24gZW1pdHMgYW4gaXRlbS4gVGhlIGZpcnN0XG4gKiB3aW5kb3cgaXMgb3BlbmVkIGltbWVkaWF0ZWx5IHdoZW4gc3Vic2NyaWJpbmcgdG8gdGhlIG91dHB1dCBPYnNlcnZhYmxlLlxuICpcbiAqIEBleGFtcGxlIDxjYXB0aW9uPkVtaXQgb25seSB0aGUgZmlyc3QgdHdvIGNsaWNrcyBldmVudHMgaW4gZXZlcnkgd2luZG93IG9mIFsxLTVdIHJhbmRvbSBzZWNvbmRzPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciByZXN1bHQgPSBjbGlja3NcbiAqICAgLndpbmRvd1doZW4oKCkgPT4gUnguT2JzZXJ2YWJsZS5pbnRlcnZhbCgxMDAwICsgTWF0aC5yYW5kb20oKSAqIDQwMDApKVxuICogICAubWFwKHdpbiA9PiB3aW4udGFrZSgyKSkgLy8gZWFjaCB3aW5kb3cgaGFzIGF0IG1vc3QgMiBlbWlzc2lvbnNcbiAqICAgLm1lcmdlQWxsKCk7IC8vIGZsYXR0ZW4gdGhlIE9ic2VydmFibGUtb2YtT2JzZXJ2YWJsZXNcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgd2luZG93fVxuICogQHNlZSB7QGxpbmsgd2luZG93Q291bnR9XG4gKiBAc2VlIHtAbGluayB3aW5kb3dUaW1lfVxuICogQHNlZSB7QGxpbmsgd2luZG93VG9nZ2xlfVxuICogQHNlZSB7QGxpbmsgYnVmZmVyV2hlbn1cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6IE9ic2VydmFibGV9IGNsb3NpbmdTZWxlY3RvciBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cbiAqIGFyZ3VtZW50cyBhbmQgcmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgc2lnbmFscyAob24gZWl0aGVyIGBuZXh0YCBvclxuICogYGNvbXBsZXRlYCkgd2hlbiB0byBjbG9zZSB0aGUgcHJldmlvdXMgd2luZG93IGFuZCBzdGFydCBhIG5ldyBvbmUuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlPE9ic2VydmFibGU8VD4+fSBBbiBvYnNlcnZhYmxlIG9mIHdpbmRvd3MsIHdoaWNoIGluIHR1cm5cbiAqIGFyZSBPYnNlcnZhYmxlcy5cbiAqIEBtZXRob2Qgd2luZG93V2hlblxuICogQG93bmVyIE9ic2VydmFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpbmRvd1doZW48VD4oY2xvc2luZ1NlbGVjdG9yOiAoKSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8VD4+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgV2luZG93T3BlcmF0b3I8VD4oY2xvc2luZ1NlbGVjdG9yKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93V2hlblNpZ25hdHVyZTxUPiB7XG4gIChjbG9zaW5nU2VsZWN0b3I6ICgpID0+IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxUPj47XG59XG5cbmNsYXNzIFdpbmRvd09wZXJhdG9yPFQ+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgT2JzZXJ2YWJsZTxUPj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsb3NpbmdTZWxlY3RvcjogKCkgPT4gT2JzZXJ2YWJsZTxhbnk+KSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8T2JzZXJ2YWJsZTxUPj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IFdpbmRvd1N1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5jbG9zaW5nU2VsZWN0b3IpKTtcbiAgfVxufVxuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuY2xhc3MgV2luZG93U3Vic2NyaWJlcjxUPiBleHRlbmRzIE91dGVyU3Vic2NyaWJlcjxULCBhbnk+IHtcbiAgcHJpdmF0ZSB3aW5kb3c6IFN1YmplY3Q8VD47XG4gIHByaXZhdGUgY2xvc2luZ05vdGlmaWNhdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxPYnNlcnZhYmxlPFQ+PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjbG9zaW5nU2VsZWN0b3I6ICgpID0+IE9ic2VydmFibGU8YW55Pikge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICB0aGlzLm9wZW5XaW5kb3coKTtcbiAgfVxuXG4gIG5vdGlmeU5leHQob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogYW55LFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgYW55Pik6IHZvaWQge1xuICAgIHRoaXMub3BlbldpbmRvdyhpbm5lclN1Yik7XG4gIH1cblxuICBub3RpZnlFcnJvcihlcnJvcjogYW55LCBpbm5lclN1YjogSW5uZXJTdWJzY3JpYmVyPFQsIGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvcihlcnJvcik7XG4gIH1cblxuICBub3RpZnlDb21wbGV0ZShpbm5lclN1YjogSW5uZXJTdWJzY3JpYmVyPFQsIGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLm9wZW5XaW5kb3coaW5uZXJTdWIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy53aW5kb3cubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Vycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgdGhpcy53aW5kb3cuZXJyb3IoZXJyKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgdGhpcy51bnN1YnNjcmliZUNsb3NpbmdOb3RpZmljYXRpb24oKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKTogdm9pZCB7XG4gICAgdGhpcy53aW5kb3cuY29tcGxldGUoKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgdGhpcy51bnN1YnNjcmliZUNsb3NpbmdOb3RpZmljYXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVDbG9zaW5nTm90aWZpY2F0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsb3NpbmdOb3RpZmljYXRpb24pIHtcbiAgICAgIHRoaXMuY2xvc2luZ05vdGlmaWNhdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlbldpbmRvdyhpbm5lclN1YjogSW5uZXJTdWJzY3JpYmVyPFQsIGFueT4gPSBudWxsKTogdm9pZCB7XG4gICAgaWYgKGlubmVyU3ViKSB7XG4gICAgICB0aGlzLnJlbW92ZShpbm5lclN1Yik7XG4gICAgICBpbm5lclN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZXaW5kb3cgPSB0aGlzLndpbmRvdztcbiAgICBpZiAocHJldldpbmRvdykge1xuICAgICAgcHJldldpbmRvdy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMud2luZG93ID0gbmV3IFN1YmplY3Q8VD4oKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQod2luZG93KTtcblxuICAgIGNvbnN0IGNsb3NpbmdOb3RpZmllciA9IHRyeUNhdGNoKHRoaXMuY2xvc2luZ1NlbGVjdG9yKSgpO1xuICAgIGlmIChjbG9zaW5nTm90aWZpZXIgPT09IGVycm9yT2JqZWN0KSB7XG4gICAgICBjb25zdCBlcnIgPSBlcnJvck9iamVjdC5lO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgdGhpcy53aW5kb3cuZXJyb3IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQodGhpcy5jbG9zaW5nTm90aWZpY2F0aW9uID0gc3Vic2NyaWJlVG9SZXN1bHQodGhpcywgY2xvc2luZ05vdGlmaWVyKSk7XG4gICAgICB0aGlzLmFkZCh3aW5kb3cpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
