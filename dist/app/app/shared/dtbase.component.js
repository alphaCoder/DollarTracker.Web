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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvZHRiYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0E7Z0JBQ0kseUJBQW9CLE9BQWMsRUFBVSxXQUFzQjtvQkFBOUMsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBVztnQkFBSSxDQUFDO2dCQUV2RSxrQ0FBUSxHQUFSO29CQUNLLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzlCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO29CQUNyRSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDdEMsQ0FBQztnQkFFSixDQUFDO2dCQUVOLHNCQUFDO1lBQUQsQ0FkQSxBQWNDLElBQUE7WUFkRCw2Q0FjQyxDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvZHRiYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Snd0U2VydmljZX0gZnJvbSAnLi4vand0L2p3dC5zZXJ2aWNlJ1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5leHBvcnQgY2xhc3MgRHRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX2p3dFNlcnZpY2U6Snd0U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVjb2RpbmcgSldUXCIpO1xyXG4gICAgICAgdmFyIHRva2VuID0gdGhpcy5fand0U2VydmljZS5nZXQoKTtcclxuICAgICAgIGNvbnNvbGUubG9nKCdqd3QgZXhwaXJhdGlvbiB0aW1lJyx0aGlzLl9qd3RTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKTtcclxuICAgICAgICBpZighdGhpcy5fand0U2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG9rZW5Ob3RFeHBpcmVkJyk7XHJcbiAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
