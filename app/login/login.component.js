System.register(['@angular/core', '@angular/router', './login.service', '../shared/alert/dtalert.component', '../shared/spinner/dtspinner.component', '../jwt/jwt.service'], function(exports_1, context_1) {
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
    var core_1, router_1, login_service_1, dtalert_component_1, dtspinner_component_1, jwt_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (dtalert_component_1_1) {
                dtalert_component_1 = dtalert_component_1_1;
            },
            function (dtspinner_component_1_1) {
                dtspinner_component_1 = dtspinner_component_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_loginService, _router, _jwtService) {
                    this._loginService = _loginService;
                    this._router = _router;
                    this._jwtService = _jwtService;
                    this.pageTitle = "Login";
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.submit = function () {
                    var _this = this;
                    var isValid = this.validateEmailAndPassword();
                    if (!isValid) {
                        return;
                    }
                    var payload = { "email": this.email, "password": this.password };
                    this._loginService
                        .login(payload)
                        .subscribe(function (result) {
                        if (!result.success) {
                            _this.dtAlert.failure(result.message);
                            return;
                        }
                        _this.loginResponse = result;
                        _this._jwtService.set(result.token);
                        console.log("is valid jwt", _this._jwtService.isValid().subscribe(function (x) { return console.log("Valid Jwt subscribe:", x); }));
                        _this.loginResult = JSON.stringify(result);
                        _this._router.navigate(['dashboard']);
                    }, function (error) { return _this.loginResult = error; });
                };
                LoginComponent.prototype.validateEmailAndPassword = function () {
                    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    if (this.email == null || this.email == "" || !EMAIL_REGEXP.test(this.email)) {
                        this.dtAlert.failure("Please enter a valid email");
                        return false;
                    }
                    if (this.password == null || this.password == "") {
                        this.dtAlert.failure("Please enter a password");
                        return false;
                    }
                    return true;
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
                        directives: [dtalert_component_1.DtAlertComponent, dtspinner_component_1.DtSpinButtonComponent]
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router, jwt_service_1.JwtService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map