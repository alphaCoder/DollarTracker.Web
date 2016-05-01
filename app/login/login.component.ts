import { Component, Input, OnInit } from 'angular2/core';
import {RouterOutlet, RouterLink} from 'angular2/router';
@Component({
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent implements OnInit {
    public pageTitle: string = "Login";
    @Input() username:string;
    @Input() password:string;
    constructor() { }

    ngOnInit() {
        console.log('dskfjlksjd');
     }

    submit():void {
        console.log("clicked submit");
        console.log("username" +  this.username)
        console.log("password", this.password);
    }
}