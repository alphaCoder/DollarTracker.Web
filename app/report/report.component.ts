import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BarChartDemo} from '../charts/barchartdemo';
import {ChartDemo} from '../charts/chartdemo';
import {ReportService} from './report.service';
import {Observable} from 'rxjs/Rx';

@Component({
    templateUrl: 'app/report/report.component.html',
    directives:[BarChartDemo, ChartDemo]
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
}