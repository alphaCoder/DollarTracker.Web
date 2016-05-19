System.register(['../Observable', '../Subscription', './SubscriptionLoggable', '../util/applyMixins'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Observable_1, Subscription_1, SubscriptionLoggable_1, applyMixins_1;
    var ColdObservable;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
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
            ColdObservable = (function (_super) {
                __extends(ColdObservable, _super);
                function ColdObservable(messages, scheduler) {
                    _super.call(this, function (subscriber) {
                        var observable = this;
                        var index = observable.logSubscribedFrame();
                        subscriber.add(new Subscription_1.Subscription(function () {
                            observable.logUnsubscribedFrame(index);
                        }));
                        observable.scheduleMessages(subscriber);
                        return subscriber;
                    });
                    this.messages = messages;
                    this.subscriptions = [];
                    this.scheduler = scheduler;
                }
                ColdObservable.prototype.scheduleMessages = function (subscriber) {
                    var messagesLength = this.messages.length;
                    for (var i = 0; i < messagesLength; i++) {
                        var message = this.messages[i];
                        subscriber.add(this.scheduler.schedule(function (_a) {
                            var message = _a.message, subscriber = _a.subscriber;
                            message.notification.observe(subscriber);
                        }, message.frame, { message: message, subscriber: subscriber }));
                    }
                };
                return ColdObservable;
            }(Observable_1.Observable));
            exports_1("ColdObservable", ColdObservable);
            applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3Rlc3RpbmcvQ29sZE9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBOzs7O2VBSUc7WUFDSDtnQkFBdUMsa0NBQWE7Z0JBTWxELHdCQUFtQixRQUF1QixFQUM5QixTQUFvQjtvQkFDOUIsa0JBQU0sVUFBVSxVQUEyQjt3QkFDekMsSUFBTSxVQUFVLEdBQXNCLElBQUksQ0FBQzt3QkFDM0MsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUM7d0JBQzlDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSwyQkFBWSxDQUFDOzRCQUM5QixVQUFVLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ0osVUFBVSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4QyxNQUFNLENBQUMsVUFBVSxDQUFDO29CQUNwQixDQUFDLENBQUMsQ0FBQztvQkFWYyxhQUFRLEdBQVIsUUFBUSxDQUFlO29CQUxuQyxrQkFBYSxHQUFzQixFQUFFLENBQUM7b0JBZ0IzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBMkI7b0JBQzFDLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO29CQUM1QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUN4QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxVQUFVLENBQUMsR0FBRyxDQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQUMsRUFBcUI7Z0NBQXBCLG9CQUFPLEVBQUUsMEJBQVU7NEJBQVEsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQUMsQ0FBQyxFQUM5RixPQUFPLENBQUMsS0FBSyxFQUNiLEVBQUMsU0FBQSxPQUFPLEVBQUUsWUFBQSxVQUFVLEVBQUMsQ0FBQyxDQUN6QixDQUFDO29CQUNKLENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBL0JBLEFBK0JDLENBL0JzQyx1QkFBVSxHQStCaEQ7WUEvQkQsMkNBK0JDLENBQUE7WUFDRCx5QkFBVyxDQUFDLGNBQWMsRUFBRSxDQUFDLDJDQUFvQixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy90ZXN0aW5nL0NvbGRPYnNlcnZhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtTY2hlZHVsZXJ9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5pbXBvcnQge1Rlc3RNZXNzYWdlfSBmcm9tICcuL1Rlc3RNZXNzYWdlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9uTG9nfSBmcm9tICcuL1N1YnNjcmlwdGlvbkxvZyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbkxvZ2dhYmxlfSBmcm9tICcuL1N1YnNjcmlwdGlvbkxvZ2dhYmxlJztcbmltcG9ydCB7YXBwbHlNaXhpbnN9IGZyb20gJy4uL3V0aWwvYXBwbHlNaXhpbnMnO1xuaW1wb3J0IHtTdWJzY3JpYmVyfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBDb2xkT2JzZXJ2YWJsZTxUPiBleHRlbmRzIE9ic2VydmFibGU8VD4gaW1wbGVtZW50cyBTdWJzY3JpcHRpb25Mb2dnYWJsZSB7XG4gIHB1YmxpYyBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25Mb2dbXSA9IFtdO1xuICBzY2hlZHVsZXI6IFNjaGVkdWxlcjtcbiAgbG9nU3Vic2NyaWJlZEZyYW1lOiAoKSA9PiBudW1iZXI7XG4gIGxvZ1Vuc3Vic2NyaWJlZEZyYW1lOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZXM6IFRlc3RNZXNzYWdlW10sXG4gICAgICAgICAgICAgIHNjaGVkdWxlcjogU2NoZWR1bGVyKSB7XG4gICAgc3VwZXIoZnVuY3Rpb24gKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICAgICAgY29uc3Qgb2JzZXJ2YWJsZTogQ29sZE9ic2VydmFibGU8VD4gPSB0aGlzO1xuICAgICAgY29uc3QgaW5kZXggPSBvYnNlcnZhYmxlLmxvZ1N1YnNjcmliZWRGcmFtZSgpO1xuICAgICAgc3Vic2NyaWJlci5hZGQobmV3IFN1YnNjcmlwdGlvbigoKSA9PiB7XG4gICAgICAgIG9ic2VydmFibGUubG9nVW5zdWJzY3JpYmVkRnJhbWUoaW5kZXgpO1xuICAgICAgfSkpO1xuICAgICAgb2JzZXJ2YWJsZS5zY2hlZHVsZU1lc3NhZ2VzKHN1YnNjcmliZXIpO1xuICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfSk7XG4gICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gIH1cblxuICBzY2hlZHVsZU1lc3NhZ2VzKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55Pikge1xuICAgIGNvbnN0IG1lc3NhZ2VzTGVuZ3RoID0gdGhpcy5tZXNzYWdlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNzYWdlc0xlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5tZXNzYWdlc1tpXTtcbiAgICAgIHN1YnNjcmliZXIuYWRkKFxuICAgICAgICB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZSgoe21lc3NhZ2UsIHN1YnNjcmliZXJ9KSA9PiB7IG1lc3NhZ2Uubm90aWZpY2F0aW9uLm9ic2VydmUoc3Vic2NyaWJlcik7IH0sXG4gICAgICAgICAgbWVzc2FnZS5mcmFtZSxcbiAgICAgICAgICB7bWVzc2FnZSwgc3Vic2NyaWJlcn0pXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuYXBwbHlNaXhpbnMoQ29sZE9ic2VydmFibGUsIFtTdWJzY3JpcHRpb25Mb2dnYWJsZV0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
