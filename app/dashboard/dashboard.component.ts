import { Component, OnInit } from 'angular2/core';
import {ChartDemo} from './charts/chartdemo'

@Component({
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives:[ChartDemo]
})
export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}