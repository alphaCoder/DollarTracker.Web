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
            let JwtService = class JwtService {
                constructor() {
                    this._jwtKey = "dollarTrackerJwtToken";
                }
                get() {
                    return localStorage.getItem(this._jwtKey);
                }
                set(token) {
                    localStorage.setItem(this._jwtKey, token);
                }
                isAuthenticated() {
                    let token = this.get();
                    console.log('token in isAuthenticated', token);
                    if (!token)
                        return false;
                    let decoded = this.decodeToken(token);
                    if (typeof decoded == "undefined" || decoded == null || typeof decoded.exp === "undefined") {
                        console.log('decoded is undefined', decoded);
                        return false;
                    }
                    console.log('exp', decoded.exp);
                    console.log('Math.round(new Date().getTime() / 1000)', Math.round(new Date().getTime() / 1000));
                    return decoded.exp >= Math.round(new Date().getTime() / 1000);
                }
                clear() {
                    localStorage.removeItem(this._jwtKey);
                }
                urlBase64Decode(str) {
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
                }
                decodeToken(token) {
                    var parts = token.split('.');
                    if (parts.length !== 3) {
                        throw new Error('JWT must have 3 parts');
                    }
                    var decoded = this.urlBase64Decode(parts[1]);
                    if (!decoded) {
                        throw new Error('Cannot decode the token');
                    }
                    return JSON.parse(decoded);
                }
            };
            JwtService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], JwtService);
            exports_1("JwtService", JwtService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUMzQyxDQUFDO29CQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDYixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQzdDLENBQUM7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLENBQUM7WUFDSCxDQUFDO1lBNUREO2dCQUFDLGlCQUFVLEVBQUU7OzBCQUFBO1lBQ2IsbUNBMkRDLENBQUEiLCJmaWxlIjoiand0L2p3dC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0xvY2FsU3RvcmFnZVNlcnZpY2V9IGZyb20gJy4uL2xvY2FsU3RvcmFnZS9sb2NhbFN0b3JhZ2Uuc2VydmljZSdcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnXHJcbmRlY2xhcmUgdmFyIGVzY2FwZTogYW55O1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKd3RTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2p3dEtleSA9IFwiZG9sbGFyVHJhY2tlckp3dFRva2VuXCI7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0KCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fand0S2V5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHNldCh0b2tlbjogc3RyaW5nKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9qd3RLZXksIHRva2VuKTtcclxuICAgIH1cclxuICAgIFxyXG5wdWJsaWMgaXNBdXRoZW50aWNhdGVkKCl7XHJcbiAgICBsZXQgdG9rZW4gPSB0aGlzLmdldCgpO1xyXG4gICAgY29uc29sZS5sb2coJ3Rva2VuIGluIGlzQXV0aGVudGljYXRlZCcsIHRva2VuKTtcclxuICAgIGlmKCF0b2tlbikgcmV0dXJuIGZhbHNlO1xyXG4gICAgbGV0IGRlY29kZWQgPSB0aGlzLmRlY29kZVRva2VuKHRva2VuKVxyXG4gICAgaWYodHlwZW9mIGRlY29kZWQgPT0gXCJ1bmRlZmluZWRcIiB8fCBkZWNvZGVkID09IG51bGwgfHwgdHlwZW9mIGRlY29kZWQuZXhwID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdkZWNvZGVkIGlzIHVuZGVmaW5lZCcsIGRlY29kZWQpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnZXhwJywgZGVjb2RlZC5leHApO1xyXG4gICAgY29uc29sZS5sb2coJ01hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKScsTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApKTtcclxuICAgIHJldHVybiBkZWNvZGVkLmV4cCA+PSBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn1cclxuXHJcbnB1YmxpYyBjbGVhcigpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fand0S2V5KTtcclxufVxyXG5cclxucHJpdmF0ZSB1cmxCYXNlNjREZWNvZGUoc3RyOnN0cmluZykge1xyXG4gICAgdmFyIG91dHB1dCA9IHN0ci5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG4gICAgc3dpdGNoIChvdXRwdXQubGVuZ3RoICUgNCkge1xyXG4gICAgICBjYXNlIDA6IHsgYnJlYWs7IH1cclxuICAgICAgY2FzZSAyOiB7IG91dHB1dCArPSAnPT0nOyBicmVhazsgfVxyXG4gICAgICBjYXNlIDM6IHsgb3V0cHV0ICs9ICc9JzsgYnJlYWs7IH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRocm93ICdJbGxlZ2FsIGJhc2U2NHVybCBzdHJpbmchJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKHdpbmRvdy5hdG9iKG91dHB1dCkpKTsgLy9wb2xpZnlsbCBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVjb2RlVG9rZW4odG9rZW46c3RyaW5nKSB7XHJcbiAgICB2YXIgcGFydHMgPSB0b2tlbi5zcGxpdCgnLicpO1xyXG5cclxuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdKV1QgbXVzdCBoYXZlIDMgcGFydHMnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGVjb2RlZCA9IHRoaXMudXJsQmFzZTY0RGVjb2RlKHBhcnRzWzFdKTtcclxuICAgIGlmICghZGVjb2RlZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBkZWNvZGUgdGhlIHRva2VuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjb2RlZCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
