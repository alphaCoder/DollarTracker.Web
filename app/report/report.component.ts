import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {BarChartDemo} from '../charts/barchartdemo'
@Component({
    templateUrl: 'app/report/report.component.html',
    directives:[BarChartDemo]
})
export class ReportComponent {
    constructor() {
        console.log('LOADING REPORT');
     }

}