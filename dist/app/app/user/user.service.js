System.register(['@angular/core', '../jwt/jwt.service', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, jwt_service_1, Rx_1;
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
            }],
        execute: function() {
            UserService = (function () {
                function UserService(_jwtService) {
                    this._jwtService = _jwtService;
                    this.userKey = "dollarTrackerUser";
                    this.isAuthenticated = new Rx_1.BehaviorSubject(false);
                    this.currentUser = new Rx_1.BehaviorSubject(null);
                }
                UserService.prototype.init = function () {
                    console.log("userservice 1");
                    var usr = localStorage.getItem(this.userKey);
                    console.log('user', usr);
                    if (usr) {
                        var user = JSON.parse(usr);
                        console.log('parsed user', user);
                        this.currentUser = new Rx_1.BehaviorSubject(user);
                    }
                    else {
                        this.currentUser = new Rx_1.BehaviorSubject(null);
                    }
                    this.isAuthenticated.next(this._jwtService.isAuthenticated());
                };
                UserService.prototype.add = function (loginResponse) {
                    this._jwtService.set(loginResponse.token);
                    this.isAuthenticated.next(true);
                    this.setCurrent(loginResponse.user);
                    localStorage.setItem(this.userKey, JSON.stringify(loginResponse.user));
                };
                UserService.prototype.setCurrent = function (newUser) {
                    this.currentUser.next(newUser);
                };
                UserService.prototype.clear = function () {
                    this.currentUser.next(null);
                    this._jwtService.clear();
                    this.isAuthenticated.next(false);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [jwt_service_1.JwtService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91c2VyL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQU1JLHFCQUFvQixXQUFzQjtvQkFBdEIsZ0JBQVcsR0FBWCxXQUFXLENBQVc7b0JBSmxDLFlBQU8sR0FBVSxtQkFBbUIsQ0FBQTtvQkFDNUMsb0JBQWUsR0FBb0IsSUFBSSxvQkFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO29CQUN2RSxnQkFBVyxHQUFtQixJQUFJLG9CQUFlLENBQVEsSUFBSSxDQUFDLENBQUM7Z0JBRy9ELENBQUM7Z0JBQ00sMEJBQUksR0FBWDtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM5QixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBQ0osSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUUsSUFBSSxvQkFBZSxDQUFRLElBQUksQ0FBQyxDQUFDO29CQUV2RCxDQUFDO29CQUNELElBQUksQ0FBQSxDQUFDO3dCQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxvQkFBZSxDQUFRLElBQUksQ0FBQyxDQUFDO29CQUN4RCxDQUFDO29CQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQTtnQkFDaEUsQ0FBQztnQkFFTSx5QkFBRyxHQUFWLFVBQVcsYUFBNEI7b0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztnQkFFTSxnQ0FBVSxHQUFqQixVQUFrQixPQUFjO29CQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFFTSwyQkFBSyxHQUFaO29CQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkF4Q0w7b0JBQUMsaUJBQVUsRUFBRTs7K0JBQUE7Z0JBeUNiLGtCQUFDO1lBQUQsQ0F4Q0EsQUF3Q0MsSUFBQTtZQXhDRCxxQ0F3Q0MsQ0FBQSIsImZpbGUiOiJhcHAvdXNlci91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0p3dFNlcnZpY2V9IGZyb20gJy4uL2p3dC9qd3Quc2VydmljZSdcclxuaW1wb3J0IHtJVXNlciwgSUxvZ2luUmVzcG9uc2V9IGZyb20gJy4uL2xvZ2luL2xvZ2luUmVzcG9uc2UnXHJcbmltcG9ydCB7U3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNle1xyXG5cclxuICAgIHByaXZhdGUgdXNlcktleTpzdHJpbmcgPSBcImRvbGxhclRyYWNrZXJVc2VyXCJcclxuICAgIGlzQXV0aGVudGljYXRlZDpTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjdXJyZW50VXNlcjogU3ViamVjdDxJVXNlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElVc2VyPihudWxsKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9qd3RTZXJ2aWNlOkp3dFNlcnZpY2UpIHtcclxuICAgIH1cclxuICAgIHB1YmxpYyBpbml0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2Vyc2VydmljZSAxXCIpO1xyXG4gICAgICAgbGV0IHVzciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudXNlcktleSk7XHJcbiAgICAgICBjb25zb2xlLmxvZygndXNlcicsdXNyKTtcclxuICAgICAgIGlmKHVzcil7XHJcbiAgICAgICAgICAgbGV0IHVzZXI6SVVzZXIgPSBKU09OLnBhcnNlKHVzcik7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcnNlZCB1c2VyJywgdXNlcik7XHJcbiAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9bmV3IEJlaGF2aW9yU3ViamVjdDxJVXNlcj4odXNlcik7XHJcbiAgICAgICAgICAgLy90aGlzLmN1cnJlbnRVc2VyLm5leHQodXNlcik7XHJcbiAgICAgICB9XHJcbiAgICAgICBlbHNle1xyXG4gICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElVc2VyPihudWxsKTtcclxuICAgICAgIH1cclxuICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkLm5leHQodGhpcy5fand0U2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGxvZ2luUmVzcG9uc2U6SUxvZ2luUmVzcG9uc2Upe1xyXG4gICAgICAgdGhpcy5fand0U2VydmljZS5zZXQobG9naW5SZXNwb25zZS50b2tlbik7XHJcbiAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICAgdGhpcy5zZXRDdXJyZW50KGxvZ2luUmVzcG9uc2UudXNlcik7XHJcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnVzZXJLZXksIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UudXNlcikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudChuZXdVc2VyOiBJVXNlcik6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5uZXh0KG5ld1VzZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLm5leHQobnVsbCk7XHJcbiAgICAgICAgdGhpcy5fand0U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkLm5leHQoZmFsc2UpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
