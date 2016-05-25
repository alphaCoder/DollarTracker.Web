System.register(['@angular/core', '@angular/router', './login/login.component', './dashboard/dashboard.component', './layout/topnav/topnav.component', './user/user.service', './report/report.component'], function(exports_1, context_1) {
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
    var core_1, router_1, login_component_1, dashboard_component_1, topnav_component_1, user_service_1, report_component_1;
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
            },
            function (report_component_1_1) {
                report_component_1 = report_component_1_1;
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
                    { path: '/dashboard', component: dashboard_component_1.DashboardComponent },
                    { path: '/report', component: report_component_1.ReportComponent }
                ]), 
                __metadata('design:paramtypes', [user_service_1.UserService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQkE7Z0JBR0ksWUFBbUIsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUY3QyxjQUFTLEdBQVUsZ0JBQWdCLENBQUM7b0JBSWxDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWU7d0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO29CQUN6QyxDQUFDLENBQUMsQ0FBQztvQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixDQUFDO1lBQ0gsQ0FBQztZQS9CRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O1NBV0g7b0JBQ1IsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUUsZ0NBQWMsRUFBQyxrQ0FBZSxDQUFDO2lCQUM5RCxDQUFDO2dCQUNELGVBQU0sQ0FBQztvQkFDTixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO29CQUNyRCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7aUJBQzlDLENBQUM7OzRCQUFBO1lBQ0YsdUNBV0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQscHJvdmlkZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlMsSHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1N1YmplY3QsIEJlaGF2aW9yU3ViamVjdCxPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50J1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCdcclxuaW1wb3J0IHtUb3BOYXZDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0L3RvcG5hdi90b3BuYXYuY29tcG9uZW50J1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtSZXBvcnRDb21wb25lbnR9IGZyb20gJy4vcmVwb3J0L3JlcG9ydC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkdC1hcHAnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdj5cclxuICAgPGRpdiAqbmdJZj1cIiFpc0F1dGhlbnRpY2F0ZWRcIj5cclxuICAgICAgPGxvZ2luPjwvbG9naW4+XHJcbiAgICA8L2Rpdj4gICAgXHJcbiAgICAgXHJcbiAgICA8ZGl2ICpuZ0lmPVwiaXNBdXRoZW50aWNhdGVkXCI+IFxyXG4gICAgICAgPHRvcC1uYXY+PC90b3AtbmF2PlxyXG4gICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XHJcbiAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gLFxyXG4gZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVMsIExvZ2luQ29tcG9uZW50LFRvcE5hdkNvbXBvbmVudF1cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgeyBwYXRoOiAnL2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH0sXHJcbiAge3BhdGg6ICcvcmVwb3J0JywgY29tcG9uZW50OiBSZXBvcnRDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHBhZ2VUaXRsZTogc3RyaW5nID0nRG9sbGFyIFRyYWNrZXInO1xyXG4gIGlzQXV0aGVudGljYXRlZDpib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xyXG4gICBcclxuICAgIF91c2VyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQuc3Vic2NyaWJlKGlzQXV0aGVudGljYXRlZD0+e1xyXG4gICAgICBjb25zb2xlLmxvZygnaXMgYXV0aGVudGljYXRlZCcsIGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgfSk7XHJcbiAgICAgdGhpcy5fdXNlclNlcnZpY2UuaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
