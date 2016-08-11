System.register(['@angular/core', '../charts/chartdemo', '../charts/barchartdemo', './dashboard.service', '@angular/router', 'ng2-bs3-modal/ng2-bs3-modal', 'ng2-slim-loading-bar/ng2-slim-loading-bar', "../shared/notifications/notifications.service"], function(exports_1, context_1) {
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
    var core_1, chartdemo_1, barchartdemo_1, dashboard_service_1, router_1, ng2_bs3_modal_1, ng2_slim_loading_bar_1, notifications_service_1;
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
            },
            function (notifications_service_1_1) {
                notifications_service_1 = notifications_service_1_1;
            }],
        execute: function() {
            let DashboardComponent = class DashboardComponent {
                constructor(_dashboardService, _slimLoader, _notificationService) {
                    this._dashboardService = _dashboardService;
                    this._slimLoader = _slimLoader;
                    this._notificationService = _notificationService;
                }
                ngOnInit() {
                    console.log("DASHBOARD NGONINIT");
                    this._slimLoader.start();
                    this._dashboardService.getDashboardStats()
                        .subscribe(ds => {
                        this._slimLoader.start();
                        this.dashboardStats = ds.data;
                        this._notificationService.setMessageCount(ds.data.newNotificationsCount);
                        this._slimLoader.complete();
                    }, e => {
                        this._slimLoader.complete();
                    }, () => { });
                    this._slimLoader.complete();
                }
            };
            DashboardComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/dashboard/dashboard.component.html',
                    directives: [chartdemo_1.ChartDemo, barchartdemo_1.BarChartDemo, router_1.ROUTER_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [dashboard_service_1.DashboardService, ng2_slim_loading_bar_1.SlimLoadingBarService, notifications_service_1.NotificationsService])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUdJLFlBQW9CLGlCQUFrQyxFQUFVLFdBQWlDLEVBQ3pGLG9CQUF5QztvQkFEN0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFpQjtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7b0JBQ3pGLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7Z0JBRWpELENBQUM7Z0JBQ0QsUUFBUTtvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTt5QkFDckMsU0FBUyxDQUFDLEVBQUU7d0JBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUM5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzt3QkFDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDcEMsQ0FBQyxFQUNELENBQUM7d0JBQ0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEMsQ0FBQyxFQUNELFFBQUssQ0FBQyxDQUNMLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztZQUNMLENBQUM7WUE1QkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsd0NBQXdDO29CQUNyRCxVQUFVLEVBQUMsQ0FBQyxxQkFBUyxFQUFDLDJCQUFZLEVBQUMsMEJBQWlCLEVBQUMsZ0NBQWdCLENBQUM7aUJBQ3pFLENBQUM7O2tDQUFBO1lBQ0YsbURBd0JDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q2hhcnREZW1vfSBmcm9tICcuLi9jaGFydHMvY2hhcnRkZW1vJztcclxuaW1wb3J0IHtCYXJDaGFydERlbW99IGZyb20gJy4uL2NoYXJ0cy9iYXJjaGFydGRlbW8nO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtEdEJhc2VDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9kdGJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tICcuL2Rhc2hib2FyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeEpzL1J4JztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTU9EQUxfRElSRUNUSVZFUywgTW9kYWxDb21wb25lbnQgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xyXG5pbXBvcnQge1NsaW1Mb2FkaW5nQmFyU2VydmljZX0gZnJvbSAnbmcyLXNsaW0tbG9hZGluZy1iYXIvbmcyLXNsaW0tbG9hZGluZy1iYXInO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gXCIuLi9leHBlbnNlL2V4cGVuc2VcIlxyXG5pbXBvcnQge05vdGlmaWNhdGlvbnNTZXJ2aWNlfSBmcm9tIFwiLi4vc2hhcmVkL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltDaGFydERlbW8sQmFyQ2hhcnREZW1vLFJPVVRFUl9ESVJFQ1RJVkVTLE1PREFMX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xyXG4gICBcclxuICAgIHB1YmxpYyBkYXNoYm9hcmRTdGF0czphbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXNoYm9hcmRTZXJ2aWNlOkRhc2hib2FyZFNlcnZpY2UsIHByaXZhdGUgX3NsaW1Mb2FkZXI6U2xpbUxvYWRpbmdCYXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uU2VydmljZTpOb3RpZmljYXRpb25zU2VydmljZVxyXG4gICAgKXtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEQVNIQk9BUkQgTkdPTklOSVRcIik7XHJcbiAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5zdGFydCgpOyAgICBcclxuICAgICAgICB0aGlzLl9kYXNoYm9hcmRTZXJ2aWNlLmdldERhc2hib2FyZFN0YXRzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkcz0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5zdGFydCgpOyAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRTdGF0cyA9IGRzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3RpZmljYXRpb25TZXJ2aWNlLnNldE1lc3NhZ2VDb3VudChkcy5kYXRhLm5ld05vdGlmaWNhdGlvbnNDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zbGltTG9hZGVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpPT57fVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
