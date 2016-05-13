import { Component, OnInit } from '@angular/core';
import {JwtService} from '../jwt/jwt.service'
import {Router} from '@angular/router'
export class DtBaseComponent implements OnInit {
    constructor(private _router:Router, private _jwtService:JwtService) { }

    ngOnInit() {
         console.log("Decoding JWT");
       var token = this._jwtService.get();
       console.log('jwt expiration time',this._jwtService.isAuthenticated());
        if(!this._jwtService.isAuthenticated()){
            console.log('failed tokenNotExpired');
             this._router.navigate(['login']);
        }
        
     }

}