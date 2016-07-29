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
    
  </div>`,
                    directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent, topnav_component_1.TopNavComponent, ng2_slim_loading_bar_1.SlimLoadingBar],
                    providers: [http_1.HTTP_PROVIDERS]
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBR0ksWUFBbUIsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUY3QyxjQUFTLEdBQVUsZ0JBQWdCLENBQUM7b0JBSWxDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWU7d0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO29CQUN6QyxDQUFDLEVBQUUsQ0FBQyxLQUFTO29CQUNiLENBQUMsQ0FBQyxDQUFDO29CQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7WUFDSCxDQUFDO1lBNUJEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7O1NBU0g7b0JBQ1IsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUUsZ0NBQWMsRUFBQyxrQ0FBZSxFQUFFLHFDQUFjLENBQUM7b0JBQzlFLFNBQVMsRUFBQyxDQUFDLHFCQUFjLENBQUM7aUJBQzFCLENBQUM7OzRCQUFBO1lBRUYsdUNBWUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QsT2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCdcclxuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnXHJcbmltcG9ydCB7VG9wTmF2Q29tcG9uZW50fSBmcm9tICcuL2xheW91dC90b3BuYXYvdG9wbmF2LmNvbXBvbmVudCdcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi91c2VyL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tICcuL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtTbGltTG9hZGluZ0JhclNlcnZpY2UsIFNsaW1Mb2FkaW5nQmFyfSBmcm9tICduZzItc2xpbS1sb2FkaW5nLWJhci9uZzItc2xpbS1sb2FkaW5nLWJhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2R0LWFwcCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2PlxyXG4gICAgPGRpdiAqbmdJZj1cImlzQXV0aGVudGljYXRlZFwiPiBcclxuICAgICAgIDx0b3AtbmF2PjwvdG9wLW5hdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nMi1zbGltLWxvYWRpbmctYmFyPjwvbmcyLXNsaW0tbG9hZGluZy1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPSdjb250YWluZXInPlxyXG4gICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICA8L2Rpdj5gLFxyXG4gZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVMsIExvZ2luQ29tcG9uZW50LFRvcE5hdkNvbXBvbmVudCwgU2xpbUxvYWRpbmdCYXJdLFxyXG4gcHJvdmlkZXJzOltIVFRQX1BST1ZJREVSU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHBhZ2VUaXRsZTogc3RyaW5nID0nRG9sbGFyIFRyYWNrZXInO1xyXG4gIGlzQXV0aGVudGljYXRlZDpib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xyXG4gICBcclxuICAgIF91c2VyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQuc3Vic2NyaWJlKGlzQXV0aGVudGljYXRlZD0+e1xyXG4gICAgICBjb25zb2xlLmxvZygnaXMgYXV0aGVudGljYXRlZCcsIGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xyXG4gICAgfSwgKGVycm9yOmFueSkgPT57XHJcbiAgICB9KTtcclxuICAgICB0aGlzLl91c2VyU2VydmljZS5pbml0KCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
