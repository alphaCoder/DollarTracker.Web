import { Component, OnInit } from '@angular/core';
import {ChartDemo} from '../charts/chartdemo'
import {BarChartDemo} from '../charts/barchartdemo'
import {Router} from '@angular/router'
import {JwtService} from '../jwt/jwt.service'
import {DtBaseComponent} from '../shared/dtbase.component'
import {UserService} from '../user/user.service'

@Component({
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives:[ChartDemo,BarChartDemo]
})
export class DashboardComponent {
    constructor(private _userService:UserService){
    }
}