import {Component,provide} from '@angular/core';
import {HTTP_PROVIDERS,Http} from '@angular/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router} from '@angular/router';
import {Subject, BehaviorSubject,Observable} from 'rxjs/Rx';

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
               <ul class='nav navbar-nav navbar-right'*ngIf="!isAuthenticated">
                    <li><a [routerLink]="['/login']">Login</a></li>
                    <li><a [routerLink]="['/signup']">Sign Up</a></li>
                </ul>
                <post-login-nav *ngIf="isAuthenticated"></post-login-nav>
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
  { path: '/', component: DashboardComponent },  
  { path: '/login', component: LoginComponent },
  { path: '/signup',  component: SignupComponent },
  { path: '/dashboard', component: DashboardComponent }
])
export class AppComponent {
  pageTitle: string ='Dollar Tracker';
  isAuthenticated:boolean;
  constructor(public _userService:UserService, private _router:Router){
    _userService.isAuthenticated.subscribe(isAuthenticated=>{
      console.log('is authenticated', isAuthenticated);
      this.isAuthenticated = isAuthenticated;
      if(!isAuthenticated){
        this._router.navigateByUrl('/login');
      }
    });
     this._userService.init();
  }
}
