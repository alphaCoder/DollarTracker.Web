System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var MergeMapToOperator, MergeMapToSubscriber;
    /**
     * Projects each source value to the same Observable which is merged multiple
     * times in the output Observable.
     *
     * <span class="informal">It's like {@link mergeMap}, but maps each value always
     * to the same inner Observable.</span>
     *
     * <img src="./img/mergeMapTo.png" width="100%">
     *
     * Maps each source value to the given Observable `innerObservable` regardless
     * of the source value, and then merges those resulting Observables into one
     * single Observable, which is the output Observable.
     *
     * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
     * var clicks = Rx.Observable.fromEvent(document, 'click');
     * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
     * result.subscribe(x => console.log(x));
     *
     * @see {@link concatMapTo}
     * @see {@link merge}
     * @see {@link mergeAll}
     * @see {@link mergeMap}
     * @see {@link mergeScan}
     * @see {@link switchMapTo}
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
     * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
     * Observables being subscribed to concurrently.
     * @return {Observable} An Observable that emits items from the given
     * `innerObservable` (and optionally transformed through `resultSelector`) every
     * time a value is emitted on the source Observable.
     * @method mergeMapTo
     * @owner Observable
     */
    function mergeMapTo(innerObservable, resultSelector, concurrent) {
        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
        if (typeof resultSelector === 'number') {
            concurrent = resultSelector;
            resultSelector = null;
        }
        return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
    }
    exports_1("mergeMapTo", mergeMapTo);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            // TODO: Figure out correct signature here: an Operator<Observable<T>, R>
            //       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
            MergeMapToOperator = (function () {
                function MergeMapToOperator(ish, resultSelector, concurrent) {
                    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
                    this.ish = ish;
                    this.resultSelector = resultSelector;
                    this.concurrent = concurrent;
                }
                MergeMapToOperator.prototype.call = function (observer, source) {
                    return source._subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
                };
                return MergeMapToOperator;
            }());
            exports_1("MergeMapToOperator", MergeMapToOperator);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            MergeMapToSubscriber = (function (_super) {
                __extends(MergeMapToSubscriber, _super);
                function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
                    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
                    _super.call(this, destination);
                    this.ish = ish;
                    this.resultSelector = resultSelector;
                    this.concurrent = concurrent;
                    this.hasCompleted = false;
                    this.buffer = [];
                    this.active = 0;
                    this.index = 0;
                }
                MergeMapToSubscriber.prototype._next = function (value) {
                    if (this.active < this.concurrent) {
                        var resultSelector = this.resultSelector;
                        var index = this.index++;
                        var ish = this.ish;
                        var destination = this.destination;
                        this.active++;
                        this._innerSub(ish, destination, resultSelector, value, index);
                    }
                    else {
                        this.buffer.push(value);
                    }
                };
                MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
                    this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
                };
                MergeMapToSubscriber.prototype._complete = function () {
                    this.hasCompleted = true;
                    if (this.active === 0 && this.buffer.length === 0) {
                        this.destination.complete();
                    }
                };
                MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
                    if (resultSelector) {
                        this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
                    }
                    else {
                        destination.next(innerValue);
                    }
                };
                MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
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
                MergeMapToSubscriber.prototype.notifyError = function (err) {
                    this.destination.error(err);
                };
                MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
                    var buffer = this.buffer;
                    this.remove(innerSub);
                    this.active--;
                    if (buffer.length > 0) {
                        this._next(buffer.shift());
                    }
                    else if (this.active === 0 && this.hasCompleted) {
                        this.destination.complete();
                    }
                };
                return MergeMapToSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
            exports_1("MergeMapToSubscriber", MergeMapToSubscriber);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL21lcmdlTWFwVG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EwQ0c7SUFDSCxvQkFBb0MsZUFBOEIsRUFDOUIsY0FBdUcsRUFDdkcsVUFBNkM7UUFBN0MsMEJBQTZDLEdBQTdDLGFBQXFCLE1BQU0sQ0FBQyxpQkFBaUI7UUFDL0UsRUFBRSxDQUFDLENBQUMsT0FBTyxjQUFjLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2QyxVQUFVLEdBQVcsY0FBYyxDQUFDO1lBQ3BDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksa0JBQWtCLENBQUMsZUFBZSxFQUFPLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFSRCxtQ0FRQyxDQUFBOzs7Ozs7Ozs7O1lBU0QseUVBQXlFO1lBQ3pFLG9GQUFvRjtZQUNwRjtnQkFDRSw0QkFBb0IsR0FBNkIsRUFDN0IsY0FBNEYsRUFDNUYsVUFBNkM7b0JBQXJELDBCQUFxRCxHQUFyRCxhQUE2QixNQUFNLENBQUMsaUJBQWlCO29CQUY3QyxRQUFHLEdBQUgsR0FBRyxDQUEwQjtvQkFDN0IsbUJBQWMsR0FBZCxjQUFjLENBQThFO29CQUM1RixlQUFVLEdBQVYsVUFBVSxDQUFtQztnQkFDakUsQ0FBQztnQkFFRCxpQ0FBSSxHQUFKLFVBQUssUUFBdUIsRUFBRSxNQUFXO29CQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9HLENBQUM7Z0JBQ0gseUJBQUM7WUFBRCxD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QUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUMxRSxDQUFFO29CQUFBLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2IsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDdkIsTUFBTSxDQUFDO29CQUNULENBQUM7b0JBRUQsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCwwQ0FBVyxHQUFYLFVBQVksR0FBUTtvQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsNkNBQWMsR0FBZCxVQUFlLFFBQXNCO29CQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUM3QixDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUNILDJCQUFDO1lBQUQsQ0FqRkEsQUFpRkMsQ0FqRmtELGlDQUFlLEdBaUZqRTtZQWpGRCx1REFpRkMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9tZXJnZU1hcFRvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXQsIFN1YnNjcmliYWJsZU9yUHJvbWlzZX0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1BhcnRpYWxPYnNlcnZlcn0gZnJvbSAnLi4vT2JzZXJ2ZXInO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtPdXRlclN1YnNjcmliZXJ9IGZyb20gJy4uL091dGVyU3Vic2NyaWJlcic7XG5pbXBvcnQge0lubmVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vSW5uZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7c3Vic2NyaWJlVG9SZXN1bHR9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuXG4vKipcbiAqIFByb2plY3RzIGVhY2ggc291cmNlIHZhbHVlIHRvIHRoZSBzYW1lIE9ic2VydmFibGUgd2hpY2ggaXMgbWVyZ2VkIG11bHRpcGxlXG4gKiB0aW1lcyBpbiB0aGUgb3V0cHV0IE9ic2VydmFibGUuXG4gKlxuICogPHNwYW4gY2xhc3M9XCJpbmZvcm1hbFwiPkl0J3MgbGlrZSB7QGxpbmsgbWVyZ2VNYXB9LCBidXQgbWFwcyBlYWNoIHZhbHVlIGFsd2F5c1xuICogdG8gdGhlIHNhbWUgaW5uZXIgT2JzZXJ2YWJsZS48L3NwYW4+XG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9tZXJnZU1hcFRvLnBuZ1wiIHdpZHRoPVwiMTAwJVwiPlxuICpcbiAqIE1hcHMgZWFjaCBzb3VyY2UgdmFsdWUgdG8gdGhlIGdpdmVuIE9ic2VydmFibGUgYGlubmVyT2JzZXJ2YWJsZWAgcmVnYXJkbGVzc1xuICogb2YgdGhlIHNvdXJjZSB2YWx1ZSwgYW5kIHRoZW4gbWVyZ2VzIHRob3NlIHJlc3VsdGluZyBPYnNlcnZhYmxlcyBpbnRvIG9uZVxuICogc2luZ2xlIE9ic2VydmFibGUsIHdoaWNoIGlzIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZS5cbiAqXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5Gb3IgZWFjaCBjbGljayBldmVudCwgc3RhcnQgYW4gaW50ZXJ2YWwgT2JzZXJ2YWJsZSB0aWNraW5nIGV2ZXJ5IDEgc2Vjb25kPC9jYXB0aW9uPlxuICogdmFyIGNsaWNrcyA9IFJ4Lk9ic2VydmFibGUuZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKTtcbiAqIHZhciByZXN1bHQgPSBjbGlja3MubWVyZ2VNYXBUbyhSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApKTtcbiAqIHJlc3VsdC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7XG4gKlxuICogQHNlZSB7QGxpbmsgY29uY2F0TWFwVG99XG4gKiBAc2VlIHtAbGluayBtZXJnZX1cbiAqIEBzZWUge0BsaW5rIG1lcmdlQWxsfVxuICogQHNlZSB7QGxpbmsgbWVyZ2VNYXB9XG4gKiBAc2VlIHtAbGluayBtZXJnZVNjYW59XG4gKiBAc2VlIHtAbGluayBzd2l0Y2hNYXBUb31cbiAqXG4gKiBAcGFyYW0ge09ic2VydmFibGV9IGlubmVyT2JzZXJ2YWJsZSBBbiBPYnNlcnZhYmxlIHRvIHJlcGxhY2UgZWFjaCB2YWx1ZSBmcm9tXG4gKiB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IEksIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKTogYW55fSBbcmVzdWx0U2VsZWN0b3JdXG4gKiBBIGZ1bmN0aW9uIHRvIHByb2R1Y2UgdGhlIHZhbHVlIG9uIHRoZSBvdXRwdXQgT2JzZXJ2YWJsZSBiYXNlZCBvbiB0aGUgdmFsdWVzXG4gKiBhbmQgdGhlIGluZGljZXMgb2YgdGhlIHNvdXJjZSAob3V0ZXIpIGVtaXNzaW9uIGFuZCB0aGUgaW5uZXIgT2JzZXJ2YWJsZVxuICogZW1pc3Npb24uIFRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24gYXJlOlxuICogLSBgb3V0ZXJWYWx1ZWA6IHRoZSB2YWx1ZSB0aGF0IGNhbWUgZnJvbSB0aGUgc291cmNlXG4gKiAtIGBpbm5lclZhbHVlYDogdGhlIHZhbHVlIHRoYXQgY2FtZSBmcm9tIHRoZSBwcm9qZWN0ZWQgT2JzZXJ2YWJsZVxuICogLSBgb3V0ZXJJbmRleGA6IHRoZSBcImluZGV4XCIgb2YgdGhlIHZhbHVlIHRoYXQgY2FtZSBmcm9tIHRoZSBzb3VyY2VcbiAqIC0gYGlubmVySW5kZXhgOiB0aGUgXCJpbmRleFwiIG9mIHRoZSB2YWx1ZSBmcm9tIHRoZSBwcm9qZWN0ZWQgT2JzZXJ2YWJsZVxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW50PU51bWJlci5QT1NJVElWRV9JTkZJTklUWV0gTWF4aW11bSBudW1iZXIgb2YgaW5wdXRcbiAqIE9ic2VydmFibGVzIGJlaW5nIHN1YnNjcmliZWQgdG8gY29uY3VycmVudGx5LlxuICogQHJldHVybiB7T2JzZXJ2YWJsZX0gQW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGl0ZW1zIGZyb20gdGhlIGdpdmVuXG4gKiBgaW5uZXJPYnNlcnZhYmxlYCAoYW5kIG9wdGlvbmFsbHkgdHJhbnNmb3JtZWQgdGhyb3VnaCBgcmVzdWx0U2VsZWN0b3JgKSBldmVyeVxuICogdGltZSBhIHZhbHVlIGlzIGVtaXR0ZWQgb24gdGhlIHNvdXJjZSBPYnNlcnZhYmxlLlxuICogQG1ldGhvZCBtZXJnZU1hcFRvXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXBUbzxULCBJLCBSPihpbm5lck9ic2VydmFibGU6IE9ic2VydmFibGU8ST4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTZWxlY3Rvcj86ICgob3V0ZXJWYWx1ZTogVCwgaW5uZXJWYWx1ZTogSSwgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIpID0+IFIpIHwgbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uY3VycmVudDogbnVtYmVyID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKTogT2JzZXJ2YWJsZTxSPiB7XG4gIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdudW1iZXInKSB7XG4gICAgY29uY3VycmVudCA9IDxudW1iZXI+cmVzdWx0U2VsZWN0b3I7XG4gICAgcmVzdWx0U2VsZWN0b3IgPSBudWxsO1xuICB9XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IE1lcmdlTWFwVG9PcGVyYXRvcihpbm5lck9ic2VydmFibGUsIDxhbnk+cmVzdWx0U2VsZWN0b3IsIGNvbmN1cnJlbnQpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXJnZU1hcFRvU2lnbmF0dXJlPFQ+IHtcbiAgPFI+KG9ic2VydmFibGU6IE9ic2VydmFibGVJbnB1dDxSPiwgY29uY3VycmVudD86IG51bWJlcik6IE9ic2VydmFibGU8Uj47XG4gIDxJLCBSPihvYnNlcnZhYmxlOiBPYnNlcnZhYmxlSW5wdXQ8ST4sXG4gICAgICAgICByZXN1bHRTZWxlY3RvcjogKG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IEksIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKSA9PiBSLFxuICAgICAgICAgY29uY3VycmVudD86IG51bWJlcik6IE9ic2VydmFibGU8Uj47XG59XG5cbi8vIFRPRE86IEZpZ3VyZSBvdXQgY29ycmVjdCBzaWduYXR1cmUgaGVyZTogYW4gT3BlcmF0b3I8T2JzZXJ2YWJsZTxUPiwgUj5cbi8vICAgICAgIG5lZWRzIHRvIGltcGxlbWVudCBjYWxsKG9ic2VydmVyOiBTdWJzY3JpYmVyPFI+KTogU3Vic2NyaWJlcjxPYnNlcnZhYmxlPFQ+PlxuZXhwb3J0IGNsYXNzIE1lcmdlTWFwVG9PcGVyYXRvcjxULCBJLCBSPiBpbXBsZW1lbnRzIE9wZXJhdG9yPE9ic2VydmFibGU8VD4sIFI+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpc2g6IFN1YnNjcmliYWJsZU9yUHJvbWlzZTxJPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZXN1bHRTZWxlY3Rvcj86IChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBJLCBvdXRlckluZGV4OiBudW1iZXIsIGlubmVySW5kZXg6IG51bWJlcikgPT4gUixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjb25jdXJyZW50OiBudW1iZXIgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgfVxuXG4gIGNhbGwob2JzZXJ2ZXI6IFN1YnNjcmliZXI8Uj4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IE1lcmdlTWFwVG9TdWJzY3JpYmVyKG9ic2VydmVyLCB0aGlzLmlzaCwgdGhpcy5yZXN1bHRTZWxlY3RvciwgdGhpcy5jb25jdXJyZW50KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBNZXJnZU1hcFRvU3Vic2NyaWJlcjxULCBJLCBSPiBleHRlbmRzIE91dGVyU3Vic2NyaWJlcjxULCBJPiB7XG4gIHByaXZhdGUgaGFzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgYnVmZmVyOiBPYnNlcnZhYmxlPGFueT5bXSA9IFtdO1xuICBwcml2YXRlIGFjdGl2ZTogbnVtYmVyID0gMDtcbiAgcHJvdGVjdGVkIGluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFI+LFxuICAgICAgICAgICAgICBwcml2YXRlIGlzaDogU3Vic2NyaWJhYmxlT3JQcm9taXNlPEk+LFxuICAgICAgICAgICAgICBwcml2YXRlIHJlc3VsdFNlbGVjdG9yPzogKG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IEksIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKSA9PiBSLFxuICAgICAgICAgICAgICBwcml2YXRlIGNvbmN1cnJlbnQ6IG51bWJlciA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSkge1xuICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlIDwgdGhpcy5jb25jdXJyZW50KSB7XG4gICAgICBjb25zdCByZXN1bHRTZWxlY3RvciA9IHRoaXMucmVzdWx0U2VsZWN0b3I7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5kZXgrKztcbiAgICAgIGNvbnN0IGlzaCA9IHRoaXMuaXNoO1xuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuXG4gICAgICB0aGlzLmFjdGl2ZSsrO1xuICAgICAgdGhpcy5faW5uZXJTdWIoaXNoLCBkZXN0aW5hdGlvbiwgcmVzdWx0U2VsZWN0b3IsIHZhbHVlLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnVmZmVyLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lubmVyU3ViKGlzaDogYW55LFxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogUGFydGlhbE9ic2VydmVyPEk+LFxuICAgICAgICAgICAgICAgICAgICByZXN1bHRTZWxlY3RvcjogKG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IEksIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKSA9PiBSLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0PFQsIEk+KHRoaXMsIGlzaCwgdmFsdWUsIGluZGV4KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMuaGFzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hY3RpdmUgPT09IDAgJiYgdGhpcy5idWZmZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBJLFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgST4pOiB2b2lkIHtcbiAgICBjb25zdCB7IHJlc3VsdFNlbGVjdG9yLCBkZXN0aW5hdGlvbiB9ID0gdGhpcztcbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgIHRoaXMudHJ5U2VsZWN0UmVzdWx0KG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJ5U2VsZWN0UmVzdWx0KG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IEksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyByZXN1bHRTZWxlY3RvciwgZGVzdGluYXRpb24gfSA9IHRoaXM7XG4gICAgbGV0IHJlc3VsdDogUjtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0U2VsZWN0b3Iob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlc3RpbmF0aW9uLm5leHQocmVzdWx0KTtcbiAgfVxuXG4gIG5vdGlmeUVycm9yKGVycjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICB9XG5cbiAgbm90aWZ5Q29tcGxldGUoaW5uZXJTdWI6IFN1YnNjcmlwdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgIHRoaXMucmVtb3ZlKGlubmVyU3ViKTtcbiAgICB0aGlzLmFjdGl2ZS0tO1xuICAgIGlmIChidWZmZXIubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fbmV4dChidWZmZXIuc2hpZnQoKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZSA9PT0gMCAmJiB0aGlzLmhhc0NvbXBsZXRlZCkge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
