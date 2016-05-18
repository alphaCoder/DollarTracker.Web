import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';
import{NgClass} from '@angular/common'
import {UserService} from '../../user/user.service'
@Component({
    selector: 'post-login-nav',
    templateUrl: 'app/layout/postlogin/postlogin.nav.component.html',
    directives:[ROUTER_DIRECTIVES, NgClass]
})
export class PostLoginNavComponent implements OnInit {
    public showDropdown:boolean = false;
    constructor(private _router:Router, private _userService:UserService) { }

    ngOnInit() { }

    public toggleDropDown(){
        this.showDropdown = !this.showDropdown;
    }
    
    signout(){
        this._userService.clear();
        this._router.navigate(['/']);
    }
}