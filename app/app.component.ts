import {Component,provide} from '@angular/core';
import 'rxjs/Rx';
import {HTTP_PROVIDERS,Http} from '@angular/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {DashboardComponent} from './dashboard/dashboard.component'

import {ApiUrl} from './shared/apiurl.service'
import {LocalStorageService} from './localStorage/localStorage.service'
import {JwtService} from './jwt/jwt.service'
import {LoginService} from './login/login.service'
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
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
 providers:[HTTP_PROVIDERS, ROUTER_PROVIDERS, ApiUrl, LoginService,JwtService, LocalStorageService,AUTH_PROVIDERS,
 provide(AuthHttp, {
    useFactory: (http) => {
      return new AuthHttp(new AuthConfig({
        headerName: 'Authorization',
        headerPrefix: 'Bearer',
        tokenName: 'dollarTrackerJwtToken',
        tokenGetter: () => localStorage.getItem('dollarTrackerJwtToken'),
        globalHeaders: [{'Content-Type':'application/json'}],
        noJwtError: true,
        noTokenScheme: true
      }), http);
    },
    deps: [Http]
  })
 ]
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
