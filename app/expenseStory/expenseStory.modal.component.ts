import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {DatePicker} from '../shared/datepicker/datepicker.component';

@Component({
    selector: 'expense-story-modal',
    templateUrl: 'app/expenseStory/expenseStory.modal.component.html',
    directives:[MODAL_DIRECTIVES,DatePicker]
})
export class ExpenseStoryModalComponent implements OnInit {
    @Output() notify: EventEmitter<any> = new EventEmitter<any>();
    private expenseStory = {};
    constructor() { }

    ngOnInit() { }
    @ViewChild('esmodal')
    modal: ModalComponent;
    @ViewChild('datepickerInput3') datepickerInput3;
    @ViewChild('datepickerInput4') datepickerInput4;
     closed() {
        this.modal.close();
    }

    dismissed() {
        console.log("I am in dismissed expense");
        
      //  this.expense.expenseUtcDt = this.datepicker.value;
        
        // if(this.expense) {
        //     console.log("Expense::");
        //     console.log(JSON.stringify(this.expense));
        // }
        // this.expense = new Expense();
        this.datepickerInput3.reset(); //TODO: replace this temporary solution
        this.modal.dismiss();
    }

    open() {
        this.modal.open('sm');
    }
    cancel() {
        this.modal.dismiss();
    }

    onNotify(message:string):void {
        console.log("message:" + message)
     //   this.expense.expenseUtcDt = message;
  }
  
    onNotify1(message:string):void {
        console.log("end message:" + message)
     //   this.expense.expenseUtcDt = message;
  }
}