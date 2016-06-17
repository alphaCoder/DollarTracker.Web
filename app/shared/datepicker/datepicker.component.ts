import { Component, ViewChild, Input, Provider, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, CORE_DIRECTIVES,FORM_PROVIDERS, FORM_DIRECTIVES} from "@angular/common";

// To understand how ngModel works here, read: http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel

const noop = () => {};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new Provider(
  NG_VALUE_ACCESSOR, {
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
  });

declare var $;
declare var moment;

@Component({
    selector: 'date-picker',
    template: `
    <div class="input-group date"> 
         <span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
         <input #datepickerInput type="text" value={{_value}} class="form-control">
    </div>
    `,
    providers:[CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,FORM_PROVIDERS],
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DatePickerComponent implements ControlValueAccessor {
	//The internal data model
    private _value: string = '';
    @ViewChild('datepickerInput') datepickerInput;
    constructor() { }

    ngOnInit() { }
    
 
	ngAfterViewInit() {
      	$(this.datepickerInput.nativeElement).datepicker({
           autoclose: true,
           todayBtn: 'linked',
           defaultViewDate: 'today'
        });
     }
//Placeholders for the callbacks...overwritten upon registering
    private _onTouchedCallback: (_:any) => void = noop;
    private _onChangeCallback: (_:any) => void = noop;

    //Set touched on blur
    onTouched(){
		this._onTouchedCallback(null);
    }
  
  //get accessor
    get value(): any { return this._value; };
  
    //set accessor including call the onchange callback
    set value(v: any) {
      console.log('DATE PICKER SET'+v);
      if (v !== this._value) {
        this._value = v;
        this._onChangeCallback(v);
      }
    }
    
    //From ControlValueAccessor interface
    writeValue(value: any) {
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