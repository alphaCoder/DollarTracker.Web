System.register(['@angular/core', './user.service', '../shared/apiurl.service'], function(exports_1, context_1) {
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
    var core_1, user_service_1, apiurl_service_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            }],
        execute: function() {
            let ProfileComponent = class ProfileComponent {
                constructor(_userService, _apiUrl) {
                    this._userService = _userService;
                    this._apiUrl = _apiUrl;
                    this._avatarUrl = '';
                    this._avatarUrl = this._apiUrl.profilePicUrl + "/" + this._userService.user.userId;
                }
                ngOnInit() { }
            };
            ProfileComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/user/profile.component.html'
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService, apiurl_service_1.ApiUrl])
            ], ProfileComponent);
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFSSxZQUFvQixZQUF3QixFQUFVLE9BQWM7b0JBQWhELGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBRDVELGVBQVUsR0FBUyxFQUFFLENBQUM7b0JBRTFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztnQkFDdkYsQ0FBQztnQkFFRCxRQUFRLEtBQUssQ0FBQztZQUVsQixDQUFDO1lBWEQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxXQUFXLEVBQUUsaUNBQWlDO2lCQUNqRCxDQUFDOztnQ0FBQTtZQUNGLCtDQVFDLENBQUEiLCJmaWxlIjoidXNlci9wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge0FwaVVybH0gZnJvbSAnLi4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3VzZXIvcHJvZmlsZS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfYXZhdGFyVXJsOnN0cmluZyA9Jyc7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSwgcHJpdmF0ZSBfYXBpVXJsOkFwaVVybCkgeyBcclxuICAgICAgICB0aGlzLl9hdmF0YXJVcmwgPSB0aGlzLl9hcGlVcmwucHJvZmlsZVBpY1VybCArIFwiL1wiICsgdGhpcy5fdXNlclNlcnZpY2UudXNlci51c2VySWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
