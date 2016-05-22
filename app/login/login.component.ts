import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';

import {UserService} from '../user/user.service'
import {LoginService} from './login.service'
import {ILoginResponse} from './loginResponse'
import {DtAlertComponent} from '../shared/alert/dtalert.component'
import {DtSpinButtonComponent} from '../shared/spinner/dtspinner.component'

@Component({
    templateUrl: 'app/login/login.component.html',
    directives:[DtAlertComponent,DtSpinButtonComponent],
    selector:'login'
})
export class LoginComponent {
    public pageTitle: string = "Login";
    public loginResult:string;
  
    @Input() email:string;
    @Input() password:string;
    public dtAlert:DtAlertComponent;
    private EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    constructor(private _loginService: LoginService, private _router:Router, private _userService:UserService) { 
        this.dtAlert = new DtAlertComponent();
    }

    public submit():Observable<any> {
        
        var isValid = this.validateEmailAndPassword();
        if(!isValid){
            return;
        }
        var payload = {"email": this.email, "password": this.password};
        
        this._loginService
        .login(payload)
        .subscribe(result => {
            if(!result.success){
                this.dtAlert.failure(result.message);
                return;   
            }
           this._userService.add(result);
           this._router.navigateByUrl('/dashboard');
        },
        error=>this.dtAlert.failure(error));
    }
    
    private validateEmailAndPassword(): boolean{
       
        if(this.email == null || this.email == "" || !this.EMAIL_REGEXP.test(this.email)){
            this.dtAlert.failure("Please enter a valid email");
            return false;
        }
        if(this.password == null || this.password == ""){
            this.dtAlert.failure("Please enter a password");
            return false;
        }
        return true;
    }
}