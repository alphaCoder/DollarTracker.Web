System.register(['../util/root', '../Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var root_1, Observable_1;
    var PromiseObservable;
    function dispatchNext(arg) {
        var value = arg.value, subscriber = arg.subscriber;
        if (!subscriber.isUnsubscribed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }
    function dispatchError(arg) {
        var err = arg.err, subscriber = arg.subscriber;
        if (!subscriber.isUnsubscribed) {
            subscriber.error(err);
        }
    }
    return {
        setters:[
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @extends {Ignored}
             * @hide true
             */
            PromiseObservable = (function (_super) {
                __extends(PromiseObservable, _super);
                function PromiseObservable(promise, scheduler) {
                    if (scheduler === void 0) { scheduler = null; }
                    _super.call(this);
                    this.promise = promise;
                    this.scheduler = scheduler;
                }
                /**
                 * @param promise
                 * @param scheduler
                 * @return {PromiseObservable}
                 * @static true
                 * @name fromPromise
                 * @owner Observable
                 */
                PromiseObservable.create = function (promise, scheduler) {
                    if (scheduler === void 0) { scheduler = null; }
                    return new PromiseObservable(promise, scheduler);
                };
                PromiseObservable.prototype._subscribe = function (subscriber) {
                    var _this = this;
                    var promise = this.promise;
                    var scheduler = this.scheduler;
                    if (scheduler == null) {
                        if (this._isScalar) {
                            if (!subscriber.isUnsubscribed) {
                                subscriber.next(this.value);
                                subscriber.complete();
                            }
                        }
                        else {
                            promise.then(function (value) {
                                _this.value = value;
                                _this._isScalar = true;
                                if (!subscriber.isUnsubscribed) {
                                    subscriber.next(value);
                                    subscriber.complete();
                                }
                            }, function (err) {
                                if (!subscriber.isUnsubscribed) {
                                    subscriber.error(err);
                                }
                            })
                                .then(null, function (err) {
                                // escape the promise trap, throw unhandled errors
                                root_1.root.setTimeout(function () { throw err; });
                            });
                        }
                    }
                    else {
                        if (this._isScalar) {
                            if (!subscriber.isUnsubscribed) {
                                return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
                            }
                        }
                        else {
                            promise.then(function (value) {
                                _this.value = value;
                                _this._isScalar = true;
                                if (!subscriber.isUnsubscribed) {
                                    subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
                                }
                            }, function (err) {
                                if (!subscriber.isUnsubscribed) {
                                    subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
                                }
                            })
                                .then(null, function (err) {
                                // escape the promise trap, throw unhandled errors
                                root_1.root.setTimeout(function () { throw err; });
                            });
                        }
                    }
                };
                return PromiseObservable;
            }(Observable_1.Observable));
            exports_1("PromiseObservable", PromiseObservable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvUHJvbWlzZU9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQThGQSxzQkFBeUIsR0FBdUI7UUFDdEMscUJBQUssRUFBRSwyQkFBVSxDQUFTO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7SUFNRCx1QkFBMEIsR0FBd0I7UUFDeEMsaUJBQUcsRUFBRSwyQkFBVSxDQUFTO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQzs7Ozs7Ozs7OztZQXpHRDs7OztlQUlHO1lBQ0g7Z0JBQTBDLHFDQUFhO2dCQWdCckQsMkJBQW9CLE9BQW1CLEVBQVMsU0FBMkI7b0JBQWxDLHlCQUFrQyxHQUFsQyxnQkFBa0M7b0JBQ3pFLGlCQUFPLENBQUM7b0JBRFUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtnQkFFM0UsQ0FBQztnQkFkRDs7Ozs7OzttQkFPRztnQkFDSSx3QkFBTSxHQUFiLFVBQWlCLE9BQW1CLEVBQUUsU0FBMkI7b0JBQTNCLHlCQUEyQixHQUEzQixnQkFBMkI7b0JBQy9ELE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFNUyxzQ0FBVSxHQUFwQixVQUFxQixVQUF5QjtvQkFBOUMsaUJBd0RDO29CQXZEQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUM3QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUVqQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0NBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUM1QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7NEJBQ3hCLENBQUM7d0JBQ0gsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixPQUFPLENBQUMsSUFBSSxDQUNWLFVBQUMsS0FBSztnQ0FDSixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQ0FDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0NBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0NBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQ3ZCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQ0FDeEIsQ0FBQzs0QkFDSCxDQUFDLEVBQ0QsVUFBQyxHQUFHO2dDQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0NBQy9CLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ3hCLENBQUM7NEJBQ0gsQ0FBQyxDQUNGO2lDQUNBLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQSxHQUFHO2dDQUNiLGtEQUFrRDtnQ0FDbEQsV0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFRLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQyxDQUFDO3dCQUNMLENBQUM7b0JBQ0gsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQ0FDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFlBQUEsVUFBVSxFQUFFLENBQUMsQ0FBQzs0QkFDaEYsQ0FBQzt3QkFDSCxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQ1YsVUFBQyxLQUFLO2dDQUNKLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dDQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQ0FDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQ0FDL0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFBLEtBQUssRUFBRSxZQUFBLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDN0UsQ0FBQzs0QkFDSCxDQUFDLEVBQ0QsVUFBQyxHQUFHO2dDQUNGLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0NBQy9CLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBQSxHQUFHLEVBQUUsWUFBQSxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQzVFLENBQUM7NEJBQ0gsQ0FBQyxDQUFDO2lDQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHO2dDQUNkLGtEQUFrRDtnQ0FDbEQsV0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFRLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3hDLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUNILHdCQUFDO1lBQUQsQ0E3RUEsQUE2RUMsQ0E3RXlDLHVCQUFVLEdBNkVuRDtZQTdFRCxpREE2RUMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vYnNlcnZhYmxlL1Byb21pc2VPYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyb290fSBmcm9tICcuLi91dGlsL3Jvb3QnO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7VGVhcmRvd25Mb2dpY30gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKiBAaGlkZSB0cnVlXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm9taXNlT2JzZXJ2YWJsZTxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuXG4gIHB1YmxpYyB2YWx1ZTogVDtcblxuICAvKipcbiAgICogQHBhcmFtIHByb21pc2VcbiAgICogQHBhcmFtIHNjaGVkdWxlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlT2JzZXJ2YWJsZX1cbiAgICogQHN0YXRpYyB0cnVlXG4gICAqIEBuYW1lIGZyb21Qcm9taXNlXG4gICAqIEBvd25lciBPYnNlcnZhYmxlXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlPFQ+KHByb21pc2U6IFByb21pc2U8VD4sIHNjaGVkdWxlcjogU2NoZWR1bGVyID0gbnVsbCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZU9ic2VydmFibGUocHJvbWlzZSwgc2NoZWR1bGVyKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvbWlzZTogUHJvbWlzZTxUPiwgcHVibGljIHNjaGVkdWxlcjogU2NoZWR1bGVyID0gbnVsbCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcbiAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcblxuICAgIGlmIChzY2hlZHVsZXIgPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuX2lzU2NhbGFyKSB7XG4gICAgICAgIGlmICghc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UudGhlbihcbiAgICAgICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NhbGFyID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAudGhlbihudWxsLCBlcnIgPT4ge1xuICAgICAgICAgIC8vIGVzY2FwZSB0aGUgcHJvbWlzZSB0cmFwLCB0aHJvdyB1bmhhbmRsZWQgZXJyb3JzXG4gICAgICAgICAgcm9vdC5zZXRUaW1lb3V0KCgpID0+IHsgdGhyb3cgZXJyOyB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pc1NjYWxhcikge1xuICAgICAgICBpZiAoIXN1YnNjcmliZXIuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoTmV4dCwgMCwgeyB2YWx1ZTogdGhpcy52YWx1ZSwgc3Vic2NyaWJlciB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKFxuICAgICAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5faXNTY2FsYXIgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIDAsIHsgdmFsdWUsIHN1YnNjcmliZXIgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaEVycm9yLCAwLCB7IGVyciwgc3Vic2NyaWJlciB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihudWxsLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2NhcGUgdGhlIHByb21pc2UgdHJhcCwgdGhyb3cgdW5oYW5kbGVkIGVycm9yc1xuICAgICAgICAgICAgcm9vdC5zZXRUaW1lb3V0KCgpID0+IHsgdGhyb3cgZXJyOyB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW50ZXJmYWNlIERpc3BhdGNoTmV4dEFyZzxUPiB7XG4gIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD47XG4gIHZhbHVlOiBUO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hOZXh0PFQ+KGFyZzogRGlzcGF0Y2hOZXh0QXJnPFQ+KSB7XG4gIGNvbnN0IHsgdmFsdWUsIHN1YnNjcmliZXIgfSA9IGFyZztcbiAgaWYgKCFzdWJzY3JpYmVyLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIERpc3BhdGNoRXJyb3JBcmc8VD4ge1xuICBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+O1xuICBlcnI6IGFueTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoRXJyb3I8VD4oYXJnOiBEaXNwYXRjaEVycm9yQXJnPFQ+KSB7XG4gIGNvbnN0IHsgZXJyLCBzdWJzY3JpYmVyIH0gPSBhcmc7XG4gIGlmICghc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
