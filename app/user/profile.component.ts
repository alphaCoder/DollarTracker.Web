import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service'
import {ApiUrl} from '../shared/apiurl.service'
@Component({
    templateUrl: 'app/user/profile.component.html'
})
export class ProfileComponent implements OnInit {
    private _avatarUrl:string ='';
    constructor(private _userService:UserService, private _apiUrl:ApiUrl) { 
        this._avatarUrl = this._apiUrl.profilePicUrl + "/" + this._userService.user.userId;
    }

    ngOnInit() { }

}