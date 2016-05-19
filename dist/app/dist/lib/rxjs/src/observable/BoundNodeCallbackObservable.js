System.register(['../Observable', '../util/tryCatch', '../util/errorObject', '../AsyncSubject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, tryCatch_1, errorObject_1, AsyncSubject_1;
    var BoundNodeCallbackObservable;
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
                var err = innerArgs.shift();
                if (err) {
                    subject.error(err);
                }
                else if (selector) {
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
            BoundNodeCallbackObservable = (function (_super) {
                __extends(BoundNodeCallbackObservable, _super);
                function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
                    _super.call(this);
                    this.callbackFunc = callbackFunc;
                    this.selector = selector;
                    this.args = args;
                    this.scheduler = scheduler;
                }
                /* tslint:enable:max-line-length */
                /**
                 * Converts a node callback to an Observable.
                 * @param callbackFunc
                 * @param selector
                 * @param scheduler
                 * @return {function(...params: *): Observable<T>}
                 * @static true
                 * @name bindNodeCallback
                 * @owner Observable
                 */
                BoundNodeCallbackObservable.create = function (callbackFunc, selector, scheduler) {
                    if (selector === void 0) { selector = undefined; }
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i - 0] = arguments[_i];
                        }
                        return new BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler);
                    };
                };
                BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
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
                                var err = innerArgs.shift();
                                if (err) {
                                    subject.error(err);
                                }
                                else if (selector) {
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
                return BoundNodeCallbackObservable;
            }(Observable_1.Observable));
            exports_1("BoundNodeCallbackObservable", BoundNodeCallbackObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvQm91bmROb2RlQ2FsbGJhY2tPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFpR0Esa0JBQXFCLEtBQTRFO1FBQy9GLElBQU0sSUFBSSxHQUFtQixJQUFLLENBQUM7UUFDM0IseUJBQU0sRUFBRSw2QkFBVSxDQUFXO1FBQzdCLHNDQUFZLEVBQUUsa0JBQUksRUFBRSw0QkFBUyxDQUFZO1FBQ2pELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFFN0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSwyQkFBWSxFQUFLLENBQUM7WUFFakQsSUFBTSxPQUFPLEdBQUc7Z0JBQW1CLG1CQUFtQjtxQkFBbkIsV0FBbUIsQ0FBbkIsc0JBQW1CLENBQW5CLElBQW1CO29CQUFuQixrQ0FBbUI7O2dCQUNwRCxJQUFNLE1BQU0sR0FBUyxTQUFVLENBQUMsTUFBTSxDQUFDO2dCQUMvQiw4QkFBUSxFQUFFLHdCQUFPLENBQVk7Z0JBQ3JDLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFOUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNwQixJQUFNLFFBQU0sR0FBRyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3pELEVBQUUsQ0FBQyxDQUFDLFFBQU0sS0FBSyx5QkFBVyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFT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QUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7b0NBQ2hFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQ0FDckIsQ0FBQzs0QkFDSCxDQUFDLENBQUM7NEJBQ0YsZ0RBQWdEOzRCQUMxQyxPQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFFN0IsSUFBTSxNQUFNLEdBQUcsbUJBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDeEUsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLHlCQUFXLENBQUMsQ0FBQyxDQUFDO2dDQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQy9CLENBQUM7d0JBQ0gsQ0FBQzt3QkFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFBLFVBQVUsRUFBRSxDQUFDLENBQUM7b0JBQ3ZFLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCxrQ0FBQztZQUFELENBbEZBLEFBa0ZDLENBbEZtRCx1QkFBVSxHQWtGN0Q7WUFsRkQscUVBa0ZDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9Cb3VuZE5vZGVDYWxsYmFja09ic2VydmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge3RyeUNhdGNofSBmcm9tICcuLi91dGlsL3RyeUNhdGNoJztcbmltcG9ydCB7ZXJyb3JPYmplY3R9IGZyb20gJy4uL3V0aWwvZXJyb3JPYmplY3QnO1xuaW1wb3J0IHtBc3luY1N1YmplY3R9IGZyb20gJy4uL0FzeW5jU3ViamVjdCc7XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICogQGhpZGUgdHJ1ZVxuICovXG5leHBvcnQgY2xhc3MgQm91bmROb2RlQ2FsbGJhY2tPYnNlcnZhYmxlPFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiB7XG4gIHN1YmplY3Q6IEFzeW5jU3ViamVjdDxUPjtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbiAgc3RhdGljIGNyZWF0ZTxSPihjYWxsYmFja0Z1bmM6IChjYWxsYmFjazogKGVycjogYW55LCByZXN1bHQ6IFIpID0+IGFueSkgPT4gYW55LCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICgpID0+IE9ic2VydmFibGU8Uj47XG4gIHN0YXRpYyBjcmVhdGU8VCwgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIGNhbGxiYWNrOiAoZXJyOiBhbnksIHJlc3VsdDogUikgPT4gYW55KSA9PiBhbnksIHNlbGVjdG9yPzogdm9pZCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKHYxOiBUKSA9PiBPYnNlcnZhYmxlPFI+O1xuICBzdGF0aWMgY3JlYXRlPFQsIFQyLCBSPihjYWxsYmFja0Z1bmM6ICh2MTogVCwgdjI6IFQyLCBjYWxsYmFjazogKGVycjogYW55LCByZXN1bHQ6IFIpID0+IGFueSkgPT4gYW55LCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyKSA9PiBPYnNlcnZhYmxlPFI+O1xuICBzdGF0aWMgY3JlYXRlPFQsIFQyLCBUMywgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCBjYWxsYmFjazogKGVycjogYW55LCByZXN1bHQ6IFIpID0+IGFueSkgPT4gYW55LCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMpID0+IE9ic2VydmFibGU8Uj47XG4gIHN0YXRpYyBjcmVhdGU8VCwgVDIsIFQzLCBUNCwgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQsIGNhbGxiYWNrOiAoZXJyOiBhbnksIHJlc3VsdDogUikgPT4gYW55KSA9PiBhbnksIHNlbGVjdG9yPzogdm9pZCwgc2NoZWR1bGVyPzogU2NoZWR1bGVyKTogKHYxOiBULCB2MjogVDIsIHYzOiBUMywgdjQ6IFQ0KSA9PiBPYnNlcnZhYmxlPFI+O1xuICBzdGF0aWMgY3JlYXRlPFQsIFQyLCBUMywgVDQsIFQ1LCBSPihjYWxsYmFja0Z1bmM6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1LCBjYWxsYmFjazogKGVycjogYW55LCByZXN1bHQ6IFIpID0+IGFueSkgPT4gYW55LCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1KSA9PiBPYnNlcnZhYmxlPFI+O1xuICBzdGF0aWMgY3JlYXRlPFQsIFQyLCBUMywgVDQsIFQ1LCBUNiwgUj4oY2FsbGJhY2tGdW5jOiAodjE6IFQsIHYyOiBUMiwgdjM6IFQzLCB2NDogVDQsIHY1OiBUNSwgdjY6IFQ2LCBjYWxsYmFjazogKGVycjogYW55LCByZXN1bHQ6IFIpID0+IGFueSkgPT4gYW55LCBzZWxlY3Rvcj86IHZvaWQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICh2MTogVCwgdjI6IFQyLCB2MzogVDMsIHY0OiBUNCwgdjU6IFQ1LCB2NjogVDYpID0+IE9ic2VydmFibGU8Uj47XG4gIHN0YXRpYyBjcmVhdGU8VD4oY2FsbGJhY2tGdW5jOiBGdW5jdGlvbiwgc2VsZWN0b3I/OiB2b2lkLCBzY2hlZHVsZXI/OiBTY2hlZHVsZXIpOiAoLi4uYXJnczogYW55W10pID0+IE9ic2VydmFibGU8VD47XG4gIHN0YXRpYyBjcmVhdGU8VD4oY2FsbGJhY2tGdW5jOiBGdW5jdGlvbiwgc2VsZWN0b3I/OiAoLi4uYXJnczogYW55W10pID0+IFQsIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6ICguLi5hcmdzOiBhbnlbXSkgPT4gT2JzZXJ2YWJsZTxUPjtcbiAgLyogdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGggKi9cblxuICAvKipcbiAgICogQ29udmVydHMgYSBub2RlIGNhbGxiYWNrIHRvIGFuIE9ic2VydmFibGUuXG4gICAqIEBwYXJhbSBjYWxsYmFja0Z1bmNcbiAgICogQHBhcmFtIHNlbGVjdG9yXG4gICAqIEBwYXJhbSBzY2hlZHVsZXJcbiAgICogQHJldHVybiB7ZnVuY3Rpb24oLi4ucGFyYW1zOiAqKTogT2JzZXJ2YWJsZTxUPn1cbiAgICogQHN0YXRpYyB0cnVlXG4gICAqIEBuYW1lIGJpbmROb2RlQ2FsbGJhY2tcbiAgICogQG93bmVyIE9ic2VydmFibGVcbiAgICovXG4gIHN0YXRpYyBjcmVhdGU8VD4oY2FsbGJhY2tGdW5jOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogRnVuY3Rpb24gfCB2b2lkID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlcj86IFNjaGVkdWxlcik6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKC4uLmFyZ3M6IGFueVtdKTogT2JzZXJ2YWJsZTxUPiA9PiB7XG4gICAgICByZXR1cm4gbmV3IEJvdW5kTm9kZUNhbGxiYWNrT2JzZXJ2YWJsZTxUPihjYWxsYmFja0Z1bmMsIDxhbnk+c2VsZWN0b3IsIGFyZ3MsIHNjaGVkdWxlcik7XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbGJhY2tGdW5jOiBGdW5jdGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzZWxlY3RvcjogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIHByaXZhdGUgYXJnczogYW55W10sXG4gICAgICAgICAgICAgIHB1YmxpYyBzY2hlZHVsZXI6IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQgfCBUW10+KTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBjYWxsYmFja0Z1bmMgPSB0aGlzLmNhbGxiYWNrRnVuYztcbiAgICBjb25zdCBhcmdzID0gdGhpcy5hcmdzO1xuICAgIGNvbnN0IHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgIGxldCBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0O1xuXG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgIGlmICghc3ViamVjdCkge1xuICAgICAgICBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdDxUPigpO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlckZuKC4uLmlubmVyQXJnczogYW55W10pIHtcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSAoPGFueT5oYW5kbGVyRm4pLnNvdXJjZTtcbiAgICAgICAgICBjb25zdCB7IHNlbGVjdG9yLCBzdWJqZWN0IH0gPSBzb3VyY2U7XG4gICAgICAgICAgY29uc3QgZXJyID0gaW5uZXJBcmdzLnNoaWZ0KCk7XG5cbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycik7XG4gICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJ5Q2F0Y2goc2VsZWN0b3IpLmFwcGx5KHRoaXMsIGlubmVyQXJncyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iamVjdCkge1xuICAgICAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycm9yT2JqZWN0LmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3ViamVjdC5uZXh0KHJlc3VsdCk7XG4gICAgICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3ViamVjdC5uZXh0KGlubmVyQXJncy5sZW5ndGggPT09IDEgPyBpbm5lckFyZ3NbMF0gOiBpbm5lckFyZ3MpO1xuICAgICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gdXNlIG5hbWVkIGZ1bmN0aW9uIGluc3RhbmNlIHRvIGF2b2lkIGNsb3N1cmUuXG4gICAgICAgICg8YW55PmhhbmRsZXIpLnNvdXJjZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdHJ5Q2F0Y2goY2FsbGJhY2tGdW5jKS5hcHBseSh0aGlzLCBhcmdzLmNvbmNhdChoYW5kbGVyKSk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqZWN0KSB7XG4gICAgICAgICAgc3ViamVjdC5lcnJvcihlcnJvck9iamVjdC5lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoLCAwLCB7IHNvdXJjZTogdGhpcywgc3Vic2NyaWJlciB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2g8VD4oc3RhdGU6IHsgc291cmNlOiBCb3VuZE5vZGVDYWxsYmFja09ic2VydmFibGU8VD4sIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4gfSkge1xuICBjb25zdCBzZWxmID0gKDxTdWJzY3JpcHRpb24+IHRoaXMpO1xuICBjb25zdCB7IHNvdXJjZSwgc3Vic2NyaWJlciB9ID0gc3RhdGU7XG4gIGNvbnN0IHsgY2FsbGJhY2tGdW5jLCBhcmdzLCBzY2hlZHVsZXIgfSA9IHNvdXJjZTtcbiAgbGV0IHN1YmplY3QgPSBzb3VyY2Uuc3ViamVjdDtcblxuICBpZiAoIXN1YmplY3QpIHtcbiAgICBzdWJqZWN0ID0gc291cmNlLnN1YmplY3QgPSBuZXcgQXN5bmNTdWJqZWN0PFQ+KCk7XG5cbiAgICBjb25zdCBoYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlckZuKC4uLmlubmVyQXJnczogYW55W10pIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9ICg8YW55PmhhbmRsZXJGbikuc291cmNlO1xuICAgICAgY29uc3QgeyBzZWxlY3Rvciwgc3ViamVjdCB9ID0gc291cmNlO1xuICAgICAgY29uc3QgZXJyID0gaW5uZXJBcmdzLnNoaWZ0KCk7XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgc3ViamVjdC5lcnJvcihlcnIpO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0cnlDYXRjaChzZWxlY3RvcikuYXBwbHkodGhpcywgaW5uZXJBcmdzKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICBzZWxmLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hFcnJvciwgMCwgeyBlcnI6IGVycm9yT2JqZWN0LmUsIHN1YmplY3QgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIDAsIHsgdmFsdWU6IHJlc3VsdCwgc3ViamVjdCB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5uZXJBcmdzLmxlbmd0aCA9PT0gMSA/IGlubmVyQXJnc1swXSA6IGlubmVyQXJncztcbiAgICAgICAgc2VsZi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoTmV4dCwgMCwgeyB2YWx1ZSwgc3ViamVjdCB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyB1c2UgbmFtZWQgZnVuY3Rpb24gdG8gcGFzcyB2YWx1ZXMgaW4gd2l0aG91dCBjbG9zdXJlXG4gICAgKDxhbnk+aGFuZGxlcikuc291cmNlID0gc291cmNlO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gdHJ5Q2F0Y2goY2FsbGJhY2tGdW5jKS5hcHBseSh0aGlzLCBhcmdzLmNvbmNhdChoYW5kbGVyKSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgIHN1YmplY3QuZXJyb3IoZXJyb3JPYmplY3QuZSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZi5hZGQoc3ViamVjdC5zdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xufVxuXG5pbnRlcmZhY2UgRGlzcGF0Y2hOZXh0QXJnPFQ+IHtcbiAgc3ViamVjdDogQXN5bmNTdWJqZWN0PFQ+O1xuICB2YWx1ZTogVDtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoTmV4dDxUPihhcmc6IERpc3BhdGNoTmV4dEFyZzxUPikge1xuICBjb25zdCB7IHZhbHVlLCBzdWJqZWN0IH0gPSBhcmc7XG4gIHN1YmplY3QubmV4dCh2YWx1ZSk7XG4gIHN1YmplY3QuY29tcGxldGUoKTtcbn1cblxuaW50ZXJmYWNlIERpc3BhdGNoRXJyb3JBcmc8VD4ge1xuICBzdWJqZWN0OiBBc3luY1N1YmplY3Q8VD47XG4gIGVycjogYW55O1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hFcnJvcjxUPihhcmc6IERpc3BhdGNoRXJyb3JBcmc8VD4pIHtcbiAgY29uc3QgeyBlcnIsIHN1YmplY3QgfSA9IGFyZztcbiAgc3ViamVjdC5lcnJvcihlcnIpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
