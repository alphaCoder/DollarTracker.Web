import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{NgClass} from '@angular/common'
import {UserService} from '../../user/user.service'
import {IUser} from '../../login/loginresponse'
@Component({
    selector: 'post-login-nav',
    templateUrl: 'app/layout/postlogin/postlogin.nav.component.html',
    directives:[NgClass]
})
export class PostLoginNavComponent implements OnInit {
    public showDropdown:boolean = false;
    user:IUser;
    constructor(private _router:Router, private _userService:UserService) {
        this._userService.currentUser.subscribe(user => {
            console.log('user',user);
            this.user = user
        });
     }

    ngOnInit() { }

    public toggleDropDown(){
        this.showDropdown = !this.showDropdown;
    }
    
    signout(){
        this._userService.clear();
        this._router.navigate(['/']);
    }
}