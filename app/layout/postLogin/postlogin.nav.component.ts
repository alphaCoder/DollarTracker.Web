import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgClass} from '@angular/common'
import {UserService} from '../../user/user.service'
import {IUser} from '../../login/loginresponse'
import {ExpenseStoryComponent} from '../../expenseStory/expenseStory.component';
import {NotificationsService} from '../../shared/notifications/notifications.service';
@Component({
    selector: 'post-login-nav',
    templateUrl: 'app/layout/postlogin/postlogin.nav.component.html',
    directives:[NgClass,ExpenseStoryComponent],
})
export class PostLoginNavComponent implements OnInit {
    user:IUser;
    constructor(private _router:Router, private _userService:UserService, 
        private _notificationsService:NotificationsService) {
        this._userService.currentUser.subscribe(user => {
            console.log('user',user);
            this.user = user
        });
     }

    ngOnInit() { }
    signout(){
        this._userService.logout();
    }
}