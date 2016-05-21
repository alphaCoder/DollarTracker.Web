System.register(['@angular/core', '@angular/router', '../postlogin/postlogin.nav.component', '../../user/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, postlogin_nav_component_1, user_service_1;
    var TopNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (postlogin_nav_component_1_1) {
                postlogin_nav_component_1 = postlogin_nav_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let TopNavComponent = class TopNavComponent {
                constructor(_userService, _router) {
                    this._userService = _userService;
                    this._router = _router;
                    _userService.isAuthenticated.subscribe(isAuthenticated => {
                        console.log('is authenticated', isAuthenticated);
                        this.isAuthenticated = isAuthenticated;
                        if (!isAuthenticated) {
                            this._router.navigateByUrl('/login');
                        }
                    });
                    this._userService.init();
                }
            };
            TopNavComponent = __decorate([
                core_1.Component({
                    selector: 'top-nav',
                    templateUrl: 'app/layout/topnav/topnav.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES, postlogin_nav_component_1.PostLoginNavComponent]
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
            ], TopNavComponent);
            exports_1("TopNavComponent", TopNavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC90b3BuYXYvdG9wbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVJLFlBQW1CLFlBQXdCLEVBQVUsT0FBYztvQkFBaEQsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFFbkUsWUFBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsZUFBZTt3QkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7d0JBQ3ZDLEVBQUUsQ0FBQSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUEsQ0FBQzs0QkFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztZQUNGLENBQUM7WUFsQkY7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsV0FBVyxFQUFFLHlDQUF5QztvQkFDdEQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUMsK0NBQXFCLENBQUM7aUJBQ3hELENBQUM7OytCQUFBO1lBQ0YsNkNBYUUsQ0FBQSIsImZpbGUiOiJsYXlvdXQvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcixST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQge1Bvc3RMb2dpbk5hdkNvbXBvbmVudH0gZnJvbSAnLi4vcG9zdGxvZ2luL3Bvc3Rsb2dpbi5uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vdXNlci91c2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RvcC1uYXYnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbGF5b3V0L3RvcG5hdi90b3BuYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLFBvc3RMb2dpbk5hdkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvcE5hdkNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkOmJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6Um91dGVyKSB7XHJcbiAgIFxyXG4gICAgX3VzZXJTZXJ2aWNlLmlzQXV0aGVudGljYXRlZC5zdWJzY3JpYmUoaXNBdXRoZW50aWNhdGVkPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpcyBhdXRoZW50aWNhdGVkJywgaXNBdXRoZW50aWNhdGVkKTtcclxuICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICAgIGlmKCFpc0F1dGhlbnRpY2F0ZWQpe1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAgdGhpcy5fdXNlclNlcnZpY2UuaW5pdCgpO1xyXG4gIH1cclxuIH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
