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
                                .subscribe(msg => {
                                if (msg.Author != _userService.user.userId) {
                                    this.messages.push(msg);
                                    this.isNewMessageAvailable = true;
                                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdJLFlBQW9CLGNBQTZCLEVBQVUsWUFBd0I7b0JBQS9ELG1CQUFjLEdBQWQsY0FBYyxDQUFlO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUZoRiwwQkFBcUIsR0FBVyxLQUFLLENBQUM7b0JBQ3RDLGFBQVEsR0FBYyxFQUFFLENBQUM7b0JBRXhCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNuQyxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztpQ0FDckMsU0FBUyxDQUFDLEdBQUc7Z0NBQ1osRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0NBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29DQUN4QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO2dDQUN6QyxDQUFDOzRCQUNOLENBQUMsQ0FBQyxDQUFDO3dCQUNQLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsQ0FBQztnQkFFTSxXQUFXO29CQUNkLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZDLENBQUM7WUFDSCxDQUFDO1lBckJEO2dCQUFDLGlCQUFVLEVBQUU7O29DQUFBO1lBQ2IsdURBb0JDLENBQUEiLCJmaWxlIjoic2hhcmVkL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHtQdWJudWJTZXJ2aWNlfSBmcm9tICcuL3B1Ym51Yi5zZXJ2aWNlJztcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSAnLi4vLi4vdXNlci91c2VyLnNlcnZpY2UnXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNTZXJ2aWNlIHtcclxucHVibGljIGlzTmV3TWVzc2FnZUF2YWlsYWJsZTpib29sZWFuID0gZmFsc2U7XHJcbnB1YmxpYyBtZXNzYWdlczpBcnJheTxhbnk+ID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wdWJudWJTZXJ2aWNlOiBQdWJudWJTZXJ2aWNlLCBwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3B1Ym51YlNlcnZpY2UuaXNSZWFkeS5zdWJzY3JpYmUoeD0+e1xyXG4gICAgICAgICAgICBpZih4KSB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5fcHVibnViU2VydmljZS5saXN0ZW4oXCJkb2xsYXJUcmFja2VyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKG1zZz0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihtc2cuQXV0aG9yICE9IF91c2VyU2VydmljZS51c2VyLnVzZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTmV3TWVzc2FnZUF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVhZE1lc3NhZ2UoKXtcclxuICAgICAgdGhpcy5pc05ld01lc3NhZ2VBdmFpbGFibGUgPSBmYWxzZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
