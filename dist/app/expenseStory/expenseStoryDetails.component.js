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
                    providers: [expenseStory_service_1.ExpenseStoryService]
                }), 
                __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, expenseStory_service_1.ExpenseStoryService, iconmapper_service_1.IconMapperService, ng2_slim_loading_bar_1.SlimLoadingBarService])
            ], ExpenseStoryDetailsComponent);
            exports_1("ExpenseStoryDetailsComponent", ExpenseStoryDetailsComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VTdG9yeS9leHBlbnNlU3RvcnlEZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUNJLFlBQXFCLE1BQXNCLEVBQ3RCLE9BQWUsRUFBVSxvQkFBd0MsRUFDakUsV0FBNkIsRUFBVSxXQUFpQztvQkFGeEUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7b0JBQ3RCLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFvQjtvQkFDakUsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFzQjtvQkFLckYsaUJBQVksR0FBRSxFQUFFLENBQUM7Z0JBTHdFLENBQUM7Z0JBTTNGLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTt3QkFDMUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDO3dCQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUN6QixJQUFJLENBQUMsb0JBQW9COzZCQUN4Qix3QkFBd0IsQ0FBQyxFQUFFLENBQUM7NkJBQzVCLFNBQVMsQ0FBQyxFQUFFOzRCQUNULElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUU3QyxDQUFDLENBQUMsQ0FBQzt3QkFFSCwwREFBMEQ7d0JBQzFELElBQUksQ0FBQyxvQkFBb0I7NkJBQ3hCLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzs2QkFDMUIsU0FBUyxDQUFDLEVBQUU7NEJBQ1QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7NEJBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxDQUFDO29CQUVSLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsV0FBVztvQkFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixDQUFDO1lBRUwsQ0FBQztZQTFDRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixXQUFXLEVBQUUscURBQXFEO29CQUNsRSxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztvQkFDL0IsU0FBUyxFQUFDLENBQUMsMENBQW1CLENBQUM7aUJBQ2xDLENBQUM7OzRDQUFBO1lBQ0YsdUVBb0NDLENBQUEiLCJmaWxlIjoiZXhwZW5zZVN0b3J5L2V4cGVuc2VTdG9yeURldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtFeHBlbnNlU3RvcnlTZXJ2aWNlfSBmcm9tICcuL2V4cGVuc2VTdG9yeS5zZXJ2aWNlJztcclxuaW1wb3J0IHtFeHBlbnNlU2VydmljZX0gZnJvbSAnLi4vZXhwZW5zZS9leHBlbnNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge0V4cGVuc2V9IGZyb20gJy4uL2V4cGVuc2UvZXhwZW5zZSc7XHJcbmltcG9ydCB7SWNvbk1hcHBlclNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9pY29ubWFwcGVyL2ljb25tYXBwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7U2xpbUxvYWRpbmdCYXJTZXJ2aWNlfSBmcm9tICduZzItc2xpbS1sb2FkaW5nLWJhci9uZzItc2xpbS1sb2FkaW5nLWJhcic7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzZWxlY3RvcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9leHBlbnNlU3RvcnkvZXhwZW5zZVN0b3J5RGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOltFeHBlbnNlU3RvcnlTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwZW5zZVN0b3J5RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9leHBlbnNlU3RvcnlTZXJ2aWNlOkV4cGVuc2VTdG9yeVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfaWNvbk1hcHBlcjpJY29uTWFwcGVyU2VydmljZSwgcHJpdmF0ZSBfc2xpbUxvYWRlcjpTbGltTG9hZGluZ0JhclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwcml2YXRlIGV4cGVuc2VzQnlDYXRlZ29yeTtcclxuICAgIHByaXZhdGUgZXhwZW5zZVN0b3J5U3VtbWFyeTtcclxuICAgIHByaXZhdGUgY2F0ZWdvcnlLZXlzID1bXTtcclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkID0gcGFyYW1zWydpZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5zdGFydCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9leHBlbnNlU3RvcnlTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5nZXRBbGxFeHBlbnNlc0J5Q2F0ZWdvcnkoaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZXM9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwZW5zZXNCeUNhdGVnb3J5ID0gZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlLZXlzID0gT2JqZWN0LmtleXMoZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vZ2V0IGV4cGVuc2VTdG9yeVN1bW1hcnkgVE9ETzogbmVlZCB0byBvcHRpbWl6ZSB0aGlzIGNhbGxcclxuICAgICAgICAgICAgdGhpcy5fZXhwZW5zZVN0b3J5U2VydmljZVxyXG4gICAgICAgICAgICAuZ2V0RXhwZW5zZVN0b3J5U3VtbWFyeShpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShlcyA9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwZW5zZVN0b3J5U3VtbWFyeSA9IGVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fc2xpbUxvYWRlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
