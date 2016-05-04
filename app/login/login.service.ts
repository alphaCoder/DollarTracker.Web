import { Injectable } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable'
import {ApiUrl} from '../shared/apiurl.service'
import {Headers, RequestOptions} from 'angular2/http';
import {ILoginResponse} from './loginResponse'

@Injectable()
export class LoginService {
    
    constructor(private _apiUrl:ApiUrl, private _http:Http) { }
    login(payload): Observable<ILoginResponse> {
        let body = JSON.stringify(payload);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
     return this._http.post(this._apiUrl.loginUrl,body, options)
        .map((response: Response) => <ILoginResponse>response.json())
        .do(data=>console.log("Login:", JSON.stringify(data)))
        .catch(this.handleError)
    }
     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}