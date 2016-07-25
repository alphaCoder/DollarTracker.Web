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
                    this.addOnlyExpense = this.baseUrl + "/api/addOnlyExpense";
                    this.addExpense = this.baseUrl + "/api/addExpense";
                    this.updateOnlyExpense = this.baseUrl + "/api/updateOnlyExpense";
                    this.updateExpense = this.baseUrl + "/api/updateExpense";
                    this.getAllExpenses = this.baseUrl + "/api/expense";
                    this.getAllExpensesByCategory = this.baseUrl + "/api/getAllExpensesByCategory";
                    this.expenseCategory = this.baseUrl + "/api/expenseCategory";
                    this.expenseStorySummary = this.baseUrl + "/api/expenseStorySummary";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGl1cmwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUVJO29CQUVRLFlBQU8sR0FBVSw0Q0FBNEMsQ0FBQztvQkFDL0QsYUFBUSxHQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO29CQUM5QyxjQUFTLEdBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7b0JBQ2xELHNCQUFpQixHQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7b0JBQ2hFLFdBQU0sR0FBVSxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO29CQUNoRCxtQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7b0JBQ3RELGVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO29CQUM5QyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHdCQUF3QixDQUFDO29CQUM1RCxrQkFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7b0JBRXBELG1CQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7b0JBQy9DLDZCQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUUsK0JBQStCLENBQUM7b0JBQ3pFLG9CQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztvQkFDeEQsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRywwQkFBMEIsQ0FBQztnQkFmdkQsQ0FBQztZQWdCckIsQ0FBQztZQW5CRDtnQkFBQyxpQkFBVSxFQUFFOztzQkFBQTtZQUNiLDJCQWtCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9hcGl1cmwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVVybCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIGJhc2VVcmw6c3RyaW5nID0gXCJodHRwOi8vZGV2LWRvbGxhcnRyYWNrZXIuYXp1cmV3ZWJzaXRlcy5uZXRcIjtcclxuICAgIHB1YmxpYyBsb2dpblVybDpzdHJpbmcgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvbG9naW5cIjtcclxuICAgIHB1YmxpYyBzaWdudXBVcmw6c3RyaW5nID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL3JlZ2lzdGVyXCI7XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkU3RhdHNVcmw6c3RyaW5nID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2Rhc2hib2FyZFN0YXRzXCI7XHJcbiAgICBwdWJsaWMgcmVwb3J0OnN0cmluZyA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9kYXNoYm9hcmRcIjtcclxuICAgIHB1YmxpYyBhZGRPbmx5RXhwZW5zZSA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9hZGRPbmx5RXhwZW5zZVwiO1xyXG4gICAgcHVibGljIGFkZEV4cGVuc2UgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvYWRkRXhwZW5zZVwiO1xyXG4gICAgcHVibGljIHVwZGF0ZU9ubHlFeHBlbnNlID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL3VwZGF0ZU9ubHlFeHBlbnNlXCI7XHJcbiAgICBwdWJsaWMgdXBkYXRlRXhwZW5zZSA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS91cGRhdGVFeHBlbnNlXCI7XHJcblxyXG4gICAgcHVibGljIGdldEFsbEV4cGVuc2VzID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2V4cGVuc2VcIjtcclxuICAgIHB1YmxpYyBnZXRBbGxFeHBlbnNlc0J5Q2F0ZWdvcnkgPSB0aGlzLmJhc2VVcmwgK1wiL2FwaS9nZXRBbGxFeHBlbnNlc0J5Q2F0ZWdvcnlcIjtcclxuICAgIHB1YmxpYyBleHBlbnNlQ2F0ZWdvcnkgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvZXhwZW5zZUNhdGVnb3J5XCI7XHJcbiAgICBwdWJsaWMgZXhwZW5zZVN0b3J5U3VtbWFyeSA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9leHBlbnNlU3RvcnlTdW1tYXJ5XCI7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
