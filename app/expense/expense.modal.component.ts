import { Component, OnInit, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'expense',
    templateUrl: 'app/expense/expense.modal.component.html',
    directives:[MODAL_DIRECTIVES]
})
export class ExpenseModalComponent{
    constructor() { }
 @ViewChild('modal')
    modal: ModalComponent;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    model: Person = new Person();

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
        this.modal.open();
    }
}
export class Person {
    firstName: string;
    lastName: string;
}