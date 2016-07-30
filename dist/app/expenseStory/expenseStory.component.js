System.register(['@angular/core', '../expenseStory/expenseStory.modal.component'], function(exports_1, context_1) {
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
    var core_1, expenseStory_modal_component_1;
    var ExpenseStoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (expenseStory_modal_component_1_1) {
                expenseStory_modal_component_1 = expenseStory_modal_component_1_1;
            }],
        execute: function() {
            let ExpenseStoryComponent = class ExpenseStoryComponent {
                constructor() {
                }
                ngOnInit() { }
                addExpenseReport() {
                    this.expenseStoryModal.open();
                }
            };
            __decorate([
                core_1.ViewChild('expensestorymodal'), 
                __metadata('design:type', expenseStory_modal_component_1.ExpenseStoryModalComponent)
            ], ExpenseStoryComponent.prototype, "expenseStoryModal", void 0);
            ExpenseStoryComponent = __decorate([
                core_1.Component({
                    selector: 'expense-story',
                    template: `
    <div class="input-group" style="margin-top:5px">
        <div>
            <button class="btn btn-default" (click)="addExpenseReport()"> New Expense Report</button>
            <expense-story-modal #expensestorymodal></expense-story-modal>
        </div>
    </div>
    `,
                    directives: [expenseStory_modal_component_1.ExpenseStoryModalComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], ExpenseStoryComponent);
            exports_1("ExpenseStoryComponent", ExpenseStoryComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQ0k7Z0JBQWdCLENBQUM7Z0JBRWpCLFFBQVEsS0FBSyxDQUFDO2dCQUtiLGdCQUFnQjtvQkFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xDLENBQUM7WUFDTCxDQUFDO1lBTkc7Z0JBQUMsZ0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQzs7NEVBQUE7WUFqQm5DO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRTs7Ozs7OztLQU9UO29CQUNELFVBQVUsRUFBQyxDQUFDLHlEQUEwQixDQUFDO2lCQUMxQyxDQUFDOztxQ0FBQTtZQUNGLHlEQVdDLENBQUEiLCJmaWxlIjoiZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5TW9kYWxDb21wb25lbnR9IGZyb20gJy4uL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkubW9kYWwuY29tcG9uZW50J1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZXhwZW5zZS1zdG9yeScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjVweFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwiYWRkRXhwZW5zZVJlcG9ydCgpXCI+IE5ldyBFeHBlbnNlIFJlcG9ydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZXhwZW5zZS1zdG9yeS1tb2RhbCAjZXhwZW5zZXN0b3J5bW9kYWw+PC9leHBlbnNlLXN0b3J5LW1vZGFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczpbRXhwZW5zZVN0b3J5TW9kYWxDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlU3RvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2V4cGVuc2VzdG9yeW1vZGFsJykgXHJcbiAgICBleHBlbnNlU3RvcnlNb2RhbDogRXhwZW5zZVN0b3J5TW9kYWxDb21wb25lbnQ7XHJcblxyXG4gICAgIGFkZEV4cGVuc2VSZXBvcnQoKXtcclxuICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeU1vZGFsLm9wZW4oKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
