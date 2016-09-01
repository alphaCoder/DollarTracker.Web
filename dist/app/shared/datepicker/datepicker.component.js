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
                    this._value = '';
                    this.notify = new core_1.EventEmitter();
                    //Placeholders for the callbacks
                    this._onTouchedCallback = noop;
                    this._onChangeCallback = noop;
                }
                ngAfterViewInit() {
                    var self = this;
                    $(this.datepickerInput.nativeElement).datepicker({
                        autoclose: true,
                        todayBtn: 'linked',
                        forceParse: 0
                    }).on('changeDate', function (dt) {
                        self.writeValue(dt.format(0, "mm/dd/yyyy"));
                    });
                }
                //get accessor
                get value() {
                    return this._value;
                }
                ;
                //set accessor including call the onchange callback
                set value(v) {
                    this.setValue(v);
                }
                //Set touched on blur
                onTouched(ev) {
                    this._onTouchedCallback(null);
                }
                setValue(v) {
                    if (v && v != this._value) {
                        this._value = v;
                        this.notify.emit(v);
                        this._onChangeCallback(v);
                    }
                }
                //From ControlValueAccessor interface
                writeValue(value) {
                    this.setValue(value);
                }
                updateDate(value) {
                    $(this.datepickerInput.nativeElement).datepicker('update', new Date(value));
                }
                //From ControlValueAccessor interface
                registerOnChange(fn) {
                    this._onChangeCallback = fn;
                }
                //From ControlValueAccessor interface
                registerOnTouched(fn) {
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
         <input #datepickerInput type="text" class="form-control" [value]="_value" placeholder="{{addontext}}">
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFLTSxJQUFJLEVBRUosbUNBQW1DOzs7Ozs7Ozs7O1lBSnpDLHdIQUF3SDtZQUVsSCxJQUFJLEdBQUcsUUFBTyxDQUFDLENBQUM7WUFFaEIsbUNBQW1DLEdBQUcsSUFBSSxlQUFRLENBQ3RELDBCQUFpQixFQUFFO2dCQUNqQixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxNQUFNLFVBQVUsQ0FBQztnQkFDekMsS0FBSyxFQUFFLElBQUk7YUFDWixDQUFDLENBQUM7WUFnQkw7Z0JBT0k7b0JBTkgseUJBQXlCO29CQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7b0JBR1YsV0FBTSxHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztvQkFlcEUsZ0NBQWdDO29CQUN4Qix1QkFBa0IsR0FBb0IsSUFBSSxDQUFDO29CQUUzQyxzQkFBaUIsR0FBb0IsSUFBSSxDQUFDO2dCQWhCbEMsQ0FBQztnQkFFbEIsZUFBZTtvQkFDWixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDO3dCQUM5QyxTQUFTLEVBQUUsSUFBSTt3QkFDZixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsVUFBVSxFQUFFLENBQUM7cUJBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFO3dCQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBT0YsY0FBYztnQkFDZCxJQUFJLEtBQUs7b0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3BCLENBQUM7O2dCQUVILG1EQUFtRDtnQkFDbkQsSUFBSSxLQUFLLENBQUMsQ0FBTTtvQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixDQUFDO2dCQUVELHFCQUFxQjtnQkFDckIsU0FBUyxDQUFDLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVPLFFBQVEsQ0FBQyxDQUFNO29CQUNyQixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELHFDQUFxQztnQkFDckMsVUFBVSxDQUFDLEtBQVU7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0QsVUFBVSxDQUFDLEtBQVk7b0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDOUUsQ0FBQztnQkFDRCxxQ0FBcUM7Z0JBQ3JDLGdCQUFnQixDQUFDLEVBQU87b0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyxpQkFBaUIsQ0FBQyxFQUFPO29CQUN2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUNELEtBQUs7b0JBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztZQUNMLENBQUM7WUE5REc7Z0JBQUMsWUFBSyxFQUFFOzt5REFBQTtZQUNSO2dCQUFDLGFBQU0sRUFBRTs7c0RBQUE7WUFDVDtnQkFBQyxnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzsrREFBQTtZQWpCakM7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFOzs7OztLQUtUO29CQUNELFNBQVMsRUFBQyxDQUFDLG1DQUFtQyxFQUFDLHVCQUFjLENBQUM7b0JBQzlELFVBQVUsRUFBQyxDQUFDLHdCQUFlLEVBQUUsd0JBQWUsQ0FBQztpQkFDaEQsQ0FBQzs7MEJBQUE7WUFDRixtQ0FrRUMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCwgVmlld0NoaWxkLCBJbnB1dCwgUHJvdmlkZXIsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdNb2RlbCwgTkdfVkFMVUVfQUNDRVNTT1IsIENPUkVfRElSRUNUSVZFUyxGT1JNX1BST1ZJREVSUywgRk9STV9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG4vLyBUbyB1bmRlcnN0YW5kIGhvdyBuZ01vZGVsIHdvcmtzIGhlcmUsIHJlYWQ6IGh0dHA6Ly9hbG1lcm9zdGV5bi5jb20vMjAxNi8wNC9saW5rdXAtY3VzdG9tLWNvbnRyb2wtdG8tbmdjb250cm9sLW5nbW9kZWxcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcclxuXHJcbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SID0gbmV3IFByb3ZpZGVyKFxyXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLCB7XHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyKSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfSk7XHJcblxyXG5kZWNsYXJlIHZhciAkO1xyXG5kZWNsYXJlIHZhciBtb21lbnQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZGF0ZS1waWNrZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPiBcclxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aFwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgIDxpbnB1dCAjZGF0ZXBpY2tlcklucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbdmFsdWVdPVwiX3ZhbHVlXCIgcGxhY2Vob2xkZXI9XCJ7e2FkZG9udGV4dH19XCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBwcm92aWRlcnM6W0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLEZPUk1fUFJPVklERVJTXSxcclxuICAgIGRpcmVjdGl2ZXM6W0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHQvL1RoZSBpbnRlcm5hbCBkYXRhIG1vZGVsXHJcbiAgICBwcml2YXRlIF92YWx1ZSA9ICcnO1xyXG4gICAgXHJcbiAgICBASW5wdXQoKSBhZGRvbnRleHQ6c3RyaW5nO1xyXG4gICAgQE91dHB1dCgpIG5vdGlmeTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgIEBWaWV3Q2hpbGQoJ2RhdGVwaWNrZXJJbnB1dCcpIGRhdGVwaWNrZXJJbnB1dDtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIFx0bmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgIFx0dmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICQodGhpcy5kYXRlcGlja2VySW5wdXQubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgIHRvZGF5QnRuOiAnbGlua2VkJyxcclxuICAgICAgICAgICBmb3JjZVBhcnNlOiAwXHJcbiAgICAgICAgfSkub24oJ2NoYW5nZURhdGUnLCBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAgIHNlbGYud3JpdGVWYWx1ZShkdC5mb3JtYXQoMCxcIm1tL2RkL3l5eXlcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuICBcclxuICAgIC8vUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzXHJcbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKF86YW55KSA9PiB2b2lkID0gbm9vcDtcclxuICAgXHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoXzphbnkpID0+IHZvaWQgPSBub29wO1xyXG4gIFxyXG4gICAgLy9nZXQgYWNjZXNzb3JcclxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlOyBcclxuICAgICAgfTtcclxuICBcclxuICAgIC8vc2V0IGFjY2Vzc29yIGluY2x1ZGluZyBjYWxsIHRoZSBvbmNoYW5nZSBjYWxsYmFja1xyXG4gICAgc2V0IHZhbHVlKHY6IGFueSkge1xyXG4gICAgICB0aGlzLnNldFZhbHVlKHYpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL1NldCB0b3VjaGVkIG9uIGJsdXJcclxuICAgIG9uVG91Y2hlZChldil7XHJcbiAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKG51bGwpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJpdmF0ZSBzZXRWYWx1ZSh2OiBhbnkpIHtcclxuICAgICAgaWYodiAmJiB2IT0gdGhpcy5fdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHY7XHJcbiAgICAgICAgdGhpcy5ub3RpZnkuZW1pdCh2KTtcclxuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKHYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVEYXRlKHZhbHVlOnN0cmluZykge1xyXG4gICAgICAkKHRoaXMuZGF0ZXBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ3VwZGF0ZScsIG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICAkKHRoaXMuZGF0ZXBpY2tlcklucHV0Lm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ3VwZGF0ZScsICcnKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
