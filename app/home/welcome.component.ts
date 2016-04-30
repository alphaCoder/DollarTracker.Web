import { Component, OnInit } from 'angular2/core';

@Component({
    templateUrl: 'app/home/welcom.component.html'
})
export class WelcomComponent implements OnInit {
   public pageTitle: string = "Welcome";
    constructor() { }

    ngOnInit() { }

}