System.register(['../util/isArray', '../util/isFunction', '../util/isPromise', '../util/isScheduler', './PromiseObservable', './IteratorObservable', './ArrayObservable', './ArrayLikeObservable', '../symbol/observable', '../symbol/iterator', '../Observable', '../operator/observeOn'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var isArray_1, isFunction_1, isPromise_1, isScheduler_1, PromiseObservable_1, IteratorObservable_1, ArrayObservable_1, ArrayLikeObservable_1, observable_1, iterator_1, Observable_1, observeOn_1;
    var isArrayLike, FromObservable;
    return {
        setters:[
            function (isArray_1_1) {
                isArray_1 = isArray_1_1;
            },
            function (isFunction_1_1) {
                isFunction_1 = isFunction_1_1;
            },
            function (isPromise_1_1) {
                isPromise_1 = isPromise_1_1;
            },
            function (isScheduler_1_1) {
                isScheduler_1 = isScheduler_1_1;
            },
            function (PromiseObservable_1_1) {
                PromiseObservable_1 = PromiseObservable_1_1;
            },
            function (IteratorObservable_1_1) {
                IteratorObservable_1 = IteratorObservable_1_1;
            },
            function (ArrayObservable_1_1) {
                ArrayObservable_1 = ArrayObservable_1_1;
            },
            function (ArrayLikeObservable_1_1) {
                ArrayLikeObservable_1 = ArrayLikeObservable_1_1;
            },
            function (observable_1_1) {
                observable_1 = observable_1_1;
            },
            function (iterator_1_1) {
                iterator_1 = iterator_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (observeOn_1_1) {
                observeOn_1 = observeOn_1_1;
            }],
        execute: function() {
            isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            FromObservable = (function (_super) {
                __extends(FromObservable, _super);
                function FromObservable(ish, scheduler) {
                    _super.call(this, null);
                    this.ish = ish;
                    this.scheduler = scheduler;
                }
                FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
                    var scheduler = null;
                    var mapFn = null;
                    if (isFunction_1.isFunction(mapFnOrScheduler)) {
                        scheduler = lastScheduler || null;
                        mapFn = mapFnOrScheduler;
                    }
                    else if (isScheduler_1.isScheduler(scheduler)) {
                        scheduler = mapFnOrScheduler;
                    }
                    if (ish != null) {
                        if (typeof ish[observable_1.$$observable] === 'function') {
                            if (ish instanceof Observable_1.Observable && !scheduler) {
                                return ish;
                            }
                            return new FromObservable(ish, scheduler);
                        }
                        else if (isArray_1.isArray(ish)) {
                            return new ArrayObservable_1.ArrayObservable(ish, scheduler);
                        }
                        else if (isPromise_1.isPromise(ish)) {
                            return new PromiseObservable_1.PromiseObservable(ish, scheduler);
                        }
                        else if (typeof ish[iterator_1.$$iterator] === 'function' || typeof ish === 'string') {
                            return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
                        }
                        else if (isArrayLike(ish)) {
                            return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
                        }
                    }
                    throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
                };
                FromObservable.prototype._subscribe = function (subscriber) {
                    var ish = this.ish;
                    var scheduler = this.scheduler;
                    if (scheduler == null) {
                        return ish[observable_1.$$observable]().subscribe(subscriber);
                    }
                    else {
                        return ish[observable_1.$$observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
                    }
                };
                return FromObservable;
            }(Observable_1.Observable));
            exports_1("FromObservable", FromObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvRnJvbU9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O1FBZ0JNLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBWCxXQUFXLEdBQUcsQ0FBQyxVQUFJLENBQU0sSUFBd0IsT0FBQSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO1lBRTFGOzs7O2VBSUc7WUFDSDtnQkFBdUMsa0NBQWE7Z0JBQ2xELHdCQUFvQixHQUF1QixFQUFVLFNBQW9CO29CQUN2RSxrQkFBTSxJQUFJLENBQUMsQ0FBQztvQkFETSxRQUFHLEdBQUgsR0FBRyxDQUFvQjtvQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO2dCQUV6RSxDQUFDO2dCQWNNLHFCQUFNLEdBQWIsVUFBaUIsR0FBdUIsRUFDdkIsZ0JBQXlELEVBQ3pELE9BQWEsRUFDYixhQUF5QjtvQkFDeEMsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDO29CQUNoQyxJQUFJLEtBQUssR0FBNkIsSUFBSSxDQUFDO29CQUMzQyxFQUFFLENBQUMsQ0FBQyx1QkFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxTQUFTLEdBQUcsYUFBYSxJQUFJLElBQUksQ0FBQzt3QkFDbEMsS0FBSyxHQUE4QixnQkFBZ0IsQ0FBQztvQkFDdEQsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMseUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLFNBQVMsR0FBZSxnQkFBZ0IsQ0FBQztvQkFDM0MsQ0FBQztvQkFFRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMseUJBQVksQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQzVDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSx1QkFBVSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQ0FDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzs0QkFDYixDQUFDOzRCQUNELE1BQU0sQ0FBQyxJQUFJLGNBQWMsQ0FBSSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQy9DLENBQUM7d0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN4QixNQUFNLENBQUMsSUFBSSxpQ0FBZSxDQUFJLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDaEQsQ0FBQzt3QkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMscUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzFCLE1BQU0sQ0FBQyxJQUFJLHFDQUFpQixDQUFJLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDbEQsQ0FBQzt3QkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMscUJBQVUsQ0FBQyxLQUFLLFVBQVUsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUM1RSxNQUFNLENBQUMsSUFBSSx1Q0FBa0IsQ0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDcEUsQ0FBQzt3QkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUIsTUFBTSxDQUFDLElBQUkseUNBQW1CLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ2pFLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxNQUFNLElBQUksU0FBUyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNsRixDQUFDO2dCQUVTLG1DQUFVLEdBQXBCLFVBQXFCLFVBQXlCO29CQUM1QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO29CQUNyQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyx5QkFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ25ELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyx5QkFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSwrQkFBbUIsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFGLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBM0RBLEFBMkRDLENBM0RzQyx1QkFBVSxHQTJEaEQ7WUEzREQsMkNBMkRDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9Gcm9tT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNBcnJheX0gZnJvbSAnLi4vdXRpbC9pc0FycmF5JztcbmltcG9ydCB7aXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7aXNQcm9taXNlfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQge2lzU2NoZWR1bGVyfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmltcG9ydCB7UHJvbWlzZU9ic2VydmFibGV9IGZyb20gJy4vUHJvbWlzZU9ic2VydmFibGUnO1xuaW1wb3J0IHtJdGVyYXRvck9ic2VydmFibGV9IGZyb20nLi9JdGVyYXRvck9ic2VydmFibGUnO1xuaW1wb3J0IHtBcnJheU9ic2VydmFibGV9IGZyb20gJy4vQXJyYXlPYnNlcnZhYmxlJztcbmltcG9ydCB7QXJyYXlMaWtlT2JzZXJ2YWJsZX0gZnJvbSAnLi9BcnJheUxpa2VPYnNlcnZhYmxlJztcblxuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQgeyQkb2JzZXJ2YWJsZX0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHskJGl0ZXJhdG9yfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZhYmxlSW5wdXR9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7T2JzZXJ2ZU9uU3Vic2NyaWJlcn0gZnJvbSAnLi4vb3BlcmF0b3Ivb2JzZXJ2ZU9uJztcblxuY29uc3QgaXNBcnJheUxpa2UgPSAoPFQ+KHg6IGFueSk6IHggaXMgQXJyYXlMaWtlPFQ+ID0+IHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJyk7XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgRnJvbU9ic2VydmFibGU8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpc2g6IE9ic2VydmFibGVJbnB1dDxUPiwgcHJpdmF0ZSBzY2hlZHVsZXI6IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBpc2hcbiAgICogQHBhcmFtIG1hcEZuT3JTY2hlZHVsZXJcbiAgICogQHBhcmFtIHRoaXNBcmdcbiAgICogQHBhcmFtIGxhc3RTY2hlZHVsZXJcbiAgICogQHJldHVybiB7YW55fVxuICAgKiBAc3RhdGljIHRydWVcbiAgICogQG5hbWUgZnJvbVxuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTxUPihpc2g6IE9ic2VydmFibGVJbnB1dDxUPiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPjtcbiAgc3RhdGljIGNyZWF0ZTxULCBSPihpc2g6IEFycmF5TGlrZTxUPiwgbWFwRm46ICh4OiBhbnksIHk6IG51bWJlcikgPT4gUiwgdGhpc0FyZz86IGFueSwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxUPihpc2g6IE9ic2VydmFibGVJbnB1dDxUPixcbiAgICAgICAgICAgICAgICAgICBtYXBGbk9yU2NoZWR1bGVyPzogU2NoZWR1bGVyIHwgKCh4OiBhbnksIHk6IG51bWJlcikgPT4gVCksXG4gICAgICAgICAgICAgICAgICAgdGhpc0FyZz86IGFueSxcbiAgICAgICAgICAgICAgICAgICBsYXN0U2NoZWR1bGVyPzogU2NoZWR1bGVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgbGV0IHNjaGVkdWxlcjogU2NoZWR1bGVyID0gbnVsbDtcbiAgICBsZXQgbWFwRm46ICh4OiBhbnksIGk6IG51bWJlcikgPT4gVCA9IG51bGw7XG4gICAgaWYgKGlzRnVuY3Rpb24obWFwRm5PclNjaGVkdWxlcikpIHtcbiAgICAgIHNjaGVkdWxlciA9IGxhc3RTY2hlZHVsZXIgfHwgbnVsbDtcbiAgICAgIG1hcEZuID0gPCh4OiBhbnksIGk6IG51bWJlcikgPT4gVD4gbWFwRm5PclNjaGVkdWxlcjtcbiAgICB9IGVsc2UgaWYgKGlzU2NoZWR1bGVyKHNjaGVkdWxlcikpIHtcbiAgICAgIHNjaGVkdWxlciA9IDxTY2hlZHVsZXI+IG1hcEZuT3JTY2hlZHVsZXI7XG4gICAgfVxuXG4gICAgaWYgKGlzaCAhPSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIGlzaFskJG9ic2VydmFibGVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChpc2ggaW5zdGFuY2VvZiBPYnNlcnZhYmxlICYmICFzY2hlZHVsZXIpIHtcbiAgICAgICAgICByZXR1cm4gaXNoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRnJvbU9ic2VydmFibGU8VD4oaXNoLCBzY2hlZHVsZXIpO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KGlzaCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheU9ic2VydmFibGU8VD4oaXNoLCBzY2hlZHVsZXIpO1xuICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2UoaXNoKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VPYnNlcnZhYmxlPFQ+KGlzaCwgc2NoZWR1bGVyKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlzaFskJGl0ZXJhdG9yXSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgaXNoID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbmV3IEl0ZXJhdG9yT2JzZXJ2YWJsZTxUPig8YW55PmlzaCwgbnVsbCwgbnVsbCwgc2NoZWR1bGVyKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheUxpa2UoaXNoKSkge1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5TGlrZU9ic2VydmFibGUoaXNoLCBtYXBGbiwgdGhpc0FyZywgc2NoZWR1bGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKChpc2ggIT09IG51bGwgJiYgdHlwZW9mIGlzaCB8fCBpc2gpICsgJyBpcyBub3Qgb2JzZXJ2YWJsZScpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zdWJzY3JpYmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikge1xuICAgIGNvbnN0IGlzaCA9IHRoaXMuaXNoO1xuICAgIGNvbnN0IHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgIGlmIChzY2hlZHVsZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGlzaFskJG9ic2VydmFibGVdKCkuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNoWyQkb2JzZXJ2YWJsZV0oKS5zdWJzY3JpYmUobmV3IE9ic2VydmVPblN1YnNjcmliZXIoc3Vic2NyaWJlciwgc2NoZWR1bGVyLCAwKSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
