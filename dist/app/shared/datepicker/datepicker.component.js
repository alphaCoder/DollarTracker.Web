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
    var noop, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, DatePicker;
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
                useExisting: core_1.forwardRef(() => DatePicker),
                multi: true
            });
            let DatePicker = class DatePicker {
                constructor() {
                    //The internal data model
                    this._value = "";
                    this.displayDate = "";
                    //Placeholders for the callbacks
                    this._onTouchedCallback = noop;
                    this._onChangeCallback = noop;
                }
                ngOnInit() {
                    this.value = '';
                }
                ngAfterViewInit() {
                    var self = this;
                    $(this.datepickerInput.nativeElement).datepicker({
                        autoclose: true,
                        todayBtn: 'linked',
                        defaultViewDate: 'today'
                    }).on('changeDate', function (dt) {
                        console.log(dt.date.toISOString());
                        console.log(dt.format(0, "mm/dd/yyyy"));
                        console.log("I am truly in change date method:");
                        self.writeValue(dt.format(0, "mm/dd/yyyy"));
                    });
                }
                //get accessor
                get value() { return this._value; }
                ;
                //set accessor including call the onchange callback
                set value(v) {
                    console.log("I am in set");
                    if (v !== this._value) {
                        this._value = v;
                        this._onChangeCallback(v);
                    }
                }
                //Set touched on blur
                onTouched(ev) {
                    console.log("touched", ev.target.value);
                    this.writeValue(ev.target.value);
                    this._onTouchedCallback();
                }
                //From ControlValueAccessor interface
                writeValue(value) {
                    console.log("I am in writeValue:" + value);
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
            ], DatePicker.prototype, "datepickerInput", void 0);
            DatePicker = __decorate([
                core_1.Component({
                    selector: 'date-picker',
                    template: `
    <div #datepickerInput class="input-group date"> 
         <span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
         <input type="text" [(ngModel)]="value" class="form-control">
    </div>
    `,
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, common_1.FORM_PROVIDERS],
                    directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], DatePicker);
            exports_1("DatePicker", DatePicker);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFLTSxJQUFJLEVBRUosbUNBQW1DOzs7Ozs7Ozs7O1lBSnpDLHdIQUF3SDtZQUVsSCxJQUFJLEdBQUcsUUFBTyxDQUFDLENBQUM7WUFFaEIsbUNBQW1DLEdBQUcsSUFBSSxlQUFRLENBQ3RELDBCQUFpQixFQUFFO2dCQUNqQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLFVBQVUsQ0FBQztnQkFDekMsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDLENBQUM7WUFnQkw7Z0JBS0k7b0JBSkgseUJBQXlCO29CQUNkLFdBQU0sR0FBVyxFQUFFLENBQUM7b0JBQ3BCLGdCQUFXLEdBQVMsRUFBRSxDQUFDO29CQXdCL0IsZ0NBQWdDO29CQUN4Qix1QkFBa0IsR0FBZSxJQUFJLENBQUM7b0JBRXRDLHNCQUFpQixHQUFvQixJQUFJLENBQUM7Z0JBekJsQyxDQUFDO2dCQUVqQixRQUFRO29CQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixDQUFDO2dCQUdKLGVBQWU7b0JBQ1QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQzt3QkFDOUMsU0FBUyxFQUFFLElBQUk7d0JBQ2YsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLGVBQWUsRUFBRSxPQUFPO3FCQUUxQixDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUU7d0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO3dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7d0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQU9GLGNBQWM7Z0JBQ2QsSUFBSSxLQUFLLEtBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOztnQkFFeEMsbURBQW1EO2dCQUNuRCxJQUFJLEtBQUssQ0FBQyxDQUFNO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELHFCQUFxQjtnQkFDckIsU0FBUyxDQUFDLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLFVBQVUsQ0FBQyxLQUFVO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFDLEtBQUssQ0FBQyxDQUFBO29CQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLGdCQUFnQixDQUFDLEVBQU87b0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyxpQkFBaUIsQ0FBQyxFQUFPO29CQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixDQUFDO1lBQ0wsQ0FBQztZQTlERztnQkFBQyxnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzsrREFBQTtZQWZqQztnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7O0tBS1Q7b0JBQ0QsU0FBUyxFQUFDLENBQUMsbUNBQW1DLEVBQUMsdUJBQWMsQ0FBQztvQkFDOUQsVUFBVSxFQUFDLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxDQUFDO2lCQUNoRCxDQUFDOzswQkFBQTtZQUNGLG1DQWtFQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBQcm92aWRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ09SRV9ESVJFQ1RJVkVTLEZPUk1fUFJPVklERVJTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbi8vIFRvIHVuZGVyc3RhbmQgaG93IG5nTW9kZWwgd29ya3MgaGVyZSwgcmVhZDogaHR0cDovL2FsbWVyb3N0ZXluLmNvbS8yMDE2LzA0L2xpbmt1cC1jdXN0b20tY29udHJvbC10by1uZ2NvbnRyb2wtbmdtb2RlbFxyXG5cclxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xyXG5cclxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSBuZXcgUHJvdmlkZXIoXHJcbiAgTkdfVkFMVUVfQUNDRVNTT1IsIHtcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXIpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9KTtcclxuXHJcbmRlY2xhcmUgdmFyICQ7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXRlLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiAjZGF0ZXBpY2tlcklucHV0IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZGF0ZVwiPiBcclxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aFwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidmFsdWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOltDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUixGT1JNX1BST1ZJREVSU10sXHJcbiAgICBkaXJlY3RpdmVzOltDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblx0Ly9UaGUgaW50ZXJuYWwgZGF0YSBtb2RlbFxyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGRpc3BsYXlEYXRlOnN0cmluZyA9XCJcIjtcclxuICAgIEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXJJbnB1dCcpIGRhdGVwaWNrZXJJbnB1dDtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIFxyXG4gXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICBcdHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAkKHRoaXMuZGF0ZXBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICB0b2RheUJ0bjogJ2xpbmtlZCcsXHJcbiAgICAgICAgICAgZGVmYXVsdFZpZXdEYXRlOiAndG9kYXknXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSkub24oJ2NoYW5nZURhdGUnLCBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGR0LmRhdGUudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkdC5mb3JtYXQoMCxcIm1tL2RkL3l5eXlcIikpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gdHJ1bHkgaW4gY2hhbmdlIGRhdGUgbWV0aG9kOlwiKTtcclxuICAgICAgICAgIHNlbGYud3JpdGVWYWx1ZShkdC5mb3JtYXQoMCxcIm1tL2RkL3l5eXlcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICBcclxuICAgIC8vUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzXHJcbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgIFxyXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86YW55KSA9PiB2b2lkID0gbm9vcDtcclxuICBcclxuICAgIC8vZ2V0IGFjY2Vzc29yXHJcbiAgICBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9O1xyXG4gIFxyXG4gICAgLy9zZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXHJcbiAgICBzZXQgdmFsdWUodjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbiBzZXRcIik7XHJcbiAgICAgIGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcclxuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vU2V0IHRvdWNoZWQgb24gYmx1clxyXG4gICAgb25Ub3VjaGVkKGV2KXtcclxuICAgICAgY29uc29sZS5sb2coXCJ0b3VjaGVkXCIsIGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICB0aGlzLndyaXRlVmFsdWUoZXYudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW4gd3JpdGVWYWx1ZTpcIit2YWx1ZSlcclxuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
