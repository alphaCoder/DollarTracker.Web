System.register(['angular2/core', '../localStorage/localStorage.service', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, localStorage_service_1, Observable_1;
    var JwtService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (localStorage_service_1_1) {
                localStorage_service_1 = localStorage_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            JwtService = (function () {
                function JwtService(_localStorage) {
                    this._localStorage = _localStorage;
                    this._jwtKey = "dollarTrackerJwtToken";
                }
                JwtService.prototype.get = function () {
                    return this._localStorage.getItem(this._jwtKey);
                };
                JwtService.prototype.set = function (token) {
                    this._localStorage.setItem(this._jwtKey, token);
                };
                JwtService.prototype.isValid = function () {
                    var _this = this;
                    return Observable_1.Observable.create(function (observer) {
                        var jwt = _this.get();
                        if (jwt) {
                            var payloadStr = jwt.split(".")[1];
                            //  var payload = window.atob(payload);
                            observer.next(true);
                        }
                        return false;
                    });
                };
                JwtService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [localStorage_service_1.LocalStorageService])
                ], JwtService);
                return JwtService;
            }());
            exports_1("JwtService", JwtService);
        }
    }
});
//# sourceMappingURL=jwt.service.js.map