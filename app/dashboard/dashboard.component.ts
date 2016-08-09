import { Component, OnInit,ViewChild  } from '@angular/core';
import {ChartDemo} from '../charts/chartdemo';
import {BarChartDemo} from '../charts/barchartdemo';
import {Router} from '@angular/router';
import {DtBaseComponent} from '../shared/dtbase.component';
import {DashboardService} from './dashboard.service';
import {Observable} from 'rxJs/Rx';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {Expense} from "../expense/expense"
@Component({
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives:[ChartDemo,BarChartDemo,ROUTER_DIRECTIVES,MODAL_DIRECTIVES]
})
export class DashboardComponent {
   
    public dashboardStats:any;
    constructor(private _dashboardService:DashboardService, private _slimLoader:SlimLoadingBarService){
    }
    ngOnInit(){
        console.log("DASHBOARD NGONINIT");
        this._slimLoader.start();    
        this._dashboardService.getDashboardStats()
            .subscribe(ds=>{
                this._slimLoader.start();   
                this.dashboardStats = ds.data;
                this._slimLoader.complete();
        }, 
        e => {
            this._slimLoader.complete();
        },
        ()=>{}
        );
        this._slimLoader.complete();
    }
}
