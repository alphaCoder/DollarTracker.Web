System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var SwitchMapToOperator, SwitchMapToSubscriber;
    /**
     * Projects each source value to the same Observable which is flattened multiple
     * times with {@link switch} in the output Observable.
     *
     * <span class="informal">It's like {@link switchMap}, but maps each value
     * always to the same inner Observable.</span>
     *
     * <img src="./img/switchMapTo.png" width="100%">
     *
     * Maps each source value to the given Observable `innerObservable` regardless
     * of the source value, and then flattens those resulting Observables into one
     * single Observable, which is the output Observable. The output Observables
     * emits values only from the most recently emitted instance of
     * `innerObservable`.
     *
     * @example <caption>Rerun an interval Observable on every click event</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concatMapTo}
     * @see {@link switch}
     * @see {@link switchMap}
     * @see {@link mergeMapTo}
     *
     * @param {Observable} innerObservable An Observable to replace each value from
     * the source Observable.
     * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
     * A function to produce the value on the output Observable based on the values
     * and the indices of the source (outer) emission and the inner Observable
     * emission. The arguments passed to this function are:
     * - `outerValue`: the value that came from the source
     * - `innerValue`: the value that came from the projected Observable
     * - `outerIndex`: the "index" of the value that came from the source
     * - `innerIndex`: the "index" of the value from the projected Observable
     * @return {Observable} An Observable that emits items from the given
     * `innerObservable` every time a value is emitted on the source Observable.
     * @return {Observable} An Observable that emits items from the given
     * `innerObservable` (and optionally transformed through `resultSelector`) every
     * time a value is emitted on the source Observable, and taking only the values
     * from the most recently projected inner Observable.
     * @method switchMapTo
     * @owner Observable
     */
    function switchMapTo(innerObservable, resultSelector) {
        return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
    }
    exports_1("switchMapTo", switchMapTo);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            SwitchMapToOperator = (function () {
                function SwitchMapToOperator(observable, resultSelector) {
                    this.observable = observable;
                    this.resultSelector = resultSelector;
                }
                SwitchMapToOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
                };
                return SwitchMapToOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SwitchMapToSubscriber = (function (_super) {
                __extends(SwitchMapToSubscriber, _super);
                function SwitchMapToSubscriber(destination, inner, resultSelector) {
                    _super.call(this, destination);
                    this.inner = inner;
                    this.resultSelector = resultSelector;
                    this.index = 0;
                }
                SwitchMapToSubscriber.prototype._next = function (value) {
                    var innerSubscription = this.innerSubscription;
                    if (innerSubscription) {
                        innerSubscription.unsubscribe();
                    }
                    this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
                };
                SwitchMapToSubscriber.prototype._complete = function () {
                    var innerSubscription = this.innerSubscription;
                    if (!innerSubscription || innerSubscription.isUnsubscribed) {
                        _super.prototype._complete.call(this);
                    }
                };
                SwitchMapToSubscriber.prototype._unsubscribe = function () {
                    this.innerSubscription = null;
                };
                SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
                    this.remove(innerSub);
                    this.innerSubscription = null;
                    if (this.isStopped) {
                        _super.prototype._complete.call(this);
                    }
                };
                SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
                    if (resultSelector) {
                        this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
                    }
                    else {
                        destination.next(innerValue);
                    }
                };
                SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
                    var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
                    var result;
                    try {
                        result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
                    }
                    catch (err) {
                        destination.error(err);
                        return;
                    }
                    destination.next(result);
                };
                return SwitchMapToSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3N3aXRjaE1hcFRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTJDRztJQUNILHFCQUFxQyxlQUE4QixFQUM5QixjQUcwQztRQUM3RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFORCxxQ0FNQyxDQUFBOzs7Ozs7Ozs7O1lBUUQ7Z0JBQ0UsNkJBQW9CLFVBQXlCLEVBQ3pCLGNBQTRGO29CQUQ1RixlQUFVLEdBQVYsVUFBVSxDQUFlO29CQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBOEU7Z0JBQ2hILENBQUM7Z0JBRUQsa0NBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDeEcsQ0FBQztnQkFDSCwwQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUE2Qyx5Q0FBcUI7Z0JBSWhFLCtCQUFZLFdBQTBCLEVBQ2xCLEtBQW9CLEVBQ3BCLGNBQTRGO29CQUM5RyxrQkFBTSxXQUFXLENBQUMsQ0FBQztvQkFGRCxVQUFLLEdBQUwsS0FBSyxDQUFlO29CQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBOEU7b0JBTHhHLFVBQUssR0FBVyxDQUFDLENBQUM7Z0JBTzFCLENBQUM7Z0JBRVMscUNBQUssR0FBZixVQUFnQixLQUFVO29CQUN4QixJQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakQsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbEMsQ0FBQztvQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUYsQ0FBQztnQkFFUyx5Q0FBUyxHQUFuQjtvQkFDUyw4Q0FBaUIsQ0FBUztvQkFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUMzRCxnQkFBSyxDQUFDLFNBQVMsV0FBRSxDQUFDO29CQUNwQixDQUFDO2dCQUNILENBQUM7Z0JBRVMsNENBQVksR0FBdEI7b0JBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCw4Q0FBYyxHQUFkLFVBQWUsUUFBc0I7b0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7b0JBQzlCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixnQkFBSyxDQUFDLFNBQVMsV0FBRSxDQUFDO29CQUNwQixDQUFDO2dCQUNILENBQUM7Z0JBRUQsMENBQVUsR0FBVixVQUFXLFVBQWEsRUFBRSxVQUFhLEVBQzVCLFVBQWtCLEVBQUUsVUFBa0IsRUFDdEMsUUFBK0I7b0JBQ3hDLElBQUEsU0FBNEMsRUFBcEMsa0NBQWMsRUFBRSw0QkFBVyxDQUFVO29CQUM3QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ3pFLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztnQkFDSCxDQUFDO2dCQUVPLGlEQUFpQixHQUF6QixVQUEwQixVQUFhLEVBQUUsVUFBYSxFQUM1QixVQUFrQixFQUFFLFVBQWtCO29CQUM5RCxJQUFBLFNBQTRDLEVBQXBDLGtDQUFjLEVBQUUsNEJBQVcsQ0FBVTtvQkFDN0MsSUFBSSxNQUFTLENBQUM7b0JBQ2QsSUFBSSxDQUFDO3dCQUNILE1BQU0sR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQzFFLENBQUU7b0JBQUEsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDYixXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFFRCxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUNILDRCQUFDO1lBQUQsQ0E3REEsQUE2REMsQ0E3RDRDLGlDQUFlLEdBNkQzRCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9zd2l0Y2hNYXBUby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZUlucHV0fSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtJbm5lclN1YnNjcmliZXJ9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcblxuLyoqXG4gKiBQcm9qZWN0cyBlYWNoIHNvdXJjZSB2YWx1ZSB0byB0aGUgc2FtZSBPYnNlcnZhYmxlIHdoaWNoIGlzIGZsYXR0ZW5lZCBtdWx0aXBsZVxuICogdGltZXMgd2l0aCB7QGxpbmsgc3dpdGNofSBpbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgc3dpdGNoTWFwfSwgYnV0IG1hcHMgZWFjaCB2YWx1ZVxuICogYWx3YXlzIHRvIHRoZSBzYW1lIGlubmVyIE9ic2VydmFibGUuPC9zcGFuPlxuICpcbiAqIDxpbWcgc3JjPVwiLi9pbWcvc3dpdGNoTWFwVG8ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogTWFwcyBlYWNoIHNvdXJjZSB2YWx1ZSB0byB0aGUgZ2l2ZW4gT2JzZXJ2YWJsZSBgaW5uZXJPYnNlcnZhYmxlYCByZWdhcmRsZXNzXG4gKiBvZiB0aGUgc291cmNlIHZhbHVlLCBhbmQgdGhlbiBmbGF0dGVucyB0aG9zZSByZXN1bHRpbmcgT2JzZXJ2YWJsZXMgaW50byBvbmVcbiAqIHNpbmdsZSBPYnNlcnZhYmxlLCB3aGljaCBpcyB0aGUgb3V0cHV0IE9ic2VydmFibGUuIFRoZSBvdXRwdXQgT2JzZXJ2YWJsZXNcbiAqIGVtaXRzIHZhbHVlcyBvbmx5IGZyb20gdGhlIG1vc3QgcmVjZW50bHkgZW1pdHRlZCBpbnN0YW5jZSBvZlxuICogYGlubmVyT2JzZXJ2YWJsZWAuXG4gKlxuICogQGV4YW1wbGUgPGNhcHRpb24+UmVydW4gYW4gaW50ZXJ2YWwgT2JzZXJ2YWJsZSBvbiBldmVyeSBjbGljayBldmVudDwvY2FwdGlvbj5cbiAqIHZhciBjbGlja3MgPSBSeC5PYnNlcnZhYmxlLmZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJyk7XG4gKiB2YXIgcmVzdWx0ID0gY2xpY2tzLnN3aXRjaE1hcFRvKFJ4Lk9ic2VydmFibGUuaW50ZXJ2YWwoMTAwMCkpO1xuICogcmVzdWx0LnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKHgpKTtcbiAqXG4gKiBAc2VlIHtAbGluayBjb25jYXRNYXBUb31cbiAqIEBzZWUge0BsaW5rIHN3aXRjaH1cbiAqIEBzZWUge0BsaW5rIHN3aXRjaE1hcH1cbiAqIEBzZWUge0BsaW5rIG1lcmdlTWFwVG99XG4gKlxuICogQHBhcmFtIHtPYnNlcnZhYmxlfSBpbm5lck9ic2VydmFibGUgQW4gT2JzZXJ2YWJsZSB0byByZXBsYWNlIGVhY2ggdmFsdWUgZnJvbVxuICogdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQHBhcmFtIHtmdW5jdGlvbihvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBJLCBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcik6IGFueX0gW3Jlc3VsdFNlbGVjdG9yXVxuICogQSBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSB2YWx1ZSBvbiB0aGUgb3V0cHV0IE9ic2VydmFibGUgYmFzZWQgb24gdGhlIHZhbHVlc1xuICogYW5kIHRoZSBpbmRpY2VzIG9mIHRoZSBzb3VyY2UgKG91dGVyKSBlbWlzc2lvbiBhbmQgdGhlIGlubmVyIE9ic2VydmFibGVcbiAqIGVtaXNzaW9uLiBUaGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uIGFyZTpcbiAqIC0gYG91dGVyVmFsdWVgOiB0aGUgdmFsdWUgdGhhdCBjYW1lIGZyb20gdGhlIHNvdXJjZVxuICogLSBgaW5uZXJWYWx1ZWA6IHRoZSB2YWx1ZSB0aGF0IGNhbWUgZnJvbSB0aGUgcHJvamVjdGVkIE9ic2VydmFibGVcbiAqIC0gYG91dGVySW5kZXhgOiB0aGUgXCJpbmRleFwiIG9mIHRoZSB2YWx1ZSB0aGF0IGNhbWUgZnJvbSB0aGUgc291cmNlXG4gKiAtIGBpbm5lckluZGV4YDogdGhlIFwiaW5kZXhcIiBvZiB0aGUgdmFsdWUgZnJvbSB0aGUgcHJvamVjdGVkIE9ic2VydmFibGVcbiAqIEByZXR1cm4ge09ic2VydmFibGV9IEFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBpdGVtcyBmcm9tIHRoZSBnaXZlblxuICogYGlubmVyT2JzZXJ2YWJsZWAgZXZlcnkgdGltZSBhIHZhbHVlIGlzIGVtaXR0ZWQgb24gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGl0ZW1zIGZyb20gdGhlIGdpdmVuXG4gKiBgaW5uZXJPYnNlcnZhYmxlYCAoYW5kIG9wdGlvbmFsbHkgdHJhbnNmb3JtZWQgdGhyb3VnaCBgcmVzdWx0U2VsZWN0b3JgKSBldmVyeVxuICogdGltZSBhIHZhbHVlIGlzIGVtaXR0ZWQgb24gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLCBhbmQgdGFraW5nIG9ubHkgdGhlIHZhbHVlc1xuICogZnJvbSB0aGUgbW9zdCByZWNlbnRseSBwcm9qZWN0ZWQgaW5uZXIgT2JzZXJ2YWJsZS5cbiAqIEBtZXRob2Qgc3dpdGNoTWFwVG9cbiAqIEBvd25lciBPYnNlcnZhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzd2l0Y2hNYXBUbzxULCBJLCBSPihpbm5lck9ic2VydmFibGU6IE9ic2VydmFibGU8ST4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0U2VsZWN0b3I/OiAob3V0ZXJWYWx1ZTogVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lclZhbHVlOiBJLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckluZGV4OiBudW1iZXIpID0+IFIpOiBPYnNlcnZhYmxlPFI+IHtcbiAgcmV0dXJuIHRoaXMubGlmdChuZXcgU3dpdGNoTWFwVG9PcGVyYXRvcihpbm5lck9ic2VydmFibGUsIHJlc3VsdFNlbGVjdG9yKSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3dpdGNoTWFwVG9TaWduYXR1cmU8VD4ge1xuICA8Uj4ob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZUlucHV0PFI+KTogT2JzZXJ2YWJsZTxSPjtcbiAgPEksIFI+KG9ic2VydmFibGU6IE9ic2VydmFibGVJbnB1dDxJPixcbiAgICAgICAgIHJlc3VsdFNlbGVjdG9yOiAob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpID0+IFIpOiBPYnNlcnZhYmxlPFI+O1xufVxuXG5jbGFzcyBTd2l0Y2hNYXBUb09wZXJhdG9yPFQsIEksIFI+IGltcGxlbWVudHMgT3BlcmF0b3I8VCwgST4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9ic2VydmFibGU6IE9ic2VydmFibGU8ST4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVzdWx0U2VsZWN0b3I/OiAob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpID0+IFIpIHtcbiAgfVxuXG4gIGNhbGwoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxJPiwgc291cmNlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzb3VyY2UuX3N1YnNjcmliZShuZXcgU3dpdGNoTWFwVG9TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMub2JzZXJ2YWJsZSwgdGhpcy5yZXN1bHRTZWxlY3RvcikpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBTd2l0Y2hNYXBUb1N1YnNjcmliZXI8VCwgSSwgUj4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgST4ge1xuICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGlubmVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8ST4sXG4gICAgICAgICAgICAgIHByaXZhdGUgaW5uZXI6IE9ic2VydmFibGU8ST4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVzdWx0U2VsZWN0b3I/OiAob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpID0+IFIpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25leHQodmFsdWU6IGFueSkge1xuICAgIGNvbnN0IGlubmVyU3Vic2NyaXB0aW9uID0gdGhpcy5pbm5lclN1YnNjcmlwdGlvbjtcbiAgICBpZiAoaW5uZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgIGlubmVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkKHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCB0aGlzLmlubmVyLCB2YWx1ZSwgdGhpcy5pbmRleCsrKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCkge1xuICAgIGNvbnN0IHtpbm5lclN1YnNjcmlwdGlvbn0gPSB0aGlzO1xuICAgIGlmICghaW5uZXJTdWJzY3JpcHRpb24gfHwgaW5uZXJTdWJzY3JpcHRpb24uaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIHN1cGVyLl9jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfdW5zdWJzY3JpYmUoKSB7XG4gICAgdGhpcy5pbm5lclN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIH1cblxuICBub3RpZnlDb21wbGV0ZShpbm5lclN1YjogU3Vic2NyaXB0aW9uKSB7XG4gICAgdGhpcy5yZW1vdmUoaW5uZXJTdWIpO1xuICAgIHRoaXMuaW5uZXJTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgc3VwZXIuX2NvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBJLFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgST4pOiB2b2lkIHtcbiAgICBjb25zdCB7IHJlc3VsdFNlbGVjdG9yLCBkZXN0aW5hdGlvbiB9ID0gdGhpcztcbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgIHRoaXMudHJ5UmVzdWx0U2VsZWN0b3Iob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uLm5leHQoaW5uZXJWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cnlSZXN1bHRTZWxlY3RvcihvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBJLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyByZXN1bHRTZWxlY3RvciwgZGVzdGluYXRpb24gfSA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdDogUjtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0U2VsZWN0b3Iob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
