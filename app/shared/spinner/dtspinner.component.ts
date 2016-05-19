import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
    selector: 'dt-button',
    template: `
    <button class="btn btn-success" (click)='onClick()'><i class='fa fa-gear fa-spin' *ngIf="showBusy"></i> Test</button>
    `
})
export class DtSpinButtonComponent implements OnInit {
    public showBusy:boolean = false;
    constructor() { }

    ngOnInit() { }

    @Input() method:Observable<any>;
    
    onClick():any{
        console.log('I am on click in dt spinner');
        this.showBusy = true;
        this.method.subscribe(x=>{
            this.showBusy = false;
            console.log('done')
        });
    }
}