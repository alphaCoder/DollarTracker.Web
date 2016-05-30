import { Component, OnInit,ViewChild  } from '@angular/core';
import {ChartDemo} from '../charts/chartdemo';
import {BarChartDemo} from '../charts/barchartdemo';
import {Router} from '@angular/router';
import {DtBaseComponent} from '../shared/dtbase.component';
import {DashboardService} from './dashboard.service';
import {Observable} from 'rxJs/Rx';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives:[ChartDemo,BarChartDemo,ROUTER_DIRECTIVES,MODAL_DIRECTIVES]
})
export class DashboardComponent {
   
    public dashboardStats:any;
    constructor(private _dashboardService:DashboardService){
    
        this._dashboardService.getDashboardStats()
        .subscribe(ds=>{
            console.log('dashboard results');
            console.log(JSON.stringify(ds));
            this.dashboardStats = ds.data;
            console.log('dashboardstats', this.dashboardStats);
        }, 
        e => {
            console.log("error occured");
            console.log(e);
        });
    }
   
    
}
