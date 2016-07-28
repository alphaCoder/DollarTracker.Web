import { Component, OnInit, ViewChild } from '@angular/core';
import {ExpenseStoryModalComponent} from '../expenseStory/expenseStory.modal.component'
@Component({
    selector: 'expense-story',
    template: `
    <div>
        <button class="btn btn-default pull-right" (click)="addExpenseReport()">Add Expense Report</button>
        <expense-story-modal #expensestorymodal></expense-story-modal>
    </div>
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