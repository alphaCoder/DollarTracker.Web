System.register(['@angular/platform-browser-dynamic', '@angular/common', '@angular/http', '@angular/core', './app.component', './user/user.service', './shared/apiurl.service', './jwt/jwt.service', './login/login.service', './dashboard/dashboard.service', './shared/api/api.service', './shared/upload/upload.service', './app.routes', './shared/iconmapper/iconmapper.service', './expense/expenseCategories.service', './expense/expense.service', 'ng2-slim-loading-bar/ng2-slim-loading-bar', './expenseStory/expenseStory.service', './user/authorize.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, common_1, http_1, core_1, app_component_1, user_service_1, apiurl_service_1, jwt_service_1, login_service_1, dashboard_service_1, api_service_1, upload_service_1, app_routes_1, iconmapper_service_1, expenseCategories_service_1, expense_service_1, ng2_slim_loading_bar_1, expenseStory_service_1, authorize_service_1;
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
            },
            function (expenseStory_service_1_1) {
                expenseStory_service_1 = expenseStory_service_1_1;
            },
            function (authorize_service_1_1) {
                authorize_service_1 = authorize_service_1_1;
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
                upload_service_1.UploadService,
                iconmapper_service_1.IconMapperService,
                expenseCategories_service_1.ExpenseCategoriesService,
                expense_service_1.ExpenseService,
                ng2_slim_loading_bar_1.SlimLoadingBarService,
                expenseStory_service_1.ExpenseStoryService,
                authorize_service_1.Authorize
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXNCQSxvQ0FBUyxDQUFDLDRCQUFZLEVBQUU7Z0JBQ3BCLGlDQUFvQjtnQkFDcEIscUJBQWM7Z0JBQ2QsdUJBQWM7Z0JBQ2QsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUUsUUFBUSxFQUFFLDZCQUFvQixFQUFFLENBQUM7Z0JBQzdELHdCQUFlO2dCQUNmLHVCQUFNO2dCQUNOLDRCQUFZO2dCQUNaLHdCQUFVO2dCQUNWLDBCQUFXO2dCQUNYLG9DQUFnQjtnQkFDaEIsd0JBQVU7Z0JBQ1YsOEJBQWE7Z0JBQ2Isc0NBQWlCO2dCQUNqQixvREFBd0I7Z0JBQ3hCLGdDQUFjO2dCQUNkLDRDQUFxQjtnQkFDckIsMENBQW1CO2dCQUNuQiw2QkFBUzthQUNaLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7TG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3ksIEZPUk1fUFJPVklERVJTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtwcm92aWRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge0FwaVVybH0gZnJvbSAnLi9zaGFyZWQvYXBpdXJsLnNlcnZpY2UnXHJcbmltcG9ydCB7Snd0U2VydmljZX0gZnJvbSAnLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tICcuL2xvZ2luL2xvZ2luLnNlcnZpY2UnXHJcbmltcG9ydCB7RGFzaGJvYXJkU2VydmljZX0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2UnXHJcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi9zaGFyZWQvYXBpL2FwaS5zZXJ2aWNlJ1xyXG5pbXBvcnQge1VwbG9hZFNlcnZpY2V9IGZyb20gJy4vc2hhcmVkL3VwbG9hZC91cGxvYWQuc2VydmljZSdcclxuaW1wb3J0IHtBUFBfUk9VVEVSX1BST1ZJREVSU30gZnJvbSAnLi9hcHAucm91dGVzJztcclxuaW1wb3J0IHtJY29uTWFwcGVyU2VydmljZX0gZnJvbSAnLi9zaGFyZWQvaWNvbm1hcHBlci9pY29ubWFwcGVyLnNlcnZpY2UnIFxyXG5pbXBvcnQge0V4cGVuc2VDYXRlZ29yaWVzU2VydmljZX0gZnJvbSAnLi9leHBlbnNlL2V4cGVuc2VDYXRlZ29yaWVzLnNlcnZpY2UnXHJcbmltcG9ydCB7RXhwZW5zZVNlcnZpY2V9IGZyb20gJy4vZXhwZW5zZS9leHBlbnNlLnNlcnZpY2UnXHJcbmltcG9ydCB7U2xpbUxvYWRpbmdCYXJTZXJ2aWNlfSBmcm9tICduZzItc2xpbS1sb2FkaW5nLWJhci9uZzItc2xpbS1sb2FkaW5nLWJhcic7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U2VydmljZX0gZnJvbSAnLi9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5LnNlcnZpY2UnO1xyXG5pbXBvcnQge0F1dGhvcml6ZX0gZnJvbSAnLi91c2VyL2F1dGhvcml6ZS5zZXJ2aWNlJztcclxuXHJcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcclxuICAgIEFQUF9ST1VURVJfUFJPVklERVJTLFxyXG4gICAgSFRUUF9QUk9WSURFUlMsXHJcbiAgICBGT1JNX1BST1ZJREVSUyxcclxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSksXHJcbiAgICBGT1JNX0RJUkVDVElWRVMsXHJcbiAgICBBcGlVcmwsIFxyXG4gICAgTG9naW5TZXJ2aWNlLFxyXG4gICAgSnd0U2VydmljZSxcclxuICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgRGFzaGJvYXJkU2VydmljZSxcclxuICAgIEFwaVNlcnZpY2UsXHJcbiAgICBVcGxvYWRTZXJ2aWNlLFxyXG4gICAgSWNvbk1hcHBlclNlcnZpY2UsXHJcbiAgICBFeHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2UsXHJcbiAgICBFeHBlbnNlU2VydmljZSxcclxuICAgIFNsaW1Mb2FkaW5nQmFyU2VydmljZSxcclxuICAgIEV4cGVuc2VTdG9yeVNlcnZpY2UsXHJcbiAgICBBdXRob3JpemVcclxuXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
