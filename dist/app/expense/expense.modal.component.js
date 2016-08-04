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
                    this.isEdit = false;
                    this.selectedCategory = null;
                    this.categoryIcon = 'fa fa-list';
                    this.previewImageUrl = '';
                    this.file = null;
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
                    this.isEdit = false;
                    this.expense = new expense_1.Expense();
                    this.previewImageUrl = null;
                    console.log("IN DISMISS");
                    console.log(this.categorySelect.data);
                    console.log("INIT DATA", this.categorySelect.initData);
                    this.categorySelect.remove(this.selectedItem);
                    this.categoryIcon = 'fa fa-list';
                    this.selectedCategory = null;
                    this.files = null;
                    this.datepickerInput.reset(); //TODO: replace this temporary solution
                    this.modal.dismiss();
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
                    directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, datepicker_component_1.DatePicker, ng2_select_1.SELECT_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [expenseCategories_service_1.ExpenseCategoriesService, iconmapper_service_1.IconMapperService, expense_service_1.ExpenseService])
            ], ExpenseModalComponent);
            exports_1("ExpenseModalComponent", ExpenseModalComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFjSSxZQUFvQix5QkFBa0QsRUFBVSxXQUE2QixFQUNyRyxlQUE4QjtvQkFEbEIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7b0JBQ3JHLG9CQUFlLEdBQWYsZUFBZSxDQUFlO29CQWQ5QixVQUFLLEdBQWMsRUFBRSxDQUFDO29CQUVwQixXQUFNLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO29CQVU5RCxXQUFNLEdBQUcsS0FBSyxDQUFDO29CQU1mLHFCQUFnQixHQUFHLElBQUksQ0FBQztvQkFXekIsaUJBQVksR0FBUyxZQUFZLENBQUM7b0JBR3pDLG9CQUFlLEdBQVEsRUFBRSxDQUFDO29CQVNsQixTQUFJLEdBQUUsSUFBSSxDQUFDO29CQXpCZCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO2dCQUNqQyxDQUFDO2dCQUVLLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQzdDLENBQUMsUUFBUTt3QkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs0QkFDWixFQUFFLEVBQUUsUUFBUSxDQUFDLG9CQUFvQjs0QkFDakMsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRTt5QkFDbEMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBTUQsUUFBUSxDQUFDLEtBQUs7b0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFFeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztvQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FB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QUMsaUNBQVUsRUFBRSw4QkFBaUIsQ0FBQztpQkFDOUQsQ0FBQzs7cUNBQUE7WUFDRix5REEwTEMsQ0FBQSIsImZpbGUiOiJleHBlbnNlL2V4cGVuc2UubW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTU9EQUxfRElSRUNUSVZFUywgTW9kYWxDb21wb25lbnQgfSBmcm9tICduZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwnO1xyXG5pbXBvcnQge0RhdGVQaWNrZXJ9IGZyb20gJy4uL3NoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtFeHBlbnNlfSBmcm9tICcuL2V4cGVuc2UnXHJcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50LCBTRUxFQ1RfRElSRUNUSVZFU30gZnJvbSAnbmcyLXNlbGVjdC9uZzItc2VsZWN0JztcclxuaW1wb3J0IHtFeHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2V9IGZyb20gJy4vZXhwZW5zZUNhdGVnb3JpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7SWNvbk1hcHBlclNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9pY29ubWFwcGVyL2ljb25tYXBwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZVNlcnZpY2V9IGZyb20gJy4vZXhwZW5zZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdleHBlbnNlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2V4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltNT0RBTF9ESVJFQ1RJVkVTLERhdGVQaWNrZXIsIFNFTEVDVF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZU1vZGFsQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSBpdGVtczpBcnJheTxhbnk+ID0gW107XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6IEV2ZW50RW1pdHRlcjxFeHBlbnNlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXhwZW5zZT4oKTtcclxuICAgIFxyXG4gICAgQFZpZXdDaGlsZCgnbW9kYWwnKVxyXG4gICAgbW9kYWw6IE1vZGFsQ29tcG9uZW50O1xyXG4gICAgXHJcbiAgICBAVmlld0NoaWxkKCdkYXRlcGlja2VySW5wdXQnKSBkYXRlcGlja2VySW5wdXQ6RGF0ZVBpY2tlcjtcclxuICAgIGV4cGVuc2UgOiBFeHBlbnNlO1xyXG4gICAgQFZpZXdDaGlsZChTZWxlY3RDb21wb25lbnQpIGNhdGVnb3J5U2VsZWN0OlNlbGVjdENvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkSXRlbTtcclxuICAgIHByaXZhdGUgaXNFZGl0ID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2U6RXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlLCBwcml2YXRlIF9pY29uTWFwcGVyOkljb25NYXBwZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZXhwZW5zZVNlcnZpY2U6RXhwZW5zZVNlcnZpY2UpXHJcbiAgICAge1xyXG4gICAgICAgICB0aGlzLmV4cGVuc2UgPSBuZXcgRXhwZW5zZSgpO1xyXG4gICAgIH1cclxuICAgIHByaXZhdGUgc2VsZWN0ZWRDYXRlZ29yeSA9IG51bGw7XHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuX2V4cGVuc2VDYXRlZ29yaWVzU2VydmljZS5jYXRlZ29yaWVzLmZvckVhY2goXHJcbiAgICAgICAgICAgIChjYXRlZ29yeSkgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5leHBlbnNlU3ViQ2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtjYXRlZ29yeS5kZXNjcmlwdGlvbn1gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlJY29uOnN0cmluZyA9J2ZhIGZhLWxpc3QnO1xyXG4gIFxyXG4gICAgcHVibGljIGZpbGVzOkFycmF5PGFueT47XHJcbiAgICBwcmV2aWV3SW1hZ2VVcmw6c3RyaW5nPScnO1xyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25DaGFuZ2UnKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZpbGVzID0gZXZlbnQuc3JjRWxlbWVudC5maWxlcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuICAgICAgICB0aGlzLnJlYWRUaHVtYm5haWwoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIGZpbGU9IG51bGw7XHJcbiAgICAvL3NyYzogaHR0cDovL3JheWRhcS5jb20vZXhhbXBsZS1wcmV2aWV3LWFuZC1hdXRvLXJlc2l6ZS1pbWFnZXMtZm9yLXVwbG9hZGluZy1hbmd1bGFyMi10eXBlc2NyaXB0L1xyXG4gICAgcHJpdmF0ZSByZWFkVGh1bWJuYWlsKGV2ZW50KSB7XHJcbiAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICB0aGlzLmZpbGUgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnNyY0VsZW1lbnQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgdmFyIHJlYWRlcjogYW55LCB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBkZWFsIHdpdGggdGhlIGZpbGUgd2hlbiB0aGUgcmVhZGVyIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZXZlbnQxKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGV2ZW50LnRhcmdldC5yZXN1bHQgZnJvbSB0aGUgcmVhZGVyIChiYXNlNjQgb2YgdGhlIGltYWdlKVxyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGV2ZW50MS50YXJnZXQucmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlc2l6ZSB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIHZhciByZXNpemVkX2ltZyA9IHRoaXMucmVzaXplKGltZyw1MDAsMjAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQdXNoIHRoZSBpbWcgc3JjIChiYXNlNjQgc3RyaW5nKSBpbnRvIG91ciBhcnJheSB0aGF0IHdlIGRpc3BsYXkgaW4gb3VyIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VVcmwgPSByZXNpemVkX2ltZ1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdKTsgICAgXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlc2l6ZSAoaW1nLCBNQVhfV0lEVEg6bnVtYmVyID0gOTAwLCBNQVhfSEVJR0hUOm51bWJlciA9IDkwMCl7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2l6ZSBCZWZvcmU6IFwiICsgaW1nLnNyYy5sZW5ndGggKyBcIiBieXRlc1wiKTtcclxuXHJcbiAgICAgICAgdmFyIHdpZHRoID0gaW1nLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWcuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKHdpZHRoID4gTUFYX1dJRFRIKSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgKj0gTUFYX1dJRFRIIC8gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1BWF9XSURUSDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChoZWlnaHQgPiBNQVhfSEVJR0hUKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCAqPSBNQVhfSEVJR0hUIC8gaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gTUFYX0hFSUdIVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7ICBcclxuICAgICAgICAvLyBJTVBPUlRBTlQ6ICdqcGVnJyBOT1QgJ2pwZydcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpemUgQWZ0ZXI6ICBcIiArIGRhdGFVcmwubGVuZ3RoICArIFwiIGJ5dGVzXCIpO1xyXG4gICAgICAgIHJldHVybiBkYXRhVXJsXHJcbiAgICB9XHJcbiAgICBjbG9zZWQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NlZCgpIHtcclxuICAgICAgICB0aGlzLmlzRWRpdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZSA9IG5ldyBFeHBlbnNlKCk7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VVcmwgPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU4gRElTTUlTU1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3J5U2VsZWN0LmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5JVCBEQVRBXCIsIHRoaXMuY2F0ZWdvcnlTZWxlY3QuaW5pdERhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlTZWxlY3QucmVtb3ZlKHRoaXMuc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5SWNvbiA9ICdmYSBmYS1saXN0JztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlsZXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlcklucHV0LnJlc2V0KCk7IC8vVE9ETzogcmVwbGFjZSB0aGlzIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gICAgICAgIHRoaXMubW9kYWwuZGlzbWlzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oc3RvcnlJZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZS5leHBlbnNlU3RvcnlJZCA9IHN0b3J5SWQ7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vcGVuKCdzbScpO1xyXG4gICAgfVxyXG4gICAgZWRpdChleHBlbnNlKXtcclxuICAgICAgICB0aGlzLmlzRWRpdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5leHBlbnNlID0gZXhwZW5zZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVYUEVOU0VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5leHBlbnNlKSk7XHJcbiAgICAgICAgaWYodGhpcy5leHBlbnNlLnJlY2VpcHRUaHVtYm5haWwpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VVcmwgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxcIisgdGhpcy5leHBlbnNlLnJlY2VpcHRUaHVtYm5haWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IHRoaXMuaXRlbXMuZmluZCh4PT54LmlkID09IHRoaXMuZXhwZW5zZS5leHBlbnNlU3ViQ2F0ZWdvcnlJZCk7XHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VySW5wdXQudXBkYXRlRGF0ZSAodGhpcy5leHBlbnNlLmV4cGVuc2VVdGNEdCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vcGVuKCdzbScpXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHZhciBmbjsgICBcclxuICAgICAgICBpZih0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzRWRpdCl7XHJcbiAgICAgICAgICAgICAgIGZuID0gdGhpcy5fZXhwZW5zZVNlcnZpY2UudXBkYXRlRXhwZW5zZSh0aGlzLmV4cGVuc2UsIHRoaXMuZmlsZXMpOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBmbiA9IHRoaXMuX2V4cGVuc2VTZXJ2aWNlLmFkZEV4cGVuc2UodGhpcy5leHBlbnNlLCB0aGlzLmZpbGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYodGhpcy5pc0VkaXQpIHtcclxuICAgICAgICAgICAgICAgIGZuID0gdGhpcy5fZXhwZW5zZVNlcnZpY2UudXBkYXRlT25seUV4cGVuc2UodGhpcy5leHBlbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZuID0gdGhpcy5fZXhwZW5zZVNlcnZpY2UuYWRkT25seUV4cGVuc2UodGhpcy5leHBlbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmbi5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5LmVtaXQoPEV4cGVuc2U+cmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yPT57fSxcclxuICAgICAgICAgICAgY29tcGxldGVkID0+IHt0aGlzLmlzRWRpdCA9IGZhbHNlO31cclxuICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuZGlzbWlzcygpO1xyXG4gICAgICAgIHRoaXMuaXNFZGl0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnkobWVzc2FnZTpzdHJpbmcpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZS5leHBlbnNlVXRjRHQgPSBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgLy8gbmcyLXNlbGVjdFxyXG4gIHB1YmxpYyBzZWxlY3RlZCh2YWx1ZTphbnkpOnZvaWQge1xyXG4gICAgICB2YXIgY2F0ZWdvcnkgPSB0aGlzLl9leHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2UuY2F0ZWdvcmllcy5maW5kKHg9PnguZXhwZW5zZVN1YkNhdGVnb3J5SWQgPT0gdmFsdWUuaWQpO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGNhdGVnb3J5O1xyXG4gICAgICBpZihjYXRlZ29yeSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXhwZW5zZSBjYXRlZ29yaWVzJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSk7XHJcbiAgICAgICAgICB0aGlzLmV4cGVuc2UuZXhwZW5zZUNhdGVnb3J5SWQgPSBjYXRlZ29yeS5leHBlbnNlQ2F0ZWdvcnlJZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmV4cGVuc2UuZXhwZW5zZVN1YkNhdGVnb3J5SWQgPSB2YWx1ZS5pZDtcclxuICAgICAgdGhpcy5jYXRlZ29yeUljb249J2ZhIGZhLWxpc3QnO1xyXG4gICAgICBpZih0aGlzLl9pY29uTWFwcGVyLm1hcHBlclt2YWx1ZS5pZF0pIHtcclxuICAgICAgICAgIHRoaXMuY2F0ZWdvcnlJY29uID0gdGhpcy5faWNvbk1hcHBlci5tYXBwZXJbdmFsdWUuaWRdO1xyXG4gICAgICB9XHJcbiB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
