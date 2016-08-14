System.register(['@angular/core', '@angular/router', './user.service', '../shared/apiurl.service', '../shared/alert/dtalert.component', './profile.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, apiurl_service_1, dtalert_component_1, profile_service_1;
    var ProfileComponent;
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
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            },
            function (dtalert_component_1_1) {
                dtalert_component_1 = dtalert_component_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            let ProfileComponent = class ProfileComponent {
                constructor(_userService, _apiUrl, _profileService) {
                    this._userService = _userService;
                    this._apiUrl = _apiUrl;
                    this._profileService = _profileService;
                    this._avatarUrl = '';
                    this.profile = null;
                    this.user = {
                        displayName: "",
                        aboutMe: "",
                        phoneNo: "",
                        email: ""
                    };
                    this.password = {
                        "current": "",
                        "password": "",
                        "rePassword": ""
                    };
                    this._avatarUrl = this._apiUrl.profilePicUrl + "/" + this._userService.user.userId;
                    this.user.aboutMe = this._userService.user.aboutMe;
                    this.user.phoneNo = this._userService.user.phoneNo;
                    this.user.displayName = this._userService.user.displayName;
                    this.user.email = this._userService.user.email;
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
                    this._profileService
                        .getProfile(this._userService.user.userId)
                        .subscribe(p => {
                        this.profile = p.data;
                        console.log("PROFILE");
                        console.log(JSON.stringify(this.profile));
                    });
                }
                ngOnInit() { }
                updateProfile() {
                    console.log("CLICKED Update profile");
                    console.log(JSON.stringify(this.user));
                    this._userService
                        .updateUser(this.user)
                        .subscribe(result => {
                        if (result.success) {
                            this.dtAlert.success("Successfully updated your profile");
                        }
                    }, error => { this.dtAlert.failure("Unknown error, please try again"); });
                }
                updatePassword() {
                    if (this.password.current.length == 0 || this.password.password.length == 0 || this.password.rePassword.length == 0) {
                        this.dtAlert.failure("Please make sure to enter all password fields");
                        return;
                    }
                    if (this.password.password != this.password.rePassword) {
                        this.dtAlert.failure("Please make sure Password and Re-Password fields match");
                        return;
                    }
                    this._userService
                        .updatePassword(this.password)
                        .subscribe(x => {
                        console.log("response update password");
                        console.log(JSON.stringify(x));
                        if (x.success) {
                            this.dtAlert.success("Successfully updated the password");
                        }
                        else {
                            this.dtAlert.failure(x.message);
                        }
                    }, (error) => { this.dtAlert.failure("Unknown server error, please try again later"); }, () => { this.clearPassword(); });
                }
                clearPassword() {
                    this.password.current = "";
                    this.password.password = "";
                    this.password.rePassword = "";
                }
            };
            ProfileComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/user/profile.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES, dtalert_component_1.DtAlertComponent],
                    providers: [profile_service_1.ProfileService]
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService, apiurl_service_1.ApiUrl, profile_service_1.ProfileService])
            ], ProfileComponent);
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFVSSxZQUFvQixZQUF3QixFQUFVLE9BQWMsRUFBVSxlQUE4QjtvQkFBeEYsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtvQkFUcEcsZUFBVSxHQUFTLEVBQUUsQ0FBQztvQkFDdEIsWUFBTyxHQUFHLElBQUksQ0FBQztvQkFFZixTQUFJLEdBQUU7d0JBQ1YsV0FBVyxFQUFDLEVBQUU7d0JBQ2QsT0FBTyxFQUFDLEVBQUU7d0JBQ1YsT0FBTyxFQUFDLEVBQUU7d0JBQ1YsS0FBSyxFQUFDLEVBQUU7cUJBQ1gsQ0FBQztvQkFpQkYsYUFBUSxHQUFFO3dCQUNOLFNBQVMsRUFBQyxFQUFFO3dCQUNaLFVBQVUsRUFBQyxFQUFFO3dCQUNiLFlBQVksRUFBQyxFQUFFO3FCQUNsQixDQUFBO29CQW5CRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7b0JBQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztvQkFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtB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QUE7Z0JBQ0wsQ0FBQztnQkFDRCxhQUFhO29CQUNULElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFFLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ2xDLENBQUM7WUFFTCxDQUFDO1lBbkZEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLGlDQUFpQztvQkFDOUMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUMsb0NBQWdCLENBQUM7b0JBQ2hELFNBQVMsRUFBQyxDQUFDLGdDQUFjLENBQUM7aUJBQzdCLENBQUM7O2dDQUFBO1lBQ0YsK0NBOEVDLENBQUEiLCJmaWxlIjoidXNlci9wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge0FwaVVybH0gZnJvbSAnLi4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0R0QWxlcnRDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9hbGVydC9kdGFsZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHJvZmlsZVNlcnZpY2V9IGZyb20gJy4vcHJvZmlsZS5zZXJ2aWNlJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3VzZXIvcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsRHRBbGVydENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6W1Byb2ZpbGVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9hdmF0YXJVcmw6c3RyaW5nID0nJztcclxuICAgIHByaXZhdGUgcHJvZmlsZSA9IG51bGw7XHJcbiAgICBkdEFsZXJ0OkR0QWxlcnRDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIHVzZXI9IHtcclxuICAgICAgICBkaXNwbGF5TmFtZTpcIlwiLFxyXG4gICAgICAgIGFib3V0TWU6XCJcIixcclxuICAgICAgICBwaG9uZU5vOlwiXCIsXHJcbiAgICAgICAgZW1haWw6XCJcIlxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLCBwcml2YXRlIF9hcGlVcmw6QXBpVXJsLCBwcml2YXRlIF9wcm9maWxlU2VydmljZTpQcm9maWxlU2VydmljZSkgeyBcclxuICAgICAgICB0aGlzLl9hdmF0YXJVcmwgPSB0aGlzLl9hcGlVcmwucHJvZmlsZVBpY1VybCArIFwiL1wiICsgdGhpcy5fdXNlclNlcnZpY2UudXNlci51c2VySWQ7XHJcbiAgICAgICAgdGhpcy51c2VyLmFib3V0TWUgPSB0aGlzLl91c2VyU2VydmljZS51c2VyLmFib3V0TWU7XHJcbiAgICAgICAgdGhpcy51c2VyLnBob25lTm8gPSB0aGlzLl91c2VyU2VydmljZS51c2VyLnBob25lTm87XHJcbiAgICAgICAgdGhpcy51c2VyLmRpc3BsYXlOYW1lID0gdGhpcy5fdXNlclNlcnZpY2UudXNlci5kaXNwbGF5TmFtZTtcclxuICAgICAgICB0aGlzLnVzZXIuZW1haWwgPSB0aGlzLl91c2VyU2VydmljZS51c2VyLmVtYWlsO1xyXG4gICAgICAgIHRoaXMuZHRBbGVydCA9IG5ldyBEdEFsZXJ0Q29tcG9uZW50KCk7XHJcbiAgICAgICAgdGhpcy5fcHJvZmlsZVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldFByb2ZpbGUodGhpcy5fdXNlclNlcnZpY2UudXNlci51c2VySWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocCA9PntcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZSA9IHAuZGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUFJPRklMRVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZmlsZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXNzd29yZCA9e1xyXG4gICAgICAgIFwiY3VycmVudFwiOlwiXCIsXHJcbiAgICAgICAgXCJwYXNzd29yZFwiOlwiXCIsXHJcbiAgICAgICAgXCJyZVBhc3N3b3JkXCI6XCJcIlxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICB1cGRhdGVQcm9maWxlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0tFRCBVcGRhdGUgcHJvZmlsZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTsgXHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2VcclxuICAgICAgICAudXBkYXRlVXNlcih0aGlzLnVzZXIpXHJcbiAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT57XHJcbiAgICAgICAgICAgaWYocmVzdWx0LnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LnN1Y2Nlc3MoXCJTdWNjZXNzZnVsbHkgdXBkYXRlZCB5b3VyIHByb2ZpbGVcIik7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge3RoaXMuZHRBbGVydC5mYWlsdXJlKFwiVW5rbm93biBlcnJvciwgcGxlYXNlIHRyeSBhZ2FpblwiKX1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBhc3N3b3JkKCl7XHJcbiAgICAgICAgaWYodGhpcy5wYXNzd29yZC5jdXJyZW50Lmxlbmd0aCA9PSAwIHx8IHRoaXMucGFzc3dvcmQucGFzc3dvcmQubGVuZ3RoID09IDAgfHwgdGhpcy5wYXNzd29yZC5yZVBhc3N3b3JkLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKFwiUGxlYXNlIG1ha2Ugc3VyZSB0byBlbnRlciBhbGwgcGFzc3dvcmQgZmllbGRzXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGFzc3dvcmQucGFzc3dvcmQgIT0gdGhpcy5wYXNzd29yZC5yZVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHRBbGVydC5mYWlsdXJlKFwiUGxlYXNlIG1ha2Ugc3VyZSBQYXNzd29yZCBhbmQgUmUtUGFzc3dvcmQgZmllbGRzIG1hdGNoXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlXHJcbiAgICAgICAgLnVwZGF0ZVBhc3N3b3JkKHRoaXMucGFzc3dvcmQpXHJcbiAgICAgICAgLnN1YnNjcmliZSh4PT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UgdXBkYXRlIHBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh4KSk7XHJcbiAgICAgICAgICAgIGlmKHguc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmR0QWxlcnQuc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSB1cGRhdGVkIHRoZSBwYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kdEFsZXJ0LmZhaWx1cmUoeC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKT0+e3RoaXMuZHRBbGVydC5mYWlsdXJlKFwiVW5rbm93biBzZXJ2ZXIgZXJyb3IsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIil9LFxyXG4gICAgICAgICgpID0+eyB0aGlzLmNsZWFyUGFzc3dvcmQoKTsgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNsZWFyUGFzc3dvcmQoKXtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkLmN1cnJlbnQgPVwiXCI7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZC5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZC5yZVBhc3N3b3JkID0gXCJcIjtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
