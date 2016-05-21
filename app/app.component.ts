import {Component,provide} from '@angular/core';
import {HTTP_PROVIDERS,Http} from '@angular/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router} from '@angular/router';
import {Subject, BehaviorSubject,Observable} from 'rxjs/Rx';

import {UserService} from './user/user.service'
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {TopNavComponent} from './layout/topnav/topnav.component'

@Component({
  selector: 'dt-app',
  template: `
 <div>
       <top-nav></top-nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
   </div>
 `,
 directives:[ROUTER_DIRECTIVES,TopNavComponent]
})
@Routes([
  { path: '/', component: DashboardComponent },  
  { path: '/login', component: LoginComponent },
  { path: '/signup',  component: SignupComponent },
  { path: '/dashboard', component: DashboardComponent }
])
export class AppComponent {
  pageTitle: string ='Dollar Tracker';
  isAuthenticated:boolean;
  constructor(){}
}
