System.register(['@angular/core', '../charts/barchartdemo', '../charts/chartdemo', './report.service'], function(exports_1, context_1) {
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
    var core_1, barchartdemo_1, chartdemo_1, report_service_1;
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
            };
            ReportComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/report/report.component.html',
                    directives: [barchartdemo_1.BarChartDemo, chartdemo_1.ChartDemo]
                }), 
                __metadata('design:paramtypes', [report_service_1.ReportService])
            ], ReportComponent);
            exports_1("ReportComponent", ReportComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBR0ksWUFBb0IsY0FBNkI7b0JBQTdCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUQxQyxXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFFckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRTt5QkFDeEIsU0FBUyxDQUFDLE1BQU07d0JBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO29CQUM1RCxDQUFDLEVBQ0QsS0FBSzt3QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7WUFDTixDQUFDO1lBakJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsVUFBVSxFQUFDLENBQUMsMkJBQVksRUFBRSxxQkFBUyxDQUFDO2lCQUN2QyxDQUFDOzsrQkFBQTtZQUNGLDZDQWFDLENBQUEiLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCYXJDaGFydERlbW99IGZyb20gJy4uL2NoYXJ0cy9iYXJjaGFydGRlbW8nO1xyXG5pbXBvcnQge0NoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2NoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7UmVwb3J0U2VydmljZX0gZnJvbSAnLi9yZXBvcnQuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbQmFyQ2hhcnREZW1vLCBDaGFydERlbW9dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRDb21wb25lbnQge1xyXG4gICAgcHVibGljIGV4cGVuc2VTdG9yaWVzOk9ic2VydmFibGU8QXJyYXk8YW55Pj47XHJcbiAgICBwdWJsaWMgY29sb3JzID0gWydzdWNjZXNzJywgJ2luZm8nLCAnZGFuZ2VyJywgJ3dhcm5pbmcnXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlcG9ydFNlcnZpY2U6IFJlcG9ydFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTE9BRElORyBSRVBPUlQnKTtcclxuICAgICAgICB0aGlzLl9yZXBvcnRTZXJ2aWNlLmdldCgpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yaWVzID0gcmVzdWx0LmRhdGEuZXhwZW5zZVN0b3J5U3VtbWFyaWVzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgUkVQT1JUJywgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
