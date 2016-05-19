import { Component } from '@angular/core';
import {Router} from '@angular/Router'
import {UserService} from '../user/user.service'
@Component({
    selector: 'logout',
    template: `<a (click)="signout()">Sign Out</a>`
})
export class LogoutComponent {
    constructor(private _router:Router, private _userService:UserService) { }

    signout(){
        this._userService.clear();
        this._router.navigate(['/']);
    }
}