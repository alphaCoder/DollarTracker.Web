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
                    this.loadExpenseStorySummaries();
                    _userService
                        .currentUser
                        .filter(x => x == null)
                        .subscribe(x => {
                        this.expenseCategoryById = null;
                        this.expenseCategories = [];
                        this.expenseStorySummaries.next([]);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUtJLFlBQW9CLE9BQWMsRUFBVSxXQUFzQixFQUFVLFlBQXdCO29CQUFoRixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFXO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUg3Rix3QkFBbUIsR0FBRyxFQUFFLENBQUM7b0JBQ3pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztvQkFDdkIsMEJBQXFCLEdBQStDLElBQUksb0JBQWUsQ0FBNkIsSUFBSSxDQUFDLENBQUU7b0JBRTlILElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUM3QixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztvQkFDakMsWUFBWTt5QkFDUCxXQUFXO3lCQUNYLE1BQU0sQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFFLElBQUksQ0FBQzt5QkFDbEIsU0FBUyxDQUFDLENBQUM7d0JBQ1IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztnQkFDTSxlQUFlLENBQUMsWUFBeUI7b0JBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVzt5QkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQzt5QkFDaEQsR0FBRyxDQUFDLENBQUM7d0JBQ0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNoRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMs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QUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztvQkFDeEMsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO29CQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMzQixjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtvQkFDMUcsQ0FBQztvQkFDRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxDQUFDO2dCQUM5QyxDQUFDO1lBQ0wsQ0FBQztZQXpGRDtnQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtZQUNiLHFEQXdGQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZX0gZnJvbSAnLi4vZXhwZW5zZS9leHBlbnNlJztcclxuaW1wb3J0IHtBcGlVcmx9IGZyb20gJy4uL3NoYXJlZC9hcGl1cmwuc2VydmljZSc7XHJcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2FwaS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeSwgRXhwZW5zZVN0b3J5U3VtbWFyeX0gZnJvbSAnLi9leHBlbnNlU3RvcnkubW9kZWwnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi91c2VyL3VzZXIuc2VydmljZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VTdG9yeVNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBleHBlbnNlQ2F0ZWdvcnlCeUlkID0ge307XHJcbiAgICBwdWJsaWMgZXhwZW5zZUNhdGVnb3JpZXMgPSBbXTtcclxuICAgIHB1YmxpYyBleHBlbnNlU3RvcnlTdW1tYXJpZXM6QmVoYXZpb3JTdWJqZWN0PEFycmF5PEV4cGVuc2VTdG9yeVN1bW1hcnk+PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8RXhwZW5zZVN0b3J5U3VtbWFyeT4+KG51bGwpIDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwaVVybDpBcGlVcmwsIHByaXZhdGUgX2FwaVNlcnZpY2U6QXBpU2VydmljZSwgcHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRFeHBlbnNlQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgIHRoaXMubG9hZEV4cGVuc2VTdG9yeVN1bW1hcmllcygpO1xyXG4gICAgICAgIF91c2VyU2VydmljZVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXJcclxuICAgICAgICAgICAgLmZpbHRlcih4PT54PT1udWxsKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHg9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwZW5zZUNhdGVnb3J5QnlJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcmllcy5uZXh0KFtdKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRFeHBlbnNlU3RvcnkoZXhwZW5zZVN0b3J5OkV4cGVuc2VTdG9yeSk6IE9ic2VydmFibGU8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlXHJcbiAgICAgICAgLnBvc3QodGhpcy5fYXBpVXJsLmFkZEV4cGVuc2VTdG9yeSwgZXhwZW5zZVN0b3J5KVxyXG4gICAgICAgIC5tYXAoeD0+e1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy5leHBlbnNlU3RvcnlTdW1tYXJpZXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgbGV0IGFyciA9IHZhbC5jb25jYXQoeC5kYXRhKTtcclxuICAgICAgICAgICAgYXJyID0gYXJyLnNvcnQoKGVzMSwgZXMyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZXMxLmV4cGVuc2VTdG9yeS5jcmVhdGVkVXRjRHQgPiBlczIuZXhwZW5zZVN0b3J5LmNyZWF0ZWRVdGNEdCkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgaWYoZXMxLmV4cGVuc2VTdG9yeS5jcmVhdGVkVXRjRHQgPCBlczIuZXhwZW5zZVN0b3J5LmNyZWF0ZWRVdGNEdCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5leHBlbnNlU3RvcnlTdW1tYXJpZXMubmV4dChhcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEFsbEV4cGVuc2VzKHN0b3J5SWQpOiBPYnNlcnZhYmxlPGFueT5cclxuICAgIHtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5fYXBpVXJsLmdldEFsbEV4cGVuc2VzICsgJy8nICsgc3RvcnlJZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZS5nZXQodXJsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRBbGxFeHBlbnNlc0J5Q2F0ZWdvcnkoc3RvcnlJZCkgOiBPYnNlcnZhYmxlPGFueT5cclxuICAgIHtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5fYXBpVXJsLmdldEFsbEV4cGVuc2VzQnlDYXRlZ29yeSArICcvJyArIHN0b3J5SWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UuZ2V0KHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4cGVuc2VTdG9yeVN1bW1hcnkoc3RvcnlJZCkgOiBPYnNlcnZhYmxlPGFueT5cclxuICAgIHtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5fYXBpVXJsLmV4cGVuc2VTdG9yeVN1bW1hcnkgKyAnLycgKyBzdG9yeUlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlLmdldCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVFeHBlbnNlU3Rvcnkoc3RvcnlJZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLl9hcGlVcmwuZGVsZXRlRXhwZW5zZVN0b3J5ICsgJy8nICsgc3RvcnlJZDtcclxuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlXHJcbiAgICAgICAgLmRlbGV0ZSh1cmwpXHJcbiAgICAgICAgLnN1YnNjcmliZSh4PT57XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEV4cGVuc2VTdG9yeVN1bW1hcmllcygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRFeHBlbnNlU3RvcnlTdW1tYXJpZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZVxyXG4gICAgICAgIC5nZXQodGhpcy5fYXBpVXJsLnJlcG9ydClcclxuICAgICAgICAuc3Vic2NyaWJlKChycykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcmllcy5uZXh0KHJzLmRhdGEuZXhwZW5zZVN0b3J5U3VtbWFyaWVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRFeHBlbnNlQ2F0ZWdvcmllcygpe1xyXG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAuZ2V0KHRoaXMuX2FwaVVybC5leHBlbnNlQ2F0ZWdvcnkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlYz0+e1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzID0gZWM7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFeHBlbnNlQ2F0ZWdvcmllc0J5SWQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBidWlsZEV4cGVuc2VDYXRlZ29yaWVzQnlJZCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGVuID0gdGhpcy5leHBlbnNlQ2F0ZWdvcmllcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNhdGVnb3JpZXNCeUlkID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzQnlJZFt0aGlzLmV4cGVuc2VDYXRlZ29yaWVzW2ldLmV4cGVuc2VTdWJDYXRlZ29yeUlkXSA9IHRoaXMuZXhwZW5zZUNhdGVnb3JpZXNbaV07IC8vcmUtdmlzaXRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5leHBlbnNlQ2F0ZWdvcnlCeUlkID0gY2F0ZWdvcmllc0J5SWQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
