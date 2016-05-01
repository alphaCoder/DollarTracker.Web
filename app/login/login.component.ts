import { Component, Input, OnInit } from 'angular2/core';
import {RouterOutlet, RouterLink} from 'angular2/router';

import {LoginService} from './login.service'

@Component({
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent implements OnInit {
    public pageTitle: string = "Login";
    @Input() email:string;
    @Input() password:string;
    constructor(private _loginService: LoginService) { }

    ngOnInit() {
     }

    submit():void {
        console.log("clicked submit");
        console.log("username" +  this.email)
        console.log("password", this.password);
        var payload ={"email": this.email, "password": this.password};
        this._loginService.login(payload);
    }
}