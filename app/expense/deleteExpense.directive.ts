import {HostListener, Directive, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Expense} from './expense';
import {ExpenseService} from './expense.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
@Directive({
    selector: '[deleteExpense]',
   
})
export class DeleteExpenseDirective {
 
    constructor(private _expenseService:ExpenseService,private _slimLoader:SlimLoadingBarService) {}
    @Input("deleteExpense") expense:Expense= null;
    @Output() notify:EventEmitter<Expense> = new EventEmitter<Expense>();
  
    @HostListener('click') onClick() {
        this._slimLoader.complete();
        this._expenseService
        .deleteExpense(this.expense.expenseId)
        .subscribe(x=>{
            this.notify.emit(this.expense);
            this._slimLoader.complete();
        },(error)=>{
            this._slimLoader.complete();
        });
  }
}
