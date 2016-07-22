import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {DatePicker} from '../shared/datepicker/datepicker.component';
import {Expense} from './expense'
import {SELECT_DIRECTIVES} from 'ng2-select/ng2-select';
import {ExpenseCategoriesService} from './expenseCategories.service';
import {IconMapperService} from '../shared/iconmapper/iconmapper.service';
import {Observable} from 'rxjs/Rx';
import {ExpenseService} from './expense.service';

@Component({
    selector: 'expense',
    templateUrl: 'app/expense/expense.modal.component.html',
    directives:[MODAL_DIRECTIVES,DatePicker, SELECT_DIRECTIVES]
})
export class ExpenseModalComponent{
    private items:Array<any> = [];
    
    @Output() notify: EventEmitter<Expense> = new EventEmitter<Expense>();
    
    @ViewChild('modal')
    modal: ModalComponent;
    
    @ViewChild('datepickerInput') datepickerInput;
    expense : Expense;

    constructor(private _expenseCategoriesService:ExpenseCategoriesService, private _iconMapper:IconMapperService,
    private _expenseService:ExpenseService)
     {
         this.expense = new Expense();
     }
   
    public ngOnInit():any {
        this._expenseCategoriesService.categories.forEach(
            (category) =>{
                this.items.push({
                    id: category.expenseSubCategoryId,
                    text: `${category.description}`              
                });
            });
    }

    public categoryIcon:string ='fa fa-list';
  
    public files:Array<any>;

    onChange(event) {
        console.log('onChange');
        this.files = event.srcElement.files;
        console.log(this.files);
    }

    closed() {
        this.modal.close();
    }

    dismissed() {
        console.log("I am in dismissed expense");
        
      //  this.expense.expenseUtcDt = this.datepicker.value;
        console.log("date selected is: "+ this.expense.expenseUtcDt);
        if(this.expense) {
            console.log("Expense::");
            console.log(JSON.stringify(this.expense));
        }
        this.expense = new Expense();
        this.datepickerInput.reset(); //TODO: replace this temporary solution
        this.modal.dismiss();
    }

    open(storyId) {
        console.log("YOU CLICKED OPEN::"+storyId);
        
        this.expense.expenseStoryId = storyId;
        this.modal.open('sm');
    }
    submit() {
        var fn;   
        if(this.files && this.files.length > 0) {
            fn = this._expenseService.addExpense(this.expense, this.files);
        }
        else {
            fn = this._expenseService.addOnlyExpense(this.expense);
        }
        
        fn.subscribe((response)=>{
            if(response.success) {
                this.notify.emit(<Expense>response.data);
            }
        });
    }
   
    cancel() {
        this.modal.dismiss();
    }

    onNotify(message:string):void {
        this.expense.expenseUtcDt = message;
  }

  // ng2-select
  public selected(value:any):void {
      var category = this._expenseCategoriesService.categories.find(x=>x.expenseSubCategoryId == value.id);
      if(category){
          console.log('Expense categories');
          console.log(category);
          this.expense.expenseCategoryId = category.expenseCategoryId;
      }
      this.expense.expenseSubCategoryId = value.id;
      this.categoryIcon='fa fa-list';
      if(this._iconMapper.mapper[value.id]) {
          this.categoryIcon = this._iconMapper.mapper[value.id];
      }
 }
}
