System.register(['@angular/core/testing', './localStorage.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, localStorage_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (localStorage_service_1_1) {
                localStorage_service_1 = localStorage_service_1_1;
            }],
        execute: function() {
            testing_1.describe('localStorage service', () => {
                testing_1.beforeEachProviders(() => [localStorage_service_1.LocalStorageService]);
                testing_1.it('get item should get value', testing_1.inject([localStorage_service_1.LocalStorageService], (service) => {
                    let expected = "abc";
                    let key = "test";
                    service.setItem(key, expected);
                    testing_1.expect(service.getItem(key)).toEqual(expected);
                }));
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsU3RvcmFnZS9sb2NhbFN0b3JhZ2Uuc2VydmljZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7WUFJQSxrQkFBUSxDQUFDLHNCQUFzQixFQUFFO2dCQUMvQiw2QkFBbUIsQ0FBQyxNQUFNLENBQUMsMENBQW1CLENBQUMsQ0FBQyxDQUFBO2dCQUVoRCxZQUFFLENBQUMsMkJBQTJCLEVBQUUsZ0JBQU0sQ0FBQyxDQUFDLDBDQUFtQixDQUFDLEVBQUUsQ0FBQyxPQUFPO29CQUNuRSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQy9CLGdCQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImxvY2FsU3RvcmFnZS9sb2NhbFN0b3JhZ2Uuc2VydmljZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXQsIGlpdCwgZGVzY3JpYmUsIGV4cGVjdCwgaW5qZWN0LCBpbmplY3RBc3luYywgYmVmb3JlRWFjaFByb3ZpZGVycywgZmFrZUFzeW5jLCB0aWNrIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcclxuaW1wb3J0IHsgcHJvdmlkZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtMb2NhbFN0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5zZXJ2aWNlJ1xyXG5kZXNjcmliZSgnbG9jYWxTdG9yYWdlIHNlcnZpY2UnLCAoKSA9PiB7XHJcbiAgYmVmb3JlRWFjaFByb3ZpZGVycygoKSA9PiBbTG9jYWxTdG9yYWdlU2VydmljZV0pXHJcblxyXG4gIGl0KCdnZXQgaXRlbSBzaG91bGQgZ2V0IHZhbHVlJywgaW5qZWN0KFtMb2NhbFN0b3JhZ2VTZXJ2aWNlXSwgKHNlcnZpY2UpID0+IHtcclxuICAgICBsZXQgZXhwZWN0ZWQgPSBcImFiY1wiO1xyXG4gICAgIGxldCBrZXkgPSBcInRlc3RcIjtcclxuICAgICBzZXJ2aWNlLnNldEl0ZW0oa2V5LCBleHBlY3RlZCk7XHJcbiAgICAgZXhwZWN0KHNlcnZpY2UuZ2V0SXRlbShrZXkpKS50b0VxdWFsKGV4cGVjdGVkKTtcclxufSkpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
