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
                    this._route.params.subscribe(params => {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFDSSxZQUFxQixNQUFzQixFQUN0QixPQUFlLEVBQVUsb0JBQXdDLEVBQ2pFLFdBQTZCLEVBQVUsV0FBaUMsRUFDeEUsY0FBNEI7b0JBSDVCLFdBQU0sR0FBTixNQUFNLENBQWdCO29CQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBb0I7b0JBQ2pFLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7b0JBQ3hFLG1CQUFjLEdBQWQsY0FBYyxDQUFjO29CQU16QyxpQkFBWSxHQUFFLEVBQUUsQ0FBQztnQkFMUixDQUFDO2dCQVFYLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07d0JBQy9CLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1Qzt3QkFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLG9CQUFvQjs2QkFDeEIsd0JBQXdCLENBQUMsRUFBRSxDQUFDOzZCQUM1QixTQUFTLENBQUMsRUFBRTs0QkFDVCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQzs0QkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDN0MsQ0FBQyxDQUFDLENBQUM7d0JBRUgsMERBQTBEO3dCQUMxRCxJQUFJLENBQUMsb0JBQW9COzZCQUN4QixzQkFBc0IsQ0FBQyxFQUFFLENBQUM7NkJBQzFCLFNBQVMsQ0FBQyxFQUFFOzRCQUNULElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUNqQyxDQUFDLENBQUMsQ0FBQztvQkFFUixDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELFFBQVEsQ0FBQyxPQUFlO29CQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQzNFLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBQ0osSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25GLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxZQUFZLENBQUMsT0FBZTtvQkFDeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsSUFBSSxDQUFDLE9BQU87b0JBQ1QsNkJBQTZCO29CQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztZQUNMLENBQUM7WUF4Q0k7Z0JBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OzhFQUFBO1lBaEIxQjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBRSxxREFBcUQ7b0JBQ2xFLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdEQUFzQixFQUFFLCtDQUFxQixDQUFDO29CQUM5RSxTQUFTLEVBQUMsQ0FBQyw4QkFBYSxDQUFDO2lCQUM1QixDQUFDOzs0Q0FBQTtZQUNGLHVFQW1EQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtFeHBlbnNlU3RvcnlTZXJ2aWNlfSBmcm9tICcuL2V4cGVuc2VTdG9yeS5zZXJ2aWNlJztcclxuaW1wb3J0IHtFeHBlbnNlU2VydmljZX0gZnJvbSAnLi4vZXhwZW5zZS9leHBlbnNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZSc7XHJcbmltcG9ydCB7SWNvbk1hcHBlclNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9pY29ubWFwcGVyL2ljb25tYXBwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7U2xpbUxvYWRpbmdCYXJTZXJ2aWNlfSBmcm9tICduZzItc2xpbS1sb2FkaW5nLWJhci9uZzItc2xpbS1sb2FkaW5nLWJhcic7XHJcbmltcG9ydCB7RGVsZXRlRXhwZW5zZURpcmVjdGl2ZX0gZnJvbSAnLi4vZXhwZW5zZS9kZWxldGVFeHBlbnNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7RXhwZW5zZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UubW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtQdWJudWJTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvbm90aWZpY2F0aW9ucy9wdWJudWIuc2VydmljZSdcclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5RGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIERlbGV0ZUV4cGVuc2VEaXJlY3RpdmUsIEV4cGVuc2VNb2RhbENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6W1B1Ym51YlNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlU3RvcnlEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2V4cGVuc2VTdG9yeVNlcnZpY2U6RXhwZW5zZVN0b3J5U2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9pY29uTWFwcGVyOkljb25NYXBwZXJTZXJ2aWNlLCBwcml2YXRlIF9zbGltTG9hZGVyOlNsaW1Mb2FkaW5nQmFyU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9wdWJudWJTZXJ2aWNlOlB1Ym51YlNlcnZpY2VcclxuICAgICAgICAgICAgICAgICApIHsgfVxyXG5cclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwcml2YXRlIGV4cGVuc2VzQnlDYXRlZ29yeTtcclxuICAgIHByaXZhdGUgZXhwZW5zZVN0b3J5U3VtbWFyeTtcclxuICAgIHByaXZhdGUgY2F0ZWdvcnlLZXlzID1bXTtcclxuICAgICBAVmlld0NoaWxkKCdleHBlbnNlJylcclxuICAgIGV4cGVuc2VNb2RhbDpFeHBlbnNlTW9kYWxDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBwYXJhbXNbJ2lkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgICAgICB0aGlzLl9zbGltTG9hZGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cGVuc2VTdG9yeVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbEV4cGVuc2VzQnlDYXRlZ29yeShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VzQnlDYXRlZ29yeSA9IGVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5S2V5cyA9IE9iamVjdC5rZXlzKGVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vZ2V0IGV4cGVuc2VTdG9yeVN1bW1hcnkgVE9ETzogbmVlZCB0byBvcHRpbWl6ZSB0aGlzIGNhbGxcclxuICAgICAgICAgICAgdGhpcy5fZXhwZW5zZVN0b3J5U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0RXhwZW5zZVN0b3J5U3VtbWFyeShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShlcyA9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5U3VtbWFyeSA9IGVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnkoZXhwZW5zZTpFeHBlbnNlKTp2b2lkIHtcclxuICAgICAgICBsZXQgZXhsID0gdGhpcy5leHBlbnNlc0J5Q2F0ZWdvcnlbZXhwZW5zZS5leHBlbnNlQ2F0ZWdvcnlJZC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICBpZihleGwpe1xyXG4gICAgICAgICAgICB2YXIgaWR4ID0gZXhsLmluZGV4T2YoZXhwZW5zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZXNCeUNhdGVnb3J5W2V4cGVuc2UuZXhwZW5zZUNhdGVnb3J5SWQudG9Mb3dlckNhc2UoKV0uc3BsaWNlKGlkeCwxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0Tm90aWZ5KGV4cGVuc2U6RXhwZW5zZSk6dm9pZHtcclxuICAgICAgICBhbGVydChcIkluIGVkaXQgbm90aWZ5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXQoZXhwZW5zZSl7XHJcbiAgICAgICAvLyBhbGVydChcIllPVSBDTElDS0VEIEVESVRcIik7XHJcbiAgICAgICAgdGhpcy5leHBlbnNlTW9kYWwuZWRpdChleHBlbnNlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
