System.register(['@angular/core', '../charts/barchartdemo', '../charts/chartdemo', './report.service', '../expense/expense.modal.component', 'ng2-bs3-modal/ng2-bs3-modal'], function(exports_1, context_1) {
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
    var core_1, barchartdemo_1, chartdemo_1, report_service_1, expense_modal_component_1, ng2_bs3_modal_1;
    var ReportComponent, Person;
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
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            }],
        execute: function() {
            let ReportComponent = class ReportComponent {
                constructor(_reportService) {
                    this._reportService = _reportService;
                    this.colors = ['success', 'info', 'danger', 'warning'];
                    this.items = ['item1', 'item2', 'item3'];
                    this.model = new Person();
                    this.index = 0;
                    this.backdropOptions = [true, false, 'static'];
                    this.animation = true;
                    this.keyboard = true;
                    this.backdrop = true;
                    console.log('LOADING REPORT');
                    this._reportService.get()
                        .subscribe(result => {
                        this.expenseStories = result.data.expenseStorySummaries;
                    }, error => {
                        console.log('ERROR REPORT', JSON.stringify(error));
                    });
                }
                closed() {
                    this.output = '(closed) ' + this.selected;
                }
                dismissed() {
                    this.output = '(dismissed)';
                }
                opened() {
                    this.output = '(opened)';
                }
                navigate() {
                }
                open() {
                    this.modal.open();
                }
            };
            __decorate([
                core_1.ViewChild('modal'), 
                __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
            ], ReportComponent.prototype, "modal", void 0);
            ReportComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/report/report.component.html',
                    directives: [barchartdemo_1.BarChartDemo, chartdemo_1.ChartDemo, expense_modal_component_1.ExpenseModalComponent, ng2_bs3_modal_1.MODAL_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [report_service_1.ReportService])
            ], ReportComponent);
            exports_1("ReportComponent", ReportComponent);
            class Person {
            }
            exports_1("Person", Person);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBR0ksWUFBb0IsY0FBNkI7b0JBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUQxQyxXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFjekQsVUFBSyxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFHOUMsVUFBSyxHQUFXLElBQUksTUFBTSxFQUFFLENBQUM7b0JBRTdCLFVBQUssR0FBVyxDQUFDLENBQUM7b0JBQ2xCLG9CQUFlLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUUxQyxjQUFTLEdBQVksSUFBSSxDQUFDO29CQUMxQixhQUFRLEdBQVksSUFBSSxDQUFDO29CQUN6QixhQUFRLEdBQXFCLElBQUksQ0FBQztvQkF0QjlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUU7eUJBQ3hCLFNBQVMsQ0FBQyxNQUFNO3dCQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztvQkFDNUQsQ0FBQyxFQUNELEtBQUs7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQWlCRixNQUFNO29CQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQsU0FBUztvQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxNQUFNO29CQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixDQUFDO2dCQUVELFFBQVE7Z0JBRVIsQ0FBQztnQkFFRCxJQUFJO29CQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7WUFDTCxDQUFDO1lBbENJO2dCQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOzswREFBQTtZQWxCeEI7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxVQUFVLEVBQUMsQ0FBQywyQkFBWSxFQUFFLHFCQUFTLEVBQUUsK0NBQXFCLEVBQUMsZ0NBQWdCLENBQUM7aUJBQy9FLENBQUM7OytCQUFBO1lBQ0YsNkNBZ0RDLENBQUE7WUFDRDtZQUdBLENBQUM7WUFIRCwyQkFHQyxDQUFBIiwiZmlsZSI6InJlcG9ydC9yZXBvcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCYXJDaGFydERlbW99IGZyb20gJy4uL2NoYXJ0cy9iYXJjaGFydGRlbW8nO1xyXG5pbXBvcnQge0NoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2NoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7UmVwb3J0U2VydmljZX0gZnJvbSAnLi9yZXBvcnQuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UubW9kYWwuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltCYXJDaGFydERlbW8sIENoYXJ0RGVtbywgRXhwZW5zZU1vZGFsQ29tcG9uZW50LE1PREFMX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRDb21wb25lbnQge1xyXG4gICAgcHVibGljIGV4cGVuc2VTdG9yaWVzOk9ic2VydmFibGU8QXJyYXk8YW55Pj47XHJcbiAgICBwdWJsaWMgY29sb3JzID0gWydzdWNjZXNzJywgJ2luZm8nLCAnZGFuZ2VyJywgJ3dhcm5pbmcnXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlcG9ydFNlcnZpY2U6IFJlcG9ydFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTE9BRElORyBSRVBPUlQnKTtcclxuICAgICAgICB0aGlzLl9yZXBvcnRTZXJ2aWNlLmdldCgpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yaWVzID0gcmVzdWx0LmRhdGEuZXhwZW5zZVN0b3J5U3VtbWFyaWVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgUkVQT1JUJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbiAgICAgXHJcbiAgICAgQFZpZXdDaGlsZCgnbW9kYWwnKVxyXG4gICAgbW9kYWw6IE1vZGFsQ29tcG9uZW50O1xyXG4gICAgaXRlbXM6IHN0cmluZ1tdID0gWydpdGVtMScsICdpdGVtMicsICdpdGVtMyddO1xyXG4gICAgc2VsZWN0ZWQ6IHN0cmluZztcclxuICAgIG91dHB1dDogc3RyaW5nO1xyXG4gICAgbW9kZWw6IFBlcnNvbiA9IG5ldyBQZXJzb24oKTtcclxuXHJcbiAgICBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIGJhY2tkcm9wT3B0aW9ucyA9IFt0cnVlLCBmYWxzZSwgJ3N0YXRpYyddO1xyXG5cclxuICAgIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBiYWNrZHJvcDogc3RyaW5nIHwgYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgIGNsb3NlZCgpIHtcclxuICAgICAgICB0aGlzLm91dHB1dCA9ICcoY2xvc2VkKSAnICsgdGhpcy5zZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzZWQoKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSAnKGRpc21pc3NlZCknO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5lZCgpIHtcclxuICAgICAgICB0aGlzLm91dHB1dCA9ICcob3BlbmVkKSc7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vcGVuKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBlcnNvbiB7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
