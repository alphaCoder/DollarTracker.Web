System.register(['../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var OuterSubscriber_1, subscribeToResult_1;
    var DistinctOperator, DistinctSubscriber;
    /**
     * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
     * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
     * If a comparator function is not provided, an equality check is used by default.
     * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
     * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
     * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
     * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
     * @return {Observable} an Observable that emits items from the source Observable with distinct values.
     * @method distinct
     * @owner Observable
     */
    function distinct(compare, flushes) {
        return this.lift(new DistinctOperator(compare, flushes));
    }
    exports_1("distinct", distinct);
    return {
        setters:[
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            }],
        execute: function() {
            DistinctOperator = (function () {
                function DistinctOperator(compare, flushes) {
                    this.compare = compare;
                    this.flushes = flushes;
                }
                DistinctOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new DistinctSubscriber(subscriber, this.compare, this.flushes));
                };
                return DistinctOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            DistinctSubscriber = (function (_super) {
                __extends(DistinctSubscriber, _super);
                function DistinctSubscriber(destination, compare, flushes) {
                    _super.call(this, destination);
                    this.values = [];
                    if (typeof compare === 'function') {
                        this.compare = compare;
                    }
                    if (flushes) {
                        this.add(subscribeToResult_1.subscribeToResult(this, flushes));
                    }
                }
                DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.values.length = 0;
                };
                DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
                    this._error(error);
                };
                DistinctSubscriber.prototype._next = function (value) {
                    var found = false;
                    var values = this.values;
                    var len = values.length;
                    try {
                        for (var i = 0; i < len; i++) {
                            if (this.compare(values[i], value)) {
                                found = true;
                                return;
                            }
                        }
                    }
                    catch (err) {
                        this.destination.error(err);
                        return;
                    }
                    this.values.push(value);
                    this.destination.next(value);
                };
                DistinctSubscriber.prototype.compare = function (x, y) {
                    return x === y;
                };
                return DistinctSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
            exports_1("DistinctSubscriber", DistinctSubscriber);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2Rpc3RpbmN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFRQTs7Ozs7Ozs7Ozs7T0FXRztJQUNILGtCQUE0QixPQUFpQyxFQUFFLE9BQXlCO1FBQ3RGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUZELCtCQUVDLENBQUE7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSwwQkFBb0IsT0FBZ0MsRUFBVSxPQUF3QjtvQkFBbEUsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7Z0JBQ3RGLENBQUM7Z0JBRUQsK0JBQUksR0FBSixVQUFLLFVBQXlCLEVBQUUsTUFBVztvQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDM0YsQ0FBQztnQkFDSCx1QkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUEyQyxzQ0FBcUI7Z0JBRzlELDRCQUFZLFdBQTBCLEVBQUUsT0FBZ0MsRUFBRSxPQUF3QjtvQkFDaEcsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBSGIsV0FBTSxHQUFhLEVBQUUsQ0FBQztvQkFJNUIsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3pCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLHFDQUFpQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsdUNBQVUsR0FBVixVQUFXLFVBQWEsRUFBRSxVQUFhLEVBQzVCLFVBQWtCLEVBQUUsVUFBa0IsRUFDdEMsUUFBK0I7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCx3Q0FBVyxHQUFYLFVBQVksS0FBVSxFQUFFLFFBQStCO29CQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixDQUFDO2dCQUVTLGtDQUFLLEdBQWYsVUFBZ0IsS0FBUTtvQkFDdEIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNsQixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUMzQixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO29CQUMxQixJQUFJLENBQUM7d0JBQ0gsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNuQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dDQUNiLE1BQU0sQ0FBQzs0QkFDVCxDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBRTtvQkFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM1QixNQUFNLENBQUM7b0JBQ1QsQ0FBQztvQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRU8sb0NBQU8sR0FBZixVQUFnQixDQUFJLEVBQUUsQ0FBSTtvQkFDeEIsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0gseUJBQUM7WUFBRCxDQTlDQSxBQThDQyxDQTlDMEMsaUNBQWUsR0E4Q3pEO1lBOUNELG1EQThDQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL2Rpc3RpbmN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4uL09wZXJhdG9yJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5cbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtJbm5lclN1YnNjcmliZXJ9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBhbGwgaXRlbXMgZW1pdHRlZCBieSB0aGUgc291cmNlIE9ic2VydmFibGUgdGhhdCBhcmUgZGlzdGluY3QgYnkgY29tcGFyaXNvbiBmcm9tIHByZXZpb3VzIGl0ZW1zLlxuICogSWYgYSBjb21wYXJhdG9yIGZ1bmN0aW9uIGlzIHByb3ZpZGVkLCB0aGVuIGl0IHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGl0ZW0gdG8gdGVzdCBmb3Igd2hldGhlciBvciBub3QgdGhhdCB2YWx1ZSBzaG91bGQgYmUgZW1pdHRlZC5cbiAqIElmIGEgY29tcGFyYXRvciBmdW5jdGlvbiBpcyBub3QgcHJvdmlkZWQsIGFuIGVxdWFsaXR5IGNoZWNrIGlzIHVzZWQgYnkgZGVmYXVsdC5cbiAqIEFzIHRoZSBpbnRlcm5hbCBIYXNoU2V0IG9mIHRoaXMgb3BlcmF0b3IgZ3Jvd3MgbGFyZ2VyIGFuZCBsYXJnZXIsIGNhcmUgc2hvdWxkIGJlIHRha2VuIGluIHRoZSBkb21haW4gb2YgaW5wdXRzIHRoaXMgb3BlcmF0b3IgbWF5IHNlZS5cbiAqIEFuIG9wdGlvbmFsIHBhcmFtZXRlciBpcyBhbHNvIHByb3ZpZGVkIHN1Y2ggdGhhdCBhbiBPYnNlcnZhYmxlIGNhbiBiZSBwcm92aWRlZCB0byBxdWV1ZSB0aGUgaW50ZXJuYWwgSGFzaFNldCB0byBmbHVzaCB0aGUgdmFsdWVzIGl0IGhvbGRzLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW2NvbXBhcmVdIG9wdGlvbmFsIGNvbXBhcmlzb24gZnVuY3Rpb24gY2FsbGVkIHRvIHRlc3QgaWYgYW4gaXRlbSBpcyBkaXN0aW5jdCBmcm9tIHByZXZpb3VzIGl0ZW1zIGluIHRoZSBzb3VyY2UuXG4gKiBAcGFyYW0ge09ic2VydmFibGV9IFtmbHVzaGVzXSBvcHRpb25hbCBPYnNlcnZhYmxlIGZvciBmbHVzaGluZyB0aGUgaW50ZXJuYWwgSGFzaFNldCBvZiB0aGUgb3BlcmF0b3IuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSBhbiBPYnNlcnZhYmxlIHRoYXQgZW1pdHMgaXRlbXMgZnJvbSB0aGUgc291cmNlIE9ic2VydmFibGUgd2l0aCBkaXN0aW5jdCB2YWx1ZXMuXG4gKiBAbWV0aG9kIGRpc3RpbmN0XG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzdGluY3Q8VD4oY29tcGFyZT86ICh4OiBULCB5OiBUKSA9PiBib29sZWFuLCBmbHVzaGVzPzogT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxUPiB7XG4gIHJldHVybiB0aGlzLmxpZnQobmV3IERpc3RpbmN0T3BlcmF0b3IoY29tcGFyZSwgZmx1c2hlcykpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc3RpbmN0U2lnbmF0dXJlPFQ+IHtcbiAgKGNvbXBhcmU/OiAoeDogVCwgeTogVCkgPT4gYm9vbGVhbiwgZmx1c2hlcz86IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8VD47XG59XG5cbmNsYXNzIERpc3RpbmN0T3BlcmF0b3I8VD4gaW1wbGVtZW50cyBPcGVyYXRvcjxULCBUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGFyZTogKHg6IFQsIHk6IFQpID0+IGJvb2xlYW4sIHByaXZhdGUgZmx1c2hlczogT2JzZXJ2YWJsZTxhbnk+KSB7XG4gIH1cblxuICBjYWxsKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4sIHNvdXJjZTogYW55KTogYW55IHtcbiAgICByZXR1cm4gc291cmNlLl9zdWJzY3JpYmUobmV3IERpc3RpbmN0U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmNvbXBhcmUsIHRoaXMuZmx1c2hlcykpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5leHBvcnQgY2xhc3MgRGlzdGluY3RTdWJzY3JpYmVyPFQ+IGV4dGVuZHMgT3V0ZXJTdWJzY3JpYmVyPFQsIFQ+IHtcbiAgcHJpdmF0ZSB2YWx1ZXM6IEFycmF5PFQ+ID0gW107XG5cbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb246IFN1YnNjcmliZXI8VD4sIGNvbXBhcmU6ICh4OiBULCB5OiBUKSA9PiBib29sZWFuLCBmbHVzaGVzOiBPYnNlcnZhYmxlPGFueT4pIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gICAgaWYgKHR5cGVvZiBjb21wYXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmNvbXBhcmUgPSBjb21wYXJlO1xuICAgIH1cblxuICAgIGlmIChmbHVzaGVzKSB7XG4gICAgICB0aGlzLmFkZChzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBmbHVzaGVzKSk7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5TmV4dChvdXRlclZhbHVlOiBULCBpbm5lclZhbHVlOiBULFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgVD4pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgbm90aWZ5RXJyb3IoZXJyb3I6IGFueSwgaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBUPik6IHZvaWQge1xuICAgIHRoaXMuX2Vycm9yKGVycm9yKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgIGNvbnN0IGxlbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuY29tcGFyZSh2YWx1ZXNbaV0sIHZhbHVlKSkge1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tcGFyZSh4OiBULCB5OiBUKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHggPT09IHk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
