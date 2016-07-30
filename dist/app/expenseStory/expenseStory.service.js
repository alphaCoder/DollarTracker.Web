System.register(['@angular/core', 'rxjs/Rx', '../shared/apiurl.service', '../shared/api/api.service'], function(exports_1, context_1) {
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
    var core_1, Rx_1, apiurl_service_1, api_service_1;
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
            }],
        execute: function() {
            let ExpenseStoryService = class ExpenseStoryService {
                constructor(_apiUrl, _apiService) {
                    this._apiUrl = _apiUrl;
                    this._apiService = _apiService;
                    this.expenseCategoryById = {};
                    this.expenseCategories = [];
                    this.expenseStorySummaries = new Rx_1.BehaviorSubject(null);
                    this.loadExpenseCategories();
                    this.loadExpenseStorySummaries();
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
                __metadata('design:paramtypes', [apiurl_service_1.ApiUrl, api_service_1.ApiService])
            ], ExpenseStoryService);
            exports_1("ExpenseStoryService", ExpenseStoryService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUtJLFlBQW9CLE9BQWMsRUFBVSxXQUFzQjtvQkFBOUMsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFIM0Qsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO29CQUN6QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLDBCQUFxQixHQUErQyxJQUFJLG9CQUFlLENBQTZCLElBQUksQ0FBQyxDQUFFO29CQUU5SCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ00sZUFBZSxDQUFDLFlBQXlCO29CQUU1QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7eUJBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUM7eUJBQ2hELEdBQUcsQ0FBQyxDQUFDO3dCQUNGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDaEQsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUc7NEJBQ3BCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDO2dDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUUsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLENB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LENBQUM7b0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGNBQWMsQ0FBQztnQkFDOUMsQ0FBQztZQUNMLENBQUM7WUFqRkQ7Z0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7WUFDYixxREFnRkMsQ0FBQSIsImZpbGUiOiJleHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSxCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZSc7XHJcbmltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9zaGFyZWQvYXBpdXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9hcGkvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtFeHBlbnNlU3RvcnksIEV4cGVuc2VTdG9yeVN1bW1hcnl9IGZyb20gJy4vZXhwZW5zZVN0b3J5Lm1vZGVsJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZVN0b3J5U2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIGV4cGVuc2VDYXRlZ29yeUJ5SWQgPSB7fTtcclxuICAgIHB1YmxpYyBleHBlbnNlQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgcHVibGljIGV4cGVuc2VTdG9yeVN1bW1hcmllczpCZWhhdmlvclN1YmplY3Q8QXJyYXk8RXhwZW5zZVN0b3J5U3VtbWFyeT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxFeHBlbnNlU3RvcnlTdW1tYXJ5Pj4obnVsbCkgO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpVXJsOkFwaVVybCwgcHJpdmF0ZSBfYXBpU2VydmljZTpBcGlTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRXhwZW5zZUNhdGVnb3JpZXMoKTtcclxuICAgICAgICB0aGlzLmxvYWRFeHBlbnNlU3RvcnlTdW1tYXJpZXMoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhZGRFeHBlbnNlU3RvcnkoZXhwZW5zZVN0b3J5OkV4cGVuc2VTdG9yeSk6IE9ic2VydmFibGU8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlXHJcbiAgICAgICAgLnBvc3QodGhpcy5fYXBpVXJsLmFkZEV4cGVuc2VTdG9yeSwgZXhwZW5zZVN0b3J5KVxyXG4gICAgICAgIC5tYXAoeD0+e1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy5leHBlbnNlU3RvcnlTdW1tYXJpZXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgbGV0IGFyciA9IHZhbC5jb25jYXQoeC5kYXRhKTtcclxuICAgICAgICAgICAgYXJyID0gYXJyLnNvcnQoKGVzMSwgZXMyKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZXMxLmV4cGVuc2VTdG9yeS5jcmVhdGVkVXRjRHQgPiBlczIuZXhwZW5zZVN0b3J5LmNyZWF0ZWRVdGNEdCkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgaWYoZXMxLmV4cGVuc2VTdG9yeS5jcmVhdGVkVXRjRHQgPCBlczIuZXhwZW5zZVN0b3J5LmNyZWF0ZWRVdGNEdCkgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5leHBlbnNlU3RvcnlTdW1tYXJpZXMubmV4dChhcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEFsbEV4cGVuc2VzKHN0b3J5SWQpOiBPYnNlcnZhYmxlPGFueT5cclxuICAgIHtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5fYXBpVXJsLmdldEFsbEV4cGVuc2VzICsgJy8nICsgc3RvcnlJZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZS5nZXQodXJsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRBbGxFeHBlbnNlc0J5Q2F0ZWdvcnkoc3RvcnlJZCkgOiBPYnNlcnZhYmxlPGFueT5cclxuICAgIHtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5fYXBpVXJsLmdldEFsbEV4cGVuc2VzQnlDYXRlZ29yeSArICcvJyArIHN0b3J5SWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UuZ2V0KHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4cGVuc2VTdG9yeVN1bW1hcnkoc3RvcnlJZCkgOiBPYnNlcnZhYmxlPGFueT5cclxuICAgIHtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5fYXBpVXJsLmV4cGVuc2VTdG9yeVN1bW1hcnkgKyAnLycgKyBzdG9yeUlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlLmdldCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVFeHBlbnNlU3Rvcnkoc3RvcnlJZCkge1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLl9hcGlVcmwuZGVsZXRlRXhwZW5zZVN0b3J5ICsgJy8nICsgc3RvcnlJZDtcclxuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlXHJcbiAgICAgICAgLmRlbGV0ZSh1cmwpXHJcbiAgICAgICAgLnN1YnNjcmliZSh4PT57XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEV4cGVuc2VTdG9yeVN1bW1hcmllcygpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRFeHBlbnNlU3RvcnlTdW1tYXJpZXMoKSB7XHJcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZVxyXG4gICAgICAgIC5nZXQodGhpcy5fYXBpVXJsLnJlcG9ydClcclxuICAgICAgICAuc3Vic2NyaWJlKChycykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcmllcy5uZXh0KHJzLmRhdGEuZXhwZW5zZVN0b3J5U3VtbWFyaWVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRFeHBlbnNlQ2F0ZWdvcmllcygpe1xyXG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAuZ2V0KHRoaXMuX2FwaVVybC5leHBlbnNlQ2F0ZWdvcnkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlYz0+e1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzID0gZWM7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFeHBlbnNlQ2F0ZWdvcmllc0J5SWQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBidWlsZEV4cGVuc2VDYXRlZ29yaWVzQnlJZCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGVuID0gdGhpcy5leHBlbnNlQ2F0ZWdvcmllcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNhdGVnb3JpZXNCeUlkID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzQnlJZFt0aGlzLmV4cGVuc2VDYXRlZ29yaWVzW2ldLmV4cGVuc2VTdWJDYXRlZ29yeUlkXSA9IHRoaXMuZXhwZW5zZUNhdGVnb3JpZXNbaV07IC8vcmUtdmlzaXRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5leHBlbnNlQ2F0ZWdvcnlCeUlkID0gY2F0ZWdvcmllc0J5SWQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
