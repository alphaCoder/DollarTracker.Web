import {Component,provide} from '@angular/core';
import {HTTP_PROVIDERS,Http} from '@angular/http';
import {ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import {Subject, BehaviorSubject,Observable} from 'rxjs/Rx';

import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {TopNavComponent} from './layout/topnav/topnav.component'
import {UserService} from './user/user.service';
import {ReportComponent} from './report/report.component';
@Component({
  selector: 'dt-app',
  template: `<div>
   <div *ngIf="!isAuthenticated">
      <login></login>
    </div>    
     
    <div *ngIf="isAuthenticated"> 
       <top-nav></top-nav>
   </div>
    <div class='container'>
       <router-outlet></router-outlet>
    </div>
  </div>`,
 directives:[ROUTER_DIRECTIVES, LoginComponent,TopNavComponent]
})
@Routes([
  { path: '/dashboard', component: DashboardComponent },
  {path: '/report', component: ReportComponent}
])
export class AppComponent {
  pageTitle: string ='Dollar Tracker';
  isAuthenticated:boolean;
    constructor(public _userService:UserService) {
   
    _userService.isAuthenticated.subscribe(isAuthenticated=>{
      console.log('is authenticated', isAuthenticated);
      this.isAuthenticated = isAuthenticated;
    });
     this._userService.init();
  }
}
