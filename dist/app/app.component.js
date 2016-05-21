System.register(['@angular/core', '@angular/router', './login/login.component', './signup/signup.component', './dashboard/dashboard.component', './layout/topnav/topnav.component'], function(exports_1, context_1) {
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
    var core_1, router_1, login_component_1, signup_component_1, dashboard_component_1, topnav_component_1;
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
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (topnav_component_1_1) {
                topnav_component_1 = topnav_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor() {
                    this.pageTitle = 'Dollar Tracker';
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'dt-app',
                    template: `
 <div>
       <top-nav></top-nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
   </div>
 `,
                    directives: [router_1.ROUTER_DIRECTIVES, topnav_component_1.TopNavComponent]
                }),
                router_1.Routes([
                    { path: '/', component: dashboard_component_1.DashboardComponent },
                    { path: '/login', component: login_component_1.LoginComponent },
                    { path: '/signup', component: signup_component_1.SignupComponent },
                    { path: '/dashboard', component: dashboard_component_1.DashboardComponent }
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBR0U7b0JBRkEsY0FBUyxHQUFVLGdCQUFnQixDQUFDO2dCQUV0QixDQUFDO1lBQ2pCLENBQUM7WUF0QkQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFOzs7Ozs7O0VBT1Y7b0JBQ0QsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUMsa0NBQWUsQ0FBQztpQkFDOUMsQ0FBQztnQkFDRCxlQUFNLENBQUM7b0JBQ04sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSx3Q0FBa0IsRUFBRTtvQkFDNUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO29CQUM3QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUcsU0FBUyxFQUFFLGtDQUFlLEVBQUU7b0JBQ2hELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUU7aUJBQ3RELENBQUM7OzRCQUFBO1lBQ0YsdUNBSUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQscHJvdmlkZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlMsSHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMsIFJvdXRlcywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1N1YmplY3QsIEJlaGF2aW9yU3ViamVjdCxPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vdXNlci91c2VyLnNlcnZpY2UnXHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50J1xyXG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCdcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnXHJcbmltcG9ydCB7VG9wTmF2Q29tcG9uZW50fSBmcm9tICcuL2xheW91dC90b3BuYXYvdG9wbmF2LmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHQtYXBwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gPGRpdj5cclxuICAgICAgIDx0b3AtbmF2PjwvdG9wLW5hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjb250YWluZXInPlxyXG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gYCxcclxuIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTLFRvcE5hdkNvbXBvbmVudF1cclxufSlcclxuQFJvdXRlcyhbXHJcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50IH0sICBcclxuICB7IHBhdGg6ICcvbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnL3NpZ251cCcsICBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJy9kYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCB9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHBhZ2VUaXRsZTogc3RyaW5nID0nRG9sbGFyIFRyYWNrZXInO1xyXG4gIGlzQXV0aGVudGljYXRlZDpib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKCl7fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
