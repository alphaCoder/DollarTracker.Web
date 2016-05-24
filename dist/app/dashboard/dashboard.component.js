System.register(['@angular/core', '../charts/chartdemo', '../charts/barchartdemo', '../user/user.service', './dashboard.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, chartdemo_1, barchartdemo_1, user_service_1, dashboard_service_1, router_1;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (dashboard_service_1_1) {
                dashboard_service_1 = dashboard_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let DashboardComponent = class DashboardComponent {
                constructor(_userService, _dashboardService) {
                    this._userService = _userService;
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
                __metadata('design:paramtypes', [user_service_1.UserService, dashboard_service_1.DashboardService])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBRUksWUFBb0IsWUFBd0IsRUFBVSxpQkFBa0M7b0JBQXBFLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBaUI7b0JBRXBGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTt5QkFDekMsU0FBUyxDQUFDLEVBQUU7d0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDdkQsQ0FBQyxFQUNELENBQUM7d0JBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUNMLENBQUM7WUFwQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsd0NBQXdDO29CQUNyRCxVQUFVLEVBQUMsQ0FBQyxxQkFBUyxFQUFDLDJCQUFZLEVBQUMsMEJBQWlCLENBQUM7aUJBQ3hELENBQUM7O2tDQUFBO1lBQ0YsbURBZ0JDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2NoYXJ0ZGVtbyc7XHJcbmltcG9ydCB7QmFyQ2hhcnREZW1vfSBmcm9tICcuLi9jaGFydHMvYmFyY2hhcnRkZW1vJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7Snd0U2VydmljZX0gZnJvbSAnLi4vand0L2p3dC5zZXJ2aWNlJztcclxuaW1wb3J0IHtEdEJhc2VDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9kdGJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0Rhc2hib2FyZFNlcnZpY2V9IGZyb20gJy4vZGFzaGJvYXJkLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4SnMvUngnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbQ2hhcnREZW1vLEJhckNoYXJ0RGVtbyxST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkU3RhdHM6YW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2UsIHByaXZhdGUgX2Rhc2hib2FyZFNlcnZpY2U6RGFzaGJvYXJkU2VydmljZSl7XHJcbiAgICBcclxuICAgICAgICB0aGlzLl9kYXNoYm9hcmRTZXJ2aWNlLmdldERhc2hib2FyZFN0YXRzKClcclxuICAgICAgICAuc3Vic2NyaWJlKGRzPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXNoYm9hcmQgcmVzdWx0cycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkcykpO1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hib2FyZFN0YXRzID0gZHMuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rhc2hib2FyZHN0YXRzJywgdGhpcy5kYXNoYm9hcmRTdGF0cyk7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igb2NjdXJlZFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
