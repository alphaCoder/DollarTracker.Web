System.register(['@angular/router', './dashboard/dashboard.component', './report/report.component', './expenseStory/expenseStoryDetails.component', './login/login.component', './signup/signup.component', './user/authorize.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, report_component_1, expenseStoryDetails_component_1, login_component_1, signup_component_1, authorize_service_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (report_component_1_1) {
                report_component_1 = report_component_1_1;
            },
            function (expenseStoryDetails_component_1_1) {
                expenseStoryDetails_component_1 = expenseStoryDetails_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (authorize_service_1_1) {
                authorize_service_1 = authorize_service_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'signup', component: signup_component_1.SignupComponent },
                { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [authorize_service_1.Authorize] },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [authorize_service_1.Authorize] },
                { path: 'report/:active', component: report_component_1.ReportComponent, canActivate: [authorize_service_1.Authorize] },
                { path: 'details/:id', component: expenseStoryDetails_component_1.ExpenseStoryDetailsComponent, canActivate: [authorize_service_1.Authorize] }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU9hLE1BQU0sRUFTTixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFUcEIsb0JBQUEsTUFBTSxHQUFpQjtnQkFDbEMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQyxnQ0FBYyxFQUFDO2dCQUN4QyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLGtDQUFlLEVBQUM7Z0JBQzFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsNkJBQVMsQ0FBQyxFQUFDO2dCQUM5RSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBQztnQkFDN0UsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsV0FBVyxFQUFFLENBQUMsNkJBQVMsQ0FBQyxFQUFDO2dCQUM5RSxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFDLDREQUE0QixFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBQzthQUN2RixDQUFBLENBQUM7WUFFVyxrQ0FBQSxvQkFBb0IsR0FBRztnQkFDaEMsc0JBQWEsQ0FBQyxNQUFNLENBQUM7YUFDeEIsQ0FBQSxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb3ZpZGVSb3V0ZXIsIFJvdXRlckNvbmZpZ30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlcG9ydENvbXBvbmVudH0gZnJvbSAnLi9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5RGV0YWlsc0NvbXBvbmVudH0gZnJvbSAnLi9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5RGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCdcclxuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gJy4vc2lnbnVwL3NpZ251cC5jb21wb25lbnQnXHJcbmltcG9ydCB7QXV0aG9yaXplfSBmcm9tICAnLi91c2VyL2F1dGhvcml6ZS5zZXJ2aWNlJ1xyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXHJcbiAge3BhdGg6J2xvZ2luJywgY29tcG9uZW50OkxvZ2luQ29tcG9uZW50fSxcclxuICB7cGF0aDonc2lnbnVwJywgY29tcG9uZW50OlNpZ251cENvbXBvbmVudH0sXHJcbiAge3BhdGg6JycsIHJlZGlyZWN0VG86Jy9kYXNoYm9hcmQnLCBwYXRoTWF0Y2g6J2Z1bGwnLCBjYW5BY3RpdmF0ZTogW0F1dGhvcml6ZV19LFxyXG4gIHsgcGF0aDogJ2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhvcml6ZV19LFxyXG4gIHtwYXRoOiAncmVwb3J0LzphY3RpdmUnLCBjb21wb25lbnQ6IFJlcG9ydENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRob3JpemVdfSxcclxuICB7cGF0aDonZGV0YWlscy86aWQnLCBjb21wb25lbnQ6RXhwZW5zZVN0b3J5RGV0YWlsc0NvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRob3JpemVdfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVJfUFJPVklERVJTID0gW1xyXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXHJcbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
