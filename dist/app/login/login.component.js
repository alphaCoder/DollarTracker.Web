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
                    // var isValid = this.validateEmailAndPassword();
                    // if(!isValid){
                    //     return;
                    // }
                    var payload = { "email": this.email, "password": this.password };
                    this._loginService
                        .login(payload)
                        .filter(x => this.validateEmailAndPassword())
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
                    directives: [dtalert_component_1.DtAlertComponent, dtspinner_component_1.DtSpinButtonComponent]
                }), 
                __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, user_service_1.UserService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQVFJLFlBQW9CLGFBQTJCLEVBQVUsT0FBYyxFQUFVLFlBQXdCO29CQUFyRixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQVBsRyxjQUFTLEdBQVcsT0FBTyxDQUFDO29CQU0zQixpQkFBWSxHQUFHLG1HQUFtRyxDQUFDO29CQUV2SCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTSxNQUFNO29CQUVULGlEQUFpRDtvQkFDakQsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLElBQUk7b0JBQ0osSUFBSSxPQUFPLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO29CQUVoRSxJQUFJLENBQUMsYUFBYTt5QkFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQzt5QkFDZCxNQUFNLENBQUMsQ0FBQyxJQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO3lCQUMzQyxTQUFTLENBQUMsTUFBTTt3QkFDYixFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDOzRCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxFQUNELEtBQUssSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVPLHdCQUF3QjtvQkFFNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzt3QkFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQztZQTFDRztnQkFBQyxZQUFLLEVBQUU7O3lEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQVRaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsVUFBVSxFQUFDLENBQUMsb0NBQWdCLEVBQUMsMkNBQXFCLENBQUM7aUJBQ3RELENBQUM7OzhCQUFBO1lBQ0YsMkNBOENDLENBQUEiLCJmaWxlIjoibG9naW4vbG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vdXNlci91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tICcuL2xvZ2luLnNlcnZpY2UnXHJcbmltcG9ydCB7SUxvZ2luUmVzcG9uc2V9IGZyb20gJy4vbG9naW5SZXNwb25zZSdcclxuaW1wb3J0IHtEdEFsZXJ0Q29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvYWxlcnQvZHRhbGVydC5jb21wb25lbnQnXHJcbmltcG9ydCB7RHRTcGluQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvc3Bpbm5lci9kdHNwaW5uZXIuY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltEdEFsZXJ0Q29tcG9uZW50LER0U3BpbkJ1dHRvbkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBwYWdlVGl0bGU6IHN0cmluZyA9IFwiTG9naW5cIjtcclxuICAgIHB1YmxpYyBsb2dpblJlc3VsdDpzdHJpbmc7XHJcbiAgXHJcbiAgICBASW5wdXQoKSBlbWFpbDpzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwYXNzd29yZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgZHRBbGVydDpEdEFsZXJ0Q29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyLCBwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkgeyBcclxuICAgICAgICB0aGlzLmR0QWxlcnQgPSBuZXcgRHRBbGVydENvbXBvbmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdmFyIGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlRW1haWxBbmRQYXNzd29yZCgpO1xyXG4gICAgICAgIC8vIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcImVtYWlsXCI6IHRoaXMuZW1haWwsIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZH07XHJcbiAgICAgICAgXHJcbiAgICAgICB0aGlzLl9sb2dpblNlcnZpY2VcclxuICAgICAgICAubG9naW4ocGF5bG9hZClcclxuICAgICAgICAuZmlsdGVyKHg9PiB0aGlzLnZhbGlkYXRlRW1haWxBbmRQYXNzd29yZCgpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgaWYoIXJlc3VsdC5zdWNjZXNzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmFkZChyZXN1bHQpO1xyXG4gICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcj0+dGhpcy5kdEFsZXJ0LmZhaWx1cmUoZXJyb3IpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUVtYWlsQW5kUGFzc3dvcmQoKTogYm9vbGVhbntcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZW1haWwgPT0gbnVsbCB8fCB0aGlzLmVtYWlsID09IFwiXCIgfHwgIXRoaXMuRU1BSUxfUkVHRVhQLnRlc3QodGhpcy5lbWFpbCkpe1xyXG4gICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGFzc3dvcmQgPT0gbnVsbCB8fCB0aGlzLnBhc3N3b3JkID09IFwiXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmR0QWxlcnQuZmFpbHVyZShcIlBsZWFzZSBlbnRlciBhIHBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
