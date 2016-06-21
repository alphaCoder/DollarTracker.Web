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
                    this._reportService.get()
                        .subscribe(result => {
                        this.expenseStories = result.data.expenseStorySummaries;
                    }, error => {
                        console.log('ERROR REPORT', JSON.stringify(error));
                    });
                }
                open() {
                    console.log("you clicked open");
                    this.expense.open();
                }
            };
            __decorate([
                core_1.ViewChild('expense'), 
                __metadata('design:type', expense_modal_component_1.ExpenseModalComponent)
            ], ReportComponent.prototype, "expense", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBSUksWUFBb0IsY0FBNkI7b0JBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUYxQyxXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFHckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRTt5QkFDeEIsU0FBUyxDQUFDLE1BQU07d0JBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO29CQUM1RCxDQUFDLEVBQ0QsS0FBSzt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBR0YsSUFBSTtvQkFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7WUFFTCxDQUFDO1lBUEk7Z0JBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OzREQUFBO1lBbEIxQjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFVBQVUsRUFBQyxDQUFDLDJCQUFZLEVBQUUscUJBQVMsRUFBRSwrQ0FBcUIsQ0FBQztpQkFDOUQsQ0FBQzs7K0JBQUE7WUFDRiw2Q0FxQkMsQ0FBQSIsImZpbGUiOiJyZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QmFyQ2hhcnREZW1vfSBmcm9tICcuLi9jaGFydHMvYmFyY2hhcnRkZW1vJztcclxuaW1wb3J0IHtDaGFydERlbW99IGZyb20gJy4uL2NoYXJ0cy9jaGFydGRlbW8nO1xyXG5pbXBvcnQge1JlcG9ydFNlcnZpY2V9IGZyb20gJy4vcmVwb3J0LnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge0V4cGVuc2VNb2RhbENvbXBvbmVudH0gZnJvbSAnLi4vZXhwZW5zZS9leHBlbnNlLm1vZGFsLmNvbXBvbmVudCdcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbQmFyQ2hhcnREZW1vLCBDaGFydERlbW8sIEV4cGVuc2VNb2RhbENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZXhwZW5zZVN0b3JpZXM6T2JzZXJ2YWJsZTxBcnJheTxhbnk+PjtcclxuICAgIHB1YmxpYyBjb2xvcnMgPSBbJ3N1Y2Nlc3MnLCAnaW5mbycsICdkYW5nZXInLCAnd2FybmluZyddO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xPQURJTkcgUkVQT1JUJyk7XHJcbiAgICAgICAgdGhpcy5fcmVwb3J0U2VydmljZS5nZXQoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5leHBlbnNlU3RvcmllcyA9IHJlc3VsdC5kYXRhLmV4cGVuc2VTdG9yeVN1bW1hcmllcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIFJFUE9SVCcsIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gICAgIEBWaWV3Q2hpbGQoJ2V4cGVuc2UnKVxyXG4gICAgZXhwZW5zZTpFeHBlbnNlTW9kYWxDb21wb25lbnQ7XHJcbiAgICBvcGVuKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCBvcGVuXCIpO1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZS5vcGVuKCk7XHJcbiAgICB9IFxyXG4gICAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
