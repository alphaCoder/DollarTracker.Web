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
//# sourceMappingURL=localStorage.service.spec.js.map