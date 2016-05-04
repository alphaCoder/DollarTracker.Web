import { Component, Input, OnInit } from 'angular2/core';
import {RouterOutlet, RouterLink} from 'angular2/router';

import {LoginService} from './login.service'
import {ILoginResponse} from './loginResponse'
import {DtAlertComponent} from '../shared/alert/dtalert.component'

@Component({
    templateUrl: 'app/login/login.component.html',
    directives:[DtAlertComponent]
})
export class LoginComponent implements OnInit {
    public pageTitle: string = "Login";
    public loginResult:string;
    public loginResponse: ILoginResponse;
    @Input() email:string;
    @Input() password:string;
    public dtAlert:DtAlertComponent;
    constructor(private _loginService: LoginService) { 
        this.dtAlert = new DtAlertComponent();
    }

    ngOnInit() {
     }

    submit():void {
        this.dtAlert.Success("Testing dtalert");
        var payload = {"email": this.email, "password": this.password};
        this._loginService
        .login(payload)
        .subscribe(result =>{
            this.loginResponse = result;
            this.loginResult = JSON.stringify(result);
            console.log(JSON.stringify(result));
            
        },
        error=>this.loginResult = <string>error);
    }
}