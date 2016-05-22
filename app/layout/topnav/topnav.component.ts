import { Component, OnInit } from '@angular/core';
import {Router,ROUTER_DIRECTIVES} from '@angular/router'
import {PostLoginNavComponent} from '../postlogin/postlogin.nav.component';


@Component({
    selector: 'top-nav',
    templateUrl: 'app/layout/topnav/topnav.component.html',
    directives: [ROUTER_DIRECTIVES,PostLoginNavComponent]
})
export class TopNavComponent {
   pageTitle: string ='Dollar Tracker';
   constructor(){}
 }
