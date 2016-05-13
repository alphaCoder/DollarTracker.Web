System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DtBaseComponent;
    return {
        setters:[],
        execute: function() {
            DtBaseComponent = (function () {
                function DtBaseComponent(_router, _jwtService) {
                    this._router = _router;
                    this._jwtService = _jwtService;
                }
                DtBaseComponent.prototype.ngOnInit = function () {
                    console.log("Decoding JWT");
                    var token = this._jwtService.get();
                    console.log('jwt expiration time', this._jwtService.isAuthenticated());
                    if (!this._jwtService.isAuthenticated()) {
                        console.log('failed tokenNotExpired');
                        this._router.navigate(['login']);
                    }
                };
                return DtBaseComponent;
            }());
            exports_1("DtBaseComponent", DtBaseComponent);
        }
    }
});
//# sourceMappingURL=dtbase.component.js.map