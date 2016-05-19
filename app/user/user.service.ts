import {Injectable} from '@angular/core';
import {JwtService} from '../jwt/jwt.service'
import {IUser, ILoginResponse} from '../login/loginResponse'
import {Subject, BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class UserService{

    private userKey:string = "dollarTrackerUser"
    isAuthenticated:Subject<boolean> = new BehaviorSubject<boolean>(false);
    currentUser: Subject<IUser> = new BehaviorSubject<IUser>(null);

    constructor(private _jwtService:JwtService) {
    }
    public init(){
        console.log("userservice 1");
       let usr = localStorage.getItem(this.userKey);
       console.log('user',usr);
       if(usr){
           let user:IUser = JSON.parse(usr);
           console.log('parsed user', user);
           this.currentUser =new BehaviorSubject<IUser>(user);
           //this.currentUser.next(user);
       }
       else{
           this.currentUser = new BehaviorSubject<IUser>(null);
       }
       this.isAuthenticated.next(this._jwtService.isAuthenticated())
    }

    public add(loginResponse:ILoginResponse){
       this._jwtService.set(loginResponse.token);
       this.isAuthenticated.next(true);
       this.setCurrent(loginResponse.user);
       localStorage.setItem(this.userKey, JSON.stringify(loginResponse.user));
    }
    
    public setCurrent(newUser: IUser):void {
        this.currentUser.next(newUser);
    }

    public clear() {
        this.currentUser.next(null);
        this._jwtService.clear();
        this.isAuthenticated.next(false);
    }
}