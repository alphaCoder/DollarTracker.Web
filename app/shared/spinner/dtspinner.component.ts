import { Component, OnInit, Input } from 'angular2/core';

@Component({
    selector: 'dt-spin-button',
    template: `
    <button><i class='fa fa-gear fa-spin' (click)='onClick()'></i> Test</button>
    `
})
export class DtSpinButtonComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @Input() method;
    
    onClick():any{
        console.log('I am on click in dt spinner');
        this.method().subscribe(x=>console.log('done'));
    }
}