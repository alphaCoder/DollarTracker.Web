System.register(['@angular/core', 'rxjs/Rx', '@angular/http', '@angular/router', './user/user.service', './login/login.component', './signup/signup.component', './dashboard/dashboard.component', './shared/apiurl.service', './jwt/jwt.service', './login/login.service', './layout/postLogin/postlogin.nav.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, user_service_1, login_component_1, signup_component_1, dashboard_component_1, apiurl_service_1, jwt_service_1, login_service_1, postlogin_nav_component_1;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
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
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (postlogin_nav_component_1_1) {
                postlogin_nav_component_1 = postlogin_nav_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_userService) {
                    var _this = this;
                    this._userService = _userService;
                    this.pageTitle = 'Dollar Tracker';
                    this.isAuthenticated = false;
                    _userService.isAuthenticated.subscribe(function (isAuthenticated) {
                        console.log('is authenticated', isAuthenticated);
                        _this.isAuthenticated = isAuthenticated;
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'dt-app',
                        template: "\n <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n               <a class='navbar-brand'>{{pageTitle}}</a>\n               <ul class='nav navbar-nav navbar-right'*ngIf=\"!isAuthenticated\">\n                    <li><a [routerLink]=\"['/login']\">Login</a></li>\n                    <li><a [routerLink]=\"['/signup']\">Sign Up</a></li>\n                </ul>\n                <post-login-nav *ngIf=\"isAuthenticated\"></post-login-nav>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n   </div>\n ",
                        directives: [router_1.ROUTER_DIRECTIVES, postlogin_nav_component_1.PostLoginNavComponent],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, apiurl_service_1.ApiUrl, login_service_1.LoginService, jwt_service_1.JwtService, user_service_1.UserService]
                    }),
                    router_1.Routes([
                        { path: '/', component: login_component_1.LoginComponent },
                        { path: '/login', component: login_component_1.LoginComponent },
                        { path: '/signup', component: signup_component_1.SignupComponent },
                        { path: '/dashboard', component: dashboard_component_1.DashboardComponent }
                    ]), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map