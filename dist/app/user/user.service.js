System.register(['@angular/core', '../jwt/jwt.service', 'rxjs/Rx', '@angular/router', '../shared/apiurl.service', '../shared/api/api.service'], function(exports_1, context_1) {
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
    var core_1, jwt_service_1, Rx_1, router_1, apiurl_service_1, api_service_1;
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
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            let UserService = class UserService {
                constructor(_jwtService, _router, _apiUrl, _apiService) {
                    this._jwtService = _jwtService;
                    this._router = _router;
                    this._apiUrl = _apiUrl;
                    this._apiService = _apiService;
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
                    localStorage.setItem(this.userKey, JSON.stringify(newUser));
                    this.currentUser.next(newUser);
                }
                updatePassword(payload) {
                    return this._apiService.post(this._apiUrl.updatePassword, payload);
                }
                updateUser(payload) {
                    return this._apiService
                        .post(this._apiUrl.updateUser, payload)
                        .do(result => {
                        if (result.success) {
                            this.setCurrent(result.data);
                        }
                    });
                }
                clear() {
                    this.user = null;
                    this.currentUser.next(null);
                    this._jwtService.clear();
                    this.isAuthenticated.next(false);
                }
                logout() {
                    this.clear();
                    this._router.navigate(['login']);
                }
            };
            UserService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [jwt_service_1.JwtService, router_1.Router, apiurl_service_1.ApiUrl, api_service_1.ApiService])
            ], UserService);
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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YyxDQUFDLE9BQU87b0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdkUsQ0FBQztnQkFDTSxVQUFVLENBQUMsT0FBTztvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO3lCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDO3lCQUN0QyxFQUFFLENBQUMsTUFBTTt3QkFDTixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsQ0FBQztnQkFFTSxLQUFLO29CQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRU0sTUFBTTtvQkFDVCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO1lBQ0wsQ0FBQztZQTlFRDtnQkFBQyxpQkFBVSxFQUFFOzsyQkFBQTtZQUNiLHFDQTZFQyxDQUFBIiwiZmlsZSI6InVzZXIvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7SVVzZXIsIElMb2dpblJlc3BvbnNlfSBmcm9tICcuLi9sb2dpbi9sb2dpblJlc3BvbnNlJ1xyXG5pbXBvcnQge1N1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9zaGFyZWQvYXBpdXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9hcGkvYXBpLnNlcnZpY2UnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZXtcclxuXHJcbiAgICBwcml2YXRlIHVzZXJLZXk6c3RyaW5nID0gXCJkb2xsYXJUcmFja2VyVXNlclwiXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6U3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY3VycmVudFVzZXI6IFN1YmplY3Q8SVVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJVXNlcj4obnVsbCk7XHJcbiAgICBwdWJsaWMgdXNlcjpJVXNlciA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9qd3RTZXJ2aWNlOkp3dFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX2FwaVVybDpBcGlVcmwsXHJcbiAgICAgcHJpdmF0ZSBfYXBpU2VydmljZTpBcGlTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5zdWJzY3JpYmUodXNlciA9PntcclxuICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIGluaXQoKXtcclxuICAgICAgICBcclxuICAgICAgIGxldCB1c3IgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnVzZXJLZXkpO1xyXG4gICAgICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IHRoaXMuX2p3dFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCk7XHJcblxyXG4gICAgICAgaWYodXNyKSB7XHJcbiAgICAgICAgICAgbGV0IHVzZXI6SVVzZXIgPSBKU09OLnBhcnNlKHVzcik7XHJcbiAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlci5uZXh0KHVzZXIpO1xyXG4gICAgICAgfVxyXG4gICAgICAgaWYoIWlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgIH1cclxuICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQubmV4dChpc0F1dGhlbnRpY2F0ZWQpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0ZSB0byBkYXNoYm9hcmQnKTtcclxuICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQnXSk7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzVXNlckF1dGhlbnRpY2F0ZWQoKTpib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGlzQXV0aGVudGljYXRlZCA9IHRoaXMuX2p3dFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCk7XHJcbiAgICAgICAgaWYoIWlzQXV0aGVudGljYXRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzQXV0aGVudGljYXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKGxvZ2luUmVzcG9uc2U6SUxvZ2luUmVzcG9uc2Upe1xyXG4gICAgICAgdGhpcy5fand0U2VydmljZS5zZXQobG9naW5SZXNwb25zZS50b2tlbik7XHJcbiAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KHRydWUpO1xyXG4gICAgICAgdGhpcy5zZXRDdXJyZW50KGxvZ2luUmVzcG9uc2UudXNlcik7XHJcbiAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnVzZXJLZXksIEpTT04uc3RyaW5naWZ5KGxvZ2luUmVzcG9uc2UudXNlcikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudChuZXdVc2VyOiBJVXNlcik6dm9pZCB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy51c2VyS2V5LCBKU09OLnN0cmluZ2lmeShuZXdVc2VyKSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5uZXh0KG5ld1VzZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVQYXNzd29yZChwYXlsb2FkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UucG9zdCh0aGlzLl9hcGlVcmwudXBkYXRlUGFzc3dvcmQsIHBheWxvYWQpOyBcclxuICAgIH1cclxuICAgIHB1YmxpYyB1cGRhdGVVc2VyKHBheWxvYWQpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZVxyXG4gICAgICAgIC5wb3N0KHRoaXMuX2FwaVVybC51cGRhdGVVc2VyLCBwYXlsb2FkKVxyXG4gICAgICAgIC5kbyhyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXN1bHQuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50KHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5uZXh0KG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2p3dFNlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZC5uZXh0KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb3V0KCl7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
