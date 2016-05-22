System.register(['@angular/core', '@angular/router', '../../user/user.service', '../topnav/topnav.component', '../../login/login.component', '../../dashboard/dashboard.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, topnav_component_1, login_component_1, dashboard_component_1;
    var AppBodyComponent;
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
            function (topnav_component_1_1) {
                topnav_component_1 = topnav_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            let AppBodyComponent = class AppBodyComponent {
                constructor(_userService) {
                    this._userService = _userService;
                    _userService.isAuthenticated.subscribe(isAuthenticated => {
                        console.log('is authenticated', isAuthenticated);
                        this.isAuthenticated = isAuthenticated;
                    });
                    this._userService.init();
                }
            };
            AppBodyComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/layout/appbody/appbody.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES, topnav_component_1.TopNavComponent, login_component_1.LoginComponent, dashboard_component_1.DashboardComponent],
                    selector: 'app-body'
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService])
            ], AppBodyComponent);
            exports_1("AppBodyComponent", AppBodyComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9hcHBib2R5L2FwcGJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBRUksWUFBbUIsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUUzQyxZQUFZLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxlQUFlO3dCQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxDQUFDO3dCQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztvQkFDekMsQ0FBQyxDQUFDLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsQ0FBQztZQUNILENBQUM7WUFmRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFdBQVcsRUFBRSwyQ0FBMkM7b0JBQ3hELFVBQVUsRUFBQyxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLEVBQUUsZ0NBQWMsRUFBRSx3Q0FBa0IsQ0FBQztvQkFDbkYsUUFBUSxFQUFDLFVBQVU7aUJBQ3RCLENBQUM7O2dDQUFBO1lBQ0YsK0NBVUMsQ0FBQSIsImZpbGUiOiJsYXlvdXQvYXBwYm9keS9hcHBib2R5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi91c2VyL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7VG9wTmF2Q29tcG9uZW50fSBmcm9tICcuLi90b3BuYXYvdG9wbmF2LmNvbXBvbmVudCdcclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi4vLi4vbG9naW4vbG9naW4uY29tcG9uZW50J1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi4vLi4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbGF5b3V0L2FwcGJvZHkvYXBwYm9keS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgVG9wTmF2Q29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgRGFzaGJvYXJkQ29tcG9uZW50XSxcclxuICAgIHNlbGVjdG9yOidhcHAtYm9keSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcEJvZHlDb21wb25lbnQge1xyXG4gICAgcHVibGljIGlzQXV0aGVudGljYXRlZDpib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xyXG4gICBcclxuICAgIF91c2VyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQuc3Vic2NyaWJlKGlzQXV0aGVudGljYXRlZD0+e1xyXG4gICAgICBjb25zb2xlLmxvZygnaXMgYXV0aGVudGljYXRlZCcsIGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgfSk7XHJcbiAgICAgdGhpcy5fdXNlclNlcnZpY2UuaW5pdCgpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
