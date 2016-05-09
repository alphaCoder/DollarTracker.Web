/// <reference path="../node_modules/ng2-nvd3/build/lib/ng2-nvd3.d.ts" />

import {Component} from 'angular2/core';
import 'rxjs/Rx';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouterOutlet, RouterLink, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {nvD3} from 'ng2-nvd3/lib/ng2-nvd3';

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
                    <li><a [routerLink]="['Login']">Login</a></li>
                    <li><a [routerLink]="['SignUp']">Sign Up</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
   </div>
 `,
 directives:[RouterOutlet, RouterLink, ROUTER_DIRECTIVES, nvD3],
 providers:[HTTP_PROVIDERS, ROUTER_PROVIDERS, ApiUrl, LoginService,JwtService, LocalStorageService]
})
@RouteConfig([
  { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: false },
  { path: '/signup', name: 'SignUp', component: SignupComponent, useAsDefault: false },
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: false }
])
export class AppComponent {
  pageTitle: string ='Dollar Tracker a Expense Management tool';
}
