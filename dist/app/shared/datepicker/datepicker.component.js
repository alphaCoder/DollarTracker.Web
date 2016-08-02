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
                updateDate(value) {
                    $(this.datepickerInput.nativeElement).datepicker('update', new Date(value));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFLTSxJQUFJLEVBRUosbUNBQW1DOzs7Ozs7Ozs7O1lBSnpDLHdIQUF3SDtZQUVsSCxJQUFJLEdBQUcsUUFBTyxDQUFDLENBQUM7WUFFaEIsbUNBQW1DLEdBQUcsSUFBSSxlQUFRLENBQ3RELDBCQUFpQixFQUFFO2dCQUNqQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLFVBQVUsQ0FBQztnQkFDekMsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDLENBQUM7WUFnQkw7Z0JBT0k7b0JBTkgseUJBQXlCO29CQUNkLFdBQU0sR0FBVyxFQUFFLENBQUM7b0JBQ3JCLGNBQVMsR0FBVSxFQUFFLENBQUM7b0JBRW5CLFdBQU0sR0FBeUIsSUFBSSxtQkFBWSxFQUFVLENBQUM7b0JBeUJwRSxnQ0FBZ0M7b0JBQ3hCLHVCQUFrQixHQUFlLElBQUksQ0FBQztvQkFFdEMsc0JBQWlCLEdBQW9CLElBQUksQ0FBQztnQkF6QmxELENBQUM7Z0JBRUQsUUFBUTtvQkFDTixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBR0osZUFBZTtvQkFFVCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDO3dCQUM5QyxTQUFTLEVBQUUsSUFBSTt3QkFDZixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsZUFBZSxFQUFFLE9BQU87d0JBQ3hCLFVBQVUsRUFBRSxDQUFDO3FCQUNmLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRTt3QkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO3dCQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBT0YsY0FBYztnQkFDZCxJQUFJLEtBQUs7b0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZCLENBQUM7O2dCQUVILG1EQUFtRDtnQkFDbkQsSUFBSSxLQUFLLENBQUMsQ0FBTTtnQkFFaEIsQ0FBQztnQkFFRCxxQkFBcUI7Z0JBQ3JCLFNBQVMsQ0FBQyxFQUFFO29CQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyxVQUFVLENBQUMsS0FBVTtvQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLEtBQVk7b0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDOUUsQ0FBQztnQkFDRCxxQ0FBcUM7Z0JBQ3JDLGdCQUFnQixDQUFDLEVBQU87b0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLGlCQUFpQixDQUFDLEVBQU87b0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFaEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRCxLQUFLO29CQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ25FLENBQUM7WUFDTCxDQUFDO1lBekVHO2dCQUFDLFlBQUssRUFBRTs7eURBQUE7WUFDUjtnQkFBQyxhQUFNLEVBQUU7O3NEQUFBO1lBQ1Q7Z0JBQUMsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQzs7K0RBQUE7WUFqQmpDO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7S0FLVDtvQkFDRCxTQUFTLEVBQUMsQ0FBQyxtQ0FBbUMsRUFBQyx1QkFBYyxDQUFDO29CQUM5RCxVQUFVLEVBQUMsQ0FBQyx3QkFBZSxFQUFFLHdCQUFlLENBQUM7aUJBQ2hELENBQUM7OzBCQUFBO1lBQ0YsbUNBNkVDLENBQUEiLCJmaWxlIjoic2hhcmVkL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge091dHB1dCwgRXZlbnRFbWl0dGVyLCBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIFByb3ZpZGVyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5nTW9kZWwsIE5HX1ZBTFVFX0FDQ0VTU09SLCBDT1JFX0RJUkVDVElWRVMsRk9STV9QUk9WSURFUlMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuLy8gVG8gdW5kZXJzdGFuZCBob3cgbmdNb2RlbCB3b3JrcyBoZXJlLCByZWFkOiBodHRwOi8vYWxtZXJvc3RleW4uY29tLzIwMTYvMDQvbGlua3VwLWN1c3RvbS1jb250cm9sLXRvLW5nY29udHJvbC1uZ21vZGVsXHJcblxyXG5jb25zdCBub29wID0gKCkgPT4ge307XHJcblxyXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IG5ldyBQcm92aWRlcihcclxuICBOR19WQUxVRV9BQ0NFU1NPUiwge1xyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlciksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuZGVjbGFyZSB2YXIgJDtcclxuZGVjbGFyZSB2YXIgbW9tZW50O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2RhdGUtcGlja2VyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj4gXHJcbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGhcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICA8aW5wdXQgI2RhdGVwaWNrZXJJbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJ7e2FkZG9udGV4dH19XCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6W0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLEZPUk1fUFJPVklERVJTXSxcclxuICAgIGRpcmVjdGl2ZXM6W0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHQvL1RoZSBpbnRlcm5hbCBkYXRhIG1vZGVsXHJcbiAgICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyB2aWV3VmFsdWU6c3RyaW5nID0gXCJcIjtcclxuICAgIEBJbnB1dCgpIGFkZG9udGV4dDpzdHJpbmc7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gICAgQFZpZXdDaGlsZCgnZGF0ZXBpY2tlcklucHV0JykgZGF0ZXBpY2tlcklucHV0O1xyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMudmlld1ZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgICBcclxuIFxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHJcbiAgICAgIFx0dmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICQodGhpcy5kYXRlcGlja2VySW5wdXQubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgIHRvZGF5QnRuOiAnbGlua2VkJyxcclxuICAgICAgICAgICBkZWZhdWx0Vmlld0RhdGU6ICd0b2RheScsXHJcbiAgICAgICAgICAgZm9yY2VQYXJzZTogMFxyXG4gICAgICAgIH0pLm9uKCdjaGFuZ2VEYXRlJywgZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgYW0gdHJ1bHkgaW4gY2hhbmdlIGRhdGUgbWV0aG9kOlwiKTtcclxuICAgICAgICAgIHNlbGYud3JpdGVWYWx1ZShkdC5mb3JtYXQoMCxcIm1tL2RkL3l5eXlcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICBcclxuICAgIC8vUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzXHJcbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XHJcbiAgIFxyXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86YW55KSA9PiB2b2lkID0gbm9vcDtcclxuICBcclxuICAgIC8vZ2V0IGFjY2Vzc29yXHJcbiAgICBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgICAgIHJldHVybiB0aGlzLnZpZXdWYWx1ZTsgXHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAvL3NldCBhY2Nlc3NvciBpbmNsdWRpbmcgY2FsbCB0aGUgb25jaGFuZ2UgY2FsbGJhY2tcclxuICAgIHNldCB2YWx1ZSh2OiBhbnkpIHtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vU2V0IHRvdWNoZWQgb24gYmx1clxyXG4gICAgb25Ub3VjaGVkKGV2KXtcclxuICAgICAgdGhpcy53cml0ZVZhbHVlKGV2LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJIGFtIGluIHdyaXRlVmFsdWU6XCIrdmFsdWUpXHJcbiAgICAgIHRoaXMubm90aWZ5LmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlRGF0ZSh2YWx1ZTpzdHJpbmcpIHtcclxuICAgICAgJCh0aGlzLmRhdGVwaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCd1cGRhdGUnLCBuZXcgRGF0ZSh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIgb24gY2hhbmdlXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhmbik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIgb24gdG91Y2hlZFwiKTtcclxuICAgICAgY29uc29sZS5sb2coZm4pO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuICAgIHJlc2V0KCl7XHJcbiAgICAgICAgJCh0aGlzLmRhdGVwaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCd1cGRhdGUnLCAnJyk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
