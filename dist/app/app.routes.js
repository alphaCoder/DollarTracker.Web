System.register(['@angular/router', './dashboard/dashboard.component', './report/report.component', './expenseStory/expenseStoryDetails.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, report_component_1, expenseStoryDetails_component_1;
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
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                { path: 'report', component: report_component_1.ReportComponent },
                { path: 'details/:id', component: expenseStoryDetails_component_1.ExpenseStoryDetailsComponent }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUthLE1BQU0sRUFPTixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7WUFQcEIsb0JBQUEsTUFBTSxHQUFpQjtnQkFDbEMsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBQztnQkFDcEQsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtnQkFDcEQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO2dCQUM1QyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFDLDREQUE0QixFQUFDO2FBQzdELENBQUEsQ0FBQztZQUVXLGtDQUFBLG9CQUFvQixHQUFHO2dCQUNoQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQzthQUN4QixDQUFBLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tICcuL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtFeHBlbnNlU3RvcnlEZXRhaWxzQ29tcG9uZW50fSBmcm9tICcuL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXHJcbiAge3BhdGg6JycsIHJlZGlyZWN0VG86Jy9kYXNoYm9hcmQnLCBwYXRoTWF0Y2g6J2Z1bGwnfSxcclxuICB7IHBhdGg6ICdkYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9LFxyXG4gIHtwYXRoOiAncmVwb3J0JywgY29tcG9uZW50OiBSZXBvcnRDb21wb25lbnR9LFxyXG4gIHtwYXRoOidkZXRhaWxzLzppZCcsIGNvbXBvbmVudDpFeHBlbnNlU3RvcnlEZXRhaWxzQ29tcG9uZW50fVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVJfUFJPVklERVJTID0gW1xyXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpXHJcbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
