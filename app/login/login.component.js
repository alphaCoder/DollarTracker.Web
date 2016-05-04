System.register(['angular2/core', './login.service', '../shared/alert/dtalert.component'], function(exports_1, context_1) {
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
    var core_1, login_service_1, dtalert_component_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dtalert_component_1_1) {
                dtalert_component_1 = dtalert_component_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_loginService) {
                    this._loginService = _loginService;
                    this.pageTitle = "Login";
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.submit = function () {
                    var _this = this;
                    this.dtAlert.Success("Testing dtalert");
                    var payload = { "email": this.email, "password": this.password };
                    this._loginService
                        .login(payload)
                        .subscribe(function (result) {
                        _this.loginResponse = result;
                        _this.loginResult = JSON.stringify(result);
                        console.log(JSON.stringify(result));
                    }, function (error) { return _this.loginResult = error; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], LoginComponent.prototype, "email", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], LoginComponent.prototype, "password", void 0);
                LoginComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/login/login.component.html',
                        directives: [dtalert_component_1.DtAlertComponent]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map