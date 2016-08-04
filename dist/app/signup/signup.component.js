System.register(['@angular/core', './signup.service', '../shared/alert/dtalert.component', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, signup_service_1, dtalert_component_1, router_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (signup_service_1_1) {
                signup_service_1 = signup_service_1_1;
            },
            function (dtalert_component_1_1) {
                dtalert_component_1 = dtalert_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let SignupComponent = class SignupComponent {
                constructor(_signupService, _router) {
                    this._signupService = _signupService;
                    this._router = _router;
                    this.pageTitle = "Sign Up";
                    this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    this.user = { "email": "", "password": "", "displayName": "" };
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
                }
                submit() {
                    var isValid = this.validateEmailAndPassword();
                    if (!isValid) {
                        return;
                    }
                    this._signupService
                        .signup(this.user)
                        .subscribe(result => {
                        if (!result.success) {
                            this.dtAlert.failure(result.message);
                            return;
                        }
                        else {
                            this.dtAlert.success("Successfully created account! Please Login");
                            this.user.email = null;
                            this.user.password = null;
                            this.user.displayName = null;
                        }
                    }, error => this.dtAlert.failure(error));
                }
                validateEmailAndPassword() {
                    if (this.user.email == null || this.user.email == "" || !this.EMAIL_REGEXP.test(this.user.email)) {
                        this.dtAlert.failure("Please enter a valid email");
                        return false;
                    }
                    if (this.user.password == null || this.user.password == "") {
                        this.dtAlert.failure("Please enter a password");
                        return false;
                    }
                    return true;
                }
            };
            SignupComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/signup/signup.component.html',
                    providers: [signup_service_1.SignupService],
                    directives: [dtalert_component_1.DtAlertComponent, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [signup_service_1.SignupService, router_1.Router])
            ], SignupComponent);
            exports_1("SignupComponent", SignupComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zaWdudXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBTUksWUFBb0IsY0FBNkIsRUFBVSxPQUFjO29CQUFyRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUxsRSxjQUFTLEdBQVUsU0FBUyxDQUFDO29CQUc1QixpQkFBWSxHQUFHLG1HQUFtRyxDQUFDO29CQUNuSCxTQUFJLEdBQUcsRUFBQyxPQUFPLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUUsYUFBYSxFQUFDLEVBQUUsRUFBQyxDQUFDO29CQUV6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0NBQWdCLEVBQUUsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTSxNQUFNO29CQUVULElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM5QyxFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7d0JBQ1QsTUFBTSxDQUFDO29CQUNYLENBQUM7b0JBR0QsSUFBSSxDQUFDLGNBQWM7eUJBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUNqQixTQUFTLENBQUMsTUFBTTt3QkFDYixFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDOzRCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3JDLE1BQU0sQ0FBQzt3QkFDWCxDQUFDO3dCQUNELElBQUksQ0FBQSxDQUFDOzRCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7NEJBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzRCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0JBQ2pDLENBQUM7b0JBQ0wsQ0FBQyxFQUNELEtBQUssSUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVPLHdCQUF3QjtvQkFFNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUM3RixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO3dCQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7WUFDTCxDQUFDO1lBcEREO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztvQkFDMUIsVUFBVSxFQUFDLENBQUMsb0NBQWdCLEVBQUUsMEJBQWlCLENBQUM7aUJBQ25ELENBQUM7OytCQUFBO1lBQ0YsNkNBK0NDLENBQUEiLCJmaWxlIjoic2lnbnVwL3NpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge1NpZ251cFNlcnZpY2V9IGZyb20gJy4vc2lnbnVwLnNlcnZpY2UnXHJcbmltcG9ydCB7SUxvZ2luUmVzcG9uc2V9IGZyb20gJy4uL2xvZ2luL2xvZ2luUmVzcG9uc2UnXHJcbmltcG9ydCB7RHRBbGVydENvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2FsZXJ0L2R0YWxlcnQuY29tcG9uZW50J1xyXG5pbXBvcnQge0R0U3BpbkJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL3NwaW5uZXIvZHRzcGlubmVyLmNvbXBvbmVudCdcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbU2lnbnVwU2VydmljZV0sXHJcbiAgICBkaXJlY3RpdmVzOltEdEFsZXJ0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgcGFnZVRpdGxlOnN0cmluZyA9IFwiU2lnbiBVcFwiO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgZHRBbGVydDpEdEFsZXJ0Q29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcclxuICAgIHByaXZhdGUgdXNlciA9IHtcImVtYWlsXCI6XCJcIiwgXCJwYXNzd29yZFwiOlwiXCIsIFwiZGlzcGxheU5hbWVcIjpcIlwifTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ251cFNlcnZpY2U6IFNpZ251cFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpIHsgXHJcbiAgICAgICAgdGhpcy5kdEFsZXJ0ID0gbmV3IER0QWxlcnRDb21wb25lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCk6dm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlRW1haWxBbmRQYXNzd29yZCgpO1xyXG4gICAgICAgIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9zaWdudXBTZXJ2aWNlXHJcbiAgICAgICAgLnNpZ251cCh0aGlzLnVzZXIpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBpZighcmVzdWx0LnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR0QWxlcnQuc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSBjcmVhdGVkIGFjY291bnQhIFBsZWFzZSBMb2dpblwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlci5lbWFpbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyLmRpc3BsYXlOYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I9PnRoaXMuZHRBbGVydC5mYWlsdXJlKGVycm9yKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgdmFsaWRhdGVFbWFpbEFuZFBhc3N3b3JkKCk6IGJvb2xlYW57XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLnVzZXIuZW1haWwgPT0gbnVsbCB8fCB0aGlzLnVzZXIuZW1haWwgPT0gXCJcIiB8fCAhdGhpcy5FTUFJTF9SRUdFWFAudGVzdCh0aGlzLnVzZXIuZW1haWwpKXtcclxuICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnVzZXIucGFzc3dvcmQgPT0gbnVsbCB8fCB0aGlzLnVzZXIucGFzc3dvcmQgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKFwiUGxlYXNlIGVudGVyIGEgcGFzc3dvcmRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuICAgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
