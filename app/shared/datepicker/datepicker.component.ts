import {Output, EventEmitter, Component, ViewChild, Input, Provider, forwardRef } from '@angular/core';
import {ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR, CORE_DIRECTIVES,FORM_PROVIDERS, FORM_DIRECTIVES} from "@angular/common";

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
    <div class="input-group"> 
         <span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
         <input #datepickerInput type="text" class="form-control" [value]="_value" placeholder="{{addontext}}">
    </div>
    `,
    providers:[CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,FORM_PROVIDERS],
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DatePicker implements ControlValueAccessor {
	//The internal data model
    private _value = '';
    
    @Input() addontext:string;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('datepickerInput') datepickerInput;
    constructor() { }

  	ngAfterViewInit() {
     	var self = this;
        $(this.datepickerInput.nativeElement).datepicker({
           autoclose: true,
           todayBtn: 'linked',
           forceParse: 0
        }).on('changeDate', function (dt) {
          self.writeValue(dt.format(0,"mm/dd/yyyy"));
        });
     }
  
    //Placeholders for the callbacks
    private _onTouchedCallback: (_:any) => void = noop;
   
    private _onChangeCallback: (_:any) => void = noop;
  
    //get accessor
    get value(): any {
       return this._value; 
      };
  
    //set accessor including call the onchange callback
    set value(v: any) {
      this.setValue(v);
    }
    
    //Set touched on blur
    onTouched(ev){
      this._onTouchedCallback(null);
    }
  
    private setValue(v: any) {
      if(v && v!= this._value) {
        this._value = v;
        this.notify.emit(v);
        this._onChangeCallback(v);
      }
    }
    //From ControlValueAccessor interface
    writeValue(value: any) {
      this.setValue(value);
    }
    updateDate(value:string) {
      $(this.datepickerInput.nativeElement).datepicker('update', new Date(value));
    }
    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
      this._onChangeCallback = fn;
    }
  
    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
      this._onTouchedCallback = fn;
    }
    reset(){
        $(this.datepickerInput.nativeElement).datepicker('update', '');
    }
}