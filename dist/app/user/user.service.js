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
                    this.user = null;
                    this.currentUser.subscribe(user => {
                        this.user = user;
                    });
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
                    window.location.reload(true); //todo: need to find a better way
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

//# sourceMappingURL=data:application/json;base64,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Q0FBQztnQkFFTSxNQUFNO29CQUNULElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDYixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztvQkFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO1lBQ0wsQ0FBQztZQS9ERDtnQkFBQyxpQkFBVSxFQUFFOzsyQkFBQTtZQUNiLHFDQThEQyxDQUFBIiwiZmlsZSI6InVzZXIvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7SVVzZXIsIElMb2dpblJlc3BvbnNlfSBmcm9tICcuLi9sb2dpbi9sb2dpblJlc3BvbnNlJ1xyXG5pbXBvcnQge1N1YmplY3QsIEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZXtcclxuXHJcbiAgICBwcml2YXRlIHVzZXJLZXk6c3RyaW5nID0gXCJkb2xsYXJUcmFja2VyVXNlclwiXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6U3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY3VycmVudFVzZXI6IFN1YmplY3Q8SVVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJVXNlcj4obnVsbCk7XHJcbiAgICBwdWJsaWMgdXNlcjpJVXNlciA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9qd3RTZXJ2aWNlOkp3dFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLnN1YnNjcmliZSh1c2VyID0+e1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgbGV0IHVzciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudXNlcktleSk7XHJcbiAgICAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5fand0U2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKTtcclxuXHJcbiAgICAgICBpZih1c3IpIHtcclxuICAgICAgICAgICBsZXQgdXNlcjpJVXNlciA9IEpTT04ucGFyc2UodXNyKTtcclxuICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLm5leHQodXNlcik7XHJcbiAgICAgICB9XHJcbiAgICAgICBpZighaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgfVxyXG4gICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRlIHRvIGRhc2hib2FyZCcpO1xyXG4gICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZCddKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNVc2VyQXV0aGVudGljYXRlZCgpOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5fand0U2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKTtcclxuICAgICAgICBpZighaXNBdXRoZW50aWNhdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGQobG9naW5SZXNwb25zZTpJTG9naW5SZXNwb25zZSl7XHJcbiAgICAgICB0aGlzLl9qd3RTZXJ2aWNlLnNldChsb2dpblJlc3BvbnNlLnRva2VuKTtcclxuICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkLm5leHQodHJ1ZSk7XHJcbiAgICAgICB0aGlzLnNldEN1cnJlbnQobG9naW5SZXNwb25zZS51c2VyKTtcclxuICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudXNlcktleSwgSlNPTi5zdHJpbmdpZnkobG9naW5SZXNwb25zZS51c2VyKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXRDdXJyZW50KG5ld1VzZXI6IElVc2VyKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLm5leHQobmV3VXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIubmV4dChudWxsKTtcclxuICAgICAgICB0aGlzLl9qd3RTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQubmV4dChmYWxzZSk7XHJcbiAgICAgICAgLy90aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvdXQoKXtcclxuICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTsgLy90b2RvOiBuZWVkIHRvIGZpbmQgYSBiZXR0ZXIgd2F5XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
