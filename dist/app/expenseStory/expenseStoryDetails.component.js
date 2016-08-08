System.register(['@angular/core', '@angular/router', './expenseStory.service', '../shared/iconmapper/iconmapper.service', 'ng2-slim-loading-bar/ng2-slim-loading-bar', '../expense/deleteExpense.directive', '../expense/expense.modal.component', '../shared/notifications/pubnub.service'], function(exports_1, context_1) {
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
    var core_1, router_1, expenseStory_service_1, iconmapper_service_1, ng2_slim_loading_bar_1, deleteExpense_directive_1, expense_modal_component_1, pubnub_service_1;
    var ExpenseStoryDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (expenseStory_service_1_1) {
                expenseStory_service_1 = expenseStory_service_1_1;
            },
            function (iconmapper_service_1_1) {
                iconmapper_service_1 = iconmapper_service_1_1;
            },
            function (ng2_slim_loading_bar_1_1) {
                ng2_slim_loading_bar_1 = ng2_slim_loading_bar_1_1;
            },
            function (deleteExpense_directive_1_1) {
                deleteExpense_directive_1 = deleteExpense_directive_1_1;
            },
            function (expense_modal_component_1_1) {
                expense_modal_component_1 = expense_modal_component_1_1;
            },
            function (pubnub_service_1_1) {
                pubnub_service_1 = pubnub_service_1_1;
            }],
        execute: function() {
            let ExpenseStoryDetailsComponent = class ExpenseStoryDetailsComponent {
                constructor(_route, _router, _expenseStoryService, _iconMapper, _slimLoader, _pubnubService) {
                    this._route = _route;
                    this._router = _router;
                    this._expenseStoryService = _expenseStoryService;
                    this._iconMapper = _iconMapper;
                    this._slimLoader = _slimLoader;
                    this._pubnubService = _pubnubService;
                    this.categoryKeys = [];
                }
                ngOnInit() {
                    this.sub = this._route.params.subscribe(params => {
                        let id = params['id']; // (+) converts string 'id' to a number
                        this._slimLoader.start();
                        this._expenseStoryService
                            .getAllExpensesByCategory(id)
                            .subscribe(es => {
                            this.expensesByCategory = es.data;
                            this.categoryKeys = Object.keys(es.data);
                        });
                        //get expenseStorySummary TODO: need to optimize this call
                        this._expenseStoryService
                            .getExpenseStorySummary(id)
                            .subscribe(es => {
                            this.expenseStorySummary = es.data;
                            this._slimLoader.complete();
                        });
                    });
                }
                ngOnDestroy() {
                    this.sub.unsubscribe();
                }
                onNotify(expense) {
                    let exl = this.expensesByCategory[expense.expenseCategoryId.toLowerCase()];
                    if (exl) {
                        var idx = exl.indexOf(expense);
                        this.expensesByCategory[expense.expenseCategoryId.toLowerCase()].splice(idx, 1);
                    }
                }
                onEditNotify(expense) {
                    alert("In edit notify");
                }
                edit(expense) {
                    // alert("YOU CLICKED EDIT");
                    this.expenseModal.edit(expense);
                }
            };
            __decorate([
                core_1.ViewChild('expense'), 
                __metadata('design:type', expense_modal_component_1.ExpenseModalComponent)
            ], ExpenseStoryDetailsComponent.prototype, "expenseModal", void 0);
            ExpenseStoryDetailsComponent = __decorate([
                core_1.Component({
                    selector: 'selector',
                    templateUrl: 'app/expenseStory/expenseStoryDetails.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES, deleteExpense_directive_1.DeleteExpenseDirective, expense_modal_component_1.ExpenseModalComponent],
                    providers: [pubnub_service_1.PubnubService]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, expenseStory_service_1.ExpenseStoryService, iconmapper_service_1.IconMapperService, ng2_slim_loading_bar_1.SlimLoadingBarService, pubnub_service_1.PubnubService])
            ], ExpenseStoryDetailsComponent);
            exports_1("ExpenseStoryDetailsComponent", ExpenseStoryDetailsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFDSSxZQUFxQixNQUFzQixFQUN0QixPQUFlLEVBQVUsb0JBQXdDLEVBQ2pFLFdBQTZCLEVBQVUsV0FBaUMsRUFDeEUsY0FBNEI7b0JBSDVCLFdBQU0sR0FBTixNQUFNLENBQWdCO29CQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBb0I7b0JBQ2pFLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7b0JBQ3hFLG1CQUFjLEdBQWQsY0FBYyxDQUFjO29CQU16QyxpQkFBWSxHQUFFLEVBQUUsQ0FBQztnQkFMUixDQUFDO2dCQVFYLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDMUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDO3dCQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUN6QixJQUFJLENBQUMsb0JBQW9COzZCQUN4Qix3QkFBd0IsQ0FBQyxFQUFFLENBQUM7NkJBQzVCLFNBQVMsQ0FBQyxFQUFFOzRCQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUU3QyxDQUFDLENBQUMsQ0FBQzt3QkFFSCwwREFBMEQ7d0JBQzFELElBQUksQ0FBQyxvQkFBb0I7NkJBQ3hCLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzs2QkFDMUIsU0FBUyxDQUFDLEVBQUU7NEJBQ1QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxDQUFDO29CQUVSLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsV0FBVztvQkFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELFFBQVEsQ0FBQyxPQUFlO29CQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQzNFLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBQ0osSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25GLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxZQUFZLENBQUMsT0FBZTtvQkFDeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsSUFBSSxDQUFDLE9BQU87b0JBQ1QsNkJBQTZCO29CQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztZQUNMLENBQUM7WUE3Q0k7Z0JBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OzhFQUFBO1lBakIxQjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixXQUFXLEVBQUUscURBQXFEO29CQUNsRSxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxnREFBc0IsRUFBRSwrQ0FBcUIsQ0FBQztvQkFDOUUsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQztpQkFDNUIsQ0FBQzs7NENBQUE7WUFDRix1RUF3REMsQ0FBQSIsImZpbGUiOiJleHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5RGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U2VydmljZX0gZnJvbSAnLi9leHBlbnNlU3Rvcnkuc2VydmljZSc7XHJcbmltcG9ydCB7RXhwZW5zZVNlcnZpY2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlfSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UnO1xyXG5pbXBvcnQge0ljb25NYXBwZXJTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvaWNvbm1hcHBlci9pY29ubWFwcGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1NsaW1Mb2FkaW5nQmFyU2VydmljZX0gZnJvbSAnbmcyLXNsaW0tbG9hZGluZy1iYXIvbmcyLXNsaW0tbG9hZGluZy1iYXInO1xyXG5pbXBvcnQge0RlbGV0ZUV4cGVuc2VEaXJlY3RpdmV9IGZyb20gJy4uL2V4cGVuc2UvZGVsZXRlRXhwZW5zZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0V4cGVuc2VNb2RhbENvbXBvbmVudH0gZnJvbSAnLi4vZXhwZW5zZS9leHBlbnNlLm1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHVibnViU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL25vdGlmaWNhdGlvbnMvcHVibnViLnNlcnZpY2UnXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5RGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIERlbGV0ZUV4cGVuc2VEaXJlY3RpdmUsIEV4cGVuc2VNb2RhbENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6W1B1Ym51YlNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlU3RvcnlEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2V4cGVuc2VTdG9yeVNlcnZpY2U6RXhwZW5zZVN0b3J5U2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9pY29uTWFwcGVyOkljb25NYXBwZXJTZXJ2aWNlLCBwcml2YXRlIF9zbGltTG9hZGVyOlNsaW1Mb2FkaW5nQmFyU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9wdWJudWJTZXJ2aWNlOlB1Ym51YlNlcnZpY2VcclxuICAgICAgICAgICAgICAgICApIHsgfVxyXG5cclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwcml2YXRlIGV4cGVuc2VzQnlDYXRlZ29yeTtcclxuICAgIHByaXZhdGUgZXhwZW5zZVN0b3J5U3VtbWFyeTtcclxuICAgIHByaXZhdGUgY2F0ZWdvcnlLZXlzID1bXTtcclxuICAgICBAVmlld0NoaWxkKCdleHBlbnNlJylcclxuICAgIGV4cGVuc2VNb2RhbDpFeHBlbnNlTW9kYWxDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHBhcmFtc1snaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5fZXhwZW5zZVN0b3J5U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsRXhwZW5zZXNCeUNhdGVnb3J5KGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGVzPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VzQnlDYXRlZ29yeSA9IGVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5S2V5cyA9IE9iamVjdC5rZXlzKGVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2dldCBleHBlbnNlU3RvcnlTdW1tYXJ5IFRPRE86IG5lZWQgdG8gb3B0aW1pemUgdGhpcyBjYWxsXHJcbiAgICAgICAgICAgIHRoaXMuX2V4cGVuc2VTdG9yeVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEV4cGVuc2VTdG9yeVN1bW1hcnkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZXMgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcnkgPSBlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gIFx0ICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnkoZXhwZW5zZTpFeHBlbnNlKTp2b2lkIHtcclxuICAgICAgICBsZXQgZXhsID0gdGhpcy5leHBlbnNlc0J5Q2F0ZWdvcnlbZXhwZW5zZS5leHBlbnNlQ2F0ZWdvcnlJZC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICBpZihleGwpe1xyXG4gICAgICAgICAgICB2YXIgaWR4ID0gZXhsLmluZGV4T2YoZXhwZW5zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZXNCeUNhdGVnb3J5W2V4cGVuc2UuZXhwZW5zZUNhdGVnb3J5SWQudG9Mb3dlckNhc2UoKV0uc3BsaWNlKGlkeCwxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0Tm90aWZ5KGV4cGVuc2U6RXhwZW5zZSk6dm9pZHtcclxuICAgICAgICBhbGVydChcIkluIGVkaXQgbm90aWZ5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXQoZXhwZW5zZSl7XHJcbiAgICAgICAvLyBhbGVydChcIllPVSBDTElDS0VEIEVESVRcIik7XHJcbiAgICAgICAgdGhpcy5leHBlbnNlTW9kYWwuZWRpdChleHBlbnNlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
