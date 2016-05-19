System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var DtSpinButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DtSpinButtonComponent = (function () {
                function DtSpinButtonComponent() {
                }
                DtSpinButtonComponent.prototype.ngOnInit = function () { };
                DtSpinButtonComponent.prototype.onClick = function () {
                    console.log('I am on click in dt spinner');
                    this.method().subscribe(function (x) { return console.log('done'); });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], DtSpinButtonComponent.prototype, "method", void 0);
                DtSpinButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'dt-spin-button',
                        template: "\n    <button><i class='fa fa-gear fa-spin' (click)='onClick()'></i> Test</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DtSpinButtonComponent);
                return DtSpinButtonComponent;
            }());
            exports_1("DtSpinButtonComponent", DtSpinButtonComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc3Bpbm5lci9kdHNwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQ0k7Z0JBQWdCLENBQUM7Z0JBRWpCLHdDQUFRLEdBQVIsY0FBYSxDQUFDO2dCQUlkLHVDQUFPLEdBQVA7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDO2dCQUxEO29CQUFDLFlBQUssRUFBRTs7cUVBQUE7Z0JBWFo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsMEZBRVQ7cUJBQ0osQ0FBQzs7eUNBQUE7Z0JBWUYsNEJBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELHlEQVdDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zcGlubmVyL2R0c3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkdC1zcGluLWJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvbj48aSBjbGFzcz0nZmEgZmEtZ2VhciBmYS1zcGluJyAoY2xpY2spPSdvbkNsaWNrKCknPjwvaT4gVGVzdDwvYnV0dG9uPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHRTcGluQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBASW5wdXQoKSBtZXRob2Q7XHJcbiAgICBcclxuICAgIG9uQ2xpY2soKTphbnl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0kgYW0gb24gY2xpY2sgaW4gZHQgc3Bpbm5lcicpO1xyXG4gICAgICAgIHRoaXMubWV0aG9kKCkuc3Vic2NyaWJlKHg9PmNvbnNvbGUubG9nKCdkb25lJykpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
