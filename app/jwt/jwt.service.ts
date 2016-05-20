import { Injectable } from '@angular/core';
import {LocalStorageService} from '../localStorage/localStorage.service'
import {Observable} from 'rxjs/Observable'
declare var escape: any;
@Injectable()
export class JwtService {
    private _jwtKey = "dollarTrackerJwtToken";
    constructor(){
    }
    
    public get():string {
        return localStorage.getItem(this._jwtKey);
    }
    
    public set(token: string){
        localStorage.setItem(this._jwtKey, token);
    }
    
public isAuthenticated(){
    let token = this.get();
    console.log('token in isAuthenticated', token);
    if(!token) return false;
    let decoded = this.decodeToken(token)
    if(typeof decoded == "undefined" || decoded == null || typeof decoded.exp === "undefined") {
      console.log('decoded is undefined', decoded);
      return false;
    }
    console.log('exp', decoded.exp);
    console.log('Math.round(new Date().getTime() / 1000)',Math.round(new Date().getTime() / 1000));
    return decoded.exp >= Math.round(new Date().getTime() / 1000);
}

public clear(){
    localStorage.removeItem(this._jwtKey);
}

private urlBase64Decode(str:string) {
    var output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: { break; }
      case 2: { output += '=='; break; }
      case 3: { output += '='; break; }
      default: {
        throw 'Illegal base64url string!';
      }
    }

    return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
  }

  private decodeToken(token:string) {
    var parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('JWT must have 3 parts');
    }

    var decoded = this.urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error('Cannot decode the token');
    }

    return JSON.parse(decoded);
  }
}