System.register(['@angular/core', '@angular/router', '../charts/barchartdemo', '../charts/chartdemo', './report.service', '../expense/expense.modal.component'], function(exports_1, context_1) {
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
    var core_1, router_1, barchartdemo_1, chartdemo_1, report_service_1, expense_modal_component_1;
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
                    directives: [barchartdemo_1.BarChartDemo, chartdemo_1.ChartDemo, expense_modal_component_1.ExpenseModalComponent, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [report_service_1.ReportService])
            ], ReportComponent);
            exports_1("ReportComponent", ReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBSUksWUFBb0IsY0FBNkI7b0JBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUYxQyxXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFHckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7Z0JBR0YsSUFBSSxDQUFDLE9BQU87b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0EsUUFBUSxDQUFDLEVBQVU7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUNELFVBQVU7b0JBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUU7eUJBQ3hCLFNBQVMsQ0FBQyxNQUFNO3dCQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztvQkFDNUQsQ0FBQyxFQUNELEtBQUs7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQXBCRztnQkFBQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7aUVBQUE7WUFaekI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxVQUFVLEVBQUMsQ0FBQywyQkFBWSxFQUFFLHFCQUFTLEVBQUUsK0NBQXFCLEVBQUUsMEJBQWlCLENBQUM7aUJBQ2pGLENBQUM7OytCQUFBO1lBQ0YsNkNBNEJDLENBQUEiLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0JhckNoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2JhcmNoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7Q2hhcnREZW1vfSBmcm9tICcuLi9jaGFydHMvY2hhcnRkZW1vJztcclxuaW1wb3J0IHtSZXBvcnRTZXJ2aWNlfSBmcm9tICcuL3JlcG9ydC5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlTW9kYWxDb21wb25lbnR9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZSc7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U3VtbWFyeSwgRXhwZW5zZVN0b3J5LCBFeHBlbnNlc1N0YXR9IGZyb20gJy4uL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkubW9kZWwnXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltCYXJDaGFydERlbW8sIENoYXJ0RGVtbywgRXhwZW5zZU1vZGFsQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZXhwZW5zZVN0b3JpZXM6T2JzZXJ2YWJsZTxBcnJheTxFeHBlbnNlU3RvcnlTdW1tYXJ5Pj47XHJcbiAgICBwdWJsaWMgY29sb3JzID0gWydzdWNjZXNzJywgJ2luZm8nLCAnZGFuZ2VyJywgJ3dhcm5pbmcnXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVwb3J0U2VydmljZTogUmVwb3J0U2VydmljZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMT0FESU5HIFJFUE9SVCcpO1xyXG4gICAgICAgIHRoaXMubG9hZFJlcG9ydCgpOyAgICBcclxuICAgICB9XHJcbiAgICBAVmlld0NoaWxkKCdleHBlbnNlJylcclxuICAgIGV4cGVuc2VNb2RhbDpFeHBlbnNlTW9kYWxDb21wb25lbnQ7XHJcbiAgICBvcGVuKHN0b3J5SWQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieW91IGNsaWNrZWQgb3BlbjpcIitzdG9yeUlkKTtcclxuICAgICAgICB0aGlzLmV4cGVuc2VNb2RhbC5vcGVuKHN0b3J5SWQpO1xyXG4gICAgfSBcclxuICAgICBvbk5vdGlmeShleDpFeHBlbnNlKTp2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlY2V2aWVkIGJyYW5kIG5ldyBleHBlbnNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICB0aGlzLmxvYWRSZXBvcnQoKTtcclxuICAgIH1cclxuICAgIGxvYWRSZXBvcnQoKXtcclxuICAgICAgICB0aGlzLl9yZXBvcnRTZXJ2aWNlLmdldCgpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yaWVzID0gcmVzdWx0LmRhdGEuZXhwZW5zZVN0b3J5U3VtbWFyaWVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgUkVQT1JUJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
