System.register(['@angular/core', '@angular/http', '../../jwt/jwt.service', '../../user/user.service'], function(exports_1, context_1) {
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
    var core_1, http_1, jwt_service_1, user_service_1;
    var ApiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let ApiService = class ApiService {
                constructor(_jwtService, http, _user) {
                    this._jwtService = _jwtService;
                    this.http = http;
                    this._user = _user;
                }
                post(url, payload) {
                    if (!this._jwtService.isAuthenticated()) {
                        this._user.clear();
                    }
                    let headers = new http_1.Headers();
                    headers.set('Content-Type', 'application/json');
                    headers.set("Authorization", "Bearer " + this._jwtService.get());
                    return this.http
                        .post(url, JSON.stringify(payload), { headers: headers }).map(x => x.json());
                }
                get(url) {
                    if (!this._jwtService.isAuthenticated()) {
                        this._user.clear();
                    }
                    let headers = new http_1.Headers();
                    headers.set("Authorization", "Bearer " + this._jwtService.get());
                    return this.http.get(url, { headers: headers }).map(x => x.json());
                }
            };
            ApiService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [jwt_service_1.JwtService, http_1.Http, user_service_1.UserService])
            ], ApiService);
            exports_1("ApiService", ApiService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGkvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFQSxZQUFvQixXQUFzQixFQUFTLElBQVUsRUFBVSxLQUFpQjtvQkFBcEUsZ0JBQVcsR0FBWCxXQUFXLENBQVc7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO2dCQUFJLENBQUM7Z0JBRTdGLElBQUksQ0FBQyxHQUFVLEVBQUUsT0FBVztvQkFDdEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDckIsQ0FBQztvQkFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUNuQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzNDLENBQUM7Z0JBRUMsR0FBRyxDQUFDLEdBQVc7b0JBQ2IsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDckIsQ0FBQztvQkFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztZQUNILENBQUM7WUF6QkQ7Z0JBQUMsaUJBQVUsRUFBRTs7MEJBQUE7WUFDYixtQ0F3QkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpL2FwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3QsIFJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlcXVlc3RNZXRob2QsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vdXNlci91c2VyLnNlcnZpY2UnXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG5cclxuY29uc3RydWN0b3IocHJpdmF0ZSBfand0U2VydmljZTpKd3RTZXJ2aWNlLHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBfdXNlcjpVc2VyU2VydmljZSkgeyB9XHJcblxyXG5wb3N0KHVybDpzdHJpbmcsIHBheWxvYWQ6YW55KSB7XHJcbiAgICAgIGlmKCF0aGlzLl9qd3RTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlci5jbGVhcigpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7ICAgIFxyXG4gICAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0aGlzLl9qd3RTZXJ2aWNlLmdldCgpKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgICB7aGVhZGVyczogaGVhZGVyc30pLm1hcCh4PT54Lmpzb24oKSk7XHJcbiB9IFxyXG5cclxuICAgZ2V0KHVybDogc3RyaW5nKSA6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICBpZighdGhpcy5fand0U2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXIuY2xlYXIoKTtcclxuICAgICAgfVxyXG4gICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0aGlzLl9qd3RTZXJ2aWNlLmdldCgpKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLHtoZWFkZXJzOiBoZWFkZXJzfSkubWFwKHg9PnguanNvbigpKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
