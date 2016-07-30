System.register(['@angular/core', '@angular/http', '../../jwt/jwt.service', '../../user/user.service', '../upload/upload.service'], function(exports_1, context_1) {
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
    var core_1, http_1, jwt_service_1, user_service_1, upload_service_1;
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
            },
            function (upload_service_1_1) {
                upload_service_1 = upload_service_1_1;
            }],
        execute: function() {
            let ApiService = class ApiService {
                constructor(_jwtService, http, _user, _uploadService) {
                    this._jwtService = _jwtService;
                    this.http = http;
                    this._user = _user;
                    this._uploadService = _uploadService;
                    this.setup();
                }
                setup() {
                    if (!this._jwtService.isAuthenticated()) {
                        this._user.logout();
                    }
                    this.headers = new http_1.Headers();
                    this.headers.set('Content-Type', 'application/json');
                    this.headers.set("Authorization", "Bearer " + this._jwtService.get());
                }
                post(url, payload) {
                    return this.http
                        .post(url, JSON.stringify(payload), { headers: this.headers }).map(x => x.json());
                }
                get(url) {
                    return this.http.get(url, { headers: this.headers }).map(x => x.json());
                }
                upload(url, payload, file) {
                    return this._uploadService.makeFileRequest(url, [payload], [file]);
                }
                delete(url) {
                    return this.http.delete(url, { headers: this.headers });
                }
            };
            ApiService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [jwt_service_1.JwtService, http_1.Http, user_service_1.UserService, upload_service_1.UploadService])
            ], ApiService);
            exports_1("ApiService", ApiService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGkvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFQSxZQUFvQixXQUFzQixFQUFTLElBQVUsRUFBVSxLQUFpQixFQUFVLGNBQTRCO29CQUExRyxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWM7b0JBQzVILElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixDQUFDO2dCQUVELEtBQUs7b0JBQ0QsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztvQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztnQkFDRCxJQUFJLENBQUMsR0FBVSxFQUFFLE9BQVc7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQ2pDLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ2pELENBQUM7Z0JBRUQsR0FBRyxDQUFDLEdBQVc7b0JBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDO2dCQUNELE1BQU0sQ0FBQyxHQUFVLEVBQUUsT0FBYyxFQUFFLElBQVM7b0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLEdBQVU7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztnQkFDdkQsQ0FBQztZQUNILENBQUM7WUE5QkQ7Z0JBQUMsaUJBQVUsRUFBRTs7MEJBQUE7WUFDYixtQ0E2QkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpL2FwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3QsIFJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlcXVlc3RNZXRob2QsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vdXNlci91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7VXBsb2FkU2VydmljZX0gZnJvbSAnLi4vdXBsb2FkL3VwbG9hZC5zZXJ2aWNlJ1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuXHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgX2p3dFNlcnZpY2U6Snd0U2VydmljZSxwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgX3VzZXI6VXNlclNlcnZpY2UsIHByaXZhdGUgX3VwbG9hZFNlcnZpY2U6VXBsb2FkU2VydmljZSkgeyBcclxuICB0aGlzLnNldHVwKCk7XHJcbn1cclxucHJpdmF0ZSBoZWFkZXJzOkhlYWRlcnM7XHJcbnNldHVwKCl7XHJcbiAgICBpZighdGhpcy5fand0U2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXIubG9nb3V0KCk7XHJcbiAgICAgIH1cclxuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICB0aGlzLmhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpOyAgICBcclxuICAgIHRoaXMuaGVhZGVycy5zZXQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdGhpcy5fand0U2VydmljZS5nZXQoKSk7XHJcbn1cclxucG9zdCh1cmw6c3RyaW5nLCBwYXlsb2FkOmFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgICAgIHtoZWFkZXJzOiB0aGlzLmhlYWRlcnN9KS5tYXAoeD0+eC5qc29uKCkpO1xyXG4gIH0gXHJcblxyXG4gIGdldCh1cmw6IHN0cmluZykgOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwse2hlYWRlcnM6IHRoaXMuaGVhZGVyc30pLm1hcCh4PT54Lmpzb24oKSk7XHJcbiAgfVxyXG4gIHVwbG9hZCh1cmw6c3RyaW5nLCBwYXlsb2FkOnN0cmluZywgZmlsZTpGaWxlKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VwbG9hZFNlcnZpY2UubWFrZUZpbGVSZXF1ZXN0KHVybCwgW3BheWxvYWRdLCBbZmlsZV0pO1xyXG4gIH1cclxuICBkZWxldGUodXJsOnN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7aGVhZGVyczp0aGlzLmhlYWRlcnN9KTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
