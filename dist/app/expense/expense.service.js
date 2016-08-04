System.register(['@angular/core', '../shared/apiurl.service', '../shared/api/api.service', '../shared/upload/upload.service'], function(exports_1, context_1) {
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
    var core_1, apiurl_service_1, api_service_1, upload_service_1;
    var ExpenseService;
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
            },
            function (upload_service_1_1) {
                upload_service_1 = upload_service_1_1;
            }],
        execute: function() {
            let ExpenseService = class ExpenseService {
                constructor(_apiurl, _apiService, _uploadService) {
                    this._apiurl = _apiurl;
                    this._apiService = _apiService;
                    this._uploadService = _uploadService;
                }
                addOnlyExpense(payload) {
                    return this._apiService.post(this._apiurl.addOnlyExpense, payload);
                }
                addExpense(payload, files) {
                    return this._uploadService
                        .makeFileRequest(this._apiurl.addExpense, [JSON.stringify(payload)], files);
                }
                updateOnlyExpense(payload) {
                    return this._apiService.post(this._apiurl.updateOnlyExpense, payload);
                }
                updateExpense(payload, files) {
                    return this._uploadService
                        .makeFileRequest(this._apiurl.updateExpense, [JSON.stringify(payload)], files);
                }
                deleteExpense(expenseId) {
                    var url = this._apiurl.deleteExpense + "/" + expenseId;
                    return this._apiService.delete(url);
                }
            };
            ExpenseService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [apiurl_service_1.ApiUrl, api_service_1.ApiService, upload_service_1.UploadService])
            ], ExpenseService);
            exports_1("ExpenseService", ExpenseService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBRUksWUFBb0IsT0FBYyxFQUFVLFdBQXNCLEVBQVUsY0FBNEI7b0JBQXBGLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVc7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWM7Z0JBQUksQ0FBQztnQkFFN0csY0FBYyxDQUFDLE9BQVc7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQTtnQkFDdEUsQ0FBQztnQkFDRCxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQWdCO29CQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWM7eUJBQ3JCLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEYsQ0FBQztnQkFDRCxpQkFBaUIsQ0FBQyxPQUFXO29CQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQTtnQkFDekUsQ0FBQztnQkFFRCxhQUFhLENBQUMsT0FBTyxFQUFFLEtBQWdCO29CQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWM7eUJBQ3JCLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdkYsQ0FBQztnQkFFRCxhQUFhLENBQUMsU0FBUztvQkFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO1lBR0wsQ0FBQztZQTNCRDtnQkFBQyxpQkFBVSxFQUFFOzs4QkFBQTtZQUNiLDJDQTBCQyxDQUFBIiwiZmlsZSI6ImV4cGVuc2UvZXhwZW5zZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0FwaVVybH0gZnJvbSAnLi4vc2hhcmVkL2FwaXVybC5zZXJ2aWNlJztcclxuaW1wb3J0IHtBcGlTZXJ2aWNlfSBmcm9tICcuLi9zaGFyZWQvYXBpL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4J1xyXG5pbXBvcnQge1VwbG9hZFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC91cGxvYWQvdXBsb2FkLnNlcnZpY2UnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFeHBlbnNlU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXBpdXJsOkFwaVVybCwgcHJpdmF0ZSBfYXBpU2VydmljZTpBcGlTZXJ2aWNlLCBwcml2YXRlIF91cGxvYWRTZXJ2aWNlOlVwbG9hZFNlcnZpY2UpIHsgfVxyXG5cclxuICAgIGFkZE9ubHlFeHBlbnNlKHBheWxvYWQ6YW55KTpPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UucG9zdCh0aGlzLl9hcGl1cmwuYWRkT25seUV4cGVuc2UsIHBheWxvYWQpXHJcbiAgICB9XHJcbiAgICBhZGRFeHBlbnNlKHBheWxvYWQsIGZpbGVzOkFycmF5PGFueT4pOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwbG9hZFNlcnZpY2VcclxuICAgICAgICAgICAgLm1ha2VGaWxlUmVxdWVzdCh0aGlzLl9hcGl1cmwuYWRkRXhwZW5zZSwgW0pTT04uc3RyaW5naWZ5KHBheWxvYWQpXSwgZmlsZXMpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlT25seUV4cGVuc2UocGF5bG9hZDphbnkpOk9ic2VydmFibGU8YW55PntcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZS5wb3N0KHRoaXMuX2FwaXVybC51cGRhdGVPbmx5RXhwZW5zZSwgcGF5bG9hZClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFeHBlbnNlKHBheWxvYWQsIGZpbGVzOkFycmF5PGFueT4pOk9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwbG9hZFNlcnZpY2VcclxuICAgICAgICAgICAgLm1ha2VGaWxlUmVxdWVzdCh0aGlzLl9hcGl1cmwudXBkYXRlRXhwZW5zZSwgW0pTT04uc3RyaW5naWZ5KHBheWxvYWQpXSwgZmlsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUV4cGVuc2UoZXhwZW5zZUlkKXtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5fYXBpdXJsLmRlbGV0ZUV4cGVuc2UgKyBcIi9cIiArIGV4cGVuc2VJZDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZS5kZWxldGUodXJsKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
