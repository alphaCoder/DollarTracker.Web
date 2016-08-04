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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQVFJLFlBQW9CLGFBQTJCLEVBQVUsT0FBYyxFQUFVLFlBQXdCO29CQUFyRixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQVBsRyxjQUFTLEdBQVcsT0FBTyxDQUFDO29CQU0zQixpQkFBWSxHQUFHLG1HQUFtRyxDQUFDO29CQUV2SCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTSxNQUFNO29CQUVULElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ1QsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO29CQUVoRSxJQUFJLENBQUMsYUFBYTt5QkFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQzt5QkFDZCxTQUFTLENBQUMsTUFBTTt3QkFDYixFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDOzRCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxFQUNELEtBQUssSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVPLHdCQUF3QjtvQkFFNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzt3QkFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQztZQXpDRztnQkFBQyxZQUFLLEVBQUU7O3lEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQVRaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsVUFBVSxFQUFDLENBQUMsb0NBQWdCLEVBQUMsMkNBQXFCLEVBQUUsMEJBQWlCLENBQUM7aUJBQ3pFLENBQUM7OzhCQUFBO1lBQ0YsMkNBNkNDLENBQUEiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi91c2VyL3VzZXIuc2VydmljZSdcclxuaW1wb3J0IHtMb2dpblNlcnZpY2V9IGZyb20gJy4vbG9naW4uc2VydmljZSdcclxuaW1wb3J0IHtJTG9naW5SZXNwb25zZX0gZnJvbSAnLi9sb2dpblJlc3BvbnNlJ1xyXG5pbXBvcnQge0R0QWxlcnRDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9hbGVydC9kdGFsZXJ0LmNvbXBvbmVudCdcclxuaW1wb3J0IHtEdFNwaW5CdXR0b25Db21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9zcGlubmVyL2R0c3Bpbm5lci5jb21wb25lbnQnXHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltEdEFsZXJ0Q29tcG9uZW50LER0U3BpbkJ1dHRvbkNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcGFnZVRpdGxlOiBzdHJpbmcgPSBcIkxvZ2luXCI7XHJcbiAgICBwdWJsaWMgbG9naW5SZXN1bHQ6c3RyaW5nO1xyXG4gIFxyXG4gICAgQElucHV0KCkgZW1haWw6c3RyaW5nO1xyXG4gICAgQElucHV0KCkgcGFzc3dvcmQ6c3RyaW5nO1xyXG4gICAgcHVibGljIGR0QWxlcnQ6RHRBbGVydENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSwgcHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2UpIHsgXHJcbiAgICAgICAgdGhpcy5kdEFsZXJ0ID0gbmV3IER0QWxlcnRDb21wb25lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpc1ZhbGlkID0gdGhpcy52YWxpZGF0ZUVtYWlsQW5kUGFzc3dvcmQoKTtcclxuICAgICAgICBpZighaXNWYWxpZCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBheWxvYWQgPSB7XCJlbWFpbFwiOiB0aGlzLmVtYWlsLCBcInBhc3N3b3JkXCI6IHRoaXMucGFzc3dvcmR9O1xyXG4gICAgICAgIFxyXG4gICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlXHJcbiAgICAgICAgLmxvZ2luKHBheWxvYWQpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZighcmVzdWx0LnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuYWRkKHJlc3VsdCk7XHJcbiAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yPT50aGlzLmR0QWxlcnQuZmFpbHVyZShlcnJvcikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlRW1haWxBbmRQYXNzd29yZCgpOiBib29sZWFue1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5lbWFpbCA9PSBudWxsIHx8IHRoaXMuZW1haWwgPT0gXCJcIiB8fCAhdGhpcy5FTUFJTF9SRUdFWFAudGVzdCh0aGlzLmVtYWlsKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wYXNzd29yZCA9PSBudWxsIHx8IHRoaXMucGFzc3dvcmQgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKFwiUGxlYXNlIGVudGVyIGEgcGFzc3dvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
