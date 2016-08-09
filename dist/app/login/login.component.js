System.register(['@angular/core', '../user/user.service', './login.service', '../shared/alert/dtalert.component', '../shared/spinner/dtspinner.component', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, user_service_1, login_service_1, dtalert_component_1, dtspinner_component_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dtalert_component_1_1) {
                dtalert_component_1 = dtalert_component_1_1;
            },
            function (dtspinner_component_1_1) {
                dtspinner_component_1 = dtspinner_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let LoginComponent = class LoginComponent {
                constructor(_loginService, _router, _userService) {
                    this._loginService = _loginService;
                    this._router = _router;
                    this._userService = _userService;
                    this.pageTitle = "Login";
                    this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
                }
                submit() {
                    var isValid = this.validateEmailAndPassword();
                    if (!isValid) {
                        return;
                    }
                    var payload = { "email": this.email, "password": this.password };
                    this._loginService
                        .login(payload)
                        .subscribe(result => {
                        if (!result.success) {
                            this.dtAlert.failure(result.message);
                            return;
                        }
                        this._userService.add(result);
                        this._router.navigateByUrl('/dashboard');
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
            ], LoginComponent.prototype, "email", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], LoginComponent.prototype, "password", void 0);
            LoginComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/login/login.component.html',
                    directives: [dtalert_component_1.DtAlertComponent, dtspinner_component_1.DtSpinButtonComponent, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, user_service_1.UserService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQVFJLFlBQW9CLGFBQTJCLEVBQVUsT0FBYyxFQUFVLFlBQXdCO29CQUFyRixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQVBsRyxjQUFTLEdBQVcsT0FBTyxDQUFDO29CQU0zQixpQkFBWSxHQUFHLG1HQUFtRyxDQUFDO29CQUV2SCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztnQkFDMUMsQ0FBQztnQkFDTSxNQUFNO29CQUVULElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ1QsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO29CQUVoRSxJQUFJLENBQUMsYUFBYTt5QkFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQzt5QkFDZCxTQUFTLENBQUMsTUFBTTt3QkFDYixFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDOzRCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxFQUNELEtBQUssSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVPLHdCQUF3QjtvQkFFNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzt3QkFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQztZQXhDRztnQkFBQyxZQUFLLEVBQUU7O3lEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQVRaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsVUFBVSxFQUFDLENBQUMsb0NBQWdCLEVBQUMsMkNBQXFCLEVBQUUsMEJBQWlCLENBQUM7aUJBQ3pFLENBQUM7OzhCQUFBO1lBQ0YsMkNBNENDLENBQUEiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi91c2VyL3VzZXIuc2VydmljZSdcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gJy4vbG9naW4uc2VydmljZSdcclxuaW1wb3J0IHtJTG9naW5SZXNwb25zZX0gZnJvbSAnLi9sb2dpblJlc3BvbnNlJ1xyXG5pbXBvcnQge0R0QWxlcnRDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9hbGVydC9kdGFsZXJ0LmNvbXBvbmVudCdcclxuaW1wb3J0IHtEdFNwaW5CdXR0b25Db21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9zcGlubmVyL2R0c3Bpbm5lci5jb21wb25lbnQnXHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltEdEFsZXJ0Q29tcG9uZW50LER0U3BpbkJ1dHRvbkNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmcgPSBcIkxvZ2luXCI7XHJcbiAgICBwdWJsaWMgbG9naW5SZXN1bHQ6c3RyaW5nO1xyXG4gIFxyXG4gICAgQElucHV0KCkgZW1haWw6c3RyaW5nO1xyXG4gICAgQElucHV0KCkgcGFzc3dvcmQ6c3RyaW5nO1xyXG4gICAgcHVibGljIGR0QWxlcnQ6RHRBbGVydENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2UpIHsgXHJcbiAgICAgICAgdGhpcy5kdEFsZXJ0ID0gbmV3IER0QWxlcnRDb21wb25lbnQoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlRW1haWxBbmRQYXNzd29yZCgpO1xyXG4gICAgICAgIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcImVtYWlsXCI6IHRoaXMuZW1haWwsIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZH07XHJcbiAgICAgICAgXHJcbiAgICAgICB0aGlzLl9sb2dpblNlcnZpY2VcclxuICAgICAgICAubG9naW4ocGF5bG9hZClcclxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFyZXN1bHQuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICB0aGlzLl91c2VyU2VydmljZS5hZGQocmVzdWx0KTtcclxuICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I9PnRoaXMuZHRBbGVydC5mYWlsdXJlKGVycm9yKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgdmFsaWRhdGVFbWFpbEFuZFBhc3N3b3JkKCk6IGJvb2xlYW57XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLmVtYWlsID09IG51bGwgfHwgdGhpcy5lbWFpbCA9PSBcIlwiIHx8ICF0aGlzLkVNQUlMX1JFR0VYUC50ZXN0KHRoaXMuZW1haWwpKXtcclxuICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBhc3N3b3JkID09IG51bGwgfHwgdGhpcy5wYXNzd29yZCA9PSBcIlwiKXtcclxuICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUoXCJQbGVhc2UgZW50ZXIgYSBwYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
