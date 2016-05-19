System.register(['../util/root', '../util/isObject', '../util/tryCatch', '../Observable', '../util/isFunction', '../symbol/iterator', '../util/errorObject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var root_1, isObject_1, tryCatch_1, Observable_1, isFunction_1, iterator_1, errorObject_1;
    var IteratorObservable, StringIterator, ArrayIterator, maxSafeInteger;
    function getIterator(obj) {
        var i = obj[iterator_1.$$iterator];
        if (!i && typeof obj === 'string') {
            return new StringIterator(obj);
        }
        if (!i && obj.length !== undefined) {
            return new ArrayIterator(obj);
        }
        if (!i) {
            throw new TypeError('Object is not iterable');
        }
        return obj[iterator_1.$$iterator]();
    }
    function toLength(o) {
        var len = +o.length;
        if (isNaN(len)) {
            return 0;
        }
        if (len === 0 || !numberIsFinite(len)) {
            return len;
        }
        len = sign(len) * Math.floor(Math.abs(len));
        if (len <= 0) {
            return 0;
        }
        if (len > maxSafeInteger) {
            return maxSafeInteger;
        }
        return len;
    }
    function numberIsFinite(value) {
        return typeof value === 'number' && root_1.root.isFinite(value);
    }
    function sign(value) {
        var valueAsNumber = +value;
        if (valueAsNumber === 0) {
            return valueAsNumber;
        }
        if (isNaN(valueAsNumber)) {
            return valueAsNumber;
        }
        return valueAsNumber < 0 ? -1 : 1;
    }
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (isObject_1_1) {
                isObject_1 = isObject_1_1;
            },
            function (tryCatch_1_1) {
                tryCatch_1 = tryCatch_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (isFunction_1_1) {
                isFunction_1 = isFunction_1_1;
            },
            function (iterator_1_1) {
                iterator_1 = iterator_1_1;
            },
            function (errorObject_1_1) {
                errorObject_1 = errorObject_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            IteratorObservable = (function (_super) {
                __extends(IteratorObservable, _super);
                function IteratorObservable(iterator, project, thisArg, scheduler) {
                    _super.call(this);
                    if (iterator == null) {
                        throw new Error('iterator cannot be null.');
                    }
                    if (isObject_1.isObject(project)) {
                        this.thisArg = project;
                        this.scheduler = thisArg;
                    }
                    else if (isFunction_1.isFunction(project)) {
                        this.project = project;
                        this.thisArg = thisArg;
                        this.scheduler = scheduler;
                    }
                    else if (project != null) {
                        throw new Error('When provided, `project` must be a function.');
                    }
                    this.iterator = getIterator(iterator);
                }
                IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
                    return new IteratorObservable(iterator, project, thisArg, scheduler);
                };
                IteratorObservable.dispatch = function (state) {
                    var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
                    if (hasError) {
                        subscriber.error(state.error);
                        return;
                    }
                    var result = iterator.next();
                    if (result.done) {
                        subscriber.complete();
                        return;
                    }
                    if (project) {
                        result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
                        if (result === errorObject_1.errorObject) {
                            state.error = errorObject_1.errorObject.e;
                            state.hasError = true;
                        }
                        else {
                            subscriber.next(result);
                            state.index = index + 1;
                        }
                    }
                    else {
                        subscriber.next(result.value);
                        state.index = index + 1;
                    }
                    if (subscriber.isUnsubscribed) {
                        return;
                    }
                    this.schedule(state);
                };
                IteratorObservable.prototype._subscribe = function (subscriber) {
                    var index = 0;
                    var _a = this, iterator = _a.iterator, project = _a.project, thisArg = _a.thisArg, scheduler = _a.scheduler;
                    if (scheduler) {
                        return scheduler.schedule(IteratorObservable.dispatch, 0, {
                            index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
                        });
                    }
                    else {
                        do {
                            var result = iterator.next();
                            if (result.done) {
                                subscriber.complete();
                                break;
                            }
                            else if (project) {
                                result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
                                if (result === errorObject_1.errorObject) {
                                    subscriber.error(errorObject_1.errorObject.e);
                                    break;
                                }
                                subscriber.next(result);
                            }
                            else {
                                subscriber.next(result.value);
                            }
                            if (subscriber.isUnsubscribed) {
                                break;
                            }
                        } while (true);
                    }
                };
                return IteratorObservable;
            }(Observable_1.Observable));
            exports_1("IteratorObservable", IteratorObservable);
            StringIterator = (function () {
                function StringIterator(str, idx, len) {
                    if (idx === void 0) { idx = 0; }
                    if (len === void 0) { len = str.length; }
                    this.str = str;
                    this.idx = idx;
                    this.len = len;
                }
                StringIterator.prototype[iterator_1.$$iterator] = function () { return (this); };
                StringIterator.prototype.next = function () {
                    return this.idx < this.len ? {
                        done: false,
                        value: this.str.charAt(this.idx++)
                    } : {
                        done: true,
                        value: undefined
                    };
                };
                return StringIterator;
            }());
            ArrayIterator = (function () {
                function ArrayIterator(arr, idx, len) {
                    if (idx === void 0) { idx = 0; }
                    if (len === void 0) { len = toLength(arr); }
                    this.arr = arr;
                    this.idx = idx;
                    this.len = len;
                }
                ArrayIterator.prototype[iterator_1.$$iterator] = function () { return this; };
                ArrayIterator.prototype.next = function () {
                    return this.idx < this.len ? {
                        done: false,
                        value: this.arr[this.idx++]
                    } : {
                        done: true,
                        value: undefined
                    };
                };
                return ArrayIterator;
            }());
            maxSafeInteger = Math.pow(2, 53) - 1;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvSXRlcmF0b3JPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OzsyREE0S00sY0FBYztJQWRwQixxQkFBcUIsR0FBUTtRQUMzQixJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMscUJBQVUsQ0FBQyxDQUFDO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxNQUFNLElBQUksU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUlELGtCQUFrQixDQUFNO1FBQ3RCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNiLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQztRQUNELEdBQUcsR0FBRyxJQUFJLENBQUMsR0FB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QUcsQ0FBWTtvQkFDZixRQUFHLEdBQUgsR0FBRyxDQUFZO29CQUNmLFFBQUcsR0FBSCxHQUFHLENBQXdCO2dCQUMvQyxDQUFDO2dCQUNELHdCQUFDLHFCQUFVLENBQUMsR0FBWixjQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsNEJBQUksR0FBSjtvQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHO3dCQUN6QixJQUFJLEVBQUUsS0FBSzt3QkFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7cUJBQzlCLEdBQUc7d0JBQ0EsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFLFNBQVM7cUJBQ25CLENBQUM7Z0JBQ0osQ0FBQztnQkFDSCxvQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZ0JLLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvb2JzZXJ2YWJsZS9JdGVyYXRvck9ic2VydmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Jvb3R9IGZyb20gJy4uL3V0aWwvcm9vdCc7XG5pbXBvcnQge2lzT2JqZWN0fSBmcm9tICcuLi91dGlsL2lzT2JqZWN0JztcbmltcG9ydCB7dHJ5Q2F0Y2h9IGZyb20gJy4uL3V0aWwvdHJ5Q2F0Y2gnO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtpc0Z1bmN0aW9ufSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHskJGl0ZXJhdG9yfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0IHtlcnJvck9iamVjdH0gZnJvbSAnLi4vdXRpbC9lcnJvck9iamVjdCc7XG5pbXBvcnQge1RlYXJkb3duTG9naWN9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqIEBoaWRlIHRydWVcbiAqL1xuZXhwb3J0IGNsYXNzIEl0ZXJhdG9yT2JzZXJ2YWJsZTxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuICBwcml2YXRlIGl0ZXJhdG9yOiBhbnk7XG5cbiAgc3RhdGljIGNyZWF0ZTxUPihpdGVyYXRvcjogYW55LFxuICAgICAgICAgICAgICAgICAgIHByb2plY3Q/OiAoKHg/OiBhbnksIGk/OiBudW1iZXIpID0+IFQpIHwgYW55LFxuICAgICAgICAgICAgICAgICAgIHRoaXNBcmc/OiBhbnkgfCBTY2hlZHVsZXIsXG4gICAgICAgICAgICAgICAgICAgc2NoZWR1bGVyPzogU2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvck9ic2VydmFibGUoaXRlcmF0b3IsIHByb2plY3QsIHRoaXNBcmcsIHNjaGVkdWxlcik7XG4gIH1cblxuICBzdGF0aWMgZGlzcGF0Y2goc3RhdGU6IGFueSkge1xuXG4gICAgY29uc3QgeyBpbmRleCwgaGFzRXJyb3IsIHRoaXNBcmcsIHByb2plY3QsIGl0ZXJhdG9yLCBzdWJzY3JpYmVyIH0gPSBzdGF0ZTtcblxuICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgc3Vic2NyaWJlci5lcnJvcihzdGF0ZS5lcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcblxuICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICByZXN1bHQgPSB0cnlDYXRjaChwcm9qZWN0KS5jYWxsKHRoaXNBcmcsIHJlc3VsdC52YWx1ZSwgaW5kZXgpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBlcnJvck9iamVjdC5lO1xuICAgICAgICBzdGF0ZS5oYXNFcnJvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgc3RhdGUuaW5kZXggPSBpbmRleCArIDE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQudmFsdWUpO1xuICAgICAgc3RhdGUuaW5kZXggPSBpbmRleCArIDE7XG4gICAgfVxuXG4gICAgaWYgKHN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAoPGFueT4gdGhpcykuc2NoZWR1bGUoc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB0aGlzQXJnOiBhbnk7XG4gIHByaXZhdGUgcHJvamVjdDogKHg/OiBhbnksIGk/OiBudW1iZXIpID0+IFQ7XG4gIHByaXZhdGUgc2NoZWR1bGVyOiBTY2hlZHVsZXI7XG5cbiAgY29uc3RydWN0b3IoaXRlcmF0b3I6IGFueSxcbiAgICAgICAgICAgICAgcHJvamVjdD86ICgoeD86IGFueSwgaT86IG51bWJlcikgPT4gVCkgfCBhbnksXG4gICAgICAgICAgICAgIHRoaXNBcmc/OiBhbnkgfCBTY2hlZHVsZXIsXG4gICAgICAgICAgICAgIHNjaGVkdWxlcj86IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAoaXRlcmF0b3IgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpdGVyYXRvciBjYW5ub3QgYmUgbnVsbC4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QocHJvamVjdCkpIHtcbiAgICAgIHRoaXMudGhpc0FyZyA9IHByb2plY3Q7XG4gICAgICB0aGlzLnNjaGVkdWxlciA9IHRoaXNBcmc7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHByb2plY3QpKSB7XG4gICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1doZW4gcHJvdmlkZWQsIGBwcm9qZWN0YCBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRvciA9IGdldEl0ZXJhdG9yKGl0ZXJhdG9yKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pOiBUZWFyZG93bkxvZ2ljIHtcblxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgY29uc3QgeyBpdGVyYXRvciwgcHJvamVjdCwgdGhpc0FyZywgc2NoZWR1bGVyIH0gPSB0aGlzO1xuXG4gICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShJdGVyYXRvck9ic2VydmFibGUuZGlzcGF0Y2gsIDAsIHtcbiAgICAgICAgaW5kZXgsIHRoaXNBcmcsIHByb2plY3QsIGl0ZXJhdG9yLCBzdWJzY3JpYmVyXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG8ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvamVjdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRyeUNhdGNoKHByb2plY3QpLmNhbGwodGhpc0FyZywgcmVzdWx0LnZhbHVlLCBpbmRleCsrKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iamVjdCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnJvck9iamVjdC5lKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgU3RyaW5nSXRlcmF0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cjogc3RyaW5nLFxuICAgICAgICAgICAgICBwcml2YXRlIGlkeDogbnVtYmVyID0gMCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsZW46IG51bWJlciA9IHN0ci5sZW5ndGgpIHtcbiAgfVxuICBbJCRpdGVyYXRvcl0oKSB7IHJldHVybiAodGhpcyk7IH1cbiAgbmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZHggPCB0aGlzLmxlbiA/IHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiB0aGlzLnN0ci5jaGFyQXQodGhpcy5pZHgrKylcbiAgICB9IDoge1xuICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBBcnJheUl0ZXJhdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnI6IEFycmF5PGFueT4sXG4gICAgICAgICAgICAgIHByaXZhdGUgaWR4OiBudW1iZXIgPSAwLFxuICAgICAgICAgICAgICBwcml2YXRlIGxlbjogbnVtYmVyID0gdG9MZW5ndGgoYXJyKSkge1xuICB9XG4gIFskJGl0ZXJhdG9yXSgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgbmV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZHggPCB0aGlzLmxlbiA/IHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiB0aGlzLmFyclt0aGlzLmlkeCsrXVxuICAgIH0gOiB7XG4gICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yKG9iajogYW55KSB7XG4gIGNvbnN0IGkgPSBvYmpbJCRpdGVyYXRvcl07XG4gIGlmICghaSAmJiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuZXcgU3RyaW5nSXRlcmF0b3Iob2JqKTtcbiAgfVxuICBpZiAoIWkgJiYgb2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKG9iaik7XG4gIH1cbiAgaWYgKCFpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0IGlzIG5vdCBpdGVyYWJsZScpO1xuICB9XG4gIHJldHVybiBvYmpbJCRpdGVyYXRvcl0oKTtcbn1cblxuY29uc3QgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuXG5mdW5jdGlvbiB0b0xlbmd0aChvOiBhbnkpIHtcbiAgbGV0IGxlbiA9ICtvLmxlbmd0aDtcbiAgaWYgKGlzTmFOKGxlbikpIHtcbiAgICAgIHJldHVybiAwO1xuICB9XG4gIGlmIChsZW4gPT09IDAgfHwgIW51bWJlcklzRmluaXRlKGxlbikpIHtcbiAgICAgIHJldHVybiBsZW47XG4gIH1cbiAgbGVuID0gc2lnbihsZW4pICogTWF0aC5mbG9vcihNYXRoLmFicyhsZW4pKTtcbiAgaWYgKGxlbiA8PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAobGVuID4gbWF4U2FmZUludGVnZXIpIHtcbiAgICAgIHJldHVybiBtYXhTYWZlSW50ZWdlcjtcbiAgfVxuICByZXR1cm4gbGVuO1xufVxuXG5mdW5jdGlvbiBudW1iZXJJc0Zpbml0ZSh2YWx1ZTogYW55KSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHJvb3QuaXNGaW5pdGUodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzaWduKHZhbHVlOiBhbnkpIHtcbiAgbGV0IHZhbHVlQXNOdW1iZXIgPSArdmFsdWU7XG4gIGlmICh2YWx1ZUFzTnVtYmVyID09PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlQXNOdW1iZXI7XG4gIH1cbiAgaWYgKGlzTmFOKHZhbHVlQXNOdW1iZXIpKSB7XG4gICAgcmV0dXJuIHZhbHVlQXNOdW1iZXI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlQXNOdW1iZXIgPCAwID8gLTEgOiAxO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
