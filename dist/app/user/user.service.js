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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBTUksWUFBb0IsV0FBc0IsRUFBVSxPQUFjO29CQUE5QyxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUoxRCxZQUFPLEdBQVUsbUJBQW1CLENBQUE7b0JBQzVDLG9CQUFlLEdBQW9CLElBQUksb0JBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztvQkFDdkUsZ0JBQVcsR0FBbUIsSUFBSSxvQkFBZSxDQUFRLElBQUksQ0FBQyxDQUFDO29CQUN4RCxTQUFJLEdBQVMsSUFBSSxDQUFDO29CQUVyQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJO3dCQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDckIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFDTSxJQUFJO29CQUVSLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUV6RCxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNMLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQyxDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNqQixDQUFDO29CQUNELElBQUksQ0FBQyxDQUFDO3dCQUNILElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDekMsQ0FBQztnQkFDSixDQUFDO2dCQUVNLG1CQUFtQjtvQkFFdEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDekQsRUFBRSxDQUFBLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFDO3dCQUNqQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFTSxHQUFHLENBQUMsYUFBNEI7b0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztnQkFFTSxVQUFVLENBQUMsT0FBYztvQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBRU0sS0FBSztvQkFDUixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pDLGtDQUFrQztnQkFDdEMsQ0FBQztnQkFFTSxNQUFNO29CQUNULElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDTCxDQUFDO1lBOUREO2dCQUFDLGlCQUFVLEVBQUU7OzJCQUFBO1lBQ2IscUNBNkRDLENBQUEiLCJmaWxlIjoidXNlci91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0p3dFNlcnZpY2V9IGZyb20gJy4uL2p3dC9qd3Quc2VydmljZSdcclxuaW1wb3J0IHtJVXNlciwgSUxvZ2luUmVzcG9uc2V9IGZyb20gJy4uL2xvZ2luL2xvZ2luUmVzcG9uc2UnXHJcbmltcG9ydCB7U3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNle1xyXG5cclxuICAgIHByaXZhdGUgdXNlcktleTpzdHJpbmcgPSBcImRvbGxhclRyYWNrZXJVc2VyXCJcclxuICAgIGlzQXV0aGVudGljYXRlZDpTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjdXJyZW50VXNlcjogU3ViamVjdDxJVXNlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElVc2VyPihudWxsKTtcclxuICAgIHB1YmxpYyB1c2VyOklVc2VyID0gbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2p3dFNlcnZpY2U6Snd0U2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOlJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIuc3Vic2NyaWJlKHVzZXIgPT57XHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbml0KCl7XHJcbiAgICAgICAgXHJcbiAgICAgICBsZXQgdXNyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy51c2VyS2V5KTtcclxuICAgICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLl9qd3RTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpO1xyXG5cclxuICAgICAgIGlmKHVzcikge1xyXG4gICAgICAgICAgIGxldCB1c2VyOklVc2VyID0gSlNPTi5wYXJzZSh1c3IpO1xyXG4gICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIubmV4dCh1c2VyKTtcclxuICAgICAgIH1cclxuICAgICAgIGlmKCFpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkLm5leHQoaXNBdXRoZW50aWNhdGVkKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygnbmF2aWdhdGUgdG8gZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkJ10pO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1VzZXJBdXRoZW50aWNhdGVkKCk6Ym9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSB0aGlzLl9qd3RTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpO1xyXG4gICAgICAgIGlmKCFpc0F1dGhlbnRpY2F0ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZChsb2dpblJlc3BvbnNlOklMb2dpblJlc3BvbnNlKXtcclxuICAgICAgIHRoaXMuX2p3dFNlcnZpY2Uuc2V0KGxvZ2luUmVzcG9uc2UudG9rZW4pO1xyXG4gICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQubmV4dCh0cnVlKTtcclxuICAgICAgIHRoaXMuc2V0Q3VycmVudChsb2dpblJlc3BvbnNlLnVzZXIpO1xyXG4gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy51c2VyS2V5LCBKU09OLnN0cmluZ2lmeShsb2dpblJlc3BvbnNlLnVzZXIpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldEN1cnJlbnQobmV3VXNlcjogSVVzZXIpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIubmV4dChuZXdVc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5uZXh0KG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2p3dFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KGZhbHNlKTtcclxuICAgICAgICAvL3RoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ291dCgpe1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
