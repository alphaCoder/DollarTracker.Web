System.register(['@angular/core', 'rxjs/Rx', '../api/api.service', '../apiurl.service'], function(exports_1, context_1) {
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
    var core_1, Rx_1, api_service_1, apiurl_service_1;
    var PubnubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (apiurl_service_1_1) {
                apiurl_service_1 = apiurl_service_1_1;
            }],
        execute: function() {
            let PubnubService = class PubnubService {
                constructor(_apiUrl, _apiService) {
                    this._apiUrl = _apiUrl;
                    this._apiService = _apiService;
                    this.isReady = new Rx_1.BehaviorSubject(false);
                    this._apiService.get(this._apiUrl.pubnubSubscribeKey)
                        .take(1)
                        .subscribe(subKey => {
                        console.log("Got subscribe_key:" + subKey);
                        this.pubnub = PUBNUB.init({
                            subscribe_key: subKey
                        });
                        this.isReady.next(true);
                    });
                }
                listen(channel) {
                    console.log("LISTENING to pubnub channel:" + channel);
                    return Rx_1.Observable.create(observer => {
                        this.pubnub.subscribe({
                            channel: channel,
                            restore: false,
                            message: (msg) => {
                                console.log("GOT PUBNUB MSG");
                                console.log(JSON.stringify(msg));
                                observer.next(msg);
                            }
                        });
                        return () => {
                            this.pubnub.unsubscribe({
                                channel: channel
                            });
                        };
                    });
                }
            };
            PubnubService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [apiurl_service_1.ApiUrl, api_service_1.ApiService])
            ], PubnubService);
            exports_1("PubnubService", PubnubService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9ub3RpZmljYXRpb25zL3B1Ym51Yi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBR0ksWUFBb0IsT0FBYyxFQUFVLFdBQXNCO29CQUE5QyxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFXO29CQUQzRCxZQUFPLEdBQTRCLElBQUksb0JBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztvQkFHMUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQzt5QkFDaEQsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDUCxTQUFTLENBQUMsTUFBTTt3QkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBQyxNQUFNLENBQUMsQ0FBQTt3QkFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUN0QixhQUFhLEVBQUMsTUFBTTt5QkFDdkIsQ0FBQyxDQUFDO3dCQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQTtnQkFDTCxDQUFDO2dCQUVNLE1BQU0sQ0FBQyxPQUFjO29CQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwRCxNQUFNLENBQUMsZUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRO3dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzs0QkFDbEIsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLE9BQU8sRUFBRSxLQUFLOzRCQUNkLE9BQU8sRUFBRSxDQUFDLEdBQUc7Z0NBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dDQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDdkIsQ0FBQzt5QkFDSixDQUFDLENBQUE7d0JBQ0QsTUFBTSxDQUFDOzRCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2dDQUNwQixPQUFPLEVBQUUsT0FBTzs2QkFDbkIsQ0FBQyxDQUFDO3dCQUNQLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ04sQ0FBQztZQXJDRDtnQkFBQyxpQkFBVSxFQUFFOzs2QkFBQTtZQUNiLHlDQW9DQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9ub3RpZmljYXRpb25zL3B1Ym51Yi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3QsIEJlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnLi4vYXBpL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHtBcGlVcmx9IGZyb20gJy4uL2FwaXVybC5zZXJ2aWNlJ1xyXG5kZWNsYXJlIHZhciBQVUJOVUI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQdWJudWJTZXJ2aWNlIHtcclxuICAgIHB1Ym51Yjphbnk7XHJcbiAgICBwdWJsaWMgaXNSZWFkeTpCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FwaVVybDpBcGlVcmwsIHByaXZhdGUgX2FwaVNlcnZpY2U6QXBpU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UuZ2V0KHRoaXMuX2FwaVVybC5wdWJudWJTdWJzY3JpYmVLZXkpXHJcbiAgICAgICAgICAgIC50YWtlKDEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3ViS2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHb3Qgc3Vic2NyaWJlX2tleTpcIitzdWJLZXkpICAgXHJcbiAgICAgICAgICAgIHRoaXMucHVibnViID0gUFVCTlVCLmluaXQoe1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlX2tleTpzdWJLZXlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeS5uZXh0KHRydWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgfVxyXG5cclxuICAgICBwdWJsaWMgbGlzdGVuKGNoYW5uZWw6c3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+XHJcbiAgICAge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkxJU1RFTklORyB0byBwdWJudWIgY2hhbm5lbDpcIitjaGFubmVsKTtcclxuICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+e1xyXG4gICAgICAgICAgICAgdGhpcy5wdWJudWIuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxyXG4gICAgICAgICAgICAgICAgIHJlc3RvcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgIG1lc3NhZ2U6IChtc2cpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdPVCBQVUJOVUIgTVNHXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtc2cpKTtcclxuICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChtc2cpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1Ym51Yi51bnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgIH0pO1xyXG4gICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
