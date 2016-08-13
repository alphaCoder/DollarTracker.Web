System.register(['@angular/core', './pubnub.service', '../../user/user.service', '../api/api.service', '../apiurl.service'], function(exports_1, context_1) {
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
    var core_1, pubnub_service_1, user_service_1, api_service_1, apiurl_service_1;
    var NotificationsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pubnub_service_1_1) {
                pubnub_service_1 = pubnub_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            }],
        execute: function() {
            let NotificationsService = class NotificationsService {
                constructor(_pubnubService, _userService, _apiUrl, _apiService) {
                    this._pubnubService = _pubnubService;
                    this._userService = _userService;
                    this._apiUrl = _apiUrl;
                    this._apiService = _apiService;
                    this.isNewMessageAvailable = false;
                    this.newMessagesCount = 0;
                    this.messages = [];
                    this._pubnubService.isReady.subscribe(x => {
                        if (x) {
                            this._pubnubService.listen(this._userService.user.userId)
                                .filter(x => x.Author != _userService.user.userId)
                                .subscribe(msg => {
                                //this.messages.push(msg); //todo: this will replace by toaster
                                this.isNewMessageAvailable = true;
                                this.newMessagesCount += 1;
                            });
                        }
                    });
                }
                readMessage() {
                    //todo: apply pagination
                    var url = this._apiUrl.getNotifications + "?page=0&size=10&read=" + true;
                    this._apiService
                        .get(url)
                        .subscribe(x => {
                        console.log("GOT Notifications");
                        console.log(x);
                        this.messages = x.data;
                        this.isNewMessageAvailable = false;
                        this.newMessagesCount = 0;
                    });
                }
                setMessageCount(count) {
                    this.newMessagesCount = count;
                }
            };
            NotificationsService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [pubnub_service_1.PubnubService, user_service_1.UserService, apiurl_service_1.ApiUrl, api_service_1.ApiService])
            ], NotificationsService);
            exports_1("NotificationsService", NotificationsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUlJLFlBQW9CLGNBQTZCLEVBQVUsWUFBd0IsRUFDL0QsT0FBYyxFQUFVLFdBQXNCO29CQUQ5QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBWTtvQkFDL0QsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFKL0QsMEJBQXFCLEdBQVcsS0FBSyxDQUFDO29CQUN0QyxxQkFBZ0IsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLGFBQVEsR0FBYyxFQUFFLENBQUM7b0JBSXhCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNuQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQ0FDcEQsTUFBTSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lDQUMvQyxTQUFTLENBQUMsR0FBRztnQ0FDVCwrREFBK0Q7Z0NBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Z0NBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsSUFBRyxDQUFDLENBQUM7NEJBQzlCLENBQUMsQ0FBQyxDQUFDO3dCQUNULENBQUM7b0JBQ1QsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQztnQkFFTSxXQUFXO29CQUNkLHdCQUF3QjtvQkFDeEIsSUFBSSxHQUFHLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyx1QkFBdUIsR0FBQyxJQUFJLENBQUM7b0JBQ3RFLElBQUksQ0FBQyxXQUFXO3lCQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUM7eUJBQ1IsU0FBUyxDQUFDLENBQUM7d0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQzt3QkFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztvQkFDOUIsQ0FBQyxDQUFDLENBQUE7Z0JBQ1YsQ0FBQztnQkFDTSxlQUFlLENBQUMsS0FBSztvQkFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDbEMsQ0FBQztZQUNILENBQUM7WUFyQ0Q7Z0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7WUFDYix1REFvQ0MsQ0FBQSIsImZpbGUiOiJzaGFyZWQvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge1B1Ym51YlNlcnZpY2V9IGZyb20gJy4vcHVibnViLnNlcnZpY2UnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi91c2VyL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vYXBpL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHtBcGlVcmx9IGZyb20gJy4uL2FwaXVybC5zZXJ2aWNlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc1NlcnZpY2Uge1xyXG5wdWJsaWMgaXNOZXdNZXNzYWdlQXZhaWxhYmxlOmJvb2xlYW4gPSBmYWxzZTtcclxucHVibGljIG5ld01lc3NhZ2VzQ291bnQgPSAwOyBcclxucHVibGljIG1lc3NhZ2VzOkFycmF5PGFueT4gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3B1Ym51YlNlcnZpY2U6IFB1Ym51YlNlcnZpY2UsIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXBpVXJsOkFwaVVybCwgcHJpdmF0ZSBfYXBpU2VydmljZTpBcGlTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9wdWJudWJTZXJ2aWNlLmlzUmVhZHkuc3Vic2NyaWJlKHg9PntcclxuICAgICAgICAgICAgaWYoeCkge1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX3B1Ym51YlNlcnZpY2UubGlzdGVuKHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXIudXNlcklkKVxyXG4gICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHg9PnguQXV0aG9yICE9IF91c2VyU2VydmljZS51c2VyLnVzZXJJZClcclxuICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShtc2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5tZXNzYWdlcy5wdXNoKG1zZyk7IC8vdG9kbzogdGhpcyB3aWxsIHJlcGxhY2UgYnkgdG9hc3RlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNOZXdNZXNzYWdlQXZhaWxhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2VzQ291bnQgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVhZE1lc3NhZ2UoKXtcclxuICAgICAgLy90b2RvOiBhcHBseSBwYWdpbmF0aW9uXHJcbiAgICAgIHZhciB1cmw9IHRoaXMuX2FwaVVybC5nZXROb3RpZmljYXRpb25zICsgXCI/cGFnZT0wJnNpemU9MTAmcmVhZD1cIit0cnVlO1xyXG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlXHJcbiAgICAgICAgICAuZ2V0KHVybClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoeD0+e1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR09UIE5vdGlmaWNhdGlvbnNcIik7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coeCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHguZGF0YTtcclxuICAgICAgICAgICAgICB0aGlzLmlzTmV3TWVzc2FnZUF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZXNDb3VudCA9IDA7XHJcbiAgICAgICAgICB9KVxyXG4gIH1cclxuICBwdWJsaWMgc2V0TWVzc2FnZUNvdW50KGNvdW50KXtcclxuICAgICAgdGhpcy5uZXdNZXNzYWdlc0NvdW50ID0gY291bnQ7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
