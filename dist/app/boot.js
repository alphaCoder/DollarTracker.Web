System.register(['@angular/platform-browser-dynamic', '@angular/common', '@angular/router', '@angular/http', '@angular/core', './app.component', './user/user.service', './shared/apiurl.service', './jwt/jwt.service', './login/login.service', './dashboard/dashboard.service', './shared/api/api.service', './report/report.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, common_1, router_1, http_1, core_1, app_component_1, user_service_1, apiurl_service_1, jwt_service_1, login_service_1, dashboard_service_1, api_service_1, report_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
                apiurl_service_1.ApiUrl,
                login_service_1.LoginService,
                jwt_service_1.JwtService,
                user_service_1.UserService,
                dashboard_service_1.DashboardService,
                api_service_1.ApiService,
                report_service_1.ReportService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBLG9DQUFTLENBQUMsNEJBQVksRUFBRTtnQkFDcEIseUJBQWdCO2dCQUNoQixxQkFBYztnQkFDZCxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUUsQ0FBQztnQkFDN0QsdUJBQU07Z0JBQ04sNEJBQVk7Z0JBQ1osd0JBQVU7Z0JBQ1YsMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQix3QkFBVTtnQkFDViw4QkFBYTthQUNoQixDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEhhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge3Byb3ZpZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vdXNlci91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7QXBpVXJsfSBmcm9tICcuL3NoYXJlZC9hcGl1cmwuc2VydmljZSdcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuL2p3dC9qd3Quc2VydmljZSdcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gJy4vbG9naW4vbG9naW4uc2VydmljZSdcclxuaW1wb3J0IHtEYXNoYm9hcmRTZXJ2aWNlfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2VydmljZSdcclxuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuL3NoYXJlZC9hcGkvYXBpLnNlcnZpY2UnXHJcbmltcG9ydCB7UmVwb3J0U2VydmljZX0gZnJvbSAnLi9yZXBvcnQvcmVwb3J0LnNlcnZpY2UnXHJcblxyXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXHJcbiAgICBST1VURVJfUFJPVklERVJTLFxyXG4gICAgSFRUUF9QUk9WSURFUlMsXHJcbiAgICBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHsgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5IH0pLFxyXG4gICAgQXBpVXJsLCBcclxuICAgIExvZ2luU2VydmljZSxcclxuICAgIEp3dFNlcnZpY2UsXHJcbiAgICBVc2VyU2VydmljZSxcclxuICAgIERhc2hib2FyZFNlcnZpY2UsXHJcbiAgICBBcGlTZXJ2aWNlLFxyXG4gICAgUmVwb3J0U2VydmljZVxyXG5dKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
