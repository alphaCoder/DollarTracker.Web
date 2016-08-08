System.register(['@angular/core', './pubnub.service'], function(exports_1, context_1) {
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
    var core_1, pubnub_service_1;
    var NotificationsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pubnub_service_1_1) {
                pubnub_service_1 = pubnub_service_1_1;
            }],
        execute: function() {
            let NotificationsService = class NotificationsService {
                constructor(_pubnubService) {
                    this._pubnubService = _pubnubService;
                    this.isNewMessageAvailable = false;
                    this.messages = [];
                    this._pubnubService.isReady.subscribe(x => {
                        if (x) {
                            this._pubnubService.listen("dollarTracker")
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
                __metadata('design:paramtypes', [pubnub_service_1.PubnubService])
            ], NotificationsService);
            exports_1("NotificationsService", NotificationsService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUdJLFlBQW9CLGNBQTZCO29CQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtvQkFGOUMsMEJBQXFCLEdBQVcsS0FBSyxDQUFDO29CQUN0QyxhQUFRLEdBQWMsRUFBRSxDQUFDO29CQUVwQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDbkMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7aUNBQ3RDLFNBQVMsQ0FBQyxHQUFHO2dDQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUN4QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDOzRCQUN4QyxDQUFDLENBQUMsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNiLENBQUM7Z0JBRU0sV0FBVztvQkFDZCxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO2dCQUN2QyxDQUFDO1lBQ0gsQ0FBQztZQW5CRDtnQkFBQyxpQkFBVSxFQUFFOztvQ0FBQTtZQUNiLHVEQWtCQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0LCBCZWhhdmlvclN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7UHVibnViU2VydmljZX0gZnJvbSAnLi9wdWJudWIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zU2VydmljZSB7XHJcbnB1YmxpYyBpc05ld01lc3NhZ2VBdmFpbGFibGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5wdWJsaWMgbWVzc2FnZXM6QXJyYXk8YW55PiA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHVibnViU2VydmljZTogUHVibnViU2VydmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wdWJudWJTZXJ2aWNlLmlzUmVhZHkuc3Vic2NyaWJlKHg9PntcclxuICAgICAgICAgICAgICAgIGlmKHgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3B1Ym51YlNlcnZpY2UubGlzdGVuKFwiZG9sbGFyVHJhY2tlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUobXNnPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTmV3TWVzc2FnZUF2YWlsYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWFkTWVzc2FnZSgpe1xyXG4gICAgICB0aGlzLmlzTmV3TWVzc2FnZUF2YWlsYWJsZSA9IGZhbHNlO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
