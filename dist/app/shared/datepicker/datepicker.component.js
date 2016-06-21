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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFLTSxJQUFJLEVBRUosbUNBQW1DOzs7Ozs7Ozs7O1lBSnpDLHdIQUF3SDtZQUVsSCxJQUFJLEdBQUcsUUFBTyxDQUFDLENBQUM7WUFFaEIsbUNBQW1DLEdBQUcsSUFBSSxlQUFRLENBQ3RELDBCQUFpQixFQUFFO2dCQUNqQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLFVBQVUsQ0FBQztnQkFDekMsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDLENBQUM7WUFnQkw7Z0JBS0k7b0JBSkgseUJBQXlCO29CQUNkLFdBQU0sR0FBVyxFQUFFLENBQUM7b0JBQ3BCLGdCQUFXLEdBQVMsRUFBRSxDQUFDO29CQXVCL0IsZ0NBQWdDO29CQUN4Qix1QkFBa0IsR0FBZSxJQUFJLENBQUM7b0JBRXRDLHNCQUFpQixHQUFvQixJQUFJLENBQUM7Z0JBeEJsQyxDQUFDO2dCQUVqQixRQUFRO2dCQUNSLENBQUM7Z0JBR0osZUFBZTtvQkFDVCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDO3dCQUM5QyxTQUFTLEVBQUUsSUFBSTt3QkFDZixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsZUFBZSxFQUFFLE9BQU87cUJBRTFCLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRTt3QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7d0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTt3QkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO3dCQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBT0YsY0FBYztnQkFDZCxJQUFJLEtBQUssS0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O2dCQUV4QyxtREFBbUQ7Z0JBQ25ELElBQUksS0FBSyxDQUFDLENBQU07b0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixDQUFDO2dCQUNILENBQUM7Z0JBRUQscUJBQXFCO2dCQUNyQixTQUFTLENBQUMsRUFBRTtvQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsVUFBVSxDQUFDLEtBQVU7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsZ0JBQWdCLENBQUMsRUFBTztvQkFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLGlCQUFpQixDQUFDLEVBQU87b0JBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7Z0JBQy9CLENBQUM7WUFDTCxDQUFDO1lBN0RHO2dCQUFDLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7OytEQUFBO1lBZmpDO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7S0FLVDtvQkFDRCxTQUFTLEVBQUMsQ0FBQyxtQ0FBbUMsRUFBQyx1QkFBYyxDQUFDO29CQUM5RCxVQUFVLEVBQUMsQ0FBQyx3QkFBZSxFQUFFLHdCQUFlLENBQUM7aUJBQ2hELENBQUM7OzBCQUFBO1lBQ0YsbUNBaUVDLENBQUEiLCJmaWxlIjoic2hhcmVkL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIFByb3ZpZGVyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBDT1JFX0RJUkVDVElWRVMsRk9STV9QUk9WSURFUlMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuLy8gVG8gdW5kZXJzdGFuZCBob3cgbmdNb2RlbCB3b3JrcyBoZXJlLCByZWFkOiBodHRwOi8vYWxtZXJvc3RleW4uY29tLzIwMTYvMDQvbGlua3VwLWN1c3RvbS1jb250cm9sLXRvLW5nY29udHJvbC1uZ21vZGVsXHJcblxyXG5jb25zdCBub29wID0gKCkgPT4ge307XHJcblxyXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IG5ldyBQcm92aWRlcihcclxuICBOR19WQUxVRV9BQ0NFU1NPUiwge1xyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlciksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuZGVjbGFyZSB2YXIgJDtcclxuZGVjbGFyZSB2YXIgbW9tZW50O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RhdGUtcGlja2VyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICNkYXRlcGlja2VySW5wdXQgY2xhc3M9XCJpbnB1dC1ncm91cCBkYXRlXCI+IFxyXG4gICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRoXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6W0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLEZPUk1fUFJPVklERVJTXSxcclxuICAgIGRpcmVjdGl2ZXM6W0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHQvL1RoZSBpbnRlcm5hbCBkYXRhIG1vZGVsXHJcbiAgICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgZGlzcGxheURhdGU6c3RyaW5nID1cIlwiO1xyXG4gICAgQFZpZXdDaGlsZCgnZGF0ZXBpY2tlcklucHV0JykgZGF0ZXBpY2tlcklucHV0O1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuICAgIFxyXG4gXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICBcdHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAkKHRoaXMuZGF0ZXBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICB0b2RheUJ0bjogJ2xpbmtlZCcsXHJcbiAgICAgICAgICAgZGVmYXVsdFZpZXdEYXRlOiAndG9kYXknXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSkub24oJ2NoYW5nZURhdGUnLCBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGR0LmRhdGUudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkdC5mb3JtYXQoMCxcIm1tL2RkL3l5eXlcIikpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gdHJ1bHkgaW4gY2hhbmdlIGRhdGUgbWV0aG9kOlwiKTtcclxuICAgICAgICAgIHNlbGYud3JpdGVWYWx1ZShkdC5mb3JtYXQoMCxcIm1tL2RkL3l5eXlcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICBcclxuICAgIC8vUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzXHJcbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgIFxyXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86YW55KSA9PiB2b2lkID0gbm9vcDtcclxuICBcclxuICAgIC8vZ2V0IGFjY2Vzc29yXHJcbiAgICBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9O1xyXG4gIFxyXG4gICAgLy9zZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXHJcbiAgICBzZXQgdmFsdWUodjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbiBzZXRcIik7XHJcbiAgICAgIGlmICh2ICE9PSB0aGlzLl92YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcclxuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vU2V0IHRvdWNoZWQgb24gYmx1clxyXG4gICAgb25Ub3VjaGVkKGV2KXtcclxuICAgICAgY29uc29sZS5sb2coXCJ0b3VjaGVkXCIsIGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICB0aGlzLndyaXRlVmFsdWUoZXYudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW4gd3JpdGVWYWx1ZTpcIit2YWx1ZSlcclxuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
