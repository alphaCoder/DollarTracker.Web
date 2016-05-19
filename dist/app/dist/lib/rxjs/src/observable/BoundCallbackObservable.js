System.register(['../Observable', '../util/tryCatch', '../util/errorObject', '../AsyncSubject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, tryCatch_1, errorObject_1, AsyncSubject_1;
    var BoundCallbackObservable;
    function dispatch(state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new AsyncSubject_1.AsyncSubject();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                    if (result_1 === errorObject_1.errorObject) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_1, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
            if (result === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
            }
        }
        self.add(subject.subscribe(subscriber));
    }
    function dispatchNext(arg) {
        var value = arg.value, subject = arg.subject;
        subject.next(value);
        subject.complete();
    }
    function dispatchError(arg) {
        var err = arg.err, subject = arg.subject;
        subject.error(err);
    }
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            },
            function (AsyncSubject_1_1) {
                AsyncSubject_1 = AsyncSubject_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            BoundCallbackObservable = (function (_super) {
                __extends(BoundCallbackObservable, _super);
                function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
                    _super.call(this);
                    this.callbackFunc = callbackFunc;
                    this.selector = selector;
                    this.args = args;
                    this.scheduler = scheduler;
                }
                /* tslint:enable:max-line-length */
                /**
                 * Converts a callback function to an observable sequence.
                 * @param {function} callbackFunc Function with a callback as the last
                 * parameter.
                 * @param {function} selector A selector which takes the arguments from the
                 * callback to produce a single item to yield on next.
                 * @param {Scheduler} [scheduler] The scheduler on which to schedule
                 * the callbacks.
                 * @return {function(...params: *): Observable<T>} a function which returns the
                 * Observable that corresponds to the callback.
                 * @static true
                 * @name bindCallback
                 * @owner Observable
                 */
                BoundCallbackObservable.create = function (callbackFunc, selector, scheduler) {
                    if (selector === void 0) { selector = undefined; }
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i - 0] = arguments[_i];
                        }
                        return new BoundCallbackObservable(callbackFunc, selector, args, scheduler);
                    };
                };
                BoundCallbackObservable.prototype._subscribe = function (subscriber) {
                    var callbackFunc = this.callbackFunc;
                    var args = this.args;
                    var scheduler = this.scheduler;
                    var subject = this.subject;
                    if (!scheduler) {
                        if (!subject) {
                            subject = this.subject = new AsyncSubject_1.AsyncSubject();
                            var handler = function handlerFn() {
                                var innerArgs = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    innerArgs[_i - 0] = arguments[_i];
                                }
                                var source = handlerFn.source;
                                var selector = source.selector, subject = source.subject;
                                if (selector) {
                                    var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                                    if (result_2 === errorObject_1.errorObject) {
                                        subject.error(errorObject_1.errorObject.e);
                                    }
                                    else {
                                        subject.next(result_2);
                                        subject.complete();
                                    }
                                }
                                else {
                                    subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
                                    subject.complete();
                                }
                            };
                            // use named function instance to avoid closure.
                            handler.source = this;
                            var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
                            if (result === errorObject_1.errorObject) {
                                subject.error(errorObject_1.errorObject.e);
                            }
                        }
                        return subject.subscribe(subscriber);
                    }
                    else {
                        return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
                    }
                };
                return BoundCallbackObservable;
            }(Observable_1.Observable));
            exports_1("BoundCallbackObservable", BoundCallbackObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvQm91bmRDYWxsYmFja09ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQXdHQSxrQkFBcUIsS0FBd0U7UUFDM0YsSUFBTSxJQUFJLEdBQW1CLElBQUssQ0FBQztRQUMzQix5QkFBTSxFQUFFLDZCQUFVLENBQVc7UUFDN0Isc0NBQVksRUFBRSxrQkFBSSxFQUFFLDRCQUFTLENBQVk7UUFDakQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLDJCQUFZLEVBQUssQ0FBQztZQUVqRCxJQUFNLE9BQU8sR0FBRztnQkFBbUIsbUJBQW1CO3FCQUFuQixXQUFtQixDQUFuQixzQkFBbUIsQ0FBbkIsSUFBbUI7b0JBQW5CLGtDQUFtQjs7Z0JBQ3BELElBQU0sTUFBTSxHQUFTLFNBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQy9CLDhCQUFRLEVBQUUsd0JBQU8sQ0FBWTtnQkFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDYixJQUFNLFFBQU0sR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3pELEVBQUUsQ0FBQyxDQUFDLFFBQU0sS0FBSyx5QkFBVyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUseUJBQVcsQ0FBQyxDQUFDLEVBQUUsU0FBQSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xGLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLEdBQUcs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QUN4RSxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUsseUJBQVcsQ0FBQyxDQUFDLENBQUM7Z0NBQzNCLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsQ0FBQzt3QkFDSCxDQUFDO3dCQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN2QyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQUEsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFDdkUsQ0FBQztnQkFDSCxDQUFDO2dCQUNILDhCQUFDO1lBQUQsQ0F6RkEsQUF5RkMsQ0F6RitDLHVCQUFVLEdBeUZ6RDtZQXpGRCw2REF5RkMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vYnNlcnZhYmxlL0JvdW5kQ2FsbGJhY2tPYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHt0cnlDYXRjaH0gZnJvbSAnLi4vdXRpbC90cnlDYXRjaCc7XG5pbXBvcnQge2Vycm9yT2JqZWN0fSBmcm9tICcuLi91dGlsL2Vycm9yT2JqZWN0JztcbmltcG9ydCB7QXN5bmNTdWJqZWN0fSBmcm9tICcuLi9Bc3luY1N1YmplY3QnO1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIEJvdW5kQ2FsbGJhY2tPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiB7XG4gIHN1YmplY3Q6IEFzeW5jU3ViamVjdDxUPjtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgc3RhdGljIGNyZWF0ZTxSPihjYWxsYmFja0Z1bmM6IChjYWxsYmFjazogKHJlc3VsdDogUikgPT4gYW55KSA9PiBhbnksIHNlbGVjdG9yPzogdm9pZCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKCkgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxULCBSPihjYWxsYmFja0Z1bmM6ICh2MTogVCwgY2FsbGJhY2s6IChyZXN1bHQ6IFIpID0+IGFueSkgPT4gYW55LCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCkgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxULCBUMiwgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgY2FsbGJhY2s6IChyZXN1bHQ6IFIpID0+IGFueSkgPT4gYW55LCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyKSA9PiBPYnNlcnZhYmxlPFI+O1xuICBzdGF0aWMgY3JlYXRlPFQsIFQyLCBUMywgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCBjYWxsYmFjazogKHJlc3VsdDogUikgPT4gYW55KSA9PiBhbnksIHNlbGVjdG9yPzogdm9pZCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKHYxOiBULCB2MjogVDIsIHYzOiBUMykgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxULCBUMiwgVDMsIFQ0LCBSPihjYWxsYmFja0Z1bmM6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgY2FsbGJhY2s6IChyZXN1bHQ6IFIpID0+IGFueSkgPT4gYW55LCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCkgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxULCBUMiwgVDMsIFQ0LCBUNSwgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQsIHY1OiBUNSwgY2FsbGJhY2s6IChyZXN1bHQ6IFIpID0+IGFueSkgPT4gYW55LCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1KSA9PiBPYnNlcnZhYmxlPFI+O1xuICBzdGF0aWMgY3JlYXRlPFQsIFQyLCBUMywgVDQsIFQ1LCBUNiwgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQsIHY1OiBUNSwgdjY6IFQ2LCBjYWxsYmFjazogKHJlc3VsdDogUikgPT4gYW55KSA9PiBhbnksIHNlbGVjdG9yPzogdm9pZCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKHYxOiBULCB2MjogVDIsIHYzOiBUMywgdjQ6IFQ0LCB2NTogVDUsIHY2OiBUNikgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxSPihjYWxsYmFja0Z1bmM6IChjYWxsYmFjazogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID0+IGFueSwgc2VsZWN0b3I6ICguLi5hcmdzOiBhbnlbXSkgPT4gUiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKCkgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxULCBSPihjYWxsYmFja0Z1bmM6ICh2MTogVCwgY2FsbGJhY2s6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA9PiBhbnksIHNlbGVjdG9yOiAoLi4uYXJnczogYW55W10pID0+IFIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCkgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxULCBUMiwgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgY2FsbGJhY2s6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA9PiBhbnksIHNlbGVjdG9yOiAoLi4uYXJnczogYW55W10pID0+IFIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyKSA9PiBPYnNlcnZhYmxlPFI+O1xuICBzdGF0aWMgY3JlYXRlPFQsIFQyLCBUMywgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCBjYWxsYmFjazogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID0+IGFueSwgc2VsZWN0b3I6ICguLi5hcmdzOiBhbnlbXSkgPT4gUiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKHYxOiBULCB2MjogVDIsIHYzOiBUMykgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxULCBUMiwgVDMsIFQ0LCBSPihjYWxsYmFja0Z1bmM6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgY2FsbGJhY2s6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA9PiBhbnksIHNlbGVjdG9yOiAoLi4uYXJnczogYW55W10pID0+IFIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCkgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxULCBUMiwgVDMsIFQ0LCBUNSwgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQsIHY1OiBUNSwgY2FsbGJhY2s6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA9PiBhbnksIHNlbGVjdG9yOiAoLi4uYXJnczogYW55W10pID0+IFIsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1KSA9PiBPYnNlcnZhYmxlPFI+O1xuICBzdGF0aWMgY3JlYXRlPFQsIFQyLCBUMywgVDQsIFQ1LCBUNiwgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQsIHY1OiBUNSwgdjY6IFQ2LCBjYWxsYmFjazogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID0+IGFueSwgc2VsZWN0b3I6ICguLi5hcmdzOiBhbnlbXSkgPT4gUiwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKHYxOiBULCB2MjogVDIsIHYzOiBUMywgdjQ6IFQ0LCB2NTogVDUsIHY2OiBUNikgPT4gT2JzZXJ2YWJsZTxSPjtcbiAgc3RhdGljIGNyZWF0ZTxUPihjYWxsYmFja0Z1bmM6IEZ1bmN0aW9uLCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICguLi5hcmdzOiBhbnlbXSkgPT4gT2JzZXJ2YWJsZTxUPjtcbiAgc3RhdGljIGNyZWF0ZTxUPihjYWxsYmFja0Z1bmM6IEZ1bmN0aW9uLCBzZWxlY3Rvcj86ICguLi5hcmdzOiBhbnlbXSkgPT4gVCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKC4uLmFyZ3M6IGFueVtdKSA9PiBPYnNlcnZhYmxlPFQ+O1xuICAvKiB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aCAqL1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGFuIG9ic2VydmFibGUgc2VxdWVuY2UuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrRnVuYyBGdW5jdGlvbiB3aXRoIGEgY2FsbGJhY2sgYXMgdGhlIGxhc3RcbiAgICogcGFyYW1ldGVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBzZWxlY3RvciBBIHNlbGVjdG9yIHdoaWNoIHRha2VzIHRoZSBhcmd1bWVudHMgZnJvbSB0aGVcbiAgICogY2FsbGJhY2sgdG8gcHJvZHVjZSBhIHNpbmdsZSBpdGVtIHRvIHlpZWxkIG9uIG5leHQuXG4gICAqIEBwYXJhbSB7U2NoZWR1bGVyfSBbc2NoZWR1bGVyXSBUaGUgc2NoZWR1bGVyIG9uIHdoaWNoIHRvIHNjaGVkdWxlXG4gICAqIHRoZSBjYWxsYmFja3MuXG4gICAqIEByZXR1cm4ge2Z1bmN0aW9uKC4uLnBhcmFtczogKik6IE9ic2VydmFibGU8VD59IGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0aGVcbiAgICogT2JzZXJ2YWJsZSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBjYWxsYmFjay5cbiAgICogQHN0YXRpYyB0cnVlXG4gICAqIEBuYW1lIGJpbmRDYWxsYmFja1xuICAgKiBAb3duZXIgT2JzZXJ2YWJsZVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZTxUPihjYWxsYmFja0Z1bmM6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBGdW5jdGlvbiB8IHZvaWQgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKC4uLmFyZ3M6IGFueVtdKSA9PiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKTogT2JzZXJ2YWJsZTxUPiA9PiB7XG4gICAgICByZXR1cm4gbmV3IEJvdW5kQ2FsbGJhY2tPYnNlcnZhYmxlPFQ+KGNhbGxiYWNrRnVuYywgPGFueT5zZWxlY3RvciwgYXJncywgc2NoZWR1bGVyKTtcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsYmFja0Z1bmM6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgICBwcml2YXRlIHNlbGVjdG9yOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcmdzOiBhbnlbXSxcbiAgICAgICAgICAgICAgcHVibGljIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VCB8IFRbXT4pOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IGNhbGxiYWNrRnVuYyA9IHRoaXMuY2FsbGJhY2tGdW5jO1xuICAgIGNvbnN0IGFyZ3MgPSB0aGlzLmFyZ3M7XG4gICAgY29uc3Qgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgbGV0IHN1YmplY3QgPSB0aGlzLnN1YmplY3Q7XG5cbiAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgIHN1YmplY3QgPSB0aGlzLnN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0PFQ+KCk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyRm4oLi4uaW5uZXJBcmdzOiBhbnlbXSkge1xuICAgICAgICAgIGNvbnN0IHNvdXJjZSA9ICg8YW55PmhhbmRsZXJGbikuc291cmNlO1xuICAgICAgICAgIGNvbnN0IHsgc2VsZWN0b3IsIHN1YmplY3QgfSA9IHNvdXJjZTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyeUNhdGNoKHNlbGVjdG9yKS5hcHBseSh0aGlzLCBpbm5lckFyZ3MpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnJvck9iamVjdC5lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1YmplY3QubmV4dChyZXN1bHQpO1xuICAgICAgICAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1YmplY3QubmV4dChpbm5lckFyZ3MubGVuZ3RoID09PSAxID8gaW5uZXJBcmdzWzBdIDogaW5uZXJBcmdzKTtcbiAgICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIHVzZSBuYW1lZCBmdW5jdGlvbiBpbnN0YW5jZSB0byBhdm9pZCBjbG9zdXJlLlxuICAgICAgICAoPGFueT5oYW5kbGVyKS5zb3VyY2UgPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyeUNhdGNoKGNhbGxiYWNrRnVuYykuYXBwbHkodGhpcywgYXJncy5jb25jYXQoaGFuZGxlcikpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iamVjdCkge1xuICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyb3JPYmplY3QuZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJqZWN0LnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwgeyBzb3VyY2U6IHRoaXMsIHN1YnNjcmliZXIgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoPFQ+KHN0YXRlOiB7IHNvdXJjZTogQm91bmRDYWxsYmFja09ic2VydmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4gfSkge1xuICBjb25zdCBzZWxmID0gKDxTdWJzY3JpcHRpb24+IHRoaXMpO1xuICBjb25zdCB7IHNvdXJjZSwgc3Vic2NyaWJlciB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgY2FsbGJhY2tGdW5jLCBhcmdzLCBzY2hlZHVsZXIgfSA9IHNvdXJjZTtcbiAgbGV0IHN1YmplY3QgPSBzb3VyY2Uuc3ViamVjdDtcblxuICBpZiAoIXN1YmplY3QpIHtcbiAgICBzdWJqZWN0ID0gc291cmNlLnN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0PFQ+KCk7XG5cbiAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlckZuKC4uLmlubmVyQXJnczogYW55W10pIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9ICg8YW55PmhhbmRsZXJGbikuc291cmNlO1xuICAgICAgY29uc3QgeyBzZWxlY3Rvciwgc3ViamVjdCB9ID0gc291cmNlO1xuICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRyeUNhdGNoKHNlbGVjdG9yKS5hcHBseSh0aGlzLCBpbm5lckFyZ3MpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iamVjdCkge1xuICAgICAgICAgIHNlbGYuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaEVycm9yLCAwLCB7IGVycjogZXJyb3JPYmplY3QuZSwgc3ViamVjdCB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoTmV4dCwgMCwgeyB2YWx1ZTogcmVzdWx0LCBzdWJqZWN0IH0pKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbm5lckFyZ3MubGVuZ3RoID09PSAxID8gaW5uZXJBcmdzWzBdIDogaW5uZXJBcmdzO1xuICAgICAgICBzZWxmLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCAwLCB7IHZhbHVlLCBzdWJqZWN0IH0pKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIHVzZSBuYW1lZCBmdW5jdGlvbiB0byBwYXNzIHZhbHVlcyBpbiB3aXRob3V0IGNsb3N1cmVcbiAgICAoPGFueT5oYW5kbGVyKS5zb3VyY2UgPSBzb3VyY2U7XG5cbiAgICBjb25zdCByZXN1bHQgPSB0cnlDYXRjaChjYWxsYmFja0Z1bmMpLmFwcGx5KHRoaXMsIGFyZ3MuY29uY2F0KGhhbmRsZXIpKTtcbiAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iamVjdCkge1xuICAgICAgc3ViamVjdC5lcnJvcihlcnJvck9iamVjdC5lKTtcbiAgICB9XG4gIH1cblxuICBzZWxmLmFkZChzdWJqZWN0LnN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG59XG5cbmludGVyZmFjZSBEaXNwYXRjaE5leHRBcmc8VD4ge1xuICBzdWJqZWN0OiBBc3luY1N1YmplY3Q8VD47XG4gIHZhbHVlOiBUO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hOZXh0PFQ+KGFyZzogRGlzcGF0Y2hOZXh0QXJnPFQ+KSB7XG4gIGNvbnN0IHsgdmFsdWUsIHN1YmplY3QgfSA9IGFyZztcbiAgc3ViamVjdC5uZXh0KHZhbHVlKTtcbiAgc3ViamVjdC5jb21wbGV0ZSgpO1xufVxuXG5pbnRlcmZhY2UgRGlzcGF0Y2hFcnJvckFyZzxUPiB7XG4gIHN1YmplY3Q6IEFzeW5jU3ViamVjdDxUPjtcbiAgZXJyOiBhbnk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaEVycm9yPFQ+KGFyZzogRGlzcGF0Y2hFcnJvckFyZzxUPikge1xuICBjb25zdCB7IGVyciwgc3ViamVjdCB9ID0gYXJnO1xuICBzdWJqZWN0LmVycm9yKGVycik7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
