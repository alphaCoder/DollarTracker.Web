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
    var JwtService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            JwtService = (function () {
                function JwtService() {
                    this._jwtKey = "dollarTrackerJwtToken";
                }
                JwtService.prototype.get = function () {
                    return localStorage.getItem(this._jwtKey);
                };
                JwtService.prototype.set = function (token) {
                    localStorage.setItem(this._jwtKey, token);
                };
                JwtService.prototype.isAuthenticated = function () {
                    var token = this.get();
                    console.log('token in isAuthenticated', token);
                    if (!token)
                        return false;
                    var decoded = this.decodeToken(token);
                    if (typeof decoded == "undefined" || decoded == null || typeof decoded.exp === "undefined") {
                        console.log('decoded is undefined', decoded);
                        return false;
                    }
                    console.log('exp', decoded.exp);
                    console.log('Math.round(new Date().getTime() / 1000)', Math.round(new Date().getTime() / 1000));
                    return decoded.exp >= Math.round(new Date().getTime() / 1000);
                };
                JwtService.prototype.clear = function () {
                    localStorage.removeItem(this._jwtKey);
                };
                JwtService.prototype.urlBase64Decode = function (str) {
                    var output = str.replace(/-/g, '+').replace(/_/g, '/');
                    switch (output.length % 4) {
                        case 0: {
                            break;
                        }
                        case 2: {
                            output += '==';
                            break;
                        }
                        case 3: {
                            output += '=';
                            break;
                        }
                        default: {
                            throw 'Illegal base64url string!';
                        }
                    }
                    return decodeURIComponent(escape(window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
                };
                JwtService.prototype.decodeToken = function (token) {
                    var parts = token.split('.');
                    if (parts.length !== 3) {
                        throw new Error('JWT must have 3 parts');
                    }
                    var decoded = this.urlBase64Decode(parts[1]);
                    if (!decoded) {
                        throw new Error('Cannot decode the token');
                    }
                    return JSON.parse(decoded);
                };
                JwtService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], JwtService);
                return JwtService;
            }());
            exports_1("JwtService", JwtService);
        }
    }
});
//# sourceMappingURL=jwt.service.js.map