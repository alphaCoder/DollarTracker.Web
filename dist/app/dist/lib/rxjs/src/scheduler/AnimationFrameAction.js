System.register(['./FutureAction', '../util/AnimationFrame'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var FutureAction_1, AnimationFrame_1;
    var AnimationFrameAction;
    return {
        setters:[
            function (FutureAction_1_1) {
                FutureAction_1 = FutureAction_1_1;
            },
            function (AnimationFrame_1_1) {
                AnimationFrame_1 = AnimationFrame_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            AnimationFrameAction = (function (_super) {
                __extends(AnimationFrameAction, _super);
                function AnimationFrameAction() {
                    _super.apply(this, arguments);
                }
                AnimationFrameAction.prototype._schedule = function (state, delay) {
                    if (delay === void 0) { delay = 0; }
                    if (delay > 0) {
                        return _super.prototype._schedule.call(this, state, delay);
                    }
                    this.delay = delay;
                    this.state = state;
                    var scheduler = this.scheduler;
                    scheduler.actions.push(this);
                    if (!scheduler.scheduledId) {
                        scheduler.scheduledId = AnimationFrame_1.AnimationFrame.requestAnimationFrame(function () {
                            scheduler.scheduledId = null;
                            scheduler.flush();
                        });
                    }
                    return this;
                };
                AnimationFrameAction.prototype._unsubscribe = function () {
                    var scheduler = this.scheduler;
                    var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
                    _super.prototype._unsubscribe.call(this);
                    if (actions.length === 0) {
                        scheduler.active = false;
                        if (scheduledId != null) {
                            scheduler.scheduledId = null;
                            AnimationFrame_1.AnimationFrame.cancelAnimationFrame(scheduledId);
                        }
                    }
                };
                return AnimationFrameAction;
            }(FutureAction_1.FutureAction));
            exports_1("AnimationFrameAction", AnimationFrameAction);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9BbmltYXRpb25GcmFtZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Ozs7ZUFJRztZQUNIO2dCQUE2Qyx3Q0FBZTtnQkFBNUQ7b0JBQTZDLDhCQUFlO2dCQWtDNUQsQ0FBQztnQkFoQ1csd0NBQVMsR0FBbkIsVUFBb0IsS0FBUyxFQUFFLEtBQWlCO29CQUFqQixxQkFBaUIsR0FBakIsU0FBaUI7b0JBQzlDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNkLE1BQU0sQ0FBQyxnQkFBSyxDQUFDLFNBQVMsWUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7b0JBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNaLDhCQUFTLENBQVM7b0JBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixTQUFTLENBQUMsV0FBVyxHQUFHLCtCQUFjLENBQUMscUJBQXFCLENBQUM7NEJBQzNELFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOzRCQUM3QixTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3BCLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUVTLDJDQUFZLEdBQXRCO29CQUVTLDhCQUFTLENBQVM7b0JBQ2xCLHVDQUFXLEVBQUUsMkJBQU8sQ0FBYztvQkFFekMsZ0JBQUssQ0FBQyxZQUFZLFdBQUUsQ0FBQztvQkFFckIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDekIsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOzRCQUM3QiwrQkFBYyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNuRCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFDSCwyQkFBQztZQUFELENBbENBLEFBa0NDLENBbEM0QywyQkFBWSxHQWtDeEQ7WUFsQ0QsdURBa0NDLENBQUEiLCJmaWxlIjoiZGlzdC9saWIvcnhqcy9zcmMvc2NoZWR1bGVyL0FuaW1hdGlvbkZyYW1lQWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb259IGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7RnV0dXJlQWN0aW9ufSBmcm9tICcuL0Z1dHVyZUFjdGlvbic7XG5pbXBvcnQge0FuaW1hdGlvbkZyYW1lfSBmcm9tICcuLi91dGlsL0FuaW1hdGlvbkZyYW1lJztcblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBBbmltYXRpb25GcmFtZUFjdGlvbjxUPiBleHRlbmRzIEZ1dHVyZUFjdGlvbjxUPiB7XG5cbiAgcHJvdGVjdGVkIF9zY2hlZHVsZShzdGF0ZT86IFQsIGRlbGF5OiBudW1iZXIgPSAwKTogQWN0aW9uPFQ+IHtcbiAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICByZXR1cm4gc3VwZXIuX3NjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gICAgfVxuICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgY29uc3Qge3NjaGVkdWxlcn0gPSB0aGlzO1xuICAgIHNjaGVkdWxlci5hY3Rpb25zLnB1c2godGhpcyk7XG4gICAgaWYgKCFzY2hlZHVsZXIuc2NoZWR1bGVkSWQpIHtcbiAgICAgIHNjaGVkdWxlci5zY2hlZHVsZWRJZCA9IEFuaW1hdGlvbkZyYW1lLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHNjaGVkdWxlci5zY2hlZHVsZWRJZCA9IG51bGw7XG4gICAgICAgIHNjaGVkdWxlci5mbHVzaCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91bnN1YnNjcmliZSgpOiB2b2lkIHtcblxuICAgIGNvbnN0IHtzY2hlZHVsZXJ9ID0gdGhpcztcbiAgICBjb25zdCB7c2NoZWR1bGVkSWQsIGFjdGlvbnN9ID0gc2NoZWR1bGVyO1xuXG4gICAgc3VwZXIuX3Vuc3Vic2NyaWJlKCk7XG5cbiAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNjaGVkdWxlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGlmIChzY2hlZHVsZWRJZCAhPSBudWxsKSB7XG4gICAgICAgIHNjaGVkdWxlci5zY2hlZHVsZWRJZCA9IG51bGw7XG4gICAgICAgIEFuaW1hdGlvbkZyYW1lLmNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlZElkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
