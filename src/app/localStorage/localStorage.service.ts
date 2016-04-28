import { Injectable } from 'angular2/core';

export interface ILocalStorage{
    getItem(key:string) : any;
    setItem(key:string, value:any);
}
@Injectable()
export class LocalStorageService implements ILocalStorage {
    private storgage:Storage;
    constructor() { 
        this.storgage = localStorage;
    }

    public getItem(key:string) :any{
        return JSON.parse(this.storgage.getItem(key));
    }

    public setItem(key:string, value:any) {
        if(key && value) {
             this.storgage.setItem(key, JSON.stringify(value));
        }
    }    
 }