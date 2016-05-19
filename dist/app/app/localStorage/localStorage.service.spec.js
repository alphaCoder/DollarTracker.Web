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
            testing_1.describe('localStorage service', function () {
                testing_1.beforeEachProviders(function () { return [localStorage_service_1.LocalStorageService]; });
                testing_1.it('get item should get value', testing_1.inject([localStorage_service_1.LocalStorageService], function (service) {
                    var expected = "abc";
                    var key = "test";
                    service.setItem(key, expected);
                    testing_1.expect(service.getItem(key)).toEqual(expected);
                }));
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2NhbFN0b3JhZ2UvbG9jYWxTdG9yYWdlLnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1lBSUEsa0JBQVEsQ0FBQyxzQkFBc0IsRUFBRTtnQkFDL0IsNkJBQW1CLENBQUMsY0FBTSxPQUFBLENBQUMsMENBQW1CLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO2dCQUVoRCxZQUFFLENBQUMsMkJBQTJCLEVBQUUsZ0JBQU0sQ0FBQyxDQUFDLDBDQUFtQixDQUFDLEVBQUUsVUFBQyxPQUFPO29CQUNuRSxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQy9CLGdCQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9sb2NhbFN0b3JhZ2UvbG9jYWxTdG9yYWdlLnNlcnZpY2Uuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGl0LCBpaXQsIGRlc2NyaWJlLCBleHBlY3QsIGluamVjdCwgaW5qZWN0QXN5bmMsIGJlZm9yZUVhY2hQcm92aWRlcnMsIGZha2VBc3luYywgdGljayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XHJcbmltcG9ydCB7IHByb3ZpZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7TG9jYWxTdG9yYWdlU2VydmljZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2Uuc2VydmljZSdcclxuZGVzY3JpYmUoJ2xvY2FsU3RvcmFnZSBzZXJ2aWNlJywgKCkgPT4ge1xyXG4gIGJlZm9yZUVhY2hQcm92aWRlcnMoKCkgPT4gW0xvY2FsU3RvcmFnZVNlcnZpY2VdKVxyXG5cclxuICBpdCgnZ2V0IGl0ZW0gc2hvdWxkIGdldCB2YWx1ZScsIGluamVjdChbTG9jYWxTdG9yYWdlU2VydmljZV0sIChzZXJ2aWNlKSA9PiB7XHJcbiAgICAgbGV0IGV4cGVjdGVkID0gXCJhYmNcIjtcclxuICAgICBsZXQga2V5ID0gXCJ0ZXN0XCI7XHJcbiAgICAgc2VydmljZS5zZXRJdGVtKGtleSwgZXhwZWN0ZWQpO1xyXG4gICAgIGV4cGVjdChzZXJ2aWNlLmdldEl0ZW0oa2V5KSkudG9FcXVhbChleHBlY3RlZCk7XHJcbn0pKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
