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
                    let headers;
                    if (!this._jwtService.isAuthenticated()) {
                        this._user.logout();
                    }
                    headers = new http_1.Headers();
                    headers.set('Content-Type', 'application/json');
                    headers.set("Authorization", "Bearer " + this._jwtService.get());
                    return headers;
                }
                post(url, payload) {
                    let headers = this.setup();
                    return this.http
                        .post(url, JSON.stringify(payload), { headers: headers }).map(x => x.json());
                }
                get(url) {
                    let headers = this.setup();
                    return this.http.get(url, { headers: headers }).map(x => x.json());
                }
                upload(url, payload, file) {
                    let headers = this.setup();
                    return this._uploadService.makeFileRequest(url, [payload], [file]);
                }
                delete(url) {
                    let headers = this.setup();
                    return this.http.delete(url, { headers: headers });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGkvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFQSxZQUFvQixXQUFzQixFQUFTLElBQVUsRUFBVSxLQUFpQixFQUFVLGNBQTRCO29CQUExRyxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWM7b0JBQzVILElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixDQUFDO2dCQUVELEtBQUs7b0JBQ0gsSUFBSSxPQUFlLENBQUM7b0JBQ2xCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3RCLENBQUM7b0JBQ0gsT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ2pFLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEdBQVUsRUFBRSxPQUFXO29CQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQ2pDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFFRCxHQUFHLENBQUMsR0FBVztvQkFDWCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUNELE1BQU0sQ0FBQyxHQUFVLEVBQUUsT0FBYyxFQUFFLElBQVM7b0JBQzFDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFDRCxNQUFNLENBQUMsR0FBVTtvQkFDZixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztZQUNILENBQUM7WUFwQ0Q7Z0JBQUMsaUJBQVUsRUFBRTs7MEJBQUE7WUFDYixtQ0FtQ0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpL2FwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3QsIFJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlcXVlc3RNZXRob2QsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vdXNlci91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7VXBsb2FkU2VydmljZX0gZnJvbSAnLi4vdXBsb2FkL3VwbG9hZC5zZXJ2aWNlJ1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuXHJcbmNvbnN0cnVjdG9yKHByaXZhdGUgX2p3dFNlcnZpY2U6Snd0U2VydmljZSxwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgX3VzZXI6VXNlclNlcnZpY2UsIHByaXZhdGUgX3VwbG9hZFNlcnZpY2U6VXBsb2FkU2VydmljZSkgeyBcclxuICB0aGlzLnNldHVwKCk7XHJcbn1cclxuXHJcbnNldHVwKCl7XHJcbiAgbGV0IGhlYWRlcnM6SGVhZGVycztcclxuICAgIGlmKCF0aGlzLl9qd3RTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlci5sb2dvdXQoKTtcclxuICAgICAgfVxyXG4gICAgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTsgICAgXHJcbiAgICBoZWFkZXJzLnNldChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0aGlzLl9qd3RTZXJ2aWNlLmdldCgpKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG59XHJcbnBvc3QodXJsOnN0cmluZywgcGF5bG9hZDphbnkpIHtcclxuICAgbGV0IGhlYWRlcnMgPSB0aGlzLnNldHVwKCk7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgLnBvc3QodXJsLCBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcclxuICAgICAgICAge2hlYWRlcnM6IGhlYWRlcnN9KS5tYXAoeD0+eC5qc29uKCkpO1xyXG4gIH0gXHJcblxyXG4gIGdldCh1cmw6IHN0cmluZykgOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICBsZXQgaGVhZGVycyA9IHRoaXMuc2V0dXAoKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLHtoZWFkZXJzOiBoZWFkZXJzfSkubWFwKHg9PnguanNvbigpKTtcclxuICB9XHJcbiAgdXBsb2FkKHVybDpzdHJpbmcsIHBheWxvYWQ6c3RyaW5nLCBmaWxlOkZpbGUpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuc2V0dXAoKTtcclxuICAgIHJldHVybiB0aGlzLl91cGxvYWRTZXJ2aWNlLm1ha2VGaWxlUmVxdWVzdCh1cmwsIFtwYXlsb2FkXSwgW2ZpbGVdKTtcclxuICB9XHJcbiAgZGVsZXRlKHVybDpzdHJpbmcpIHtcclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5zZXR1cCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7aGVhZGVyczpoZWFkZXJzfSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
