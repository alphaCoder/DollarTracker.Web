System.register(['@angular/core', '@angular/router', '../user/user.service', './login.service', '../shared/alert/dtalert.component', '../shared/spinner/dtspinner.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, login_service_1, dtalert_component_1, dtspinner_component_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        this._router.navigate(['dashboard']);
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
                    directives: [dtalert_component_1.DtAlertComponent, dtspinner_component_1.DtSpinButtonComponent]
                }), 
                __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, user_service_1.UserService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQVFJLFlBQW9CLGFBQTJCLEVBQVUsT0FBYyxFQUFVLFlBQXdCO29CQUFyRixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQVBsRyxjQUFTLEdBQVcsT0FBTyxDQUFDO29CQU0zQixpQkFBWSxHQUFHLG1HQUFtRyxDQUFDO29CQUV2SCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTSxNQUFNO29CQUVULElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ1QsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO29CQUUvRCxJQUFJLENBQUMsYUFBYTt5QkFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQzt5QkFDZCxTQUFTLENBQUMsTUFBTTt3QkFDYixFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDOzRCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLENBQUMsRUFDRCxLQUFLLElBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDeEMsQ0FBQztnQkFFTyx3QkFBd0I7b0JBRTVCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQzt3QkFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7d0JBQ2hELE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztZQUNMLENBQUM7WUF6Q0c7Z0JBQUMsWUFBSyxFQUFFOzt5REFBQTtZQUNSO2dCQUFDLFlBQUssRUFBRTs7NERBQUE7WUFUWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFVBQVUsRUFBQyxDQUFDLG9DQUFnQixFQUFDLDJDQUFxQixDQUFDO2lCQUN0RCxDQUFDOzs4QkFBQTtZQUNGLDJDQTZDQyxDQUFBIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJ1xyXG5pbXBvcnQge0lMb2dpblJlc3BvbnNlfSBmcm9tICcuL2xvZ2luUmVzcG9uc2UnXHJcbmltcG9ydCB7RHRBbGVydENvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2FsZXJ0L2R0YWxlcnQuY29tcG9uZW50J1xyXG5pbXBvcnQge0R0U3BpbkJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL3NwaW5uZXIvZHRzcGlubmVyLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbRHRBbGVydENvbXBvbmVudCxEdFNwaW5CdXR0b25Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmcgPSBcIkxvZ2luXCI7XHJcbiAgICBwdWJsaWMgbG9naW5SZXN1bHQ6c3RyaW5nO1xyXG4gIFxyXG4gICAgQElucHV0KCkgZW1haWw6c3RyaW5nO1xyXG4gICAgQElucHV0KCkgcGFzc3dvcmQ6c3RyaW5nO1xyXG4gICAgcHVibGljIGR0QWxlcnQ6RHRBbGVydENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2UpIHsgXHJcbiAgICAgICAgdGhpcy5kdEFsZXJ0ID0gbmV3IER0QWxlcnRDb21wb25lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCk6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGVFbWFpbEFuZFBhc3N3b3JkKCk7XHJcbiAgICAgICAgaWYoIWlzVmFsaWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBwYXlsb2FkID0ge1wiZW1haWxcIjogdGhpcy5lbWFpbCwgXCJwYXNzd29yZFwiOiB0aGlzLnBhc3N3b3JkfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2VcclxuICAgICAgICAubG9naW4ocGF5bG9hZClcclxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFyZXN1bHQuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShyZXN1bHQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICB0aGlzLl91c2VyU2VydmljZS5hZGQocmVzdWx0KTtcclxuICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQnXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcj0+dGhpcy5kdEFsZXJ0LmZhaWx1cmUoZXJyb3IpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUVtYWlsQW5kUGFzc3dvcmQoKTogYm9vbGVhbntcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZW1haWwgPT0gbnVsbCB8fCB0aGlzLmVtYWlsID09IFwiXCIgfHwgIXRoaXMuRU1BSUxfUkVHRVhQLnRlc3QodGhpcy5lbWFpbCkpe1xyXG4gICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGFzc3dvcmQgPT0gbnVsbCB8fCB0aGlzLnBhc3N3b3JkID09IFwiXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShcIlBsZWFzZSBlbnRlciBhIHBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
