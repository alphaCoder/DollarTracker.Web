System.register(['@angular/core', '../charts/chartdemo', '../charts/barchartdemo', './dashboard.service', '@angular/router', 'ng2-bs3-modal/ng2-bs3-modal'], function(exports_1, context_1) {
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
    var core_1, chartdemo_1, barchartdemo_1, dashboard_service_1, router_1, ng2_bs3_modal_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chartdemo_1_1) {
                chartdemo_1 = chartdemo_1_1;
            },
            function (barchartdemo_1_1) {
                barchartdemo_1 = barchartdemo_1_1;
            },
            function (dashboard_service_1_1) {
                dashboard_service_1 = dashboard_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            }],
        execute: function() {
            let DashboardComponent = class DashboardComponent {
                constructor(_dashboardService) {
                    this._dashboardService = _dashboardService;
                    this._dashboardService.getDashboardStats()
                        .subscribe(ds => {
                        console.log('dashboard results');
                        console.log(JSON.stringify(ds));
                        this.dashboardStats = ds.data;
                        console.log('dashboardstats', this.dashboardStats);
                    }, e => {
                        console.log("error occured");
                        console.log(e);
                    });
                }
            };
            DashboardComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/dashboard/dashboard.component.html',
                    directives: [chartdemo_1.ChartDemo, barchartdemo_1.BarChartDemo, router_1.ROUTER_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [dashboard_service_1.DashboardService])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBR0ksWUFBb0IsaUJBQWtDO29CQUFsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO29CQUVsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7eUJBQ3pDLFNBQVMsQ0FBQyxFQUFFO3dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3ZELENBQUMsRUFDRCxDQUFDO3dCQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFHTCxDQUFDO1lBdkJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLHdDQUF3QztvQkFDckQsVUFBVSxFQUFDLENBQUMscUJBQVMsRUFBQywyQkFBWSxFQUFDLDBCQUFpQixFQUFDLGdDQUFnQixDQUFDO2lCQUN6RSxDQUFDOztrQ0FBQTtZQUNGLG1EQW1CQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2NoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7QmFyQ2hhcnREZW1vfSBmcm9tICcuLi9jaGFydHMvYmFyY2hhcnRkZW1vJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7RHRCYXNlQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvZHRiYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSAnLi9kYXNoYm9hcmQuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhKcy9SeCc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1PREFMX0RJUkVDVElWRVMsIE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltDaGFydERlbW8sQmFyQ2hhcnREZW1vLFJPVVRFUl9ESVJFQ1RJVkVTLE1PREFMX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xyXG4gICBcclxuICAgIHB1YmxpYyBkYXNoYm9hcmRTdGF0czphbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXNoYm9hcmRTZXJ2aWNlOkRhc2hib2FyZFNlcnZpY2Upe1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5fZGFzaGJvYXJkU2VydmljZS5nZXREYXNoYm9hcmRTdGF0cygpXHJcbiAgICAgICAgLnN1YnNjcmliZShkcz0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGFzaGJvYXJkIHJlc3VsdHMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZHMpKTtcclxuICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRTdGF0cyA9IGRzLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXNoYm9hcmRzdGF0cycsIHRoaXMuZGFzaGJvYXJkU3RhdHMpO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIG9jY3VyZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICBcclxuICAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
