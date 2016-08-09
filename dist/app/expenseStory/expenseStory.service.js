System.register(['@angular/core', 'rxjs/Rx', '../shared/apiurl.service', '../shared/api/api.service', '../user/user.service'], function(exports_1, context_1) {
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
    var core_1, Rx_1, apiurl_service_1, api_service_1, user_service_1;
    var ExpenseStoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let ExpenseStoryService = class ExpenseStoryService {
                constructor(_apiUrl, _apiService, _userService) {
                    this._apiUrl = _apiUrl;
                    this._apiService = _apiService;
                    this._userService = _userService;
                    this.expenseCategoryById = {};
                    this.expenseCategories = [];
                    this.expenseStorySummaries = new Rx_1.BehaviorSubject(null);
                    this._userService.currentUser
                        .filter(x => x != null)
                        .subscribe(x => {
                        if (x != null) {
                            this.loadExpenseCategories();
                            this.loadExpenseStorySummaries();
                        }
                        else {
                            this.expenseCategoryById = null;
                            this.expenseCategories = [];
                            this.expenseStorySummaries.next([]);
                        }
                    });
                }
                addExpenseStory(expenseStory) {
                    return this._apiService
                        .post(this._apiUrl.addExpenseStory, expenseStory)
                        .map(x => {
                        let val = this.expenseStorySummaries.getValue();
                        let arr = val.concat(x.data);
                        arr = arr.sort((es1, es2) => {
                            if (es1.expenseStory.createdUtcDt > es2.expenseStory.createdUtcDt)
                                return -1;
                            if (es1.expenseStory.createdUtcDt < es2.expenseStory.createdUtcDt)
                                return 1;
                            return 0;
                        });
                        this.expenseStorySummaries.next(arr);
                    });
                }
                getAllExpenses(storyId) {
                    var url = this._apiUrl.getAllExpenses + '/' + storyId;
                    return this._apiService.get(url);
                }
                getAllExpensesByCategory(storyId) {
                    var url = this._apiUrl.getAllExpensesByCategory + '/' + storyId;
                    return this._apiService.get(url);
                }
                getExpenseStorySummary(storyId) {
                    var url = this._apiUrl.expenseStorySummary + '/' + storyId;
                    return this._apiService.get(url);
                }
                deleteExpenseStory(storyId) {
                    var url = this._apiUrl.deleteExpenseStory + '/' + storyId;
                    this._apiService
                        .delete(url)
                        .subscribe(x => {
                        this.loadExpenseStorySummaries();
                    });
                }
                loadExpenseStorySummaries() {
                    this._apiService
                        .get(this._apiUrl.report)
                        .subscribe((rs) => {
                        this.expenseStorySummaries.next(rs.data.expenseStorySummaries);
                    });
                }
                handleError(error) {
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                }
                loadExpenseCategories() {
                    this._apiService
                        .get(this._apiUrl.expenseCategory)
                        .subscribe(ec => {
                        this.expenseCategories = ec;
                        this.buildExpenseCategoriesById();
                    });
                }
                buildExpenseCategoriesById() {
                    var len = this.expenseCategories.length;
                    var categoriesById = {};
                    for (var i = 0; i < len; i++) {
                        categoriesById[this.expenseCategories[i].expenseSubCategoryId] = this.expenseCategories[i]; //re-visit
                    }
                    this.expenseCategoryById = categoriesById;
                }
            };
            ExpenseStoryService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [apiurl_service_1.ApiUrl, api_service_1.ApiService, user_service_1.UserService])
            ], ExpenseStoryService);
            exports_1("ExpenseStoryService", ExpenseStoryService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUtJLFlBQW9CLE9BQWMsRUFBVSxXQUFzQixFQUFVLFlBQXdCO29CQUFoRixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFXO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUg3Rix3QkFBbUIsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztvQkFDdkIsMEJBQXFCLEdBQStDLElBQUksb0JBQWUsQ0FBNkIsSUFBSSxDQUFDLENBQUU7b0JBRTlILElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVzt5QkFDeEIsTUFBTSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO3lCQUNwQixTQUFTLENBQUMsQ0FBQzt3QkFDWixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDVixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzs0QkFDN0IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7d0JBQ3JDLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzs0QkFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQzs0QkFDNUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQztvQkFDRCxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVNLGVBQWUsQ0FBQyxZQUF5QjtvQkFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO3lCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDO3lCQUNoRCxH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LEVBQUUsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBQ08sMEJBQTBCO29CQUU5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO29CQUN4QyxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7b0JBQ3hCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzNCLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO29CQUMxRyxDQUFDO29CQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFjLENBQUM7Z0JBQzlDLENBQUM7WUFDTCxDQUFDO1lBN0ZEO2dCQUFDLGlCQUFVLEVBQUU7O21DQUFBO1lBQ2IscURBNEZDLENBQUEiLCJmaWxlIjoiZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGUsQmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlfSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UnO1xyXG5pbXBvcnQge0FwaVVybH0gZnJvbSAnLi4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvYXBpL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5LCBFeHBlbnNlU3RvcnlTdW1tYXJ5fSBmcm9tICcuL2V4cGVuc2VTdG9yeS5tb2RlbCc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZVN0b3J5U2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIGV4cGVuc2VDYXRlZ29yeUJ5SWQgPSB7fTtcclxuICAgIHB1YmxpYyBleHBlbnNlQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgcHVibGljIGV4cGVuc2VTdG9yeVN1bW1hcmllczpCZWhhdmlvclN1YmplY3Q8QXJyYXk8RXhwZW5zZVN0b3J5U3VtbWFyeT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxFeHBlbnNlU3RvcnlTdW1tYXJ5Pj4obnVsbCkgO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpVXJsOkFwaVVybCwgcHJpdmF0ZSBfYXBpU2VydmljZTpBcGlTZXJ2aWNlLCBwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmN1cnJlbnRVc2VyXHJcbiAgICAgICAgICAgIC5maWx0ZXIoeD0+eCAhPSBudWxsKSAgIFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHg9PntcclxuICAgICAgICAgICAgaWYoeCAhPW51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZEV4cGVuc2VDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRFeHBlbnNlU3RvcnlTdW1tYXJpZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwZW5zZUNhdGVnb3J5QnlJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcmllcy5uZXh0KFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGFkZEV4cGVuc2VTdG9yeShleHBlbnNlU3Rvcnk6RXhwZW5zZVN0b3J5KTogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAucG9zdCh0aGlzLl9hcGlVcmwuYWRkRXhwZW5zZVN0b3J5LCBleHBlbnNlU3RvcnkpXHJcbiAgICAgICAgLm1hcCh4PT57XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcmllcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gdmFsLmNvbmNhdCh4LmRhdGEpO1xyXG4gICAgICAgICAgICBhcnIgPSBhcnIuc29ydCgoZXMxLCBlczIpPT57XHJcbiAgICAgICAgICAgICAgICBpZihlczEuZXhwZW5zZVN0b3J5LmNyZWF0ZWRVdGNEdCA+IGVzMi5leHBlbnNlU3RvcnkuY3JlYXRlZFV0Y0R0KSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICBpZihlczEuZXhwZW5zZVN0b3J5LmNyZWF0ZWRVdGNEdCA8IGVzMi5leHBlbnNlU3RvcnkuY3JlYXRlZFV0Y0R0KSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcmllcy5uZXh0KGFycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0QWxsRXhwZW5zZXMoc3RvcnlJZCk6IE9ic2VydmFibGU8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLl9hcGlVcmwuZ2V0QWxsRXhwZW5zZXMgKyAnLycgKyBzdG9yeUlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlLmdldCh1cmwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEFsbEV4cGVuc2VzQnlDYXRlZ29yeShzdG9yeUlkKSA6IE9ic2VydmFibGU8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLl9hcGlVcmwuZ2V0QWxsRXhwZW5zZXNCeUNhdGVnb3J5ICsgJy8nICsgc3RvcnlJZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZS5nZXQodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhwZW5zZVN0b3J5U3VtbWFyeShzdG9yeUlkKSA6IE9ic2VydmFibGU8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLl9hcGlVcmwuZXhwZW5zZVN0b3J5U3VtbWFyeSArICcvJyArIHN0b3J5SWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UuZ2V0KHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZUV4cGVuc2VTdG9yeShzdG9yeUlkKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5kZWxldGVFeHBlbnNlU3RvcnkgKyAnLycgKyBzdG9yeUlkO1xyXG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAuZGVsZXRlKHVybClcclxuICAgICAgICAuc3Vic2NyaWJlKHg9PntcclxuICAgICAgICAgICAgdGhpcy5sb2FkRXhwZW5zZVN0b3J5U3VtbWFyaWVzKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEV4cGVuc2VTdG9yeVN1bW1hcmllcygpIHtcclxuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlXHJcbiAgICAgICAgLmdldCh0aGlzLl9hcGlVcmwucmVwb3J0KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5U3VtbWFyaWVzLm5leHQocnMuZGF0YS5leHBlbnNlU3RvcnlTdW1tYXJpZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEV4cGVuc2VDYXRlZ29yaWVzKCl7XHJcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZVxyXG4gICAgICAgIC5nZXQodGhpcy5fYXBpVXJsLmV4cGVuc2VDYXRlZ29yeSlcclxuICAgICAgICAuc3Vic2NyaWJlKGVjPT57XHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZUNhdGVnb3JpZXMgPSBlYztcclxuICAgICAgICAgICAgdGhpcy5idWlsZEV4cGVuc2VDYXRlZ29yaWVzQnlJZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJ1aWxkRXhwZW5zZUNhdGVnb3JpZXNCeUlkKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzLmxlbmd0aDtcclxuICAgICAgICB2YXIgY2F0ZWdvcmllc0J5SWQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNCeUlkW3RoaXMuZXhwZW5zZUNhdGVnb3JpZXNbaV0uZXhwZW5zZVN1YkNhdGVnb3J5SWRdID0gdGhpcy5leHBlbnNlQ2F0ZWdvcmllc1tpXTsgLy9yZS12aXNpdFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yeUJ5SWQgPSBjYXRlZ29yaWVzQnlJZDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
