import {Injectable} from '@angular/core';
import {JwtService} from '../jwt/jwt.service'
import {IUser, ILoginResponse} from '../login/loginResponse'
import {Subject, BehaviorSubject, Observable} from 'rxjs/Rx';
import {Router} from '@angular/router'
import {ApiUrl} from '../shared/apiurl.service';
import {ApiService} from '../shared/api/api.service';
@Injectable()
export class UserService{

    private userKey:string = "dollarTrackerUser"
    isAuthenticated:Subject<boolean> = new BehaviorSubject<boolean>(false);
    currentUser: Subject<IUser> = new BehaviorSubject<IUser>(null);
    public user:IUser = null;
    constructor(private _jwtService:JwtService, private _router:Router, private _apiUrl:ApiUrl,
     private _apiService:ApiService) {
        this.currentUser.subscribe(user =>{
            this.user = user;
        })
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
           this._router.navigate(['dashboard']);
       }
    }

    public isUserAuthenticated():boolean
    {
        let isAuthenticated = this._jwtService.isAuthenticated();
        if(!isAuthenticated){
            this.clear();
        }
        return isAuthenticated;
    }

    public add(loginResponse:ILoginResponse){
       this._jwtService.set(loginResponse.token);
       this.isAuthenticated.next(true);
       this.setCurrent(loginResponse.user);
       localStorage.setItem(this.userKey, JSON.stringify(loginResponse.user));
    }
    
    public setCurrent(newUser: IUser):void {
        localStorage.setItem(this.userKey, JSON.stringify(newUser));
        this.currentUser.next(newUser);
    }

    public updatePassword(payload) {
        return this._apiService.post(this._apiUrl.updatePassword, payload); 
    }
    public updateUser(payload):Observable<any> {
       return this._apiService
        .post(this._apiUrl.updateUser, payload)
        .do(result => {
            if(result.success) {
                this.setCurrent(result.data);
            }
        });
          
    }

    public clear() {
        this.user = null;
        this.currentUser.next(null);
        this._jwtService.clear();
        this.isAuthenticated.next(false);
    }

    public logout(){
        this.clear();
        this._router.navigate(['login']);
    }
}