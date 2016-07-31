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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2UvZXhwZW5zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBRUksWUFBb0IsT0FBYyxFQUFVLFdBQXNCLEVBQVUsY0FBNEI7b0JBQXBGLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVc7b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWM7Z0JBQUksQ0FBQztnQkFFN0csY0FBYyxDQUFDLE9BQVc7b0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQTtnQkFDdEUsQ0FBQztnQkFDRCxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQWdCO29CQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWM7eUJBQ3JCLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDcEYsQ0FBQztnQkFDRCxhQUFhLENBQUMsU0FBUztvQkFDbkIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQztvQkFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO1lBQ0wsQ0FBQztZQWhCRDtnQkFBQyxpQkFBVSxFQUFFOzs4QkFBQTtZQUNiLDJDQWVDLENBQUEiLCJmaWxlIjoiZXhwZW5zZS9leHBlbnNlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9zaGFyZWQvYXBpdXJsLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9hcGkvYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnXHJcbmltcG9ydCB7VXBsb2FkU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3VwbG9hZC91cGxvYWQuc2VydmljZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4cGVuc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hcGl1cmw6QXBpVXJsLCBwcml2YXRlIF9hcGlTZXJ2aWNlOkFwaVNlcnZpY2UsIHByaXZhdGUgX3VwbG9hZFNlcnZpY2U6VXBsb2FkU2VydmljZSkgeyB9XHJcblxyXG4gICAgYWRkT25seUV4cGVuc2UocGF5bG9hZDphbnkpOk9ic2VydmFibGU8YW55PntcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXBpU2VydmljZS5wb3N0KHRoaXMuX2FwaXVybC5hZGRPbmx5RXhwZW5zZSwgcGF5bG9hZClcclxuICAgIH1cclxuICAgIGFkZEV4cGVuc2UocGF5bG9hZCwgZmlsZXM6QXJyYXk8YW55Pik6T2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXBsb2FkU2VydmljZVxyXG4gICAgICAgICAgICAubWFrZUZpbGVSZXF1ZXN0KHRoaXMuX2FwaXVybC5hZGRFeHBlbnNlLCBbSlNPTi5zdHJpbmdpZnkocGF5bG9hZCldLCBmaWxlcyk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVFeHBlbnNlKGV4cGVuc2VJZCl7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuX2FwaXVybC5kZWxldGVFeHBlbnNlICsgXCIvXCIgKyBleHBlbnNlSWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FwaVNlcnZpY2UuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
