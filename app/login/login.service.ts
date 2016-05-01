import { Injectable } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable'
import {ApiUrl} from '../shared/apiurl.service'
import {Headers, RequestOptions} from 'angular2/http';


@Injectable()
export class LoginService {
    
    constructor(private _apiUrl:ApiUrl, private _http:Http) {
    }


    login(payload): void {
        let body = JSON.stringify(payload);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        console.log("inside login service", this._apiUrl.loginUrl);
        console.log("payload", JSON.stringify(payload));
     this._http.post(this._apiUrl.loginUrl,body, options)
        .map((response: Response) => response.json())
        .do(data=>console.log("Login:", JSON.stringify(data)))
        .subscribe(result =>{
            console.log(JSON.stringify(result));
        });
    }
      private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}