import { Injectable } from '@angular/core';
import {Http, Headers, Request, RequestOptions, RequestOptionsArgs, RequestMethod, Response} from '@angular/http';
import {JwtService} from '../../jwt/jwt.service'
import {Observable} from 'rxjs/Observable';
import {UserService} from '../../user/user.service'
import {UploadService} from '../upload/upload.service'
@Injectable()
export class ApiService {

constructor(private _jwtService:JwtService,private http: Http, private _user:UserService, private _uploadService:UploadService) { }

post(url:string, payload:any) {
      if(!this._jwtService.isAuthenticated()) {
        this._user.clear();
      }
      let headers = new Headers();
      headers.set('Content-Type', 'application/json');    
      headers.set("Authorization", "Bearer " + this._jwtService.get());
      return this.http
        .post(url, JSON.stringify(payload),
       {headers: headers}).map(x=>x.json());
 } 

   get(url: string) : Observable<any> {
     if(!this._jwtService.isAuthenticated()) {
        this._user.clear();
      }
     let headers = new Headers();
     headers.set("Authorization", "Bearer " + this._jwtService.get());
      return this.http.get(url,{headers: headers}).map(x=>x.json());
  }
  upload(url:string, payload:string, file:File):Observable<any> {
    return this._uploadService.makeFileRequest(url, [payload], [file]);
  }
}