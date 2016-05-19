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
                    if (!token)
                        return false;
                    var decoded = this.decodeToken(token);
                    if (typeof decoded == "undefined" || decoded == null || typeof decoded.exp === "undefined") {
                        return false;
                    }
                    return Math.round(new Date().getTime() / 1000) >= decoded.exp;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9qd3Qvand0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFFSTtvQkFEUSxZQUFPLEdBQUcsdUJBQXVCLENBQUM7Z0JBRTFDLENBQUM7Z0JBRU0sd0JBQUcsR0FBVjtvQkFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRU0sd0JBQUcsR0FBVixVQUFXLEtBQWE7b0JBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztnQkFFRSxvQ0FBZSxHQUF0QjtvQkFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ3JDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sT0FBTyxJQUFJLFdBQVcsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUMxRixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNmLENBQUM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNsRSxDQUFDO2dCQUVNLDBCQUFLLEdBQVo7b0JBQ0ksWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRU8sb0NBQWUsR0FBdkIsVUFBd0IsR0FBVTtvQkFDOUIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixLQUFLLENBQUMsRUFBRSxDQUFDOzRCQUFDLEtBQUssQ0FBQzt3QkFBQyxDQUFDO3dCQUNsQixLQUFLLENBQUMsRUFBRSxDQUFDOzRCQUFDLE1BQU0sSUFBSSxJQUFJLENBQUM7NEJBQUMsS0FBSyxDQUFDO3dCQUFDLENBQUM7d0JBQ2xDLEtBQUssQ0FBQyxFQUFFLENBQUM7NEJBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQzs0QkFBQyxLQUFLLENBQUM7d0JBQUMsQ0FBQzt3QkFDakMsU0FBUyxDQUFDOzRCQUNSLE1BQU0sMkJBQTJCLENBQUM7d0JBQ3BDLENBQUM7b0JBQ0gsQ0FBQztvQkFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMscURBQXFEO2dCQUMvRyxDQUFDO2dCQUVPLGdDQUFXLEdBQW5CLFVBQW9CLEtBQVk7b0JBQzlCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBRTdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUMzQyxDQUFDO29CQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDYixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQzdDLENBQUM7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7Z0JBdkRIO29CQUFDLGlCQUFVLEVBQUU7OzhCQUFBO2dCQXdEYixpQkFBQztZQUFELENBdkRBLEFBdURDLElBQUE7WUF2REQsbUNBdURDLENBQUEiLCJmaWxlIjoiYXBwL2p3dC9qd3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuLi9sb2NhbFN0b3JhZ2UvbG9jYWxTdG9yYWdlLnNlcnZpY2UnXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJ1xyXG5kZWNsYXJlIHZhciBlc2NhcGU6IGFueTtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSnd0U2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9qd3RLZXkgPSBcImRvbGxhclRyYWNrZXJKd3RUb2tlblwiO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCgpOnN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX2p3dEtleSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzZXQodG9rZW46IHN0cmluZyl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fand0S2V5LCB0b2tlbik7XHJcbiAgICB9XHJcbiAgICBcclxucHVibGljIGlzQXV0aGVudGljYXRlZCgpe1xyXG4gICAgbGV0IHRva2VuID0gdGhpcy5nZXQoKTtcclxuICAgIGlmKCF0b2tlbikgcmV0dXJuIGZhbHNlO1xyXG4gICAgbGV0IGRlY29kZWQgPSB0aGlzLmRlY29kZVRva2VuKHRva2VuKVxyXG4gICAgaWYodHlwZW9mIGRlY29kZWQgPT0gXCJ1bmRlZmluZWRcIiB8fCBkZWNvZGVkID09IG51bGwgfHwgdHlwZW9mIGRlY29kZWQuZXhwID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgPj0gZGVjb2RlZC5leHA7XHJcbn1cclxuXHJcbnB1YmxpYyBjbGVhcigpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fand0S2V5KTtcclxufVxyXG5cclxucHJpdmF0ZSB1cmxCYXNlNjREZWNvZGUoc3RyOnN0cmluZykge1xyXG4gICAgdmFyIG91dHB1dCA9IHN0ci5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG4gICAgc3dpdGNoIChvdXRwdXQubGVuZ3RoICUgNCkge1xyXG4gICAgICBjYXNlIDA6IHsgYnJlYWs7IH1cclxuICAgICAgY2FzZSAyOiB7IG91dHB1dCArPSAnPT0nOyBicmVhazsgfVxyXG4gICAgICBjYXNlIDM6IHsgb3V0cHV0ICs9ICc9JzsgYnJlYWs7IH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRocm93ICdJbGxlZ2FsIGJhc2U2NHVybCBzdHJpbmchJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHdpbmRvdy5hdG9iKG91dHB1dCkpKTsgLy9wb2xpZnlsbCBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVjb2RlVG9rZW4odG9rZW46c3RyaW5nKSB7XHJcbiAgICB2YXIgcGFydHMgPSB0b2tlbi5zcGxpdCgnLicpO1xyXG5cclxuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKV1QgbXVzdCBoYXZlIDMgcGFydHMnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGVjb2RlZCA9IHRoaXMudXJsQmFzZTY0RGVjb2RlKHBhcnRzWzFdKTtcclxuICAgIGlmICghZGVjb2RlZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWNvZGUgdGhlIHRva2VuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
