import { Injectable } from '@angular/core';
import {Http, Headers, Request, RequestOptions, RequestOptionsArgs, RequestMethod, Response} from '@angular/http';
import {JwtService} from '../../jwt/jwt.service'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

constructor(private _jwtService:JwtService,private http: Http) { }

  setGlobalHeaders(headers: Array<Object>, request: Request | RequestOptionsArgs) {
    headers.forEach((header: Object) => {
      let key: string = Object.keys(header)[0];
      let headerValue: string = (<any>header)[key];
      request.headers.set(key, headerValue);
    });
  }
  
request(url: string | Request, options?: RequestOptionsArgs) : Observable<Response> {

    let request: any;
    let reqOpts: RequestOptionsArgs =  {};
      reqOpts.headers = new Headers();
      reqOpts.headers.set('Content-Type', 'application/json');    
      reqOpts.headers.set("Authorization", "Bearer " + this._jwtService.get());
      request = this.http.request(url, reqOpts);
    
    return request;
  }

  private requestHelper(requestArgs: RequestOptionsArgs, additionalOptions: RequestOptionsArgs) : Observable<Response> {
    let options: RequestOptions = new RequestOptions(requestArgs);
    
    if (additionalOptions) {
      options = options.merge(additionalOptions)
    }
    
    return this.request(new Request(options))
  }
  
   get(url: string, options?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, method: RequestMethod.Get }, options);
  }

  post(url: string, body: string, options?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, body: body, method: RequestMethod.Post }, options);
  }

  put(url: string, body: string, options ?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, body: body, method: RequestMethod.Put }, options);
  }

  delete(url: string, options ?: RequestOptionsArgs) : Observable<Response> {
    return this.requestHelper({ url:  url, method: RequestMethod.Delete }, options);
  }
}