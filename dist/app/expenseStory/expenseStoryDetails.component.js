System.register(['@angular/core', '@angular/router', './expenseStory.service', '../shared/iconmapper/iconmapper.service', 'ng2-slim-loading-bar/ng2-slim-loading-bar'], function(exports_1, context_1) {
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
    var core_1, router_1, expenseStory_service_1, iconmapper_service_1, ng2_slim_loading_bar_1;
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
            },
            function (ng2_slim_loading_bar_1_1) {
                ng2_slim_loading_bar_1 = ng2_slim_loading_bar_1_1;
            }],
        execute: function() {
            let ExpenseStoryDetailsComponent = class ExpenseStoryDetailsComponent {
                constructor(_route, _router, _expenseStoryService, _iconMapper, _slimLoader) {
                    this._route = _route;
                    this._router = _router;
                    this._expenseStoryService = _expenseStoryService;
                    this._iconMapper = _iconMapper;
                    this._slimLoader = _slimLoader;
                    this.categoryKeys = [];
                }
                ngOnInit() {
                    this.sub = this._route.params.subscribe(params => {
                        let id = params['id']; // (+) converts string 'id' to a number
                        this._slimLoader.start();
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
                            this._slimLoader.complete();
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
                    directives: [router_1.ROUTER_DIRECTIVES],
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, expenseStory_service_1.ExpenseStoryService, iconmapper_service_1.IconMapperService, ng2_slim_loading_bar_1.SlimLoadingBarService])
            ], ExpenseStoryDetailsComponent);
            exports_1("ExpenseStoryDetailsComponent", ExpenseStoryDetailsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUNJLFlBQXFCLE1BQXNCLEVBQ3RCLE9BQWUsRUFBVSxvQkFBd0MsRUFDakUsV0FBNkIsRUFBVSxXQUFpQztvQkFGeEUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7b0JBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQjtvQkFDakUsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtvQkFLckYsaUJBQVksR0FBRSxFQUFFLENBQUM7Z0JBTHdFLENBQUM7Z0JBTTNGLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDMUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDO3dCQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUN6QixJQUFJLENBQUMsb0JBQW9COzZCQUN4Qix3QkFBd0IsQ0FBQyxFQUFFLENBQUM7NkJBQzVCLFNBQVMsQ0FBQyxFQUFFOzRCQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUU3QyxDQUFDLENBQUMsQ0FBQzt3QkFFSCwwREFBMEQ7d0JBQzFELElBQUksQ0FBQyxvQkFBb0I7NkJBQ3hCLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzs2QkFDMUIsU0FBUyxDQUFDLEVBQUU7NEJBQ1QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxDQUFDO29CQUVSLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsV0FBVztvQkFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixDQUFDO1lBRUwsQ0FBQztZQXpDRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixXQUFXLEVBQUUscURBQXFEO29CQUNsRSxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztpQkFDbEMsQ0FBQzs7NENBQUE7WUFDRix1RUFvQ0MsQ0FBQSIsImZpbGUiOiJleHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5RGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGUsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0V4cGVuc2VTdG9yeVNlcnZpY2V9IGZyb20gJy4vZXhwZW5zZVN0b3J5LnNlcnZpY2UnO1xyXG5pbXBvcnQge0V4cGVuc2VTZXJ2aWNlfSBmcm9tICcuLi9leHBlbnNlL2V4cGVuc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7RXhwZW5zZX0gZnJvbSAnLi4vZXhwZW5zZS9leHBlbnNlJztcclxuaW1wb3J0IHtJY29uTWFwcGVyU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL2ljb25tYXBwZXIvaWNvbm1hcHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtTbGltTG9hZGluZ0JhclNlcnZpY2V9IGZyb20gJ25nMi1zbGltLWxvYWRpbmctYmFyL25nMi1zbGltLWxvYWRpbmctYmFyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdG9yJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2V4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlU3RvcnlEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2V4cGVuc2VTdG9yeVNlcnZpY2U6RXhwZW5zZVN0b3J5U2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9pY29uTWFwcGVyOkljb25NYXBwZXJTZXJ2aWNlLCBwcml2YXRlIF9zbGltTG9hZGVyOlNsaW1Mb2FkaW5nQmFyU2VydmljZSkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHByaXZhdGUgZXhwZW5zZXNCeUNhdGVnb3J5O1xyXG4gICAgcHJpdmF0ZSBleHBlbnNlU3RvcnlTdW1tYXJ5O1xyXG4gICAgcHJpdmF0ZSBjYXRlZ29yeUtleXMgPVtdO1xyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBwYXJhbXNbJ2lkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgICAgICB0aGlzLl9zbGltTG9hZGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4cGVuc2VTdG9yeVNlcnZpY2VcclxuICAgICAgICAgICAgLmdldEFsbEV4cGVuc2VzQnlDYXRlZ29yeShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShlcz0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBlbnNlc0J5Q2F0ZWdvcnkgPSBlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUtleXMgPSBPYmplY3Qua2V5cyhlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9nZXQgZXhwZW5zZVN0b3J5U3VtbWFyeSBUT0RPOiBuZWVkIHRvIG9wdGltaXplIHRoaXMgY2FsbFxyXG4gICAgICAgICAgICB0aGlzLl9leHBlbnNlU3RvcnlTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRFeHBlbnNlU3RvcnlTdW1tYXJ5KGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGVzID0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBlbnNlU3RvcnlTdW1tYXJ5ID0gZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICB0aGlzLl9zbGltTG9hZGVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICBcdCAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
