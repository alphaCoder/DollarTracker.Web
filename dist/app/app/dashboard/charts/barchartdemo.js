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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvY2hhcnRzL2JhcmNoYXJ0ZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUFBO2dCQTRHQSxDQUFDO2dCQXZHQywrQkFBUSxHQUFSO29CQUVFLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ2IsS0FBSyxFQUFFOzRCQUNHLElBQUksRUFBRSxrQkFBa0I7NEJBQ3hCLE1BQU0sRUFBRSxHQUFHOzRCQUNYLE1BQU0sRUFBRztnQ0FDTCxHQUFHLEVBQUUsRUFBRTtnQ0FDUCxLQUFLLEVBQUUsRUFBRTtnQ0FDVCxNQUFNLEVBQUUsRUFBRTtnQ0FDVixJQUFJLEVBQUUsRUFBRTs2QkFDWDs0QkFDRCxDQUFDLEVBQUUsVUFBUyxDQUFDLElBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDOzRCQUMvQixDQUFDLEVBQUUsVUFBUyxDQUFDLElBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDOzRCQUMvQixVQUFVLEVBQUUsSUFBSTs0QkFDaEIsV0FBVyxFQUFFLFVBQVMsQ0FBQztnQ0FDbkIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2hDLENBQUM7NEJBQ0QsUUFBUSxFQUFFLEdBQUc7NEJBQ2IsS0FBSyxFQUFFO2dDQUNILFNBQVMsRUFBRSxRQUFROzZCQUN0Qjs0QkFDRCxLQUFLLEVBQUU7Z0NBQ0gsU0FBUyxFQUFFLFFBQVE7Z0NBQ25CLGlCQUFpQixFQUFFLENBQUMsRUFBRTs2QkFDekI7eUJBQ0o7cUJBQ1IsQ0FBQztvQkFFRixJQUFJLENBQUMsSUFBSSxHQUFHO3dCQUNKOzRCQUNJLEdBQUcsRUFBRSxtQkFBbUI7NEJBQ3hCLE1BQU0sRUFBRTtnQ0FDSjtvQ0FDSSxPQUFPLEVBQUcsR0FBRztvQ0FDYixPQUFPLEVBQUcsQ0FBQyxlQUFlO2lDQUM3QjtnQ0FDRDtvQ0FDSSxPQUFPLEVBQUcsR0FBRztvQ0FDYixPQUFPLEVBQUcsQ0FBQztpQ0FDZDtnQ0FDRDtvQ0FDSSxPQUFPLEVBQUcsR0FBRztvQ0FDYixPQUFPLEVBQUcsZUFBZTtpQ0FDNUI7Z0NBQ0Q7b0NBQ0ksT0FBTyxFQUFHLEdBQUc7b0NBQ2IsT0FBTyxFQUFHLGVBQWU7aUNBQzVCO2dDQUNEO29DQUNJLE9BQU8sRUFBRyxHQUFHO29DQUNiLE9BQU8sRUFBRyxnQkFBZ0I7aUNBQzdCO2dDQUNEO29DQUNJLE9BQU8sRUFBRyxHQUFHO29DQUNiLE9BQU8sRUFBRyxDQUFDLGVBQWU7aUNBQzdCO2dDQUNEO29DQUNJLE9BQU8sRUFBRyxHQUFHO29DQUNiLE9BQU8sRUFBRyxDQUFDLGVBQWU7aUNBQzdCO2dDQUNEO29DQUNJLE9BQU8sRUFBRyxHQUFHO29DQUNiLE9BQU8sRUFBRyxDQUFDLGVBQWU7aUNBQzdCOzZCQUNKO3lCQUNKO3FCQUNKLENBQUM7Z0JBQ1IsQ0FBQztnQkFHRCxnQ0FBUyxHQUFUO29CQUNFLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBQyxJQUFJLEdBQUcsRUFBRSxFQUNwQixHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUVYLGlEQUFpRDtvQkFDakQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLEdBQUcsR0FBRyxFQUFDLENBQUMsQ0FBQzt3QkFDdEUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxFQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUM7b0JBQ25FLENBQUM7b0JBRUQsK0RBQStEO29CQUMvRCxNQUFNLENBQUM7d0JBQ0w7NEJBQ0UsTUFBTSxFQUFFLEdBQUc7NEJBQ1gsR0FBRyxFQUFFLFdBQVc7NEJBQ2hCLEtBQUssRUFBRSxTQUFTLENBQUUsK0NBQStDO3lCQUNsRTt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsR0FBRzs0QkFDWCxHQUFHLEVBQUUsYUFBYTs0QkFDbEIsS0FBSyxFQUFFLFNBQVM7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxJQUFJOzRCQUNaLEdBQUcsRUFBRSxtQkFBbUI7NEJBQ3hCLEtBQUssRUFBRSxTQUFTOzRCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFNLDRFQUE0RTt5QkFDN0Y7cUJBQ0YsQ0FBQztnQkFDSixDQUFDO2dCQW5ISDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixVQUFVLEVBQUUsQ0FBQyxlQUFJLENBQUM7d0JBQ2xCLFFBQVEsRUFBRSwwSEFJVDtxQkFDRixDQUFDOztnQ0FBQTtnQkE2R0YsbUJBQUM7WUFBRCxDQTVHQSxBQTRHQyxJQUFBO1lBNUdELHVDQTRHQyxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvY2hhcnRzL2JhcmNoYXJ0ZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7bnZEM30gZnJvbSAnbmcyLW52RDMnO1xyXG5kZWNsYXJlIGxldCBkMzogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jhci1jaGFydCcsXHJcbiAgZGlyZWN0aXZlczogW252RDNdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcIj5cclxuICAgICAgPG52ZDMgW29wdGlvbnNdPVwib3B0aW9uc1wiIFtkYXRhXT1cImRhdGFcIj48L252ZDM+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXJDaGFydERlbW8ge1xyXG4gIG9wdGlvbnM7XHJcbiAgZGF0YTtcclxuICBjaGFydFR5cGU7XHJcblxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBcclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdkaXNjcmV0ZUJhckNoYXJ0JyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDUwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB4OiBmdW5jdGlvbihkKXtyZXR1cm4gZC5sYWJlbDt9LFxyXG4gICAgICAgICAgICAgICAgeTogZnVuY3Rpb24oZCl7cmV0dXJuIGQudmFsdWU7fSxcclxuICAgICAgICAgICAgICAgIHNob3dWYWx1ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUZvcm1hdDogZnVuY3Rpb24oZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLmZvcm1hdCgnLC40ZicpKGQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMYWJlbDogJ1ggQXhpcydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5QXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMYWJlbDogJ1kgQXhpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpc0xhYmVsRGlzdGFuY2U6IC0xMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgdGhpcy5kYXRhID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiQ3VtdWxhdGl2ZSBSZXR1cm5cIixcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJBXCIgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAtMjkuNzY1OTU3NzcxMTA3XHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIgOiBcIkJcIiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIiA6IDBcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIiA6IFwiQ1wiICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiIDogMzIuODA3ODA0NjgyNjEyXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIgOiBcIkRcIiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIiA6IDE5Ni40NTk0NjczOTI1NlxyXG4gICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJFXCIgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAwLjE5NDM0MDMwOTA2ODkzXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIgOiBcIkZcIiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIiA6IC05OC4wNzk3ODI2MDE0NDJcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIiA6IFwiR1wiICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiIDogLTEzLjkyNTc0MzEzMDkwM1xyXG4gICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJIXCIgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAtNS4xMzg3MzIyODc1NzA1XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgc2luQW5kQ29zKCkge1xyXG4gICAgdmFyIHNpbiA9IFtdLHNpbjIgPSBbXSxcclxuICAgICAgY29zID0gW107XHJcbiAgXHJcbiAgICAvL0RhdGEgaXMgcmVwcmVzZW50ZWQgYXMgYW4gYXJyYXkgb2Yge3gseX0gcGFpcnMuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgIHNpbi5wdXNoKHt4OiBpLCB5OiBNYXRoLnNpbihpLzEwKX0pO1xyXG4gICAgICBzaW4yLnB1c2goe3g6IGksIHk6IGkgJSAxMCA9PSA1ID8gbnVsbCA6IE1hdGguc2luKGkvMTApICowLjI1ICsgMC41fSk7XHJcbiAgICAgIGNvcy5wdXNoKHt4OiBpLCB5OiAuNSAqIE1hdGguY29zKGkvMTArIDIpICsgTWF0aC5yYW5kb20oKSAvIDEwfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0xpbmUgY2hhcnQgZGF0YSBzaG91bGQgYmUgc2VudCBhcyBhbiBhcnJheSBvZiBzZXJpZXMgb2JqZWN0cy5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZXM6IHNpbiwgICAgICAvL3ZhbHVlcyAtIHJlcHJlc2VudHMgdGhlIGFycmF5IG9mIHt4LHl9IGRhdGEgcG9pbnRzXHJcbiAgICAgICAga2V5OiAnU2luZSBXYXZlJywgLy9rZXkgIC0gdGhlIG5hbWUgb2YgdGhlIHNlcmllcy5cclxuICAgICAgICBjb2xvcjogJyNmZjdmMGUnICAvL2NvbG9yIC0gb3B0aW9uYWw6IGNob29zZSB5b3VyIG93biBsaW5lIGNvbG9yLlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWVzOiBjb3MsXHJcbiAgICAgICAga2V5OiAnQ29zaW5lIFdhdmUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzJjYTAyYydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlczogc2luMixcclxuICAgICAgICBrZXk6ICdBbm90aGVyIHNpbmUgd2F2ZScsXHJcbiAgICAgICAgY29sb3I6ICcjNzc3N2ZmJyxcclxuICAgICAgICBhcmVhOiB0cnVlICAgICAgLy9hcmVhIC0gc2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdGhpcyBsaW5lIHRvIHR1cm4gaW50byBhIGZpbGxlZCBhcmVhIGNoYXJ0LlxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
