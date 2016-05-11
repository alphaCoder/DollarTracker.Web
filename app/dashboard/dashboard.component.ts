import { Component, OnInit } from 'angular2/core';
import {ChartDemo} from './charts/chartdemo'
import {BarChartDemo} from './charts/barchartdemo'

@Component({
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives:[ChartDemo,BarChartDemo]
})
export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}