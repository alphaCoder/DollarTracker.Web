System.register(['../Subject', '../util/tryCatch', '../util/errorObject', '../OuterSubscriber', '../util/subscribeToResult'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, tryCatch_1, errorObject_1, OuterSubscriber_1, subscribeToResult_1;
    var RetryWhenOperator, RetryWhenSubscriber;
    /**
     * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
     * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
     * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
     * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
     * Scheduler.
     *
     * <img src="./img/retryWhen.png" width="100%">
     *
     * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
     * aborting the retry.
     * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
     * @return {Observable} the source Observable modified with retry logic.
     * @method retryWhen
     * @owner Observable
     */
    function retryWhen(notifier) {
        return this.lift(new RetryWhenOperator(notifier, this));
    }
    exports_1("retryWhen", retryWhen);
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
            RetryWhenOperator = (function () {
                function RetryWhenOperator(notifier, source) {
                    this.notifier = notifier;
                    this.source = source;
                }
                RetryWhenOperator.prototype.call = function (subscriber, source) {
                    return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
                };
                return RetryWhenOperator;
            }());
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            RetryWhenSubscriber = (function (_super) {
                __extends(RetryWhenSubscriber, _super);
                function RetryWhenSubscriber(destination, notifier, source) {
                    _super.call(this, destination);
                    this.notifier = notifier;
                    this.source = source;
                }
                RetryWhenSubscriber.prototype.error = function (err) {
                    if (!this.isStopped) {
                        var errors = this.errors;
                        var retries = this.retries;
                        var retriesSubscription = this.retriesSubscription;
                        if (!retries) {
                            errors = new Subject_1.Subject();
                            retries = tryCatch_1.tryCatch(this.notifier)(errors);
                            if (retries === errorObject_1.errorObject) {
                                return _super.prototype.error.call(this, errorObject_1.errorObject.e);
                            }
                            retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
                        }
                        else {
                            this.errors = null;
                            this.retriesSubscription = null;
                        }
                        this.unsubscribe();
                        this.isUnsubscribed = false;
                        this.errors = errors;
                        this.retries = retries;
                        this.retriesSubscription = retriesSubscription;
                        errors.next(err);
                    }
                };
                RetryWhenSubscriber.prototype._unsubscribe = function () {
                    var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
                    if (errors) {
                        errors.unsubscribe();
                        this.errors = null;
                    }
                    if (retriesSubscription) {
                        retriesSubscription.unsubscribe();
                        this.retriesSubscription = null;
                    }
                    this.retries = null;
                };
                RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
                    var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
                    this.errors = null;
                    this.retries = null;
                    this.retriesSubscription = null;
                    this.unsubscribe();
                    this.isStopped = false;
                    this.isUnsubscribed = false;
                    this.errors = errors;
                    this.retries = retries;
                    this.retriesSubscription = retriesSubscription;
                    this.source.subscribe(this);
                };
                return RetryWhenSubscriber;
            }(OuterSubscriber_1.OuterSubscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29wZXJhdG9yL3JldHJ5V2hlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBWUE7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsbUJBQTZCLFFBQXNEO1FBQ2pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQWlCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUZELGlDQUVDLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNRDtnQkFDRSwyQkFBc0IsUUFBc0QsRUFDdEQsTUFBcUI7b0JBRHJCLGFBQVEsR0FBUixRQUFRLENBQThDO29CQUN0RCxXQUFNLEdBQU4sTUFBTSxDQUFlO2dCQUMzQyxDQUFDO2dCQUVELGdDQUFJLEdBQUosVUFBSyxVQUF5QixFQUFFLE1BQVc7b0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksbUJBQW1CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzVGLENBQUM7Z0JBQ0gsd0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQUVEOzs7O2VBSUc7WUFDSDtnQkFBd0MsdUNBQXFCO2dCQU0zRCw2QkFBWSxXQUEwQixFQUNsQixRQUFzRCxFQUN0RCxNQUFxQjtvQkFDdkMsa0JBQU0sV0FBVyxDQUFDLENBQUM7b0JBRkQsYUFBUSxHQUFSLFFBQVEsQ0FBOEM7b0JBQ3RELFdBQU0sR0FBTixNQUFNLENBQWU7Z0JBRXpDLENBQUM7Z0JBRUQsbUNBQUssR0FBTCxVQUFNLEdBQVE7b0JBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFFcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzt3QkFDekIsSUFBSSxPQUFPLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDaEMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7d0JBRW5ELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDYixNQUFNLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7NEJBQ3ZCLE9BQU8sR0FBRyxtQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDMUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLHlCQUFXLENBQUMsQ0FBQyxDQUFDO2dDQUM1QixNQUFNLENBQUMsZ0JBQUssQ0FBQyxLQUFLLFlBQUMseUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEMsQ0FBQzs0QkFDRCxtQkFBbUIsR0FBRyxxQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQ3pELENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ25CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7d0JBQ2xDLENBQUM7d0JBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzt3QkFFNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO3dCQUN2QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7d0JBRS9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLENBQUM7Z0JBQ0gsQ0FBQztnQkFFUywwQ0FBWSxHQUF0QjtvQkFDRSxJQUFBLFNBQTRDLEVBQXBDLGtCQUFNLEVBQUUsNENBQW1CLENBQVU7b0JBQzdDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ1gsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDckIsQ0FBQztvQkFDRCxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNsQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO29CQUNsQyxDQUFDO29CQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBVyxVQUFhLEVBQUUsVUFBYSxFQUM1QixVQUFrQixFQUFFLFVBQWtCLEVBQ3RDLFFBQStCO29CQUV4QyxJQUFBLFNBQXFELEVBQTdDLGtCQUFNLEVBQUUsb0JBQU8sRUFBRSw0Q0FBbUIsQ0FBVTtvQkFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO29CQUVoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztvQkFFNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7b0JBRS9DLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUNILDBCQUFDO1lBQUQsQ0ExRUEsQUEwRUMsQ0ExRXVDLGlDQUFlLEdBMEV0RCIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vcGVyYXRvci9yZXRyeVdoZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wZXJhdG9yfSBmcm9tICcuLi9PcGVyYXRvcic7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAnLi4vU3ViamVjdCc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7dHJ5Q2F0Y2h9IGZyb20gJy4uL3V0aWwvdHJ5Q2F0Y2gnO1xuaW1wb3J0IHtlcnJvck9iamVjdH0gZnJvbSAnLi4vdXRpbC9lcnJvck9iamVjdCc7XG5cbmltcG9ydCB7T3V0ZXJTdWJzY3JpYmVyfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHtJbm5lclN1YnNjcmliZXJ9IGZyb20gJy4uL0lubmVyU3Vic2NyaWJlcic7XG5pbXBvcnQge3N1YnNjcmliZVRvUmVzdWx0fSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0aGUgc2FtZSB2YWx1ZXMgYXMgdGhlIHNvdXJjZSBvYnNlcnZhYmxlIHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBhbiBgZXJyb3JgLlxuICogQW4gYGVycm9yYCB3aWxsIGNhdXNlIHRoZSBlbWlzc2lvbiBvZiB0aGUgVGhyb3dhYmxlIHRoYXQgY2F1c2UgdGhlIGVycm9yIHRvIHRoZSBPYnNlcnZhYmxlIHJldHVybmVkIGZyb21cbiAqIG5vdGlmaWNhdGlvbkhhbmRsZXIuIElmIHRoYXQgT2JzZXJ2YWJsZSBjYWxscyBvbkNvbXBsZXRlIG9yIGBlcnJvcmAgdGhlbiByZXRyeSB3aWxsIGNhbGwgYGNvbXBsZXRlYCBvciBgZXJyb3JgXG4gKiBvbiB0aGUgY2hpbGQgc3Vic2NyaXB0aW9uLiBPdGhlcndpc2UsIHRoaXMgT2JzZXJ2YWJsZSB3aWxsIHJlc3Vic2NyaWJlIHRvIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSwgb24gYSBwYXJ0aWN1bGFyXG4gKiBTY2hlZHVsZXIuXG4gKlxuICogPGltZyBzcmM9XCIuL2ltZy9yZXRyeVdoZW4ucG5nXCIgd2lkdGg9XCIxMDAlXCI+XG4gKlxuICogQHBhcmFtIHtub3RpZmljYXRpb25IYW5kbGVyfSByZWNlaXZlcyBhbiBPYnNlcnZhYmxlIG9mIG5vdGlmaWNhdGlvbnMgd2l0aCB3aGljaCBhIHVzZXIgY2FuIGBjb21wbGV0ZWAgb3IgYGVycm9yYCxcbiAqIGFib3J0aW5nIHRoZSByZXRyeS5cbiAqIEBwYXJhbSB7c2NoZWR1bGVyfSB0aGUgU2NoZWR1bGVyIG9uIHdoaWNoIHRvIHN1YnNjcmliZSB0byB0aGUgc291cmNlIE9ic2VydmFibGUuXG4gKiBAcmV0dXJuIHtPYnNlcnZhYmxlfSB0aGUgc291cmNlIE9ic2VydmFibGUgbW9kaWZpZWQgd2l0aCByZXRyeSBsb2dpYy5cbiAqIEBtZXRob2QgcmV0cnlXaGVuXG4gKiBAb3duZXIgT2JzZXJ2YWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV0cnlXaGVuPFQ+KG5vdGlmaWVyOiAoZXJyb3JzOiBPYnNlcnZhYmxlPGFueT4pID0+IE9ic2VydmFibGU8YW55Pik6IE9ic2VydmFibGU8VD4ge1xuICByZXR1cm4gdGhpcy5saWZ0KG5ldyBSZXRyeVdoZW5PcGVyYXRvcihub3RpZmllciwgdGhpcykpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJldHJ5V2hlblNpZ25hdHVyZTxUPiB7XG4gIChub3RpZmllcjogKGVycm9yczogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPGFueT4pOiBPYnNlcnZhYmxlPFQ+O1xufVxuXG5jbGFzcyBSZXRyeVdoZW5PcGVyYXRvcjxUPiBpbXBsZW1lbnRzIE9wZXJhdG9yPFQsIFQ+IHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG5vdGlmaWVyOiAoZXJyb3JzOiBPYnNlcnZhYmxlPGFueT4pID0+IE9ic2VydmFibGU8YW55PixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHNvdXJjZTogT2JzZXJ2YWJsZTxUPikge1xuICB9XG5cbiAgY2FsbChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+LCBzb3VyY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHNvdXJjZS5fc3Vic2NyaWJlKG5ldyBSZXRyeVdoZW5TdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMubm90aWZpZXIsIHRoaXMuc291cmNlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFJldHJ5V2hlblN1YnNjcmliZXI8VCwgUj4gZXh0ZW5kcyBPdXRlclN1YnNjcmliZXI8VCwgUj4ge1xuXG4gIHByaXZhdGUgZXJyb3JzOiBTdWJqZWN0PGFueT47XG4gIHByaXZhdGUgcmV0cmllczogT2JzZXJ2YWJsZTxhbnk+O1xuICBwcml2YXRlIHJldHJpZXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxSPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3RpZmllcjogKGVycm9yczogT2JzZXJ2YWJsZTxhbnk+KSA9PiBPYnNlcnZhYmxlPGFueT4sXG4gICAgICAgICAgICAgIHByaXZhdGUgc291cmNlOiBPYnNlcnZhYmxlPFQ+KSB7XG4gICAgc3VwZXIoZGVzdGluYXRpb24pO1xuICB9XG5cbiAgZXJyb3IoZXJyOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG5cbiAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmVycm9ycztcbiAgICAgIGxldCByZXRyaWVzOiBhbnkgPSB0aGlzLnJldHJpZXM7XG4gICAgICBsZXQgcmV0cmllc1N1YnNjcmlwdGlvbiA9IHRoaXMucmV0cmllc1N1YnNjcmlwdGlvbjtcblxuICAgICAgaWYgKCFyZXRyaWVzKSB7XG4gICAgICAgIGVycm9ycyA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgIHJldHJpZXMgPSB0cnlDYXRjaCh0aGlzLm5vdGlmaWVyKShlcnJvcnMpO1xuICAgICAgICBpZiAocmV0cmllcyA9PT0gZXJyb3JPYmplY3QpIHtcbiAgICAgICAgICByZXR1cm4gc3VwZXIuZXJyb3IoZXJyb3JPYmplY3QuZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0cmllc1N1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIHJldHJpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBudWxsO1xuICAgICAgICB0aGlzLnJldHJpZXNTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgdGhpcy5yZXRyaWVzID0gcmV0cmllcztcbiAgICAgIHRoaXMucmV0cmllc1N1YnNjcmlwdGlvbiA9IHJldHJpZXNTdWJzY3JpcHRpb247XG5cbiAgICAgIGVycm9ycy5uZXh0KGVycik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF91bnN1YnNjcmliZSgpIHtcbiAgICBjb25zdCB7IGVycm9ycywgcmV0cmllc1N1YnNjcmlwdGlvbiB9ID0gdGhpcztcbiAgICBpZiAoZXJyb3JzKSB7XG4gICAgICBlcnJvcnMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHJldHJpZXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHJldHJpZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucmV0cmllc1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMucmV0cmllcyA9IG51bGw7XG4gIH1cblxuICBub3RpZnlOZXh0KG91dGVyVmFsdWU6IFQsIGlubmVyVmFsdWU6IFIsXG4gICAgICAgICAgICAgb3V0ZXJJbmRleDogbnVtYmVyLCBpbm5lckluZGV4OiBudW1iZXIsXG4gICAgICAgICAgICAgaW5uZXJTdWI6IElubmVyU3Vic2NyaWJlcjxULCBSPik6IHZvaWQge1xuXG4gICAgY29uc3QgeyBlcnJvcnMsIHJldHJpZXMsIHJldHJpZXNTdWJzY3JpcHRpb24gfSA9IHRoaXM7XG4gICAgdGhpcy5lcnJvcnMgPSBudWxsO1xuICAgIHRoaXMucmV0cmllcyA9IG51bGw7XG4gICAgdGhpcy5yZXRyaWVzU3Vic2NyaXB0aW9uID0gbnVsbDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNVbnN1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIHRoaXMucmV0cmllcyA9IHJldHJpZXM7XG4gICAgdGhpcy5yZXRyaWVzU3Vic2NyaXB0aW9uID0gcmV0cmllc1N1YnNjcmlwdGlvbjtcblxuICAgIHRoaXMuc291cmNlLnN1YnNjcmliZSh0aGlzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
