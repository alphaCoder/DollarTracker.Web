import {Component} from 'angular2/core';
import 'rxjs/Rx';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';


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
 directives:[ROUTER_DIRECTIVES],
 providers:[HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
export class AppComponent {
  pageTitle: string ='Dollar Tracker a Expense Management tool';
}
