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
                    this.viewValue = "";
                    this.notify = new core_1.EventEmitter();
                    //Placeholders for the callbacks
                    this._onTouchedCallback = noop;
                    this._onChangeCallback = noop;
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
                        self.writeValue(dt.format(0, "mm/dd/yyyy"));
                    });
                }
                //get accessor
                get value() {
                    return this.viewValue;
                }
                ;
                //set accessor including call the onchange callback
                set value(v) {
                }
                //Set touched on blur
                onTouched(ev) {
                    this.writeValue(ev.target.value);
                    this._onTouchedCallback();
                }
                //From ControlValueAccessor interface
                writeValue(value) {
                    console.log("I am in writeValue:" + value);
                    this.notify.emit(value);
                }
                //From ControlValueAccessor interface
                registerOnChange(fn) {
                    console.log("register on change");
                    console.log(fn);
                    this._onChangeCallback = fn;
                }
                //From ControlValueAccessor interface
                registerOnTouched(fn) {
                    console.log("register on touched");
                    console.log(fn);
                    this._onTouchedCallback = fn;
                }
                reset() {
                    $(this.datepickerInput.nativeElement).datepicker('update', '');
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], DatePicker.prototype, "addontext", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], DatePicker.prototype, "notify", void 0);
            __decorate([
                core_1.ViewChild('datepickerInput'), 
                __metadata('design:type', Object)
            ], DatePicker.prototype, "datepickerInput", void 0);
            DatePicker = __decorate([
                core_1.Component({
                    selector: 'date-picker',
                    template: `
    <div class="input-group"> 
         <span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
         <input #datepickerInput type="text" class="form-control" placeholder="{{addontext}}">
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFLTSxJQUFJLEVBRUosbUNBQW1DOzs7Ozs7Ozs7O1lBSnpDLHdIQUF3SDtZQUVsSCxJQUFJLEdBQUcsUUFBTyxDQUFDLENBQUM7WUFFaEIsbUNBQW1DLEdBQUcsSUFBSSxlQUFRLENBQ3RELDBCQUFpQixFQUFFO2dCQUNqQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLFVBQVUsQ0FBQztnQkFDekMsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDLENBQUM7WUFnQkw7Z0JBT0k7b0JBTkgseUJBQXlCO29CQUNkLFdBQU0sR0FBVyxFQUFFLENBQUM7b0JBQ3JCLGNBQVMsR0FBVSxFQUFFLENBQUM7b0JBRW5CLFdBQU0sR0FBeUIsSUFBSSxtQkFBWSxFQUFVLENBQUM7b0JBeUJwRSxnQ0FBZ0M7b0JBQ3hCLHVCQUFrQixHQUFlLElBQUksQ0FBQztvQkFFdEMsc0JBQWlCLEdBQW9CLElBQUksQ0FBQztnQkF6QmxELENBQUM7Z0JBRUQsUUFBUTtvQkFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBR0osZUFBZTtvQkFFVCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDO3dCQUM5QyxTQUFTLEVBQUUsSUFBSTt3QkFDZixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsZUFBZSxFQUFFLE9BQU87d0JBQ3hCLFVBQVUsRUFBRSxDQUFDO3FCQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRTt3QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO3dCQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBT0YsY0FBYztnQkFDZCxJQUFJLEtBQUs7b0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZCLENBQUM7O2dCQUVILG1EQUFtRDtnQkFDbkQsSUFBSSxLQUFLLENBQUMsQ0FBTTtnQkFFaEIsQ0FBQztnQkFFRCxxQkFBcUI7Z0JBQ3JCLFNBQVMsQ0FBQyxFQUFFO29CQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyxVQUFVLENBQUMsS0FBVTtvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyxnQkFBZ0IsQ0FBQyxFQUFPO29CQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRWhCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyxpQkFBaUIsQ0FBQyxFQUFPO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRWhCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QsS0FBSztvQkFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDO1lBQ0wsQ0FBQztZQXZFRztnQkFBQyxZQUFLLEVBQUU7O3lEQUFBO1lBQ1I7Z0JBQUMsYUFBTSxFQUFFOztzREFBQTtZQUNUO2dCQUFDLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7OytEQUFBO1lBakJqQztnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7O0tBS1Q7b0JBQ0QsU0FBUyxFQUFDLENBQUMsbUNBQW1DLEVBQUMsdUJBQWMsQ0FBQztvQkFDOUQsVUFBVSxFQUFDLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxDQUFDO2lCQUNoRCxDQUFDOzswQkFBQTtZQUNGLG1DQTJFQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBQcm92aWRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ01vZGVsLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ09SRV9ESVJFQ1RJVkVTLEZPUk1fUFJPVklERVJTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbi8vIFRvIHVuZGVyc3RhbmQgaG93IG5nTW9kZWwgd29ya3MgaGVyZSwgcmVhZDogaHR0cDovL2FsbWVyb3N0ZXluLmNvbS8yMDE2LzA0L2xpbmt1cC1jdXN0b20tY29udHJvbC10by1uZ2NvbnRyb2wtbmdtb2RlbFxyXG5cclxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xyXG5cclxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSBuZXcgUHJvdmlkZXIoXHJcbiAgTkdfVkFMVUVfQUNDRVNTT1IsIHtcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXIpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9KTtcclxuXHJcbmRlY2xhcmUgdmFyICQ7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXRlLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+IFxyXG4gICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRoXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgPGlucHV0ICNkYXRlcGlja2VySW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwie3thZGRvbnRleHR9fVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOltDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUixGT1JNX1BST1ZJREVSU10sXHJcbiAgICBkaXJlY3RpdmVzOltDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblx0Ly9UaGUgaW50ZXJuYWwgZGF0YSBtb2RlbFxyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgdmlld1ZhbHVlOnN0cmluZyA9IFwiXCI7XHJcbiAgICBASW5wdXQoKSBhZGRvbnRleHQ6c3RyaW5nO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgIEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXJJbnB1dCcpIGRhdGVwaWNrZXJJbnB1dDtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLnZpZXdWYWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgXHJcbiBcclxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XHJcblxyXG4gICAgICBcdHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAkKHRoaXMuZGF0ZXBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICB0b2RheUJ0bjogJ2xpbmtlZCcsXHJcbiAgICAgICAgICAgZGVmYXVsdFZpZXdEYXRlOiAndG9kYXknLFxyXG4gICAgICAgICAgIGZvcmNlUGFyc2U6IDBcclxuICAgICAgICB9KS5vbignY2hhbmdlRGF0ZScsIGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIHRydWx5IGluIGNoYW5nZSBkYXRlIG1ldGhvZDpcIik7XHJcbiAgICAgICAgICBzZWxmLndyaXRlVmFsdWUoZHQuZm9ybWF0KDAsXCJtbS9kZC95eXl5XCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcbiAgXHJcbiAgICAvL1BsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSBub29wO1xyXG4gICBcclxuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOmFueSkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgXHJcbiAgICAvL2dldCBhY2Nlc3NvclxyXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XHJcbiAgICAgICByZXR1cm4gdGhpcy52aWV3VmFsdWU7IFxyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgLy9zZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXHJcbiAgICBzZXQgdmFsdWUodjogYW55KSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL1NldCB0b3VjaGVkIG9uIGJsdXJcclxuICAgIG9uVG91Y2hlZChldil7XHJcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShldi50YXJnZXQudmFsdWUpO1xyXG4gICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBpbiB3cml0ZVZhbHVlOlwiK3ZhbHVlKVxyXG4gICAgICB0aGlzLm5vdGlmeS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyIG9uIGNoYW5nZVwiKTtcclxuICAgICAgY29uc29sZS5sb2coZm4pO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyIG9uIHRvdWNoZWRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZuKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgICQodGhpcy5kYXRlcGlja2VySW5wdXQubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcigndXBkYXRlJywgJycpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
