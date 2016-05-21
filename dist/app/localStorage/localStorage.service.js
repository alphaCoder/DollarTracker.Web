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
    var LocalStorageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let LocalStorageService = class LocalStorageService {
                constructor() {
                    this.storgage = localStorage;
                }
                getItem(key) {
                    return JSON.parse(this.storgage.getItem(key));
                }
                setItem(key, value) {
                    if (key && value) {
                        this.storgage.setItem(key, JSON.stringify(value));
                    }
                }
            };
            LocalStorageService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], LocalStorageService);
            exports_1("LocalStorageService", LocalStorageService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsU3RvcmFnZS9sb2NhbFN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVJO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO2dCQUNqQyxDQUFDO2dCQUVNLE9BQU8sQ0FBQyxHQUFVO29CQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUVNLE9BQU8sQ0FBQyxHQUFVLEVBQUUsS0FBUztvQkFDaEMsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsQ0FBQztnQkFDTCxDQUFDO1lBQ0osQ0FBQztZQWhCRjtnQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtZQUNiLHFEQWVFLENBQUEiLCJmaWxlIjoibG9jYWxTdG9yYWdlL2xvY2FsU3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxTdG9yYWdle1xyXG4gICAgZ2V0SXRlbShrZXk6c3RyaW5nKSA6IGFueTtcclxuICAgIHNldEl0ZW0oa2V5OnN0cmluZywgdmFsdWU6YW55KTtcclxufVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgSUxvY2FsU3RvcmFnZSB7XHJcbiAgICBwcml2YXRlIHN0b3JnYWdlOlN0b3JhZ2U7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5zdG9yZ2FnZSA9IGxvY2FsU3RvcmFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6c3RyaW5nKSA6YW55e1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuc3RvcmdhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6c3RyaW5nLCB2YWx1ZTphbnkpIHtcclxuICAgICAgICBpZihrZXkgJiYgdmFsdWUpIHtcclxuICAgICAgICAgICAgIHRoaXMuc3RvcmdhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
