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
                    var url = this._apiUrl.getNotifications + "?read=" + this.isNewMessageAvailable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUlJLFlBQW9CLGNBQTZCLEVBQVUsWUFBd0IsRUFDL0QsT0FBYyxFQUFVLFdBQXNCO29CQUQ5QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBWTtvQkFDL0QsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBVztvQkFKL0QsMEJBQXFCLEdBQVcsS0FBSyxDQUFDO29CQUN0QyxxQkFBZ0IsR0FBRyxDQUFDLENBQUM7b0JBQ3JCLGFBQVEsR0FBYyxFQUFFLENBQUM7b0JBSXhCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNuQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQ0FDcEQsTUFBTSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lDQUMvQyxTQUFTLENBQUMsR0FBRztnQ0FDVCwrREFBK0Q7Z0NBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7Z0NBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsSUFBRyxDQUFDLENBQUM7NEJBQzlCLENBQUMsQ0FBQyxDQUFDO3dCQUNULENBQUM7b0JBQ1QsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQztnQkFFTSxXQUFXO29CQUNkLHdCQUF3QjtvQkFDeEIsSUFBSSxHQUFHLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLEdBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO29CQUM3RSxJQUFJLENBQUMsV0FBVzt5QkFDWCxHQUFHLENBQUMsR0FBRyxDQUFDO3lCQUNSLFNBQVMsQ0FBQyxDQUFDO3dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7d0JBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7b0JBQzlCLENBQUMsQ0FBQyxDQUFBO2dCQUNWLENBQUM7Z0JBQ00sZUFBZSxDQUFDLEtBQUs7b0JBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLENBQUM7WUFDSCxDQUFDO1lBckNEO2dCQUFDLGlCQUFVLEVBQUU7O29DQUFBO1lBQ2IsdURBb0NDLENBQUEiLCJmaWxlIjoic2hhcmVkL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtQdWJudWJTZXJ2aWNlfSBmcm9tICcuL3B1Ym51Yi5zZXJ2aWNlJztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0FwaVNlcnZpY2V9IGZyb20gJy4uL2FwaS9hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7QXBpVXJsfSBmcm9tICcuLi9hcGl1cmwuc2VydmljZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNTZXJ2aWNlIHtcclxucHVibGljIGlzTmV3TWVzc2FnZUF2YWlsYWJsZTpib29sZWFuID0gZmFsc2U7XHJcbnB1YmxpYyBuZXdNZXNzYWdlc0NvdW50ID0gMDsgXHJcbnB1YmxpYyBtZXNzYWdlczpBcnJheTxhbnk+ID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wdWJudWJTZXJ2aWNlOiBQdWJudWJTZXJ2aWNlLCBwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2FwaVVybDpBcGlVcmwsIHByaXZhdGUgX2FwaVNlcnZpY2U6QXBpU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fcHVibnViU2VydmljZS5pc1JlYWR5LnN1YnNjcmliZSh4PT57XHJcbiAgICAgICAgICAgIGlmKHgpIHtcclxuICAgICAgICAgICAgICAgICB0aGlzLl9wdWJudWJTZXJ2aWNlLmxpc3Rlbih0aGlzLl91c2VyU2VydmljZS51c2VyLnVzZXJJZClcclxuICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcih4PT54LkF1dGhvciAhPSBfdXNlclNlcnZpY2UudXNlci51c2VySWQpXHJcbiAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUobXNnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubWVzc2FnZXMucHVzaChtc2cpOyAvL3RvZG86IHRoaXMgd2lsbCByZXBsYWNlIGJ5IHRvYXN0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTmV3TWVzc2FnZUF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlc0NvdW50ICs9MTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlYWRNZXNzYWdlKCl7XHJcbiAgICAgIC8vdG9kbzogYXBwbHkgcGFnaW5hdGlvblxyXG4gICAgICB2YXIgdXJsPSB0aGlzLl9hcGlVcmwuZ2V0Tm90aWZpY2F0aW9ucyArIFwiP3JlYWQ9XCIrdGhpcy5pc05ld01lc3NhZ2VBdmFpbGFibGU7XHJcbiAgICAgIHRoaXMuX2FwaVNlcnZpY2VcclxuICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSh4PT57XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHT1QgTm90aWZpY2F0aW9uc1wiKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4KTtcclxuICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0geC5kYXRhO1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNOZXdNZXNzYWdlQXZhaWxhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlc0NvdW50ID0gMDtcclxuICAgICAgICAgIH0pXHJcbiAgfVxyXG4gIHB1YmxpYyBzZXRNZXNzYWdlQ291bnQoY291bnQpe1xyXG4gICAgICB0aGlzLm5ld01lc3NhZ2VzQ291bnQgPSBjb3VudDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
