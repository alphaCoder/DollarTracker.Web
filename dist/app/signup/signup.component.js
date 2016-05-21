System.register(['@angular/core', '@angular/router', './signup.service', '../shared/alert/dtalert.component'], function(exports_1, context_1) {
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
    var core_1, router_1, signup_service_1, dtalert_component_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (signup_service_1_1) {
                signup_service_1 = signup_service_1_1;
            },
            function (dtalert_component_1_1) {
                dtalert_component_1 = dtalert_component_1_1;
            }],
        execute: function() {
            let SignupComponent = class SignupComponent {
                constructor(_signupService, _router) {
                    this._signupService = _signupService;
                    this._router = _router;
                    this.pageTitle = "Sign Up";
                    this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
                }
                submit() {
                    var isValid = this.validateEmailAndPassword();
                    if (!isValid) {
                        return;
                    }
                    var payload = { "email": this.email, "password": this.password };
                    this._signupService
                        .signup(payload)
                        .subscribe(result => {
                        if (!result.success) {
                            this.dtAlert.failure(result.message);
                            return;
                        }
                        else {
                            this.dtAlert.success("Successfully created account! Please Login");
                            this.email = null;
                            this.password = null;
                        }
                    }, error => this.dtAlert.failure(error));
                }
                validateEmailAndPassword() {
                    if (this.email == null || this.email == "" || !this.EMAIL_REGEXP.test(this.email)) {
                        this.dtAlert.failure("Please enter a valid email");
                        return false;
                    }
                    if (this.password == null || this.password == "") {
                        this.dtAlert.failure("Please enter a password");
                        return false;
                    }
                    return true;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], SignupComponent.prototype, "email", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], SignupComponent.prototype, "password", void 0);
            SignupComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/signup/signup.component.html',
                    providers: [signup_service_1.SignupService],
                    directives: [dtalert_component_1.DtAlertComponent]
                }), 
                __metadata('design:paramtypes', [signup_service_1.SignupService, router_1.Router])
            ], SignupComponent);
            exports_1("SignupComponent", SignupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBUUksWUFBb0IsY0FBNkIsRUFBVSxPQUFjO29CQUFyRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQVBsRSxjQUFTLEdBQVUsU0FBUyxDQUFDO29CQUs1QixpQkFBWSxHQUFHLG1HQUFtRyxDQUFDO29CQUd2SCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTSxNQUFNO29CQUVULElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ1QsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO29CQUUvRCxJQUFJLENBQUMsY0FBYzt5QkFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQzt5QkFDZixTQUFTLENBQUMsTUFBTTt3QkFDYixFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDOzRCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNELElBQUksQ0FBQSxDQUFDOzRCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7NEJBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOzRCQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt3QkFDekIsQ0FBQztvQkFDTCxDQUFDLEVBQ0QsS0FBSyxJQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUM7Z0JBRU8sd0JBQXdCO29CQUU1QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQzlFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7d0JBQ25ELE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO3dCQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7WUFDTCxDQUFDO1lBN0NHO2dCQUFDLFlBQUssRUFBRTs7MERBQUE7WUFDUjtnQkFBQyxZQUFLLEVBQUU7OzZEQUFBO1lBVFo7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO29CQUMxQixVQUFVLEVBQUMsQ0FBQyxvQ0FBZ0IsQ0FBQztpQkFDaEMsQ0FBQzs7K0JBQUE7WUFDRiw2Q0FnREMsQ0FBQSIsImZpbGUiOiJzaWdudXAvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge1NpZ251cFNlcnZpY2V9IGZyb20gJy4vc2lnbnVwLnNlcnZpY2UnXHJcbmltcG9ydCB7SUxvZ2luUmVzcG9uc2V9IGZyb20gJy4uL2xvZ2luL2xvZ2luUmVzcG9uc2UnXHJcbmltcG9ydCB7RHRBbGVydENvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2FsZXJ0L2R0YWxlcnQuY29tcG9uZW50J1xyXG5pbXBvcnQge0R0U3BpbkJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL3NwaW5uZXIvZHRzcGlubmVyLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtTaWdudXBTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6W0R0QWxlcnRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xyXG4gICAgcHVibGljIHBhZ2VUaXRsZTpzdHJpbmcgPSBcIlNpZ24gVXBcIjtcclxuICAgIFxyXG4gICAgQElucHV0KCkgZW1haWw6c3RyaW5nO1xyXG4gICAgQElucHV0KCkgcGFzc3dvcmQ6c3RyaW5nO1xyXG4gICAgcHVibGljIGR0QWxlcnQ6RHRBbGVydENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ251cFNlcnZpY2U6IFNpZ251cFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHsgXHJcbiAgICAgICAgdGhpcy5kdEFsZXJ0ID0gbmV3IER0QWxlcnRDb21wb25lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCk6dm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlRW1haWxBbmRQYXNzd29yZCgpO1xyXG4gICAgICAgIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcImVtYWlsXCI6IHRoaXMuZW1haWwsIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fc2lnbnVwU2VydmljZVxyXG4gICAgICAgIC5zaWdudXAocGF5bG9hZClcclxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFyZXN1bHQuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHRBbGVydC5zdWNjZXNzKFwiU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYWNjb3VudCEgUGxlYXNlIExvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWFpbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I9PnRoaXMuZHRBbGVydC5mYWlsdXJlKGVycm9yKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgdmFsaWRhdGVFbWFpbEFuZFBhc3N3b3JkKCk6IGJvb2xlYW57XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLmVtYWlsID09IG51bGwgfHwgdGhpcy5lbWFpbCA9PSBcIlwiIHx8ICF0aGlzLkVNQUlMX1JFR0VYUC50ZXN0KHRoaXMuZW1haWwpKXtcclxuICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBhc3N3b3JkID09IG51bGwgfHwgdGhpcy5wYXNzd29yZCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUoXCJQbGVhc2UgZW50ZXIgYSBwYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4gICAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
