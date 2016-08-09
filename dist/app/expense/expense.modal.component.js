System.register(['@angular/core', 'ng2-bs3-modal/ng2-bs3-modal', '../shared/datepicker/datepicker.component', './expense', 'ng2-select/ng2-select', './expenseCategories.service', '../shared/iconmapper/iconmapper.service', './expense.service', '../shared/alert/dtalert.component'], function(exports_1, context_1) {
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
    var core_1, ng2_bs3_modal_1, datepicker_component_1, expense_1, ng2_select_1, expenseCategories_service_1, iconmapper_service_1, expense_service_1, dtalert_component_1;
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
            },
            function (dtalert_component_1_1) {
                dtalert_component_1 = dtalert_component_1_1;
            }],
        execute: function() {
            let ExpenseModalComponent = class ExpenseModalComponent {
                constructor(_expenseCategoriesService, _iconMapper, _expenseService) {
                    this._expenseCategoriesService = _expenseCategoriesService;
                    this._iconMapper = _iconMapper;
                    this._expenseService = _expenseService;
                    this.items = [];
                    this.notify = new core_1.EventEmitter();
                    this.isEdit = false;
                    this.selectedCategory = null;
                    this.categoryIcon = 'fa fa-list';
                    this.previewImageUrl = '';
                    this.file = null;
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
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
                    this.readThumbnail(event);
                }
                //src: http://raydaq.com/example-preview-and-auto-resize-images-for-uploading-angular2-typescript/
                readThumbnail(event) {
                    var img = document.createElement("img");
                    this.file = window.URL.createObjectURL(event.srcElement.files[0]);
                    img.src = window.URL.createObjectURL(event.srcElement.files[0]);
                    var reader, target;
                    reader = new FileReader();
                    // Add an event listener to deal with the file when the reader is complete
                    reader.addEventListener("load", (event1) => {
                        // Get the event.target.result from the reader (base64 of the image)
                        img.src = event1.target.result;
                        // Resize the image
                        var resized_img = this.resize(img, 500, 200);
                        // Push the img src (base64 string) into our array that we display in our html template
                        this.previewImageUrl = resized_img;
                    }, false);
                    reader.readAsDataURL(event.srcElement.files[0]);
                }
                resize(img, MAX_WIDTH = 900, MAX_HEIGHT = 900) {
                    var canvas = document.createElement("canvas");
                    console.log("Size Before: " + img.src.length + " bytes");
                    var width = img.width;
                    var height = img.height;
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    }
                    else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, width, height);
                    var dataUrl = canvas.toDataURL('image/png');
                    // IMPORTANT: 'jpeg' NOT 'jpg'
                    console.log("Size After:  " + dataUrl.length + " bytes");
                    return dataUrl;
                }
                closed() {
                    this.modal.close();
                }
                dismissed() {
                    this.reset();
                    this.modal.dismiss();
                }
                reset() {
                    this.isEdit = false;
                    this.expense = new expense_1.Expense();
                    this.previewImageUrl = null;
                    this.categorySelect.remove(this.selectedItem);
                    this.categoryIcon = 'fa fa-list';
                    this.selectedCategory = null;
                    this.files = null;
                    this.datepickerInput.reset(); //TODO: replace this temporary solution
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
                }
                open(storyId) {
                    this.selectedCategory = {};
                    this.expense.expenseStoryId = storyId;
                    this.modal.open('sm');
                }
                edit(expense) {
                    this.isEdit = true;
                    this.expense = expense;
                    console.log("EXPENSE");
                    console.log(JSON.stringify(this.expense));
                    if (this.expense.receiptThumbnail) {
                        this.previewImageUrl = "data:image/png;base64," + this.expense.receiptThumbnail;
                    }
                    this.selectedCategory = this.items.find(x => x.id == this.expense.expenseSubCategoryId);
                    this.datepickerInput.updateDate(this.expense.expenseUtcDt);
                    this.modal.open('sm');
                }
                submit() {
                    if (!this.validate())
                        return;
                    var fn;
                    if (this.files && this.files.length > 0) {
                        if (this.isEdit) {
                            fn = this._expenseService.updateExpense(this.expense, this.files);
                        }
                        else {
                            fn = this._expenseService.addExpense(this.expense, this.files);
                        }
                    }
                    else {
                        if (this.isEdit) {
                            fn = this._expenseService.updateOnlyExpense(this.expense);
                        }
                        else {
                            fn = this._expenseService.addOnlyExpense(this.expense);
                        }
                    }
                    fn.subscribe((response) => {
                        if (response.success) {
                            this.notify.emit(response.data);
                        }
                    }, error => { }, completed => { this.isEdit = false; });
                }
                validate() {
                    let isValid = false;
                    if (this.expense.expenseSubCategoryId == null) {
                        this.dtAlert.failure("Please select a valid expense category");
                    }
                    else if (this.expense.amount == null || this.expense.amount <= 0) {
                        this.dtAlert.failure("Please enter a valid amount");
                    }
                    else if (this.expense.expenseUtcDt == null) {
                        this.dtAlert.failure("Please select a valid expense date");
                    }
                    else {
                        isValid = true;
                    }
                    return isValid;
                }
                cancel() {
                    this.modal.dismiss();
                    this.isEdit = false;
                }
                onNotify(message) {
                    this.expense.expenseUtcDt = message;
                }
                // ng2-select
                selected(value) {
                    var category = this._expenseCategoriesService.categories.find(x => x.expenseSubCategoryId == value.id);
                    this.selectedItem = category;
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
                __metadata('design:type', datepicker_component_1.DatePicker)
            ], ExpenseModalComponent.prototype, "datepickerInput", void 0);
            __decorate([
                core_1.ViewChild(ng2_select_1.SelectComponent), 
                __metadata('design:type', ng2_select_1.SelectComponent)
            ], ExpenseModalComponent.prototype, "categorySelect", void 0);
            ExpenseModalComponent = __decorate([
                core_1.Component({
                    selector: 'expense',
                    templateUrl: 'app/expense/expense.modal.component.html',
                    directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, datepicker_component_1.DatePicker, ng2_select_1.SELECT_DIRECTIVES, dtalert_component_1.DtAlertComponent]
                }), 
                __metadata('design:paramtypes', [expenseCategories_service_1.ExpenseCategoriesService, iconmapper_service_1.IconMapperService, expense_service_1.ExpenseService])
            ], ExpenseModalComponent);
            exports_1("ExpenseModalComponent", ExpenseModalComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBY0ksWUFBb0IseUJBQWtELEVBQzlELFdBQTZCLEVBQzdCLGVBQThCO29CQUZsQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQXlCO29CQUM5RCxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7b0JBQzdCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO29CQWY5QixVQUFLLEdBQWMsRUFBRSxDQUFDO29CQUVwQixXQUFNLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO29CQVU5RCxXQUFNLEdBQUcsS0FBSyxDQUFDO29CQVFmLHFCQUFnQixHQUFHLElBQUksQ0FBQztvQkFXekIsaUJBQVksR0FBUyxZQUFZLENBQUM7b0JBR3pDLG9CQUFlLEdBQVEsRUFBRSxDQUFDO29CQVNsQixTQUFJLEdBQUUsSUFBSSxDQUFDO29CQTFCZCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkFFSyxRQUFRO29CQUNYLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUM3QyxDQUFDLFFBQVE7d0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ1osRUFBRSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7NEJBQ2pDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7eUJBQ2xDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQU1ELFFBQVEsQ0FBQyxLQUFLO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcs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d0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDO29CQUNoRSxDQUFDO29CQUNELElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFlBQVksR0FBQyxZQUFZLENBQUM7b0JBQy9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMxRCxDQUFDO2dCQUNOLENBQUM7WUFDRixDQUFDO1lBNU1HO2dCQUFDLGFBQU0sRUFBRTs7aUVBQUE7WUFFVDtnQkFBQyxnQkFBUyxDQUFDLE9BQU8sQ0FBQzs7Z0VBQUE7WUFHbkI7Z0JBQUMsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQzs7MEVBQUE7WUFFN0I7Z0JBQUMsZ0JBQVMsQ0FBQyw0QkFBZSxDQUFDOzt5RUFBQTtZQWYvQjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsMENBQTBDO29CQUN2RCxVQUFVLEVBQUMsQ0FBQyxnQ0FBZ0IsRUFBQyxpQ0FBVSxFQUFFLDhCQUFpQixFQUFFLG9DQUFnQixDQUFDO2lCQUNoRixDQUFDOztxQ0FBQTtZQUNGLHlEQStNQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSAnLi4vc2hhcmVkL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4vZXhwZW5zZSdcclxuaW1wb3J0IHtTZWxlY3RDb21wb25lbnQsIFNFTEVDVF9ESVJFQ1RJVkVTfSBmcm9tICduZzItc2VsZWN0L25nMi1zZWxlY3QnO1xyXG5pbXBvcnQge0V4cGVuc2VDYXRlZ29yaWVzU2VydmljZX0gZnJvbSAnLi9leHBlbnNlQ2F0ZWdvcmllcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtJY29uTWFwcGVyU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2ljb25tYXBwZXIvaWNvbm1hcHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlU2VydmljZX0gZnJvbSAnLi9leHBlbnNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0R0QWxlcnRDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9hbGVydC9kdGFsZXJ0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZXhwZW5zZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9leHBlbnNlL2V4cGVuc2UubW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbTU9EQUxfRElSRUNUSVZFUyxEYXRlUGlja2VyLCBTRUxFQ1RfRElSRUNUSVZFUywgRHRBbGVydENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VNb2RhbENvbXBvbmVudHtcclxuICAgIHByaXZhdGUgaXRlbXM6QXJyYXk8YW55PiA9IFtdO1xyXG4gICAgZHRBbGVydDpEdEFsZXJ0Q29tcG9uZW50O1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeTogRXZlbnRFbWl0dGVyPEV4cGVuc2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxFeHBlbnNlPigpO1xyXG4gICAgXHJcbiAgICBAVmlld0NoaWxkKCdtb2RhbCcpXHJcbiAgICBtb2RhbDogTW9kYWxDb21wb25lbnQ7XHJcbiAgICBcclxuICAgIEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXJJbnB1dCcpIGRhdGVwaWNrZXJJbnB1dDpEYXRlUGlja2VyO1xyXG4gICAgZXhwZW5zZSA6IEV4cGVuc2U7XHJcbiAgICBAVmlld0NoaWxkKFNlbGVjdENvbXBvbmVudCkgY2F0ZWdvcnlTZWxlY3Q6U2VsZWN0Q29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRJdGVtO1xyXG4gICAgcHJpdmF0ZSBpc0VkaXQgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V4cGVuc2VDYXRlZ29yaWVzU2VydmljZTpFeHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2UsIFxyXG4gICAgcHJpdmF0ZSBfaWNvbk1hcHBlcjpJY29uTWFwcGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgX2V4cGVuc2VTZXJ2aWNlOkV4cGVuc2VTZXJ2aWNlKVxyXG4gICAge1xyXG4gICAgICAgICB0aGlzLmR0QWxlcnQgPSBuZXcgRHRBbGVydENvbXBvbmVudCgpO1xyXG4gICAgICAgICB0aGlzLmV4cGVuc2UgPSBuZXcgRXhwZW5zZSgpO1xyXG4gICAgIH1cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRDYXRlZ29yeSA9IG51bGw7XHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuX2V4cGVuc2VDYXRlZ29yaWVzU2VydmljZS5jYXRlZ29yaWVzLmZvckVhY2goXHJcbiAgICAgICAgICAgIChjYXRlZ29yeSkgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5leHBlbnNlU3ViQ2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtjYXRlZ29yeS5kZXNjcmlwdGlvbn1gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlJY29uOnN0cmluZyA9J2ZhIGZhLWxpc3QnO1xyXG4gIFxyXG4gICAgcHVibGljIGZpbGVzOkFycmF5PGFueT47XHJcbiAgICBwcmV2aWV3SW1hZ2VVcmw6c3RyaW5nPScnO1xyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25DaGFuZ2UnKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZpbGVzID0gZXZlbnQuc3JjRWxlbWVudC5maWxlcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuICAgICAgICB0aGlzLnJlYWRUaHVtYm5haWwoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGZpbGU9IG51bGw7XHJcbiAgICAvL3NyYzogaHR0cDovL3JheWRhcS5jb20vZXhhbXBsZS1wcmV2aWV3LWFuZC1hdXRvLXJlc2l6ZS1pbWFnZXMtZm9yLXVwbG9hZGluZy1hbmd1bGFyMi10eXBlc2NyaXB0L1xyXG4gICAgcHJpdmF0ZSByZWFkVGh1bWJuYWlsKGV2ZW50KSB7XHJcbiAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICB0aGlzLmZpbGUgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnNyY0VsZW1lbnQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgdmFyIHJlYWRlcjogYW55LCB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBkZWFsIHdpdGggdGhlIGZpbGUgd2hlbiB0aGUgcmVhZGVyIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZXZlbnQxKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGV2ZW50LnRhcmdldC5yZXN1bHQgZnJvbSB0aGUgcmVhZGVyIChiYXNlNjQgb2YgdGhlIGltYWdlKVxyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGV2ZW50MS50YXJnZXQucmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlc2l6ZSB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIHZhciByZXNpemVkX2ltZyA9IHRoaXMucmVzaXplKGltZyw1MDAsMjAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQdXNoIHRoZSBpbWcgc3JjIChiYXNlNjQgc3RyaW5nKSBpbnRvIG91ciBhcnJheSB0aGF0IHdlIGRpc3BsYXkgaW4gb3VyIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VVcmwgPSByZXNpemVkX2ltZ1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdKTsgICAgXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlc2l6ZSAoaW1nLCBNQVhfV0lEVEg6bnVtYmVyID0gOTAwLCBNQVhfSEVJR0hUOm51bWJlciA9IDkwMCl7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2l6ZSBCZWZvcmU6IFwiICsgaW1nLnNyYy5sZW5ndGggKyBcIiBieXRlc1wiKTtcclxuXHJcbiAgICAgICAgdmFyIHdpZHRoID0gaW1nLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWcuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKHdpZHRoID4gTUFYX1dJRFRIKSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgKj0gTUFYX1dJRFRIIC8gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1BWF9XSURUSDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChoZWlnaHQgPiBNQVhfSEVJR0hUKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCAqPSBNQVhfSEVJR0hUIC8gaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gTUFYX0hFSUdIVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7ICBcclxuICAgICAgICAvLyBJTVBPUlRBTlQ6ICdqcGVnJyBOT1QgJ2pwZydcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpemUgQWZ0ZXI6ICBcIiArIGRhdGFVcmwubGVuZ3RoICArIFwiIGJ5dGVzXCIpO1xyXG4gICAgICAgIHJldHVybiBkYXRhVXJsXHJcbiAgICB9XHJcbiAgICBjbG9zZWQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NlZCgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5kaXNtaXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0VkaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmV4cGVuc2UgPSBuZXcgRXhwZW5zZSgpO1xyXG4gICAgICAgIHRoaXMucHJldmlld0ltYWdlVXJsID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5U2VsZWN0LnJlbW92ZSh0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeUljb24gPSAnZmEgZmEtbGlzdCc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpbGVzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRhdGVwaWNrZXJJbnB1dC5yZXNldCgpOyAvL1RPRE86IHJlcGxhY2UgdGhpcyB0ZW1wb3Jhcnkgc29sdXRpb25cclxuICAgICAgICB0aGlzLmR0QWxlcnQgPSBuZXcgRHRBbGVydENvbXBvbmVudCgpO1xyXG4gICAgfVxyXG4gICAgb3BlbihzdG9yeUlkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0ge307XHJcbiAgICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VTdG9yeUlkID0gc3RvcnlJZDtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4oJ3NtJyk7XHJcbiAgICB9XHJcbiAgICBlZGl0KGV4cGVuc2Upe1xyXG4gICAgICAgIHRoaXMuaXNFZGl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmV4cGVuc2UgPSBleHBlbnNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVhQRU5TRVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmV4cGVuc2UpKTtcclxuICAgICAgICBpZih0aGlzLmV4cGVuc2UucmVjZWlwdFRodW1ibmFpbCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVVybCA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiKyB0aGlzLmV4cGVuc2UucmVjZWlwdFRodW1ibmFpbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gdGhpcy5pdGVtcy5maW5kKHg9PnguaWQgPT0gdGhpcy5leHBlbnNlLmV4cGVuc2VTdWJDYXRlZ29yeUlkKTtcclxuICAgICAgICB0aGlzLmRhdGVwaWNrZXJJbnB1dC51cGRhdGVEYXRlICh0aGlzLmV4cGVuc2UuZXhwZW5zZVV0Y0R0KTtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4oJ3NtJylcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIXRoaXMudmFsaWRhdGUoKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgZm47ICAgXHJcbiAgICAgICAgaWYodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYodGhpcy5pc0VkaXQpe1xyXG4gICAgICAgICAgICAgICBmbiA9IHRoaXMuX2V4cGVuc2VTZXJ2aWNlLnVwZGF0ZUV4cGVuc2UodGhpcy5leHBlbnNlLCB0aGlzLmZpbGVzKTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZm4gPSB0aGlzLl9leHBlbnNlU2VydmljZS5hZGRFeHBlbnNlKHRoaXMuZXhwZW5zZSwgdGhpcy5maWxlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICBmbiA9IHRoaXMuX2V4cGVuc2VTZXJ2aWNlLnVwZGF0ZU9ubHlFeHBlbnNlKHRoaXMuZXhwZW5zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmbiA9IHRoaXMuX2V4cGVuc2VTZXJ2aWNlLmFkZE9ubHlFeHBlbnNlKHRoaXMuZXhwZW5zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm4uc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KDxFeHBlbnNlPnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcj0+e30sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlZCA9PiB7dGhpcy5pc0VkaXQgPSBmYWxzZTt9XHJcbiAgICAgICAgICApO1xyXG4gICAgfVxyXG4gICBcclxuICAgIHZhbGlkYXRlKCk6Ym9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgIGlmKHRoaXMuZXhwZW5zZS5leHBlbnNlU3ViQ2F0ZWdvcnlJZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKFwiUGxlYXNlIHNlbGVjdCBhIHZhbGlkIGV4cGVuc2UgY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5leHBlbnNlLmFtb3VudCA9PSBudWxsIHx8IHRoaXMuZXhwZW5zZS5hbW91bnQgPD0wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgYW1vdW50XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZXhwZW5zZS5leHBlbnNlVXRjRHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShcIlBsZWFzZSBzZWxlY3QgYSB2YWxpZCBleHBlbnNlIGRhdGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgfVxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuZGlzbWlzcygpO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnkobWVzc2FnZTpzdHJpbmcpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZS5leHBlbnNlVXRjRHQgPSBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgLy8gbmcyLXNlbGVjdFxyXG4gIHB1YmxpYyBzZWxlY3RlZCh2YWx1ZTphbnkpOnZvaWQge1xyXG4gICAgICB2YXIgY2F0ZWdvcnkgPSB0aGlzLl9leHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2UuY2F0ZWdvcmllcy5maW5kKHg9PnguZXhwZW5zZVN1YkNhdGVnb3J5SWQgPT0gdmFsdWUuaWQpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGNhdGVnb3J5O1xyXG4gICAgICBpZihjYXRlZ29yeSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXhwZW5zZSBjYXRlZ29yaWVzJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSk7XHJcbiAgICAgICAgICB0aGlzLmV4cGVuc2UuZXhwZW5zZUNhdGVnb3J5SWQgPSBjYXRlZ29yeS5leHBlbnNlQ2F0ZWdvcnlJZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmV4cGVuc2UuZXhwZW5zZVN1YkNhdGVnb3J5SWQgPSB2YWx1ZS5pZDtcclxuICAgICAgdGhpcy5jYXRlZ29yeUljb249J2ZhIGZhLWxpc3QnO1xyXG4gICAgICBpZih0aGlzLl9pY29uTWFwcGVyLm1hcHBlclt2YWx1ZS5pZF0pIHtcclxuICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJY29uID0gdGhpcy5faWNvbk1hcHBlci5tYXBwZXJbdmFsdWUuaWRdO1xyXG4gICAgICB9XHJcbiB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
