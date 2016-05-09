import { Component, Input, OnInit } from 'angular2/core';
import {Router} from 'angular2/router';

import {LoginService} from './login.service'
import {ILoginResponse} from './loginResponse'
import {DtAlertComponent} from '../shared/alert/dtalert.component'
import {DtSpinButtonComponent} from '../shared/spinner/dtspinner.component'
import {JwtService} from '../jwt/jwt.service'
@Component({
    templateUrl: 'app/login/login.component.html',
    directives:[DtAlertComponent,DtSpinButtonComponent]
})
export class LoginComponent implements OnInit {
    public pageTitle: string = "Login";
    public loginResult:string;
    public loginResponse: ILoginResponse;
    @Input() email:string;
    @Input() password:string;
    public dtAlert:DtAlertComponent;
    constructor(private _loginService: LoginService, private _router:Router, private _jwtService:JwtService) { 
        this.dtAlert = new DtAlertComponent();
    }

    ngOnInit() {
    }
    submit():void {
        
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
            this.loginResponse = result;
            
           this._jwtService.set(result.token);
           console.log("is valid jwt", this._jwtService.isValid().subscribe(x=>console.log("Valid Jwt subscribe:", x)));
            
            this.loginResult = JSON.stringify(result);
            this._router.navigate(['Dashboard']);
        },
        error=>this.loginResult = <string>error);
    }
    
    private validateEmailAndPassword(): boolean{
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if(this.email == null || this.email == "" || !EMAIL_REGEXP.test(this.email)){
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