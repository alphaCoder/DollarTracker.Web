System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DtBaseComponent;
    return {
        setters:[],
        execute: function() {
            class DtBaseComponent {
                constructor(_router, _jwtService) {
                    this._router = _router;
                    this._jwtService = _jwtService;
                }
                ngOnInit() {
                    console.log("Decoding JWT");
                    var token = this._jwtService.get();
                    console.log('jwt expiration time', this._jwtService.isAuthenticated());
                    if (!this._jwtService.isAuthenticated()) {
                        console.log('failed tokenNotExpired');
                        this._router.navigate(['login']);
                    }
                }
            }
            exports_1("DtBaseComponent", DtBaseComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kdGJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFHQTtnQkFDSSxZQUFvQixPQUFjLEVBQVUsV0FBc0I7b0JBQTlDLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVc7Z0JBQUksQ0FBQztnQkFFdkUsUUFBUTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztvQkFDckUsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUEsQ0FBQzt3QkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO3dCQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLENBQUM7Z0JBRUosQ0FBQztZQUVOLENBQUM7WUFkRCw2Q0FjQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9kdGJhc2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtKd3RTZXJ2aWNlfSBmcm9tICcuLi9qd3Qvand0LnNlcnZpY2UnXHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXHJcbmV4cG9ydCBjbGFzcyBEdEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfand0U2VydmljZTpKd3RTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJEZWNvZGluZyBKV1RcIik7XHJcbiAgICAgICB2YXIgdG9rZW4gPSB0aGlzLl9qd3RTZXJ2aWNlLmdldCgpO1xyXG4gICAgICAgY29uc29sZS5sb2coJ2p3dCBleHBpcmF0aW9uIHRpbWUnLHRoaXMuX2p3dFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpO1xyXG4gICAgICAgIGlmKCF0aGlzLl9qd3RTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0b2tlbk5vdEV4cGlyZWQnKTtcclxuICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2xvZ2luJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
