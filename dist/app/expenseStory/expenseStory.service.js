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
                    this.loadExpenseCategories();
                    this._userService.currentUser
                        .filter(x => x != null)
                        .subscribe(x => {
                        if (x == null) {
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
                deleteExpenseStory(storyId, active = false) {
                    var url = this._apiUrl.deleteExpenseStory + '/' + storyId;
                    this._apiService
                        .delete(url)
                        .subscribe(x => {
                        this.loadExpenseStorySummaries(active);
                    });
                }
                loadExpenseStorySummaries(active) {
                    var url = this._apiUrl.report + "?active=" + active;
                    this._apiService
                        .get(url)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUtJLFlBQW9CLE9BQWMsRUFBVSxXQUFzQixFQUFVLFlBQXdCO29CQUFoRixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFXO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUg3Rix3QkFBbUIsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztvQkFDdkIsMEJBQXFCLEdBQStDLElBQUksb0JBQWUsQ0FBNkIsSUFBSSxDQUFDLENBQUU7b0JBRTlILElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7eUJBQ3hCLE1BQU0sQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQzt5QkFDcEIsU0FBUyxDQUFDLENBQUM7d0JBQ1IsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ1YsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzs0QkFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQzs0QkFDNUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDeEMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVNLGVBQWUsQ0FBQyxZQUF5QjtvQkFFNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXO3lCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDO3lCQUNoRCxHQUFHLENBQUMsQ0FBQzt3QkFDRixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFF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QUNULElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7d0JBQzVCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO29CQUN0QyxDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUNPLDBCQUEwQjtvQkFFOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztvQkFDeEMsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO29CQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMzQixjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtvQkFDMUcsQ0FBQztvQkFDRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxDQUFDO2dCQUM5QyxDQUFDO1lBQ0wsQ0FBQztZQTNGRDtnQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtZQUNiLHFEQTBGQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZX0gZnJvbSAnLi4vZXhwZW5zZS9leHBlbnNlJztcclxuaW1wb3J0IHtBcGlVcmx9IGZyb20gJy4uL3NoYXJlZC9hcGl1cmwuc2VydmljZSc7XHJcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2FwaS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeSwgRXhwZW5zZVN0b3J5U3VtbWFyeX0gZnJvbSAnLi9leHBlbnNlU3RvcnkubW9kZWwnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi91c2VyL3VzZXIuc2VydmljZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VTdG9yeVNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBleHBlbnNlQ2F0ZWdvcnlCeUlkID0ge307XHJcbiAgICBwdWJsaWMgZXhwZW5zZUNhdGVnb3JpZXMgPSBbXTtcclxuICAgIHB1YmxpYyBleHBlbnNlU3RvcnlTdW1tYXJpZXM6QmVoYXZpb3JTdWJqZWN0PEFycmF5PEV4cGVuc2VTdG9yeVN1bW1hcnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8RXhwZW5zZVN0b3J5U3VtbWFyeT4+KG51bGwpIDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwaVVybDpBcGlVcmwsIHByaXZhdGUgX2FwaVNlcnZpY2U6QXBpU2VydmljZSwgcHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRFeHBlbnNlQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmN1cnJlbnRVc2VyXHJcbiAgICAgICAgICAgIC5maWx0ZXIoeD0+eCAhPSBudWxsKSAgIFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHg9PntcclxuICAgICAgICAgICAgICAgIGlmKHggPT1udWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBlbnNlQ2F0ZWdvcnlCeUlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBlbnNlU3RvcnlTdW1tYXJpZXMubmV4dChbXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWRkRXhwZW5zZVN0b3J5KGV4cGVuc2VTdG9yeTpFeHBlbnNlU3RvcnkpOiBPYnNlcnZhYmxlPGFueT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZVxyXG4gICAgICAgIC5wb3N0KHRoaXMuX2FwaVVybC5hZGRFeHBlbnNlU3RvcnksIGV4cGVuc2VTdG9yeSlcclxuICAgICAgICAubWFwKHg9PntcclxuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuZXhwZW5zZVN0b3J5U3VtbWFyaWVzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSB2YWwuY29uY2F0KHguZGF0YSk7XHJcbiAgICAgICAgICAgIGFyciA9IGFyci5zb3J0KChlczEsIGVzMik9PntcclxuICAgICAgICAgICAgICAgIGlmKGVzMS5leHBlbnNlU3RvcnkuY3JlYXRlZFV0Y0R0ID4gZXMyLmV4cGVuc2VTdG9yeS5jcmVhdGVkVXRjRHQpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmKGVzMS5leHBlbnNlU3RvcnkuY3JlYXRlZFV0Y0R0IDwgZXMyLmV4cGVuc2VTdG9yeS5jcmVhdGVkVXRjRHQpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5U3VtbWFyaWVzLm5leHQoYXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRBbGxFeHBlbnNlcyhzdG9yeUlkKTogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5nZXRBbGxFeHBlbnNlcyArICcvJyArIHN0b3J5SWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UuZ2V0KHVybCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0QWxsRXhwZW5zZXNCeUNhdGVnb3J5KHN0b3J5SWQpIDogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5nZXRBbGxFeHBlbnNlc0J5Q2F0ZWdvcnkgKyAnLycgKyBzdG9yeUlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlLmdldCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeHBlbnNlU3RvcnlTdW1tYXJ5KHN0b3J5SWQpIDogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5leHBlbnNlU3RvcnlTdW1tYXJ5ICsgJy8nICsgc3RvcnlJZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZS5nZXQodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlRXhwZW5zZVN0b3J5KHN0b3J5SWQsIGFjdGl2ZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5kZWxldGVFeHBlbnNlU3RvcnkgKyAnLycgKyBzdG9yeUlkO1xyXG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAuZGVsZXRlKHVybClcclxuICAgICAgICAuc3Vic2NyaWJlKHg9PntcclxuICAgICAgICAgICAgdGhpcy5sb2FkRXhwZW5zZVN0b3J5U3VtbWFyaWVzKGFjdGl2ZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEV4cGVuc2VTdG9yeVN1bW1hcmllcyhhY3RpdmUpIHtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5fYXBpVXJsLnJlcG9ydCtcIj9hY3RpdmU9XCIrYWN0aXZlO1xyXG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAuc3Vic2NyaWJlKChycykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcmllcy5uZXh0KHJzLmRhdGEuZXhwZW5zZVN0b3J5U3VtbWFyaWVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRFeHBlbnNlQ2F0ZWdvcmllcygpe1xyXG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAuZ2V0KHRoaXMuX2FwaVVybC5leHBlbnNlQ2F0ZWdvcnkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlYz0+e1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzID0gZWM7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFeHBlbnNlQ2F0ZWdvcmllc0J5SWQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBidWlsZEV4cGVuc2VDYXRlZ29yaWVzQnlJZCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGVuID0gdGhpcy5leHBlbnNlQ2F0ZWdvcmllcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNhdGVnb3JpZXNCeUlkID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzQnlJZFt0aGlzLmV4cGVuc2VDYXRlZ29yaWVzW2ldLmV4cGVuc2VTdWJDYXRlZ29yeUlkXSA9IHRoaXMuZXhwZW5zZUNhdGVnb3JpZXNbaV07IC8vcmUtdmlzaXRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5leHBlbnNlQ2F0ZWdvcnlCeUlkID0gY2F0ZWdvcmllc0J5SWQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
