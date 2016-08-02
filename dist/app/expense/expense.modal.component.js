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
                    this.selectedCategory = null;
                    this.categoryIcon = 'fa fa-list';
                    this.previewImageUrl = '';
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
                    var dataUrl = canvas.toDataURL('image/jpeg');
                    // IMPORTANT: 'jpeg' NOT 'jpg'
                    console.log("Size After:  " + dataUrl.length + " bytes");
                    return dataUrl;
                }
                closed() {
                    this.modal.close();
                }
                dismissed() {
                    this.expense = new expense_1.Expense();
                    console.log("IN DISMISS");
                    console.log(this.categorySelect.data);
                    console.log("INIT DATA", this.categorySelect.initData);
                    this.categorySelect.remove(this.selectedItem);
                    this.categoryIcon = 'fa fa-list';
                    this.selectedCategory = null;
                    this.datepickerInput.reset(); //TODO: replace this temporary solution
                    this.modal.dismiss();
                }
                open(storyId) {
                    this.selectedCategory = {};
                    this.expense.expenseStoryId = storyId;
                    this.modal.open('sm');
                }
                edit(expense) {
                    this.expense = expense;
                    this.selectedCategory = this.items.find(x => x.id == this.expense.expenseSubCategoryId);
                    this.datepickerInput.updateDate(this.expense.expenseUtcDt);
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
                    fn.subscribe((response) => {
                        if (response.success) {
                            this.notify.emit(response.data);
                        }
                    });
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
                    directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, datepicker_component_1.DatePicker, ng2_select_1.SELECT_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [expenseCategories_service_1.ExpenseCategoriesService, iconmapper_service_1.IconMapperService, expense_service_1.ExpenseService])
            ], ExpenseModalComponent);
            exports_1("ExpenseModalComponent", ExpenseModalComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFhSSxZQUFvQix5QkFBa0QsRUFBVSxXQUE2QixFQUNyRyxlQUE4QjtvQkFEbEIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7b0JBQ3JHLG9CQUFlLEdBQWYsZUFBZSxDQUFlO29CQWI5QixVQUFLLEdBQWMsRUFBRSxDQUFDO29CQUVwQixXQUFNLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO29CQWU5RCxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7b0JBV3pCLGlCQUFZLEdBQVMsWUFBWSxDQUFDO29CQUd6QyxvQkFBZSxHQUFRLEVBQUUsQ0FBQztvQkFoQnJCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUssUUFBUTtvQkFDWCxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FDN0MsQ0FBQyxRQUFRO3dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOzRCQUNaLEVBQUUsRUFBRSxRQUFRLENBQUMsb0JBQW9COzRCQUNqQyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFO3lCQUNsQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFNRCxRQUFRLENBQUMsS0FBSztvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUV4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO29CQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FB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QUFHLFFBQVEsQ0FBQztvQkFDN0IsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQzt3QkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDO29CQUNoRSxDQUFDO29CQUNELElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLFlBQVksR0FBQyxZQUFZLENBQUM7b0JBQy9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMxRCxDQUFDO2dCQUNOLENBQUM7WUFDRixDQUFDO1lBNUpHO2dCQUFDLGFBQU0sRUFBRTs7aUVBQUE7WUFFVDtnQkFBQyxnQkFBUyxDQUFDLE9BQU8sQ0FBQzs7Z0VBQUE7WUFHbkI7Z0JBQUMsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQzs7MEVBQUE7WUFFN0I7Z0JBQUMsZ0JBQVMsQ0FBQyw0QkFBZSxDQUFDOzt5RUFBQTtZQWYvQjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsMENBQTBDO29CQUN2RCxVQUFVLEVBQUMsQ0FBQyxnQ0FBZ0IsRUFBQyxpQ0FBVSxFQUFFLDhCQUFpQixDQUFDO2lCQUM5RCxDQUFDOztxQ0FBQTtZQUNGLHlEQStKQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSAnLi4vc2hhcmVkL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4vZXhwZW5zZSdcclxuaW1wb3J0IHtTZWxlY3RDb21wb25lbnQsIFNFTEVDVF9ESVJFQ1RJVkVTfSBmcm9tICduZzItc2VsZWN0L25nMi1zZWxlY3QnO1xyXG5pbXBvcnQge0V4cGVuc2VDYXRlZ29yaWVzU2VydmljZX0gZnJvbSAnLi9leHBlbnNlQ2F0ZWdvcmllcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtJY29uTWFwcGVyU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2ljb25tYXBwZXIvaWNvbm1hcHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlU2VydmljZX0gZnJvbSAnLi9leHBlbnNlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2V4cGVuc2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvZXhwZW5zZS9leHBlbnNlLm1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W01PREFMX0RJUkVDVElWRVMsRGF0ZVBpY2tlciwgU0VMRUNUX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlTW9kYWxDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIGl0ZW1zOkFycmF5PGFueT4gPSBbXTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpIG5vdGlmeTogRXZlbnRFbWl0dGVyPEV4cGVuc2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxFeHBlbnNlPigpO1xyXG4gICAgXHJcbiAgICBAVmlld0NoaWxkKCdtb2RhbCcpXHJcbiAgICBtb2RhbDogTW9kYWxDb21wb25lbnQ7XHJcbiAgICBcclxuICAgIEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXJJbnB1dCcpIGRhdGVwaWNrZXJJbnB1dDpEYXRlUGlja2VyO1xyXG4gICAgZXhwZW5zZSA6IEV4cGVuc2U7XHJcbiAgICBAVmlld0NoaWxkKFNlbGVjdENvbXBvbmVudCkgY2F0ZWdvcnlTZWxlY3Q6U2VsZWN0Q29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRJdGVtO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlOkV4cGVuc2VDYXRlZ29yaWVzU2VydmljZSwgcHJpdmF0ZSBfaWNvbk1hcHBlcjpJY29uTWFwcGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgX2V4cGVuc2VTZXJ2aWNlOkV4cGVuc2VTZXJ2aWNlKVxyXG4gICAgIHtcclxuICAgICAgICAgdGhpcy5leHBlbnNlID0gbmV3IEV4cGVuc2UoKTtcclxuICAgICB9XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkQ2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgcHVibGljIG5nT25Jbml0KCk6YW55IHtcclxuICAgICAgICB0aGlzLl9leHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2UuY2F0ZWdvcmllcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAoY2F0ZWdvcnkpID0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogY2F0ZWdvcnkuZXhwZW5zZVN1YkNhdGVnb3J5SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYCR7Y2F0ZWdvcnkuZGVzY3JpcHRpb259YCAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhdGVnb3J5SWNvbjpzdHJpbmcgPSdmYSBmYS1saXN0JztcclxuICBcclxuICAgIHB1YmxpYyBmaWxlczpBcnJheTxhbnk+O1xyXG4gICAgcHJldmlld0ltYWdlVXJsOnN0cmluZz0nJztcclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uQ2hhbmdlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5maWxlcyA9IGV2ZW50LnNyY0VsZW1lbnQuZmlsZXM7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XHJcbiAgICAgICAgdGhpcy5yZWFkVGh1bWJuYWlsKGV2ZW50KTtcclxuICAgIH1cclxuICAgIC8vc3JjOiBodHRwOi8vcmF5ZGFxLmNvbS9leGFtcGxlLXByZXZpZXctYW5kLWF1dG8tcmVzaXplLWltYWdlcy1mb3ItdXBsb2FkaW5nLWFuZ3VsYXIyLXR5cGVzY3JpcHQvXHJcbiAgICBwcml2YXRlIHJlYWRUaHVtYm5haWwoZXZlbnQpIHtcclxuICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdKTtcclxuICAgICAgICAgIHZhciByZWFkZXI6IGFueSwgdGFyZ2V0OiBFdmVudFRhcmdldDtcclxuICAgICAgICAgICAgIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gZGVhbCB3aXRoIHRoZSBmaWxlIHdoZW4gdGhlIHJlYWRlciBpcyBjb21wbGV0ZVxyXG4gICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGV2ZW50MSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBldmVudC50YXJnZXQucmVzdWx0IGZyb20gdGhlIHJlYWRlciAoYmFzZTY0IG9mIHRoZSBpbWFnZSlcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBldmVudDEudGFyZ2V0LnJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXNpemUgdGhlIGltYWdlXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzaXplZF9pbWcgPSB0aGlzLnJlc2l6ZShpbWcsNTAwLDIwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUHVzaCB0aGUgaW1nIHNyYyAoYmFzZTY0IHN0cmluZykgaW50byBvdXIgYXJyYXkgdGhhdCB3ZSBkaXNwbGF5IGluIG91ciBodG1sIHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgIHRoaXMucHJldmlld0ltYWdlVXJsID0gcmVzaXplZF9pbWdcclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZXZlbnQuc3JjRWxlbWVudC5maWxlc1swXSk7ICAgIFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZXNpemUgKGltZywgTUFYX1dJRFRIOm51bWJlciA9IDkwMCwgTUFYX0hFSUdIVDpudW1iZXIgPSA5MDApe1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpemUgQmVmb3JlOiBcIiArIGltZy5zcmMubGVuZ3RoICsgXCIgYnl0ZXNcIik7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IGltZy53aWR0aDtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gaW1nLmhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGlmICh3aWR0aCA+IE1BWF9XSURUSCkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICo9IE1BWF9XSURUSCAvIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgd2lkdGggPSBNQVhfV0lEVEg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaGVpZ2h0ID4gTUFYX0hFSUdIVCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggKj0gTUFYX0hFSUdIVCAvIGhlaWdodDtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IE1BWF9IRUlHSFQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICB2YXIgZGF0YVVybCA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL2pwZWcnKTsgIFxyXG4gICAgICAgIC8vIElNUE9SVEFOVDogJ2pwZWcnIE5PVCAnanBnJ1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2l6ZSBBZnRlcjogIFwiICsgZGF0YVVybC5sZW5ndGggICsgXCIgYnl0ZXNcIik7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFVcmxcclxuICAgIH1cclxuICAgIGNsb3NlZCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc2VkKCkge1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZSA9IG5ldyBFeHBlbnNlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJTiBESVNNSVNTXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2F0ZWdvcnlTZWxlY3QuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJTklUIERBVEFcIiwgdGhpcy5jYXRlZ29yeVNlbGVjdC5pbml0RGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeVNlbGVjdC5yZW1vdmUodGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJY29uID0gJ2ZhIGZhLWxpc3QnO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VySW5wdXQucmVzZXQoKTsgLy9UT0RPOiByZXBsYWNlIHRoaXMgdGVtcG9yYXJ5IHNvbHV0aW9uXHJcbiAgICAgICAgdGhpcy5tb2RhbC5kaXNtaXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbihzdG9yeUlkKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0ge307XHJcbiAgICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VTdG9yeUlkID0gc3RvcnlJZDtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4oJ3NtJyk7XHJcbiAgICB9XHJcbiAgICBlZGl0KGV4cGVuc2Upe1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZSA9IGV4cGVuc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gdGhpcy5pdGVtcy5maW5kKHg9PnguaWQgPT0gdGhpcy5leHBlbnNlLmV4cGVuc2VTdWJDYXRlZ29yeUlkKTtcclxuICAgICAgICB0aGlzLmRhdGVwaWNrZXJJbnB1dC51cGRhdGVEYXRlICh0aGlzLmV4cGVuc2UuZXhwZW5zZVV0Y0R0KTtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4oJ3NtJylcclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgdmFyIGZuOyAgIFxyXG4gICAgICAgIGlmKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZuID0gdGhpcy5fZXhwZW5zZVNlcnZpY2UuYWRkRXhwZW5zZSh0aGlzLmV4cGVuc2UsIHRoaXMuZmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm4gPSB0aGlzLl9leHBlbnNlU2VydmljZS5hZGRPbmx5RXhwZW5zZSh0aGlzLmV4cGVuc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmbi5zdWJzY3JpYmUoKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KDxFeHBlbnNlPnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuZGlzbWlzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTm90aWZ5KG1lc3NhZ2U6c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmV4cGVuc2UuZXhwZW5zZVV0Y0R0ID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIC8vIG5nMi1zZWxlY3RcclxuICBwdWJsaWMgc2VsZWN0ZWQodmFsdWU6YW55KTp2b2lkIHtcclxuICAgICAgdmFyIGNhdGVnb3J5ID0gdGhpcy5fZXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlLmNhdGVnb3JpZXMuZmluZCh4PT54LmV4cGVuc2VTdWJDYXRlZ29yeUlkID09IHZhbHVlLmlkKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBjYXRlZ29yeTtcclxuICAgICAgaWYoY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0V4cGVuc2UgY2F0ZWdvcmllcycpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VDYXRlZ29yeUlkID0gY2F0ZWdvcnkuZXhwZW5zZUNhdGVnb3J5SWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VTdWJDYXRlZ29yeUlkID0gdmFsdWUuaWQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnlJY29uPSdmYSBmYS1saXN0JztcclxuICAgICAgaWYodGhpcy5faWNvbk1hcHBlci5tYXBwZXJbdmFsdWUuaWRdKSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5SWNvbiA9IHRoaXMuX2ljb25NYXBwZXIubWFwcGVyW3ZhbHVlLmlkXTtcclxuICAgICAgfVxyXG4gfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
