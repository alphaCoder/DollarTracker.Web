import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../user/user.service'
import {SignupService} from './signup.service'
import {ISignupResponse} from './signupResponse'
import {DtAlertComponent} from '../shared/alert/dtalert.component'
import {DtSpinButtonComponent} from '../shared/spinner/dtspinner.component'

@Component({
    templateUrl: 'app/signup/signup.component.html',
    providers: [SignupService]
})
export class SignupComponent {
    public pageTitle:string = "Sign Up";
    public signupResult:string;
  
    @Input() email:string;
    @Input() password:string;
    public dtAlert:DtAlertComponent;
    private EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    
    constructor(private _signupService: SignupService, private _router:Router, private _userService:UserService) { 
        this.dtAlert = new DtAlertComponent();
    }

    public submit():void {
        
        console.log("Clicked Sign up button");
        var isValid = this.validateEmailAndPassword();
        if(!isValid){
            return;
        }
        var payload = {"email": this.email, "password": this.password};
        
        this._signupService
        .signup(payload)
        .subscribe(result => {
            if(!result.success){
                this.dtAlert.failure(result.message);
                return;   
            }
           this._userService.add(result);
           this._router.navigate(['login']);
           console.log("Entered service in sign up page");
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
    