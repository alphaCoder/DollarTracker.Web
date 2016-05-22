System.register(['@angular/core', '../shared/api/api.service', '../shared/apiurl.service'], function(exports_1, context_1) {
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
    var core_1, api_service_1, apiurl_service_1;
    var DashboardService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            }],
        execute: function() {
            let DashboardService = class DashboardService {
                constructor(_apiUrl, _apiService) {
                    this._apiUrl = _apiUrl;
                    this._apiService = _apiService;
                }
                getDashboardStats() {
                    return this._apiService.get(this._apiUrl.dashboardStatsUrl);
                }
            };
            DashboardService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [apiurl_service_1.ApiUrl, api_service_1.ApiService])
            ], DashboardService);
            exports_1("DashboardService", DashboardService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUVDLFlBQW9CLE9BQWdCLEVBQVUsV0FBd0I7b0JBQWxELFlBQU8sR0FBUCxPQUFPLENBQVM7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Z0JBQUksQ0FBQztnQkFFakUsaUJBQWlCO29CQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO1lBQ0wsQ0FBQztZQVJEO2dCQUFDLGlCQUFVLEVBQUU7O2dDQUFBO1lBQ2IsK0NBT0MsQ0FBQSIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2FwaS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9zaGFyZWQvYXBpdXJsLnNlcnZpY2UnXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRTZXJ2aWNlIHtcclxuXHJcbiBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGlVcmwgOiBBcGlVcmwsIHByaXZhdGUgX2FwaVNlcnZpY2UgOiBBcGlTZXJ2aWNlKSB7IH1cclxuIFxyXG4gICAgcHVibGljIGdldERhc2hib2FyZFN0YXRzKCkgOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UuZ2V0KHRoaXMuX2FwaVVybC5kYXNoYm9hcmRTdGF0c1VybCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
