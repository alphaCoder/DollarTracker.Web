import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'dt-spin-button',
    template: `
    <button><i class='fa fa-gear fa-spin' style="color: #5CB85C;"></i> Test</button>
    `
})
export class DtSpinButtonComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}