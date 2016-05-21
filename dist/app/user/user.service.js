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
                    this.isAuthenticated.next(isAuthenticated);
                    if (!isAuthenticated) {
                        this.clear();
                        this._router.navigateByUrl('/login');
                    }
                    else {
                        console.log('navigate to dashboard');
                        this._router.navigate(['dashboard']);
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBTUksWUFBb0IsV0FBc0IsRUFBVSxPQUFjO29CQUE5QyxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUoxRCxZQUFPLEdBQVUsbUJBQW1CLENBQUE7b0JBQzVDLG9CQUFlLEdBQW9CLElBQUksb0JBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztvQkFDdkUsZ0JBQVcsR0FBbUIsSUFBSSxvQkFBZSxDQUFRLElBQUksQ0FBQyxDQUFDO2dCQUcvRCxDQUFDO2dCQUNNLElBQUk7b0JBRVIsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBRXpELEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ0wsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzNDLEVBQUUsQ0FBQSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMzQyxDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxDQUFDO2dCQUNKLENBQUM7Z0JBRU0sR0FBRyxDQUFDLGFBQTRCO29CQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLENBQUM7Z0JBRU0sVUFBVSxDQUFDLE9BQWM7b0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVNLEtBQUs7b0JBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO1lBQ0wsQ0FBQztZQTdDRDtnQkFBQyxpQkFBVSxFQUFFOzsyQkFBQTtZQUNiLHFDQTRDQyxDQUFBIiwiZmlsZSI6InVzZXIvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7SVVzZXIsIElMb2dpblJlc3BvbnNlfSBmcm9tICcuLi9sb2dpbi9sb2dpblJlc3BvbnNlJ1xyXG5pbXBvcnQge1N1YmplY3QsIEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZXtcclxuXHJcbiAgICBwcml2YXRlIHVzZXJLZXk6c3RyaW5nID0gXCJkb2xsYXJUcmFja2VyVXNlclwiXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6U3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY3VycmVudFVzZXI6IFN1YmplY3Q8SVVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJVXNlcj4obnVsbCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfand0U2VydmljZTpKd3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgbGV0IHVzciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudXNlcktleSk7XHJcbiAgICAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5fand0U2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKTtcclxuXHJcbiAgICAgICBpZih1c3IpIHtcclxuICAgICAgICAgICBsZXQgdXNlcjpJVXNlciA9IEpTT04ucGFyc2UodXNyKTtcclxuICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLm5leHQodXNlcik7XHJcbiAgICAgICB9XHJcbiAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgICBpZighaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xyXG4gICAgICAgfVxyXG4gICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRlIHRvIGRhc2hib2FyZCcpO1xyXG4gICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZCddKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGxvZ2luUmVzcG9uc2U6SUxvZ2luUmVzcG9uc2Upe1xyXG4gICAgICAgdGhpcy5fand0U2VydmljZS5zZXQobG9naW5SZXNwb25zZS50b2tlbik7XHJcbiAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICAgdGhpcy5zZXRDdXJyZW50KGxvZ2luUmVzcG9uc2UudXNlcik7XHJcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnVzZXJLZXksIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UudXNlcikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudChuZXdVc2VyOiBJVXNlcik6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5uZXh0KG5ld1VzZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLm5leHQobnVsbCk7XHJcbiAgICAgICAgdGhpcy5fand0U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkLm5leHQoZmFsc2UpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
