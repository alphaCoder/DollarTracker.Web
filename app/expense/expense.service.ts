import { Injectable } from '@angular/core';
import {ApiUrl} from '../shared/apiurl.service';
import {ApiService} from '../shared/api/api.service';
import {Observable} from 'rxjs/Rx'
import {UploadService} from '../shared/upload/upload.service';
@Injectable()
export class ExpenseService {

    constructor(private _apiurl:ApiUrl, private _apiService:ApiService, private _uploadService:UploadService) { }

    addOnlyExpense(payload:any):Observable<any>{
        return this._apiService.post(this._apiurl.addOnlyExpense, payload)
    }
    addExpense(payload, files:Array<any>):Observable<any> {
        return this._uploadService
            .makeFileRequest(this._apiurl.addExpense, [JSON.stringify(payload)], files);
    }
    deleteExpense(expenseId){
        var url = this._apiurl.deleteExpense + "/" + expenseId;
        return this._apiService.delete(url);
    }
}