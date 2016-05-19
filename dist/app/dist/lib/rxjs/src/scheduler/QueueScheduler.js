System.register(['./QueueAction', './FutureAction'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QueueAction_1, FutureAction_1;
    var QueueScheduler;
    return {
        setters:[
            function (QueueAction_1_1) {
                QueueAction_1 = QueueAction_1_1;
            },
            function (FutureAction_1_1) {
                FutureAction_1 = FutureAction_1_1;
            }],
        execute: function() {
            QueueScheduler = (function () {
                function QueueScheduler() {
                    this.active = false;
                    this.actions = []; // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
                    this.scheduledId = null;
                }
                QueueScheduler.prototype.now = function () {
                    return Date.now();
                };
                QueueScheduler.prototype.flush = function () {
                    if (this.active || this.scheduledId) {
                        return;
                    }
                    this.active = true;
                    var actions = this.actions;
                    // XXX: use `any` to remove type param `T` from `VirtualTimeScheduler`.
                    for (var action = null; action = actions.shift();) {
                        action.execute();
                        if (action.error) {
                            this.active = false;
                            throw action.error;
                        }
                    }
                    this.active = false;
                };
                QueueScheduler.prototype.schedule = function (work, delay, state) {
                    if (delay === void 0) { delay = 0; }
                    return (delay <= 0) ?
                        this.scheduleNow(work, state) :
                        this.scheduleLater(work, delay, state);
                };
                QueueScheduler.prototype.scheduleNow = function (work, state) {
                    return new QueueAction_1.QueueAction(this, work).schedule(state);
                };
                QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
                    return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
                };
                return QueueScheduler;
            }());
            exports_1("QueueScheduler", QueueScheduler);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9RdWV1ZVNjaGVkdWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO29CQUNTLFdBQU0sR0FBWSxLQUFLLENBQUM7b0JBQ3hCLFlBQU8sR0FBdUIsRUFBRSxDQUFDLENBQUMsdUVBQXVFO29CQUN6RyxnQkFBVyxHQUFXLElBQUksQ0FBQztnQkFvQ3BDLENBQUM7Z0JBbENDLDRCQUFHLEdBQUg7b0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFFRCw4QkFBSyxHQUFMO29CQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLE1BQU0sQ0FBQztvQkFDVCxDQUFDO29CQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUM3Qix1RUFBdUU7b0JBQ3ZFLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxHQUFxQixJQUFJLEVBQUUsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBSSxDQUFDO3dCQUNyRSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ2pCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0QkFDcEIsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDO3dCQUNyQixDQUFDO29CQUNILENBQUM7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsaUNBQVEsR0FBUixVQUFZLElBQW9DLEVBQUUsS0FBaUIsRUFBRSxLQUFTO29CQUE1QixxQkFBaUIsR0FBakIsU0FBaUI7b0JBQ2pFLE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELG9DQUFXLEdBQVgsVUFBZSxJQUFvQyxFQUFFLEtBQVM7b0JBQzVELE1BQU0sQ0FBQyxJQUFJLHlCQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkFFRCxzQ0FBYSxHQUFiLFVBQWlCLElBQW9DLEVBQUUsS0FBYSxFQUFFLEtBQVM7b0JBQzdFLE1BQU0sQ0FBQyxJQUFJLDJCQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdELENBQUM7Z0JBQ0gscUJBQUM7WUFBRCxDQXZDQSxBQXVDQyxJQUFBO1lBdkNELDJDQXVDQyxDQUFBIiwiZmlsZSI6ImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9RdWV1ZVNjaGVkdWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NoZWR1bGVyfSBmcm9tICcuLi9TY2hlZHVsZXInO1xuaW1wb3J0IHtRdWV1ZUFjdGlvbn0gZnJvbSAnLi9RdWV1ZUFjdGlvbic7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7RnV0dXJlQWN0aW9ufSBmcm9tICcuL0Z1dHVyZUFjdGlvbic7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xuXG5leHBvcnQgY2xhc3MgUXVldWVTY2hlZHVsZXIgaW1wbGVtZW50cyBTY2hlZHVsZXIge1xuICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBhY3Rpb25zOiBRdWV1ZUFjdGlvbjxhbnk+W10gPSBbXTsgLy8gWFhYOiB1c2UgYGFueWAgdG8gcmVtb3ZlIHR5cGUgcGFyYW0gYFRgIGZyb20gYFZpcnR1YWxUaW1lU2NoZWR1bGVyYC5cbiAgcHVibGljIHNjaGVkdWxlZElkOiBudW1iZXIgPSBudWxsO1xuXG4gIG5vdygpIHtcbiAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgfVxuXG4gIGZsdXNoKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSB8fCB0aGlzLnNjaGVkdWxlZElkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgIC8vIFhYWDogdXNlIGBhbnlgIHRvIHJlbW92ZSB0eXBlIHBhcmFtIGBUYCBmcm9tIGBWaXJ0dWFsVGltZVNjaGVkdWxlcmAuXG4gICAgZm9yIChsZXQgYWN0aW9uOiBRdWV1ZUFjdGlvbjxhbnk+ID0gbnVsbDsgYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpOyApIHtcbiAgICAgIGFjdGlvbi5leGVjdXRlKCk7XG4gICAgICBpZiAoYWN0aW9uLmVycm9yKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRocm93IGFjdGlvbi5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHNjaGVkdWxlPFQ+KHdvcms6ICh4PzogVCkgPT4gU3Vic2NyaXB0aW9uIHwgdm9pZCwgZGVsYXk6IG51bWJlciA9IDAsIHN0YXRlPzogVCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIChkZWxheSA8PSAwKSA/XG4gICAgICB0aGlzLnNjaGVkdWxlTm93KHdvcmssIHN0YXRlKSA6XG4gICAgICB0aGlzLnNjaGVkdWxlTGF0ZXIod29yaywgZGVsYXksIHN0YXRlKTtcbiAgfVxuXG4gIHNjaGVkdWxlTm93PFQ+KHdvcms6ICh4PzogVCkgPT4gU3Vic2NyaXB0aW9uIHwgdm9pZCwgc3RhdGU/OiBUKTogQWN0aW9uPFQ+IHtcbiAgICByZXR1cm4gbmV3IFF1ZXVlQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlKTtcbiAgfVxuXG4gIHNjaGVkdWxlTGF0ZXI8VD4od29yazogKHg/OiBUKSA9PiBTdWJzY3JpcHRpb24gfCB2b2lkLCBkZWxheTogbnVtYmVyLCBzdGF0ZT86IFQpOiBBY3Rpb248VD4ge1xuICAgIHJldHVybiBuZXcgRnV0dXJlQWN0aW9uKHRoaXMsIHdvcmspLnNjaGVkdWxlKHN0YXRlLCBkZWxheSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
