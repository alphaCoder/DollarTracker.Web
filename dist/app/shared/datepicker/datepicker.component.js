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
    var core_1, common_1, core_2;
    var noop, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, DatePicker;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
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
                    this.notify = new core_2.EventEmitter();
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
                core_2.Output(), 
                __metadata('design:type', core_2.EventEmitter)
            ], DatePicker.prototype, "notify", void 0);
            __decorate([
                core_1.ViewChild('datepickerInput'), 
                __metadata('design:type', Object)
            ], DatePicker.prototype, "datepickerInput", void 0);
            DatePicker = __decorate([
                core_1.Component({
                    selector: 'date-picker',
                    template: `
    <div class="input-group date"> 
         <span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
         <input #datepickerInput type="text" class="form-control" readonly>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFLTSxJQUFJLEVBRUosbUNBQW1DOzs7Ozs7Ozs7OztZQUp6Qyx3SEFBd0g7WUFFbEgsSUFBSSxHQUFHLFFBQU8sQ0FBQyxDQUFDO1lBRWhCLG1DQUFtQyxHQUFHLElBQUksZUFBUSxDQUN0RCwwQkFBaUIsRUFBRTtnQkFDakIsV0FBVyxFQUFFLGlCQUFVLENBQUMsTUFBTSxVQUFVLENBQUM7Z0JBQ3pDLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQyxDQUFDO1lBZ0JMO2dCQU1JO29CQUxILHlCQUF5QjtvQkFDZCxXQUFNLEdBQVcsRUFBRSxDQUFDO29CQUNyQixjQUFTLEdBQVUsRUFBRSxDQUFDO29CQUNuQixXQUFNLEdBQXlCLElBQUksbUJBQVksRUFBVSxDQUFDO29CQXlCcEUsZ0NBQWdDO29CQUN4Qix1QkFBa0IsR0FBZSxJQUFJLENBQUM7b0JBRXRDLHNCQUFpQixHQUFvQixJQUFJLENBQUM7Z0JBekJsRCxDQUFDO2dCQUVELFFBQVE7b0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUdKLGVBQWU7b0JBRVQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQzt3QkFDOUMsU0FBUyxFQUFFLElBQUk7d0JBQ2YsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLGVBQWUsRUFBRSxPQUFPO3dCQUN4QixVQUFVLEVBQUUsQ0FBQztxQkFDZixDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUU7d0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQU9GLGNBQWM7Z0JBQ2QsSUFBSSxLQUFLO29CQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUN2QixDQUFDOztnQkFFSCxtREFBbUQ7Z0JBQ25ELElBQUksS0FBSyxDQUFDLENBQU07Z0JBRWhCLENBQUM7Z0JBRUQscUJBQXFCO2dCQUNyQixTQUFTLENBQUMsRUFBRTtvQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUM1QixDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsVUFBVSxDQUFDLEtBQVU7b0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsZ0JBQWdCLENBQUMsRUFBTztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUVoQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsaUJBQWlCLENBQUMsRUFBTztvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUVoQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNELEtBQUs7b0JBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztZQUNMLENBQUM7WUF0RUc7Z0JBQUMsYUFBTSxFQUFFOztzREFBQTtZQUNUO2dCQUFDLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7OytEQUFBO1lBaEJqQztnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7O0tBS1Q7b0JBQ0QsU0FBUyxFQUFDLENBQUMsbUNBQW1DLEVBQUMsdUJBQWMsQ0FBQztvQkFDOUQsVUFBVSxFQUFDLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxDQUFDO2lCQUNoRCxDQUFDOzswQkFBQTtZQUNGLG1DQTBFQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBQcm92aWRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ01vZGVsLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ09SRV9ESVJFQ1RJVkVTLEZPUk1fUFJPVklERVJTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIFRvIHVuZGVyc3RhbmQgaG93IG5nTW9kZWwgd29ya3MgaGVyZSwgcmVhZDogaHR0cDovL2FsbWVyb3N0ZXluLmNvbS8yMDE2LzA0L2xpbmt1cC1jdXN0b20tY29udHJvbC10by1uZ2NvbnRyb2wtbmdtb2RlbFxyXG5cclxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xyXG5cclxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSBuZXcgUHJvdmlkZXIoXHJcbiAgTkdfVkFMVUVfQUNDRVNTT1IsIHtcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERhdGVQaWNrZXIpLFxyXG4gICAgbXVsdGk6IHRydWVcclxuICB9KTtcclxuXHJcbmRlY2xhcmUgdmFyICQ7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkYXRlLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRhdGVcIj4gXHJcbiAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdGhcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICA8aW5wdXQgI2RhdGVwaWNrZXJJbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcmVhZG9ubHk+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6W0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLEZPUk1fUFJPVklERVJTXSxcclxuICAgIGRpcmVjdGl2ZXM6W0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHQvL1RoZSBpbnRlcm5hbCBkYXRhIG1vZGVsXHJcbiAgICBwcml2YXRlIF92YWx1ZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyB2aWV3VmFsdWU6c3RyaW5nID0gXCJcIjtcclxuICAgIEBPdXRwdXQoKSBub3RpZnk6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgICBAVmlld0NoaWxkKCdkYXRlcGlja2VySW5wdXQnKSBkYXRlcGlja2VySW5wdXQ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgICAgdGhpcy52aWV3VmFsdWUgPSAnJztcclxuICAgIH1cclxuICAgIFxyXG4gXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cclxuICAgICAgXHR2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgJCh0aGlzLmRhdGVwaWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgdG9kYXlCdG46ICdsaW5rZWQnLFxyXG4gICAgICAgICAgIGRlZmF1bHRWaWV3RGF0ZTogJ3RvZGF5JyxcclxuICAgICAgICAgICBmb3JjZVBhcnNlOiAwXHJcbiAgICAgICAgfSkub24oJ2NoYW5nZURhdGUnLCBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSB0cnVseSBpbiBjaGFuZ2UgZGF0ZSBtZXRob2Q6XCIpO1xyXG4gICAgICAgICAgc2VsZi53cml0ZVZhbHVlKGR0LmZvcm1hdCgwLFwibW0vZGQveXl5eVwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG4gIFxyXG4gICAgLy9QbGFjZWhvbGRlcnMgZm9yIHRoZSBjYWxsYmFja3NcclxuICAgIHByaXZhdGUgX29uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcclxuICAgXHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoXzphbnkpID0+IHZvaWQgPSBub29wO1xyXG4gIFxyXG4gICAgLy9nZXQgYWNjZXNzb3JcclxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMudmlld1ZhbHVlOyBcclxuICAgICAgfTtcclxuICBcclxuICAgIC8vc2V0IGFjY2Vzc29yIGluY2x1ZGluZyBjYWxsIHRoZSBvbmNoYW5nZSBjYWxsYmFja1xyXG4gICAgc2V0IHZhbHVlKHY6IGFueSkge1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9TZXQgdG91Y2hlZCBvbiBibHVyXHJcbiAgICBvblRvdWNoZWQoZXYpe1xyXG4gICAgICB0aGlzLndyaXRlVmFsdWUoZXYudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkkgYW0gaW4gd3JpdGVWYWx1ZTpcIit2YWx1ZSlcclxuICAgICAgdGhpcy5ub3RpZnkuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlciBvbiBjaGFuZ2VcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZuKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuICBcclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlciBvbiB0b3VjaGVkXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhmbik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICAkKHRoaXMuZGF0ZXBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ3VwZGF0ZScsICcnKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
