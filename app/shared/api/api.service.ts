import { Injectable } from '@angular/core';
import {Http, Headers, Request, RequestOptions, RequestOptionsArgs, RequestMethod, Response} from '@angular/http';
import {JwtService} from '../../jwt/jwt.service'
import {Observable} from 'rxjs/Observable';
import {UploadService} from '../upload/upload.service'
@Injectable()
export class ApiService {

constructor(private _jwtService:JwtService,private http: Http,  private _uploadService:UploadService) { 
  this.setup();
}

setup(){
  let headers:Headers;
    headers = new Headers();
    headers.set('Content-Type', 'application/json');    
    headers.set("Authorization", "Bearer " + this._jwtService.get());
    return headers;
}
post(url:string, payload:any) {
   let headers = this.setup();
    return this.http
        .post(url, JSON.stringify(payload),
         {headers: headers}).map(x=>x.json());
  } 

  get(url: string) : Observable<any> {
      let headers = this.setup();
      return this.http.get(url,{headers: headers}).map(x=>x.json());
  }
  upload(url:string, payload:string, file:File):Observable<any> {
    let headers = this.setup();
    return this._uploadService.makeFileRequest(url, [payload], [file]);
  }
  delete(url:string) {
    let headers = this.setup();
    return this.http.delete(url, {headers:headers});
  }
}