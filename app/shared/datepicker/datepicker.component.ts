import { Component, ViewChild, Input, Provider, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES,FORM_PROVIDERS, FORM_DIRECTIVES} from "@angular/common";

// To understand how ngModel works here, read: http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel

const noop = () => {};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => DatePicker),
    multi: true
  });

declare var $;
declare var moment;

@Component({
    selector: 'date-picker',
    template: `
    <div #datepickerInput class="input-group date"> 
         <span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
         <input type="text" [(ngModel)]="value" class="form-control">
    </div>
    `,
    providers:[CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,FORM_PROVIDERS],
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DatePicker implements ControlValueAccessor {
	//The internal data model
    private _value: string = "";
    private displayDate:string ="";
    @ViewChild('datepickerInput') datepickerInput;
    constructor() { }

    ngOnInit() {
    }
    
 
	ngAfterViewInit() {
      	var self = this;
        $(this.datepickerInput.nativeElement).datepicker({
           autoclose: true,
           todayBtn: 'linked',
           defaultViewDate: 'today'
           
        }).on('changeDate', function (dt) {
          console.log(dt.date.toISOString());
          console.log(dt.format(0,"mm/dd/yyyy"))
          console.log("I am truly in change date method:");
          self.writeValue(dt.format(0,"mm/dd/yyyy"));
        });
     }
  
    //Placeholders for the callbacks
    private _onTouchedCallback: () => void = noop;
   
    private _onChangeCallback: (_:any) => void = noop;
  
    //get accessor
    get value(): any { return this._value; };
  
    //set accessor including call the onchange callback
    set value(v: any) {
      console.log("I am in set");
      if (v !== this._value) {
        this._value = v;
        this._onChangeCallback(v);
      }
    }
    
    //Set touched on blur
    onTouched(ev){
      console.log("touched", ev.target.value);
    this.writeValue(ev.target.value);
      this._onTouchedCallback();
    }
  
    //From ControlValueAccessor interface
    writeValue(value: any) {
      console.log("I am in writeValue:"+value)
      this._value = value;
    }
  
    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
      this._onChangeCallback = fn;
    }
  
    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
      this._onTouchedCallback = fn;
    }
}