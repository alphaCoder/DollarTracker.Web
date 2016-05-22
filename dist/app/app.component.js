System.register(['@angular/core', '@angular/router', './login/login.component', './dashboard/dashboard.component', './layout/topnav/topnav.component', './user/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, login_component_1, dashboard_component_1, topnav_component_1, user_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (topnav_component_1_1) {
                topnav_component_1 = topnav_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(_userService) {
                    this._userService = _userService;
                    this.pageTitle = 'Dollar Tracker';
                    _userService.isAuthenticated.subscribe(isAuthenticated => {
                        console.log('is authenticated', isAuthenticated);
                        this.isAuthenticated = isAuthenticated;
                    });
                    this._userService.init();
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'dt-app',
                    template: `<div>
   <div *ngIf="!isAuthenticated">
      <login></login>
    </div>    
     
    <div *ngIf="isAuthenticated"> 
       <top-nav></top-nav>
   </div>
    <div class='container'>
       <router-outlet></router-outlet>
    </div>
  </div>`,
                    directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent, topnav_component_1.TopNavComponent]
                }),
                router_1.Routes([
                    { path: '/dashboard', component: dashboard_component_1.DashboardComponent }
                ]), 
                __metadata('design:paramtypes', [user_service_1.UserService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBR0ksWUFBbUIsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUY3QyxjQUFTLEdBQVUsZ0JBQWdCLENBQUM7b0JBSWxDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWU7d0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztvQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixDQUFDO1lBQ0gsQ0FBQztZQTlCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O1NBV0g7b0JBQ1IsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUUsZ0NBQWMsRUFBQyxrQ0FBZSxDQUFDO2lCQUM5RCxDQUFDO2dCQUNELGVBQU0sQ0FBQztvQkFDTixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO2lCQUN0RCxDQUFDOzs0QkFBQTtZQUNGLHVDQVdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LHByb3ZpZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTLEh0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QsT2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCdcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnXHJcbmltcG9ydCB7VG9wTmF2Q29tcG9uZW50fSBmcm9tICcuL2xheW91dC90b3BuYXYvdG9wbmF2LmNvbXBvbmVudCdcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2R0LWFwcCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2PlxyXG4gICA8ZGl2ICpuZ0lmPVwiIWlzQXV0aGVudGljYXRlZFwiPlxyXG4gICAgICA8bG9naW4+PC9sb2dpbj5cclxuICAgIDwvZGl2PiAgICBcclxuICAgICBcclxuICAgIDxkaXYgKm5nSWY9XCJpc0F1dGhlbnRpY2F0ZWRcIj4gXHJcbiAgICAgICA8dG9wLW5hdj48L3RvcC1uYXY+XHJcbiAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz0nY29udGFpbmVyJz5cclxuICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmAsXHJcbiBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgTG9naW5Db21wb25lbnQsVG9wTmF2Q29tcG9uZW50XVxyXG59KVxyXG5AUm91dGVzKFtcclxuICB7IHBhdGg6ICcvZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSAgXHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHBhZ2VUaXRsZTogc3RyaW5nID0nRG9sbGFyIFRyYWNrZXInO1xyXG4gIGlzQXV0aGVudGljYXRlZDpib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xyXG4gICBcclxuICAgIF91c2VyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQuc3Vic2NyaWJlKGlzQXV0aGVudGljYXRlZD0+e1xyXG4gICAgICBjb25zb2xlLmxvZygnaXMgYXV0aGVudGljYXRlZCcsIGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgfSk7XHJcbiAgICAgdGhpcy5fdXNlclNlcnZpY2UuaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
