import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class Authorize implements CanActivate {
    private isAuthenticated:Boolean
  constructor(private _userService: UserService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._userService.isUserAuthenticated()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}