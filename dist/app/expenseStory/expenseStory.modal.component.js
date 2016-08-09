System.register(['@angular/core', 'ng2-bs3-modal/ng2-bs3-modal', '../shared/datepicker/datepicker.component', './expenseStory.model', './expenseStory.service', '../shared/alert/dtalert.component'], function(exports_1, context_1) {
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
    var core_1, ng2_bs3_modal_1, datepicker_component_1, expenseStory_model_1, expenseStory_service_1, dtalert_component_1;
    var ExpenseStoryModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            },
            function (datepicker_component_1_1) {
                datepicker_component_1 = datepicker_component_1_1;
            },
            function (expenseStory_model_1_1) {
                expenseStory_model_1 = expenseStory_model_1_1;
            },
            function (expenseStory_service_1_1) {
                expenseStory_service_1 = expenseStory_service_1_1;
            },
            function (dtalert_component_1_1) {
                dtalert_component_1 = dtalert_component_1_1;
            }],
        execute: function() {
            let ExpenseStoryModalComponent = class ExpenseStoryModalComponent {
                constructor(_expenseStoryService) {
                    this._expenseStoryService = _expenseStoryService;
                    this.notify = new core_1.EventEmitter();
                    this.expenseStory = new expenseStory_model_1.ExpenseStory();
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
                }
                ngOnInit() { }
                closed() {
                    this.modal.close();
                }
                dismissed() {
                    this.expenseStory = new expenseStory_model_1.ExpenseStory();
                    this.datepickerStartDtInput.reset(); //TODO: replace this temporary solution
                    this.datepickerEndDtInput.reset();
                    this.modal.dismiss();
                }
                open() {
                    this.modal.open('sm');
                }
                cancel() {
                    this.modal.dismiss();
                }
                onNotifyStartDt(startDt) {
                    this.expenseStory.startDt = startDt;
                }
                onNotifyEndDt(endDt) {
                    this.expenseStory.endDt = endDt;
                }
                submit() {
                    if (!this.validate()) {
                        return;
                    }
                    if (this.expenseStory) {
                        this._expenseStoryService
                            .addExpenseStory(this.expenseStory)
                            .subscribe(response => {
                            this.dismissed();
                        });
                    }
                }
                validate() {
                    let isValid = false;
                    if (this.expenseStory.title == null || this.expenseStory.title.trim().length <= 0 || this.expenseStory.title.trim().length > 100) {
                        this.dtAlert.failure("Please a valid title for your expense report");
                    }
                    else if (this.expenseStory.startDt == null || this.expenseStory.startDt.trim().length <= 0) {
                        this.dtAlert.failure("Please enter a valid start date");
                    }
                    else if (this.expenseStory.endDt == null || this.expenseStory.endDt.trim().length <= 0) {
                        this.dtAlert.failure("Please enter a valid end date");
                    }
                    else {
                        isValid = true;
                    }
                    return isValid;
                }
            };
            __decorate([
                core_1.Output(), 
                __metadata('design:type', core_1.EventEmitter)
            ], ExpenseStoryModalComponent.prototype, "notify", void 0);
            __decorate([
                core_1.ViewChild('esmodal'), 
                __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
            ], ExpenseStoryModalComponent.prototype, "modal", void 0);
            __decorate([
                core_1.ViewChild('datepickerStartDtInput'), 
                __metadata('design:type', Object)
            ], ExpenseStoryModalComponent.prototype, "datepickerStartDtInput", void 0);
            __decorate([
                core_1.ViewChild('datepickerEndDtInput'), 
                __metadata('design:type', Object)
            ], ExpenseStoryModalComponent.prototype, "datepickerEndDtInput", void 0);
            ExpenseStoryModalComponent = __decorate([
                core_1.Component({
                    selector: 'expense-story-modal',
                    templateUrl: 'app/expenseStory/expenseStory.modal.component.html',
                    directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, datepicker_component_1.DatePicker, dtalert_component_1.DtAlertComponent]
                }), 
                __metadata('design:paramtypes', [expenseStory_service_1.ExpenseStoryService])
            ], ExpenseStoryModalComponent);
            exports_1("ExpenseStoryModalComponent", ExpenseStoryModalComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnkubW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBSUksWUFBb0Isb0JBQXdDO29CQUF4Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQW9CO29CQUhsRCxXQUFNLEdBQXNDLElBQUksbUJBQVksRUFBdUIsQ0FBQztvQkFJMUYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGlDQUFZLEVBQUUsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG9DQUFnQixFQUFFLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsUUFBUSxLQUFLLENBQUM7Z0JBS2IsTUFBTTtvQkFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELFNBQVM7b0JBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGlDQUFZLEVBQUUsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsdUNBQXVDO29CQUM1RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsSUFBSTtvQkFDQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxNQUFNO29CQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsZUFBZSxDQUFDLE9BQWM7b0JBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDMUMsQ0FBQztnQkFFQSxhQUFhLENBQUMsS0FBWTtvQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN0QyxDQUFDO2dCQUNELE1BQU07b0JBQ0YsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUFDLE1BQU0sQ0FBQztvQkFBQyxDQUFDO29CQUVoQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQzt3QkFDbEIsSUFBSSxDQUFDLG9CQUFvQjs2QkFDeEIsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7NkJBQ2xDLFNBQVMsQ0FBQyxRQUFROzRCQUNmLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDckIsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQUNPLFFBQVE7b0JBQ1osSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNwQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUUsR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFDM0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsOENBQThDLENBQUMsQ0FBQztvQkFDekUsQ0FBQztvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUN0RixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO29CQUM1RCxDQUFDO29CQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ25GLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7b0JBQzFELENBQUM7b0JBQ0QsSUFBSSxDQUFDLENBQUM7d0JBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFBQSxDQUFDO29CQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNuQixDQUFDO1lBQ0gsQ0FBQztZQS9ERztnQkFBQyxhQUFNLEVBQUU7O3NFQUFBO1lBU1Q7Z0JBQUMsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7O3FFQUFBO1lBRXJCO2dCQUFDLGdCQUFTLENBQUMsd0JBQXdCLENBQUM7O3NGQUFBO1lBQ3BDO2dCQUFDLGdCQUFTLENBQUMsc0JBQXNCLENBQUM7O29GQUFBO1lBbEJ0QztnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFdBQVcsRUFBRSxvREFBb0Q7b0JBQ2pFLFVBQVUsRUFBQyxDQUFDLGdDQUFnQixFQUFDLGlDQUFVLEVBQUUsb0NBQWdCLENBQUM7aUJBQzdELENBQUM7OzBDQUFBO1lBQ0YsbUVBZ0VDLENBQUEiLCJmaWxlIjoiZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeS5tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNT0RBTF9ESVJFQ1RJVkVTLCBNb2RhbENvbXBvbmVudCB9IGZyb20gJ25nMi1iczMtbW9kYWwvbmcyLWJzMy1tb2RhbCc7XHJcbmltcG9ydCB7RGF0ZVBpY2tlcn0gZnJvbSAnLi4vc2hhcmVkL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeSxFeHBlbnNlU3RvcnlTdW1tYXJ5fSBmcm9tICcuL2V4cGVuc2VTdG9yeS5tb2RlbCc7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U2VydmljZX0gZnJvbSAnLi9leHBlbnNlU3Rvcnkuc2VydmljZSc7XHJcbmltcG9ydCB7RHRBbGVydENvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2FsZXJ0L2R0YWxlcnQuY29tcG9uZW50JztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2V4cGVuc2Utc3RvcnktbW9kYWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeS5tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltNT0RBTF9ESVJFQ1RJVkVTLERhdGVQaWNrZXIsIER0QWxlcnRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlU3RvcnlNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAT3V0cHV0KCkgbm90aWZ5OiBFdmVudEVtaXR0ZXI8RXhwZW5zZVN0b3J5U3VtbWFyeT4gPSBuZXcgRXZlbnRFbWl0dGVyPEV4cGVuc2VTdG9yeVN1bW1hcnk+KCk7XHJcbiAgICBwcml2YXRlIGV4cGVuc2VTdG9yeTpFeHBlbnNlU3Rvcnk7XHJcbiAgICBkdEFsZXJ0OkR0QWxlcnRDb21wb25lbnQ7IFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZXhwZW5zZVN0b3J5U2VydmljZTpFeHBlbnNlU3RvcnlTZXJ2aWNlKSB7IFxyXG4gICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5ID0gbmV3IEV4cGVuc2VTdG9yeSgpO1xyXG4gICAgICAgIHRoaXMuZHRBbGVydCA9IG5ldyBEdEFsZXJ0Q29tcG9uZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuICAgIEBWaWV3Q2hpbGQoJ2VzbW9kYWwnKVxyXG4gICAgbW9kYWw6IE1vZGFsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZCgnZGF0ZXBpY2tlclN0YXJ0RHRJbnB1dCcpIGRhdGVwaWNrZXJTdGFydER0SW5wdXQ7XHJcbiAgICBAVmlld0NoaWxkKCdkYXRlcGlja2VyRW5kRHRJbnB1dCcpIGRhdGVwaWNrZXJFbmREdElucHV0O1xyXG4gICAgIGNsb3NlZCgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc2VkKCkge1xyXG4gICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5ID0gbmV3IEV4cGVuc2VTdG9yeSgpO1xyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlclN0YXJ0RHRJbnB1dC5yZXNldCgpOyAvL1RPRE86IHJlcGxhY2UgdGhpcyB0ZW1wb3Jhcnkgc29sdXRpb25cclxuICAgICAgICB0aGlzLmRhdGVwaWNrZXJFbmREdElucHV0LnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5kaXNtaXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbigpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4oJ3NtJyk7XHJcbiAgICB9XHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5kaXNtaXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob3RpZnlTdGFydER0KHN0YXJ0RHQ6c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeS5zdGFydER0ID0gc3RhcnREdDtcclxuICB9XHJcbiAgXHJcbiAgIG9uTm90aWZ5RW5kRHQoZW5kRHQ6c3RyaW5nKTp2b2lkIHtcclxuICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeS5lbmREdCA9IGVuZER0O1xyXG4gIH1cclxuICBzdWJtaXQoKXtcclxuICAgICAgaWYoIXRoaXMudmFsaWRhdGUoKSkgeyByZXR1cm47IH1cclxuICAgICAgXHJcbiAgICAgIGlmKHRoaXMuZXhwZW5zZVN0b3J5KXtcclxuICAgICAgICAgIHRoaXMuX2V4cGVuc2VTdG9yeVNlcnZpY2VcclxuICAgICAgICAgIC5hZGRFeHBlbnNlU3RvcnkodGhpcy5leHBlbnNlU3RvcnkpXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICAgIHRoaXMuZGlzbWlzc2VkKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIH1cclxuICBwcml2YXRlIHZhbGlkYXRlKCkge1xyXG4gICAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICBpZih0aGlzLmV4cGVuc2VTdG9yeS50aXRsZSA9PSBudWxsIHx8IHRoaXMuZXhwZW5zZVN0b3J5LnRpdGxlLnRyaW0oKS5sZW5ndGggPD0wIHx8IHRoaXMuZXhwZW5zZVN0b3J5LnRpdGxlLnRyaW0oKS5sZW5ndGggPjEwMCl7XHJcbiAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShcIlBsZWFzZSBhIHZhbGlkIHRpdGxlIGZvciB5b3VyIGV4cGVuc2UgcmVwb3J0XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5leHBlbnNlU3Rvcnkuc3RhcnREdCA9PSBudWxsIHx8IHRoaXMuZXhwZW5zZVN0b3J5LnN0YXJ0RHQudHJpbSgpLmxlbmd0aCA8PTApe1xyXG4gICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBzdGFydCBkYXRlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5leHBlbnNlU3RvcnkuZW5kRHQgPT0gbnVsbCB8fCB0aGlzLmV4cGVuc2VTdG9yeS5lbmREdC50cmltKCkubGVuZ3RoIDw9MCkge1xyXG4gICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbmQgZGF0ZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHsgaXNWYWxpZCA9IHRydWU7fVxyXG4gICAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
