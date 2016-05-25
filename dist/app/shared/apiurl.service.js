System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var ApiUrl;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let ApiUrl = class ApiUrl {
                constructor() {
                    this.baseUrl = "http://dev-dollartracker.azurewebsites.net";
                    this.loginUrl = this.baseUrl + "/api/login";
                    this.signupUrl = this.baseUrl + "/api/register";
                    this.dashboardStatsUrl = this.baseUrl + "/api/dashboardStats";
                    this.report = this.baseUrl + "/api/dashboard";
                }
            };
            ApiUrl = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], ApiUrl);
            exports_1("ApiUrl", ApiUrl);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGl1cmwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUVJO29CQUVRLFlBQU8sR0FBVSw0Q0FBNEMsQ0FBQztvQkFDL0QsYUFBUSxHQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO29CQUM5QyxjQUFTLEdBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7b0JBQ2xELHNCQUFpQixHQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7b0JBQ2hFLFdBQU0sR0FBVSxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO2dCQU52QyxDQUFDO1lBT3JCLENBQUM7WUFWRDtnQkFBQyxpQkFBVSxFQUFFOztzQkFBQTtZQUNiLDJCQVNDLENBQUEiLCJmaWxlIjoic2hhcmVkL2FwaXVybC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBpVXJsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgYmFzZVVybDpzdHJpbmcgPSBcImh0dHA6Ly9kZXYtZG9sbGFydHJhY2tlci5henVyZXdlYnNpdGVzLm5ldFwiO1xyXG4gICAgcHVibGljIGxvZ2luVXJsOnN0cmluZyA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9sb2dpblwiO1xyXG4gICAgcHVibGljIHNpZ251cFVybDpzdHJpbmcgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvcmVnaXN0ZXJcIjtcclxuICAgIHB1YmxpYyBkYXNoYm9hcmRTdGF0c1VybDpzdHJpbmcgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvZGFzaGJvYXJkU3RhdHNcIjtcclxuICAgIHB1YmxpYyByZXBvcnQ6c3RyaW5nID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2Rhc2hib2FyZFwiO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
