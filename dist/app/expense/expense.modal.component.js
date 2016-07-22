System.register(['@angular/core', 'ng2-bs3-modal/ng2-bs3-modal', '../shared/datepicker/datepicker.component', './expense', 'ng2-select/ng2-select', './expenseCategories.service', '../shared/iconmapper/iconmapper.service', './expense.service'], function(exports_1, context_1) {
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
    var core_1, ng2_bs3_modal_1, datepicker_component_1, expense_1, ng2_select_1, expenseCategories_service_1, iconmapper_service_1, expense_service_1;
    var ExpenseModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            },
            function (datepicker_component_1_1) {
                datepicker_component_1 = datepicker_component_1_1;
            },
            function (expense_1_1) {
                expense_1 = expense_1_1;
            },
            function (ng2_select_1_1) {
                ng2_select_1 = ng2_select_1_1;
            },
            function (expenseCategories_service_1_1) {
                expenseCategories_service_1 = expenseCategories_service_1_1;
            },
            function (iconmapper_service_1_1) {
                iconmapper_service_1 = iconmapper_service_1_1;
            },
            function (expense_service_1_1) {
                expense_service_1 = expense_service_1_1;
            }],
        execute: function() {
            let ExpenseModalComponent = class ExpenseModalComponent {
                constructor(_expenseCategoriesService, _iconMapper, _expenseService) {
                    this._expenseCategoriesService = _expenseCategoriesService;
                    this._iconMapper = _iconMapper;
                    this._expenseService = _expenseService;
                    this.items = [];
                    this.notify = new core_1.EventEmitter();
                    this.categoryIcon = 'fa fa-list';
                    this.expense = new expense_1.Expense();
                }
                ngOnInit() {
                    this._expenseCategoriesService.categories.forEach((category) => {
                        this.items.push({
                            id: category.expenseSubCategoryId,
                            text: `${category.description}`
                        });
                    });
                }
                onChange(event) {
                    console.log('onChange');
                    this.files = event.srcElement.files;
                    console.log(this.files);
                }
                closed() {
                    this.modal.close();
                }
                dismissed() {
                    console.log("I am in dismissed expense");
                    //  this.expense.expenseUtcDt = this.datepicker.value;
                    console.log("date selected is: " + this.expense.expenseUtcDt);
                    if (this.expense) {
                        console.log("Expense::");
                        console.log(JSON.stringify(this.expense));
                    }
                    this.expense = new expense_1.Expense();
                    this.datepickerInput.reset(); //TODO: replace this temporary solution
                    this.modal.dismiss();
                }
                open(storyId) {
                    console.log("YOU CLICKED OPEN::" + storyId);
                    this.expense.expenseStoryId = storyId;
                    this.modal.open('sm');
                }
                submit() {
                    var fn;
                    if (this.files && this.files.length > 0) {
                        fn = this._expenseService.addExpense(this.expense, this.files);
                    }
                    else {
                        fn = this._expenseService.addOnlyExpense(this.expense);
                    }
                    console.log('NOTIFY');
                    console.log(this.notify);
                    fn.subscribe((response) => {
                        console.log("In subscribe method");
                        console.log(response);
                        if (response.success) {
                            console.log("x.success");
                            console.log(response.data);
                            this.notify.emit(response.data);
                        }
                    });
                }
                notifyResponse(response) {
                    console.log("In subscribe method");
                    console.log(response);
                    if (response.success) {
                        console.log("x.success");
                        console.log(response.data);
                        this.notify.emit(response.data);
                    }
                }
                cancel() {
                    this.modal.dismiss();
                }
                onNotify(message) {
                    this.expense.expenseUtcDt = message;
                }
                // ng2-select
                selected(value) {
                    var category = this._expenseCategoriesService.categories.find(x => x.expenseSubCategoryId == value.id);
                    if (category) {
                        console.log('Expense categories');
                        console.log(category);
                        this.expense.expenseCategoryId = category.expenseCategoryId;
                    }
                    this.expense.expenseSubCategoryId = value.id;
                    this.categoryIcon = 'fa fa-list';
                    if (this._iconMapper.mapper[value.id]) {
                        this.categoryIcon = this._iconMapper.mapper[value.id];
                    }
                }
            };
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], ExpenseModalComponent.prototype, "notify", void 0);
            __decorate([
                core_1.ViewChild('modal'), 
                __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
            ], ExpenseModalComponent.prototype, "modal", void 0);
            __decorate([
                core_1.ViewChild('datepickerInput'), 
                __metadata('design:type', Object)
            ], ExpenseModalComponent.prototype, "datepickerInput", void 0);
            ExpenseModalComponent = __decorate([
                core_1.Component({
                    selector: 'expense',
                    templateUrl: 'app/expense/expense.modal.component.html',
                    directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, datepicker_component_1.DatePicker, ng2_select_1.SELECT_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [expenseCategories_service_1.ExpenseCategoriesService, iconmapper_service_1.IconMapperService, expense_service_1.ExpenseService])
            ], ExpenseModalComponent);
            exports_1("ExpenseModalComponent", ExpenseModalComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFXSSxZQUFvQix5QkFBa0QsRUFBVSxXQUE2QixFQUNyRyxlQUE4QjtvQkFEbEIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7b0JBQ3JHLG9CQUFlLEdBQWYsZUFBZSxDQUFlO29CQVg5QixVQUFLLEdBQWMsRUFBRSxDQUFDO29CQUVwQixXQUFNLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO29CQXdCL0QsaUJBQVksR0FBUyxZQUFZLENBQUM7b0JBYnBDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUssUUFBUTtvQkFDWCxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FDN0MsQ0FBQyxRQUFRO3dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOzRCQUNaLEVBQUUsRUFBRSxRQUFRLENBQUMsb0JBQW9COzRCQUNqQyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFO3lCQUNsQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFNRCxRQUFRLENBQUMsS0FBSztvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO29CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxNQUFNO29CQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRUQs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QWJqQztnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsMENBQTBDO29CQUN2RCxVQUFVLEVBQUMsQ0FBQyxnQ0FBZ0IsRUFBQyxpQ0FBVSxFQUFFLDhCQUFpQixDQUFDO2lCQUM5RCxDQUFDOztxQ0FBQTtZQUNGLHlEQWdIQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSAnLi4vc2hhcmVkL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4vZXhwZW5zZSdcclxuaW1wb3J0IHtTRUxFQ1RfRElSRUNUSVZFU30gZnJvbSAnbmcyLXNlbGVjdC9uZzItc2VsZWN0JztcclxuaW1wb3J0IHtFeHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2V9IGZyb20gJy4vZXhwZW5zZUNhdGVnb3JpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7SWNvbk1hcHBlclNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9pY29ubWFwcGVyL2ljb25tYXBwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZVNlcnZpY2V9IGZyb20gJy4vZXhwZW5zZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdleHBlbnNlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2V4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltNT0RBTF9ESVJFQ1RJVkVTLERhdGVQaWNrZXIsIFNFTEVDVF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZU1vZGFsQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSBpdGVtczpBcnJheTxhbnk+ID0gW107XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6IEV2ZW50RW1pdHRlcjxFeHBlbnNlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXhwZW5zZT4oKTtcclxuICAgIFxyXG4gICAgQFZpZXdDaGlsZCgnbW9kYWwnKVxyXG4gICAgbW9kYWw6IE1vZGFsQ29tcG9uZW50O1xyXG4gICAgXHJcbiAgICBAVmlld0NoaWxkKCdkYXRlcGlja2VySW5wdXQnKSBkYXRlcGlja2VySW5wdXQ7XHJcbiAgICBleHBlbnNlIDogRXhwZW5zZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2U6RXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlLCBwcml2YXRlIF9pY29uTWFwcGVyOkljb25NYXBwZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZXhwZW5zZVNlcnZpY2U6RXhwZW5zZVNlcnZpY2UpXHJcbiAgICAge1xyXG4gICAgICAgICB0aGlzLmV4cGVuc2UgPSBuZXcgRXhwZW5zZSgpO1xyXG4gICAgIH1cclxuICAgXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuX2V4cGVuc2VDYXRlZ29yaWVzU2VydmljZS5jYXRlZ29yaWVzLmZvckVhY2goXHJcbiAgICAgICAgICAgIChjYXRlZ29yeSkgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5leHBlbnNlU3ViQ2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtjYXRlZ29yeS5kZXNjcmlwdGlvbn1gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlJY29uOnN0cmluZyA9J2ZhIGZhLWxpc3QnO1xyXG4gIFxyXG4gICAgcHVibGljIGZpbGVzOkFycmF5PGFueT47XHJcblxyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25DaGFuZ2UnKTtcclxuICAgICAgICB0aGlzLmZpbGVzID0gZXZlbnQuc3JjRWxlbWVudC5maWxlcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZWQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NlZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW4gZGlzbWlzc2VkIGV4cGVuc2VcIik7XHJcbiAgICAgICAgXHJcbiAgICAgIC8vICB0aGlzLmV4cGVuc2UuZXhwZW5zZVV0Y0R0ID0gdGhpcy5kYXRlcGlja2VyLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGF0ZSBzZWxlY3RlZCBpczogXCIrIHRoaXMuZXhwZW5zZS5leHBlbnNlVXRjRHQpO1xyXG4gICAgICAgIGlmKHRoaXMuZXhwZW5zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4cGVuc2U6OlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5leHBlbnNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXhwZW5zZSA9IG5ldyBFeHBlbnNlKCk7XHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VySW5wdXQucmVzZXQoKTsgLy9UT0RPOiByZXBsYWNlIHRoaXMgdGVtcG9yYXJ5IHNvbHV0aW9uXHJcbiAgICAgICAgdGhpcy5tb2RhbC5kaXNtaXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihzdG9yeUlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJZT1UgQ0xJQ0tFRCBPUEVOOjpcIitzdG9yeUlkKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmV4cGVuc2UuZXhwZW5zZVN0b3J5SWQgPSBzdG9yeUlkO1xyXG4gICAgICAgIHRoaXMubW9kYWwub3Blbignc20nKTtcclxuICAgIH1cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICB2YXIgZm47ICAgXHJcbiAgICAgICAgaWYodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm4gPSB0aGlzLl9leHBlbnNlU2VydmljZS5hZGRFeHBlbnNlKHRoaXMuZXhwZW5zZSwgdGhpcy5maWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmbiA9IHRoaXMuX2V4cGVuc2VTZXJ2aWNlLmFkZE9ubHlFeHBlbnNlKHRoaXMuZXhwZW5zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOT1RJRlknKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vdGlmeSk7XHJcbiAgICAgICAgZm4uc3Vic2NyaWJlKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbiBzdWJzY3JpYmUgbWV0aG9kXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieC5zdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KDxFeHBlbnNlPnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG5vdGlmeVJlc3BvbnNlKHJlc3BvbnNlOmFueSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluIHN1YnNjcmliZSBtZXRob2RcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4LnN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoPEV4cGVuc2U+cmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmRpc21pc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5vdGlmeShtZXNzYWdlOnN0cmluZyk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VVdGNEdCA9IG1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICAvLyBuZzItc2VsZWN0XHJcbiAgcHVibGljIHNlbGVjdGVkKHZhbHVlOmFueSk6dm9pZCB7XHJcbiAgICAgIHZhciBjYXRlZ29yeSA9IHRoaXMuX2V4cGVuc2VDYXRlZ29yaWVzU2VydmljZS5jYXRlZ29yaWVzLmZpbmQoeD0+eC5leHBlbnNlU3ViQ2F0ZWdvcnlJZCA9PSB2YWx1ZS5pZCk7XHJcbiAgICAgIGlmKGNhdGVnb3J5KXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdFeHBlbnNlIGNhdGVnb3JpZXMnKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcclxuICAgICAgICAgIHRoaXMuZXhwZW5zZS5leHBlbnNlQ2F0ZWdvcnlJZCA9IGNhdGVnb3J5LmV4cGVuc2VDYXRlZ29yeUlkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZXhwZW5zZS5leHBlbnNlU3ViQ2F0ZWdvcnlJZCA9IHZhbHVlLmlkO1xyXG4gICAgICB0aGlzLmNhdGVnb3J5SWNvbj0nZmEgZmEtbGlzdCc7XHJcbiAgICAgIGlmKHRoaXMuX2ljb25NYXBwZXIubWFwcGVyW3ZhbHVlLmlkXSkge1xyXG4gICAgICAgICAgdGhpcy5jYXRlZ29yeUljb24gPSB0aGlzLl9pY29uTWFwcGVyLm1hcHBlclt2YWx1ZS5pZF07XHJcbiAgICAgIH1cclxuIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
