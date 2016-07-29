import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES,  Router} from '@angular/router';
import {Subject, BehaviorSubject,Observable} from 'rxjs/Rx';

import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {TopNavComponent} from './layout/topnav/topnav.component'
import {UserService} from './user/user.service';
import {ReportComponent} from './report/report.component';
import {SlimLoadingBarService, SlimLoadingBar} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

@Component({
  selector: 'dt-app',
  template: `<div>
    <div *ngIf="isAuthenticated"> 
       <top-nav></top-nav>
    </div>
    <ng2-slim-loading-bar></ng2-slim-loading-bar>
    <div class='container'>
       <router-outlet></router-outlet>
    </div>
    
  </div>`,
 directives:[ROUTER_DIRECTIVES, LoginComponent,TopNavComponent, SlimLoadingBar],
 providers:[HTTP_PROVIDERS]
})

export class AppComponent {
  pageTitle: string ='Dollar Tracker';
  isAuthenticated:boolean;
    constructor(public _userService:UserService) {
   
    _userService.isAuthenticated.subscribe(isAuthenticated=>{
      console.log('is authenticated', isAuthenticated);
      this.isAuthenticated = isAuthenticated;
    }, (error:any) =>{
    });
     this._userService.init();
  }
}
