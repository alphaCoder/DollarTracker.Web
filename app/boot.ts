import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';

import {AppComponent} from './app.component';
import {UserService} from './user/user.service'
import {ApiUrl} from './shared/apiurl.service'
import {JwtService} from './jwt/jwt.service'
import {LoginService} from './login/login.service'


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    ApiUrl, 
    LoginService,
    JwtService,
    UserService
]);
