System.register(['angular2/testing', 'angular2/core', './user.service', './login.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var testing_1, core_1, user_service_1, login_service_1;
    var MockLoginService;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            testing_1.describe('user service', function () {
                testing_1.beforeEachProviders(function () { return [login_service_1.LoginService, user_service_1.UserService]; });
                testing_1.it('should validate pins', testing_1.inject([user_service_1.UserService], function (service) {
                    service.pin = 12345;
                    testing_1.expect(service.isValidPin()).toBe(false);
                    service.pin = 0;
                    testing_1.expect(service.isValidPin()).toBe(true);
                    service.pin = 9999;
                    testing_1.expect(service.isValidPin()).toBe(true);
                    service.pin = -50;
                    testing_1.expect(service.isValidPin()).toBe(false);
                }));
                testing_1.it('should greet when pin is wrong', testing_1.injectAsync([user_service_1.UserService], function (service) {
                    service.pin = 9999;
                    return service.getGreeting().then(function (greeting) {
                        testing_1.expect(greeting).toEqual('Login failure!');
                    });
                }), 3000);
                testing_1.it('should greet when pin is right', testing_1.injectAsync([user_service_1.UserService], function (service) {
                    service.pin = 2015;
                    return service.getGreeting().then(function (greeting) {
                        testing_1.expect(greeting).toEqual('Welcome!');
                    });
                }), 3000);
            });
            MockLoginService = (function (_super) {
                __extends(MockLoginService, _super);
                function MockLoginService() {
                    _super.apply(this, arguments);
                }
                MockLoginService.prototype.login = function (pin) {
                    return Promise.resolve(true);
                };
                return MockLoginService;
            }(login_service_1.LoginService));
            testing_1.describe('with mocked login', function () {
                testing_1.beforeEachProviders(function () { return [core_1.provide(login_service_1.LoginService, { useClass: MockLoginService }), user_service_1.UserService]; });
                testing_1.it('should greet', testing_1.injectAsync([user_service_1.UserService], function (service) {
                    return service.getGreeting().then(function (greeting) {
                        testing_1.expect(greeting).toEqual('Welcome!');
                    });
                }));
            });
            testing_1.describe('with fake async', function () {
                testing_1.beforeEachProviders(function () { return [login_service_1.LoginService, user_service_1.UserService]; });
                testing_1.it('should greet (with fakeAsync)', testing_1.inject([user_service_1.UserService], testing_1.fakeAsync(function (service) {
                    var greeting;
                    service.getGreeting().then(function (value) {
                        greeting = value;
                    });
                    testing_1.tick(2000);
                    testing_1.expect(greeting).toEqual('Login failure!');
                })));
            });
        }
    }
});
//# sourceMappingURL=user.service.spec.js.map