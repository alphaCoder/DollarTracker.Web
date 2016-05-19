System.register(['../Subject', '../Subscription', './SubscriptionLoggable', '../util/applyMixins'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Subject_1, Subscription_1, SubscriptionLoggable_1, applyMixins_1;
    var HotObservable;
    return {
        setters:[
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (Subscription_1_1) {
                Subscription_1 = Subscription_1_1;
            },
            function (SubscriptionLoggable_1_1) {
                SubscriptionLoggable_1 = SubscriptionLoggable_1_1;
            },
            function (applyMixins_1_1) {
                applyMixins_1 = applyMixins_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            HotObservable = (function (_super) {
                __extends(HotObservable, _super);
                function HotObservable(messages, scheduler) {
                    _super.call(this);
                    this.messages = messages;
                    this.subscriptions = [];
                    this.scheduler = scheduler;
                }
                HotObservable.prototype._subscribe = function (subscriber) {
                    var subject = this;
                    var index = subject.logSubscribedFrame();
                    subscriber.add(new Subscription_1.Subscription(function () {
                        subject.logUnsubscribedFrame(index);
                    }));
                    return _super.prototype._subscribe.call(this, subscriber);
                };
                HotObservable.prototype.setup = function () {
                    var subject = this;
                    var messagesLength = subject.messages.length;
                    /* tslint:disable:no-var-keyword */
                    for (var i = 0; i < messagesLength; i++) {
                        (function () {
                            var message = subject.messages[i];
                            /* tslint:enable */
                            subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
                        })();
                    }
                };
                return HotObservable;
            }(Subject_1.Subject));
            exports_1("HotObservable", HotObservable);
            applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3Rlc3RpbmcvSG90T2JzZXJ2YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Ozs7ZUFJRztZQUNIO2dCQUFzQyxpQ0FBVTtnQkFNOUMsdUJBQW1CLFFBQXVCLEVBQzlCLFNBQW9CO29CQUM5QixpQkFBTyxDQUFDO29CQUZTLGFBQVEsR0FBUixRQUFRLENBQWU7b0JBTG5DLGtCQUFhLEdBQXNCLEVBQUUsQ0FBQztvQkFRM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Z0JBQzdCLENBQUM7Z0JBRVMsa0NBQVUsR0FBcEIsVUFBcUIsVUFBMkI7b0JBQzlDLElBQU0sT0FBTyxHQUFxQixJQUFJLENBQUM7b0JBQ3ZDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUMzQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksMkJBQVksQ0FBQzt3QkFDOUIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxnQkFBSyxDQUFDLFVBQVUsWUFBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFFRCw2QkFBSyxHQUFMO29CQUNFLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDckIsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQy9DLG1DQUFtQztvQkFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDeEMsQ0FBQzs0QkFDQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN2QyxtQkFBbUI7NEJBQ2QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQ3hCLGNBQVEsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQ2QsQ0FBQzt3QkFDSixDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNQLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCxvQkFBQztZQUFELENBcENBLEFBb0NDLENBcENxQyxpQkFBTyxHQW9DNUM7WUFwQ0QseUNBb0NDLENBQUE7WUFDRCx5QkFBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLDJDQUFvQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy90ZXN0aW5nL0hvdE9ic2VydmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N1YmplY3R9IGZyb20gJy4uL1N1YmplY3QnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7U3Vic2NyaXB0aW9uLCBUZWFyZG93bkxvZ2ljfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge1Rlc3RNZXNzYWdlfSBmcm9tICcuL1Rlc3RNZXNzYWdlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9uTG9nfSBmcm9tICcuL1N1YnNjcmlwdGlvbkxvZyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbkxvZ2dhYmxlfSBmcm9tICcuL1N1YnNjcmlwdGlvbkxvZ2dhYmxlJztcbmltcG9ydCB7YXBwbHlNaXhpbnN9IGZyb20gJy4uL3V0aWwvYXBwbHlNaXhpbnMnO1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuZXhwb3J0IGNsYXNzIEhvdE9ic2VydmFibGU8VD4gZXh0ZW5kcyBTdWJqZWN0PFQ+IGltcGxlbWVudHMgU3Vic2NyaXB0aW9uTG9nZ2FibGUge1xuICBwdWJsaWMgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uTG9nW10gPSBbXTtcbiAgc2NoZWR1bGVyOiBTY2hlZHVsZXI7XG4gIGxvZ1N1YnNjcmliZWRGcmFtZTogKCkgPT4gbnVtYmVyO1xuICBsb2dVbnN1YnNjcmliZWRGcmFtZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG1lc3NhZ2VzOiBUZXN0TWVzc2FnZVtdLFxuICAgICAgICAgICAgICBzY2hlZHVsZXI6IFNjaGVkdWxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3N1YnNjcmliZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pOiBUZWFyZG93bkxvZ2ljIHtcbiAgICBjb25zdCBzdWJqZWN0OiBIb3RPYnNlcnZhYmxlPFQ+ID0gdGhpcztcbiAgICBjb25zdCBpbmRleCA9IHN1YmplY3QubG9nU3Vic2NyaWJlZEZyYW1lKCk7XG4gICAgc3Vic2NyaWJlci5hZGQobmV3IFN1YnNjcmlwdGlvbigoKSA9PiB7XG4gICAgICBzdWJqZWN0LmxvZ1Vuc3Vic2NyaWJlZEZyYW1lKGluZGV4KTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIHN1cGVyLl9zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gIH1cblxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBzdWJqZWN0ID0gdGhpcztcbiAgICBjb25zdCBtZXNzYWdlc0xlbmd0aCA9IHN1YmplY3QubWVzc2FnZXMubGVuZ3RoO1xuICAgIC8qIHRzbGludDpkaXNhYmxlOm5vLXZhci1rZXl3b3JkICovXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXNzYWdlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAoKCkgPT4ge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHN1YmplY3QubWVzc2FnZXNbaV07XG4gICAvKiB0c2xpbnQ6ZW5hYmxlICovXG4gICAgICAgIHN1YmplY3Quc2NoZWR1bGVyLnNjaGVkdWxlKFxuICAgICAgICAgICgpID0+IHsgbWVzc2FnZS5ub3RpZmljYXRpb24ub2JzZXJ2ZShzdWJqZWN0KTsgfSxcbiAgICAgICAgICBtZXNzYWdlLmZyYW1lXG4gICAgICAgICk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfVxufVxuYXBwbHlNaXhpbnMoSG90T2JzZXJ2YWJsZSwgW1N1YnNjcmlwdGlvbkxvZ2dhYmxlXSk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
