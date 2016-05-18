System.register(['@angular/core', '../jwt/jwt.service'], function(exports_1, context_1) {
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
    var core_1, jwt_service_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(_jwtService) {
                    this._jwtService = _jwtService;
                    this.userId = null;
                    this.userName = null;
                    this.email = null;
                    this.displayName = null;
                    this.memberSince = null;
                    this.isAuthenticated = false;
                }
                UserService.prototype.add = function (loginResponse) {
                    this._jwtService.set(loginResponse.token);
                    this.mapUser(loginResponse.user);
                    this.isAuthenticated = true;
                };
                UserService.prototype.mapUser = function (user) {
                    this.userId = user.userId,
                        this.userName = user.userName,
                        this.displayName = user.displayName,
                        this.email = user.email,
                        this.memberSince = user.memberSince;
                };
                UserService.prototype.clear = function () {
                    this.userId = null;
                    this.userName = null;
                    this.displayName = null;
                    this.email = null;
                    this.memberSince = null;
                    this.isAuthenticated = false;
                    this._jwtService.clear();
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [jwt_service_1.JwtService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map