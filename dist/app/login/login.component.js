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
                    directives: [dtalert_component_1.DtAlertComponent, dtspinner_component_1.DtSpinButtonComponent],
                    selector: 'login'
                }), 
                __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, user_service_1.UserService])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQVFJLFlBQW9CLGFBQTJCLEVBQVUsT0FBYyxFQUFVLFlBQXdCO29CQUFyRixrQkFBYSxHQUFiLGFBQWEsQ0FBYztvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQVBsRyxjQUFTLEdBQVcsT0FBTyxDQUFDO29CQU0zQixpQkFBWSxHQUFHLG1HQUFtRyxDQUFDO29CQUV2SCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTSxNQUFNO29CQUVULElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ1QsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDO29CQUUvRCxJQUFJLENBQUMsYUFBYTt5QkFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQzt5QkFDZCxTQUFTLENBQUMsTUFBTTt3QkFDYixFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDOzRCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxFQUNELEtBQUssSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVPLHdCQUF3QjtvQkFFNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUM5RSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzt3QkFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQztZQXpDRztnQkFBQyxZQUFLLEVBQUU7O3lEQUFBO1lBQ1I7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQVZaO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsVUFBVSxFQUFDLENBQUMsb0NBQWdCLEVBQUMsMkNBQXFCLENBQUM7b0JBQ25ELFFBQVEsRUFBQyxPQUFPO2lCQUNuQixDQUFDOzs4QkFBQTtZQUNGLDJDQTZDQyxDQUFBIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge0xvZ2luU2VydmljZX0gZnJvbSAnLi9sb2dpbi5zZXJ2aWNlJ1xyXG5pbXBvcnQge0lMb2dpblJlc3BvbnNlfSBmcm9tICcuL2xvZ2luUmVzcG9uc2UnXHJcbmltcG9ydCB7RHRBbGVydENvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2FsZXJ0L2R0YWxlcnQuY29tcG9uZW50J1xyXG5pbXBvcnQge0R0U3BpbkJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL3NwaW5uZXIvZHRzcGlubmVyLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbRHRBbGVydENvbXBvbmVudCxEdFNwaW5CdXR0b25Db21wb25lbnRdLFxyXG4gICAgc2VsZWN0b3I6J2xvZ2luJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgcHVibGljIHBhZ2VUaXRsZTogc3RyaW5nID0gXCJMb2dpblwiO1xyXG4gICAgcHVibGljIGxvZ2luUmVzdWx0OnN0cmluZztcclxuICBcclxuICAgIEBJbnB1dCgpIGVtYWlsOnN0cmluZztcclxuICAgIEBJbnB1dCgpIHBhc3N3b3JkOnN0cmluZztcclxuICAgIHB1YmxpYyBkdEFsZXJ0OkR0QWxlcnRDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7IFxyXG4gICAgICAgIHRoaXMuZHRBbGVydCA9IG5ldyBEdEFsZXJ0Q29tcG9uZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1Ym1pdCgpOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlRW1haWxBbmRQYXNzd29yZCgpO1xyXG4gICAgICAgIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGF5bG9hZCA9IHtcImVtYWlsXCI6IHRoaXMuZW1haWwsIFwicGFzc3dvcmRcIjogdGhpcy5wYXNzd29yZH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5fbG9naW5TZXJ2aWNlXHJcbiAgICAgICAgLmxvZ2luKHBheWxvYWQpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZighcmVzdWx0LnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuYWRkKHJlc3VsdCk7XHJcbiAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yPT50aGlzLmR0QWxlcnQuZmFpbHVyZShlcnJvcikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlRW1haWxBbmRQYXNzd29yZCgpOiBib29sZWFue1xyXG4gICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5lbWFpbCA9PSBudWxsIHx8IHRoaXMuZW1haWwgPT0gXCJcIiB8fCAhdGhpcy5FTUFJTF9SRUdFWFAudGVzdCh0aGlzLmVtYWlsKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWxcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wYXNzd29yZCA9PSBudWxsIHx8IHRoaXMucGFzc3dvcmQgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKFwiUGxlYXNlIGVudGVyIGEgcGFzc3dvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
