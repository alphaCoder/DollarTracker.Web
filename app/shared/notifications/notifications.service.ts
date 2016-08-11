import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject, Subscription} from 'rxjs/Rx';
import {PubnubService} from './pubnub.service';
import {UserService} from '../../user/user.service';
import {ApiService} from '../api/api.service';
import {ApiUrl} from '../apiurl.service';
@Injectable()
export class NotificationsService {
public isNewMessageAvailable:boolean = false;
public newMessagesCount = 0; 
public messages:Array<any> = [];
    constructor(private _pubnubService: PubnubService, private _userService:UserService,
                private _apiUrl:ApiUrl, private _apiService:ApiService
    ) {
        this._pubnubService.isReady.subscribe(x=>{
            if(x) {
                 this._pubnubService.listen(this._userService.user.userId)
                     .filter(x=>x.Author != _userService.user.userId)
                     .subscribe(msg => {
                          //this.messages.push(msg); //todo: this will replace by toaster
                          this.isNewMessageAvailable = true;
                          this.newMessagesCount +=1;
                      });
                }
        });
  }

  public readMessage(){
      //todo: apply pagination
      var url= this._apiUrl.getNotifications + "?read="+this.isNewMessageAvailable;
      this._apiService
          .get(url)
          .subscribe(x=>{
              console.log("GOT Notifications");
              console.log(x);
              this.messages = x.data;
              this.isNewMessageAvailable = false;
              this.newMessagesCount = 0;
          })
  }
  public setMessageCount(count){
      this.newMessagesCount = count;
  }
}