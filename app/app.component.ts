import {Component} from '@angular/core';
import 'rxjs/Rx';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {DashboardComponent} from './dashboard/dashboard.component'

import {ApiUrl} from './shared/apiurl.service'
import {LocalStorageService} from './localStorage/localStorage.service'
import {JwtService} from './jwt/jwt.service'
import {LoginService} from './login/login.service'

@Component({
  selector: 'dt-app',
  template: `
 <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav navbar-right'>
                    <li><a [routerLink]="['/login']">Login</a></li>
                    <li><a [routerLink]="['/signup']">Sign Up</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
   </div>
 `,
 directives:[ROUTER_DIRECTIVES],
 providers:[HTTP_PROVIDERS, ROUTER_PROVIDERS, ApiUrl, LoginService,JwtService, LocalStorageService]
})
@Routes([
   { path: '/', component: LoginComponent },  
  { path: '/login', component: LoginComponent },
  { path: '/signup',  component: SignupComponent },
  { path: '/dashboard', component: DashboardComponent }
])
export class AppComponent {
  pageTitle: string ='Dollar Tracker a Expense Management tool';
}
