import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {UserService} from './user.service'
import {ApiUrl} from '../shared/apiurl.service'
import {DtAlertComponent} from '../shared/alert/dtalert.component';
import {ProfileService} from './profile.service'
@Component({
    templateUrl: 'app/user/profile.component.html',
    directives: [ROUTER_DIRECTIVES,DtAlertComponent],
    providers:[ProfileService]
})
export class ProfileComponent implements OnInit {
    private _avatarUrl:string ='';
    private profile = null;
    dtAlert:DtAlertComponent;
    private user= {
        displayName:"",
        aboutMe:"",
        phoneNo:"",
        email:""
    };
    constructor(private _userService:UserService, private _apiUrl:ApiUrl, private _profileService:ProfileService) { 
        this._avatarUrl = this._apiUrl.profilePicUrl + "/" + this._userService.user.userId;
        this.user.aboutMe = this._userService.user.aboutMe;
        this.user.phoneNo = this._userService.user.phoneNo;
        this.user.displayName = this._userService.user.displayName;
        this.user.email = this._userService.user.email;
        this.dtAlert = new DtAlertComponent();
        this._profileService
            .getProfile(this._userService.user.userId)
            .subscribe(p =>{
                this.profile = p.data;
                console.log("PROFILE");
                console.log(JSON.stringify(this.profile));
            });
    }

    password ={
        "current":"",
        "password":"",
        "rePassword":""
    }
    ngOnInit() { }

    updateProfile() {
        console.log("CLICKED Update profile");
        console.log(JSON.stringify(this.user)); 
        this._userService
        .updateUser(this.user)
        .subscribe(result =>{
           if(result.success) {
               this.dtAlert.success("Successfully updated your profile");
           }
        },
        error => {this.dtAlert.failure("Unknown error, please try again")}
        );
    }

    updatePassword(){
        if(this.password.current.length == 0 || this.password.password.length == 0 || this.password.rePassword.length == 0) {
            this.dtAlert.failure("Please make sure to enter all password fields");
            return;
        }
        if(this.password.password != this.password.rePassword) {
            this.dtAlert.failure("Please make sure Password and Re-Password fields match");
            return;
        }
        this._userService
        .updatePassword(this.password)
        .subscribe(x=>{
            console.log("response update password");
            console.log(JSON.stringify(x));
            if(x.success){
                this.dtAlert.success("Successfully updated the password");
            }
            else{
                this.dtAlert.failure(x.message);
            }
        },
        (error)=>{this.dtAlert.failure("Unknown server error, please try again later")},
        () =>{ this.clearPassword(); }
        )
    }
    clearPassword(){
        this.password.current ="";
        this.password.password = "";
        this.password.rePassword = "";
    }

}