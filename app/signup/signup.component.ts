import { Component, Input, OnInit } from '@angular/core';

import {UserService} from '../user/user.service'
import {SignupService} from './signup.service'
import {ILoginResponse} from '../login/loginResponse'
import {DtAlertComponent} from '../shared/alert/dtalert.component'
import {DtSpinButtonComponent} from '../shared/spinner/dtspinner.component'
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
@Component({
    templateUrl: 'app/signup/signup.component.html',
    providers: [SignupService],
    directives:[DtAlertComponent, ROUTER_DIRECTIVES]
})
export class SignupComponent {
    public pageTitle:string = "Sign Up";
    
    public dtAlert:DtAlertComponent;
    private EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    private user = {"email":"", "password":"", "displayName":""};
    constructor(private _signupService: SignupService, private _router:Router) { 
        this.dtAlert = new DtAlertComponent();
    }

    public submit():void {
        
        var isValid = this.validateEmailAndPassword();
        if(!isValid){
            return;
        }
        
        
        this._signupService
        .signup(this.user)
        .subscribe(result => {
            if(!result.success){
                this.dtAlert.failure(result.message);
                return;   
            }
            else{
                this.dtAlert.success("Successfully created account! Please Login");
                this.user.email = null;
                this.user.password = null;
                this.user.displayName = null;
            }
        },
        error=>this.dtAlert.failure(error));
    }
    
    private validateEmailAndPassword(): boolean{
       
        if(this.user.email == null || this.user.email == "" || !this.EMAIL_REGEXP.test(this.user.email)){
            this.dtAlert.failure("Please enter a valid email");
            return false;
        }
        if(this.user.password == null || this.user.password == ""){
            this.dtAlert.failure("Please enter a password");
            return false;
        }
        return true;
    }
}
    