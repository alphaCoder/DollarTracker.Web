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
         <input #datepickerInput type="text" class="form-control" placeholder="{{addontext}}">
    </div>
    `,
    providers:[CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,FORM_PROVIDERS],
    directives:[CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class DatePicker implements ControlValueAccessor {
	//The internal data model
    private _value: string = "";
    public viewValue:string = "";
    @Input() addontext:string;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('datepickerInput') datepickerInput;
    constructor() { 
    }

    ngOnInit() {
      this.value = '';
      this.viewValue = '';
    }
    
 
	ngAfterViewInit() {

      	var self = this;
        $(this.datepickerInput.nativeElement).datepicker({
           autoclose: true,
           todayBtn: 'linked',
           defaultViewDate: 'today',
           forceParse: 0
        }).on('changeDate', function (dt) {
          console.log("I am truly in change date method:");
          self.writeValue(dt.format(0,"mm/dd/yyyy"));
        });
     }
  
    //Placeholders for the callbacks
    private _onTouchedCallback: () => void = noop;
   
    private _onChangeCallback: (_:any) => void = noop;
  
    //get accessor
    get value(): any {
       return this.viewValue; 
      };
  
    //set accessor including call the onchange callback
    set value(v: any) {
      
    }
    
    //Set touched on blur
    onTouched(ev){
      this.writeValue(ev.target.value);
      this._onTouchedCallback();
    }
  
    //From ControlValueAccessor interface
    writeValue(value: any) {
      console.log("I am in writeValue:"+value)
      this.notify.emit(value);
    }
    updateDate(value:string) {
      $(this.datepickerInput.nativeElement).datepicker('update', new Date(value));
    }
    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
      console.log("register on change");
      console.log(fn);
      
      this._onChangeCallback = fn;
    }
  
    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
      console.log("register on touched");
      console.log(fn);
      
      this._onTouchedCallback = fn;
    }
    reset(){
        $(this.datepickerInput.nativeElement).datepicker('update', '');
    }
}