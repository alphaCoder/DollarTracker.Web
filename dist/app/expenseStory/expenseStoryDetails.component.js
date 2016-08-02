System.register(['@angular/core', '@angular/router', './expenseStory.service', '../shared/iconmapper/iconmapper.service', 'ng2-slim-loading-bar/ng2-slim-loading-bar', '../expense/deleteExpense.directive', '../expense/expense.modal.component'], function(exports_1, context_1) {
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
    var core_1, router_1, expenseStory_service_1, iconmapper_service_1, ng2_slim_loading_bar_1, deleteExpense_directive_1, expense_modal_component_1;
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
            }],
        execute: function() {
            let ExpenseStoryDetailsComponent = class ExpenseStoryDetailsComponent {
                constructor(_route, _router, _expenseStoryService, _iconMapper, _slimLoader) {
                    this._route = _route;
                    this._router = _router;
                    this._expenseStoryService = _expenseStoryService;
                    this._iconMapper = _iconMapper;
                    this._slimLoader = _slimLoader;
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
                    directives: [router_1.ROUTER_DIRECTIVES, deleteExpense_directive_1.DeleteExpenseDirective, expense_modal_component_1.ExpenseModalComponent]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, expenseStory_service_1.ExpenseStoryService, iconmapper_service_1.IconMapperService, ng2_slim_loading_bar_1.SlimLoadingBarService])
            ], ExpenseStoryDetailsComponent);
            exports_1("ExpenseStoryDetailsComponent", ExpenseStoryDetailsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUNJLFlBQXFCLE1BQXNCLEVBQ3RCLE9BQWUsRUFBVSxvQkFBd0MsRUFDakUsV0FBNkIsRUFBVSxXQUFpQztvQkFGeEUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7b0JBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQjtvQkFDakUsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtvQkFLckYsaUJBQVksR0FBRSxFQUFFLENBQUM7Z0JBTHdFLENBQUM7Z0JBUTNGLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDMUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDO3dCQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUN6QixJQUFJLENBQUMsb0JBQW9COzZCQUN4Qix3QkFBd0IsQ0FBQyxFQUFFLENBQUM7NkJBQzVCLFNBQVMsQ0FBQyxFQUFFOzRCQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUU3QyxDQUFDLENBQUMsQ0FBQzt3QkFFSCwwREFBMEQ7d0JBQzFELElBQUksQ0FBQyxvQkFBb0I7NkJBQ3hCLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzs2QkFDMUIsU0FBUyxDQUFDLEVBQUU7NEJBQ1QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxDQUFDO29CQUVSLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsV0FBVztvQkFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELFFBQVEsQ0FBQyxPQUFlO29CQUNwQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQzNFLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7d0JBQ0osSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25GLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxZQUFZLENBQUMsT0FBZTtvQkFDeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsSUFBSSxDQUFDLE9BQU87b0JBQ1QsNkJBQTZCO29CQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztZQUNMLENBQUM7WUE3Q0k7Z0JBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7OzhFQUFBO1lBZDFCO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFdBQVcsRUFBRSxxREFBcUQ7b0JBQ2xFLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdEQUFzQixFQUFFLCtDQUFxQixDQUFDO2lCQUNqRixDQUFDOzs0Q0FBQTtZQUNGLHVFQXNEQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtFeHBlbnNlU3RvcnlTZXJ2aWNlfSBmcm9tICcuL2V4cGVuc2VTdG9yeS5zZXJ2aWNlJztcclxuaW1wb3J0IHtFeHBlbnNlU2VydmljZX0gZnJvbSAnLi4vZXhwZW5zZS9leHBlbnNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZSc7XHJcbmltcG9ydCB7SWNvbk1hcHBlclNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9pY29ubWFwcGVyL2ljb25tYXBwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7U2xpbUxvYWRpbmdCYXJTZXJ2aWNlfSBmcm9tICduZzItc2xpbS1sb2FkaW5nLWJhci9uZzItc2xpbS1sb2FkaW5nLWJhcic7XHJcbmltcG9ydCB7RGVsZXRlRXhwZW5zZURpcmVjdGl2ZX0gZnJvbSAnLi4vZXhwZW5zZS9kZWxldGVFeHBlbnNlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7RXhwZW5zZU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UubW9kYWwuY29tcG9uZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdG9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgRGVsZXRlRXhwZW5zZURpcmVjdGl2ZSwgRXhwZW5zZU1vZGFsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZVN0b3J5RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9leHBlbnNlU3RvcnlTZXJ2aWNlOkV4cGVuc2VTdG9yeVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfaWNvbk1hcHBlcjpJY29uTWFwcGVyU2VydmljZSwgcHJpdmF0ZSBfc2xpbUxvYWRlcjpTbGltTG9hZGluZ0JhclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwcml2YXRlIGV4cGVuc2VzQnlDYXRlZ29yeTtcclxuICAgIHByaXZhdGUgZXhwZW5zZVN0b3J5U3VtbWFyeTtcclxuICAgIHByaXZhdGUgY2F0ZWdvcnlLZXlzID1bXTtcclxuICAgICBAVmlld0NoaWxkKCdleHBlbnNlJylcclxuICAgIGV4cGVuc2VNb2RhbDpFeHBlbnNlTW9kYWxDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHBhcmFtc1snaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuc3RhcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5fZXhwZW5zZVN0b3J5U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0QWxsRXhwZW5zZXNCeUNhdGVnb3J5KGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGVzPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VzQnlDYXRlZ29yeSA9IGVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5S2V5cyA9IE9iamVjdC5rZXlzKGVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2dldCBleHBlbnNlU3RvcnlTdW1tYXJ5IFRPRE86IG5lZWQgdG8gb3B0aW1pemUgdGhpcyBjYWxsXHJcbiAgICAgICAgICAgIHRoaXMuX2V4cGVuc2VTdG9yeVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEV4cGVuc2VTdG9yeVN1bW1hcnkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZXMgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcnkgPSBlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX3NsaW1Mb2FkZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gIFx0ICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnkoZXhwZW5zZTpFeHBlbnNlKTp2b2lkIHtcclxuICAgICAgICBsZXQgZXhsID0gdGhpcy5leHBlbnNlc0J5Q2F0ZWdvcnlbZXhwZW5zZS5leHBlbnNlQ2F0ZWdvcnlJZC50b0xvd2VyQ2FzZSgpXTtcclxuICAgICAgICBpZihleGwpe1xyXG4gICAgICAgICAgICB2YXIgaWR4ID0gZXhsLmluZGV4T2YoZXhwZW5zZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwZW5zZXNCeUNhdGVnb3J5W2V4cGVuc2UuZXhwZW5zZUNhdGVnb3J5SWQudG9Mb3dlckNhc2UoKV0uc3BsaWNlKGlkeCwxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0Tm90aWZ5KGV4cGVuc2U6RXhwZW5zZSk6dm9pZHtcclxuICAgICAgICBhbGVydChcIkluIGVkaXQgbm90aWZ5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXQoZXhwZW5zZSl7XHJcbiAgICAgICAvLyBhbGVydChcIllPVSBDTElDS0VEIEVESVRcIik7XHJcbiAgICAgICAgdGhpcy5leHBlbnNlTW9kYWwuZWRpdChleHBlbnNlKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
