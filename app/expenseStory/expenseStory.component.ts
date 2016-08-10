import { Component, OnInit, ViewChild } from '@angular/core';
import {ExpenseStoryModalComponent} from '../expenseStory/expenseStory.modal.component'
@Component({
    selector: 'expense-story',
    template: `
       <a href="javascript:void()" (click)="addExpenseReport()"> &nbsp;New Expense Report</a>
       <expense-story-modal #expensestorymodal></expense-story-modal>
    `,
    directives:[ExpenseStoryModalComponent]
})
export class ExpenseStoryComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @ViewChild('expensestorymodal') 
    expenseStoryModal: ExpenseStoryModalComponent;

     addExpenseReport(){
        this.expenseStoryModal.open();
    }
}