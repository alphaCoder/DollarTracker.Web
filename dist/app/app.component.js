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
   <div *ngIf="!isAuthenticated">
      <login></login>
    </div>    
     
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQ0E7Z0JBR0ksWUFBbUIsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUY3QyxjQUFTLEdBQVUsZ0JBQWdCLENBQUM7b0JBSWxDLFlBQVksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGVBQWU7d0JBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO29CQUN6QyxDQUFDLEVBQUUsQ0FBQyxLQUFTO29CQUNiLENBQUMsQ0FBQyxDQUFDO29CQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzVCLENBQUM7WUFDSCxDQUFDO1lBaENEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztTQWFIO29CQUNSLFVBQVUsRUFBQyxDQUFDLDBCQUFpQixFQUFFLGdDQUFjLEVBQUMsa0NBQWUsRUFBRSxxQ0FBYyxDQUFDO29CQUM5RSxTQUFTLEVBQUMsQ0FBQyxxQkFBYyxDQUFDO2lCQUMxQixDQUFDOzs0QkFBQTtZQUVGLHVDQVlDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsICBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7U3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LE9ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5cclxuaW1wb3J0IHtMb2dpbkNvbXBvbmVudH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnXHJcbmltcG9ydCB7RGFzaGJvYXJkQ29tcG9uZW50fSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50J1xyXG5pbXBvcnQge1RvcE5hdkNvbXBvbmVudH0gZnJvbSAnLi9sYXlvdXQvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQnXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4vdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JlcG9ydENvbXBvbmVudH0gZnJvbSAnLi9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2xpbUxvYWRpbmdCYXJTZXJ2aWNlLCBTbGltTG9hZGluZ0Jhcn0gZnJvbSAnbmcyLXNsaW0tbG9hZGluZy1iYXIvbmcyLXNsaW0tbG9hZGluZy1iYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkdC1hcHAnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdj5cclxuICAgPGRpdiAqbmdJZj1cIiFpc0F1dGhlbnRpY2F0ZWRcIj5cclxuICAgICAgPGxvZ2luPjwvbG9naW4+XHJcbiAgICA8L2Rpdj4gICAgXHJcbiAgICAgXHJcbiAgICA8ZGl2ICpuZ0lmPVwiaXNBdXRoZW50aWNhdGVkXCI+IFxyXG4gICAgICAgPHRvcC1uYXY+PC90b3AtbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmcyLXNsaW0tbG9hZGluZy1iYXI+PC9uZzItc2xpbS1sb2FkaW5nLWJhcj5cclxuICAgIDxkaXYgY2xhc3M9J2NvbnRhaW5lcic+XHJcbiAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIDwvZGl2PmAsXHJcbiBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgTG9naW5Db21wb25lbnQsVG9wTmF2Q29tcG9uZW50LCBTbGltTG9hZGluZ0Jhcl0sXHJcbiBwcm92aWRlcnM6W0hUVFBfUFJPVklERVJTXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgcGFnZVRpdGxlOiBzdHJpbmcgPSdEb2xsYXIgVHJhY2tlcic7XHJcbiAgaXNBdXRoZW50aWNhdGVkOmJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XHJcbiAgIFxyXG4gICAgX3VzZXJTZXJ2aWNlLmlzQXV0aGVudGljYXRlZC5zdWJzY3JpYmUoaXNBdXRoZW50aWNhdGVkPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpcyBhdXRoZW50aWNhdGVkJywgaXNBdXRoZW50aWNhdGVkKTtcclxuICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9LCAoZXJyb3I6YW55KSA9PntcclxuICAgIH0pO1xyXG4gICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmluaXQoKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
