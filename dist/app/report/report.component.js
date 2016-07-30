System.register(['@angular/core', '@angular/router', '../charts/chartdemo', '../expense/expense.modal.component', 'ng2-slim-loading-bar/ng2-slim-loading-bar', '../deleteExpenseStory/deleteExpenseStory.component', '../expenseStory/expenseStory.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, chartdemo_1, expense_modal_component_1, ng2_slim_loading_bar_1, deleteExpenseStory_component_1, expenseStory_service_1;
    var ReportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chartdemo_1_1) {
                chartdemo_1 = chartdemo_1_1;
            },
            function (expense_modal_component_1_1) {
                expense_modal_component_1 = expense_modal_component_1_1;
            },
            function (ng2_slim_loading_bar_1_1) {
                ng2_slim_loading_bar_1 = ng2_slim_loading_bar_1_1;
            },
            function (deleteExpenseStory_component_1_1) {
                deleteExpenseStory_component_1 = deleteExpenseStory_component_1_1;
            },
            function (expenseStory_service_1_1) {
                expenseStory_service_1 = expenseStory_service_1_1;
            }],
        execute: function() {
            let ReportComponent = class ReportComponent {
                constructor(_slimLoader, _expenseStoryService) {
                    this._slimLoader = _slimLoader;
                    this._expenseStoryService = _expenseStoryService;
                    this.colors = ['success', 'info', 'danger', 'warning'];
                }
                open(storyId) {
                    console.log("you clicked open:" + storyId);
                    this.expenseModal.open(storyId);
                }
                onNotify(ex) {
                    this._expenseStoryService.loadExpenseStorySummaries();
                }
            };
            __decorate([
                core_1.ViewChild('expense'), 
                __metadata('design:type', expense_modal_component_1.ExpenseModalComponent)
            ], ReportComponent.prototype, "expenseModal", void 0);
            ReportComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/report/report.component.html',
                    directives: [chartdemo_1.ChartDemo, expense_modal_component_1.ExpenseModalComponent, router_1.ROUTER_DIRECTIVES, deleteExpenseStory_component_1.DeleteExpenseStoryComponent]
                }), 
                __metadata('design:paramtypes', [ng2_slim_loading_bar_1.SlimLoadingBarService, expenseStory_service_1.ExpenseStoryService])
            ], ReportComponent);
            exports_1("ReportComponent", ReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUksWUFDUSxXQUFpQyxFQUNqQyxvQkFBd0M7b0JBRHhDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtvQkFDakMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQjtvQkFKekMsV0FBTSxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBS3RELENBQUM7Z0JBTUosSUFBSSxDQUFDLE9BQU87b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0EsUUFBUSxDQUFDLEVBQVU7b0JBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2dCQUMxRCxDQUFDO1lBQ0wsQ0FBQztZQVZHO2dCQUFDLGdCQUFTLENBQUMsU0FBUyxDQUFDOztpRUFBQTtZQWR6QjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFVBQVUsRUFBQyxDQUFDLHFCQUFTLEVBQUUsK0NBQXFCLEVBQUUsMEJBQWlCLEVBQUUsMERBQTJCLENBQUM7aUJBQ2hHLENBQUM7OytCQUFBO1lBQ0YsNkNBb0JDLENBQUEiLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0NoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2NoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UubW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtFeHBlbnNlfSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeVN1bW1hcnksIEV4cGVuc2VTdG9yeSwgRXhwZW5zZXNTdGF0fSBmcm9tICcuLi9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5Lm1vZGVsJ1xyXG5pbXBvcnQge1NsaW1Mb2FkaW5nQmFyU2VydmljZX0gZnJvbSAnbmcyLXNsaW0tbG9hZGluZy1iYXIvbmcyLXNsaW0tbG9hZGluZy1iYXInO1xyXG5pbXBvcnQge0RlbGV0ZUV4cGVuc2VTdG9yeUNvbXBvbmVudH0gZnJvbSAnLi4vZGVsZXRlRXhwZW5zZVN0b3J5L2RlbGV0ZUV4cGVuc2VTdG9yeS5jb21wb25lbnQnXHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U2VydmljZX0gZnJvbSAnLi4vZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeS5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W0NoYXJ0RGVtbywgRXhwZW5zZU1vZGFsQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUywgRGVsZXRlRXhwZW5zZVN0b3J5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBleHBlbnNlU3RvcnlTdW1tYXJpZXM6QXJyYXk8RXhwZW5zZVN0b3J5U3VtbWFyeT47XHJcbiAgICBwdWJsaWMgY29sb3JzID0gWydzdWNjZXNzJywgJ2luZm8nLCAnZGFuZ2VyJywgJ3dhcm5pbmcnXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9zbGltTG9hZGVyOlNsaW1Mb2FkaW5nQmFyU2VydmljZSwgXHJcbiAgICBwcml2YXRlIF9leHBlbnNlU3RvcnlTZXJ2aWNlOkV4cGVuc2VTdG9yeVNlcnZpY2VcclxuICAgICkge31cclxuICAgXHJcblxyXG4gICAgQFZpZXdDaGlsZCgnZXhwZW5zZScpXHJcbiAgICBleHBlbnNlTW9kYWw6RXhwZW5zZU1vZGFsQ29tcG9uZW50O1xyXG5cclxuICAgIG9wZW4oc3RvcnlJZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCBvcGVuOlwiK3N0b3J5SWQpO1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZU1vZGFsLm9wZW4oc3RvcnlJZCk7XHJcbiAgICB9IFxyXG4gICAgIG9uTm90aWZ5KGV4OkV4cGVuc2UpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuX2V4cGVuc2VTdG9yeVNlcnZpY2UubG9hZEV4cGVuc2VTdG9yeVN1bW1hcmllcygpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
