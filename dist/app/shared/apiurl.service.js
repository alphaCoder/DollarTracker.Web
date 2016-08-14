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
                    this.updatePassword = this.baseUrl + "/api/updatePassword";
                    this.profile = this.baseUrl + "/api/profile";
                    this.updateUser = this.baseUrl + "/api/updateUser";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hcGl1cmwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUVJO29CQUVRLFlBQU8sR0FBVSw0Q0FBNEMsQ0FBQztvQkFDL0QsYUFBUSxHQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO29CQUM5QyxjQUFTLEdBQVUsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7b0JBQ2xELHNCQUFpQixHQUFVLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7b0JBQ2hFLFdBQU0sR0FBVSxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDO29CQUNoRCxtQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7b0JBQ3RELGVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDO29CQUM5QyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHdCQUF3QixDQUFDO29CQUM1RCxrQkFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7b0JBQ3BELGtCQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7b0JBRTlDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7b0JBQy9DLDZCQUF3QixHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUUsK0JBQStCLENBQUM7b0JBQ3pFLG9CQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztvQkFDeEQsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRywwQkFBMEIsQ0FBQztvQkFDaEUsb0JBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO29CQUN4RCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLHlCQUF5QixDQUFDO29CQUU5RCx1QkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLDBCQUEwQixDQUFDO29CQUMvRCwrQkFBMEIsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLGlDQUFpQyxDQUFDO29CQUU5RSxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO29CQUN2RCxrQkFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7b0JBRWpELG1CQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQztvQkFDdEQsWUFBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO29CQUN4QyxlQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztnQkE1QnJDLENBQUM7WUE2QnJCLENBQUM7WUFoQ0Q7Z0JBQUMsaUJBQVUsRUFBRTs7c0JBQUE7WUFDYiwyQkErQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvYXBpdXJsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlVcmwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBiYXNlVXJsOnN0cmluZyA9IFwiaHR0cDovL2Rldi1kb2xsYXJ0cmFja2VyLmF6dXJld2Vic2l0ZXMubmV0XCI7XHJcbiAgICBwdWJsaWMgbG9naW5Vcmw6c3RyaW5nID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2xvZ2luXCI7XHJcbiAgICBwdWJsaWMgc2lnbnVwVXJsOnN0cmluZyA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9yZWdpc3RlclwiO1xyXG4gICAgcHVibGljIGRhc2hib2FyZFN0YXRzVXJsOnN0cmluZyA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9kYXNoYm9hcmRTdGF0c1wiO1xyXG4gICAgcHVibGljIHJlcG9ydDpzdHJpbmcgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvZGFzaGJvYXJkXCI7XHJcbiAgICBwdWJsaWMgYWRkT25seUV4cGVuc2UgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvYWRkT25seUV4cGVuc2VcIjtcclxuICAgIHB1YmxpYyBhZGRFeHBlbnNlID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2FkZEV4cGVuc2VcIjtcclxuICAgIHB1YmxpYyB1cGRhdGVPbmx5RXhwZW5zZSA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS91cGRhdGVPbmx5RXhwZW5zZVwiO1xyXG4gICAgcHVibGljIHVwZGF0ZUV4cGVuc2UgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvdXBkYXRlRXhwZW5zZVwiO1xyXG4gICAgcHVibGljIGRlbGV0ZUV4cGVuc2UgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvRXhwZW5zZVwiO1xyXG5cclxuICAgIHB1YmxpYyBnZXRBbGxFeHBlbnNlcyA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9leHBlbnNlXCI7XHJcbiAgICBwdWJsaWMgZ2V0QWxsRXhwZW5zZXNCeUNhdGVnb3J5ID0gdGhpcy5iYXNlVXJsICtcIi9hcGkvZ2V0QWxsRXhwZW5zZXNCeUNhdGVnb3J5XCI7XHJcbiAgICBwdWJsaWMgZXhwZW5zZUNhdGVnb3J5ID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL2V4cGVuc2VDYXRlZ29yeVwiO1xyXG4gICAgcHVibGljIGV4cGVuc2VTdG9yeVN1bW1hcnkgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvZXhwZW5zZVN0b3J5U3VtbWFyeVwiO1xyXG4gICAgcHVibGljIGFkZEV4cGVuc2VTdG9yeSA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9hZGRFeHBlbnNlU3RvcnlcIjtcclxuICAgIHB1YmxpYyBkZWxldGVFeHBlbnNlU3RvcnkgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvZGVsZXRlRXhwZW5zZVN0b3J5XCI7XHJcblxyXG4gICAgcHVibGljIHB1Ym51YlN1YnNjcmliZUtleSA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9wdWJudWIvc3Vic2NyaWJla2V5XCI7XHJcbiAgICBwdWJsaWMgZ2V0QWxsQWN0aXZlRXhwZW5zZVN0b3JpZXMgPSB0aGlzLmJhc2VVcmwgKyBcIi9hcGkvZ2V0QWxsQWN0aXZlRXhwZW5zZVN0b3JpZXNcIjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0Tm90aWZpY2F0aW9ucyA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9ub3RpZmljYXRpb25zXCI7XHJcbiAgICBwdWJsaWMgcHJvZmlsZVBpY1VybCA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9wcm9maWxlUGljXCI7XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVBhc3N3b3JkID0gdGhpcy5iYXNlVXJsICsgXCIvYXBpL3VwZGF0ZVBhc3N3b3JkXCI7XHJcbiAgICBwdWJsaWMgcHJvZmlsZSA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS9wcm9maWxlXCI7XHJcbiAgICBwdWJsaWMgdXBkYXRlVXNlciA9IHRoaXMuYmFzZVVybCArIFwiL2FwaS91cGRhdGVVc2VyXCI7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
