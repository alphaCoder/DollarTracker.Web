import { Injectable } from 'angular2/core';
import {LocalStorageService} from '../localStorage/localStorage.service'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class JwtService {
    private _jwtKey = "dollarTrackerJwtToken";
    constructor(private _localStorage: LocalStorageService){
    }
    
    public get():string {
        return this._localStorage.getItem(this._jwtKey);
    }
    
    public set(token: string){
        this._localStorage.setItem(this._jwtKey, token);
    }
    
    public isValid():Observable<boolean> {
        return Observable.create(observer=>{
        var jwt = this.get();
        if(jwt){
            let payloadStr = jwt.split(".")[1];
          //  var payload = window.atob(payload);
            observer.next(true);
        }
        
        return false; 
    });
}
}