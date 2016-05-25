import { Injectable } from '@angular/core';
import {ApiService} from '../shared/api/api.service';
import {ApiUrl} from '../shared/apiurl.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReportService {

    constructor(private _apiUrl : ApiUrl, private _apiService : ApiService) { }

    public get():Observable<any>
    {
        return this._apiService.get(this._apiUrl.report);
    }
}