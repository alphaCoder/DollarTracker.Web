import { Injectable } from '@angular/core';
import {ApiUrl} from '../shared/apiurl.service';
import {ApiService} from '../shared/api/api.service';

@Injectable()
export class ProfileService {

    constructor(private _apiUrl:ApiUrl, private _apiService:ApiService) { 
    }

    getProfile(userId) {
        let url = this._apiUrl.profile + "/" +userId;
        return this._apiService.get(url);
    }
}