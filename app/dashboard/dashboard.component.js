System.register(['@angular/core', './charts/chartdemo', './charts/barchartdemo', '@angular/router', '../jwt/jwt.service', '../shared/dtbase.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, chartdemo_1, barchartdemo_1, router_1, jwt_service_1, dtbase_component_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chartdemo_1_1) {
                chartdemo_1 = chartdemo_1_1;
            },
            function (barchartdemo_1_1) {
                barchartdemo_1 = barchartdemo_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            },
            function (dtbase_component_1_1) {
                dtbase_component_1 = dtbase_component_1_1;
            }],
        execute: function() {
            DashboardComponent = (function (_super) {
                __extends(DashboardComponent, _super);
                function DashboardComponent(_router, _jwtService) {
                    _super.call(this, _router, _jwtService);
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/dashboard/dashboard.component.html',
                        directives: [chartdemo_1.ChartDemo, barchartdemo_1.BarChartDemo],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, jwt_service_1.JwtService])
                ], DashboardComponent);
                return DashboardComponent;
            }(dtbase_component_1.DtBaseComponent));
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map