System.register(['@angular/core', '@angular/router', '../charts/barchartdemo', '../charts/chartdemo', './report.service', '../expense/expense.modal.component', 'ng2-slim-loading-bar/ng2-slim-loading-bar', '../expenseStory/expenseStory.modal.component'], function(exports_1, context_1) {
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
    var core_1, router_1, barchartdemo_1, chartdemo_1, report_service_1, expense_modal_component_1, ng2_slim_loading_bar_1, expenseStory_modal_component_1;
    var ReportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (barchartdemo_1_1) {
                barchartdemo_1 = barchartdemo_1_1;
            },
            function (chartdemo_1_1) {
                chartdemo_1 = chartdemo_1_1;
            },
            function (report_service_1_1) {
                report_service_1 = report_service_1_1;
            },
            function (expense_modal_component_1_1) {
                expense_modal_component_1 = expense_modal_component_1_1;
            },
            function (ng2_slim_loading_bar_1_1) {
                ng2_slim_loading_bar_1 = ng2_slim_loading_bar_1_1;
            },
            function (expenseStory_modal_component_1_1) {
                expenseStory_modal_component_1 = expenseStory_modal_component_1_1;
            }],
        execute: function() {
            let ReportComponent = class ReportComponent {
                constructor(_reportService, _slimLoader) {
                    this._reportService = _reportService;
                    this._slimLoader = _slimLoader;
                    this.colors = ['success', 'info', 'danger', 'warning'];
                    console.log('LOADING REPORT');
                    this._slimLoader.start();
                    this.loadReport();
                    this._slimLoader.stop();
                }
                addExpenseReport() {
                    this.expenseStoryModal.open();
                }
                open(storyId) {
                    console.log("you clicked open:" + storyId);
                    this.expenseModal.open(storyId);
                }
                onNotify(ex) {
                    console.log("recevied brand new expense");
                    console.log(ex);
                    this.loadReport();
                }
                loadReport() {
                    this._reportService.get()
                        .subscribe(result => {
                        this._slimLoader.start();
                        this.expenseStories = result.data.expenseStorySummaries;
                        this._slimLoader.complete();
                    }, error => {
                        console.log('ERROR REPORT', JSON.stringify(error));
                        this._slimLoader.complete();
                    });
                }
            };
            __decorate([
                core_1.ViewChild('expensestorymodal'), 
                __metadata('design:type', expenseStory_modal_component_1.ExpenseStoryModalComponent)
            ], ReportComponent.prototype, "expenseStoryModal", void 0);
            __decorate([
                core_1.ViewChild('expense'), 
                __metadata('design:type', expense_modal_component_1.ExpenseModalComponent)
            ], ReportComponent.prototype, "expenseModal", void 0);
            ReportComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/report/report.component.html',
                    directives: [barchartdemo_1.BarChartDemo, chartdemo_1.ChartDemo, expense_modal_component_1.ExpenseModalComponent, expenseStory_modal_component_1.ExpenseStoryModalComponent, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [report_service_1.ReportService, ng2_slim_loading_bar_1.SlimLoadingBarService])
            ], ReportComponent);
            exports_1("ReportComponent", ReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBSUksWUFBb0IsY0FBNkIsRUFBVSxXQUFpQztvQkFBeEUsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO29CQUZyRixXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFHckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBT0YsZ0JBQWdCO29CQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQztnQkFFRCxJQUFJLENBQUMsT0FBTztvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDQSxRQUFRLENBQUMsRUFBVTtvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO29CQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBQ0QsVUFBVTtvQkFDTixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRTt5QkFDeEIsU0FBUyxDQUFDLE1BQU07d0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO3dCQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQyxDQUFDLEVBQ0QsS0FBSzt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBL0JHO2dCQUFDLGdCQUFTLENBQUMsbUJBQW1CLENBQUM7O3NFQUFBO1lBRy9CO2dCQUFDLGdCQUFTLENBQUMsU0FBUyxDQUFDOztpRUFBQTtZQWpCekI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxVQUFVLEVBQUMsQ0FBQywyQkFBWSxFQUFFLHFCQUFTLEVBQUUsK0NBQXFCLEVBQUUseURBQTBCLEVBQUUsMEJBQWlCLENBQUM7aUJBQzdHLENBQUM7OytCQUFBO1lBQ0YsNkNBeUNDLENBQUEiLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0JhckNoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2JhcmNoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7Q2hhcnREZW1vfSBmcm9tICcuLi9jaGFydHMvY2hhcnRkZW1vJztcclxuaW1wb3J0IHtSZXBvcnRTZXJ2aWNlfSBmcm9tICcuL3JlcG9ydC5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlTW9kYWxDb21wb25lbnR9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZSc7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U3VtbWFyeSwgRXhwZW5zZVN0b3J5LCBFeHBlbnNlc1N0YXR9IGZyb20gJy4uL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkubW9kZWwnXHJcbmltcG9ydCB7U2xpbUxvYWRpbmdCYXJTZXJ2aWNlfSBmcm9tICduZzItc2xpbS1sb2FkaW5nLWJhci9uZzItc2xpbS1sb2FkaW5nLWJhcic7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5TW9kYWxDb21wb25lbnR9IGZyb20gJy4uL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkubW9kYWwuY29tcG9uZW50J1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbQmFyQ2hhcnREZW1vLCBDaGFydERlbW8sIEV4cGVuc2VNb2RhbENvbXBvbmVudCwgRXhwZW5zZVN0b3J5TW9kYWxDb21wb25lbnQsIFJPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBleHBlbnNlU3RvcmllczpPYnNlcnZhYmxlPEFycmF5PEV4cGVuc2VTdG9yeVN1bW1hcnk+PjtcclxuICAgIHB1YmxpYyBjb2xvcnMgPSBbJ3N1Y2Nlc3MnLCAnaW5mbycsICdkYW5nZXInLCAnd2FybmluZyddO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlLCBwcml2YXRlIF9zbGltTG9hZGVyOlNsaW1Mb2FkaW5nQmFyU2VydmljZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMT0FESU5HIFJFUE9SVCcpO1xyXG4gICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLmxvYWRSZXBvcnQoKTsgICAgXHJcbiAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5zdG9wKCk7XHJcbiAgICAgfVxyXG4gICAgQFZpZXdDaGlsZCgnZXhwZW5zZXN0b3J5bW9kYWwnKSBcclxuICAgIGV4cGVuc2VTdG9yeU1vZGFsOiBFeHBlbnNlU3RvcnlNb2RhbENvbXBvbmVudDtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdleHBlbnNlJylcclxuICAgIGV4cGVuc2VNb2RhbDpFeHBlbnNlTW9kYWxDb21wb25lbnQ7XHJcblxyXG4gICAgYWRkRXhwZW5zZVJlcG9ydCgpe1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5TW9kYWwub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oc3RvcnlJZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCBvcGVuOlwiK3N0b3J5SWQpO1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZU1vZGFsLm9wZW4oc3RvcnlJZCk7XHJcbiAgICB9IFxyXG4gICAgIG9uTm90aWZ5KGV4OkV4cGVuc2UpOnZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVjZXZpZWQgYnJhbmQgbmV3IGV4cGVuc2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgIHRoaXMubG9hZFJlcG9ydCgpO1xyXG4gICAgfVxyXG4gICAgbG9hZFJlcG9ydCgpe1xyXG4gICAgICAgIHRoaXMuX3JlcG9ydFNlcnZpY2UuZ2V0KClcclxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5leHBlbnNlU3RvcmllcyA9IHJlc3VsdC5kYXRhLmV4cGVuc2VTdG9yeVN1bW1hcmllcztcclxuICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgUkVQT1JUJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
