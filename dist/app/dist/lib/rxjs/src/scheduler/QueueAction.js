System.register(['./FutureAction'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var FutureAction_1;
    var QueueAction;
    return {
        setters:[
            function (FutureAction_1_1) {
                FutureAction_1 = FutureAction_1_1;
            }],
        execute: function() {
            /**
             * We need this JSDoc comment for affecting ESDoc.
             * @ignore
             * @extends {Ignored}
             */
            QueueAction = (function (_super) {
                __extends(QueueAction, _super);
                function QueueAction() {
                    _super.apply(this, arguments);
                }
                QueueAction.prototype._schedule = function (state, delay) {
                    if (delay === void 0) { delay = 0; }
                    if (delay > 0) {
                        return _super.prototype._schedule.call(this, state, delay);
                    }
                    this.delay = delay;
                    this.state = state;
                    var scheduler = this.scheduler;
                    scheduler.actions.push(this);
                    scheduler.flush();
                    return this;
                };
                return QueueAction;
            }(FutureAction_1.FutureAction));
            exports_1("QueueAction", QueueAction);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvbGliL3J4anMvc3JjL3NjaGVkdWxlci9RdWV1ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Ozs7ZUFJRztZQUNIO2dCQUFvQywrQkFBZTtnQkFBbkQ7b0JBQW9DLDhCQUFlO2dCQVluRCxDQUFDO2dCQVhXLCtCQUFTLEdBQW5CLFVBQW9CLEtBQVMsRUFBRSxLQUFpQjtvQkFBakIscUJBQWlCLEdBQWpCLFNBQWlCO29CQUM5QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxNQUFNLENBQUMsZ0JBQUssQ0FBQyxTQUFTLFlBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUN2QyxDQUFDO29CQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDakMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZCxDQUFDO2dCQUNILGtCQUFDO1lBQUQsQ0FaQSxBQVlDLENBWm1DLDJCQUFZLEdBWS9DO1lBWkQscUNBWUMsQ0FBQSIsImZpbGUiOiJkaXN0L2xpYi9yeGpzL3NyYy9zY2hlZHVsZXIvUXVldWVBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjdGlvbn0gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHtGdXR1cmVBY3Rpb259IGZyb20gJy4vRnV0dXJlQWN0aW9uJztcblxuLyoqXG4gKiBXZSBuZWVkIHRoaXMgSlNEb2MgY29tbWVudCBmb3IgYWZmZWN0aW5nIEVTRG9jLlxuICogQGlnbm9yZVxuICogQGV4dGVuZHMge0lnbm9yZWR9XG4gKi9cbmV4cG9ydCBjbGFzcyBRdWV1ZUFjdGlvbjxUPiBleHRlbmRzIEZ1dHVyZUFjdGlvbjxUPiB7XG4gIHByb3RlY3RlZCBfc2NoZWR1bGUoc3RhdGU/OiBULCBkZWxheTogbnVtYmVyID0gMCk6IEFjdGlvbjxUPiB7XG4gICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgcmV0dXJuIHN1cGVyLl9zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICAgIH1cbiAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIGNvbnN0IHNjaGVkdWxlciA9IHRoaXMuc2NoZWR1bGVyO1xuICAgIHNjaGVkdWxlci5hY3Rpb25zLnB1c2godGhpcyk7XG4gICAgc2NoZWR1bGVyLmZsdXNoKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
