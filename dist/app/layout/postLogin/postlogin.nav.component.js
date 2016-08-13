System.register(['@angular/core', '@angular/router', '@angular/common', '../../user/user.service', '../../expenseStory/expenseStory.component', '../../shared/notifications/notifications.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, user_service_1, expenseStory_component_1, notifications_service_1;
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
            },
            function (expenseStory_component_1_1) {
                expenseStory_component_1 = expenseStory_component_1_1;
            },
            function (notifications_service_1_1) {
                notifications_service_1 = notifications_service_1_1;
            }],
        execute: function() {
            let PostLoginNavComponent = class PostLoginNavComponent {
                constructor(_router, _userService, _notificationsService) {
                    this._router = _router;
                    this._userService = _userService;
                    this._notificationsService = _notificationsService;
                    this._userService.currentUser.subscribe(user => {
                        console.log('user', user);
                        this.user = user;
                    });
                }
                ngOnInit() { }
                signout() {
                    this._userService.logout();
                }
            };
            PostLoginNavComponent = __decorate([
                core_1.Component({
                    selector: 'post-login-nav',
                    templateUrl: 'app/layout/postlogin/postlogin.nav.component.html',
                    directives: [common_1.NgClass, expenseStory_component_1.ExpenseStoryComponent, router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, notifications_service_1.NotificationsService])
            ], PostLoginNavComponent);
            exports_1("PostLoginNavComponent", PostLoginNavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9wb3N0TG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFFSSxZQUFvQixPQUFjLEVBQVUsWUFBd0IsRUFDeEQscUJBQTBDO29CQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUN4RCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXFCO29CQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSTt3QkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO29CQUNwQixDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVGLFFBQVEsS0FBSyxDQUFDO2dCQUNkLE9BQU87b0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztZQUNMLENBQUM7WUFuQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsbURBQW1EO29CQUNoRSxVQUFVLEVBQUMsQ0FBQyxnQkFBTyxFQUFDLDhDQUFxQixFQUFFLDBCQUFpQixDQUFDO2lCQUNoRSxDQUFDOztxQ0FBQTtZQUNGLHlEQWNDLENBQUEiLCJmaWxlIjoibGF5b3V0L3Bvc3RMb2dpbi9wb3N0bG9naW4ubmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtOZ0NsYXNzfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uLy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge0lVc2VyfSBmcm9tICcuLi8uLi9sb2dpbi9sb2dpbnJlc3BvbnNlJ1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbnNTZXJ2aWNlfSBmcm9tICcuLi8uLi9zaGFyZWQvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Bvc3QtbG9naW4tbmF2JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2xheW91dC9wb3N0bG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltOZ0NsYXNzLEV4cGVuc2VTdG9yeUNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0TG9naW5OYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdXNlcjpJVXNlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIF9ub3RpZmljYXRpb25zU2VydmljZTpOb3RpZmljYXRpb25zU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmN1cnJlbnRVc2VyLnN1YnNjcmliZSh1c2VyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXInLHVzZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcbiAgICBzaWdub3V0KCl7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
