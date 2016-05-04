import { Component, OnInit, Input } from 'angular2/core';

@Component({
    selector: 'dt-alert',
    templateUrl: 'app/shared/alert/dtalert.component.html'
})
export class DtAlertComponent implements OnInit {
    public messages:any[];
    constructor() { 
        this.messages = [];
    }

    ngOnInit() { 
    }

    public Create():DtAlertComponent {
        return this;
    }
    public Success(message:string):void{
        var msg = {"key":"success", "text": message}
        this.messages.push(msg);
    }
    
    public Failure(message:string):void{
        var msg = {"key":"error", "text": message}
        this.messages.push(msg);
    }
    
    @Input() malert:DtAlertComponent;
}