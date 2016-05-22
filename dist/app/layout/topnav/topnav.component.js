System.register(['@angular/core', '@angular/router', '../postlogin/postlogin.nav.component'], function(exports_1, context_1) {
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
    var core_1, router_1, postlogin_nav_component_1;
    var TopNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (postlogin_nav_component_1_1) {
                postlogin_nav_component_1 = postlogin_nav_component_1_1;
            }],
        execute: function() {
            let TopNavComponent = class TopNavComponent {
                constructor() {
                    this.pageTitle = 'Dollar Tracker';
                }
            };
            TopNavComponent = __decorate([
                core_1.Component({
                    selector: 'top-nav',
                    templateUrl: 'app/layout/topnav/topnav.component.html',
                    directives: [router_1.ROUTER_DIRECTIVES, postlogin_nav_component_1.PostLoginNavComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], TopNavComponent);
            exports_1("TopNavComponent", TopNavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC90b3BuYXYvdG9wbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUVHO29CQURBLGNBQVMsR0FBVSxnQkFBZ0IsQ0FBQztnQkFDdEIsQ0FBQztZQUNqQixDQUFDO1lBUkY7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsV0FBVyxFQUFFLHlDQUF5QztvQkFDdEQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUMsK0NBQXFCLENBQUM7aUJBQ3hELENBQUM7OytCQUFBO1lBQ0YsNkNBR0UsQ0FBQSIsImZpbGUiOiJsYXlvdXQvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcixST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQge1Bvc3RMb2dpbk5hdkNvbXBvbmVudH0gZnJvbSAnLi4vcG9zdGxvZ2luL3Bvc3Rsb2dpbi5uYXYuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndG9wLW5hdicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9sYXlvdXQvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsUG9zdExvZ2luTmF2Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9wTmF2Q29tcG9uZW50IHtcclxuICAgcGFnZVRpdGxlOiBzdHJpbmcgPSdEb2xsYXIgVHJhY2tlcic7XHJcbiAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
