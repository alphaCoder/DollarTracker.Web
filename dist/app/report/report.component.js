System.register(['@angular/core', '@angular/router', '../charts/chartdemo', '../expense/expense.modal.component', 'ng2-slim-loading-bar/ng2-slim-loading-bar', '../expenseStory/expenseStory.component', '../expenseStory/expenseStory.service'], function(exports_1, context_1) {
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
    var core_1, router_1, chartdemo_1, expense_modal_component_1, ng2_slim_loading_bar_1, expenseStory_component_1, expenseStory_service_1;
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
            function (expenseStory_component_1_1) {
                expenseStory_component_1 = expenseStory_component_1_1;
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
                    console.log('LOADING REPORT');
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
                    directives: [chartdemo_1.ChartDemo, expense_modal_component_1.ExpenseModalComponent, expenseStory_component_1.ExpenseStoryComponent, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [ng2_slim_loading_bar_1.SlimLoadingBarService, expenseStory_service_1.ExpenseStoryService])
            ], ReportComponent);
            exports_1("ReportComponent", ReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUksWUFDUSxXQUFpQyxFQUNqQyxvQkFBd0M7b0JBRHhDLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtvQkFDakMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQjtvQkFKekMsV0FBTSxHQUFHLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBTXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFNRixJQUFJLENBQUMsT0FBTztvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDQSxRQUFRLENBQUMsRUFBVTtvQkFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0JBQzFELENBQUM7WUFDTCxDQUFDO1lBVkc7Z0JBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7O2lFQUFBO1lBaEJ6QjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFVBQVUsRUFBQyxDQUFDLHFCQUFTLEVBQUUsK0NBQXFCLEVBQUUsOENBQXFCLEVBQUUsMEJBQWlCLENBQUM7aUJBQzFGLENBQUM7OytCQUFBO1lBQ0YsNkNBc0JDLENBQUEiLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0NoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2NoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UubW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtFeHBlbnNlfSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeVN1bW1hcnksIEV4cGVuc2VTdG9yeSwgRXhwZW5zZXNTdGF0fSBmcm9tICcuLi9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5Lm1vZGVsJ1xyXG5pbXBvcnQge1NsaW1Mb2FkaW5nQmFyU2VydmljZX0gZnJvbSAnbmcyLXNsaW0tbG9hZGluZy1iYXIvbmcyLXNsaW0tbG9hZGluZy1iYXInO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeUNvbXBvbmVudH0gZnJvbSAnLi4vZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeVNlcnZpY2V9IGZyb20gJy4uL2V4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltDaGFydERlbW8sIEV4cGVuc2VNb2RhbENvbXBvbmVudCwgRXhwZW5zZVN0b3J5Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZXhwZW5zZVN0b3J5U3VtbWFyaWVzOkFycmF5PEV4cGVuc2VTdG9yeVN1bW1hcnk+O1xyXG4gICAgcHVibGljIGNvbG9ycyA9IFsnc3VjY2VzcycsICdpbmZvJywgJ2RhbmdlcicsICd3YXJuaW5nJ107XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfc2xpbUxvYWRlcjpTbGltTG9hZGluZ0JhclNlcnZpY2UsIFxyXG4gICAgcHJpdmF0ZSBfZXhwZW5zZVN0b3J5U2VydmljZTpFeHBlbnNlU3RvcnlTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTE9BRElORyBSRVBPUlQnKTtcclxuICAgICB9XHJcbiAgIFxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2V4cGVuc2UnKVxyXG4gICAgZXhwZW5zZU1vZGFsOkV4cGVuc2VNb2RhbENvbXBvbmVudDtcclxuXHJcbiAgICBvcGVuKHN0b3J5SWQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieW91IGNsaWNrZWQgb3BlbjpcIitzdG9yeUlkKTtcclxuICAgICAgICB0aGlzLmV4cGVuc2VNb2RhbC5vcGVuKHN0b3J5SWQpO1xyXG4gICAgfSBcclxuICAgICBvbk5vdGlmeShleDpFeHBlbnNlKTp2b2lkIHtcclxuICAgICAgICB0aGlzLl9leHBlbnNlU3RvcnlTZXJ2aWNlLmxvYWRFeHBlbnNlU3RvcnlTdW1tYXJpZXMoKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
