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
                constructor(_route, _slimLoader, _expenseStoryService) {
                    this._route = _route;
                    this._slimLoader = _slimLoader;
                    this._expenseStoryService = _expenseStoryService;
                    this.colors = ['success', 'info', 'danger', 'warning'];
                    this.isActiveReports = false;
                    this._route.params.subscribe(params => {
                        let active = params["active"];
                        if (active == "active") {
                            console.log("activated", active);
                            this.isActiveReports = true;
                        }
                        else {
                            this.isActiveReports = false;
                        }
                        this._expenseStoryService.loadExpenseStorySummaries(this.isActiveReports);
                    });
                }
                open(storyId) {
                    console.log("you clicked open:" + storyId);
                    this.expenseModal.open(storyId);
                }
                onNotify(ex) {
                    this._expenseStoryService.loadExpenseStorySummaries(this.isActiveReports);
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
                __metadata('design:paramtypes', [router_1.ActivatedRoute, ng2_slim_loading_bar_1.SlimLoadingBarService, expenseStory_service_1.ExpenseStoryService])
            ], ReportComponent);
            exports_1("ReportComponent", ReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUksWUFBb0IsTUFBc0IsRUFDbEMsV0FBaUMsRUFDakMsb0JBQXdDO29CQUY1QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtvQkFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO29CQUNqQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQW9CO29CQUp6QyxXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDakQsb0JBQWUsR0FBRyxLQUFLLENBQUM7b0JBSzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNO3dCQUMvQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzlCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQSxDQUFDOzRCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQzs0QkFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7d0JBQ2pDLENBQUM7d0JBQ0QsSUFBSSxDQUFBLENBQUM7NEJBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7d0JBQ2pDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDOUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFLRCxJQUFJLENBQUMsT0FBTztvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDQSxRQUFRLENBQUMsRUFBVTtvQkFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDOUUsQ0FBQztZQUNMLENBQUM7WUFWRztnQkFBQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7aUVBQUE7WUF6QnpCO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsVUFBVSxFQUFDLENBQUMscUJBQVMsRUFBRSwrQ0FBcUIsRUFBRSwwQkFBaUIsRUFBRSwwREFBMkIsQ0FBQztpQkFDaEcsQ0FBQzs7K0JBQUE7WUFDRiw2Q0ErQkMsQ0FBQSIsImZpbGUiOiJyZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0NoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2NoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UubW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtFeHBlbnNlfSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeVN1bW1hcnksIEV4cGVuc2VTdG9yeSwgRXhwZW5zZXNTdGF0fSBmcm9tICcuLi9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5Lm1vZGVsJ1xyXG5pbXBvcnQge1NsaW1Mb2FkaW5nQmFyU2VydmljZX0gZnJvbSAnbmcyLXNsaW0tbG9hZGluZy1iYXIvbmcyLXNsaW0tbG9hZGluZy1iYXInO1xyXG5pbXBvcnQge0RlbGV0ZUV4cGVuc2VTdG9yeUNvbXBvbmVudH0gZnJvbSAnLi4vZGVsZXRlRXhwZW5zZVN0b3J5L2RlbGV0ZUV4cGVuc2VTdG9yeS5jb21wb25lbnQnXHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U2VydmljZX0gZnJvbSAnLi4vZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeS5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W0NoYXJ0RGVtbywgRXhwZW5zZU1vZGFsQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFUywgRGVsZXRlRXhwZW5zZVN0b3J5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBleHBlbnNlU3RvcnlTdW1tYXJpZXM6QXJyYXk8RXhwZW5zZVN0b3J5U3VtbWFyeT47XHJcbiAgICBwdWJsaWMgY29sb3JzID0gWydzdWNjZXNzJywgJ2luZm8nLCAnZGFuZ2VyJywgJ3dhcm5pbmcnXTtcclxuICAgIHByaXZhdGUgaXNBY3RpdmVSZXBvcnRzID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIF9zbGltTG9hZGVyOlNsaW1Mb2FkaW5nQmFyU2VydmljZSwgXHJcbiAgICBwcml2YXRlIF9leHBlbnNlU3RvcnlTZXJ2aWNlOkV4cGVuc2VTdG9yeVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHBhcmFtc1tcImFjdGl2ZVwiXTtcclxuICAgICAgICAgICAgaWYoYWN0aXZlID09IFwiYWN0aXZlXCIpe1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWN0aXZhdGVkXCIsIGFjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZVJlcG9ydHMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlUmVwb3J0cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cGVuc2VTdG9yeVNlcnZpY2UubG9hZEV4cGVuc2VTdG9yeVN1bW1hcmllcyh0aGlzLmlzQWN0aXZlUmVwb3J0cyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgXHJcbiAgICBAVmlld0NoaWxkKCdleHBlbnNlJylcclxuICAgIGV4cGVuc2VNb2RhbDpFeHBlbnNlTW9kYWxDb21wb25lbnQ7XHJcblxyXG4gICAgb3BlbihzdG9yeUlkKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInlvdSBjbGlja2VkIG9wZW46XCIrc3RvcnlJZCk7XHJcbiAgICAgICAgdGhpcy5leHBlbnNlTW9kYWwub3BlbihzdG9yeUlkKTtcclxuICAgIH0gXHJcbiAgICAgb25Ob3RpZnkoZXg6RXhwZW5zZSk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZXhwZW5zZVN0b3J5U2VydmljZS5sb2FkRXhwZW5zZVN0b3J5U3VtbWFyaWVzKHRoaXMuaXNBY3RpdmVSZXBvcnRzKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
