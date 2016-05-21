System.register(['@angular/core', '@angular/http', 'rxjs/Observable', '../shared/apiurl.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, apiurl_service_1, http_2;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            }],
        execute: function() {
            let LoginService = class LoginService {
                constructor(_apiUrl, _http) {
                    this._apiUrl = _apiUrl;
                    this._http = _http;
                }
                login(payload) {
                    let body = JSON.stringify(payload);
                    let headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    let options = new http_2.RequestOptions({ headers: headers });
                    return this._http.post(this._apiUrl.loginUrl, body, options)
                        .map((response) => response.json())
                        .do(data => console.log("Login:", JSON.stringify(data)))
                        .catch(this.handleError);
                }
                handleError(error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                }
            };
            LoginService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [apiurl_service_1.ApiUrl, http_1.Http])
            ], LoginService);
            exports_1("LoginService", LoginService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBRUksWUFBb0IsT0FBYyxFQUFVLEtBQVU7b0JBQWxDLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUsVUFBSyxHQUFMLEtBQUssQ0FBSztnQkFBSSxDQUFDO2dCQUMzRCxLQUFLLENBQUMsT0FBTztvQkFDVCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xFLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO29CQUUxRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDdkQsR0FBRyxDQUFDLENBQUMsUUFBa0IsS0FBcUIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUM1RCxFQUFFLENBQUMsSUFBSSxJQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDckQsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDNUIsQ0FBQztnQkFDUSxXQUFXLENBQUMsS0FBZTtvQkFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7WUFDTCxDQUFDO1lBbEJEO2dCQUFDLGlCQUFVLEVBQUU7OzRCQUFBO1lBQ2IsdUNBaUJDLENBQUEiLCJmaWxlIjoibG9naW4vbG9naW4uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xyXG5pbXBvcnQge0FwaVVybH0gZnJvbSAnLi4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0hlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtJTG9naW5SZXNwb25zZX0gZnJvbSAnLi9sb2dpblJlc3BvbnNlJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpVXJsOkFwaVVybCwgcHJpdmF0ZSBfaHR0cDpIdHRwKSB7IH1cclxuICAgIGxvZ2luKHBheWxvYWQpOiBPYnNlcnZhYmxlPElMb2dpblJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXlsb2FkKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9hcGlVcmwubG9naW5VcmwsYm9keSwgb3B0aW9ucylcclxuICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJTG9naW5SZXNwb25zZT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLmRvKGRhdGE9PmNvbnNvbGUubG9nKFwiTG9naW46XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuICAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
