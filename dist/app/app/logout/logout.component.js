System.register(['@angular/core', '@angular/Router', '../user/user.service'], function(exports_1, context_1) {
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
    var core_1, Router_1, user_service_1;
    var LogoutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Router_1_1) {
                Router_1 = Router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            LogoutComponent = (function () {
                function LogoutComponent(_router, _userService) {
                    this._router = _router;
                    this._userService = _userService;
                }
                LogoutComponent.prototype.signout = function () {
                    this._userService.clear();
                    this._router.navigate(['/']);
                };
                LogoutComponent = __decorate([
                    core_1.Component({
                        selector: 'logout',
                        template: "<a (click)=\"signout()\">Sign Out</a>"
                    }), 
                    __metadata('design:paramtypes', [Router_1.Router, user_service_1.UserService])
                ], LogoutComponent);
                return LogoutComponent;
            }());
            exports_1("LogoutComponent", LogoutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUNJLHlCQUFvQixPQUFjLEVBQVUsWUFBd0I7b0JBQWhELFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQVk7Z0JBQUksQ0FBQztnQkFFekUsaUNBQU8sR0FBUDtvQkFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBVkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHVDQUFxQztxQkFDbEQsQ0FBQzs7bUNBQUE7Z0JBUUYsc0JBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELDZDQU9DLENBQUEiLCJmaWxlIjoiYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9Sb3V0ZXInXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9nb3V0JyxcclxuICAgIHRlbXBsYXRlOiBgPGEgKGNsaWNrKT1cInNpZ25vdXQoKVwiPlNpZ24gT3V0PC9hPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyLCBwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkgeyB9XHJcblxyXG4gICAgc2lnbm91dCgpe1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnLyddKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
