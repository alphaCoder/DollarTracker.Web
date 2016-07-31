System.register(['@angular/core', './expense', './expense.service', 'ng2-slim-loading-bar/ng2-slim-loading-bar'], function(exports_1, context_1) {
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
    var core_1, expense_1, expense_service_1, ng2_slim_loading_bar_1;
    var DeleteExpenseDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (expense_1_1) {
                expense_1 = expense_1_1;
            },
            function (expense_service_1_1) {
                expense_service_1 = expense_service_1_1;
            },
            function (ng2_slim_loading_bar_1_1) {
                ng2_slim_loading_bar_1 = ng2_slim_loading_bar_1_1;
            }],
        execute: function() {
            let DeleteExpenseDirective = class DeleteExpenseDirective {
                constructor(_expenseService, _slimLoader) {
                    this._expenseService = _expenseService;
                    this._slimLoader = _slimLoader;
                    this.expense = null;
                    this.notify = new core_1.EventEmitter();
                }
                onClick() {
                    this._slimLoader.complete();
                    this._expenseService
                        .deleteExpense(this.expense.expenseId)
                        .subscribe(x => {
                        this.notify.emit(this.expense);
                        this._slimLoader.complete();
                    }, (error) => {
                        this._slimLoader.complete();
                    });
                }
            };
            __decorate([
                core_1.Input("deleteExpense"), 
                __metadata('design:type', expense_1.Expense)
            ], DeleteExpenseDirective.prototype, "expense", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], DeleteExpenseDirective.prototype, "notify", void 0);
            __decorate([
                core_1.HostListener('click'), 
                __metadata('design:type', Function), 
                __metadata('design:paramtypes', []), 
                __metadata('design:returntype', void 0)
            ], DeleteExpenseDirective.prototype, "onClick", null);
            DeleteExpenseDirective = __decorate([
                core_1.Directive({
                    selector: '[deleteExpense]',
                }), 
                __metadata('design:paramtypes', [expense_service_1.ExpenseService, ng2_slim_loading_bar_1.SlimLoadingBarService])
            ], DeleteExpenseDirective);
            exports_1("DeleteExpenseDirective", DeleteExpenseDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZGVsZXRlRXhwZW5zZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFFSSxZQUFvQixlQUE4QixFQUFTLFdBQWlDO29CQUF4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtvQkFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7b0JBQ3BFLFlBQU8sR0FBVSxJQUFJLENBQUM7b0JBQ3BDLFdBQU0sR0FBeUIsSUFBSSxtQkFBWSxFQUFXLENBQUM7Z0JBRjBCLENBQUM7Z0JBSXpFLE9BQU87b0JBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzVCLElBQUksQ0FBQyxlQUFlO3lCQUNuQixhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7eUJBQ3JDLFNBQVMsQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEMsQ0FBQyxFQUFDLENBQUMsS0FBSzt3QkFDSixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUNoQyxDQUFDLENBQUMsQ0FBQztnQkFDVCxDQUFDO1lBQ0gsQ0FBQztZQWRHO2dCQUFDLFlBQUssQ0FBQyxlQUFlLENBQUM7O21FQUFBO1lBQ3ZCO2dCQUFDLGFBQU0sRUFBRTs7a0VBQUE7WUFFVDtnQkFBQyxtQkFBWSxDQUFDLE9BQU8sQ0FBQzs7OztpRUFBQTtZQVYxQjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7aUJBRTlCLENBQUM7O3NDQUFBO1lBQ0YsMkRBaUJDLENBQUEiLCJmaWxlIjoiZXhwZW5zZS9kZWxldGVFeHBlbnNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9zdExpc3RlbmVyLCBEaXJlY3RpdmUsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RXhwZW5zZX0gZnJvbSAnLi9leHBlbnNlJztcclxuaW1wb3J0IHtFeHBlbnNlU2VydmljZX0gZnJvbSAnLi9leHBlbnNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1NsaW1Mb2FkaW5nQmFyU2VydmljZX0gZnJvbSAnbmcyLXNsaW0tbG9hZGluZy1iYXIvbmcyLXNsaW0tbG9hZGluZy1iYXInO1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2RlbGV0ZUV4cGVuc2VdJyxcclxuICAgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxldGVFeHBlbnNlRGlyZWN0aXZlIHtcclxuIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhwZW5zZVNlcnZpY2U6RXhwZW5zZVNlcnZpY2UscHJpdmF0ZSBfc2xpbUxvYWRlcjpTbGltTG9hZGluZ0JhclNlcnZpY2UpIHt9XHJcbiAgICBASW5wdXQoXCJkZWxldGVFeHBlbnNlXCIpIGV4cGVuc2U6RXhwZW5zZT0gbnVsbDtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6RXZlbnRFbWl0dGVyPEV4cGVuc2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxFeHBlbnNlPigpO1xyXG4gIFxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuY29tcGxldGUoKTtcclxuICAgICAgICB0aGlzLl9leHBlbnNlU2VydmljZVxyXG4gICAgICAgIC5kZWxldGVFeHBlbnNlKHRoaXMuZXhwZW5zZS5leHBlbnNlSWQpXHJcbiAgICAgICAgLnN1YnNjcmliZSh4PT57XHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQodGhpcy5leHBlbnNlKTtcclxuICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0sKGVycm9yKT0+e1xyXG4gICAgICAgICAgICB0aGlzLl9zbGltTG9hZGVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
