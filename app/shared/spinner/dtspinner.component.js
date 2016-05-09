System.register(['angular2/core'], function(exports_1, context_1) {
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
//# sourceMappingURL=dtspinner.component.js.map