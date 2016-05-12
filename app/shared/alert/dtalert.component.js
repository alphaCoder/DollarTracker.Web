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
    var DtAlertComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DtAlertComponent = (function () {
                function DtAlertComponent() {
                    this.messages = [];
                }
                DtAlertComponent.prototype.ngOnInit = function () {
                };
                DtAlertComponent.prototype.success = function (message) {
                    var msg = { "key": "success", "text": message };
                    this.messages.push(msg);
                    this.scheduleRemoval(msg);
                };
                DtAlertComponent.prototype.failure = function (message) {
                    var msg = { "key": "danger", "text": message };
                    this.messages.push(msg);
                    this.scheduleRemoval(msg);
                };
                DtAlertComponent.prototype.scheduleRemoval = function (msg) {
                    var _this = this;
                    setTimeout(function () {
                        var idx = _this.messages.indexOf(msg);
                        _this.messages.splice(idx, 1);
                    }, 3000);
                };
                DtAlertComponent.prototype.remove = function (idx) {
                    if (idx >= 0) {
                        this.messages.splice(idx, 1);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', DtAlertComponent)
                ], DtAlertComponent.prototype, "malert", void 0);
                DtAlertComponent = __decorate([
                    core_1.Component({
                        selector: 'dt-alert',
                        templateUrl: 'app/shared/alert/dtalert.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DtAlertComponent);
                return DtAlertComponent;
            }());
            exports_1("DtAlertComponent", DtAlertComponent);
        }
    }
});
//# sourceMappingURL=dtalert.component.js.map