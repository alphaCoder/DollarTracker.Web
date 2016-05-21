System.register(['@angular/core', '../charts/chartdemo', '../charts/barchartdemo', '../user/user.service'], function(exports_1, context_1) {
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
    var core_1, chartdemo_1, barchartdemo_1, user_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chartdemo_1_1) {
                chartdemo_1 = chartdemo_1_1;
            },
            function (barchartdemo_1_1) {
                barchartdemo_1 = barchartdemo_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            let DashboardComponent = class DashboardComponent {
                constructor(_userService) {
                    this._userService = _userService;
                }
            };
            DashboardComponent = __decorate([
                core_1.Component({
                    templateUrl: 'app/dashboard/dashboard.component.html',
                    directives: [chartdemo_1.ChartDemo, barchartdemo_1.BarChartDemo]
                }), 
                __metadata('design:paramtypes', [user_service_1.UserService])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWUE7Z0JBQ0ksWUFBb0IsWUFBd0I7b0JBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO2dCQUM1QyxDQUFDO1lBQ0wsQ0FBQztZQVBEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsV0FBVyxFQUFFLHdDQUF3QztvQkFDckQsVUFBVSxFQUFDLENBQUMscUJBQVMsRUFBQywyQkFBWSxDQUFDO2lCQUN0QyxDQUFDOztrQ0FBQTtZQUNGLG1EQUdDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NoYXJ0RGVtb30gZnJvbSAnLi4vY2hhcnRzL2NoYXJ0ZGVtbydcclxuaW1wb3J0IHtCYXJDaGFydERlbW99IGZyb20gJy4uL2NoYXJ0cy9iYXJjaGFydGRlbW8nXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmltcG9ydCB7Snd0U2VydmljZX0gZnJvbSAnLi4vand0L2p3dC5zZXJ2aWNlJ1xyXG5pbXBvcnQge0R0QmFzZUNvbXBvbmVudH0gZnJvbSAnLi4vc2hhcmVkL2R0YmFzZS5jb21wb25lbnQnXHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W0NoYXJ0RGVtbyxCYXJDaGFydERlbW9dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXNlclNlcnZpY2U6VXNlclNlcnZpY2Upe1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
