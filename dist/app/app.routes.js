System.register(['@angular/router', './dashboard/dashboard.component', './report/report.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, report_component_1;
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
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: 'report', component: report_component_1.ReportComponent }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUlhLE1BQU0sRUFNTixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7WUFOcEIsb0JBQUEsTUFBTSxHQUFpQjtnQkFDbEMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBQztnQkFDcEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtnQkFDcEQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO2FBQzdDLENBQUEsQ0FBQztZQUVXLGtDQUFBLG9CQUFvQixHQUFHO2dCQUNoQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQzthQUN4QixDQUFBLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tICcuL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlckNvbmZpZyA9IFtcclxuICB7cGF0aDonJywgcmVkaXJlY3RUbzonL2Rhc2hib2FyZCcsIHBhdGhNYXRjaDonZnVsbCd9LFxyXG4gIHsgcGF0aDogJ2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH0sXHJcbiAge3BhdGg6ICdyZXBvcnQnLCBjb21wb25lbnQ6IFJlcG9ydENvbXBvbmVudH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSX1BST1ZJREVSUyA9IFtcclxuICAgIHByb3ZpZGVSb3V0ZXIocm91dGVzKVxyXG5dOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
