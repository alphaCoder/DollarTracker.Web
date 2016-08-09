System.register(['@angular/core', './pubnub.service', '../../user/user.service'], function(exports_1, context_1) {
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
    var core_1, pubnub_service_1, user_service_1;
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
            }],
        execute: function() {
            let NotificationsService = class NotificationsService {
                constructor(_pubnubService, _userService) {
                    this._pubnubService = _pubnubService;
                    this._userService = _userService;
                    this.isNewMessageAvailable = false;
                    this.messages = [];
                    this._pubnubService.isReady.subscribe(x => {
                        if (x) {
                            this._pubnubService.listen("dollarTracker")
                                .filter(x => x.Author != _userService.user.userId)
                                .subscribe(msg => {
                                this.messages.push(msg);
                                this.isNewMessageAvailable = true;
                            });
                        }
                    });
                }
                readMessage() {
                    this.isNewMessageAvailable = false;
                }
            };
            NotificationsService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [pubnub_service_1.PubnubService, user_service_1.UserService])
            ], NotificationsService);
            exports_1("NotificationsService", NotificationsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdJLFlBQW9CLGNBQTZCLEVBQVUsWUFBd0I7b0JBQS9ELG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUZoRiwwQkFBcUIsR0FBVyxLQUFLLENBQUM7b0JBQ3RDLGFBQVEsR0FBYyxFQUFFLENBQUM7b0JBRXhCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNuQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztpQ0FDdEMsTUFBTSxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lDQUMvQyxTQUFTLENBQUMsR0FBRztnQ0FDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQ0FDeEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQzs0QkFDNUMsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDVCxDQUFDO2dCQUVNLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztnQkFDdkMsQ0FBQztZQUNILENBQUM7WUFwQkQ7Z0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7WUFDYix1REFtQkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgQmVoYXZpb3JTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQge1B1Ym51YlNlcnZpY2V9IGZyb20gJy4vcHVibnViLnNlcnZpY2UnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi91c2VyL3VzZXIuc2VydmljZSdcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc1NlcnZpY2Uge1xyXG5wdWJsaWMgaXNOZXdNZXNzYWdlQXZhaWxhYmxlOmJvb2xlYW4gPSBmYWxzZTtcclxucHVibGljIG1lc3NhZ2VzOkFycmF5PGFueT4gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3B1Ym51YlNlcnZpY2U6IFB1Ym51YlNlcnZpY2UsIHByaXZhdGUgX3VzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fcHVibnViU2VydmljZS5pc1JlYWR5LnN1YnNjcmliZSh4PT57XHJcbiAgICAgICAgICAgIGlmKHgpIHtcclxuICAgICAgICAgICAgICAgICB0aGlzLl9wdWJudWJTZXJ2aWNlLmxpc3RlbihcImRvbGxhclRyYWNrZXJcIilcclxuICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcih4PT54LkF1dGhvciAhPSBfdXNlclNlcnZpY2UudXNlci51c2VySWQpXHJcbiAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUobXNnPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc05ld01lc3NhZ2VBdmFpbGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWFkTWVzc2FnZSgpe1xyXG4gICAgICB0aGlzLmlzTmV3TWVzc2FnZUF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
