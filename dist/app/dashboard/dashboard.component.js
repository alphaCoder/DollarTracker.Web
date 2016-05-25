System.register(['@angular/core', '../charts/chartdemo', '../charts/barchartdemo', './dashboard.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, chartdemo_1, barchartdemo_1, dashboard_service_1, router_1;
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
                    directives: [chartdemo_1.ChartDemo, barchartdemo_1.BarChartDemo, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [dashboard_service_1.DashboardService])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBRUksWUFBb0IsaUJBQWtDO29CQUFsQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO29CQUVsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7eUJBQ3pDLFNBQVMsQ0FBQyxFQUFFO3dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3ZELENBQUMsRUFDRCxDQUFDO3dCQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDO1lBcEJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLHdDQUF3QztvQkFDckQsVUFBVSxFQUFDLENBQUMscUJBQVMsRUFBQywyQkFBWSxFQUFDLDBCQUFpQixDQUFDO2lCQUN4RCxDQUFDOztrQ0FBQTtZQUNGLG1EQWdCQyxDQUFBIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDaGFydERlbW99IGZyb20gJy4uL2NoYXJ0cy9jaGFydGRlbW8nO1xyXG5pbXBvcnQge0JhckNoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2JhcmNoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0R0QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2R0YmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Rhc2hib2FyZFNlcnZpY2V9IGZyb20gJy4vZGFzaGJvYXJkLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4SnMvUngnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbQ2hhcnREZW1vLEJhckNoYXJ0RGVtbyxST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkU3RhdHM6YW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGFzaGJvYXJkU2VydmljZTpEYXNoYm9hcmRTZXJ2aWNlKXtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuX2Rhc2hib2FyZFNlcnZpY2UuZ2V0RGFzaGJvYXJkU3RhdHMoKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZHM9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rhc2hib2FyZCByZXN1bHRzJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkU3RhdHMgPSBkcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGFzaGJvYXJkc3RhdHMnLCB0aGlzLmRhc2hib2FyZFN0YXRzKTtcclxuICAgICAgICB9LCBcclxuICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBvY2N1cmVkXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
