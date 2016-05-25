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
    var ReportService;
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
            let ReportService = class ReportService {
                constructor(_apiUrl, _apiService) {
                    this._apiUrl = _apiUrl;
                    this._apiService = _apiService;
                }
                get() {
                    return this._apiService.get(this._apiUrl.report);
                }
            };
            ReportService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [apiurl_service_1.ApiUrl, api_service_1.ApiService])
            ], ReportService);
            exports_1("ReportService", ReportService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC9yZXBvcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJLFlBQW9CLE9BQWdCLEVBQVUsV0FBd0I7b0JBQWxELFlBQU8sR0FBUCxPQUFPLENBQVM7b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7Z0JBQUksQ0FBQztnQkFFcEUsR0FBRztvQkFFTixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckQsQ0FBQztZQUNMLENBQUM7WUFURDtnQkFBQyxpQkFBVSxFQUFFOzs2QkFBQTtZQUNiLHlDQVFDLENBQUEiLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9hcGkvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FwaVVybH0gZnJvbSAnLi4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVwb3J0U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpVXJsIDogQXBpVXJsLCBwcml2YXRlIF9hcGlTZXJ2aWNlIDogQXBpU2VydmljZSkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldCgpOk9ic2VydmFibGU8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlLmdldCh0aGlzLl9hcGlVcmwucmVwb3J0KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
