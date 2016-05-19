System.register(['@angular/core', '@angular/http', '../../jwt/jwt.service'], function(exports_1, context_1) {
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
    var core_1, http_1, jwt_service_1;
    var ApiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            }],
        execute: function() {
            ApiService = (function () {
                function ApiService(_jwtService, http) {
                    this._jwtService = _jwtService;
                    this.http = http;
                }
                ApiService.prototype.setGlobalHeaders = function (headers, request) {
                    headers.forEach(function (header) {
                        var key = Object.keys(header)[0];
                        var headerValue = header[key];
                        request.headers.set(key, headerValue);
                    });
                };
                ApiService.prototype.request = function (url, options) {
                    var request;
                    var reqOpts = {};
                    reqOpts.headers = new http_1.Headers();
                    reqOpts.headers.set('Content-Type', 'application/json');
                    reqOpts.headers.set("Authorization", "Bearer " + this._jwtService.get());
                    request = this.http.request(url, reqOpts);
                    return request;
                };
                ApiService.prototype.requestHelper = function (requestArgs, additionalOptions) {
                    var options = new http_1.RequestOptions(requestArgs);
                    if (additionalOptions) {
                        options = options.merge(additionalOptions);
                    }
                    return this.request(new http_1.Request(options));
                };
                ApiService.prototype.get = function (url, options) {
                    return this.requestHelper({ url: url, method: http_1.RequestMethod.Get }, options);
                };
                ApiService.prototype.post = function (url, body, options) {
                    return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Post }, options);
                };
                ApiService.prototype.put = function (url, body, options) {
                    return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Put }, options);
                };
                ApiService.prototype.delete = function (url, options) {
                    return this.requestHelper({ url: url, method: http_1.RequestMethod.Delete }, options);
                };
                ApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [jwt_service_1.JwtService, http_1.Http])
                ], ApiService);
                return ApiService;
            }());
            exports_1("ApiService", ApiService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYXBpL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBRUEsb0JBQW9CLFdBQXNCLEVBQVMsSUFBVTtvQkFBekMsZ0JBQVcsR0FBWCxXQUFXLENBQVc7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFBSSxDQUFDO2dCQUVoRSxxQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBc0IsRUFBRSxPQUFxQztvQkFDNUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWM7d0JBQzdCLElBQUksR0FBRyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pDLElBQUksV0FBVyxHQUFpQixNQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzdDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFSCw0QkFBTyxHQUFQLFVBQVEsR0FBcUIsRUFBRSxPQUE0QjtvQkFFdkQsSUFBSSxPQUFZLENBQUM7b0JBQ2pCLElBQUksT0FBTyxHQUF3QixFQUFFLENBQUM7b0JBQ3BDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBQ3hELE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUN6RSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUU1QyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNqQixDQUFDO2dCQUVPLGtDQUFhLEdBQXJCLFVBQXNCLFdBQStCLEVBQUUsaUJBQXFDO29CQUMxRixJQUFJLE9BQU8sR0FBbUIsSUFBSSxxQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUU5RCxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUE7b0JBQzVDLENBQUM7b0JBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxjQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtnQkFDM0MsQ0FBQztnQkFFQSx3QkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLE9BQTRCO29CQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRyxHQUFHLEVBQUUsTUFBTSxFQUFFLG9CQUFhLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQy9FLENBQUM7Z0JBRUQseUJBQUksR0FBSixVQUFLLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBNEI7b0JBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxFQUFHLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxvQkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RixDQUFDO2dCQUVELHdCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsSUFBWSxFQUFFLE9BQTZCO29CQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsb0JBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDM0YsQ0FBQztnQkFFRCwyQkFBTSxHQUFOLFVBQU8sR0FBVyxFQUFFLE9BQTZCO29CQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsRUFBRyxHQUFHLEVBQUUsTUFBTSxFQUFFLG9CQUFhLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2xGLENBQUM7Z0JBakRIO29CQUFDLGlCQUFVLEVBQUU7OzhCQUFBO2dCQWtEYixpQkFBQztZQUFELENBakRBLEFBaURDLElBQUE7WUFqREQsbUNBaURDLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9hcGkvYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdCwgUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zQXJncywgUmVxdWVzdE1ldGhvZCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0p3dFNlcnZpY2V9IGZyb20gJy4uLy4uL2p3dC9qd3Quc2VydmljZSdcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XHJcblxyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9qd3RTZXJ2aWNlOkp3dFNlcnZpY2UscHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgc2V0R2xvYmFsSGVhZGVycyhoZWFkZXJzOiBBcnJheTxPYmplY3Q+LCByZXF1ZXN0OiBSZXF1ZXN0IHwgUmVxdWVzdE9wdGlvbnNBcmdzKSB7XHJcbiAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcjogT2JqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBrZXk6IHN0cmluZyA9IE9iamVjdC5rZXlzKGhlYWRlcilbMF07XHJcbiAgICAgIGxldCBoZWFkZXJWYWx1ZTogc3RyaW5nID0gKDxhbnk+aGVhZGVyKVtrZXldO1xyXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuc2V0KGtleSwgaGVhZGVyVmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG5yZXF1ZXN0KHVybDogc3RyaW5nIHwgUmVxdWVzdCwgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncykgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcblxyXG4gICAgbGV0IHJlcXVlc3Q6IGFueTtcclxuICAgIGxldCByZXFPcHRzOiBSZXF1ZXN0T3B0aW9uc0FyZ3MgPSAge307XHJcbiAgICAgIHJlcU9wdHMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIHJlcU9wdHMuaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7ICAgIFxyXG4gICAgICByZXFPcHRzLmhlYWRlcnMuc2V0KFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIHRoaXMuX2p3dFNlcnZpY2UuZ2V0KCkpO1xyXG4gICAgICByZXF1ZXN0ID0gdGhpcy5odHRwLnJlcXVlc3QodXJsLCByZXFPcHRzKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcXVlc3RIZWxwZXIocmVxdWVzdEFyZ3M6IFJlcXVlc3RPcHRpb25zQXJncywgYWRkaXRpb25hbE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zQXJncykgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICBsZXQgb3B0aW9uczogUmVxdWVzdE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMocmVxdWVzdEFyZ3MpO1xyXG4gICAgXHJcbiAgICBpZiAoYWRkaXRpb25hbE9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMubWVyZ2UoYWRkaXRpb25hbE9wdGlvbnMpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobmV3IFJlcXVlc3Qob3B0aW9ucykpXHJcbiAgfVxyXG4gIFxyXG4gICBnZXQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpIDogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbHBlcih7IHVybDogIHVybCwgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLkdldCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncykgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVscGVyKHsgdXJsOiAgdXJsLCBib2R5OiBib2R5LCBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUG9zdCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCBvcHRpb25zID86IFJlcXVlc3RPcHRpb25zQXJncykgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVscGVyKHsgdXJsOiAgdXJsLCBib2R5OiBib2R5LCBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUHV0IH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zID86IFJlcXVlc3RPcHRpb25zQXJncykgOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVscGVyKHsgdXJsOiAgdXJsLCBtZXRob2Q6IFJlcXVlc3RNZXRob2QuRGVsZXRlIH0sIG9wdGlvbnMpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
