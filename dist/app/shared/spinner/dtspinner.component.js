System.register(['@angular/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Rx_1;
    var DtSpinButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            let DtSpinButtonComponent = class DtSpinButtonComponent {
                constructor() {
                    this.showBusy = false;
                }
                ngOnInit() { }
                onClick() {
                    console.log('I am on click in dt spinner');
                    this.showBusy = true;
                    this.method.subscribe(x => {
                        this.showBusy = false;
                        console.log('done');
                    });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Rx_1.Observable)
            ], DtSpinButtonComponent.prototype, "method", void 0);
            DtSpinButtonComponent = __decorate([
                core_1.Component({
                    selector: 'dt-button',
                    template: `
    <button class="btn btn-success" (click)='onClick()'><i class='fa fa-gear fa-spin' *ngIf="showBusy"></i> Test</button>
    `
                }), 
                __metadata('design:paramtypes', [])
            ], DtSpinButtonComponent);
            exports_1("DtSpinButtonComponent", DtSpinButtonComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zcGlubmVyL2R0c3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFFSTtvQkFETyxhQUFRLEdBQVcsS0FBSyxDQUFDO2dCQUNoQixDQUFDO2dCQUVqQixRQUFRLEtBQUssQ0FBQztnQkFJZCxPQUFPO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO29CQUN2QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQVZHO2dCQUFDLFlBQUssRUFBRTs7aUVBQUE7WUFaWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUU7O0tBRVQ7aUJBQ0osQ0FBQzs7cUNBQUE7WUFDRix5REFnQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc3Bpbm5lci9kdHNwaW5uZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdkdC1idXR0b24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiAoY2xpY2spPSdvbkNsaWNrKCknPjxpIGNsYXNzPSdmYSBmYS1nZWFyIGZhLXNwaW4nICpuZ0lmPVwic2hvd0J1c3lcIj48L2k+IFRlc3Q8L2J1dHRvbj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIER0U3BpbkJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgc2hvd0J1c3k6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICAgIEBJbnB1dCgpIG1ldGhvZDpPYnNlcnZhYmxlPGFueT47XHJcbiAgICBcclxuICAgIG9uQ2xpY2soKTphbnl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0kgYW0gb24gY2xpY2sgaW4gZHQgc3Bpbm5lcicpO1xyXG4gICAgICAgIHRoaXMuc2hvd0J1c3kgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWV0aG9kLnN1YnNjcmliZSh4PT57XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RvbmUnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
