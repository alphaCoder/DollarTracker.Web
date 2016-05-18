import {Component,provide} from '@angular/core';
import 'rxjs/Rx';
import {HTTP_PROVIDERS,Http} from '@angular/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router';

import {UserService} from './user/user.service'
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {DashboardComponent} from './dashboard/dashboard.component'

import {ApiUrl} from './shared/apiurl.service'

import {JwtService} from './jwt/jwt.service'
import {LoginService} from './login/login.service'
import {PostLoginNavComponent} from './layout/postLogin/postlogin.nav.component'

@Component({
  selector: 'dt-app',
  template: `
 <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
               <a class='navbar-brand'>{{pageTitle}}</a>
               <ul class='nav navbar-nav navbar-right'*ngIf="!_userService.isAuthenticated">
                    <li><a [routerLink]="['/login']">Login</a></li>
                    <li><a [routerLink]="['/signup']">Sign Up</a></li>
                </ul>
                <post-login-nav *ngIf="_userService.isAuthenticated"></post-login-nav>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
   </div>
 `,
 directives:[ROUTER_DIRECTIVES,PostLoginNavComponent],
 providers:[HTTP_PROVIDERS, ROUTER_PROVIDERS, ApiUrl, LoginService,JwtService, UserService]
})
@Routes([
  { path: '/', component: LoginComponent },  
  { path: '/login', component: LoginComponent },
  { path: '/signup',  component: SignupComponent },
  { path: '/dashboard', component: DashboardComponent }
])
export class AppComponent {
  pageTitle: string ='Dollar Tracker';
  constructor(public _userService:UserService){
  }
}
