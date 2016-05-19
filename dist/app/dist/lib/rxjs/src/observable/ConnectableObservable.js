System.register(['../Observable', '../Subscriber', '../Subscription'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, Subscriber_1, Subscription_1;
    var ConnectableObservable, ConnectableSubscription, RefCountObservable, RefCountSubscriber;
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
            }],
        execute: function() {
            /**
             * @class ConnectableObservable<T>
             */
            ConnectableObservable = (function (_super) {
                __extends(ConnectableObservable, _super);
                function ConnectableObservable(source, subjectFactory) {
                    _super.call(this);
                    this.source = source;
                    this.subjectFactory = subjectFactory;
                }
                ConnectableObservable.prototype._subscribe = function (subscriber) {
                    return this.getSubject().subscribe(subscriber);
                };
                ConnectableObservable.prototype.getSubject = function () {
                    var subject = this.subject;
                    if (subject && !subject.isUnsubscribed) {
                        return subject;
                    }
                    return (this.subject = this.subjectFactory());
                };
                ConnectableObservable.prototype.connect = function () {
                    var source = this.source;
                    var subscription = this.subscription;
                    if (subscription && !subscription.isUnsubscribed) {
                        return subscription;
                    }
                    subscription = source.subscribe(this.getSubject());
                    subscription.add(new ConnectableSubscription(this));
                    return (this.subscription = subscription);
                };
                ConnectableObservable.prototype.refCount = function () {
                    return new RefCountObservable(this);
                };
                /**
                 * This method is opened for `ConnectableSubscription`.
                 * Not to call from others.
                 */
                ConnectableObservable.prototype._closeSubscription = function () {
                    this.subject = null;
                    this.subscription = null;
                };
                return ConnectableObservable;
            }(Observable_1.Observable));
            exports_1("ConnectableObservable", ConnectableObservable);
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            ConnectableSubscription = (function (_super) {
                __extends(ConnectableSubscription, _super);
                function ConnectableSubscription(connectable) {
                    _super.call(this);
                    this.connectable = connectable;
                }
                ConnectableSubscription.prototype._unsubscribe = function () {
                    var connectable = this.connectable;
                    connectable._closeSubscription();
                    this.connectable = null;
                };
                return ConnectableSubscription;
            }(Subscription_1.Subscription));
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            RefCountObservable = (function (_super) {
                __extends(RefCountObservable, _super);
                function RefCountObservable(connectable, refCount) {
                    if (refCount === void 0) { refCount = 0; }
                    _super.call(this);
                    this.connectable = connectable;
                    this.refCount = refCount;
                }
                RefCountObservable.prototype._subscribe = function (subscriber) {
                    var connectable = this.connectable;
                    var refCountSubscriber = new RefCountSubscriber(subscriber, this);
                    var subscription = connectable.subscribe(refCountSubscriber);
                    if (!subscription.isUnsubscribed && ++this.refCount === 1) {
                        refCountSubscriber.connection = this.connection = connectable.connect();
                    }
                    return subscription;
                };
                return RefCountObservable;
            }(Observable_1.Observable));
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            RefCountSubscriber = (function (_super) {
                __extends(RefCountSubscriber, _super);
                function RefCountSubscriber(destination, refCountObservable) {
                    _super.call(this, null);
                    this.destination = destination;
                    this.refCountObservable = refCountObservable;
                    this.connection = refCountObservable.connection;
                    destination.add(this);
                }
                RefCountSubscriber.prototype._next = function (value) {
                    this.destination.next(value);
                };
                RefCountSubscriber.prototype._error = function (err) {
                    this._resetConnectable();
                    this.destination.error(err);
                };
                RefCountSubscriber.prototype._complete = function () {
                    this._resetConnectable();
                    this.destination.complete();
                };
                RefCountSubscriber.prototype._resetConnectable = function () {
                    var observable = this.refCountObservable;
                    var obsConnection = observable.connection;
                    var subConnection = this.connection;
                    if (subConnection && subConnection === obsConnection) {
                        observable.refCount = 0;
                        obsConnection.unsubscribe();
                        observable.connection = null;
                        this.unsubscribe();
                    }
                };
                RefCountSubscriber.prototype._unsubscribe = function () {
                    var observable = this.refCountObservable;
                    if (observable.refCount === 0) {
                        return;
                    }
                    if (--observable.refCount === 0) {
                        var obsConnection = observable.connection;
                        var subConnection = this.connection;
                        if (subConnection && subConnection === obsConnection) {
                            obsConnection.unsubscribe();
                            observable.connection = null;
                        }
                    }
                };
                return RefCountSubscriber;
            }(Subscriber_1.Subscriber));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL29ic2VydmFibGUvQ29ubmVjdGFibGVPYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTs7ZUFFRztZQUNIO2dCQUE4Qyx5Q0FBYTtnQkFLekQsK0JBQXNCLE1BQXFCLEVBQ3JCLGNBQWdDO29CQUNwRCxpQkFBTyxDQUFDO29CQUZZLFdBQU0sR0FBTixNQUFNLENBQWU7b0JBQ3JCLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtnQkFFdEQsQ0FBQztnQkFFUywwQ0FBVSxHQUFwQixVQUFxQixVQUF5QjtvQkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBRVMsMENBQVUsR0FBcEI7b0JBQ0UsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0QsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCx1Q0FBTyxHQUFQO29CQUNFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQzNCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUNqRCxNQUFNLENBQUMsWUFBWSxDQUFDO29CQUN0QixDQUFDO29CQUNELFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFD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QUFJLENBQUM7d0JBQy9CLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUNILHlCQUFDO1lBQUQsQ0FsREEsQUFrREMsQ0FsRG1DLHVCQUFVLEdBa0Q3QyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9vYnNlcnZhYmxlL0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3ViamVjdH0gZnJvbSAnLi4vU3ViamVjdCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuXG4vKipcbiAqIEBjbGFzcyBDb25uZWN0YWJsZU9ic2VydmFibGU8VD5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbm5lY3RhYmxlT2JzZXJ2YWJsZTxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuXG4gIHByb3RlY3RlZCBzdWJqZWN0OiBTdWJqZWN0PFQ+O1xuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNvdXJjZTogT2JzZXJ2YWJsZTxUPixcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIHN1YmplY3RGYWN0b3J5OiAoKSA9PiBTdWJqZWN0PFQ+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfc3Vic2NyaWJlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8VD4pIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdWJqZWN0KCkuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN1YmplY3QoKSB7XG4gICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3ViamVjdDtcbiAgICBpZiAoc3ViamVjdCAmJiAhc3ViamVjdC5pc1Vuc3Vic2NyaWJlZCkge1xuICAgICAgcmV0dXJuIHN1YmplY3Q7XG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zdWJqZWN0ID0gdGhpcy5zdWJqZWN0RmFjdG9yeSgpKTtcbiAgfVxuXG4gIGNvbm5lY3QoKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICBsZXQgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpcHRpb247XG4gICAgaWYgKHN1YnNjcmlwdGlvbiAmJiAhc3Vic2NyaXB0aW9uLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH1cbiAgICBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKHRoaXMuZ2V0U3ViamVjdCgpKTtcbiAgICBzdWJzY3JpcHRpb24uYWRkKG5ldyBDb25uZWN0YWJsZVN1YnNjcmlwdGlvbih0aGlzKSk7XG4gICAgcmV0dXJuICh0aGlzLnN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvbik7XG4gIH1cblxuICByZWZDb3VudCgpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFJlZkNvdW50T2JzZXJ2YWJsZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBvcGVuZWQgZm9yIGBDb25uZWN0YWJsZVN1YnNjcmlwdGlvbmAuXG4gICAqIE5vdCB0byBjYWxsIGZyb20gb3RoZXJzLlxuICAgKi9cbiAgX2Nsb3NlU3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc3ViamVjdCA9IG51bGw7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSBudWxsO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBDb25uZWN0YWJsZVN1YnNjcmlwdGlvbiBleHRlbmRzIFN1YnNjcmlwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25uZWN0YWJsZTogQ29ubmVjdGFibGVPYnNlcnZhYmxlPGFueT4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91bnN1YnNjcmliZSgpIHtcbiAgICBjb25zdCBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgY29ubmVjdGFibGUuX2Nsb3NlU3Vic2NyaXB0aW9uKCk7XG4gICAgdGhpcy5jb25uZWN0YWJsZSA9IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmNsYXNzIFJlZkNvdW50T2JzZXJ2YWJsZTxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4ge1xuICBjb25uZWN0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbm5lY3RhYmxlOiBDb25uZWN0YWJsZU9ic2VydmFibGU8VD4sXG4gICAgICAgICAgICAgIHB1YmxpYyByZWZDb3VudDogbnVtYmVyID0gMCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPFQ+KSB7XG4gICAgY29uc3QgY29ubmVjdGFibGUgPSB0aGlzLmNvbm5lY3RhYmxlO1xuICAgIGNvbnN0IHJlZkNvdW50U3Vic2NyaWJlcjogUmVmQ291bnRTdWJzY3JpYmVyPFQ+ID0gbmV3IFJlZkNvdW50U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzKTtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBjb25uZWN0YWJsZS5zdWJzY3JpYmUocmVmQ291bnRTdWJzY3JpYmVyKTtcbiAgICBpZiAoIXN1YnNjcmlwdGlvbi5pc1Vuc3Vic2NyaWJlZCAmJiArK3RoaXMucmVmQ291bnQgPT09IDEpIHtcbiAgICAgIHJlZkNvdW50U3Vic2NyaWJlci5jb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGFibGUuY29ubmVjdCgpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICB9XG59XG5cbi8qKlxuICogV2UgbmVlZCB0aGlzIEpTRG9jIGNvbW1lbnQgZm9yIGFmZmVjdGluZyBFU0RvYy5cbiAqIEBpZ25vcmVcbiAqIEBleHRlbmRzIHtJZ25vcmVkfVxuICovXG5jbGFzcyBSZWZDb3VudFN1YnNjcmliZXI8VD4gZXh0ZW5kcyBTdWJzY3JpYmVyPFQ+IHtcbiAgY29ubmVjdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkZXN0aW5hdGlvbjogU3Vic2NyaWJlcjxUPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZWZDb3VudE9ic2VydmFibGU6IFJlZkNvdW50T2JzZXJ2YWJsZTxUPikge1xuICAgIHN1cGVyKG51bGwpO1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IHJlZkNvdW50T2JzZXJ2YWJsZS5jb25uZWN0aW9uO1xuICAgIGRlc3RpbmF0aW9uLmFkZCh0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbmV4dCh2YWx1ZTogVCkge1xuICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2Vycm9yKGVycjogYW55KSB7XG4gICAgdGhpcy5fcmVzZXRDb25uZWN0YWJsZSgpO1xuICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29tcGxldGUoKSB7XG4gICAgdGhpcy5fcmVzZXRDb25uZWN0YWJsZSgpO1xuICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0Q29ubmVjdGFibGUoKSB7XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSA9IHRoaXMucmVmQ291bnRPYnNlcnZhYmxlO1xuICAgIGNvbnN0IG9ic0Nvbm5lY3Rpb24gPSBvYnNlcnZhYmxlLmNvbm5lY3Rpb247XG4gICAgY29uc3Qgc3ViQ29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbjtcbiAgICBpZiAoc3ViQ29ubmVjdGlvbiAmJiBzdWJDb25uZWN0aW9uID09PSBvYnNDb25uZWN0aW9uKSB7XG4gICAgICBvYnNlcnZhYmxlLnJlZkNvdW50ID0gMDtcbiAgICAgIG9ic0Nvbm5lY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIG9ic2VydmFibGUuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF91bnN1YnNjcmliZSgpIHtcbiAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5yZWZDb3VudE9ic2VydmFibGU7XG4gICAgaWYgKG9ic2VydmFibGUucmVmQ291bnQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKC0tb2JzZXJ2YWJsZS5yZWZDb3VudCA9PT0gMCkge1xuICAgICAgY29uc3Qgb2JzQ29ubmVjdGlvbiA9IG9ic2VydmFibGUuY29ubmVjdGlvbjtcbiAgICAgIGNvbnN0IHN1YkNvbm5lY3Rpb24gPSB0aGlzLmNvbm5lY3Rpb247XG4gICAgICBpZiAoc3ViQ29ubmVjdGlvbiAmJiBzdWJDb25uZWN0aW9uID09PSBvYnNDb25uZWN0aW9uKSB7XG4gICAgICAgIG9ic0Nvbm5lY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgb2JzZXJ2YWJsZS5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
