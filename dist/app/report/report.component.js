System.register(['@angular/core', '../charts/barchartdemo', '../charts/chartdemo', './report.service', '../expense/expense.modal.component'], function(exports_1, context_1) {
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
    var core_1, barchartdemo_1, chartdemo_1, report_service_1, expense_modal_component_1;
    var ReportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            }],
        execute: function() {
            let ReportComponent = class ReportComponent {
                constructor(_reportService) {
                    this._reportService = _reportService;
                    this.colors = ['success', 'info', 'danger', 'warning'];
                    console.log('LOADING REPORT');
                    this.loadReport();
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
                        this.expenseStories = result.data.expenseStorySummaries;
                    }, error => {
                        console.log('ERROR REPORT', JSON.stringify(error));
                    });
                }
            };
            __decorate([
                core_1.ViewChild('expense'), 
                __metadata('design:type', expense_modal_component_1.ExpenseModalComponent)
            ], ReportComponent.prototype, "expenseModal", void 0);
            ReportComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/report/report.component.html',
                    directives: [barchartdemo_1.BarChartDemo, chartdemo_1.ChartDemo, expense_modal_component_1.ExpenseModalComponent]
                }), 
                __metadata('design:paramtypes', [report_service_1.ReportService])
            ], ReportComponent);
            exports_1("ReportComponent", ReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBSUksWUFBb0IsY0FBNkI7b0JBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUYxQyxXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFHckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBR0YsSUFBSSxDQUFDLE9BQU87b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0EsUUFBUSxDQUFDLEVBQVU7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUNELFVBQVU7b0JBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUU7eUJBQ3hCLFNBQVMsQ0FBQyxNQUFNO3dCQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztvQkFDNUQsQ0FBQyxFQUNELEtBQUs7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQXBCRztnQkFBQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7aUVBQUE7WUFaekI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxVQUFVLEVBQUMsQ0FBQywyQkFBWSxFQUFFLHFCQUFTLEVBQUUsK0NBQXFCLENBQUM7aUJBQzlELENBQUM7OytCQUFBO1lBQ0YsNkNBNEJDLENBQUEiLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0JhckNoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2JhcmNoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7Q2hhcnREZW1vfSBmcm9tICcuLi9jaGFydHMvY2hhcnRkZW1vJztcclxuaW1wb3J0IHtSZXBvcnRTZXJ2aWNlfSBmcm9tICcuL3JlcG9ydC5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlTW9kYWxDb21wb25lbnR9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZSc7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U3VtbWFyeSwgRXhwZW5zZVN0b3J5LCBFeHBlbnNlc1N0YXR9IGZyb20gJy4uL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkubW9kZWwnXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltCYXJDaGFydERlbW8sIENoYXJ0RGVtbywgRXhwZW5zZU1vZGFsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBleHBlbnNlU3RvcmllczpPYnNlcnZhYmxlPEFycmF5PEV4cGVuc2VTdG9yeVN1bW1hcnk+PjtcclxuICAgIHB1YmxpYyBjb2xvcnMgPSBbJ3N1Y2Nlc3MnLCAnaW5mbycsICdkYW5nZXInLCAnd2FybmluZyddO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xPQURJTkcgUkVQT1JUJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVwb3J0KCk7ICAgIFxyXG4gICAgIH1cclxuICAgIEBWaWV3Q2hpbGQoJ2V4cGVuc2UnKVxyXG4gICAgZXhwZW5zZU1vZGFsOkV4cGVuc2VNb2RhbENvbXBvbmVudDtcclxuICAgIG9wZW4oc3RvcnlJZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCBvcGVuOlwiK3N0b3J5SWQpO1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZU1vZGFsLm9wZW4oc3RvcnlJZCk7XHJcbiAgICB9IFxyXG4gICAgIG9uTm90aWZ5KGV4OkV4cGVuc2UpOnZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVjZXZpZWQgYnJhbmQgbmV3IGV4cGVuc2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgIHRoaXMubG9hZFJlcG9ydCgpO1xyXG4gICAgfVxyXG4gICAgbG9hZFJlcG9ydCgpe1xyXG4gICAgICAgIHRoaXMuX3JlcG9ydFNlcnZpY2UuZ2V0KClcclxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZVN0b3JpZXMgPSByZXN1bHQuZGF0YS5leHBlbnNlU3RvcnlTdW1tYXJpZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBSRVBPUlQnLCBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
