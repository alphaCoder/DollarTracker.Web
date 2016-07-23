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
                    this.loadExpenseCategories();
                }
                getAllExpenses(storyId) {
                    var url = this._apiUrl.getAllExpenses + '/' + storyId;
                    return this._apiService.get(url);
                }
                getAllExpensesByCategory(storyId) {
                    var url = this._apiUrl.getAllExpensesByCategory + '/' + storyId;
                    return this._apiService.get(url);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUtJLFlBQW9CLE9BQWMsRUFBVSxXQUFzQjtvQkFBOUMsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFIM0Qsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO29CQUN6QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7b0JBRzFCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2dCQUNLLGNBQWMsQ0FBQyxPQUFPO29CQUV6QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO29CQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ00sd0JBQXdCLENBQUMsT0FBTztvQkFFbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO29CQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBRU8sV0FBVyxDQUFDLEtBQWU7b0JBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRU8scUJBQXFCO29CQUN6QixJQUFJLENBQUMsV0FBVzt5QkFDZixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7eUJBQ2pDLFNBQVMsQ0FBQyxFQUFFO3dCQUNULElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7d0JBQzVCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO29CQUN0QyxDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDO2dCQUNPLDBCQUEwQjtvQkFFOUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztvQkFDeEMsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO29CQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMzQixjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtvQkFDMUcsQ0FBQztvQkFDRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxDQUFDO2dCQUM5QyxDQUFDO1lBQ0wsQ0FBQztZQTFDRDtnQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtZQUNiLHFEQXlDQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2VTdG9yeS9leHBlbnNlU3Rvcnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlfSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UnO1xyXG5pbXBvcnQge0FwaVVybH0gZnJvbSAnLi4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvYXBpL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VTdG9yeVNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyBleHBlbnNlQ2F0ZWdvcnlCeUlkID0ge307XHJcbiAgICBwdWJsaWMgZXhwZW5zZUNhdGVnb3JpZXMgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGlVcmw6QXBpVXJsLCBwcml2YXRlIF9hcGlTZXJ2aWNlOkFwaVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRFeHBlbnNlQ2F0ZWdvcmllcygpO1xyXG4gICAgIH1cclxuICAgIHB1YmxpYyBnZXRBbGxFeHBlbnNlcyhzdG9yeUlkKTogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5nZXRBbGxFeHBlbnNlcyArICcvJyArIHN0b3J5SWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UuZ2V0KHVybCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0QWxsRXhwZW5zZXNCeUNhdGVnb3J5KHN0b3J5SWQpIDogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaVVybC5nZXRBbGxFeHBlbnNlc0J5Q2F0ZWdvcnkgKyAnLycgKyBzdG9yeUlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hcGlTZXJ2aWNlLmdldCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvYWRFeHBlbnNlQ2F0ZWdvcmllcygpe1xyXG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAuZ2V0KHRoaXMuX2FwaVVybC5leHBlbnNlQ2F0ZWdvcnkpXHJcbiAgICAgICAgLnN1YnNjcmliZShlYz0+e1xyXG4gICAgICAgICAgICB0aGlzLmV4cGVuc2VDYXRlZ29yaWVzID0gZWM7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFeHBlbnNlQ2F0ZWdvcmllc0J5SWQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBidWlsZEV4cGVuc2VDYXRlZ29yaWVzQnlJZCgpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbGVuID0gdGhpcy5leHBlbnNlQ2F0ZWdvcmllcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNhdGVnb3JpZXNCeUlkID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzQnlJZFt0aGlzLmV4cGVuc2VDYXRlZ29yaWVzW2ldLmV4cGVuc2VTdWJDYXRlZ29yeUlkXSA9IHRoaXMuZXhwZW5zZUNhdGVnb3JpZXNbaV07IC8vcmUtdmlzaXRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5leHBlbnNlQ2F0ZWdvcnlCeUlkID0gY2F0ZWdvcmllc0J5SWQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
