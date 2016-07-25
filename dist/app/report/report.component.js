System.register(['@angular/core', '@angular/router', '../charts/barchartdemo', '../charts/chartdemo', './report.service', '../expense/expense.modal.component', 'ng2-slim-loading-bar/ng2-slim-loading-bar'], function(exports_1, context_1) {
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
    var core_1, router_1, barchartdemo_1, chartdemo_1, report_service_1, expense_modal_component_1, ng2_slim_loading_bar_1;
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
                core_1.ViewChild('expense'), 
                __metadata('design:type', expense_modal_component_1.ExpenseModalComponent)
            ], ReportComponent.prototype, "expenseModal", void 0);
            ReportComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/report/report.component.html',
                    directives: [barchartdemo_1.BarChartDemo, chartdemo_1.ChartDemo, expense_modal_component_1.ExpenseModalComponent, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [report_service_1.ReportService, ng2_slim_loading_bar_1.SlimLoadingBarService])
            ], ReportComponent);
            exports_1("ReportComponent", ReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBSUksWUFBb0IsY0FBNkIsRUFBVSxXQUFpQztvQkFBeEUsbUJBQWMsR0FBZCxjQUFjLENBQWU7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO29CQUZyRixXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFHckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBR0YsSUFBSSxDQUFDLE9BQU87b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0EsUUFBUSxDQUFDLEVBQVU7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUNELFVBQVU7b0JBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUU7eUJBQ3hCLFNBQVMsQ0FBQyxNQUFNO3dCQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQzt3QkFDeEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEMsQ0FBQyxFQUNELEtBQUs7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQXZCRztnQkFBQyxnQkFBUyxDQUFDLFNBQVMsQ0FBQzs7aUVBQUE7WUFkekI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxVQUFVLEVBQUMsQ0FBQywyQkFBWSxFQUFFLHFCQUFTLEVBQUUsK0NBQXFCLEVBQUUsMEJBQWlCLENBQUM7aUJBQ2pGLENBQUM7OytCQUFBO1lBQ0YsNkNBaUNDLENBQUEiLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0JhckNoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2JhcmNoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7Q2hhcnREZW1vfSBmcm9tICcuLi9jaGFydHMvY2hhcnRkZW1vJztcclxuaW1wb3J0IHtSZXBvcnRTZXJ2aWNlfSBmcm9tICcuL3JlcG9ydC5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlTW9kYWxDb21wb25lbnR9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZSc7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U3VtbWFyeSwgRXhwZW5zZVN0b3J5LCBFeHBlbnNlc1N0YXR9IGZyb20gJy4uL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkubW9kZWwnXHJcbmltcG9ydCB7U2xpbUxvYWRpbmdCYXJTZXJ2aWNlfSBmcm9tICduZzItc2xpbS1sb2FkaW5nLWJhci9uZzItc2xpbS1sb2FkaW5nLWJhcic7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltCYXJDaGFydERlbW8sIENoYXJ0RGVtbywgRXhwZW5zZU1vZGFsQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9ydENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZXhwZW5zZVN0b3JpZXM6T2JzZXJ2YWJsZTxBcnJheTxFeHBlbnNlU3RvcnlTdW1tYXJ5Pj47XHJcbiAgICBwdWJsaWMgY29sb3JzID0gWydzdWNjZXNzJywgJ2luZm8nLCAnZGFuZ2VyJywgJ3dhcm5pbmcnXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVwb3J0U2VydmljZTogUmVwb3J0U2VydmljZSwgcHJpdmF0ZSBfc2xpbUxvYWRlcjpTbGltTG9hZGluZ0JhclNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTE9BRElORyBSRVBPUlQnKTtcclxuICAgICAgICB0aGlzLl9zbGltTG9hZGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVwb3J0KCk7ICAgIFxyXG4gICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuc3RvcCgpO1xyXG4gICAgIH1cclxuICAgIEBWaWV3Q2hpbGQoJ2V4cGVuc2UnKVxyXG4gICAgZXhwZW5zZU1vZGFsOkV4cGVuc2VNb2RhbENvbXBvbmVudDtcclxuICAgIG9wZW4oc3RvcnlJZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5b3UgY2xpY2tlZCBvcGVuOlwiK3N0b3J5SWQpO1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZU1vZGFsLm9wZW4oc3RvcnlJZCk7XHJcbiAgICB9IFxyXG4gICAgIG9uTm90aWZ5KGV4OkV4cGVuc2UpOnZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVjZXZpZWQgYnJhbmQgbmV3IGV4cGVuc2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXgpO1xyXG4gICAgICAgIHRoaXMubG9hZFJlcG9ydCgpO1xyXG4gICAgfVxyXG4gICAgbG9hZFJlcG9ydCgpe1xyXG4gICAgICAgIHRoaXMuX3JlcG9ydFNlcnZpY2UuZ2V0KClcclxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5leHBlbnNlU3RvcmllcyA9IHJlc3VsdC5kYXRhLmV4cGVuc2VTdG9yeVN1bW1hcmllcztcclxuICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgUkVQT1JUJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
