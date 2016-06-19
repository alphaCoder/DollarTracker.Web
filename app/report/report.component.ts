import { Component, ViewChild } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BarChartDemo} from '../charts/barchartdemo';
import {ChartDemo} from '../charts/chartdemo';
import {ReportService} from './report.service';
import {Observable} from 'rxjs/Rx';
import {ExpenseModalComponent} from '../expense/expense.modal.component'


@Component({
    templateUrl: 'app/report/report.component.html',
    directives:[BarChartDemo, ChartDemo, ExpenseModalComponent]
})
export class ReportComponent {
    public expenseStories:Observable<Array<any>>;
    public colors = ['success', 'info', 'danger', 'warning'];
    
    constructor(private _reportService: ReportService) {
        console.log('LOADING REPORT');
        this._reportService.get()
        .subscribe(result => {
            this.expenseStories = result.data.expenseStorySummaries;
        },
        error => {
            console.log('ERROR REPORT', JSON.stringify(error));
        });
     }
     @ViewChild('expense')
    expense:ExpenseModalComponent;
    open(){
        console.log("you clicked open");
        this.expense.open();
    } 
    dismissed() {
        console.log("I am in dismissed");
        this.expense.dismissed();
    }
}
