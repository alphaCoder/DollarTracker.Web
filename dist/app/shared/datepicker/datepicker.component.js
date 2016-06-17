System.register(['@angular/core', "@angular/common"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var noop, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, DatePickerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            // To understand how ngModel works here, read: http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
            noop = () => { };
            CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(() => DatePickerComponent),
                multi: true
            });
            let DatePickerComponent = class DatePickerComponent {
                constructor() {
                    //The internal data model
                    this._value = '';
                    //Placeholders for the callbacks...overwritten upon registering
                    this._onTouchedCallback = noop;
                    this._onChangeCallback = noop;
                }
                ngOnInit() { }
                ngAfterViewInit() {
                    $(this.datepickerInput.nativeElement).datepicker({
                        autoclose: true,
                        todayBtn: true
                    });
                }
                //Set touched on blur
                onTouched() {
                    this._onTouchedCallback(null);
                }
                //get accessor
                get value() { return this._value; }
                ;
                //set accessor including call the onchange callback
                set value(v) {
                    console.log('DATE PICKER SET' + v);
                    if (v !== this._value) {
                        this._value = v;
                        this._onChangeCallback(v);
                    }
                }
                //From ControlValueAccessor interface
                writeValue(value) {
                    this._value = value;
                }
                //From ControlValueAccessor interface
                registerOnChange(fn) {
                    this._onChangeCallback = fn;
                }
                //From ControlValueAccessor interface
                registerOnTouched(fn) {
                    this._onTouchedCallback = fn;
                }
            };
            __decorate([
                core_1.ViewChild('datepickerInput'), 
                __metadata('design:type', Object)
            ], DatePickerComponent.prototype, "datepickerInput", void 0);
            DatePickerComponent = __decorate([
                core_1.Component({
                    selector: 'date-picker',
                    template: `
    <div class="input-group date"> 
         <span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
         <input #datepickerInput type="text" value={{_value}} class="form-control">
    </div>
    `,
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, common_1.FORM_PROVIDERS],
                    directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], DatePickerComponent);
            exports_1("DatePickerComponent", DatePickerComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFLTSxJQUFJLEVBRUosbUNBQW1DOzs7Ozs7Ozs7O1lBSnpDLHdIQUF3SDtZQUVsSCxJQUFJLEdBQUcsUUFBTyxDQUFDLENBQUM7WUFFaEIsbUNBQW1DLEdBQUcsSUFBSSxlQUFRLENBQ3RELDBCQUFpQixFQUFFO2dCQUNqQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLG1CQUFtQixDQUFDO2dCQUNsRCxLQUFLLEVBQUUsSUFBSTthQUNaLENBQUMsQ0FBQztZQWdCTDtnQkFJSTtvQkFISCx5QkFBeUI7b0JBQ2QsV0FBTSxHQUFXLEVBQUUsQ0FBQztvQkFhaEMsK0RBQStEO29CQUNuRCx1QkFBa0IsR0FBb0IsSUFBSSxDQUFDO29CQUMzQyxzQkFBaUIsR0FBb0IsSUFBSSxDQUFDO2dCQWJsQyxDQUFDO2dCQUVqQixRQUFRLEtBQUssQ0FBQztnQkFHakIsZUFBZTtvQkFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUM7d0JBQzdDLFNBQVMsRUFBRSxJQUFJO3dCQUNmLFFBQVEsRUFBRSxJQUFJO3FCQUNoQixDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFLRixxQkFBcUI7Z0JBQ3JCLFNBQVM7b0JBQ1gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQUVILGNBQWM7Z0JBQ1osSUFBSSxLQUFLLEtBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztnQkFFeEMsbURBQW1EO2dCQUNuRCxJQUFJLEtBQUssQ0FBQyxDQUFNO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsVUFBVSxDQUFDLEtBQVU7b0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsZ0JBQWdCLENBQUMsRUFBTztvQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLGlCQUFpQixDQUFDLEVBQU87b0JBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7Z0JBQy9CLENBQUM7WUFDTCxDQUFDO1lBL0NHO2dCQUFDLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7O3dFQUFBO1lBZGpDO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7S0FLVDtvQkFDRCxTQUFTLEVBQUMsQ0FBQyxtQ0FBbUMsRUFBQyx1QkFBYyxDQUFDO29CQUM5RCxVQUFVLEVBQUMsQ0FBQyx3QkFBZSxFQUFFLHdCQUFlLENBQUM7aUJBQ2hELENBQUM7O21DQUFBO1lBQ0YscURBa0RDLENBQUEiLCJmaWxlIjoic2hhcmVkL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIFByb3ZpZGVyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBDT1JFX0RJUkVDVElWRVMsRk9STV9QUk9WSURFUlMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuLy8gVG8gdW5kZXJzdGFuZCBob3cgbmdNb2RlbCB3b3JrcyBoZXJlLCByZWFkOiBodHRwOi8vYWxtZXJvc3RleW4uY29tLzIwMTYvMDQvbGlua3VwLWN1c3RvbS1jb250cm9sLXRvLW5nY29udHJvbC1uZ21vZGVsXHJcblxyXG5jb25zdCBub29wID0gKCkgPT4ge307XHJcblxyXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IG5ldyBQcm92aWRlcihcclxuICBOR19WQUxVRV9BQ0NFU1NPUiwge1xyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlckNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuZGVjbGFyZSB2YXIgJDtcclxuZGVjbGFyZSB2YXIgbW9tZW50O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RhdGUtcGlja2VyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZGF0ZVwiPiBcclxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aFwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgIDxpbnB1dCAjZGF0ZXBpY2tlcklucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3tfdmFsdWV9fSBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOltDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUixGT1JNX1BST1ZJREVSU10sXHJcbiAgICBkaXJlY3RpdmVzOltDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblx0Ly9UaGUgaW50ZXJuYWwgZGF0YSBtb2RlbFxyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gICAgQFZpZXdDaGlsZCgnZGF0ZXBpY2tlcklucHV0JykgZGF0ZXBpY2tlcklucHV0O1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG4gICAgXHJcbiBcclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgIFx0JCh0aGlzLmRhdGVwaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgdG9kYXlCdG46IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbi8vUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzLi4ub3ZlcndyaXR0ZW4gdXBvbiByZWdpc3RlcmluZ1xyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6IChfOmFueSkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoXzphbnkpID0+IHZvaWQgPSBub29wO1xyXG5cclxuICAgIC8vU2V0IHRvdWNoZWQgb24gYmx1clxyXG4gICAgb25Ub3VjaGVkKCl7XHJcblx0XHR0aGlzLl9vblRvdWNoZWRDYWxsYmFjayhudWxsKTtcclxuICAgIH1cclxuICBcclxuICAvL2dldCBhY2Nlc3NvclxyXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfTtcclxuICBcclxuICAgIC8vc2V0IGFjY2Vzc29yIGluY2x1ZGluZyBjYWxsIHRoZSBvbmNoYW5nZSBjYWxsYmFja1xyXG4gICAgc2V0IHZhbHVlKHY6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnREFURSBQSUNLRVIgU0VUJyt2KTtcclxuICAgICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
