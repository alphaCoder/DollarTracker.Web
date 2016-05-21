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
            let DtAlertComponent = class DtAlertComponent {
                constructor() {
                    this.messages = [];
                }
                ngOnInit() {
                }
                success(message) {
                    var msg = { "key": "success", "text": message };
                    this.messages.push(msg);
                    this.scheduleRemoval(msg);
                }
                failure(message) {
                    var msg = { "key": "danger", "text": message };
                    this.messages.push(msg);
                    this.scheduleRemoval(msg);
                }
                scheduleRemoval(msg) {
                    setTimeout(() => {
                        var idx = this.messages.indexOf(msg);
                        this.messages.splice(idx, 1);
                    }, 3000);
                }
                remove(idx) {
                    if (idx >= 0) {
                        this.messages.splice(idx, 1);
                    }
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
            exports_1("DtAlertComponent", DtAlertComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9hbGVydC9kdGFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUVJO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELFFBQVE7Z0JBQ1IsQ0FBQztnQkFFTSxPQUFPLENBQUMsT0FBYztvQkFDekIsSUFBSSxHQUFHLEdBQUcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUMsQ0FBQTtvQkFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Z0JBRU0sT0FBTyxDQUFDLE9BQWM7b0JBQ3pCLElBQUksR0FBRyxHQUFHLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUE7b0JBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQUVPLGVBQWUsQ0FBQyxHQUFPO29CQUMzQixVQUFVLENBQUM7d0JBQ1AsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNiLENBQUM7Z0JBQ00sTUFBTSxDQUFDLEdBQU87b0JBQ2YsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxDQUFDO2dCQUNQLENBQUM7WUFHTCxDQUFDO1lBREc7Z0JBQUMsWUFBSyxFQUFFOzs0REFBQTtZQXJDWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixXQUFXLEVBQUUseUNBQXlDO2lCQUN6RCxDQUFDOztnQ0FBQTtZQUNGLCtDQWtDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9hbGVydC9kdGFsZXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2R0LWFsZXJ0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3NoYXJlZC9hbGVydC9kdGFsZXJ0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHRBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgbWVzc2FnZXM6YW55W107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VjY2VzcyhtZXNzYWdlOnN0cmluZyk6dm9pZHtcclxuICAgICAgICB2YXIgbXNnID0ge1wia2V5XCI6XCJzdWNjZXNzXCIsIFwidGV4dFwiOiBtZXNzYWdlfVxyXG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVSZW1vdmFsKG1zZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBmYWlsdXJlKG1lc3NhZ2U6c3RyaW5nKTp2b2lke1xyXG4gICAgICAgIHZhciBtc2cgPSB7XCJrZXlcIjpcImRhbmdlclwiLCBcInRleHRcIjogbWVzc2FnZX1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobXNnKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlUmVtb3ZhbChtc2cpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNjaGVkdWxlUmVtb3ZhbChtc2c6YW55KXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHZhciBpZHggPSB0aGlzLm1lc3NhZ2VzLmluZGV4T2YobXNnKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaWR4LDEpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZShpZHg6YW55KTp2b2lke1xyXG4gICAgICAgICAgaWYoaWR4ID49IDApe1xyXG4gICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBJbnB1dCgpIG1hbGVydDpEdEFsZXJ0Q29tcG9uZW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
