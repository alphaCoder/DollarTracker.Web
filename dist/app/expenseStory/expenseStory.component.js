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
       <a href="javascript:void()" (click)="addExpenseReport()"> New Expense Report</a>
       <expense-story-modal #expensestorymodal></expense-story-modal>
    `,
                    directives: [expenseStory_modal_component_1.ExpenseStoryModalComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], ExpenseStoryComponent);
            exports_1("ExpenseStoryComponent", ExpenseStoryComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQ0k7Z0JBQWdCLENBQUM7Z0JBRWpCLFFBQVEsS0FBSyxDQUFDO2dCQUtiLGdCQUFnQjtvQkFDYixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xDLENBQUM7WUFDTCxDQUFDO1lBTkc7Z0JBQUMsZ0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQzs7NEVBQUE7WUFibkM7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFOzs7S0FHVDtvQkFDRCxVQUFVLEVBQUMsQ0FBQyx5REFBMEIsQ0FBQztpQkFDMUMsQ0FBQzs7cUNBQUE7WUFDRix5REFXQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeU1vZGFsQ29tcG9uZW50fSBmcm9tICcuLi9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5Lm1vZGFsLmNvbXBvbmVudCdcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2V4cGVuc2Utc3RvcnknLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoKVwiIChjbGljayk9XCJhZGRFeHBlbnNlUmVwb3J0KClcIj4gTmV3IEV4cGVuc2UgUmVwb3J0PC9hPlxyXG4gICAgICAgPGV4cGVuc2Utc3RvcnktbW9kYWwgI2V4cGVuc2VzdG9yeW1vZGFsPjwvZXhwZW5zZS1zdG9yeS1tb2RhbD5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltFeHBlbnNlU3RvcnlNb2RhbENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VTdG9yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnZXhwZW5zZXN0b3J5bW9kYWwnKSBcclxuICAgIGV4cGVuc2VTdG9yeU1vZGFsOiBFeHBlbnNlU3RvcnlNb2RhbENvbXBvbmVudDtcclxuXHJcbiAgICAgYWRkRXhwZW5zZVJlcG9ydCgpe1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5TW9kYWwub3BlbigpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
