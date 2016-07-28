import { Component, ViewChild } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ChartDemo} from '../charts/chartdemo';
import {Observable} from 'rxjs/Rx';
import {ExpenseModalComponent} from '../expense/expense.modal.component';
import {Expense} from '../expense/expense';
import {ExpenseStorySummary, ExpenseStory, ExpensesStat} from '../expenseStory/expenseStory.model'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {ExpenseStoryComponent} from '../expenseStory/expenseStory.component';
import {ExpenseStoryService} from '../expenseStory/expenseStory.service';
@Component({
    templateUrl: 'app/report/report.component.html',
    directives:[ChartDemo, ExpenseModalComponent, ExpenseStoryComponent, ROUTER_DIRECTIVES]
})
export class ReportComponent {
    public expenseStorySummaries:Array<ExpenseStorySummary>;
    public colors = ['success', 'info', 'danger', 'warning'];
    
    constructor(
    private _slimLoader:SlimLoadingBarService, 
    private _expenseStoryService:ExpenseStoryService
    ) {
        console.log('LOADING REPORT');
     }
   

    @ViewChild('expense')
    expenseModal:ExpenseModalComponent;

    open(storyId){
        console.log("you clicked open:"+storyId);
        this.expenseModal.open(storyId);
    } 
     onNotify(ex:Expense):void {
        this._expenseStoryService.loadExpenseStorySummaries();
    }
}
