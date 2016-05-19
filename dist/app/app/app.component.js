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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRDQTtnQkFHRSxzQkFBbUIsWUFBd0I7b0JBSDdDLGlCQVNDO29CQU5vQixpQkFBWSxHQUFaLFlBQVksQ0FBWTtvQkFGM0MsY0FBUyxHQUFVLGdCQUFnQixDQUFDO29CQUNwQyxvQkFBZSxHQUFXLEtBQUssQ0FBQztvQkFFOUIsWUFBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsVUFBQSxlQUFlO3dCQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUFDO3dCQUNqRCxLQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztvQkFDekMsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQztnQkFwQ0g7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLG9uQkFnQlY7d0JBQ0QsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUMsK0NBQXFCLENBQUM7d0JBQ3BELFNBQVMsRUFBQyxDQUFDLHFCQUFjLEVBQUUseUJBQWdCLEVBQUUsdUJBQU0sRUFBRSw0QkFBWSxFQUFDLHdCQUFVLEVBQUUsMEJBQVcsQ0FBQztxQkFDMUYsQ0FBQztvQkFDRCxlQUFNLENBQUM7d0JBQ04sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO3dCQUN4QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7d0JBQzdDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRyxTQUFTLEVBQUUsa0NBQWUsRUFBRTt3QkFDaEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtxQkFDdEQsQ0FBQzs7Z0NBQUE7Z0JBVUYsbUJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELHVDQVNDLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCxwcm92aWRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSUyxIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSUywgUm91dGVzfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSdcclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnXHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tICcuL3NpZ251cC9zaWdudXAuY29tcG9uZW50J1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCdcclxuXHJcbmltcG9ydCB7QXBpVXJsfSBmcm9tICcuL3NoYXJlZC9hcGl1cmwuc2VydmljZSdcclxuXHJcbmltcG9ydCB7Snd0U2VydmljZX0gZnJvbSAnLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tICcuL2xvZ2luL2xvZ2luLnNlcnZpY2UnXHJcbmltcG9ydCB7UG9zdExvZ2luTmF2Q29tcG9uZW50fSBmcm9tICcuL2xheW91dC9wb3N0TG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQnXHJcbmltcG9ydCB7U3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkdC1hcHAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiA8ZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3M9J25hdmJhciBuYXZiYXItZGVmYXVsdCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lci1mbHVpZCc+XHJcbiAgICAgICAgICAgICAgIDxhIGNsYXNzPSduYXZiYXItYnJhbmQnPnt7cGFnZVRpdGxlfX08L2E+XHJcbiAgICAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0JypuZ0lmPVwiIWlzQXV0aGVudGljYXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy9sb2dpbiddXCI+TG9naW48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycvc2lnbnVwJ11cIj5TaWduIFVwPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHBvc3QtbG9naW4tbmF2ICpuZ0lmPVwiaXNBdXRoZW50aWNhdGVkXCI+PC9wb3N0LWxvZ2luLW5hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuIGAsXHJcbiBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUyxQb3N0TG9naW5OYXZDb21wb25lbnRdLFxyXG4gcHJvdmlkZXJzOltIVFRQX1BST1ZJREVSUywgUk9VVEVSX1BST1ZJREVSUywgQXBpVXJsLCBMb2dpblNlcnZpY2UsSnd0U2VydmljZSwgVXNlclNlcnZpY2VdXHJcbn0pXHJcbkBSb3V0ZXMoW1xyXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sICBcclxuICB7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnL3NpZ251cCcsICBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJy9kYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHBhZ2VUaXRsZTogc3RyaW5nID0nRG9sbGFyIFRyYWNrZXInO1xyXG4gIGlzQXV0aGVudGljYXRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocHVibGljIF91c2VyU2VydmljZTpVc2VyU2VydmljZSl7XHJcbiAgICBfdXNlclNlcnZpY2UuaXNBdXRoZW50aWNhdGVkLnN1YnNjcmliZShpc0F1dGhlbnRpY2F0ZWQ9PntcclxuICAgICAgY29uc29sZS5sb2coJ2lzIGF1dGhlbnRpY2F0ZWQnLCBpc0F1dGhlbnRpY2F0ZWQpO1xyXG4gICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGlzQXV0aGVudGljYXRlZDtcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
