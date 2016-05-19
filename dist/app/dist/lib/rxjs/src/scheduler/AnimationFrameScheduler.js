System.register(['./QueueScheduler', './AnimationFrameAction'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var QueueScheduler_1, AnimationFrameAction_1;
    var AnimationFrameScheduler;
    return {
        setters:[
            function (QueueScheduler_1_1) {
                QueueScheduler_1 = QueueScheduler_1_1;
            },
            function (AnimationFrameAction_1_1) {
                AnimationFrameAction_1 = AnimationFrameAction_1_1;
            }],
        execute: function() {
            AnimationFrameScheduler = (function (_super) {
                __extends(AnimationFrameScheduler, _super);
                function AnimationFrameScheduler() {
                    _super.apply(this, arguments);
                }
                AnimationFrameScheduler.prototype.scheduleNow = function (work, state) {
                    return new AnimationFrameAction_1.AnimationFrameAction(this, work).schedule(state);
                };
                return AnimationFrameScheduler;
            }(QueueScheduler_1.QueueScheduler));
            exports_1("AnimationFrameScheduler", AnimationFrameScheduler);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9BbmltYXRpb25GcmFtZVNjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQTZDLDJDQUFjO2dCQUEzRDtvQkFBNkMsOEJBQWM7Z0JBSTNELENBQUM7Z0JBSEMsNkNBQVcsR0FBWCxVQUFlLElBQTZCLEVBQUUsS0FBUztvQkFDckQsTUFBTSxDQUFDLElBQUksMkNBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUQsQ0FBQztnQkFDSCw4QkFBQztZQUFELENBSkEsQUFJQyxDQUo0QywrQkFBYyxHQUkxRDtZQUpELDZEQUlDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvc2NoZWR1bGVyL0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtRdWV1ZVNjaGVkdWxlcn0gZnJvbSAnLi9RdWV1ZVNjaGVkdWxlcic7XG5pbXBvcnQge0FuaW1hdGlvbkZyYW1lQWN0aW9ufSBmcm9tICcuL0FuaW1hdGlvbkZyYW1lQWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIGV4dGVuZHMgUXVldWVTY2hlZHVsZXIge1xuICBzY2hlZHVsZU5vdzxUPih3b3JrOiAoeD86IFQpID0+IFN1YnNjcmlwdGlvbiwgc3RhdGU/OiBUKTogQWN0aW9uPFQ+IHtcbiAgICByZXR1cm4gbmV3IEFuaW1hdGlvbkZyYW1lQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
