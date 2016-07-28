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
                    this.expense = new expense_1.Expense();
                    this.datepickerInput.reset(); //TODO: replace this temporary solution
                    this.modal.dismiss();
                }
                open(storyId) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFXSSxZQUFvQix5QkFBa0QsRUFBVSxXQUE2QixFQUNyRyxlQUE4QjtvQkFEbEIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUF5QjtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7b0JBQ3JHLG9CQUFlLEdBQWYsZUFBZSxDQUFlO29CQVg5QixVQUFLLEdBQWMsRUFBRSxDQUFDO29CQUVwQixXQUFNLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO29CQXdCL0QsaUJBQVksR0FBUyxZQUFZLENBQUM7b0JBR3pDLG9CQUFlLEdBQVEsRUFBRSxDQUFDO29CQWhCckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkFFSyxRQUFRO29CQUNYLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUM3QyxDQUFDLFFBQVE7d0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ1osRUFBRSxFQUFFLFFBQVEsQ0FBQyxvQkFBb0I7NEJBQ2pDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7eUJBQ2xDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQU1ELFFBQVEsQ0FBQyxLQUFLO29CQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFD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QWlCLENBQUM7aUJBQzlELENBQUM7O3FDQUFBO1lBQ0YseURBNklDLENBQUEiLCJmaWxlIjoiZXhwZW5zZS9leHBlbnNlLm1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1PREFMX0RJUkVDVElWRVMsIE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnbmcyLWJzMy1tb2RhbC9uZzItYnMzLW1vZGFsJztcclxuaW1wb3J0IHtEYXRlUGlja2VyfSBmcm9tICcuLi9zaGFyZWQvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RXhwZW5zZX0gZnJvbSAnLi9leHBlbnNlJ1xyXG5pbXBvcnQge1NFTEVDVF9ESVJFQ1RJVkVTfSBmcm9tICduZzItc2VsZWN0L25nMi1zZWxlY3QnO1xyXG5pbXBvcnQge0V4cGVuc2VDYXRlZ29yaWVzU2VydmljZX0gZnJvbSAnLi9leHBlbnNlQ2F0ZWdvcmllcy5zZXJ2aWNlJztcclxuaW1wb3J0IHtJY29uTWFwcGVyU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2ljb25tYXBwZXIvaWNvbm1hcHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlU2VydmljZX0gZnJvbSAnLi9leHBlbnNlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2V4cGVuc2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvZXhwZW5zZS9leHBlbnNlLm1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W01PREFMX0RJUkVDVElWRVMsRGF0ZVBpY2tlciwgU0VMRUNUX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlTW9kYWxDb21wb25lbnR7XHJcbiAgICBwcml2YXRlIGl0ZW1zOkFycmF5PGFueT4gPSBbXTtcclxuICAgIFxyXG4gICAgQE91dHB1dCgpIG5vdGlmeTogRXZlbnRFbWl0dGVyPEV4cGVuc2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxFeHBlbnNlPigpO1xyXG4gICAgXHJcbiAgICBAVmlld0NoaWxkKCdtb2RhbCcpXHJcbiAgICBtb2RhbDogTW9kYWxDb21wb25lbnQ7XHJcbiAgICBcclxuICAgIEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXJJbnB1dCcpIGRhdGVwaWNrZXJJbnB1dDtcclxuICAgIGV4cGVuc2UgOiBFeHBlbnNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2V4cGVuc2VDYXRlZ29yaWVzU2VydmljZTpFeHBlbnNlQ2F0ZWdvcmllc1NlcnZpY2UsIHByaXZhdGUgX2ljb25NYXBwZXI6SWNvbk1hcHBlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9leHBlbnNlU2VydmljZTpFeHBlbnNlU2VydmljZSlcclxuICAgICB7XHJcbiAgICAgICAgIHRoaXMuZXhwZW5zZSA9IG5ldyBFeHBlbnNlKCk7XHJcbiAgICAgfVxyXG4gICBcclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICAgICAgdGhpcy5fZXhwZW5zZUNhdGVnb3JpZXNTZXJ2aWNlLmNhdGVnb3JpZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgKGNhdGVnb3J5KSA9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNhdGVnb3J5LmV4cGVuc2VTdWJDYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGAke2NhdGVnb3J5LmRlc2NyaXB0aW9ufWAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYXRlZ29yeUljb246c3RyaW5nID0nZmEgZmEtbGlzdCc7XHJcbiAgXHJcbiAgICBwdWJsaWMgZmlsZXM6QXJyYXk8YW55PjtcclxuICAgIHByZXZpZXdJbWFnZVVybDpzdHJpbmc9Jyc7XHJcbiAgICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkNoYW5nZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZmlsZXMgPSBldmVudC5zcmNFbGVtZW50LmZpbGVzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4gICAgICAgIHRoaXMucmVhZFRodW1ibmFpbChldmVudCk7XHJcbiAgICB9XHJcbiAgICAvL3NyYzogaHR0cDovL3JheWRhcS5jb20vZXhhbXBsZS1wcmV2aWV3LWFuZC1hdXRvLXJlc2l6ZS1pbWFnZXMtZm9yLXVwbG9hZGluZy1hbmd1bGFyMi10eXBlc2NyaXB0L1xyXG4gICAgcHJpdmF0ZSByZWFkVGh1bWJuYWlsKGV2ZW50KSB7XHJcbiAgICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQuc3JjRWxlbWVudC5maWxlc1swXSk7XHJcbiAgICAgICAgICB2YXIgcmVhZGVyOiBhbnksIHRhcmdldDogRXZlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgICByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGRlYWwgd2l0aCB0aGUgZmlsZSB3aGVuIHRoZSByZWFkZXIgaXMgY29tcGxldGVcclxuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChldmVudDEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgZXZlbnQudGFyZ2V0LnJlc3VsdCBmcm9tIHRoZSByZWFkZXIgKGJhc2U2NCBvZiB0aGUgaW1hZ2UpXHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gZXZlbnQxLnRhcmdldC5yZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVzaXplIHRoZSBpbWFnZVxyXG4gICAgICAgICAgICAgICAgdmFyIHJlc2l6ZWRfaW1nID0gdGhpcy5yZXNpemUoaW1nLDUwMCwyMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFB1c2ggdGhlIGltZyBzcmMgKGJhc2U2NCBzdHJpbmcpIGludG8gb3VyIGFycmF5IHRoYXQgd2UgZGlzcGxheSBpbiBvdXIgaHRtbCB0ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICB0aGlzLnByZXZpZXdJbWFnZVVybCA9IHJlc2l6ZWRfaW1nXHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGV2ZW50LnNyY0VsZW1lbnQuZmlsZXNbMF0pOyAgICBcclxuICAgIH1cclxuICAgIHByaXZhdGUgcmVzaXplIChpbWcsIE1BWF9XSURUSDpudW1iZXIgPSA5MDAsIE1BWF9IRUlHSFQ6bnVtYmVyID0gOTAwKXtcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaXplIEJlZm9yZTogXCIgKyBpbWcuc3JjLmxlbmd0aCArIFwiIGJ5dGVzXCIpO1xyXG5cclxuICAgICAgICB2YXIgd2lkdGggPSBpbWcud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IGltZy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xyXG4gICAgICAgICAgICBpZiAod2lkdGggPiBNQVhfV0lEVEgpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodCAqPSBNQVhfV0lEVEggLyB3aWR0aDtcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gTUFYX1dJRFRIO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGhlaWdodCA+IE1BWF9IRUlHSFQpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoICo9IE1BWF9IRUlHSFQgLyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBNQVhfSEVJR0hUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFVcmwgPSBjYW52YXMudG9EYXRhVVJMKCdpbWFnZS9qcGVnJyk7ICBcclxuICAgICAgICAvLyBJTVBPUlRBTlQ6ICdqcGVnJyBOT1QgJ2pwZydcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpemUgQWZ0ZXI6ICBcIiArIGRhdGFVcmwubGVuZ3RoICArIFwiIGJ5dGVzXCIpO1xyXG4gICAgICAgIHJldHVybiBkYXRhVXJsXHJcbiAgICB9XHJcbiAgICBjbG9zZWQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NlZCgpIHtcclxuICAgICAgICB0aGlzLmV4cGVuc2UgPSBuZXcgRXhwZW5zZSgpO1xyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlcklucHV0LnJlc2V0KCk7IC8vVE9ETzogcmVwbGFjZSB0aGlzIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gICAgICAgIHRoaXMubW9kYWwuZGlzbWlzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oc3RvcnlJZCkge1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZS5leHBlbnNlU3RvcnlJZCA9IHN0b3J5SWQ7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5vcGVuKCdzbScpO1xyXG4gICAgfVxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHZhciBmbjsgICBcclxuICAgICAgICBpZih0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmbiA9IHRoaXMuX2V4cGVuc2VTZXJ2aWNlLmFkZEV4cGVuc2UodGhpcy5leHBlbnNlLCB0aGlzLmZpbGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZuID0gdGhpcy5fZXhwZW5zZVNlcnZpY2UuYWRkT25seUV4cGVuc2UodGhpcy5leHBlbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm4uc3Vic2NyaWJlKChyZXNwb25zZSk9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCg8RXhwZW5zZT5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmRpc21pc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5vdGlmeShtZXNzYWdlOnN0cmluZyk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5leHBlbnNlLmV4cGVuc2VVdGNEdCA9IG1lc3NhZ2U7XHJcbiAgfVxyXG5cclxuICAvLyBuZzItc2VsZWN0XHJcbiAgcHVibGljIHNlbGVjdGVkKHZhbHVlOmFueSk6dm9pZCB7XHJcbiAgICAgIHZhciBjYXRlZ29yeSA9IHRoaXMuX2V4cGVuc2VDYXRlZ29yaWVzU2VydmljZS5jYXRlZ29yaWVzLmZpbmQoeD0+eC5leHBlbnNlU3ViQ2F0ZWdvcnlJZCA9PSB2YWx1ZS5pZCk7XHJcbiAgICAgIGlmKGNhdGVnb3J5KXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdFeHBlbnNlIGNhdGVnb3JpZXMnKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KTtcclxuICAgICAgICAgIHRoaXMuZXhwZW5zZS5leHBlbnNlQ2F0ZWdvcnlJZCA9IGNhdGVnb3J5LmV4cGVuc2VDYXRlZ29yeUlkO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZXhwZW5zZS5leHBlbnNlU3ViQ2F0ZWdvcnlJZCA9IHZhbHVlLmlkO1xyXG4gICAgICB0aGlzLmNhdGVnb3J5SWNvbj0nZmEgZmEtbGlzdCc7XHJcbiAgICAgIGlmKHRoaXMuX2ljb25NYXBwZXIubWFwcGVyW3ZhbHVlLmlkXSkge1xyXG4gICAgICAgICAgdGhpcy5jYXRlZ29yeUljb24gPSB0aGlzLl9pY29uTWFwcGVyLm1hcHBlclt2YWx1ZS5pZF07XHJcbiAgICAgIH1cclxuIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
