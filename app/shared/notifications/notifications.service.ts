import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject, Subscription} from 'rxjs/Rx';
import {PubnubService} from './pubnub.service';
import {UserService} from '../../user/user.service'
@Injectable()
export class NotificationsService {
public isNewMessageAvailable:boolean = false;
public messages:Array<any> = [];
    constructor(private _pubnubService: PubnubService, private _userService:UserService) {
        this._pubnubService.isReady.subscribe(x=>{
            if(x) {
                 this._pubnubService.listen("dollarTracker")
                     .filter(x=>x.Author != _userService.user.userId)
                     .subscribe(msg=>{
                          this.messages.push(msg);
                          this.isNewMessageAvailable = true;
                });
            }
        });
  }

  public readMessage(){
      this.isNewMessageAvailable = false;
  }
}