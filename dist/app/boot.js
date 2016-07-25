System.register(['@angular/platform-browser-dynamic', '@angular/common', '@angular/http', '@angular/core', './app.component', './user/user.service', './shared/apiurl.service', './jwt/jwt.service', './login/login.service', './dashboard/dashboard.service', './shared/api/api.service', './report/report.service', './shared/upload/upload.service', './app.routes', './shared/iconmapper/iconmapper.service', './expense/expenseCategories.service', './expense/expense.service', 'ng2-slim-loading-bar/ng2-slim-loading-bar'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, common_1, http_1, core_1, app_component_1, user_service_1, apiurl_service_1, jwt_service_1, login_service_1, dashboard_service_1, api_service_1, report_service_1, upload_service_1, app_routes_1, iconmapper_service_1, expenseCategories_service_1, expense_service_1, ng2_slim_loading_bar_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dashboard_service_1_1) {
                dashboard_service_1 = dashboard_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (report_service_1_1) {
                report_service_1 = report_service_1_1;
            },
            function (upload_service_1_1) {
                upload_service_1 = upload_service_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (iconmapper_service_1_1) {
                iconmapper_service_1 = iconmapper_service_1_1;
            },
            function (expenseCategories_service_1_1) {
                expenseCategories_service_1 = expenseCategories_service_1_1;
            },
            function (expense_service_1_1) {
                expense_service_1 = expense_service_1_1;
            },
            function (ng2_slim_loading_bar_1_1) {
                ng2_slim_loading_bar_1 = ng2_slim_loading_bar_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                app_routes_1.APP_ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                common_1.FORM_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
                common_1.FORM_DIRECTIVES,
                apiurl_service_1.ApiUrl,
                login_service_1.LoginService,
                jwt_service_1.JwtService,
                user_service_1.UserService,
                dashboard_service_1.DashboardService,
                api_service_1.ApiService,
                report_service_1.ReportService,
                upload_service_1.UploadService,
                iconmapper_service_1.IconMapperService,
                expenseCategories_service_1.ExpenseCategoriesService,
                expense_service_1.ExpenseService,
                ng2_slim_loading_bar_1.SlimLoadingBarService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQSxvQ0FBUyxDQUFDLDRCQUFZLEVBQUU7Z0JBQ3BCLGlDQUFvQjtnQkFDcEIscUJBQWM7Z0JBQ2QsdUJBQWM7Z0JBQ2QsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUUsUUFBUSxFQUFFLDZCQUFvQixFQUFFLENBQUM7Z0JBQzdELHdCQUFlO2dCQUNmLHVCQUFNO2dCQUNOLDRCQUFZO2dCQUNaLHdCQUFVO2dCQUNWLDBCQUFXO2dCQUNYLG9DQUFnQjtnQkFDaEIsd0JBQVU7Z0JBQ1YsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2Isc0NBQWlCO2dCQUNqQixvREFBd0I7Z0JBQ3hCLGdDQUFjO2dCQUNkLDRDQUFxQjthQUN4QixDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5LCBGT1JNX1BST1ZJREVSUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7cHJvdmlkZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSdcclxuaW1wb3J0IHtBcGlVcmx9IGZyb20gJy4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0p3dFNlcnZpY2V9IGZyb20gJy4vand0L2p3dC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSAnLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJ1xyXG5pbXBvcnQge0Rhc2hib2FyZFNlcnZpY2V9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4vc2hhcmVkL2FwaS9hcGkuc2VydmljZSdcclxuaW1wb3J0IHtSZXBvcnRTZXJ2aWNlfSBmcm9tICcuL3JlcG9ydC9yZXBvcnQuc2VydmljZSdcclxuaW1wb3J0IHtVcGxvYWRTZXJ2aWNlfSBmcm9tICcuL3NoYXJlZC91cGxvYWQvdXBsb2FkLnNlcnZpY2UnXHJcbmltcG9ydCB7QVBQX1JPVVRFUl9QUk9WSURFUlN9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcbmltcG9ydCB7SWNvbk1hcHBlclNlcnZpY2V9IGZyb20gJy4vc2hhcmVkL2ljb25tYXBwZXIvaWNvbm1hcHBlci5zZXJ2aWNlJyBcclxuaW1wb3J0IHtFeHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2V9IGZyb20gJy4vZXhwZW5zZS9leHBlbnNlQ2F0ZWdvcmllcy5zZXJ2aWNlJ1xyXG5pbXBvcnQge0V4cGVuc2VTZXJ2aWNlfSBmcm9tICcuL2V4cGVuc2UvZXhwZW5zZS5zZXJ2aWNlJ1xyXG5pbXBvcnQge1NsaW1Mb2FkaW5nQmFyU2VydmljZX0gZnJvbSAnbmcyLXNsaW0tbG9hZGluZy1iYXIvbmcyLXNsaW0tbG9hZGluZy1iYXInO1xyXG5cclxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1xyXG4gICAgQVBQX1JPVVRFUl9QUk9WSURFUlMsXHJcbiAgICBIVFRQX1BST1ZJREVSUyxcclxuICAgIEZPUk1fUFJPVklERVJTLFxyXG4gICAgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7IHVzZUNsYXNzOiBIYXNoTG9jYXRpb25TdHJhdGVneSB9KSxcclxuICAgIEZPUk1fRElSRUNUSVZFUyxcclxuICAgIEFwaVVybCwgXHJcbiAgICBMb2dpblNlcnZpY2UsXHJcbiAgICBKd3RTZXJ2aWNlLFxyXG4gICAgVXNlclNlcnZpY2UsXHJcbiAgICBEYXNoYm9hcmRTZXJ2aWNlLFxyXG4gICAgQXBpU2VydmljZSxcclxuICAgIFJlcG9ydFNlcnZpY2UsXHJcbiAgICBVcGxvYWRTZXJ2aWNlLFxyXG4gICAgSWNvbk1hcHBlclNlcnZpY2UsXHJcbiAgICBFeHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2UsXHJcbiAgICBFeHBlbnNlU2VydmljZSxcclxuICAgIFNsaW1Mb2FkaW5nQmFyU2VydmljZVxyXG5dKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
