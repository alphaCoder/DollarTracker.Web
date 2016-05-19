System.register(['./Observable', './Subscriber', './Subscription', './SubjectSubscription', './symbol/rxSubscriber', './util/throwError', './util/ObjectUnsubscribedError'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, Subscriber_1, Subscription_1, SubjectSubscription_1, rxSubscriber_1, throwError_1, ObjectUnsubscribedError_1;
    var Subject, SubjectObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subscriber_1_1) {
                Subscriber_1 = Subscriber_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (SubjectSubscription_1_1) {
                SubjectSubscription_1 = SubjectSubscription_1_1;
            },
            function (rxSubscriber_1_1) {
                rxSubscriber_1 = rxSubscriber_1_1;
            },
            function (throwError_1_1) {
                throwError_1 = throwError_1_1;
            },
            function (ObjectUnsubscribedError_1_1) {
                ObjectUnsubscribedError_1 = ObjectUnsubscribedError_1_1;
            }],
        execute: function() {
            /**
             * @class Subject<T>
             */
            Subject = (function (_super) {
                __extends(Subject, _super);
                function Subject(destination, source) {
                    _super.call(this);
                    this.destination = destination;
                    this.source = source;
                    this.observers = [];
                    this.isUnsubscribed = false;
                    this.isStopped = false;
                    this.hasErrored = false;
                    this.dispatching = false;
                    this.hasCompleted = false;
                    this.source = source;
                }
                Subject.prototype.lift = function (operator) {
                    var subject = new Subject(this.destination || this, this);
                    subject.operator = operator;
                    return subject;
                };
                Subject.prototype.add = function (subscription) {
                    return Subscription_1.Subscription.prototype.add.call(this, subscription);
                };
                Subject.prototype.remove = function (subscription) {
                    Subscription_1.Subscription.prototype.remove.call(this, subscription);
                };
                Subject.prototype.unsubscribe = function () {
                    Subscription_1.Subscription.prototype.unsubscribe.call(this);
                };
                Subject.prototype._subscribe = function (subscriber) {
                    if (this.source) {
                        return this.source.subscribe(subscriber);
                    }
                    else {
                        if (subscriber.isUnsubscribed) {
                            return;
                        }
                        else if (this.hasErrored) {
                            return subscriber.error(this.errorValue);
                        }
                        else if (this.hasCompleted) {
                            return subscriber.complete();
                        }
                        this.throwIfUnsubscribed();
                        var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
                        this.observers.push(subscriber);
                        return subscription;
                    }
                };
                Subject.prototype._unsubscribe = function () {
                    this.source = null;
                    this.isStopped = true;
                    this.observers = null;
                    this.destination = null;
                };
                Subject.prototype.next = function (value) {
                    this.throwIfUnsubscribed();
                    if (this.isStopped) {
                        return;
                    }
                    this.dispatching = true;
                    this._next(value);
                    this.dispatching = false;
                    if (this.hasErrored) {
                        this._error(this.errorValue);
                    }
                    else if (this.hasCompleted) {
                        this._complete();
                    }
                };
                Subject.prototype.error = function (err) {
                    this.throwIfUnsubscribed();
                    if (this.isStopped) {
                        return;
                    }
                    this.isStopped = true;
                    this.hasErrored = true;
                    this.errorValue = err;
                    if (this.dispatching) {
                        return;
                    }
                    this._error(err);
                };
                Subject.prototype.complete = function () {
                    this.throwIfUnsubscribed();
                    if (this.isStopped) {
                        return;
                    }
                    this.isStopped = true;
                    this.hasCompleted = true;
                    if (this.dispatching) {
                        return;
                    }
                    this._complete();
                };
                Subject.prototype.asObservable = function () {
                    var observable = new SubjectObservable(this);
                    return observable;
                };
                Subject.prototype._next = function (value) {
                    if (this.destination) {
                        this.destination.next(value);
                    }
                    else {
                        this._finalNext(value);
                    }
                };
                Subject.prototype._finalNext = function (value) {
                    var index = -1;
                    var observers = this.observers.slice(0);
                    var len = observers.length;
                    while (++index < len) {
                        observers[index].next(value);
                    }
                };
                Subject.prototype._error = function (err) {
                    if (this.destination) {
                        this.destination.error(err);
                    }
                    else {
                        this._finalError(err);
                    }
                };
                Subject.prototype._finalError = function (err) {
                    var index = -1;
                    var observers = this.observers;
                    // optimization to block our SubjectSubscriptions from
                    // splicing themselves out of the observers list one by one.
                    this.observers = null;
                    this.isUnsubscribed = true;
                    if (observers) {
                        var len = observers.length;
                        while (++index < len) {
                            observers[index].error(err);
                        }
                    }
                    this.isUnsubscribed = false;
                    this.unsubscribe();
                };
                Subject.prototype._complete = function () {
                    if (this.destination) {
                        this.destination.complete();
                    }
                    else {
                        this._finalComplete();
                    }
                };
                Subject.prototype._finalComplete = function () {
                    var index = -1;
                    var observers = this.observers;
                    // optimization to block our SubjectSubscriptions from
                    // splicing themselves out of the observers list one by one.
                    this.observers = null;
                    this.isUnsubscribed = true;
                    if (observers) {
                        var len = observers.length;
                        while (++index < len) {
                            observers[index].complete();
                        }
                    }
                    this.isUnsubscribed = false;
                    this.unsubscribe();
                };
                Subject.prototype.throwIfUnsubscribed = function () {
                    if (this.isUnsubscribed) {
                        throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
                    }
                };
                Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
                    return new Subscriber_1.Subscriber(this);
                };
                Subject.create = function (destination, source) {
                    return new Subject(destination, source);
                };
                return Subject;
            }(Observable_1.Observable));
            exports_1("Subject", Subject);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            SubjectObservable = (function (_super) {
                __extends(SubjectObservable, _super);
                function SubjectObservable(source) {
                    _super.call(this);
                    this.source = source;
                }
                return SubjectObservable;
            }(Observable_1.Observable));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL1N1YmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBOztlQUVHO1lBQ0g7Z0JBQWdDLDJCQUFhO2dCQU0zQyxpQkFBc0IsV0FBeUIsRUFBWSxNQUFzQjtvQkFDL0UsaUJBQU8sQ0FBQztvQkFEWSxnQkFBVyxHQUFYLFdBQVcsQ0FBYztvQkFBWSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtvQkFLMUUsY0FBUyxHQUFrQixFQUFFLENBQUM7b0JBQzlCLG1CQUFjLEdBQVksS0FBSyxDQUFDO29CQUU3QixjQUFTLEdBQVksS0FBSyxDQUFDO29CQUMzQixlQUFVLEdBQVksS0FBSyxDQUFDO29CQUU1QixnQkFBVyxHQUFZLEtBQUssQ0FBQztvQkFDN0IsaUJBQVksR0FBWSxLQUFLLENBQUM7b0JBVnRDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixDQUFDO2dCQVdELHNCQUFJLEdBQUosVUFBVyxRQUF3QjtvQkFDakMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQzVELE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUM1QixNQUFNLENBQU0sT0FBTyxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHFCQUFHLEdBQUgsVUFBSSxZQUEyQjtvQkFDN0IsTUFBTSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUVELHdCQUFNLEdBQU4sVUFBTyxZQUEwQjtvQkFDL0IsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBRUQsNkJBQVcsR0FBWDtv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O2dCQUM3QyxDQUFDLENBQUM7Z0JBOE1KLGNBQUM7WUFBRCxDQWxOQSxBQWtOQyxDQWxOK0IsdUJBQVUsR0FrTnpDO1lBbE5ELDZCQWtOQyxDQUFBO1lBRUQ7Ozs7ZUFJRztZQUNIO2dCQUFtQyxxQ0FBYTtnQkFDOUMsMkJBQVksTUFBa0I7b0JBQzVCLGlCQUFPLENBQUM7b0JBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0gsd0JBQUM7WUFBRCxDQUxBLEFBS0MsQ0FMa0MsdUJBQVUsR0FLNUMiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvU3ViamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3BlcmF0b3J9IGZyb20gJy4vT3BlcmF0b3InO1xuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSAnLi9PYnNlcnZlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbiwgSVN1YnNjcmlwdGlvbiwgVGVhcmRvd25Mb2dpY30gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtTdWJqZWN0U3Vic2NyaXB0aW9ufSBmcm9tICcuL1N1YmplY3RTdWJzY3JpcHRpb24nO1xuaW1wb3J0IHskJHJ4U3Vic2NyaWJlcn0gZnJvbSAnLi9zeW1ib2wvcnhTdWJzY3JpYmVyJztcblxuaW1wb3J0IHt0aHJvd0Vycm9yfSBmcm9tICcuL3V0aWwvdGhyb3dFcnJvcic7XG5pbXBvcnQge09iamVjdFVuc3Vic2NyaWJlZEVycm9yfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuXG4vKipcbiAqIEBjbGFzcyBTdWJqZWN0PFQ+XG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJqZWN0PFQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxUPiBpbXBsZW1lbnRzIE9ic2VydmVyPFQ+LCBJU3Vic2NyaXB0aW9uIHtcblxuICBzdGF0aWMgY3JlYXRlOiBGdW5jdGlvbiA9IDxUPihkZXN0aW5hdGlvbjogT2JzZXJ2ZXI8VD4sIHNvdXJjZTogT2JzZXJ2YWJsZTxUPik6IFN1YmplY3Q8VD4gPT4ge1xuICAgIHJldHVybiBuZXcgU3ViamVjdDxUPihkZXN0aW5hdGlvbiwgc291cmNlKTtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGVzdGluYXRpb24/OiBPYnNlcnZlcjxUPiwgcHJvdGVjdGVkIHNvdXJjZT86IE9ic2VydmFibGU8VD4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG5cbiAgcHVibGljIG9ic2VydmVyczogT2JzZXJ2ZXI8VD5bXSA9IFtdO1xuICBwdWJsaWMgaXNVbnN1YnNjcmliZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgaXNTdG9wcGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBoYXNFcnJvcmVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBlcnJvclZhbHVlOiBhbnk7XG4gIHByb3RlY3RlZCBkaXNwYXRjaGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgaGFzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbGlmdDxULCBSPihvcGVyYXRvcjogT3BlcmF0b3I8VCwgUj4pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFN1YmplY3QodGhpcy5kZXN0aW5hdGlvbiB8fCB0aGlzLCB0aGlzKTtcbiAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgcmV0dXJuIDxhbnk+c3ViamVjdDtcbiAgfVxuXG4gIGFkZChzdWJzY3JpcHRpb246IFRlYXJkb3duTG9naWMpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsIHN1YnNjcmlwdGlvbik7XG4gIH1cblxuICByZW1vdmUoc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMsIHN1YnNjcmlwdGlvbik7XG4gIH1cblxuICB1bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlLmNhbGwodGhpcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KTogVGVhcmRvd25Mb2dpYyB7XG4gICAgaWYgKHRoaXMuc291cmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2Uuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3Vic2NyaWJlci5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaGFzRXJyb3JlZCkge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5lcnJvcih0aGlzLmVycm9yVmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0NvbXBsZXRlZCkge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRocm93SWZVbnN1YnNjcmliZWQoKTtcblxuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gbmV3IFN1YmplY3RTdWJzY3JpcHRpb24odGhpcywgc3Vic2NyaWJlcik7XG5cbiAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG5cbiAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF91bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZSA9IG51bGw7XG4gICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gbnVsbDtcbiAgfVxuXG4gIG5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICB0aGlzLnRocm93SWZVbnN1YnNjcmliZWQoKTtcblxuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgIHRoaXMuX25leHQodmFsdWUpO1xuICAgIHRoaXMuZGlzcGF0Y2hpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmhhc0Vycm9yZWQpIHtcbiAgICAgIHRoaXMuX2Vycm9yKHRoaXMuZXJyb3JWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc0NvbXBsZXRlZCkge1xuICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBlcnJvcihlcnI/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnRocm93SWZVbnN1YnNjcmliZWQoKTtcblxuICAgIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICB0aGlzLmhhc0Vycm9yZWQgPSB0cnVlO1xuICAgIHRoaXMuZXJyb3JWYWx1ZSA9IGVycjtcblxuICAgIGlmICh0aGlzLmRpc3BhdGNoaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fZXJyb3IoZXJyKTtcbiAgfVxuXG4gIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMudGhyb3dJZlVuc3Vic2NyaWJlZCgpO1xuXG4gICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgIHRoaXMuaGFzQ29tcGxldGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmRpc3BhdGNoaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY29tcGxldGUoKTtcbiAgfVxuXG4gIGFzT2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gbmV3IFN1YmplY3RPYnNlcnZhYmxlKHRoaXMpO1xuICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXh0KHZhbHVlOiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVzdGluYXRpb24pIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpbmFsTmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9maW5hbE5leHQodmFsdWU6IFQpOiB2b2lkIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBjb25zdCBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycy5zbGljZSgwKTtcbiAgICBjb25zdCBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW4pIHtcbiAgICAgIG9ic2VydmVyc1tpbmRleF0ubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9lcnJvcihlcnI6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlc3RpbmF0aW9uKSB7XG4gICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpbmFsRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX2ZpbmFsRXJyb3IoZXJyOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBjb25zdCBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcblxuICAgIC8vIG9wdGltaXphdGlvbiB0byBibG9jayBvdXIgU3ViamVjdFN1YnNjcmlwdGlvbnMgZnJvbVxuICAgIC8vIHNwbGljaW5nIHRoZW1zZWx2ZXMgb3V0IG9mIHRoZSBvYnNlcnZlcnMgbGlzdCBvbmUgYnkgb25lLlxuICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGlmIChvYnNlcnZlcnMpIHtcbiAgICAgIGNvbnN0IGxlbiA9IG9ic2VydmVycy5sZW5ndGg7XG4gICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICBvYnNlcnZlcnNbaW5kZXhdLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pc1Vuc3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jb21wbGV0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZXN0aW5hdGlvbikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maW5hbENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9maW5hbENvbXBsZXRlKCk6IHZvaWQge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGNvbnN0IG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuXG4gICAgLy8gb3B0aW1pemF0aW9uIHRvIGJsb2NrIG91ciBTdWJqZWN0U3Vic2NyaXB0aW9ucyBmcm9tXG4gICAgLy8gc3BsaWNpbmcgdGhlbXNlbHZlcyBvdXQgb2YgdGhlIG9ic2VydmVycyBsaXN0IG9uZSBieSBvbmUuXG4gICAgdGhpcy5vYnNlcnZlcnMgPSBudWxsO1xuICAgIHRoaXMuaXNVbnN1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgaWYgKG9ic2VydmVycykge1xuICAgICAgY29uc3QgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuKSB7XG4gICAgICAgIG9ic2VydmVyc1tpbmRleF0uY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlzVW5zdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIHRocm93SWZVbnN1YnNjcmliZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNVbnN1YnNjcmliZWQpIHtcbiAgICAgIHRocm93RXJyb3IobmV3IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yKCkpO1xuICAgIH1cbiAgfVxuXG4gIFskJHJ4U3Vic2NyaWJlcl0oKSB7XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyPFQ+KHRoaXMpO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBTdWJqZWN0T2JzZXJ2YWJsZTxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IFN1YmplY3Q8VD4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
