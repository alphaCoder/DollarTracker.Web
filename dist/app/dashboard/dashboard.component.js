System.register(['@angular/core', '../charts/chartdemo', '../charts/barchartdemo', './dashboard.service', '@angular/router', 'ng2-bs3-modal/ng2-bs3-modal', 'ng2-slim-loading-bar/ng2-slim-loading-bar'], function(exports_1, context_1) {
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
    var core_1, chartdemo_1, barchartdemo_1, dashboard_service_1, router_1, ng2_bs3_modal_1, ng2_slim_loading_bar_1;
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
            },
            function (ng2_slim_loading_bar_1_1) {
                ng2_slim_loading_bar_1 = ng2_slim_loading_bar_1_1;
            }],
        execute: function() {
            let DashboardComponent = class DashboardComponent {
                constructor(_dashboardService, _slimLoader) {
                    this._dashboardService = _dashboardService;
                    this._slimLoader = _slimLoader;
                    this._slimLoader.start();
                    this._dashboardService.getDashboardStats()
                        .subscribe(ds => {
                        this._slimLoader.start();
                        this.dashboardStats = ds.data;
                        this._slimLoader.complete();
                    }, e => {
                        this._slimLoader.complete();
                    });
                    this._slimLoader.complete();
                }
            };
            DashboardComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/dashboard/dashboard.component.html',
                    directives: [chartdemo_1.ChartDemo, barchartdemo_1.BarChartDemo, router_1.ROUTER_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [dashboard_service_1.DashboardService, ng2_slim_loading_bar_1.SlimLoadingBarService])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBR0ksWUFBb0IsaUJBQWtDLEVBQVUsV0FBaUM7b0JBQTdFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBaUI7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO29CQUM3RixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7eUJBQ3pDLFNBQVMsQ0FBQyxFQUFFO3dCQUNULElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEMsQ0FBQyxFQUNELENBQUM7d0JBQ0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztZQUNMLENBQUM7WUFwQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsd0NBQXdDO29CQUNyRCxVQUFVLEVBQUMsQ0FBQyxxQkFBUyxFQUFDLDJCQUFZLEVBQUMsMEJBQWlCLEVBQUMsZ0NBQWdCLENBQUM7aUJBQ3pFLENBQUM7O2tDQUFBO1lBQ0YsbURBZ0JDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2hhcnREZW1vfSBmcm9tICcuLi9jaGFydHMvY2hhcnRkZW1vJztcclxuaW1wb3J0IHtCYXJDaGFydERlbW99IGZyb20gJy4uL2NoYXJ0cy9iYXJjaGFydGRlbW8nO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtEdEJhc2VDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9kdGJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tICcuL2Rhc2hib2FyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeEpzL1J4JztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTU9EQUxfRElSRUNUSVZFUywgTW9kYWxDb21wb25lbnQgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xyXG5pbXBvcnQge1NsaW1Mb2FkaW5nQmFyU2VydmljZX0gZnJvbSAnbmcyLXNsaW0tbG9hZGluZy1iYXIvbmcyLXNsaW0tbG9hZGluZy1iYXInO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbQ2hhcnREZW1vLEJhckNoYXJ0RGVtbyxST1VURVJfRElSRUNUSVZFUyxNT0RBTF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcclxuICAgXHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkU3RhdHM6YW55O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGFzaGJvYXJkU2VydmljZTpEYXNoYm9hcmRTZXJ2aWNlLCBwcml2YXRlIF9zbGltTG9hZGVyOlNsaW1Mb2FkaW5nQmFyU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5zdGFydCgpOyAgICBcclxuICAgICAgICB0aGlzLl9kYXNoYm9hcmRTZXJ2aWNlLmdldERhc2hib2FyZFN0YXRzKClcclxuICAgICAgICAuc3Vic2NyaWJlKGRzPT57XHJcbiAgICAgICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuc3RhcnQoKTsgICBcclxuICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRTdGF0cyA9IGRzLmRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9LCBcclxuICAgICAgICBlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuY29tcGxldGUoKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
