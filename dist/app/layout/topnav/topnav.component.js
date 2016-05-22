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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC90b3BuYXYvdG9wbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUNHO2dCQUFjLENBQUM7WUFDakIsQ0FBQztZQVBGO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFdBQVcsRUFBRSx5Q0FBeUM7b0JBQ3RELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFDLCtDQUFxQixDQUFDO2lCQUN4RCxDQUFDOzsrQkFBQTtZQUNGLDZDQUVFLENBQUEiLCJmaWxlIjoibGF5b3V0L3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcclxuaW1wb3J0IHtQb3N0TG9naW5OYXZDb21wb25lbnR9IGZyb20gJy4uL3Bvc3Rsb2dpbi9wb3N0bG9naW4ubmF2LmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3RvcC1uYXYnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbGF5b3V0L3RvcG5hdi90b3BuYXYuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLFBvc3RMb2dpbk5hdkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvcE5hdkNvbXBvbmVudCB7XHJcbiAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gfVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
