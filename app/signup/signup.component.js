System.register(['@angular/core', '@angular/router', './signup.service', '../shared/alert/dtalert.component', '../shared/spinner/dtspinner.component'], function(exports_1, context_1) {
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
    var core_1, router_1, signup_service_1, dtalert_component_1, dtspinner_component_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (signup_service_1_1) {
                signup_service_1 = signup_service_1_1;
            },
            function (dtalert_component_1_1) {
                dtalert_component_1 = dtalert_component_1_1;
            },
            function (dtspinner_component_1_1) {
                dtspinner_component_1 = dtspinner_component_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_signupService, _router) {
                    this._signupService = _signupService;
                    this._router = _router;
                    this.pageTitle = "Sign Up";
                    this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    this.dtAlert = new dtalert_component_1.DtAlertComponent();
                }
                SignupComponent.prototype.submit = function () {
                    var _this = this;
                    var isValid = this.validateEmailAndPassword();
                    if (!isValid) {
                        return;
                    }
                    var payload = { "email": this.email, "password": this.password };
                    this._signupService
                        .signup(payload)
                        .subscribe(function (result) {
                        if (!result.success) {
                            _this.dtAlert.failure(result.message);
                            return;
                        }
                        else {
                            _this.dtAlert.success("Successfully created account! Please Login");
                            _this.email = "";
                            _this.password = "";
                        }
                    }, function (error) { return _this.dtAlert.failure(error); });
                };
                SignupComponent.prototype.validateEmailAndPassword = function () {
                    if (this.email == null || this.email == "" || !this.EMAIL_REGEXP.test(this.email)) {
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
                ], SignupComponent.prototype, "email", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SignupComponent.prototype, "password", void 0);
                SignupComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/signup/signup.component.html',
                        providers: [signup_service_1.SignupService],
                        directives: [dtalert_component_1.DtAlertComponent, dtspinner_component_1.DtSpinButtonComponent]
                    }), 
                    __metadata('design:paramtypes', [signup_service_1.SignupService, router_1.Router])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map