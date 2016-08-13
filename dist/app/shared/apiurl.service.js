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
                    this.deleteExpense = this.baseUrl + "/api/Expense";
                    this.getAllExpenses = this.baseUrl + "/api/expense";
                    this.getAllExpensesByCategory = this.baseUrl + "/api/getAllExpensesByCategory";
                    this.expenseCategory = this.baseUrl + "/api/expenseCategory";
                    this.expenseStorySummary = this.baseUrl + "/api/expenseStorySummary";
                    this.addExpenseStory = this.baseUrl + "/api/addExpenseStory";
                    this.deleteExpenseStory = this.baseUrl + "/api/deleteExpenseStory";
                    this.pubnubSubscribeKey = this.baseUrl + "/api/pubnub/subscribekey";
                    this.getAllActiveExpenseStories = this.baseUrl + "/api/getAllActiveExpenseStories";
                    this.getNotifications = this.baseUrl + "/api/notifications";
                    this.profilePicUrl = this.baseUrl + "/api/profilePic";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGl1cmwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUVJO29CQUVRLFlBQU8sR0FBVSw0Q0FBNEMsQ0FBQztvQkFDL0QsYUFBUSxHQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO29CQUM5QyxjQUFTLEdBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7b0JBQ2xELHNCQUFpQixHQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7b0JBQ2hFLFdBQU0sR0FBVSxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO29CQUNoRCxtQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7b0JBQ3RELGVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO29CQUM5QyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHdCQUF3QixDQUFDO29CQUM1RCxrQkFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7b0JBQ3BELGtCQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7b0JBRTlDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7b0JBQy9DLDZCQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUUsK0JBQStCLENBQUM7b0JBQ3pFLG9CQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztvQkFDeEQsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRywwQkFBMEIsQ0FBQztvQkFDaEUsb0JBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO29CQUN4RCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHlCQUF5QixDQUFDO29CQUU5RCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLDBCQUEwQixDQUFDO29CQUMvRCwrQkFBMEIsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLGlDQUFpQyxDQUFDO29CQUU5RSxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO29CQUN2RCxrQkFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7Z0JBeEJ4QyxDQUFDO1lBeUJyQixDQUFDO1lBNUJEO2dCQUFDLGlCQUFVLEVBQUU7O3NCQUFBO1lBQ2IsMkJBMkJDLENBQUEiLCJmaWxlIjoic2hhcmVkL2FwaXVybC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBpVXJsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgYmFzZVVybDpzdHJpbmcgPSBcImh0dHA6Ly9kZXYtZG9sbGFydHJhY2tlci5henVyZXdlYnNpdGVzLm5ldFwiO1xyXG4gICAgcHVibGljIGxvZ2luVXJsOnN0cmluZyA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9sb2dpblwiO1xyXG4gICAgcHVibGljIHNpZ251cFVybDpzdHJpbmcgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvcmVnaXN0ZXJcIjtcclxuICAgIHB1YmxpYyBkYXNoYm9hcmRTdGF0c1VybDpzdHJpbmcgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvZGFzaGJvYXJkU3RhdHNcIjtcclxuICAgIHB1YmxpYyByZXBvcnQ6c3RyaW5nID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2Rhc2hib2FyZFwiO1xyXG4gICAgcHVibGljIGFkZE9ubHlFeHBlbnNlID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2FkZE9ubHlFeHBlbnNlXCI7XHJcbiAgICBwdWJsaWMgYWRkRXhwZW5zZSA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9hZGRFeHBlbnNlXCI7XHJcbiAgICBwdWJsaWMgdXBkYXRlT25seUV4cGVuc2UgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvdXBkYXRlT25seUV4cGVuc2VcIjtcclxuICAgIHB1YmxpYyB1cGRhdGVFeHBlbnNlID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL3VwZGF0ZUV4cGVuc2VcIjtcclxuICAgIHB1YmxpYyBkZWxldGVFeHBlbnNlID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL0V4cGVuc2VcIjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsRXhwZW5zZXMgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvZXhwZW5zZVwiO1xyXG4gICAgcHVibGljIGdldEFsbEV4cGVuc2VzQnlDYXRlZ29yeSA9IHRoaXMuYmFzZVVybCArXCIvYXBpL2dldEFsbEV4cGVuc2VzQnlDYXRlZ29yeVwiO1xyXG4gICAgcHVibGljIGV4cGVuc2VDYXRlZ29yeSA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9leHBlbnNlQ2F0ZWdvcnlcIjtcclxuICAgIHB1YmxpYyBleHBlbnNlU3RvcnlTdW1tYXJ5ID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2V4cGVuc2VTdG9yeVN1bW1hcnlcIjtcclxuICAgIHB1YmxpYyBhZGRFeHBlbnNlU3RvcnkgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvYWRkRXhwZW5zZVN0b3J5XCI7XHJcbiAgICBwdWJsaWMgZGVsZXRlRXhwZW5zZVN0b3J5ID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2RlbGV0ZUV4cGVuc2VTdG9yeVwiO1xyXG5cclxuICAgIHB1YmxpYyBwdWJudWJTdWJzY3JpYmVLZXkgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvcHVibnViL3N1YnNjcmliZWtleVwiO1xyXG4gICAgcHVibGljIGdldEFsbEFjdGl2ZUV4cGVuc2VTdG9yaWVzID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2dldEFsbEFjdGl2ZUV4cGVuc2VTdG9yaWVzXCI7XHJcblxyXG4gICAgcHVibGljIGdldE5vdGlmaWNhdGlvbnMgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvbm90aWZpY2F0aW9uc1wiO1xyXG4gICAgcHVibGljIHByb2ZpbGVQaWNVcmwgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvcHJvZmlsZVBpY1wiO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
