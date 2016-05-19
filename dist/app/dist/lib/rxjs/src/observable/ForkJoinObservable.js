System.register(['../Observable', './EmptyObservable', '../util/isArray', '../util/subscribeToResult', '../OuterSubscriber'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, EmptyObservable_1, isArray_1, subscribeToResult_1, OuterSubscriber_1;
    var ForkJoinObservable, ForkJoinSubscriber;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (EmptyObservable_1_1) {
                EmptyObservable_1 = EmptyObservable_1_1;
            },
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (subscribeToResult_1_1) {
                subscribeToResult_1 = subscribeToResult_1_1;
            },
            function (OuterSubscriber_1_1) {
                OuterSubscriber_1 = OuterSubscriber_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            ForkJoinObservable = (function (_super) {
                __extends(ForkJoinObservable, _super);
                function ForkJoinObservable(sources, resultSelector) {
                    _super.call(this);
                    this.sources = sources;
                    this.resultSelector = resultSelector;
                }
                /**
                 * @param sources
                 * @return {any}
                 * @static true
                 * @name forkJoin
                 * @owner Observable
                 */
                ForkJoinObservable.create = function () {
                    var sources = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        sources[_i - 0] = arguments[_i];
                    }
                    if (sources === null || arguments.length === 0) {
                        return new EmptyObservable_1.EmptyObservable();
                    }
                    var resultSelector = null;
                    if (typeof sources[sources.length - 1] === 'function') {
                        resultSelector = sources.pop();
                    }
                    // if the first and only other argument besides the resultSelector is an array
                    // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
                    if (sources.length === 1 && isArray_1.isArray(sources[0])) {
                        sources = sources[0];
                    }
                    if (sources.length === 0) {
                        return new EmptyObservable_1.EmptyObservable();
                    }
                    return new ForkJoinObservable(sources, resultSelector);
                };
                ForkJoinObservable.prototype._subscribe = function (subscriber) {
                    return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
                };
                return ForkJoinObservable;
            }(Observable_1.Observable));
            exports_1("ForkJoinObservable", ForkJoinObservable);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ForkJoinSubscriber = (function (_super) {
                __extends(ForkJoinSubscriber, _super);
                function ForkJoinSubscriber(destination, sources, resultSelector) {
                    _super.call(this, destination);
                    this.sources = sources;
                    this.resultSelector = resultSelector;
                    this.completed = 0;
                    this.haveValues = 0;
                    var len = sources.length;
                    this.total = len;
                    this.values = new Array(len);
                    for (var i = 0; i < len; i++) {
                        var source = sources[i];
                        var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
                        if (innerSubscription) {
                            innerSubscription.outerIndex = i;
                            this.add(innerSubscription);
                        }
                    }
                }
                ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    this.values[outerIndex] = innerValue;
                    if (!innerSub._hasValue) {
                        innerSub._hasValue = true;
                        this.haveValues++;
                    }
                };
                ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
                    var destination = this.destination;
                    var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
                    var len = values.length;
                    if (!innerSub._hasValue) {
                        destination.complete();
                        return;
                    }
                    this.completed++;
                    if (this.completed !== len) {
                        return;
                    }
                    if (haveValues === len) {
                        var value = resultSelector ? resultSelector.apply(this, values) : values;
                        destination.next(value);
                    }
                    destination.complete();
                };
                return ForkJoinSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvRm9ya0pvaW5PYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTs7OztlQUlHO1lBQ0g7Z0JBQTJDLHNDQUFhO2dCQUN0RCw0QkFBb0IsT0FBMEMsRUFDMUMsY0FBNkM7b0JBQy9ELGlCQUFPLENBQUM7b0JBRlUsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7b0JBQzFDLG1CQUFjLEdBQWQsY0FBYyxDQUErQjtnQkFFakUsQ0FBQztnQkFFRDs7Ozs7O21CQU1HO2dCQUNJLHlCQUFNLEdBQWI7b0JBQWlCLGlCQUVnRDt5QkFGaEQsV0FFZ0QsQ0FGaEQsc0JBRWdELENBRmhELElBRWdEO3dCQUZoRCxnQ0FFZ0Q7O29CQUMvRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDL0MsTUFBTSxDQUFDLElBQUksaUNBQWUsRUFBSyxDQUFDO29CQUNsQyxDQUFDO29CQUVELElBQUksY0FBYyxHQUFtQyxJQUFJLENBQUM7b0JBQzFELEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQzt3QkFDdEQsY0FBYyxHQUFtQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ2pFLENBQUM7b0JBRUQsOEVBQThFO29CQUM5RSw4RUFBOEU7b0JBQzlFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoRCxPQUFPLEdBQXNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUQsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxPQUFP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QUFDLENBQUM7d0JBQ3ZCLElBQU0sS0FBSyxHQUFHLGNBQWMsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUM7d0JBQzNFLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBRUQsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN6QixDQUFDO2dCQUNILHlCQUFDO1lBQUQsQ0EzREEsQUEyREMsQ0EzRG1DLGlDQUFlLEdBMkRsRCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vYnNlcnZhYmxlL0ZvcmtKb2luT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaWJhYmxlT3JQcm9taXNlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7RW1wdHlPYnNlcnZhYmxlfSBmcm9tICcuL0VtcHR5T2JzZXJ2YWJsZSc7XG5pbXBvcnQge2lzQXJyYXl9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5cbmltcG9ydCB7c3Vic2NyaWJlVG9SZXN1bHR9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQnO1xuaW1wb3J0IHtPdXRlclN1YnNjcmliZXJ9IGZyb20gJy4uL091dGVyU3Vic2NyaWJlcic7XG5pbXBvcnQge0lubmVyU3Vic2NyaWJlcn0gZnJvbSAnLi4vSW5uZXJTdWJzY3JpYmVyJztcblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JrSm9pbk9ic2VydmFibGU8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2VzOiBBcnJheTxTdWJzY3JpYmFibGVPclByb21pc2U8YW55Pj4sXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVzdWx0U2VsZWN0b3I/OiAoLi4udmFsdWVzOiBBcnJheTxhbnk+KSA9PiBUKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gc291cmNlc1xuICAgKiBAcmV0dXJuIHthbnl9XG4gICAqIEBzdGF0aWMgdHJ1ZVxuICAgKiBAbmFtZSBmb3JrSm9pblxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTxUPiguLi5zb3VyY2VzOiBBcnJheTxTdWJzY3JpYmFibGVPclByb21pc2U8YW55PiB8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXk8U3Vic2NyaWJhYmxlT3JQcm9taXNlPGFueT4+IHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gYW55KT4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAoc291cmNlcyA9PT0gbnVsbCB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEVtcHR5T2JzZXJ2YWJsZTxUPigpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRTZWxlY3RvcjogKC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gYW55ID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIHNvdXJjZXNbc291cmNlcy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzdWx0U2VsZWN0b3IgPSA8KC4uLnZhbHVlczogQXJyYXk8YW55PikgPT4gYW55PnNvdXJjZXMucG9wKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGZpcnN0IGFuZCBvbmx5IG90aGVyIGFyZ3VtZW50IGJlc2lkZXMgdGhlIHJlc3VsdFNlbGVjdG9yIGlzIGFuIGFycmF5XG4gICAgLy8gYXNzdW1lIGl0J3MgYmVlbiBjYWxsZWQgd2l0aCBgZm9ya0pvaW4oW29iczEsIG9iczIsIG9iczNdLCByZXN1bHRTZWxlY3RvcilgXG4gICAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoc291cmNlc1swXSkpIHtcbiAgICAgIHNvdXJjZXMgPSA8QXJyYXk8U3Vic2NyaWJhYmxlT3JQcm9taXNlPGFueT4+PnNvdXJjZXNbMF07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IEVtcHR5T2JzZXJ2YWJsZTxUPigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRm9ya0pvaW5PYnNlcnZhYmxlKDxBcnJheTxTdWJzY3JpYmFibGVPclByb21pc2U8YW55Pj4+c291cmNlcywgcmVzdWx0U2VsZWN0b3IpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxhbnk+KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbmV3IEZvcmtKb2luU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnNvdXJjZXMsIHRoaXMucmVzdWx0U2VsZWN0b3IpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBGb3JrSm9pblN1YnNjcmliZXI8VD4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgVD4ge1xuICBwcml2YXRlIGNvbXBsZXRlZCA9IDA7XG4gIHByaXZhdGUgdG90YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSB2YWx1ZXM6IGFueVtdO1xuICBwcml2YXRlIGhhdmVWYWx1ZXMgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uOiBTdWJzY3JpYmVyPFQ+LFxuICAgICAgICAgICAgICBwcml2YXRlIHNvdXJjZXM6IEFycmF5PFN1YnNjcmliYWJsZU9yUHJvbWlzZTxhbnk+PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZXN1bHRTZWxlY3Rvcj86ICguLi52YWx1ZXM6IEFycmF5PGFueT4pID0+IFQpIHtcbiAgICBzdXBlcihkZXN0aW5hdGlvbik7XG5cbiAgICBjb25zdCBsZW4gPSBzb3VyY2VzLmxlbmd0aDtcbiAgICB0aGlzLnRvdGFsID0gbGVuO1xuICAgIHRoaXMudmFsdWVzID0gbmV3IEFycmF5KGxlbik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzW2ldO1xuICAgICAgY29uc3QgaW5uZXJTdWJzY3JpcHRpb24gPSBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBzb3VyY2UsIG51bGwsIGkpO1xuXG4gICAgICBpZiAoaW5uZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgKDxhbnk+IGlubmVyU3Vic2NyaXB0aW9uKS5vdXRlckluZGV4ID0gaTtcbiAgICAgICAgdGhpcy5hZGQoaW5uZXJTdWJzY3JpcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeU5leHQob3V0ZXJWYWx1ZTogYW55LCBpbm5lclZhbHVlOiBULFxuICAgICAgICAgICAgIG91dGVySW5kZXg6IG51bWJlciwgaW5uZXJJbmRleDogbnVtYmVyLFxuICAgICAgICAgICAgIGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgVD4pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlc1tvdXRlckluZGV4XSA9IGlubmVyVmFsdWU7XG4gICAgaWYgKCEoPGFueT5pbm5lclN1YikuX2hhc1ZhbHVlKSB7XG4gICAgICAoPGFueT5pbm5lclN1YikuX2hhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGF2ZVZhbHVlcysrO1xuICAgIH1cbiAgfVxuXG4gIG5vdGlmeUNvbXBsZXRlKGlubmVyU3ViOiBJbm5lclN1YnNjcmliZXI8VCwgVD4pOiB2b2lkIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgY29uc3QgeyBoYXZlVmFsdWVzLCByZXN1bHRTZWxlY3RvciwgdmFsdWVzIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxlbiA9IHZhbHVlcy5sZW5ndGg7XG5cbiAgICBpZiAoISg8YW55PmlubmVyU3ViKS5faGFzVmFsdWUpIHtcbiAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb21wbGV0ZWQrKztcblxuICAgIGlmICh0aGlzLmNvbXBsZXRlZCAhPT0gbGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGhhdmVWYWx1ZXMgPT09IGxlbikge1xuICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRTZWxlY3RvciA/IHJlc3VsdFNlbGVjdG9yLmFwcGx5KHRoaXMsIHZhbHVlcykgOiB2YWx1ZXM7XG4gICAgICBkZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
