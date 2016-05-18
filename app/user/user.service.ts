import { Injectable } from '@angular/core';
import {JwtService} from '../jwt/jwt.service'
import {IUser, ILoginResponse} from '../login/loginResponse'

@Injectable()
export class UserService {

    public userId:string = null;
	public userName:string = null;
	public email:string = null;
	public displayName:string = null;
    public memberSince:Date = null;
    public isAuthenticated:boolean = false;
    constructor(private _jwtService:JwtService) {}

    public add(loginResponse:ILoginResponse){
       this._jwtService.set(loginResponse.token);
       this.mapUser(loginResponse.user);
       this.isAuthenticated = true;
    }

    private mapUser(user:IUser){
        this.userId = user.userId,
        this.userName = user.userName,
        this.displayName = user.displayName,
        this.email = user.email,
        this.memberSince = user.memberSince;
    }
    
    public clear() {
        this.userId = null;
        this.userName = null;
        this.displayName = null;
        this.email = null;
        this.memberSince = null;
        this.isAuthenticated = false;
        this._jwtService.clear();
    }
}