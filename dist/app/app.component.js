System.register(['@angular/core', '@angular/router', './layout/appbody/appbody.component', './login/login.component', './dashboard/dashboard.component', './layout/topnav/topnav.component', './user/user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, appbody_component_1, login_component_1, dashboard_component_1, topnav_component_1, user_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (appbody_component_1_1) {
                appbody_component_1 = appbody_component_1_1;
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
                    directives: [router_1.ROUTER_DIRECTIVES, appbody_component_1.AppBodyComponent, login_component_1.LoginComponent, topnav_component_1.TopNavComponent]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBR0ksWUFBbUIsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUY3QyxjQUFTLEdBQVUsZ0JBQWdCLENBQUM7b0JBSWxDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWU7d0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztvQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixDQUFDO1lBQ0gsQ0FBQztZQTlCRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O1NBV0g7b0JBQ1IsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUMsb0NBQWdCLEVBQUUsZ0NBQWMsRUFBQyxrQ0FBZSxDQUFDO2lCQUMvRSxDQUFDO2dCQUNELGVBQU0sQ0FBQztvQkFDTixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO2lCQUN0RCxDQUFDOzs0QkFBQTtZQUNGLHVDQVdDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LHByb3ZpZGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTLEh0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QsT2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQge0FwcEJvZHlDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0L2FwcGJvZHkvYXBwYm9keS5jb21wb25lbnQnXHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50J1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCdcclxuaW1wb3J0IHtUb3BOYXZDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0L3RvcG5hdi90b3BuYXYuY29tcG9uZW50J1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHQtYXBwJyxcclxuICB0ZW1wbGF0ZTogYDxkaXY+XHJcbiAgIDxkaXYgKm5nSWY9XCIhaXNBdXRoZW50aWNhdGVkXCI+XHJcbiAgICAgIDxsb2dpbj48L2xvZ2luPlxyXG4gICAgPC9kaXY+ICAgIFxyXG4gICAgIFxyXG4gICAgPGRpdiAqbmdJZj1cImlzQXV0aGVudGljYXRlZFwiPiBcclxuICAgICAgIDx0b3AtbmF2PjwvdG9wLW5hdj5cclxuICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gLFxyXG4gZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVMsQXBwQm9keUNvbXBvbmVudCwgTG9naW5Db21wb25lbnQsVG9wTmF2Q29tcG9uZW50XVxyXG59KVxyXG5AUm91dGVzKFtcclxuICB7IHBhdGg6ICcvZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQgfSAgXHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHBhZ2VUaXRsZTogc3RyaW5nID0nRG9sbGFyIFRyYWNrZXInO1xyXG4gIGlzQXV0aGVudGljYXRlZDpib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xyXG4gICBcclxuICAgIF91c2VyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQuc3Vic2NyaWJlKGlzQXV0aGVudGljYXRlZD0+e1xyXG4gICAgICBjb25zb2xlLmxvZygnaXMgYXV0aGVudGljYXRlZCcsIGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgfSk7XHJcbiAgICAgdGhpcy5fdXNlclNlcnZpY2UuaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
