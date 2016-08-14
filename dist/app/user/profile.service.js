System.register(['@angular/core', '../shared/apiurl.service', '../shared/api/api.service'], function(exports_1, context_1) {
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
    var core_1, apiurl_service_1, api_service_1;
    var ProfileService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            }],
        execute: function() {
            let ProfileService = class ProfileService {
                constructor(_apiUrl, _apiService) {
                    this._apiUrl = _apiUrl;
                    this._apiService = _apiService;
                }
                getProfile(userId) {
                    let url = this._apiUrl.profile + "/" + userId;
                    return this._apiService.get(url);
                }
            };
            ProfileService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [apiurl_service_1.ApiUrl, api_service_1.ApiService])
            ], ProfileService);
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBRUksWUFBb0IsT0FBYyxFQUFVLFdBQXNCO29CQUE5QyxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFXO2dCQUNsRSxDQUFDO2dCQUVELFVBQVUsQ0FBQyxNQUFNO29CQUNiLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRSxNQUFNLENBQUM7b0JBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckMsQ0FBQztZQUNMLENBQUM7WUFWRDtnQkFBQyxpQkFBVSxFQUFFOzs4QkFBQTtZQUNiLDJDQVNDLENBQUEiLCJmaWxlIjoidXNlci9wcm9maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9zaGFyZWQvYXBpdXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9hcGkvYXBpLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwaVVybDpBcGlVcmwsIHByaXZhdGUgX2FwaVNlcnZpY2U6QXBpU2VydmljZSkgeyBcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9maWxlKHVzZXJJZCkge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLl9hcGlVcmwucHJvZmlsZSArIFwiL1wiICt1c2VySWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UuZ2V0KHVybCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
