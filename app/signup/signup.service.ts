import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import {ApiUrl} from '../shared/apiurl.service'
import {Headers, RequestOptions} from '@angular/http';
import {ISignupResponse} from './signupResponse'

@Injectable()
export class SignupService {
    
    constructor(private _apiUrl:ApiUrl, private _http:Http) { }
    signup(payload): Observable<ISignupResponse> {
        let body = JSON.stringify(payload);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
     return this._http.post(this._apiUrl.signupUrl,body, options)
        .map((response: Response) => <ISignupResponse>response.json())
        .do(data=>console.log("SignUp:", JSON.stringify(data)))
        .catch(this.handleError)
    }
     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}