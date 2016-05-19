System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var DtAlertComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DtAlertComponent = (function () {
                function DtAlertComponent() {
                    this.messages = [];
                }
                DtAlertComponent.prototype.ngOnInit = function () {
                };
                DtAlertComponent.prototype.success = function (message) {
                    var msg = { "key": "success", "text": message };
                    this.messages.push(msg);
                    this.scheduleRemoval(msg);
                };
                DtAlertComponent.prototype.failure = function (message) {
                    var msg = { "key": "danger", "text": message };
                    this.messages.push(msg);
                    this.scheduleRemoval(msg);
                };
                DtAlertComponent.prototype.scheduleRemoval = function (msg) {
                    var _this = this;
                    setTimeout(function () {
                        var idx = _this.messages.indexOf(msg);
                        _this.messages.splice(idx, 1);
                    }, 3000);
                };
                DtAlertComponent.prototype.remove = function (idx) {
                    if (idx >= 0) {
                        this.messages.splice(idx, 1);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', DtAlertComponent)
                ], DtAlertComponent.prototype, "malert", void 0);
                DtAlertComponent = __decorate([
                    core_1.Component({
                        selector: 'dt-alert',
                        templateUrl: 'app/shared/alert/dtalert.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DtAlertComponent);
                return DtAlertComponent;
            }());
            exports_1("DtAlertComponent", DtAlertComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvYWxlcnQvZHRhbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFSTtvQkFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSO2dCQUNBLENBQUM7Z0JBRU0sa0NBQU8sR0FBZCxVQUFlLE9BQWM7b0JBQ3pCLElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUE7b0JBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVNLGtDQUFPLEdBQWQsVUFBZSxPQUFjO29CQUN6QixJQUFJLEdBQUcsR0FBRyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBQyxDQUFBO29CQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsQ0FBQztnQkFFTywwQ0FBZSxHQUF2QixVQUF3QixHQUFPO29CQUEvQixpQkFLQztvQkFKRyxVQUFVLENBQUM7d0JBQ1AsSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNiLENBQUM7Z0JBQ00saUNBQU0sR0FBYixVQUFjLEdBQU87b0JBQ2YsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQ7b0JBQUMsWUFBSyxFQUFFOztnRUFBQTtnQkFyQ1o7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLHlDQUF5QztxQkFDekQsQ0FBQzs7b0NBQUE7Z0JBbUNGLHVCQUFDO1lBQUQsQ0FsQ0EsQUFrQ0MsSUFBQTtZQWxDRCwrQ0FrQ0MsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2FsZXJ0L2R0YWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZHQtYWxlcnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvc2hhcmVkL2FsZXJ0L2R0YWxlcnQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEdEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBtZXNzYWdlczphbnlbXTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWNjZXNzKG1lc3NhZ2U6c3RyaW5nKTp2b2lke1xyXG4gICAgICAgIHZhciBtc2cgPSB7XCJrZXlcIjpcInN1Y2Nlc3NcIiwgXCJ0ZXh0XCI6IG1lc3NhZ2V9XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1zZyk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZVJlbW92YWwobXNnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGZhaWx1cmUobWVzc2FnZTpzdHJpbmcpOnZvaWR7XHJcbiAgICAgICAgdmFyIG1zZyA9IHtcImtleVwiOlwiZGFuZ2VyXCIsIFwidGV4dFwiOiBtZXNzYWdlfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVSZW1vdmFsKG1zZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgc2NoZWR1bGVSZW1vdmFsKG1zZzphbnkpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMubWVzc2FnZXMuaW5kZXhPZihtc2cpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZShpZHgsMSk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlKGlkeDphbnkpOnZvaWR7XHJcbiAgICAgICAgICBpZihpZHggPj0gMCl7XHJcbiAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQElucHV0KCkgbWFsZXJ0OkR0QWxlcnRDb21wb25lbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
