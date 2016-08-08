import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgClass} from '@angular/common'
import {UserService} from '../../user/user.service'
import {IUser} from '../../login/loginresponse'
import {ExpenseStoryComponent} from '../../expenseStory/expenseStory.component';
import {NotificationsService} from '../../shared/notifications/notifications.service';
import {PubnubService} from '../../shared/notifications/pubnub.service';
@Component({
    selector: 'post-login-nav',
    templateUrl: 'app/layout/postlogin/postlogin.nav.component.html',
    directives:[NgClass,ExpenseStoryComponent],
    providers:[NotificationsService, PubnubService]
})
export class PostLoginNavComponent implements OnInit {
    public showDropdown:boolean = false;
    public showDropdown1:boolean = false;
    user:IUser;
    constructor(private _router:Router, private _userService:UserService, 
        private _notificationsService:NotificationsService) {
        this._userService.currentUser.subscribe(user => {
            console.log('user',user);
            this.user = user
        });
     }

    ngOnInit() { }

    public toggleDropDown(){
        this.showDropdown = !this.showDropdown;
    }
    public toggleDropDown1(){
        this.showDropdown1 = !this.showDropdown1;
    }
    signout(){
        this._userService.logout();
    }
}