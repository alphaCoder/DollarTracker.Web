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
    var SignupService;
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
            SignupService = (function () {
                function SignupService(_apiUrl, _http) {
                    this._apiUrl = _apiUrl;
                    this._http = _http;
                }
                SignupService.prototype.signup = function (payload) {
                    var body = JSON.stringify(payload);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this._http.post(this._apiUrl.signupUrl, body, options)
                        .map(function (response) { return response.json(); })
                        .do(function (data) { return console.log("SignUp:", JSON.stringify(data)); })
                        .catch(this.handleError);
                };
                SignupService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                SignupService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [apiurl_service_1.ApiUrl, http_1.Http])
                ], SignupService);
                return SignupService;
            }());
            exports_1("SignupService", SignupService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWdudXAvc2lnbnVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBRUksdUJBQW9CLE9BQWMsRUFBVSxLQUFVO29CQUFsQyxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLFVBQUssR0FBTCxLQUFLLENBQUs7Z0JBQUksQ0FBQztnQkFDM0QsOEJBQU0sR0FBTixVQUFPLE9BQU87b0JBQ1YsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFFMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ3hELEdBQUcsQ0FBQyxVQUFDLFFBQWtCLElBQUssT0FBZ0IsUUFBUSxDQUFDLElBQUksRUFBRSxFQUEvQixDQUErQixDQUFDO3lCQUM1RCxFQUFFLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQTVDLENBQTRDLENBQUM7eUJBQ3RELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQzVCLENBQUM7Z0JBQ1EsbUNBQVcsR0FBbkIsVUFBb0IsS0FBZTtvQkFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBakJMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWtCYixvQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQseUNBaUJDLENBQUEiLCJmaWxlIjoiYXBwL3NpZ251cC9zaWdudXAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xyXG5pbXBvcnQge0FwaVVybH0gZnJvbSAnLi4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0hlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtJTG9naW5SZXNwb25zZX0gZnJvbSAnLi4vbG9naW4vbG9naW5SZXNwb25zZSdcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNpZ251cFNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGlVcmw6QXBpVXJsLCBwcml2YXRlIF9odHRwOkh0dHApIHsgfVxyXG4gICAgc2lnbnVwKHBheWxvYWQpOiBPYnNlcnZhYmxlPElMb2dpblJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwYXlsb2FkKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCh0aGlzLl9hcGlVcmwuc2lnbnVwVXJsLGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiA8SUxvZ2luUmVzcG9uc2U+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC5kbyhkYXRhPT5jb25zb2xlLmxvZyhcIlNpZ25VcDpcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxyXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgfVxyXG4gICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
