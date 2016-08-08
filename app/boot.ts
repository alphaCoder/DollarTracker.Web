import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy, FORM_PROVIDERS, FORM_DIRECTIVES} from '@angular/common';

import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';

import {AppComponent} from './app.component';
import {UserService} from './user/user.service'
import {ApiUrl} from './shared/apiurl.service'
import {JwtService} from './jwt/jwt.service'
import {LoginService} from './login/login.service'
import {DashboardService} from './dashboard/dashboard.service'
import {ApiService} from './shared/api/api.service'
import {UploadService} from './shared/upload/upload.service'
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {IconMapperService} from './shared/iconmapper/iconmapper.service' 
import {ExpenseCategoriesService} from './expense/expenseCategories.service'
import {ExpenseService} from './expense/expense.service'
import {SlimLoadingBarService} from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import {ExpenseStoryService} from './expenseStory/expenseStory.service';
import {Authorize} from './user/authorize.service';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
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
    UploadService,
    IconMapperService,
    ExpenseCategoriesService,
    ExpenseService,
    SlimLoadingBarService,
    ExpenseStoryService,
    Authorize
]);
