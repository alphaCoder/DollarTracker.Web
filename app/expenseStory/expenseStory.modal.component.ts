import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {DatePicker} from '../shared/datepicker/datepicker.component';
import {ExpenseStory,ExpenseStorySummary} from './expenseStory.model';
import {ExpenseStoryService} from './expenseStory.service';
@Component({
    selector: 'expense-story-modal',
    templateUrl: 'app/expenseStory/expenseStory.modal.component.html',
    directives:[MODAL_DIRECTIVES,DatePicker]
})
export class ExpenseStoryModalComponent implements OnInit {
    @Output() notify: EventEmitter<ExpenseStorySummary> = new EventEmitter<ExpenseStorySummary>();
    private expenseStory:ExpenseStory;
     
    constructor(private _expenseStoryService:ExpenseStoryService) { 
        this.expenseStory = new ExpenseStory();
    }

    ngOnInit() { }
    @ViewChild('esmodal')
    modal: ModalComponent;
    @ViewChild('datepickerStartDtInput') datepickerStartDtInput;
    @ViewChild('datepickerEndDtInput') datepickerEndDtInput;
     closed() {
        this.modal.close();
    }

    dismissed() {
        this.expenseStory = new ExpenseStory();
        this.datepickerStartDtInput.reset(); //TODO: replace this temporary solution
        this.datepickerEndDtInput.reset();
        this.modal.dismiss();
    }

    open() {
        this.modal.open('sm');
    }
    cancel() {
        this.modal.dismiss();
    }

    onNotifyStartDt(startDt:string):void {
        this.expenseStory.startDt = startDt;
  }
  
   onNotifyEndDt(endDt:string):void {
        this.expenseStory.endDt = endDt;
  }
  submit(){
      if(this.expenseStory){
          this._expenseStoryService
          .addExpenseStory(this.expenseStory)
          .subscribe(response =>{
              this.dismissed();
          });
      }
  }
}