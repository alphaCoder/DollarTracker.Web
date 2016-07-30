System.register(['@angular/core', '@angular/router', '@angular/common', '../../user/user.service', '../../expenseStory/expenseStory.component'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, user_service_1, expenseStory_component_1;
    var PostLoginNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (expenseStory_component_1_1) {
                expenseStory_component_1 = expenseStory_component_1_1;
            }],
        execute: function() {
            let PostLoginNavComponent = class PostLoginNavComponent {
                constructor(_router, _userService) {
                    this._router = _router;
                    this._userService = _userService;
                    this.showDropdown = false;
                    this.showDropdown1 = false;
                    this._userService.currentUser.subscribe(user => {
                        console.log('user', user);
                        this.user = user;
                    });
                }
                ngOnInit() { }
                toggleDropDown() {
                    this.showDropdown = !this.showDropdown;
                }
                toggleDropDown1() {
                    this.showDropdown1 = !this.showDropdown1;
                }
                signout() {
                    this._userService.logout();
                }
            };
            PostLoginNavComponent = __decorate([
                core_1.Component({
                    selector: 'post-login-nav',
                    templateUrl: 'app/layout/postlogin/postlogin.nav.component.html',
                    directives: [common_1.NgClass, expenseStory_component_1.ExpenseStoryComponent]
                }), 
                __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
            ], PostLoginNavComponent);
            exports_1("PostLoginNavComponent", PostLoginNavComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9wb3N0TG9naW4vcG9zdGxvZ2luLm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFJSSxZQUFvQixPQUFjLEVBQVUsWUFBd0I7b0JBQWhELFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBSDdELGlCQUFZLEdBQVcsS0FBSyxDQUFDO29CQUM3QixrQkFBYSxHQUFXLEtBQUssQ0FBQztvQkFHakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUk7d0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtvQkFDcEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRixRQUFRLEtBQUssQ0FBQztnQkFFUCxjQUFjO29CQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDM0MsQ0FBQztnQkFDTSxlQUFlO29CQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxPQUFPO29CQUNILElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQy9CLENBQUM7WUFDTCxDQUFDO1lBM0JEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsV0FBVyxFQUFFLG1EQUFtRDtvQkFDaEUsVUFBVSxFQUFDLENBQUMsZ0JBQU8sRUFBQyw4Q0FBcUIsQ0FBQztpQkFDN0MsQ0FBQzs7cUNBQUE7WUFDRix5REFzQkMsQ0FBQSIsImZpbGUiOiJsYXlvdXQvcG9zdExvZ2luL3Bvc3Rsb2dpbi5uYXYuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydHtOZ0NsYXNzfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uLy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5pbXBvcnQge0lVc2VyfSBmcm9tICcuLi8uLi9sb2dpbi9sb2dpbnJlc3BvbnNlJ1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeUNvbXBvbmVudH0gZnJvbSAnLi4vLi4vZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeS5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncG9zdC1sb2dpbi1uYXYnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbGF5b3V0L3Bvc3Rsb2dpbi9wb3N0bG9naW4ubmF2LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W05nQ2xhc3MsRXhwZW5zZVN0b3J5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9zdExvZ2luTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBzaG93RHJvcGRvd246Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNob3dEcm9wZG93bjE6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdXNlcjpJVXNlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuY3VycmVudFVzZXIuc3Vic2NyaWJlKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNlcicsdXNlcik7XHJcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXJcclxuICAgICAgICB9KTtcclxuICAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRHJvcERvd24oKXtcclxuICAgICAgICB0aGlzLnNob3dEcm9wZG93biA9ICF0aGlzLnNob3dEcm9wZG93bjtcclxuICAgIH1cclxuICAgIHB1YmxpYyB0b2dnbGVEcm9wRG93bjEoKXtcclxuICAgICAgICB0aGlzLnNob3dEcm9wZG93bjEgPSAhdGhpcy5zaG93RHJvcGRvd24xO1xyXG4gICAgfVxyXG4gICAgc2lnbm91dCgpe1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
