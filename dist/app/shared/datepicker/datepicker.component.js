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
                        todayBtn: 'linked',
                        defaultViewDate: 'today'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFLTSxJQUFJLEVBRUosbUNBQW1DOzs7Ozs7Ozs7O1lBSnpDLHdIQUF3SDtZQUVsSCxJQUFJLEdBQUcsUUFBTyxDQUFDLENBQUM7WUFFaEIsbUNBQW1DLEdBQUcsSUFBSSxlQUFRLENBQ3RELDBCQUFpQixFQUFFO2dCQUNqQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLG1CQUFtQixDQUFDO2dCQUNsRCxLQUFLLEVBQUUsSUFBSTthQUNaLENBQUMsQ0FBQztZQWdCTDtnQkFJSTtvQkFISCx5QkFBeUI7b0JBQ2QsV0FBTSxHQUFXLEVBQUUsQ0FBQztvQkFjaEMsK0RBQStEO29CQUNuRCx1QkFBa0IsR0FBb0IsSUFBSSxDQUFDO29CQUMzQyxzQkFBaUIsR0FBb0IsSUFBSSxDQUFDO2dCQWRsQyxDQUFDO2dCQUVqQixRQUFRLEtBQUssQ0FBQztnQkFHakIsZUFBZTtvQkFDVCxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUM7d0JBQzdDLFNBQVMsRUFBRSxJQUFJO3dCQUNmLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixlQUFlLEVBQUUsT0FBTztxQkFDMUIsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBS0YscUJBQXFCO2dCQUNyQixTQUFTO29CQUNYLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFSCxjQUFjO2dCQUNaLElBQUksS0FBSyxLQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Z0JBRXhDLG1EQUFtRDtnQkFDbkQsSUFBSSxLQUFLLENBQUMsQ0FBTTtvQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLFVBQVUsQ0FBQyxLQUFVO29CQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLGdCQUFnQixDQUFDLEVBQU87b0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyxpQkFBaUIsQ0FBQyxFQUFPO29CQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixDQUFDO1lBQ0wsQ0FBQztZQWhERztnQkFBQyxnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzt3RUFBQTtZQWRqQztnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7O0tBS1Q7b0JBQ0QsU0FBUyxFQUFDLENBQUMsbUNBQW1DLEVBQUMsdUJBQWMsQ0FBQztvQkFDOUQsVUFBVSxFQUFDLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxDQUFDO2lCQUNoRCxDQUFDOzttQ0FBQTtZQUNGLHFEQW1EQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBQcm92aWRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ09SRV9ESVJFQ1RJVkVTLEZPUk1fUFJPVklERVJTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbi8vIFRvIHVuZGVyc3RhbmQgaG93IG5nTW9kZWwgd29ya3MgaGVyZSwgcmVhZDogaHR0cDovL2FsbWVyb3N0ZXluLmNvbS8yMDE2LzA0L2xpbmt1cC1jdXN0b20tY29udHJvbC10by1uZ2NvbnRyb2wtbmdtb2RlbFxyXG5cclxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xyXG5cclxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSBuZXcgUHJvdmlkZXIoXHJcbiAgTkdfVkFMVUVfQUNDRVNTT1IsIHtcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXJDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9KTtcclxuXHJcbmRlY2xhcmUgdmFyICQ7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXRlLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRhdGVcIj4gXHJcbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGhcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICA8aW5wdXQgI2RhdGVwaWNrZXJJbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt7X3ZhbHVlfX0gY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczpbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsRk9STV9QUk9WSURFUlNdLFxyXG4gICAgZGlyZWN0aXZlczpbQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cdC8vVGhlIGludGVybmFsIGRhdGEgbW9kZWxcclxuICAgIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgPSAnJztcclxuICAgIEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXJJbnB1dCcpIGRhdGVwaWNrZXJJbnB1dDtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuICAgIFxyXG4gXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICBcdCQodGhpcy5kYXRlcGlja2VySW5wdXQubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgIHRvZGF5QnRuOiAnbGlua2VkJyxcclxuICAgICAgICAgICBkZWZhdWx0Vmlld0RhdGU6ICd0b2RheSdcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbi8vUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzLi4ub3ZlcndyaXR0ZW4gdXBvbiByZWdpc3RlcmluZ1xyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6IChfOmFueSkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoXzphbnkpID0+IHZvaWQgPSBub29wO1xyXG5cclxuICAgIC8vU2V0IHRvdWNoZWQgb24gYmx1clxyXG4gICAgb25Ub3VjaGVkKCl7XHJcblx0XHR0aGlzLl9vblRvdWNoZWRDYWxsYmFjayhudWxsKTtcclxuICAgIH1cclxuICBcclxuICAvL2dldCBhY2Nlc3NvclxyXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLl92YWx1ZTsgfTtcclxuICBcclxuICAgIC8vc2V0IGFjY2Vzc29yIGluY2x1ZGluZyBjYWxsIHRoZSBvbmNoYW5nZSBjYWxsYmFja1xyXG4gICAgc2V0IHZhbHVlKHY6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnREFURSBQSUNLRVIgU0VUJyt2KTtcclxuICAgICAgaWYgKHYgIT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2O1xyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sodik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
