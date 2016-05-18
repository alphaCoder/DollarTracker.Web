import { Component, OnInit } from '@angular/core';
import {ChartDemo} from './charts/chartdemo'
import {BarChartDemo} from './charts/barchartdemo'
import {JwtHelper} from 'angular2-jwt'
import {Router} from '@angular/router'
import {JwtService} from '../jwt/jwt.service'
import {DtBaseComponent} from '../shared/dtbase.component'
@Component({
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives:[ChartDemo,BarChartDemo]
})
export class DashboardComponent {
    
}