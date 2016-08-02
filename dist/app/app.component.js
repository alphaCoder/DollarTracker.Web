System.register(['@angular/core', '@angular/http', '@angular/router', './login/login.component', './layout/topnav/topnav.component', './user/user.service', 'ng2-slim-loading-bar/ng2-slim-loading-bar'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, login_component_1, topnav_component_1, user_service_1, ng2_slim_loading_bar_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (topnav_component_1_1) {
                topnav_component_1 = topnav_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (ng2_slim_loading_bar_1_1) {
                ng2_slim_loading_bar_1 = ng2_slim_loading_bar_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(_userService) {
                    this._userService = _userService;
                    this.pageTitle = 'Dollar Tracker';
                    _userService.isAuthenticated.subscribe(isAuthenticated => {
                        console.log('is authenticated', isAuthenticated);
                        this.isAuthenticated = isAuthenticated;
                    }, (error) => {
                    });
                    this._userService.init();
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'dt-app',
                    template: `<div>
    <div *ngIf="isAuthenticated"> 
       <top-nav></top-nav>
    </div>
    <ng2-slim-loading-bar></ng2-slim-loading-bar>
    <div class='container'>
       <router-outlet></router-outlet>
    </div>
    
  </div>
  
  `,
                    directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent, topnav_component_1.TopNavComponent, ng2_slim_loading_bar_1.SlimLoadingBar],
                    providers: [http_1.HTTP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4QkE7Z0JBR0ksWUFBbUIsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUY3QyxjQUFTLEdBQVUsZ0JBQWdCLENBQUM7b0JBSWxDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWU7d0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO29CQUN6QyxDQUFDLEVBQUUsQ0FBQyxLQUFTO29CQUNiLENBQUMsQ0FBQyxDQUFDO29CQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7WUFDSCxDQUFDO1lBOUJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtvQkFDRixVQUFVLEVBQUMsQ0FBQywwQkFBaUIsRUFBRSxnQ0FBYyxFQUFDLGtDQUFlLEVBQUUscUNBQWMsQ0FBQztvQkFDOUUsU0FBUyxFQUFDLENBQUMscUJBQWMsQ0FBQztpQkFDMUIsQ0FBQzs7NEJBQUE7WUFFRix1Q0FZQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCAgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1N1YmplY3QsIEJlaGF2aW9yU3ViamVjdCxPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50J1xyXG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCdcclxuaW1wb3J0IHtUb3BOYXZDb21wb25lbnR9IGZyb20gJy4vbGF5b3V0L3RvcG5hdi90b3BuYXYuY29tcG9uZW50J1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtSZXBvcnRDb21wb25lbnR9IGZyb20gJy4vcmVwb3J0L3JlcG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NsaW1Mb2FkaW5nQmFyU2VydmljZSwgU2xpbUxvYWRpbmdCYXJ9IGZyb20gJ25nMi1zbGltLWxvYWRpbmctYmFyL25nMi1zbGltLWxvYWRpbmctYmFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHQtYXBwJyxcclxuICB0ZW1wbGF0ZTogYDxkaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiaXNBdXRoZW50aWNhdGVkXCI+IFxyXG4gICAgICAgPHRvcC1uYXY+PC90b3AtbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmcyLXNsaW0tbG9hZGluZy1iYXI+PC9uZzItc2xpbS1sb2FkaW5nLWJhcj5cclxuICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XHJcbiAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG4gIFxyXG4gIGAsXHJcbiBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgTG9naW5Db21wb25lbnQsVG9wTmF2Q29tcG9uZW50LCBTbGltTG9hZGluZ0Jhcl0sXHJcbiBwcm92aWRlcnM6W0hUVFBfUFJPVklERVJTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgcGFnZVRpdGxlOiBzdHJpbmcgPSdEb2xsYXIgVHJhY2tlcic7XHJcbiAgaXNBdXRoZW50aWNhdGVkOmJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XHJcbiAgIFxyXG4gICAgX3VzZXJTZXJ2aWNlLmlzQXV0aGVudGljYXRlZC5zdWJzY3JpYmUoaXNBdXRoZW50aWNhdGVkPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpcyBhdXRoZW50aWNhdGVkJywgaXNBdXRoZW50aWNhdGVkKTtcclxuICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9LCAoZXJyb3I6YW55KSA9PntcclxuICAgIH0pO1xyXG4gICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmluaXQoKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
