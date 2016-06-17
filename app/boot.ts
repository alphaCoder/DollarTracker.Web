import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy, FORM_PROVIDERS, FORM_DIRECTIVES} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';

import {AppComponent} from './app.component';
import {UserService} from './user/user.service'
import {ApiUrl} from './shared/apiurl.service'
import {JwtService} from './jwt/jwt.service'
import {LoginService} from './login/login.service'
import {DashboardService} from './dashboard/dashboard.service'
import {ApiService} from './shared/api/api.service'
import {ReportService} from './report/report.service'
import {UploadService} from './shared/upload/upload.service'
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    FORM_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    FORM_DIRECTIVES,
    ApiUrl, 
    LoginService,
    JwtService,
    UserService,
    DashboardService,
    ApiService,
    ReportService,
    UploadService
]);
