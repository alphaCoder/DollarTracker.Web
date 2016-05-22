import {Injectable} from '@angular/core';
import {JwtService} from '../jwt/jwt.service'
import {IUser, ILoginResponse} from '../login/loginResponse'
import {Subject, BehaviorSubject} from 'rxjs/Rx';
import {Router} from '@angular/router'

@Injectable()
export class UserService{

    private userKey:string = "dollarTrackerUser"
    isAuthenticated:Subject<boolean> = new BehaviorSubject<boolean>(false);
    currentUser: Subject<IUser> = new BehaviorSubject<IUser>(null);

    constructor(private _jwtService:JwtService, private _router:Router) {
    }
    public init(){
        
       let usr = localStorage.getItem(this.userKey);
       let isAuthenticated = this._jwtService.isAuthenticated();

       if(usr) {
           let user:IUser = JSON.parse(usr);
           this.currentUser.next(user);
       }
       if(!isAuthenticated) {
           this.clear();
       }
       else {
          this.isAuthenticated.next(isAuthenticated);
           console.log('navigate to dashboard');
           this._router.navigateByUrl('/dashboard');
       }
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
        this._router.navigateByUrl('/');
    }
}