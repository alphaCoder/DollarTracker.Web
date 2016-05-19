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
            LocalStorageService = (function () {
                function LocalStorageService() {
                    this.storgage = localStorage;
                }
                LocalStorageService.prototype.getItem = function (key) {
                    return JSON.parse(this.storgage.getItem(key));
                };
                LocalStorageService.prototype.setItem = function (key, value) {
                    if (key && value) {
                        this.storgage.setItem(key, JSON.stringify(value));
                    }
                };
                LocalStorageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LocalStorageService);
                return LocalStorageService;
            }());
            exports_1("LocalStorageService", LocalStorageService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2NhbFN0b3JhZ2UvbG9jYWxTdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFFSTtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztnQkFDakMsQ0FBQztnQkFFTSxxQ0FBTyxHQUFkLFVBQWUsR0FBVTtvQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFFTSxxQ0FBTyxHQUFkLFVBQWUsR0FBVSxFQUFFLEtBQVM7b0JBQ2hDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELENBQUM7Z0JBQ0wsQ0FBQztnQkFmTDtvQkFBQyxpQkFBVSxFQUFFOzt1Q0FBQTtnQkFnQlosMEJBQUM7WUFBRCxDQWZELEFBZUUsSUFBQTtZQWZGLHFEQWVFLENBQUEiLCJmaWxlIjoiYXBwL2xvY2FsU3RvcmFnZS9sb2NhbFN0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsU3RvcmFnZXtcclxuICAgIGdldEl0ZW0oa2V5OnN0cmluZykgOiBhbnk7XHJcbiAgICBzZXRJdGVtKGtleTpzdHJpbmcsIHZhbHVlOmFueSk7XHJcbn1cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSBpbXBsZW1lbnRzIElMb2NhbFN0b3JhZ2Uge1xyXG4gICAgcHJpdmF0ZSBzdG9yZ2FnZTpTdG9yYWdlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMuc3RvcmdhZ2UgPSBsb2NhbFN0b3JhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OnN0cmluZykgOmFueXtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JnYWdlLmdldEl0ZW0oa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEl0ZW0oa2V5OnN0cmluZywgdmFsdWU6YW55KSB7XHJcbiAgICAgICAgaWYoa2V5ICYmIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICB0aGlzLnN0b3JnYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbiB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
