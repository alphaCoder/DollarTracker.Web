import {provideRouter, RouterConfig} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReportComponent} from './report/report.component';

export const routes: RouterConfig = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'report', component: ReportComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];