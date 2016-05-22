System.register(['@angular/platform-browser-dynamic', '@angular/common', '@angular/router', '@angular/http', '@angular/core', './app.component', './user/user.service', './shared/apiurl.service', './jwt/jwt.service', './login/login.service', './dashboard/dashboard.service', './shared/api/api.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, common_1, router_1, http_1, core_1, app_component_1, user_service_1, apiurl_service_1, jwt_service_1, login_service_1, dashboard_service_1, api_service_1;
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
                api_service_1.ApiService
            ]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBLG9DQUFTLENBQUMsNEJBQVksRUFBRTtnQkFDcEIseUJBQWdCO2dCQUNoQixxQkFBYztnQkFDZCxjQUFPLENBQUMseUJBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsNkJBQW9CLEVBQUUsQ0FBQztnQkFDN0QsdUJBQU07Z0JBQ04sNEJBQVk7Z0JBQ1osd0JBQVU7Z0JBQ1YsMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQix3QkFBVTthQUNiLENBQUMsQ0FBQyIsImZpbGUiOiJib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7TG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7cHJvdmlkZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSdcclxuaW1wb3J0IHtBcGlVcmx9IGZyb20gJy4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0p3dFNlcnZpY2V9IGZyb20gJy4vand0L2p3dC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSAnLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJ1xyXG5pbXBvcnQge0Rhc2hib2FyZFNlcnZpY2V9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4vc2hhcmVkL2FwaS9hcGkuc2VydmljZSdcclxuXHJcbmJvb3RzdHJhcChBcHBDb21wb25lbnQsIFtcclxuICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICBIVFRQX1BST1ZJREVSUyxcclxuICAgIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwgeyB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSksXHJcbiAgICBBcGlVcmwsIFxyXG4gICAgTG9naW5TZXJ2aWNlLFxyXG4gICAgSnd0U2VydmljZSxcclxuICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgRGFzaGJvYXJkU2VydmljZSxcclxuICAgIEFwaVNlcnZpY2VcclxuXSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
