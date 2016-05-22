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
                        this._router.navigateByUrl('/dashboard');
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
                    this._router.navigateByUrl('/');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBTUksWUFBb0IsV0FBc0IsRUFBVSxPQUFjO29CQUE5QyxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUoxRCxZQUFPLEdBQVUsbUJBQW1CLENBQUE7b0JBQzVDLG9CQUFlLEdBQW9CLElBQUksb0JBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztvQkFDdkUsZ0JBQVcsR0FBbUIsSUFBSSxvQkFBZSxDQUFRLElBQUksQ0FBQyxDQUFDO2dCQUcvRCxDQUFDO2dCQUNNLElBQUk7b0JBRVIsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzdDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBRXpELEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ0wsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLENBQUM7b0JBQ0QsRUFBRSxDQUFBLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzdDLENBQUM7Z0JBQ0osQ0FBQztnQkFFTSxHQUFHLENBQUMsYUFBNEI7b0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztnQkFFTSxVQUFVLENBQUMsT0FBYztvQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBRU0sS0FBSztvQkFDUixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQztZQTdDRDtnQkFBQyxpQkFBVSxFQUFFOzsyQkFBQTtZQUNiLHFDQTRDQyxDQUFBIiwiZmlsZSI6InVzZXIvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7SVVzZXIsIElMb2dpblJlc3BvbnNlfSBmcm9tICcuLi9sb2dpbi9sb2dpblJlc3BvbnNlJ1xyXG5pbXBvcnQge1N1YmplY3QsIEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZXtcclxuXHJcbiAgICBwcml2YXRlIHVzZXJLZXk6c3RyaW5nID0gXCJkb2xsYXJUcmFja2VyVXNlclwiXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6U3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY3VycmVudFVzZXI6IFN1YmplY3Q8SVVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJVXNlcj4obnVsbCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfand0U2VydmljZTpKd3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaW5pdCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgbGV0IHVzciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudXNlcktleSk7XHJcbiAgICAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5fand0U2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKTtcclxuXHJcbiAgICAgICBpZih1c3IpIHtcclxuICAgICAgICAgICBsZXQgdXNlcjpJVXNlciA9IEpTT04ucGFyc2UodXNyKTtcclxuICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLm5leHQodXNlcik7XHJcbiAgICAgICB9XHJcbiAgICAgICBpZighaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgfVxyXG4gICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRlIHRvIGRhc2hib2FyZCcpO1xyXG4gICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChsb2dpblJlc3BvbnNlOklMb2dpblJlc3BvbnNlKXtcclxuICAgICAgIHRoaXMuX2p3dFNlcnZpY2Uuc2V0KGxvZ2luUmVzcG9uc2UudG9rZW4pO1xyXG4gICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgIHRoaXMuc2V0Q3VycmVudChsb2dpblJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy51c2VyS2V5LCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLnVzZXIpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldEN1cnJlbnQobmV3VXNlcjogSVVzZXIpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIubmV4dChuZXdVc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5uZXh0KG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2p3dFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KGZhbHNlKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
