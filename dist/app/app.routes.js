System.register(['@angular/router', './dashboard/dashboard.component', './report/report.component', './expenseStory/expenseStoryDetails.component', './login/login.component', './signup/signup.component', './user/authorize.service', './user/profile.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, report_component_1, expenseStoryDetails_component_1, login_component_1, signup_component_1, authorize_service_1, profile_component_1;
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
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'signup', component: signup_component_1.SignupComponent },
                { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [authorize_service_1.Authorize] },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [authorize_service_1.Authorize] },
                { path: 'report/:active', component: report_component_1.ReportComponent, canActivate: [authorize_service_1.Authorize] },
                { path: 'details/:id', component: expenseStoryDetails_component_1.ExpenseStoryDetailsComponent, canActivate: [authorize_service_1.Authorize] },
                { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [authorize_service_1.Authorize] }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQVFhLE1BQU0sRUFVTixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFWcEIsb0JBQUEsTUFBTSxHQUFpQjtnQkFDbEMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQyxnQ0FBYyxFQUFDO2dCQUN4QyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLGtDQUFlLEVBQUM7Z0JBQzFDLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLENBQUMsNkJBQVMsQ0FBQyxFQUFDO2dCQUM5RSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBQztnQkFDN0UsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsV0FBVyxFQUFFLENBQUMsNkJBQVMsQ0FBQyxFQUFDO2dCQUM5RSxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFDLDREQUE0QixFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBQztnQkFDdEYsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxvQ0FBZ0IsRUFBRSxXQUFXLEVBQUMsQ0FBQyw2QkFBUyxDQUFDLEVBQUM7YUFDdEUsQ0FBQSxDQUFDO1lBRVcsa0NBQUEsb0JBQW9CLEdBQUc7Z0JBQ2hDLHNCQUFhLENBQUMsTUFBTSxDQUFDO2FBQ3hCLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWd9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtSZXBvcnRDb21wb25lbnR9IGZyb20gJy4vcmVwb3J0L3JlcG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeURldGFpbHNDb21wb25lbnR9IGZyb20gJy4vZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeURldGFpbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnXHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tICcuL3NpZ251cC9zaWdudXAuY29tcG9uZW50J1xyXG5pbXBvcnQge0F1dGhvcml6ZX0gZnJvbSAgJy4vdXNlci9hdXRob3JpemUuc2VydmljZSdcclxuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tICcuL3VzZXIvcHJvZmlsZS5jb21wb25lbnQnXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlckNvbmZpZyA9IFtcclxuICB7cGF0aDonbG9naW4nLCBjb21wb25lbnQ6TG9naW5Db21wb25lbnR9LFxyXG4gIHtwYXRoOidzaWdudXAnLCBjb21wb25lbnQ6U2lnbnVwQ29tcG9uZW50fSxcclxuICB7cGF0aDonJywgcmVkaXJlY3RUbzonL2Rhc2hib2FyZCcsIHBhdGhNYXRjaDonZnVsbCcsIGNhbkFjdGl2YXRlOiBbQXV0aG9yaXplXX0sXHJcbiAgeyBwYXRoOiAnZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aG9yaXplXX0sXHJcbiAge3BhdGg6ICdyZXBvcnQvOmFjdGl2ZScsIGNvbXBvbmVudDogUmVwb3J0Q29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhvcml6ZV19LFxyXG4gIHtwYXRoOidkZXRhaWxzLzppZCcsIGNvbXBvbmVudDpFeHBlbnNlU3RvcnlEZXRhaWxzQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhvcml6ZV19LFxyXG4gIHtwYXRoOidwcm9maWxlJywgY29tcG9uZW50OlByb2ZpbGVDb21wb25lbnQsIGNhbkFjdGl2YXRlOltBdXRob3JpemVdfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVJfUFJPVklERVJTID0gW1xyXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXHJcbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
