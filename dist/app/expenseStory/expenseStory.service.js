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
                    this.expenseStorySummaries
                        .subscribe(values => {
                        console.log("got expense story summaries");
                        console.log(JSON.stringify(values));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUtJLFlBQW9CLE9BQWMsRUFBVSxXQUFzQjtvQkFBOUMsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFIM0Qsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO29CQUN6QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLDBCQUFxQixHQUErQyxJQUFJLG9CQUFlLENBQTZCLElBQUksQ0FBQyxDQUFFO29CQUU5SCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxxQkFBcUI7eUJBQ3pCLFNBQVMsQ0FBQyxNQUFNO3dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBQ00sZUFBZSxDQUFDLFlBQXlCO29CQUU1QyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVc7eUJBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUM7eUJBQ2hELEdBQUcsQ0FBQyxDQUFDO3dCQUNGLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDaEQsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUc7NEJBQ3BCLEVBQUUsQ0FB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O1lBQ0wsQ0FBQztZQTdFRDtnQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtZQUNiLHFEQTRFQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZX0gZnJvbSAnLi4vZXhwZW5zZS9leHBlbnNlJztcclxuaW1wb3J0IHtBcGlVcmx9IGZyb20gJy4uL3NoYXJlZC9hcGl1cmwuc2VydmljZSc7XHJcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2FwaS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeSwgRXhwZW5zZVN0b3J5U3VtbWFyeX0gZnJvbSAnLi9leHBlbnNlU3RvcnkubW9kZWwnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlU3RvcnlTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgZXhwZW5zZUNhdGVnb3J5QnlJZCA9IHt9O1xyXG4gICAgcHVibGljIGV4cGVuc2VDYXRlZ29yaWVzID0gW107XHJcbiAgICBwdWJsaWMgZXhwZW5zZVN0b3J5U3VtbWFyaWVzOkJlaGF2aW9yU3ViamVjdDxBcnJheTxFeHBlbnNlU3RvcnlTdW1tYXJ5Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PEV4cGVuc2VTdG9yeVN1bW1hcnk+PihudWxsKSA7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGlVcmw6QXBpVXJsLCBwcml2YXRlIF9hcGlTZXJ2aWNlOkFwaVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRFeHBlbnNlQ2F0ZWdvcmllcygpO1xyXG4gICAgICAgIHRoaXMubG9hZEV4cGVuc2VTdG9yeVN1bW1hcmllcygpO1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5U3VtbWFyaWVzXHJcbiAgICAgICAgLnN1YnNjcmliZSh2YWx1ZXM9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgZXhwZW5zZSBzdG9yeSBzdW1tYXJpZXNcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHZhbHVlcykpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkRXhwZW5zZVN0b3J5KGV4cGVuc2VTdG9yeTpFeHBlbnNlU3RvcnkpOiBPYnNlcnZhYmxlPGFueT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZVxyXG4gICAgICAgIC5wb3N0KHRoaXMuX2FwaVVybC5hZGRFeHBlbnNlU3RvcnksIGV4cGVuc2VTdG9yeSlcclxuICAgICAgICAubWFwKHg9PntcclxuICAgICAgICAgICAgbGV0IHZhbCA9IHRoaXMuZXhwZW5zZVN0b3J5U3VtbWFyaWVzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSB2YWwuY29uY2F0KHguZGF0YSk7XHJcbiAgICAgICAgICAgIGFyciA9IGFyci5zb3J0KChlczEsIGVzMik9PntcclxuICAgICAgICAgICAgICAgIGlmKGVzMS5leHBlbnNlU3RvcnkuY3JlYXRlZFV0Y0R0ID4gZXMyLmV4cGVuc2VTdG9yeS5jcmVhdGVkVXRjRHQpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGlmKGVzMS5leHBlbnNlU3RvcnkuY3JlYXRlZFV0Y0R0IDwgZXMyLmV4cGVuc2VTdG9yeS5jcmVhdGVkVXRjRHQpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5U3VtbWFyaWVzLm5leHQoYXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRBbGxFeHBlbnNlcyhzdG9yeUlkKTogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5nZXRBbGxFeHBlbnNlcyArICcvJyArIHN0b3J5SWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UuZ2V0KHVybCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0QWxsRXhwZW5zZXNCeUNhdGVnb3J5KHN0b3J5SWQpIDogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5nZXRBbGxFeHBlbnNlc0J5Q2F0ZWdvcnkgKyAnLycgKyBzdG9yeUlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlLmdldCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeHBlbnNlU3RvcnlTdW1tYXJ5KHN0b3J5SWQpIDogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5leHBlbnNlU3RvcnlTdW1tYXJ5ICsgJy8nICsgc3RvcnlJZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZS5nZXQodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZEV4cGVuc2VTdG9yeVN1bW1hcmllcygpIHtcclxuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlXHJcbiAgICAgICAgLmdldCh0aGlzLl9hcGlVcmwucmVwb3J0KVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHJzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5U3VtbWFyaWVzLm5leHQocnMuZGF0YS5leHBlbnNlU3RvcnlTdW1tYXJpZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZEV4cGVuc2VDYXRlZ29yaWVzKCl7XHJcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZVxyXG4gICAgICAgIC5nZXQodGhpcy5fYXBpVXJsLmV4cGVuc2VDYXRlZ29yeSlcclxuICAgICAgICAuc3Vic2NyaWJlKGVjPT57XHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZUNhdGVnb3JpZXMgPSBlYztcclxuICAgICAgICAgICAgdGhpcy5idWlsZEV4cGVuc2VDYXRlZ29yaWVzQnlJZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJ1aWxkRXhwZW5zZUNhdGVnb3JpZXNCeUlkKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBsZW4gPSB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzLmxlbmd0aDtcclxuICAgICAgICB2YXIgY2F0ZWdvcmllc0J5SWQgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXNCeUlkW3RoaXMuZXhwZW5zZUNhdGVnb3JpZXNbaV0uZXhwZW5zZVN1YkNhdGVnb3J5SWRdID0gdGhpcy5leHBlbnNlQ2F0ZWdvcmllc1tpXTsgLy9yZS12aXNpdFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yeUJ5SWQgPSBjYXRlZ29yaWVzQnlJZDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
