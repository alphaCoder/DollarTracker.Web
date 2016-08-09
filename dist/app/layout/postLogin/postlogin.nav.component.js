System.register(['@angular/core', '@angular/router', '@angular/common', '../../user/user.service', '../../expenseStory/expenseStory.component', '../../shared/notifications/notifications.service', '../../shared/notifications/pubnub.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, user_service_1, expenseStory_component_1, notifications_service_1, pubnub_service_1;
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
            },
            function (pubnub_service_1_1) {
                pubnub_service_1 = pubnub_service_1_1;
            }],
        execute: function() {
            let PostLoginNavComponent = class PostLoginNavComponent {
                constructor(_router, _userService, _notificationsService) {
                    this._router = _router;
                    this._userService = _userService;
                    this._notificationsService = _notificationsService;
                    this.showDropdown = false;
                    this.showDropdown1 = false;
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
                    providers: [notifications_service_1.NotificationsService, pubnub_service_1.PubnubService]
                }), 
                __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, notifications_service_1.NotificationsService])
            ], PostLoginNavComponent);
            exports_1("PostLoginNavComponent", PostLoginNavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9wb3N0TG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFJSSxZQUFvQixPQUFjLEVBQVUsWUFBd0IsRUFDeEQscUJBQTBDO29CQURsQyxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUN4RCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXFCO29CQUovQyxpQkFBWSxHQUFXLEtBQUssQ0FBQztvQkFDN0Isa0JBQWEsR0FBVyxLQUFLLENBQUM7b0JBSWpDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJO3dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7b0JBQ3BCLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUYsUUFBUSxLQUFLLENBQUM7Z0JBQ2QsT0FBTztvQkFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMvQixDQUFDO1lBQ0wsQ0FBQztZQXRCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFdBQVcsRUFBRSxtREFBbUQ7b0JBQ2hFLFVBQVUsRUFBQyxDQUFDLGdCQUFPLEVBQUMsOENBQXFCLENBQUM7b0JBQzFDLFNBQVMsRUFBQyxDQUFDLDRDQUFvQixFQUFFLDhCQUFhLENBQUM7aUJBQ2xELENBQUM7O3FDQUFBO1lBQ0YseURBZ0JDLENBQUEiLCJmaWxlIjoibGF5b3V0L3Bvc3RMb2dpbi9wb3N0bG9naW4ubmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge05nQ2xhc3N9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vdXNlci91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7SVVzZXJ9IGZyb20gJy4uLy4uL2xvZ2luL2xvZ2lucmVzcG9uc2UnXHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5Q29tcG9uZW50fSBmcm9tICcuLi8uLi9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uc1NlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XHJcbmltcG9ydCB7UHVibnViU2VydmljZX0gZnJvbSAnLi4vLi4vc2hhcmVkL25vdGlmaWNhdGlvbnMvcHVibnViLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9zdC1sb2dpbi1uYXYnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbGF5b3V0L3Bvc3Rsb2dpbi9wb3N0bG9naW4ubmF2LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W05nQ2xhc3MsRXhwZW5zZVN0b3J5Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczpbTm90aWZpY2F0aW9uc1NlcnZpY2UsIFB1Ym51YlNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3N0TG9naW5OYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIHNob3dEcm9wZG93bjpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgc2hvd0Ryb3Bkb3duMTpib29sZWFuID0gZmFsc2U7XHJcbiAgICB1c2VyOklVc2VyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgX25vdGlmaWNhdGlvbnNTZXJ2aWNlOk5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuY3VycmVudFVzZXIuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlcicsdXNlcik7XHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXJcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuICAgIHNpZ25vdXQoKXtcclxuICAgICAgICB0aGlzLl91c2VyU2VydmljZS5sb2dvdXQoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
