import { Component, OnInit } from 'angular2/core';

@Component({
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent implements OnInit {
    public pageTitle: string = "Login";
    constructor() { }

    ngOnInit() { }

}