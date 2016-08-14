System.register(['@angular/core', '@angular/http', '../../jwt/jwt.service', '../upload/upload.service'], function(exports_1, context_1) {
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
    var core_1, http_1, jwt_service_1, upload_service_1;
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
            function (upload_service_1_1) {
                upload_service_1 = upload_service_1_1;
            }],
        execute: function() {
            let ApiService = class ApiService {
                constructor(_jwtService, http, _uploadService) {
                    this._jwtService = _jwtService;
                    this.http = http;
                    this._uploadService = _uploadService;
                    this.setup();
                }
                setup() {
                    let headers;
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
                __metadata('design:paramtypes', [jwt_service_1.JwtService, http_1.Http, upload_service_1.UploadService])
            ], ApiService);
            exports_1("ApiService", ApiService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGkvYXBpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFQSxZQUFvQixXQUFzQixFQUFTLElBQVUsRUFBVyxjQUE0QjtvQkFBaEYsZ0JBQVcsR0FBWCxXQUFXLENBQVc7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFBVyxtQkFBYyxHQUFkLGNBQWMsQ0FBYztvQkFDbEcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLENBQUM7Z0JBRUQsS0FBSztvQkFDSCxJQUFJLE9BQWUsQ0FBQztvQkFDbEIsT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ2pFLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEdBQVUsRUFBRSxPQUFXO29CQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQ2pDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFFRCxHQUFHLENBQUMsR0FBVztvQkFDWCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQUNELE1BQU0sQ0FBQyxHQUFVLEVBQUUsT0FBYyxFQUFFLElBQVM7b0JBQzFDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFDRCxNQUFNLENBQUMsR0FBVTtvQkFDZixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztZQUNILENBQUM7WUFqQ0Q7Z0JBQUMsaUJBQVUsRUFBRTs7MEJBQUE7WUFDYixtQ0FnQ0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpL2FwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3QsIFJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlcXVlc3RNZXRob2QsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHtVcGxvYWRTZXJ2aWNlfSBmcm9tICcuLi91cGxvYWQvdXBsb2FkLnNlcnZpY2UnXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG5cclxuY29uc3RydWN0b3IocHJpdmF0ZSBfand0U2VydmljZTpKd3RTZXJ2aWNlLHByaXZhdGUgaHR0cDogSHR0cCwgIHByaXZhdGUgX3VwbG9hZFNlcnZpY2U6VXBsb2FkU2VydmljZSkgeyBcclxuICB0aGlzLnNldHVwKCk7XHJcbn1cclxuXHJcbnNldHVwKCl7XHJcbiAgbGV0IGhlYWRlcnM6SGVhZGVycztcclxuICAgIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7ICAgIFxyXG4gICAgaGVhZGVycy5zZXQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdGhpcy5fand0U2VydmljZS5nZXQoKSk7XHJcbiAgICByZXR1cm4gaGVhZGVycztcclxufVxyXG5wb3N0KHVybDpzdHJpbmcsIHBheWxvYWQ6YW55KSB7XHJcbiAgIGxldCBoZWFkZXJzID0gdGhpcy5zZXR1cCgpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5wb3N0KHVybCwgSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgICAgIHtoZWFkZXJzOiBoZWFkZXJzfSkubWFwKHg9PnguanNvbigpKTtcclxuICB9IFxyXG5cclxuICBnZXQodXJsOiBzdHJpbmcpIDogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLnNldHVwKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCx7aGVhZGVyczogaGVhZGVyc30pLm1hcCh4PT54Lmpzb24oKSk7XHJcbiAgfVxyXG4gIHVwbG9hZCh1cmw6c3RyaW5nLCBwYXlsb2FkOnN0cmluZywgZmlsZTpGaWxlKTpPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLnNldHVwKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBsb2FkU2VydmljZS5tYWtlRmlsZVJlcXVlc3QodXJsLCBbcGF5bG9hZF0sIFtmaWxlXSk7XHJcbiAgfVxyXG4gIGRlbGV0ZSh1cmw6c3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuc2V0dXAoKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwge2hlYWRlcnM6aGVhZGVyc30pO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
