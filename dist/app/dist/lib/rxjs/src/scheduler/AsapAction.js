System.register(['../util/Immediate', './FutureAction'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Immediate_1, FutureAction_1;
    var AsapAction;
    return {
        setters:[
            function (Immediate_1_1) {
                Immediate_1 = Immediate_1_1;
            },
            function (FutureAction_1_1) {
                FutureAction_1 = FutureAction_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            AsapAction = (function (_super) {
                __extends(AsapAction, _super);
                function AsapAction() {
                    _super.apply(this, arguments);
                }
                AsapAction.prototype._schedule = function (state, delay) {
                    if (delay === void 0) { delay = 0; }
                    if (delay > 0) {
                        return _super.prototype._schedule.call(this, state, delay);
                    }
                    this.delay = delay;
                    this.state = state;
                    var scheduler = this.scheduler;
                    scheduler.actions.push(this);
                    if (!scheduler.scheduledId) {
                        scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function () {
                            scheduler.scheduledId = null;
                            scheduler.flush();
                        });
                    }
                    return this;
                };
                AsapAction.prototype._unsubscribe = function () {
                    var scheduler = this.scheduler;
                    var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
                    _super.prototype._unsubscribe.call(this);
                    if (actions.length === 0) {
                        scheduler.active = false;
                        if (scheduledId != null) {
                            scheduler.scheduledId = null;
                            Immediate_1.Immediate.clearImmediate(scheduledId);
                        }
                    }
                };
                return AsapAction;
            }(FutureAction_1.FutureAction));
            exports_1("AsapAction", AsapAction);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9Bc2FwQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTs7OztlQUlHO1lBQ0g7Z0JBQW1DLDhCQUFlO2dCQUFsRDtvQkFBbUMsOEJBQWU7Z0JBa0NsRCxDQUFDO2dCQWhDVyw4QkFBUyxHQUFuQixVQUFvQixLQUFTLEVBQUUsS0FBaUI7b0JBQWpCLHFCQUFpQixHQUFqQixTQUFpQjtvQkFDOUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2QsTUFBTSxDQUFDLGdCQUFLLENBQUMsU0FBUyxZQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztvQkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ1osOEJBQVMsQ0FBUztvQkFDekIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLFNBQVMsQ0FBQyxXQUFXLEdBQUcscUJBQVMsQ0FBQyxZQUFZLENBQUM7NEJBQzdDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOzRCQUM3QixTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3BCLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVTLGlDQUFZLEdBQXRCO29CQUVTLDhCQUFTLENBQVM7b0JBQ2xCLHVDQUFXLEVBQUUsMkJBQU8sQ0FBYztvQkFFekMsZ0JBQUssQ0FBQyxZQUFZLFdBQUUsQ0FBQztvQkFFckIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDekIsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOzRCQUM3QixxQkFBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBQ0gsaUJBQUM7WUFBRCxDQWxDQSxBQWtDQyxDQWxDa0MsMkJBQVksR0FrQzlDO1lBbENELG1DQWtDQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9Bc2FwQWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7SW1tZWRpYXRlfSBmcm9tICcuLi91dGlsL0ltbWVkaWF0ZSc7XG5pbXBvcnQge0Z1dHVyZUFjdGlvbn0gZnJvbSAnLi9GdXR1cmVBY3Rpb24nO1xuXG4vKipcbiAqIFdlIG5lZWQgdGhpcyBKU0RvYyBjb21tZW50IGZvciBhZmZlY3RpbmcgRVNEb2MuXG4gKiBAaWdub3JlXG4gKiBAZXh0ZW5kcyB7SWdub3JlZH1cbiAqL1xuZXhwb3J0IGNsYXNzIEFzYXBBY3Rpb248VD4gZXh0ZW5kcyBGdXR1cmVBY3Rpb248VD4ge1xuXG4gIHByb3RlY3RlZCBfc2NoZWR1bGUoc3RhdGU/OiBULCBkZWxheTogbnVtYmVyID0gMCk6IEFjdGlvbjxUPiB7XG4gICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgcmV0dXJuIHN1cGVyLl9zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICAgIH1cbiAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIGNvbnN0IHtzY2hlZHVsZXJ9ID0gdGhpcztcbiAgICBzY2hlZHVsZXIuYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgIGlmICghc2NoZWR1bGVyLnNjaGVkdWxlZElkKSB7XG4gICAgICBzY2hlZHVsZXIuc2NoZWR1bGVkSWQgPSBJbW1lZGlhdGUuc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlZElkID0gbnVsbDtcbiAgICAgICAgc2NoZWR1bGVyLmZsdXNoKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3Vuc3Vic2NyaWJlKCk6IHZvaWQge1xuXG4gICAgY29uc3Qge3NjaGVkdWxlcn0gPSB0aGlzO1xuICAgIGNvbnN0IHtzY2hlZHVsZWRJZCwgYWN0aW9uc30gPSBzY2hlZHVsZXI7XG5cbiAgICBzdXBlci5fdW5zdWJzY3JpYmUoKTtcblxuICAgIGlmIChhY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2NoZWR1bGVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgaWYgKHNjaGVkdWxlZElkICE9IG51bGwpIHtcbiAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlZElkID0gbnVsbDtcbiAgICAgICAgSW1tZWRpYXRlLmNsZWFySW1tZWRpYXRlKHNjaGVkdWxlZElkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
