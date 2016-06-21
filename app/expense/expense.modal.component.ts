import { Component, OnInit, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {DatePicker} from '../shared/datepicker/datepicker.component';
import {Expense} from './expense'
@Component({
    selector: 'expense',
    templateUrl: 'app/expense/expense.modal.component.html',
    directives:[MODAL_DIRECTIVES,DatePicker]
})
export class ExpenseModalComponent{
    constructor() { }
    public test:string ='';
    @ViewChild('modal')
    modal: ModalComponent;
    @ViewChild('datepicker')
    datepicker:DatePicker;
    selected: string;
    output: string;
    index: number = 0;
    backdropOptions = [true, false, 'static'];

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;

    expense : Expense = new Expense();
    closed() {
        this.output = '(closed) ' + this.selected;
        this.modal.close();
    }

    dismissed() {
        this.output = '(dismissed)';
        console.log("I am in dismissed expense");
        
        this.expense.expenseUtcDt = this.datepicker.value;
        console.log("date selected is: "+ this.expense.expenseUtcDt);
        if(this.expense) {
            console.log("Expense::");
            console.log(JSON.stringify(this.expense));
        }
        this.expense = new Expense();
        this.modal.dismiss();
    }

    opened() {
        this.output = '(opened)';
    }

    navigate() {

    }

    open() {
        this.modal.open('sm');
    }
    submit(){
        console.log("selected dt"+ this.test);
        console.log("DatePicker data:"+this.datepicker.value);
    }
}
