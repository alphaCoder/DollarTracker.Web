System.register(['@angular/core', 'ng2-nvD3'], function(exports_1, context_1) {
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
    var core_1, ng2_nvD3_1;
    var BarChartDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_nvD3_1_1) {
                ng2_nvD3_1 = ng2_nvD3_1_1;
            }],
        execute: function() {
            BarChartDemo = (function () {
                function BarChartDemo() {
                }
                BarChartDemo.prototype.ngOnInit = function () {
                    this.options = {
                        chart: {
                            type: 'discreteBarChart',
                            height: 450,
                            margin: {
                                top: 20,
                                right: 20,
                                bottom: 50,
                                left: 55
                            },
                            x: function (d) { return d.label; },
                            y: function (d) { return d.value; },
                            showValues: true,
                            valueFormat: function (d) {
                                return d3.format(',.4f')(d);
                            },
                            duration: 500,
                            xAxis: {
                                axisLabel: 'X Axis'
                            },
                            yAxis: {
                                axisLabel: 'Y Axis',
                                axisLabelDistance: -10
                            }
                        }
                    };
                    this.data = [
                        {
                            key: "Cumulative Return",
                            values: [
                                {
                                    "label": "A",
                                    "value": -29.765957771107
                                },
                                {
                                    "label": "B",
                                    "value": 0
                                },
                                {
                                    "label": "C",
                                    "value": 32.807804682612
                                },
                                {
                                    "label": "D",
                                    "value": 196.45946739256
                                },
                                {
                                    "label": "E",
                                    "value": 0.19434030906893
                                },
                                {
                                    "label": "F",
                                    "value": -98.079782601442
                                },
                                {
                                    "label": "G",
                                    "value": -13.925743130903
                                },
                                {
                                    "label": "H",
                                    "value": -5.1387322875705
                                }
                            ]
                        }
                    ];
                };
                BarChartDemo.prototype.sinAndCos = function () {
                    var sin = [], sin2 = [], cos = [];
                    //Data is represented as an array of {x,y} pairs.
                    for (var i = 0; i < 100; i++) {
                        sin.push({ x: i, y: Math.sin(i / 10) });
                        sin2.push({ x: i, y: i % 10 == 5 ? null : Math.sin(i / 10) * 0.25 + 0.5 });
                        cos.push({ x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10 });
                    }
                    //Line chart data should be sent as an array of series objects.
                    return [
                        {
                            values: sin,
                            key: 'Sine Wave',
                            color: '#ff7f0e' //color - optional: choose your own line color.
                        },
                        {
                            values: cos,
                            key: 'Cosine Wave',
                            color: '#2ca02c'
                        },
                        {
                            values: sin2,
                            key: 'Another sine wave',
                            color: '#7777ff',
                            area: true //area - set to true if you want this line to turn into a filled area chart.
                        }
                    ];
                };
                BarChartDemo = __decorate([
                    core_1.Component({
                        selector: 'bar-chart',
                        directives: [ng2_nvD3_1.nvD3],
                        template: "\n    <div style=\"background-color: #FFF;\">\n      <nvd3 [options]=\"options\" [data]=\"data\"></nvd3>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BarChartDemo);
                return BarChartDemo;
            }());
            exports_1("BarChartDemo", BarChartDemo);
        }
    }
});
//# sourceMappingURL=barchartdemo.js.map