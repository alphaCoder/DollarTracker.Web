import { Component, OnInit } from '@angular/core';
import {Router,ROUTER_DIRECTIVES} from '@angular/router'
import {PostLoginNavComponent} from '../postlogin/postlogin.nav.component';
import {UserService} from '../../user/user.service';

@Component({
    selector: 'top-nav',
    templateUrl: 'app/layout/topnav/topnav.component.html',
    directives: [ROUTER_DIRECTIVES,PostLoginNavComponent]
})
export class TopNavComponent {
    public isAuthenticated:boolean;
    constructor(public _userService:UserService, private _router:Router) {
   
    _userService.isAuthenticated.subscribe(isAuthenticated=>{
      console.log('is authenticated', isAuthenticated);
      this.isAuthenticated = isAuthenticated;
      if(!isAuthenticated){
        this._router.navigateByUrl('/login');
      }
    });
     this._userService.init();
  }
 }
