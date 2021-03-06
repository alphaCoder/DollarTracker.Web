import { Component, ViewChild } from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {ChartDemo} from '../charts/chartdemo';
import {Observable} from 'rxjs/Rx';
import {ExpenseModalComponent} from '../expense/expense.modal.component';
import {Expense} from '../expense/expense';
import {ExpenseStorySummary, ExpenseStory, ExpensesStat} from '../expenseStory/expenseStory.model'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {DeleteExpenseStoryComponent} from '../deleteExpenseStory/deleteExpenseStory.component'
import {ExpenseStoryService} from '../expenseStory/expenseStory.service';
@Component({
    templateUrl: 'app/report/report.component.html',
    directives:[ChartDemo, ExpenseModalComponent, ROUTER_DIRECTIVES, DeleteExpenseStoryComponent]
})
export class ReportComponent {
    public expenseStorySummaries:Array<ExpenseStorySummary>;
    public colors = ['success', 'info', 'danger', 'warning'];
    private isActiveReports = false;
    constructor(private _route: ActivatedRoute,
    private _slimLoader:SlimLoadingBarService, 
    private _expenseStoryService:ExpenseStoryService
    ) {
        this._route.params.subscribe(params => {
            let active = params["active"];
            if(active == "active"){
                 console.log("activated", active);
                 this.isActiveReports = true;
            }
            else{
                this.isActiveReports = false;
            }
            this._expenseStoryService.loadExpenseStorySummaries(this.isActiveReports);
        })
    }
   
    @ViewChild('expense')
    expenseModal:ExpenseModalComponent;

    open(storyId){
        console.log("you clicked open:"+storyId);
        this.expenseModal.open(storyId);
    } 
     onNotify(ex:Expense):void {
        this._expenseStoryService.loadExpenseStorySummaries(this.isActiveReports);
    }
}
