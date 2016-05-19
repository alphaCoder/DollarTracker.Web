System.register(['./AsapAction', './QueueScheduler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var AsapAction_1, QueueScheduler_1;
    var AsapScheduler;
    return {
        setters:[
            function (AsapAction_1_1) {
                AsapAction_1 = AsapAction_1_1;
            },
            function (QueueScheduler_1_1) {
                QueueScheduler_1 = QueueScheduler_1_1;
            }],
        execute: function() {
            AsapScheduler = (function (_super) {
                __extends(AsapScheduler, _super);
                function AsapScheduler() {
                    _super.apply(this, arguments);
                }
                AsapScheduler.prototype.scheduleNow = function (work, state) {
                    return new AsapAction_1.AsapAction(this, work).schedule(state);
                };
                return AsapScheduler;
            }(QueueScheduler_1.QueueScheduler));
            exports_1("AsapScheduler", AsapScheduler);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9Bc2FwU2NoZWR1bGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBbUMsaUNBQWM7Z0JBQWpEO29CQUFtQyw4QkFBYztnQkFJakQsQ0FBQztnQkFIQyxtQ0FBVyxHQUFYLFVBQWUsSUFBNkIsRUFBRSxLQUFTO29CQUNyRCxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0gsb0JBQUM7WUFBRCxDQUpBLEFBSUMsQ0FKa0MsK0JBQWMsR0FJaEQ7WUFKRCx5Q0FJQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9Bc2FwU2NoZWR1bGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7QXNhcEFjdGlvbn0gZnJvbSAnLi9Bc2FwQWN0aW9uJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHtRdWV1ZVNjaGVkdWxlcn0gZnJvbSAnLi9RdWV1ZVNjaGVkdWxlcic7XG5cbmV4cG9ydCBjbGFzcyBBc2FwU2NoZWR1bGVyIGV4dGVuZHMgUXVldWVTY2hlZHVsZXIge1xuICBzY2hlZHVsZU5vdzxUPih3b3JrOiAoeD86IFQpID0+IFN1YnNjcmlwdGlvbiwgc3RhdGU/OiBUKTogQWN0aW9uPFQ+IHtcbiAgICByZXR1cm4gbmV3IEFzYXBBY3Rpb24odGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
