import { Component, ViewChild } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BarChartDemo} from '../charts/barchartdemo';
import {ChartDemo} from '../charts/chartdemo';
import {ReportService} from './report.service';
import {Observable} from 'rxjs/Rx';
import {ExpenseModalComponent} from '../expense/expense.modal.component';
import {Expense} from '../expense/expense';
import {ExpenseStorySummary, ExpenseStory, ExpensesStat} from '../expenseStory/expenseStory.model'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {ExpenseStoryModalComponent} from '../expenseStory/expenseStory.modal.component'
@Component({
    templateUrl: 'app/report/report.component.html',
    directives:[BarChartDemo, ChartDemo, ExpenseModalComponent, ExpenseStoryModalComponent, ROUTER_DIRECTIVES]
})
export class ReportComponent {
    public expenseStories:Observable<Array<ExpenseStorySummary>>;
    public colors = ['success', 'info', 'danger', 'warning'];
    
    constructor(private _reportService: ReportService, private _slimLoader:SlimLoadingBarService) {
        console.log('LOADING REPORT');
        this._slimLoader.start();
        this.loadReport();    
        this._slimLoader.stop();
     }
    @ViewChild('expensestorymodal') 
    expenseStoryModal: ExpenseStoryModalComponent;

    @ViewChild('expense')
    expenseModal:ExpenseModalComponent;

    addExpenseReport(){
        this.expenseStoryModal.open();
    }

    open(storyId){
        console.log("you clicked open:"+storyId);
        this.expenseModal.open(storyId);
    } 
     onNotify(ex:Expense):void {
        console.log("recevied brand new expense");
        console.log(ex);
        this.loadReport();
    }
    loadReport(){
        this._reportService.get()
        .subscribe(result => {
            this._slimLoader.start();
            this.expenseStories = result.data.expenseStorySummaries;
            this._slimLoader.complete();
        },
        error => {
            console.log('ERROR REPORT', JSON.stringify(error));
            this._slimLoader.complete();
        });
    }
}
