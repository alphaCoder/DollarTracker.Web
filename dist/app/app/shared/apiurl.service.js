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
            ApiUrl = (function () {
                function ApiUrl() {
                    this.baseUrl = "http://dev-dollartracker.azurewebsites.net";
                    this.loginUrl = this.baseUrl + "/api/login";
                    this.signupUrl = this.baseUrl + "/api/register";
                }
                ApiUrl = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ApiUrl);
                return ApiUrl;
            }());
            exports_1("ApiUrl", ApiUrl);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXBpdXJsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQTtnQkFFSTtvQkFFUSxZQUFPLEdBQVUsNENBQTRDLENBQUM7b0JBQy9ELGFBQVEsR0FBVSxJQUFJLENBQUMsT0FBTyxHQUFDLFlBQVksQ0FBQztvQkFDNUMsY0FBUyxHQUFVLElBQUksQ0FBQyxPQUFPLEdBQUMsZUFBZSxDQUFDO2dCQUp2QyxDQUFDO2dCQUhyQjtvQkFBQyxpQkFBVSxFQUFFOzswQkFBQTtnQkFRYixhQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCwyQkFPQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvYXBpdXJsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlVcmwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlVXJsOnN0cmluZyA9IFwiaHR0cDovL2Rldi1kb2xsYXJ0cmFja2VyLmF6dXJld2Vic2l0ZXMubmV0XCI7XHJcbiAgICBwdWJsaWMgbG9naW5Vcmw6c3RyaW5nID0gdGhpcy5iYXNlVXJsK1wiL2FwaS9sb2dpblwiO1xyXG4gICAgcHVibGljIHNpZ251cFVybDpzdHJpbmcgPSB0aGlzLmJhc2VVcmwrXCIvYXBpL3JlZ2lzdGVyXCI7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
