System.register(['@angular/core', '../jwt/jwt.service', 'rxjs/Rx', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, jwt_service_1, Rx_1, router_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let UserService = class UserService {
                constructor(_jwtService, _router) {
                    this._jwtService = _jwtService;
                    this._router = _router;
                    this.userKey = "dollarTrackerUser";
                    this.isAuthenticated = new Rx_1.BehaviorSubject(false);
                    this.currentUser = new Rx_1.BehaviorSubject(null);
                }
                init() {
                    let usr = localStorage.getItem(this.userKey);
                    let isAuthenticated = this._jwtService.isAuthenticated();
                    if (usr) {
                        let user = JSON.parse(usr);
                        this.currentUser.next(user);
                    }
                    if (!isAuthenticated) {
                        this.clear();
                    }
                    else {
                        this.isAuthenticated.next(isAuthenticated);
                        console.log('navigate to dashboard');
                        this._router.navigate(['dashboard']);
                    }
                }
                isUserAuthenticated() {
                    let isAuthenticated = this._jwtService.isAuthenticated();
                    if (!isAuthenticated) {
                        this.clear();
                    }
                    return isAuthenticated;
                }
                add(loginResponse) {
                    this._jwtService.set(loginResponse.token);
                    this.isAuthenticated.next(true);
                    this.setCurrent(loginResponse.user);
                    localStorage.setItem(this.userKey, JSON.stringify(loginResponse.user));
                }
                setCurrent(newUser) {
                    this.currentUser.next(newUser);
                }
                clear() {
                    this.currentUser.next(null);
                    this._jwtService.clear();
                    this.isAuthenticated.next(false);
                    //this._router.navigateByUrl('/');
                }
                logout() {
                    this.clear();
                    this._router.navigate(['login']);
                }
            };
            UserService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [jwt_service_1.JwtService, router_1.Router])
            ], UserService);
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUM7WUEzREQ7Z0JBQUMsaUJBQVUsRUFBRTs7MkJBQUE7WUFDYixxQ0EwREMsQ0FBQSIsImZpbGUiOiJ1c2VyL3VzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Snd0U2VydmljZX0gZnJvbSAnLi4vand0L2p3dC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0lVc2VyLCBJTG9naW5SZXNwb25zZX0gZnJvbSAnLi4vbG9naW4vbG9naW5SZXNwb25zZSdcclxuaW1wb3J0IHtTdWJqZWN0LCBCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2V7XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VyS2V5OnN0cmluZyA9IFwiZG9sbGFyVHJhY2tlclVzZXJcIlxyXG4gICAgaXNBdXRoZW50aWNhdGVkOlN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGN1cnJlbnRVc2VyOiBTdWJqZWN0PElVc2VyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVVzZXI+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2p3dFNlcnZpY2U6Snd0U2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXQoKXtcclxuICAgICAgICBcclxuICAgICAgIGxldCB1c3IgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnVzZXJLZXkpO1xyXG4gICAgICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IHRoaXMuX2p3dFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCk7XHJcblxyXG4gICAgICAgaWYodXNyKSB7XHJcbiAgICAgICAgICAgbGV0IHVzZXI6SVVzZXIgPSBKU09OLnBhcnNlKHVzcik7XHJcbiAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlci5uZXh0KHVzZXIpO1xyXG4gICAgICAgfVxyXG4gICAgICAgaWYoIWlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQubmV4dChpc0F1dGhlbnRpY2F0ZWQpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0ZSB0byBkYXNoYm9hcmQnKTtcclxuICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQnXSk7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVXNlckF1dGhlbnRpY2F0ZWQoKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IHRoaXMuX2p3dFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgICAgICAgaWYoIWlzQXV0aGVudGljYXRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzQXV0aGVudGljYXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGxvZ2luUmVzcG9uc2U6SUxvZ2luUmVzcG9uc2Upe1xyXG4gICAgICAgdGhpcy5fand0U2VydmljZS5zZXQobG9naW5SZXNwb25zZS50b2tlbik7XHJcbiAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICAgdGhpcy5zZXRDdXJyZW50KGxvZ2luUmVzcG9uc2UudXNlcik7XHJcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnVzZXJLZXksIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UudXNlcikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudChuZXdVc2VyOiBJVXNlcik6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5uZXh0KG5ld1VzZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLm5leHQobnVsbCk7XHJcbiAgICAgICAgdGhpcy5fand0U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkLm5leHQoZmFsc2UpO1xyXG4gICAgICAgIC8vdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb3V0KCl7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
