import { Component, OnInit, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {DatePickerComponent} from '../shared/datepicker/datepicker.component';

@Component({
    selector: 'expense',
    templateUrl: 'app/expense/expense.modal.component.html',
    directives:[MODAL_DIRECTIVES,DatePickerComponent]
})
export class ExpenseModalComponent{
    constructor() { }
    public test:string ='';
    @ViewChild('modal')
    modal: ModalComponent;
    @ViewChild('datepicker')
    datepicker:DatePickerComponent;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    index: number = 0;
    backdropOptions = [true, false, 'static'];

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;


    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
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
