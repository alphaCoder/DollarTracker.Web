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
                upload(url, payload, file) {
                    return this._uploadService.makeFileRequest(url, [payload], [file]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGkvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFQSxZQUFvQixXQUFzQixFQUFTLElBQVUsRUFBVSxLQUFpQixFQUFVLGNBQTRCO29CQUExRyxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO29CQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWM7Z0JBQUksQ0FBQztnQkFFbkksSUFBSSxDQUFDLEdBQVUsRUFBRSxPQUFXO29CQUN0QixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNyQixDQUFDO29CQUNELElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDYixJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQ25DLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFFQyxHQUFHLENBQUMsR0FBVztvQkFDYixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNyQixDQUFDO29CQUNGLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUNELE1BQU0sQ0FBQyxHQUFVLEVBQUUsT0FBYyxFQUFFLElBQVM7b0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLENBQUM7WUFDSCxDQUFDO1lBNUJEO2dCQUFDLGlCQUFVLEVBQUU7OzBCQUFBO1lBQ2IsbUNBMkJDLENBQUEiLCJmaWxlIjoic2hhcmVkL2FwaS9hcGkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0LCBSZXF1ZXN0T3B0aW9ucywgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXF1ZXN0TWV0aG9kLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Snd0U2VydmljZX0gZnJvbSAnLi4vLi4vand0L2p3dC5zZXJ2aWNlJ1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uLy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge1VwbG9hZFNlcnZpY2V9IGZyb20gJy4uL3VwbG9hZC91cGxvYWQuc2VydmljZSdcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XHJcblxyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9qd3RTZXJ2aWNlOkp3dFNlcnZpY2UscHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIF91c2VyOlVzZXJTZXJ2aWNlLCBwcml2YXRlIF91cGxvYWRTZXJ2aWNlOlVwbG9hZFNlcnZpY2UpIHsgfVxyXG5cclxucG9zdCh1cmw6c3RyaW5nLCBwYXlsb2FkOmFueSkge1xyXG4gICAgICBpZighdGhpcy5fand0U2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXIuY2xlYXIoKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpOyAgICBcclxuICAgICAgaGVhZGVycy5zZXQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdGhpcy5fand0U2VydmljZS5nZXQoKSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAucG9zdCh1cmwsIEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxyXG4gICAgICAge2hlYWRlcnM6IGhlYWRlcnN9KS5tYXAoeD0+eC5qc29uKCkpO1xyXG4gfSBcclxuXHJcbiAgIGdldCh1cmw6IHN0cmluZykgOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgIGlmKCF0aGlzLl9qd3RTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlci5jbGVhcigpO1xyXG4gICAgICB9XHJcbiAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgIGhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRoaXMuX2p3dFNlcnZpY2UuZ2V0KCkpO1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwse2hlYWRlcnM6IGhlYWRlcnN9KS5tYXAoeD0+eC5qc29uKCkpO1xyXG4gIH1cclxuICB1cGxvYWQodXJsOnN0cmluZywgcGF5bG9hZDpzdHJpbmcsIGZpbGU6RmlsZSk6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl91cGxvYWRTZXJ2aWNlLm1ha2VGaWxlUmVxdWVzdCh1cmwsIFtwYXlsb2FkXSwgW2ZpbGVdKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
