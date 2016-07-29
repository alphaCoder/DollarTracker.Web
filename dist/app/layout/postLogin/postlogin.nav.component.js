System.register(['@angular/core', '@angular/router', '@angular/common', '../../user/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, user_service_1;
    var PostLoginNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let PostLoginNavComponent = class PostLoginNavComponent {
                constructor(_router, _userService) {
                    this._router = _router;
                    this._userService = _userService;
                    this.showDropdown = false;
                    this._userService.currentUser.subscribe(user => {
                        console.log('user', user);
                        this.user = user;
                    });
                }
                ngOnInit() { }
                toggleDropDown() {
                    this.showDropdown = !this.showDropdown;
                }
                signout() {
                    this._userService.logout();
                }
            };
            PostLoginNavComponent = __decorate([
                core_1.Component({
                    selector: 'post-login-nav',
                    templateUrl: 'app/layout/postlogin/postlogin.nav.component.html',
                    directives: [common_1.NgClass]
                }), 
                __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
            ], PostLoginNavComponent);
            exports_1("PostLoginNavComponent", PostLoginNavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9wb3N0TG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFHSSxZQUFvQixPQUFjLEVBQVUsWUFBd0I7b0JBQWhELFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBRjdELGlCQUFZLEdBQVcsS0FBSyxDQUFDO29CQUdoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSTt3QkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO29CQUNwQixDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVGLFFBQVEsS0FBSyxDQUFDO2dCQUVQLGNBQWM7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELE9BQU87b0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztZQUNMLENBQUM7WUF2QkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsbURBQW1EO29CQUNoRSxVQUFVLEVBQUMsQ0FBQyxnQkFBTyxDQUFDO2lCQUN2QixDQUFDOztxQ0FBQTtZQUNGLHlEQWtCQyxDQUFBIiwiZmlsZSI6ImxheW91dC9wb3N0TG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0e05nQ2xhc3N9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vdXNlci91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7SVVzZXJ9IGZyb20gJy4uLy4uL2xvZ2luL2xvZ2lucmVzcG9uc2UnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9zdC1sb2dpbi1uYXYnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbGF5b3V0L3Bvc3Rsb2dpbi9wb3N0bG9naW4ubmF2LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W05nQ2xhc3NdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0TG9naW5OYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHNob3dEcm9wZG93bjpib29sZWFuID0gZmFsc2U7XHJcbiAgICB1c2VyOklVc2VyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5jdXJyZW50VXNlci5zdWJzY3JpYmUodXNlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyJyx1c2VyKTtcclxuICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVEcm9wRG93bigpe1xyXG4gICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duID0gIXRoaXMuc2hvd0Ryb3Bkb3duO1xyXG4gICAgfVxyXG4gICAgc2lnbm91dCgpe1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
