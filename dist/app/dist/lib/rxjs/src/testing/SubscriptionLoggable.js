System.register(['./SubscriptionLog'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SubscriptionLog_1;
    var SubscriptionLoggable;
    return {
        setters:[
            function (SubscriptionLog_1_1) {
                SubscriptionLog_1 = SubscriptionLog_1_1;
            }],
        execute: function() {
            SubscriptionLoggable = (function () {
                function SubscriptionLoggable() {
                    this.subscriptions = [];
                }
                SubscriptionLoggable.prototype.logSubscribedFrame = function () {
                    this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
                    return this.subscriptions.length - 1;
                };
                SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
                    var subscriptionLogs = this.subscriptions;
                    var oldSubscriptionLog = subscriptionLogs[index];
                    subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
                };
                return SubscriptionLoggable;
            }());
            exports_1("SubscriptionLoggable", SubscriptionLoggable);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3Rlc3RpbmcvU3Vic2NyaXB0aW9uTG9nZ2FibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFHQTtnQkFBQTtvQkFDUyxrQkFBYSxHQUFzQixFQUFFLENBQUM7Z0JBZ0IvQyxDQUFDO2dCQWJDLGlEQUFrQixHQUFsQjtvQkFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLGlDQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQsbURBQW9CLEdBQXBCLFVBQXFCLEtBQWE7b0JBQ2hDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztvQkFDNUMsSUFBTSxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkQsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxpQ0FBZSxDQUMzQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQ3JCLENBQUM7Z0JBQ0osQ0FBQztnQkFDSCwyQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQsdURBaUJDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvdGVzdGluZy9TdWJzY3JpcHRpb25Mb2dnYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtTdWJzY3JpcHRpb25Mb2d9IGZyb20gJy4vU3Vic2NyaXB0aW9uTG9nJztcblxuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvbkxvZ2dhYmxlIHtcbiAgcHVibGljIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbkxvZ1tdID0gW107XG4gIHNjaGVkdWxlcjogU2NoZWR1bGVyO1xuXG4gIGxvZ1N1YnNjcmliZWRGcmFtZSgpOiBudW1iZXIge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKG5ldyBTdWJzY3JpcHRpb25Mb2codGhpcy5zY2hlZHVsZXIubm93KCkpKTtcbiAgICByZXR1cm4gdGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aCAtIDE7XG4gIH1cblxuICBsb2dVbnN1YnNjcmliZWRGcmFtZShpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uTG9ncyA9IHRoaXMuc3Vic2NyaXB0aW9ucztcbiAgICBjb25zdCBvbGRTdWJzY3JpcHRpb25Mb2cgPSBzdWJzY3JpcHRpb25Mb2dzW2luZGV4XTtcbiAgICBzdWJzY3JpcHRpb25Mb2dzW2luZGV4XSA9IG5ldyBTdWJzY3JpcHRpb25Mb2coXG4gICAgICBvbGRTdWJzY3JpcHRpb25Mb2cuc3Vic2NyaWJlZEZyYW1lLFxuICAgICAgdGhpcy5zY2hlZHVsZXIubm93KClcbiAgICApO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
