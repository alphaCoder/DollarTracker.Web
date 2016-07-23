import {provideRouter, RouterConfig} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportComponent} from './report/report.component';
import {ExpenseStoryDetailsComponent} from './expenseStory/expenseStoryDetails.component';

export const routes: RouterConfig = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'report', component: ReportComponent},
  {path:'details/:id', component:ExpenseStoryDetailsComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];