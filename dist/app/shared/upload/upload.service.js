System.register(['@angular/core', 'rxjs/Rx', '../../jwt/jwt.service'], function(exports_1, context_1) {
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
    var core_1, Rx_1, jwt_service_1;
    var UploadService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            }],
        execute: function() {
            //http://stackoverflow.com/questions/35985347/how-to-upload-file-in-angular2
            let UploadService = class UploadService {
                constructor(_jwtService) {
                    this._jwtService = _jwtService;
                    this.progress = Rx_1.Observable.create(observer => {
                        this.progressObserver = observer;
                    }).share();
                }
                makeFileRequest(url, params, files) {
                    return Rx_1.Observable.create(observer => {
                        let formData = new FormData(), xhr = new XMLHttpRequest();
                        for (let i = 0; i < files.length; i++) {
                            formData.append("FILE", files[i], files[i].name);
                        }
                        if (params.length >= 1) {
                            formData.append("DTD", params[0]);
                        }
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    observer.next(JSON.parse(xhr.response));
                                    observer.complete();
                                }
                                else {
                                    observer.error(xhr.response);
                                }
                            }
                        };
                        xhr.upload.onprogress = (event) => {
                        };
                        xhr.open('POST', url, true);
                        xhr.setRequestHeader("Authorization", "Bearer " + this._jwtService.get());
                        xhr.send(formData);
                        return xhr.response;
                    });
                }
            };
            UploadService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [jwt_service_1.JwtService])
            ], UploadService);
            exports_1("UploadService", UploadService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC91cGxvYWQvdXBsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQSw0RUFBNEU7WUFFNUU7Z0JBR0ksWUFBb0IsV0FBc0I7b0JBQXRCLGdCQUFXLEdBQVgsV0FBVyxDQUFXO29CQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQVUsQ0FBQyxNQUFNLENBQUUsUUFBUTt3QkFDdkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztvQkFDckMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2YsQ0FBQztnQkFDRSxlQUFlLENBQUUsR0FBVyxFQUFFLE1BQWdCLEVBQUUsS0FBYTtvQkFDaEUsTUFBTSxDQUFDLGVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUTt3QkFDN0IsSUFBSSxRQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsRUFDbkMsR0FBRyxHQUFtQixJQUFJLGNBQWMsRUFBRSxDQUFDO3dCQUUvQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs0QkFDcEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDckQsQ0FBQzt3QkFDRCxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO3dCQUVELEdBQUcsQ0FBQyxrQkFBa0IsR0FBRzs0QkFDckIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0NBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQ0FDeEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dDQUN4QixDQUFDO2dDQUFDLElBQUksQ0FBQyxDQUFDO29DQUNKLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dDQUNqQyxDQUFDOzRCQUNMLENBQUM7d0JBQ0wsQ0FBQyxDQUFDO3dCQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBSzt3QkFFOUIsQ0FBQyxDQUFDO3dCQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDNUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO3dCQUN2RSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuQixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQztZQUNILENBQUM7WUExQ0Q7Z0JBQUMsaUJBQVUsRUFBRTs7NkJBQUE7WUFDYix5Q0F5Q0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvdXBsb2FkL3VwbG9hZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnXHJcbmltcG9ydCB7Snd0U2VydmljZX0gZnJvbSAnLi4vLi4vand0L2p3dC5zZXJ2aWNlJ1xyXG4vL2h0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU5ODUzNDcvaG93LXRvLXVwbG9hZC1maWxlLWluLWFuZ3VsYXIyXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2Uge1xyXG4gICAgcHVibGljIHByb2dyZXNzO1xyXG4gICAgcHVibGljIHByb2dyZXNzT2JzZXJ2ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9qd3RTZXJ2aWNlOkp3dFNlcnZpY2UpIHsgXHJcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE9ic2VydmFibGUuY3JlYXRlKCBvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NPYnNlcnZlciA9IG9ic2VydmVyO1xyXG4gICAgICAgIH0pLnNoYXJlKCk7XHJcbiAgICB9XHJcbnB1YmxpYyBtYWtlRmlsZVJlcXVlc3QgKHVybDogc3RyaW5nLCBwYXJhbXM6IHN0cmluZ1tdLCBmaWxlczogRmlsZVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XHJcbiAgICAgICAgbGV0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpLFxyXG4gICAgICAgICAgICB4aHI6IFhNTEh0dHBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiRklMRVwiLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHBhcmFtcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJEVERcIiwgcGFyYW1zWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcih4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiK3RoaXMuX2p3dFNlcnZpY2UuZ2V0KCkpXHJcbiAgICAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG4gICAgICAgIHJldHVybiB4aHIucmVzcG9uc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
