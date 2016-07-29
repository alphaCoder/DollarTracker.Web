import {provideRouter, RouterConfig} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportComponent} from './report/report.component';
import {ExpenseStoryDetailsComponent} from './expenseStory/expenseStoryDetails.component';
import {LoginComponent} from './login/login.component'
import {Authorize} from  './user/authorize.service'
export const routes: RouterConfig = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full', canActivate: [Authorize]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [Authorize]},
  {path: 'report', component: ReportComponent, canActivate: [Authorize]},
  {path:'details/:id', component:ExpenseStoryDetailsComponent, canActivate: [Authorize]}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];