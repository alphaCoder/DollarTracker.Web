System.register(['@angular/core', '@angular/router', './expenseStory.service', '../shared/iconmapper/iconmapper.service'], function(exports_1, context_1) {
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
    var core_1, router_1, expenseStory_service_1, iconmapper_service_1;
    var ExpenseStoryDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (expenseStory_service_1_1) {
                expenseStory_service_1 = expenseStory_service_1_1;
            },
            function (iconmapper_service_1_1) {
                iconmapper_service_1 = iconmapper_service_1_1;
            }],
        execute: function() {
            let ExpenseStoryDetailsComponent = class ExpenseStoryDetailsComponent {
                constructor(_route, _router, _expenseStoryService, _iconMapper) {
                    this._route = _route;
                    this._router = _router;
                    this._expenseStoryService = _expenseStoryService;
                    this._iconMapper = _iconMapper;
                    this.categoryKeys = [];
                }
                ngOnInit() {
                    this.sub = this._route.params.subscribe(params => {
                        let id = params['id']; // (+) converts string 'id' to a number
                        this._expenseStoryService
                            .getAllExpensesByCategory(id)
                            .subscribe(es => {
                            this.expensesByCategory = es.data;
                            this.categoryKeys = Object.keys(es.data);
                        });
                        //get expenseStorySummary TODO: need to optimize this call
                        this._expenseStoryService
                            .getExpenseStorySummary(id)
                            .subscribe(es => {
                            this.expenseStorySummary = es.data;
                        });
                    });
                }
                ngOnDestroy() {
                    this.sub.unsubscribe();
                }
            };
            ExpenseStoryDetailsComponent = __decorate([
                core_1.Component({
                    selector: 'selector',
                    templateUrl: 'app/expenseStory/expenseStoryDetails.component.html',
                    providers: [expenseStory_service_1.ExpenseStoryService]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, expenseStory_service_1.ExpenseStoryService, iconmapper_service_1.IconMapperService])
            ], ExpenseStoryDetailsComponent);
            exports_1("ExpenseStoryDetailsComponent", ExpenseStoryDetailsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUNJLFlBQXFCLE1BQXNCLEVBQ3RCLE9BQWUsRUFBVSxvQkFBd0MsRUFDakUsV0FBNkI7b0JBRjdCLFdBQU0sR0FBTixNQUFNLENBQWdCO29CQUN0QixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBb0I7b0JBQ2pFLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtvQkFLMUMsaUJBQVksR0FBRSxFQUFFLENBQUM7Z0JBTDZCLENBQUM7Z0JBTWhELFFBQVE7b0JBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDMUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDO3dCQUM5RCxJQUFJLENBQUMsb0JBQW9COzZCQUN4Qix3QkFBd0IsQ0FBQyxFQUFFLENBQUM7NkJBQzVCLFNBQVMsQ0FBQyxFQUFFOzRCQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM3QyxDQUFDLENBQUMsQ0FBQzt3QkFFSCwwREFBMEQ7d0JBQzFELElBQUksQ0FBQyxvQkFBb0I7NkJBQ3hCLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzs2QkFDMUIsU0FBUyxDQUFDLEVBQUU7NEJBQ1QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO29CQUVSLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsV0FBVztvQkFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixDQUFDO1lBRUwsQ0FBQztZQXRDRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixXQUFXLEVBQUUscURBQXFEO29CQUNsRSxTQUFTLEVBQUMsQ0FBQywwQ0FBbUIsQ0FBQztpQkFDbEMsQ0FBQzs7NENBQUE7WUFDRix1RUFpQ0MsQ0FBQSIsImZpbGUiOiJleHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5RGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7RXhwZW5zZVN0b3J5U2VydmljZX0gZnJvbSAnLi9leHBlbnNlU3Rvcnkuc2VydmljZSc7XHJcbmltcG9ydCB7RXhwZW5zZVNlcnZpY2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtFeHBlbnNlfSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2UnO1xyXG5pbXBvcnQge0ljb25NYXBwZXJTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvaWNvbm1hcHBlci9pY29ubWFwcGVyLnNlcnZpY2UnXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5RGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6W0V4cGVuc2VTdG9yeVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlU3RvcnlEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2V4cGVuc2VTdG9yeVNlcnZpY2U6RXhwZW5zZVN0b3J5U2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9pY29uTWFwcGVyOkljb25NYXBwZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgcHJpdmF0ZSBleHBlbnNlc0J5Q2F0ZWdvcnk7XHJcbiAgICBwcml2YXRlIGV4cGVuc2VTdG9yeVN1bW1hcnk7XHJcbiAgICBwcml2YXRlIGNhdGVnb3J5S2V5cyA9W107XHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHBhcmFtc1snaWQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuX2V4cGVuc2VTdG9yeVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbEV4cGVuc2VzQnlDYXRlZ29yeShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShlcz0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBlbnNlc0J5Q2F0ZWdvcnkgPSBlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUtleXMgPSBPYmplY3Qua2V5cyhlcy5kYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL2dldCBleHBlbnNlU3RvcnlTdW1tYXJ5IFRPRE86IG5lZWQgdG8gb3B0aW1pemUgdGhpcyBjYWxsXHJcbiAgICAgICAgICAgIHRoaXMuX2V4cGVuc2VTdG9yeVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEV4cGVuc2VTdG9yeVN1bW1hcnkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZXMgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGVuc2VTdG9yeVN1bW1hcnkgPSBlcy5kYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
