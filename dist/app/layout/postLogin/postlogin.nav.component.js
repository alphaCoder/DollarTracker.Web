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
                    this._userService.clear();
                    this._router.navigate(['/']);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9wb3N0TG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFHSSxZQUFvQixPQUFjLEVBQVUsWUFBd0I7b0JBQWhELFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBRjdELGlCQUFZLEdBQVcsS0FBSyxDQUFDO29CQUdoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSTt3QkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO29CQUNwQixDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVGLFFBQVEsS0FBSyxDQUFDO2dCQUVQLGNBQWM7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUMzQyxDQUFDO2dCQUVELE9BQU87b0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO1lBQ0wsQ0FBQztZQXpCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSxtREFBbUQ7b0JBQ2hFLFVBQVUsRUFBQyxDQUFDLGdCQUFPLENBQUM7aUJBQ3ZCLENBQUM7O3FDQUFBO1lBQ0YseURBb0JDLENBQUEiLCJmaWxlIjoibGF5b3V0L3Bvc3RMb2dpbi9wb3N0bG9naW4ubmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnR7TmdDbGFzc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi91c2VyL3VzZXIuc2VydmljZSdcclxuaW1wb3J0IHtJVXNlcn0gZnJvbSAnLi4vLi4vbG9naW4vbG9naW5yZXNwb25zZSdcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Bvc3QtbG9naW4tbmF2JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2xheW91dC9wb3N0bG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltOZ0NsYXNzXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdExvZ2luTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzaG93RHJvcGRvd246Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdXNlcjpJVXNlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuY3VycmVudFVzZXIuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlcicsdXNlcik7XHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXJcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRHJvcERvd24oKXtcclxuICAgICAgICB0aGlzLnNob3dEcm9wZG93biA9ICF0aGlzLnNob3dEcm9wZG93bjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2lnbm91dCgpe1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
