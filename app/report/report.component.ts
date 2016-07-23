import { Component, ViewChild } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BarChartDemo} from '../charts/barchartdemo';
import {ChartDemo} from '../charts/chartdemo';
import {ReportService} from './report.service';
import {Observable} from 'rxjs/Rx';
import {ExpenseModalComponent} from '../expense/expense.modal.component';
import {Expense} from '../expense/expense';
import {ExpenseStorySummary, ExpenseStory, ExpensesStat} from '../expenseStory/expenseStory.model'
@Component({
    templateUrl: 'app/report/report.component.html',
    directives:[BarChartDemo, ChartDemo, ExpenseModalComponent, ROUTER_DIRECTIVES]
})
export class ReportComponent {
    public expenseStories:Observable<Array<ExpenseStorySummary>>;
    public colors = ['success', 'info', 'danger', 'warning'];
    
    constructor(private _reportService: ReportService) {
        console.log('LOADING REPORT');
        this.loadReport();    
     }
    @ViewChild('expense')
    expenseModal:ExpenseModalComponent;
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
            this.expenseStories = result.data.expenseStorySummaries;
        },
        error => {
            console.log('ERROR REPORT', JSON.stringify(error));
        });
    }
}
