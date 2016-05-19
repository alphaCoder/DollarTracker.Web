System.register(['./FutureAction', './QueueScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var FutureAction_1, QueueScheduler_1;
    var AsyncScheduler;
    return {
        setters:[
            function (FutureAction_1_1) {
                FutureAction_1 = FutureAction_1_1;
            },
            function (QueueScheduler_1_1) {
                QueueScheduler_1 = QueueScheduler_1_1;
            }],
        execute: function() {
            AsyncScheduler = (function (_super) {
                __extends(AsyncScheduler, _super);
                function AsyncScheduler() {
                    _super.apply(this, arguments);
                }
                AsyncScheduler.prototype.scheduleNow = function (work, state) {
                    return new FutureAction_1.FutureAction(this, work).schedule(state, 0);
                };
                return AsyncScheduler;
            }(QueueScheduler_1.QueueScheduler));
            exports_1("AsyncScheduler", AsyncScheduler);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQW9DLGtDQUFjO2dCQUFsRDtvQkFBb0MsOEJBQWM7Z0JBSWxELENBQUM7Z0JBSEMsb0NBQVcsR0FBWCxVQUFlLElBQTZCLEVBQUUsS0FBUztvQkFDckQsTUFBTSxDQUFDLElBQUksMkJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFDSCxxQkFBQztZQUFELENBSkEsQUFJQyxDQUptQywrQkFBYyxHQUlqRDtZQUpELDJDQUlDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvc2NoZWR1bGVyL0FzeW5jU2NoZWR1bGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7RnV0dXJlQWN0aW9ufSBmcm9tICcuL0Z1dHVyZUFjdGlvbic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7UXVldWVTY2hlZHVsZXJ9IGZyb20gJy4vUXVldWVTY2hlZHVsZXInO1xuXG5leHBvcnQgY2xhc3MgQXN5bmNTY2hlZHVsZXIgZXh0ZW5kcyBRdWV1ZVNjaGVkdWxlciB7XG4gIHNjaGVkdWxlTm93PFQ+KHdvcms6ICh4PzogVCkgPT4gU3Vic2NyaXB0aW9uLCBzdGF0ZT86IFQpOiBBY3Rpb248VD4ge1xuICAgIHJldHVybiBuZXcgRnV0dXJlQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlLCAwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
