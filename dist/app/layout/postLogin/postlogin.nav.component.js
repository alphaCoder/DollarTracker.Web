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
                    directives: [common_1.NgClass, expenseStory_component_1.ExpenseStoryComponent],
                }), 
                __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, notifications_service_1.NotificationsService])
            ], PostLoginNavComponent);
            exports_1("PostLoginNavComponent", PostLoginNavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9wb3N0TG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFFSSxZQUFvQixPQUFjLEVBQVUsWUFBd0IsRUFDeEQscUJBQTBDO29CQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUN4RCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXFCO29CQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSTt3QkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO29CQUNwQixDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVGLFFBQVEsS0FBSyxDQUFDO2dCQUNkLE9BQU87b0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztZQUNMLENBQUM7WUFuQkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixXQUFXLEVBQUUsbURBQW1EO29CQUNoRSxVQUFVLEVBQUMsQ0FBQyxnQkFBTyxFQUFDLDhDQUFxQixDQUFDO2lCQUM3QyxDQUFDOztxQ0FBQTtZQUNGLHlEQWNDLENBQUEiLCJmaWxlIjoibGF5b3V0L3Bvc3RMb2dpbi9wb3N0bG9naW4ubmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge05nQ2xhc3N9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vdXNlci91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7SVVzZXJ9IGZyb20gJy4uLy4uL2xvZ2luL2xvZ2lucmVzcG9uc2UnXHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5Q29tcG9uZW50fSBmcm9tICcuLi8uLi9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwb3N0LWxvZ2luLW5hdicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sYXlvdXQvcG9zdGxvZ2luL3Bvc3Rsb2dpbi5uYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbTmdDbGFzcyxFeHBlbnNlU3RvcnlDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdExvZ2luTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHVzZXI6SVVzZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyLCBwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSwgXHJcbiAgICAgICAgcHJpdmF0ZSBfbm90aWZpY2F0aW9uc1NlcnZpY2U6Tm90aWZpY2F0aW9uc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5jdXJyZW50VXNlci5zdWJzY3JpYmUodXNlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyJyx1c2VyKTtcclxuICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlclxyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG4gICAgc2lnbm91dCgpe1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
