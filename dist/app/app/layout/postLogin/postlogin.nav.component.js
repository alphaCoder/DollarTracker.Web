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
            PostLoginNavComponent = (function () {
                function PostLoginNavComponent(_router, _userService) {
                    var _this = this;
                    this._router = _router;
                    this._userService = _userService;
                    this.showDropdown = false;
                    this._userService.currentUser.subscribe(function (user) {
                        console.log('user', user);
                        _this.user = user;
                    });
                }
                PostLoginNavComponent.prototype.ngOnInit = function () { };
                PostLoginNavComponent.prototype.toggleDropDown = function () {
                    this.showDropdown = !this.showDropdown;
                };
                PostLoginNavComponent.prototype.signout = function () {
                    this._userService.clear();
                    this._router.navigate(['/']);
                };
                PostLoginNavComponent = __decorate([
                    core_1.Component({
                        selector: 'post-login-nav',
                        templateUrl: 'app/layout/postlogin/postlogin.nav.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
                ], PostLoginNavComponent);
                return PostLoginNavComponent;
            }());
            exports_1("PostLoginNavComponent", PostLoginNavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYXlvdXQvcG9zdExvZ2luL3Bvc3Rsb2dpbi5uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBR0ksK0JBQW9CLE9BQWMsRUFBVSxZQUF3QjtvQkFIeEUsaUJBb0JDO29CQWpCdUIsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBWTtvQkFGN0QsaUJBQVksR0FBVyxLQUFLLENBQUM7b0JBR2hDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7d0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtvQkFDcEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRix3Q0FBUSxHQUFSLGNBQWEsQ0FBQztnQkFFUCw4Q0FBYyxHQUFyQjtvQkFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDM0MsQ0FBQztnQkFFRCx1Q0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkF4Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixXQUFXLEVBQUUsbURBQW1EO3dCQUNoRSxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsRUFBRSxnQkFBTyxDQUFDO3FCQUMxQyxDQUFDOzt5Q0FBQTtnQkFxQkYsNEJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHlEQW9CQyxDQUFBIiwiZmlsZSI6ImFwcC9sYXlvdXQvcG9zdExvZ2luL3Bvc3Rsb2dpbi5uYXYuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUyxSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydHtOZ0NsYXNzfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uLy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge0lVc2VyfSBmcm9tICcuLi8uLi9sb2dpbi9sb2dpbnJlc3BvbnNlJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9zdC1sb2dpbi1uYXYnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbGF5b3V0L3Bvc3Rsb2dpbi9wb3N0bG9naW4ubmF2LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTLCBOZ0NsYXNzXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdExvZ2luTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzaG93RHJvcGRvd246Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdXNlcjpJVXNlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuY3VycmVudFVzZXIuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlcicsdXNlcik7XHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXJcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRHJvcERvd24oKXtcclxuICAgICAgICB0aGlzLnNob3dEcm9wZG93biA9ICF0aGlzLnNob3dEcm9wZG93bjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2lnbm91dCgpe1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
