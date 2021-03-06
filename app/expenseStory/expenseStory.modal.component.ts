import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {DatePicker} from '../shared/datepicker/datepicker.component';
import {ExpenseStory,ExpenseStorySummary} from './expenseStory.model';
import {ExpenseStoryService} from './expenseStory.service';
import {DtAlertComponent} from '../shared/alert/dtalert.component';
@Component({
    selector: 'expense-story-modal',
    templateUrl: 'app/expenseStory/expenseStory.modal.component.html',
    directives:[MODAL_DIRECTIVES,DatePicker, DtAlertComponent]
})
export class ExpenseStoryModalComponent implements OnInit {
    @Output() notify: EventEmitter<ExpenseStorySummary> = new EventEmitter<ExpenseStorySummary>();
    private expenseStory:ExpenseStory;
    dtAlert:DtAlertComponent; 
    constructor(private _expenseStoryService:ExpenseStoryService) { 
        this.expenseStory = new ExpenseStory();
        this.dtAlert = new DtAlertComponent();
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
      if(!this.validate()) { return; }
      
      if(this.expenseStory){
          this._expenseStoryService
          .addExpenseStory(this.expenseStory)
          .subscribe(response =>{
              this.dismissed();
          });
      }
  }
  private validate() {
      let isValid = false;
      if(this.expenseStory.title == null || this.expenseStory.title.trim().length <=0 || this.expenseStory.title.trim().length >100){
          this.dtAlert.failure("Please a valid title for your expense report");
      }
      else if(this.expenseStory.startDt == null || this.expenseStory.startDt.trim().length <=0){
          this.dtAlert.failure("Please enter a valid start date");
      }
      else if(this.expenseStory.endDt == null || this.expenseStory.endDt.trim().length <=0) {
          this.dtAlert.failure("Please enter a valid end date");
      }
      else { isValid = true;}
      return isValid;
  }
}