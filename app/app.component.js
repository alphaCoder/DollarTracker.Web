System.register(['angular2/core', 'rxjs/Rx', 'angular2/http', 'angular2/router', './login/login.component', './signup/signup.component', './dashboard/dashboard.component', './shared/apiurl.service', './login/login.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, login_component_1, signup_component_1, dashboard_component_1, apiurl_service_1, login_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Dollar Tracker a Expense Management tool';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'dt-app',
                        template: "\n <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav navbar-right'>\n                    <li><a [routerLink]=\"['Login']\">Login</a></li>\n                    <li><a [routerLink]=\"['SignUp']\">Sign Up</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n ",
                        directives: [router_1.RouterOutlet, router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, apiurl_service_1.ApiUrl, login_service_1.LoginService]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: false },
                        { path: '/signup', name: 'SignUp', component: signup_component_1.SignupComponent, useAsDefault: false },
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: false }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map