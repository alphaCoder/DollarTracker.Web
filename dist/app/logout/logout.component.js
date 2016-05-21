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
            let LogoutComponent = class LogoutComponent {
                constructor(_router, _userService) {
                    this._router = _router;
                    this._userService = _userService;
                }
                signout() {
                    this._userService.clear();
                    this._router.navigateByUrl('/login');
                }
            };
            LogoutComponent = __decorate([
                core_1.Component({
                    selector: 'logout',
                    template: `<a (click)="signout()">Sign Out</a>`
                }), 
                __metadata('design:paramtypes', [Router_1.Router, user_service_1.UserService])
            ], LogoutComponent);
            exports_1("LogoutComponent", LogoutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC9sb2dvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQ0ksWUFBb0IsT0FBYyxFQUFVLFlBQXdCO29CQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO2dCQUFJLENBQUM7Z0JBRXpFLE9BQU87b0JBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7WUFDTCxDQUFDO1lBWEQ7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLHFDQUFxQztpQkFDbEQsQ0FBQzs7K0JBQUE7WUFDRiw2Q0FPQyxDQUFBIiwiZmlsZSI6ImxvZ291dC9sb2dvdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9Sb3V0ZXInXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbG9nb3V0JyxcclxuICAgIHRlbXBsYXRlOiBgPGEgKGNsaWNrKT1cInNpZ25vdXQoKVwiPlNpZ24gT3V0PC9hPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ291dENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyLCBwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkgeyB9XHJcblxyXG4gICAgc2lnbm91dCgpe1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
