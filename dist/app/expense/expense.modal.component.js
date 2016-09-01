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
                    //   this.datepickerInput.reset(); //TODO: replace this temporary solution
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBY0ksWUFBb0IseUJBQWtELEVBQzlELFdBQTZCLEVBQzdCLGVBQThCO29CQUZsQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQXlCO29CQUM5RCxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7b0JBQzdCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO29CQWY5QixVQUFLLEdBQWMsRUFBRSxDQUFDO29CQUVwQixXQUFNLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO29CQVU5RCxXQUFNLEdBQUcsS0FBSyxDQUFDO29CQVFmLHFCQUFnQixHQUFHLElBQUksQ0FBQztvQkFXekIsaUJBQVksR0FBUyxZQUFZLENBQUM7b0JBR3pDLG9CQUFlLEdBQVEsRUFBRSxDQUFDO29CQVNsQixTQUFJLEdBQUUsSUFBSSxDQUFDO29CQTFCZCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkFFSyxRQUFRO29CQUNYLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUM3QyxDQUFDLFFBQVE7d0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ1osRUFBRSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7NEJBQ2pDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7eUJBQ2xDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQU1ELFFBQVEsQ0FBQyxLQUFLO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcs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Qzt3QkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsaUJBQWlCLENBQUM7b0JBQ2hFLENBQUM7b0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFDLFlBQVksQ0FBQztvQkFDL0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzFELENBQUM7Z0JBQ04sQ0FBQztZQUNGLENBQUM7WUE1TUc7Z0JBQUMsYUFBTSxFQUFFOztpRUFBQTtZQUVUO2dCQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOztnRUFBQTtZQUduQjtnQkFBQyxnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzswRUFBQTtZQUU3QjtnQkFBQyxnQkFBUyxDQUFDLDRCQUFlLENBQUM7O3lFQUFBO1lBZi9CO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFdBQVcsRUFBRSwwQ0FBMEM7b0JBQ3ZELFVBQVUsRUFBQyxDQUFDLGdDQUFnQixFQUFDLGlDQUFVLEVBQUUsOEJBQWlCLEVBQUUsb0NBQWdCLENBQUM7aUJBQ2hGLENBQUM7O3FDQUFBO1lBQ0YseURBK01DLENBQUEiLCJmaWxlIjoiZXhwZW5zZS9leHBlbnNlLm1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1PREFMX0RJUkVDVElWRVMsIE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tICcuLi9zaGFyZWQvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RXhwZW5zZX0gZnJvbSAnLi9leHBlbnNlJ1xyXG5pbXBvcnQge1NlbGVjdENvbXBvbmVudCwgU0VMRUNUX0RJUkVDVElWRVN9IGZyb20gJ25nMi1zZWxlY3QvbmcyLXNlbGVjdCc7XHJcbmltcG9ydCB7RXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlfSBmcm9tICcuL2V4cGVuc2VDYXRlZ29yaWVzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ljb25NYXBwZXJTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvaWNvbm1hcHBlci9pY29ubWFwcGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge0V4cGVuc2VTZXJ2aWNlfSBmcm9tICcuL2V4cGVuc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7RHRBbGVydENvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2FsZXJ0L2R0YWxlcnQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdleHBlbnNlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2V4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltNT0RBTF9ESVJFQ1RJVkVTLERhdGVQaWNrZXIsIFNFTEVDVF9ESVJFQ1RJVkVTLCBEdEFsZXJ0Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZU1vZGFsQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSBpdGVtczpBcnJheTxhbnk+ID0gW107XHJcbiAgICBkdEFsZXJ0OkR0QWxlcnRDb21wb25lbnQ7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OiBFdmVudEVtaXR0ZXI8RXhwZW5zZT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV4cGVuc2U+KCk7XHJcbiAgICBcclxuICAgIEBWaWV3Q2hpbGQoJ21vZGFsJylcclxuICAgIG1vZGFsOiBNb2RhbENvbXBvbmVudDtcclxuICAgIFxyXG4gICAgQFZpZXdDaGlsZCgnZGF0ZXBpY2tlcklucHV0JykgZGF0ZXBpY2tlcklucHV0OkRhdGVQaWNrZXI7XHJcbiAgICBleHBlbnNlIDogRXhwZW5zZTtcclxuICAgIEBWaWV3Q2hpbGQoU2VsZWN0Q29tcG9uZW50KSBjYXRlZ29yeVNlbGVjdDpTZWxlY3RDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW07XHJcbiAgICBwcml2YXRlIGlzRWRpdCA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlOkV4cGVuc2VDYXRlZ29yaWVzU2VydmljZSwgXHJcbiAgICBwcml2YXRlIF9pY29uTWFwcGVyOkljb25NYXBwZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZXhwZW5zZVNlcnZpY2U6RXhwZW5zZVNlcnZpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgIHRoaXMuZHRBbGVydCA9IG5ldyBEdEFsZXJ0Q29tcG9uZW50KCk7XHJcbiAgICAgICAgIHRoaXMuZXhwZW5zZSA9IG5ldyBFeHBlbnNlKCk7XHJcbiAgICAgfVxyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZENhdGVnb3J5ID0gbnVsbDtcclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy5fZXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlLmNhdGVnb3JpZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgKGNhdGVnb3J5KSA9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmV4cGVuc2VTdWJDYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGAke2NhdGVnb3J5LmRlc2NyaXB0aW9ufWAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYXRlZ29yeUljb246c3RyaW5nID0nZmEgZmEtbGlzdCc7XHJcbiAgXHJcbiAgICBwdWJsaWMgZmlsZXM6QXJyYXk8YW55PjtcclxuICAgIHByZXZpZXdJbWFnZVVybDpzdHJpbmc9Jyc7XHJcbiAgICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkNoYW5nZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZmlsZXMgPSBldmVudC5zcmNFbGVtZW50LmZpbGVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4gICAgICAgIHRoaXMucmVhZFRodW1ibmFpbChldmVudCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgZmlsZT0gbnVsbDtcclxuICAgIC8vc3JjOiBodHRwOi8vcmF5ZGFxLmNvbS9leGFtcGxlLXByZXZpZXctYW5kLWF1dG8tcmVzaXplLWltYWdlcy1mb3ItdXBsb2FkaW5nLWFuZ3VsYXIyLXR5cGVzY3JpcHQvXHJcbiAgICBwcml2YXRlIHJlYWRUaHVtYm5haWwoZXZlbnQpIHtcclxuICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgIHRoaXMuZmlsZSA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnNyY0VsZW1lbnQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQuc3JjRWxlbWVudC5maWxlc1swXSk7XHJcbiAgICAgICAgICB2YXIgcmVhZGVyOiBhbnksIHRhcmdldDogRXZlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGRlYWwgd2l0aCB0aGUgZmlsZSB3aGVuIHRoZSByZWFkZXIgaXMgY29tcGxldGVcclxuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChldmVudDEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZXZlbnQudGFyZ2V0LnJlc3VsdCBmcm9tIHRoZSByZWFkZXIgKGJhc2U2NCBvZiB0aGUgaW1hZ2UpXHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gZXZlbnQxLnRhcmdldC5yZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVzaXplIHRoZSBpbWFnZVxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc2l6ZWRfaW1nID0gdGhpcy5yZXNpemUoaW1nLDUwMCwyMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFB1c2ggdGhlIGltZyBzcmMgKGJhc2U2NCBzdHJpbmcpIGludG8gb3VyIGFycmF5IHRoYXQgd2UgZGlzcGxheSBpbiBvdXIgaHRtbCB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVVybCA9IHJlc2l6ZWRfaW1nXHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGV2ZW50LnNyY0VsZW1lbnQuZmlsZXNbMF0pOyAgICBcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVzaXplIChpbWcsIE1BWF9XSURUSDpudW1iZXIgPSA5MDAsIE1BWF9IRUlHSFQ6bnVtYmVyID0gOTAwKXtcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaXplIEJlZm9yZTogXCIgKyBpbWcuc3JjLmxlbmd0aCArIFwiIGJ5dGVzXCIpO1xyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSBpbWcud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IGltZy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xyXG4gICAgICAgICAgICBpZiAod2lkdGggPiBNQVhfV0lEVEgpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCAqPSBNQVhfV0lEVEggLyB3aWR0aDtcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gTUFYX1dJRFRIO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGhlaWdodCA+IE1BWF9IRUlHSFQpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoICo9IE1BWF9IRUlHSFQgLyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBNQVhfSEVJR0hUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFVcmwgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTsgIFxyXG4gICAgICAgIC8vIElNUE9SVEFOVDogJ2pwZWcnIE5PVCAnanBnJ1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2l6ZSBBZnRlcjogIFwiICsgZGF0YVVybC5sZW5ndGggICsgXCIgYnl0ZXNcIik7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFVcmxcclxuICAgIH1cclxuICAgIGNsb3NlZCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc2VkKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLm1vZGFsLmRpc21pc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmlzRWRpdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZSA9IG5ldyBFeHBlbnNlKCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VVcmwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3QucmVtb3ZlKHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5SWNvbiA9ICdmYSBmYS1saXN0JztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZXMgPSBudWxsO1xyXG4gICAgIC8vICAgdGhpcy5kYXRlcGlja2VySW5wdXQucmVzZXQoKTsgLy9UT0RPOiByZXBsYWNlIHRoaXMgdGVtcG9yYXJ5IHNvbHV0aW9uXHJcbiAgICAgICAgdGhpcy5kdEFsZXJ0ID0gbmV3IER0QWxlcnRDb21wb25lbnQoKTtcclxuICAgIH1cclxuICAgIG9wZW4oc3RvcnlJZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZS5leHBlbnNlU3RvcnlJZCA9IHN0b3J5SWQ7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vcGVuKCdzbScpO1xyXG4gICAgfVxyXG4gICAgZWRpdChleHBlbnNlKXtcclxuICAgICAgICB0aGlzLmlzRWRpdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5leHBlbnNlID0gZXhwZW5zZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVYUEVOU0VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5leHBlbnNlKSk7XHJcbiAgICAgICAgaWYodGhpcy5leHBlbnNlLnJlY2VpcHRUaHVtYm5haWwpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VVcmwgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIisgdGhpcy5leHBlbnNlLnJlY2VpcHRUaHVtYm5haWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHRoaXMuaXRlbXMuZmluZCh4PT54LmlkID09IHRoaXMuZXhwZW5zZS5leHBlbnNlU3ViQ2F0ZWdvcnlJZCk7XHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VySW5wdXQudXBkYXRlRGF0ZSAodGhpcy5leHBlbnNlLmV4cGVuc2VVdGNEdCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vcGVuKCdzbScpXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLnZhbGlkYXRlKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGZuOyAgIFxyXG4gICAgICAgIGlmKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXNFZGl0KXtcclxuICAgICAgICAgICAgICAgZm4gPSB0aGlzLl9leHBlbnNlU2VydmljZS51cGRhdGVFeHBlbnNlKHRoaXMuZXhwZW5zZSwgdGhpcy5maWxlcyk7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGZuID0gdGhpcy5fZXhwZW5zZVNlcnZpY2UuYWRkRXhwZW5zZSh0aGlzLmV4cGVuc2UsIHRoaXMuZmlsZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzRWRpdCkge1xyXG4gICAgICAgICAgICAgICAgZm4gPSB0aGlzLl9leHBlbnNlU2VydmljZS51cGRhdGVPbmx5RXhwZW5zZSh0aGlzLmV4cGVuc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm4gPSB0aGlzLl9leHBlbnNlU2VydmljZS5hZGRPbmx5RXhwZW5zZSh0aGlzLmV4cGVuc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZuLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCg8RXhwZW5zZT5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I9Pnt9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZWQgPT4ge3RoaXMuaXNFZGl0ID0gZmFsc2U7fVxyXG4gICAgICAgICAgKTtcclxuICAgIH1cclxuICAgXHJcbiAgICB2YWxpZGF0ZSgpOmJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICBpZih0aGlzLmV4cGVuc2UuZXhwZW5zZVN1YkNhdGVnb3J5SWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShcIlBsZWFzZSBzZWxlY3QgYSB2YWxpZCBleHBlbnNlIGNhdGVnb3J5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuZXhwZW5zZS5hbW91bnQgPT0gbnVsbCB8fCB0aGlzLmV4cGVuc2UuYW1vdW50IDw9MCkge1xyXG4gICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGFtb3VudFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmV4cGVuc2UuZXhwZW5zZVV0Y0R0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUoXCJQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgZXhwZW5zZSBkYXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgIH1cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmRpc21pc3MoKTtcclxuICAgICAgICB0aGlzLmlzRWRpdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTm90aWZ5KG1lc3NhZ2U6c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmV4cGVuc2UuZXhwZW5zZVV0Y0R0ID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIC8vIG5nMi1zZWxlY3RcclxuICBwdWJsaWMgc2VsZWN0ZWQodmFsdWU6YW55KTp2b2lkIHtcclxuICAgICAgdmFyIGNhdGVnb3J5ID0gdGhpcy5fZXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlLmNhdGVnb3JpZXMuZmluZCh4PT54LmV4cGVuc2VTdWJDYXRlZ29yeUlkID09IHZhbHVlLmlkKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBjYXRlZ29yeTtcclxuICAgICAgaWYoY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0V4cGVuc2UgY2F0ZWdvcmllcycpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VDYXRlZ29yeUlkID0gY2F0ZWdvcnkuZXhwZW5zZUNhdGVnb3J5SWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VTdWJDYXRlZ29yeUlkID0gdmFsdWUuaWQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnlJY29uPSdmYSBmYS1saXN0JztcclxuICAgICAgaWYodGhpcy5faWNvbk1hcHBlci5tYXBwZXJbdmFsdWUuaWRdKSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5SWNvbiA9IHRoaXMuX2ljb25NYXBwZXIubWFwcGVyW3ZhbHVlLmlkXTtcclxuICAgICAgfVxyXG4gfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
