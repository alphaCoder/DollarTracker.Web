System.register(['@angular/router', './dashboard/dashboard.component', './report/report.component', './expenseStory/expenseStoryDetails.component', './login/login.component', './user/authorize.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, report_component_1, expenseStoryDetails_component_1, login_component_1, authorize_service_1;
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
            function (authorize_service_1_1) {
                authorize_service_1 = authorize_service_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: 'login', component: login_component_1.LoginComponent },
                { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [authorize_service_1.Authorize] },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [authorize_service_1.Authorize] },
                { path: 'report', component: report_component_1.ReportComponent, canActivate: [authorize_service_1.Authorize] },
                { path: 'details/:id', component: expenseStoryDetails_component_1.ExpenseStoryDetailsComponent, canActivate: [authorize_service_1.Authorize] }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU1hLE1BQU0sRUFRTixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFScEIsb0JBQUEsTUFBTSxHQUFpQjtnQkFDbEMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQyxnQ0FBYyxFQUFDO2dCQUN4QyxFQUFDLElBQUksRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFDLFlBQVksRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBQztnQkFDOUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRSxXQUFXLEVBQUUsQ0FBQyw2QkFBUyxDQUFDLEVBQUM7Z0JBQzdFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRSxXQUFXLEVBQUUsQ0FBQyw2QkFBUyxDQUFDLEVBQUM7Z0JBQ3RFLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUMsNERBQTRCLEVBQUUsV0FBVyxFQUFFLENBQUMsNkJBQVMsQ0FBQyxFQUFDO2FBQ3ZGLENBQUEsQ0FBQztZQUVXLGtDQUFBLG9CQUFvQixHQUFHO2dCQUNoQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQzthQUN4QixDQUFBLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tICcuL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtFeHBlbnNlU3RvcnlEZXRhaWxzQ29tcG9uZW50fSBmcm9tICcuL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50J1xyXG5pbXBvcnQge0F1dGhvcml6ZX0gZnJvbSAgJy4vdXNlci9hdXRob3JpemUuc2VydmljZSdcclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xyXG4gIHtwYXRoOidsb2dpbicsIGNvbXBvbmVudDpMb2dpbkNvbXBvbmVudH0sXHJcbiAge3BhdGg6JycsIHJlZGlyZWN0VG86Jy9kYXNoYm9hcmQnLCBwYXRoTWF0Y2g6J2Z1bGwnLCBjYW5BY3RpdmF0ZTogW0F1dGhvcml6ZV19LFxyXG4gIHsgcGF0aDogJ2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhvcml6ZV19LFxyXG4gIHtwYXRoOiAncmVwb3J0JywgY29tcG9uZW50OiBSZXBvcnRDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aG9yaXplXX0sXHJcbiAge3BhdGg6J2RldGFpbHMvOmlkJywgY29tcG9uZW50OkV4cGVuc2VTdG9yeURldGFpbHNDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aG9yaXplXX1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSX1BST1ZJREVSUyA9IFtcclxuICAgIHByb3ZpZGVSb3V0ZXIocm91dGVzKVxyXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
