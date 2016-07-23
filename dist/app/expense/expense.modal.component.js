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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFXSSxZQUFvQix5QkFBa0QsRUFBVSxXQUE2QixFQUNyRyxlQUE4QjtvQkFEbEIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7b0JBQ3JHLG9CQUFlLEdBQWYsZUFBZSxDQUFlO29CQVg5QixVQUFLLEdBQWMsRUFBRSxDQUFDO29CQUVwQixXQUFNLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO29CQXdCL0QsaUJBQVksR0FBUyxZQUFZLENBQUM7b0JBR3pDLG9CQUFlLEdBQVEsRUFBRSxDQUFDO29CQWhCckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkFFSyxRQUFRO29CQUNYLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUM3QyxDQUFDLFFBQVE7d0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ1osRUFBRSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7NEJBQ2pDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7eUJBQ2xDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQU1ELFFBQVEsQ0FBQyxLQUFLO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFD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LEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzFELENBQUM7Z0JBQ04sQ0FBQztZQUNGLENBQUM7WUFwSkc7Z0JBQUMsYUFBTSxFQUFFOztpRUFBQTtZQUVUO2dCQUFDLGdCQUFTLENBQUMsT0FBTyxDQUFDOztnRUFBQTtZQUduQjtnQkFBQyxnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzswRUFBQTtZQWJqQztnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixXQUFXLEVBQUUsMENBQTBDO29CQUN2RCxVQUFVLEVBQUMsQ0FBQyxnQ0FBZ0IsRUFBQyxpQ0FBVSxFQUFFLDhCQUFpQixDQUFDO2lCQUM5RCxDQUFDOztxQ0FBQTtZQUNGLHlEQXVKQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSAnLi4vc2hhcmVkL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4vZXhwZW5zZSdcclxuaW1wb3J0IHtTRUxFQ1RfRElSRUNUSVZFU30gZnJvbSAnbmcyLXNlbGVjdC9uZzItc2VsZWN0JztcclxuaW1wb3J0IHtFeHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2V9IGZyb20gJy4vZXhwZW5zZUNhdGVnb3JpZXMuc2VydmljZSc7XHJcbmltcG9ydCB7SWNvbk1hcHBlclNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9pY29ubWFwcGVyL2ljb25tYXBwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZVNlcnZpY2V9IGZyb20gJy4vZXhwZW5zZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdleHBlbnNlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2V4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltNT0RBTF9ESVJFQ1RJVkVTLERhdGVQaWNrZXIsIFNFTEVDVF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZU1vZGFsQ29tcG9uZW50e1xyXG4gICAgcHJpdmF0ZSBpdGVtczpBcnJheTxhbnk+ID0gW107XHJcbiAgICBcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6IEV2ZW50RW1pdHRlcjxFeHBlbnNlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RXhwZW5zZT4oKTtcclxuICAgIFxyXG4gICAgQFZpZXdDaGlsZCgnbW9kYWwnKVxyXG4gICAgbW9kYWw6IE1vZGFsQ29tcG9uZW50O1xyXG4gICAgXHJcbiAgICBAVmlld0NoaWxkKCdkYXRlcGlja2VySW5wdXQnKSBkYXRlcGlja2VySW5wdXQ7XHJcbiAgICBleHBlbnNlIDogRXhwZW5zZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9leHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2U6RXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlLCBwcml2YXRlIF9pY29uTWFwcGVyOkljb25NYXBwZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZXhwZW5zZVNlcnZpY2U6RXhwZW5zZVNlcnZpY2UpXHJcbiAgICAge1xyXG4gICAgICAgICB0aGlzLmV4cGVuc2UgPSBuZXcgRXhwZW5zZSgpO1xyXG4gICAgIH1cclxuICAgXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTphbnkge1xyXG4gICAgICAgIHRoaXMuX2V4cGVuc2VDYXRlZ29yaWVzU2VydmljZS5jYXRlZ29yaWVzLmZvckVhY2goXHJcbiAgICAgICAgICAgIChjYXRlZ29yeSkgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5leHBlbnNlU3ViQ2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgJHtjYXRlZ29yeS5kZXNjcmlwdGlvbn1gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2F0ZWdvcnlJY29uOnN0cmluZyA9J2ZhIGZhLWxpc3QnO1xyXG4gIFxyXG4gICAgcHVibGljIGZpbGVzOkFycmF5PGFueT47XHJcbiAgICBwcmV2aWV3SW1hZ2VVcmw6c3RyaW5nPScnO1xyXG4gICAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25DaGFuZ2UnKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZpbGVzID0gZXZlbnQuc3JjRWxlbWVudC5maWxlcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuICAgICAgICB0aGlzLnJlYWRUaHVtYm5haWwoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgLy9zcmM6IGh0dHA6Ly9yYXlkYXEuY29tL2V4YW1wbGUtcHJldmlldy1hbmQtYXV0by1yZXNpemUtaW1hZ2VzLWZvci11cGxvYWRpbmctYW5ndWxhcjItdHlwZXNjcmlwdC9cclxuICAgIHByaXZhdGUgcmVhZFRodW1ibmFpbChldmVudCkge1xyXG4gICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnNyY0VsZW1lbnQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgdmFyIHJlYWRlcjogYW55LCB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBkZWFsIHdpdGggdGhlIGZpbGUgd2hlbiB0aGUgcmVhZGVyIGlzIGNvbXBsZXRlXHJcbiAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZXZlbnQxKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGV2ZW50LnRhcmdldC5yZXN1bHQgZnJvbSB0aGUgcmVhZGVyIChiYXNlNjQgb2YgdGhlIGltYWdlKVxyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGV2ZW50MS50YXJnZXQucmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlc2l6ZSB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIHZhciByZXNpemVkX2ltZyA9IHRoaXMucmVzaXplKGltZyw1MDAsMjAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQdXNoIHRoZSBpbWcgc3JjIChiYXNlNjQgc3RyaW5nKSBpbnRvIG91ciBhcnJheSB0aGF0IHdlIGRpc3BsYXkgaW4gb3VyIGh0bWwgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1hZ2VVcmwgPSByZXNpemVkX2ltZ1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdKTsgICAgXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHJlc2l6ZSAoaW1nLCBNQVhfV0lEVEg6bnVtYmVyID0gOTAwLCBNQVhfSEVJR0hUOm51bWJlciA9IDkwMCl7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2l6ZSBCZWZvcmU6IFwiICsgaW1nLnNyYy5sZW5ndGggKyBcIiBieXRlc1wiKTtcclxuXHJcbiAgICAgICAgdmFyIHdpZHRoID0gaW1nLndpZHRoO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWcuaGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcclxuICAgICAgICAgICAgaWYgKHdpZHRoID4gTUFYX1dJRFRIKSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgKj0gTUFYX1dJRFRIIC8gd2lkdGg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IE1BWF9XSURUSDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChoZWlnaHQgPiBNQVhfSEVJR0hUKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCAqPSBNQVhfSEVJR0hUIC8gaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gTUFYX0hFSUdIVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVXJsID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycpOyAgXHJcbiAgICAgICAgLy8gSU1QT1JUQU5UOiAnanBlZycgTk9UICdqcGcnXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaXplIEFmdGVyOiAgXCIgKyBkYXRhVXJsLmxlbmd0aCAgKyBcIiBieXRlc1wiKTtcclxuICAgICAgICByZXR1cm4gZGF0YVVybFxyXG4gICAgfVxyXG4gICAgY2xvc2VkKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluIGRpc21pc3NlZCBleHBlbnNlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAvLyAgdGhpcy5leHBlbnNlLmV4cGVuc2VVdGNEdCA9IHRoaXMuZGF0ZXBpY2tlci52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGUgc2VsZWN0ZWQgaXM6IFwiKyB0aGlzLmV4cGVuc2UuZXhwZW5zZVV0Y0R0KTtcclxuICAgICAgICBpZih0aGlzLmV4cGVuc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFeHBlbnNlOjpcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZXhwZW5zZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmV4cGVuc2UgPSBuZXcgRXhwZW5zZSgpO1xyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlcklucHV0LnJlc2V0KCk7IC8vVE9ETzogcmVwbGFjZSB0aGlzIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gICAgICAgIHRoaXMubW9kYWwuZGlzbWlzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oc3RvcnlJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWU9VIENMSUNLRUQgT1BFTjo6XCIrc3RvcnlJZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VTdG9yeUlkID0gc3RvcnlJZDtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4oJ3NtJyk7XHJcbiAgICB9XHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgdmFyIGZuOyAgIFxyXG4gICAgICAgIGlmKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZuID0gdGhpcy5fZXhwZW5zZVNlcnZpY2UuYWRkRXhwZW5zZSh0aGlzLmV4cGVuc2UsIHRoaXMuZmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm4gPSB0aGlzLl9leHBlbnNlU2VydmljZS5hZGRPbmx5RXhwZW5zZSh0aGlzLmV4cGVuc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmbi5zdWJzY3JpYmUoKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeS5lbWl0KDxFeHBlbnNlPnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuZGlzbWlzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTm90aWZ5KG1lc3NhZ2U6c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmV4cGVuc2UuZXhwZW5zZVV0Y0R0ID0gbWVzc2FnZTtcclxuICB9XHJcblxyXG4gIC8vIG5nMi1zZWxlY3RcclxuICBwdWJsaWMgc2VsZWN0ZWQodmFsdWU6YW55KTp2b2lkIHtcclxuICAgICAgdmFyIGNhdGVnb3J5ID0gdGhpcy5fZXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlLmNhdGVnb3JpZXMuZmluZCh4PT54LmV4cGVuc2VTdWJDYXRlZ29yeUlkID09IHZhbHVlLmlkKTtcclxuICAgICAgaWYoY2F0ZWdvcnkpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0V4cGVuc2UgY2F0ZWdvcmllcycpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VDYXRlZ29yeUlkID0gY2F0ZWdvcnkuZXhwZW5zZUNhdGVnb3J5SWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VTdWJDYXRlZ29yeUlkID0gdmFsdWUuaWQ7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnlJY29uPSdmYSBmYS1saXN0JztcclxuICAgICAgaWYodGhpcy5faWNvbk1hcHBlci5tYXBwZXJbdmFsdWUuaWRdKSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3J5SWNvbiA9IHRoaXMuX2ljb25NYXBwZXIubWFwcGVyW3ZhbHVlLmlkXTtcclxuICAgICAgfVxyXG4gfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
