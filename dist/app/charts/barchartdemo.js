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
            let BarChartDemo = class BarChartDemo {
                ngOnInit() {
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
                }
                sinAndCos() {
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
                }
            };
            BarChartDemo = __decorate([
                core_1.Component({
                    selector: 'bar-chart',
                    directives: [ng2_nvD3_1.nvD3],
                    template: `
    <div xstyle="background-color: #FFF;">
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
  `
                }), 
                __metadata('design:paramtypes', [])
            ], BarChartDemo);
            exports_1("BarChartDemo", BarChartDemo);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxFQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUM7b0JBQ25FLENBQUM7b0JBRUQsK0RBQStEO29CQUMvRCxNQUFNLENBQUM7d0JBQ0w7NEJBQ0UsTUFBTSxFQUFFLEdBQUc7NEJBQ1gsR0FBRyxFQUFFLFdBQVc7NEJBQ2hCLEtBQUssRUFBRSxTQUFTLENBQUUsK0NBQStDO3lCQUNsRTt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsR0FBRzs0QkFDWCxHQUFHLEVBQUUsYUFBYTs0QkFDbEIsS0FBSyxFQUFFLFNBQVM7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxJQUFJOzRCQUNaLEdBQUcsRUFBRSxtQkFBbUI7NEJBQ3hCLEtBQUssRUFBRSxTQUFTOzRCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFNLDRFQUE0RTt5QkFDN0Y7cUJBQ0YsQ0FBQztnQkFDSixDQUFDO1lBRUgsQ0FBQztZQXJIRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixVQUFVLEVBQUUsQ0FBQyxlQUFJLENBQUM7b0JBQ2xCLFFBQVEsRUFBRTs7OztHQUlUO2lCQUNGLENBQUM7OzRCQUFBO1lBQ0YsdUNBNEdDLENBQUEiLCJmaWxlIjoiY2hhcnRzL2JhcmNoYXJ0ZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7bnZEM30gZnJvbSAnbmcyLW52RDMnO1xyXG5kZWNsYXJlIGxldCBkMzogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jhci1jaGFydCcsXHJcbiAgZGlyZWN0aXZlczogW252RDNdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IHhzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRkY7XCI+XHJcbiAgICAgIDxudmQzIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBbZGF0YV09XCJkYXRhXCI+PC9udmQzPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFyQ2hhcnREZW1vIHtcclxuICBvcHRpb25zO1xyXG4gIGRhdGE7XHJcbiAgY2hhcnRUeXBlO1xyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgXHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGlzY3JldGVCYXJDaGFydCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbiA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDIwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMCxcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDUwLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDU1XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeDogZnVuY3Rpb24oZCl7cmV0dXJuIGQubGFiZWw7fSxcclxuICAgICAgICAgICAgICAgIHk6IGZ1bmN0aW9uKGQpe3JldHVybiBkLnZhbHVlO30sXHJcbiAgICAgICAgICAgICAgICBzaG93VmFsdWVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVGb3JtYXQ6IGZ1bmN0aW9uKGQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5mb3JtYXQoJywuNGYnKShkKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBheGlzTGFiZWw6ICdYIEF4aXMnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeUF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBheGlzTGFiZWw6ICdZIEF4aXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGF4aXNMYWJlbERpc3RhbmNlOiAtMTBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIHRoaXMuZGF0YSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBcIkN1bXVsYXRpdmUgUmV0dXJuXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIiA6IFwiQVwiICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiIDogLTI5Ljc2NTk1Nzc3MTEwN1xyXG4gICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJCXCIgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIgOiBcIkNcIiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIiA6IDMyLjgwNzgwNDY4MjYxMlxyXG4gICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJEXCIgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAxOTYuNDU5NDY3MzkyNTZcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIiA6IFwiRVwiICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiIDogMC4xOTQzNDAzMDkwNjg5M1xyXG4gICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiIDogXCJGXCIgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIgOiAtOTguMDc5NzgyNjAxNDQyXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIgOiBcIkdcIiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIiA6IC0xMy45MjU3NDMxMzA5MDNcclxuICAgICAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIiA6IFwiSFwiICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiIDogLTUuMTM4NzMyMjg3NTcwNVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHNpbkFuZENvcygpIHtcclxuICAgIHZhciBzaW4gPSBbXSxzaW4yID0gW10sXHJcbiAgICAgIGNvcyA9IFtdO1xyXG4gIFxyXG4gICAgLy9EYXRhIGlzIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5IG9mIHt4LHl9IHBhaXJzLlxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICBzaW4ucHVzaCh7eDogaSwgeTogTWF0aC5zaW4oaS8xMCl9KTtcclxuICAgICAgc2luMi5wdXNoKHt4OiBpLCB5OiBpICUgMTAgPT0gNSA/IG51bGwgOiBNYXRoLnNpbihpLzEwKSAqMC4yNSArIDAuNX0pO1xyXG4gICAgICBjb3MucHVzaCh7eDogaSwgeTogLjUgKiBNYXRoLmNvcyhpLzEwKyAyKSArIE1hdGgucmFuZG9tKCkgLyAxMH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy9MaW5lIGNoYXJ0IGRhdGEgc2hvdWxkIGJlIHNlbnQgYXMgYW4gYXJyYXkgb2Ygc2VyaWVzIG9iamVjdHMuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWVzOiBzaW4sICAgICAgLy92YWx1ZXMgLSByZXByZXNlbnRzIHRoZSBhcnJheSBvZiB7eCx5fSBkYXRhIHBvaW50c1xyXG4gICAgICAgIGtleTogJ1NpbmUgV2F2ZScsIC8va2V5ICAtIHRoZSBuYW1lIG9mIHRoZSBzZXJpZXMuXHJcbiAgICAgICAgY29sb3I6ICcjZmY3ZjBlJyAgLy9jb2xvciAtIG9wdGlvbmFsOiBjaG9vc2UgeW91ciBvd24gbGluZSBjb2xvci5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlczogY29zLFxyXG4gICAgICAgIGtleTogJ0Nvc2luZSBXYXZlJyxcclxuICAgICAgICBjb2xvcjogJyMyY2EwMmMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZXM6IHNpbjIsXHJcbiAgICAgICAga2V5OiAnQW5vdGhlciBzaW5lIHdhdmUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzc3NzdmZicsXHJcbiAgICAgICAgYXJlYTogdHJ1ZSAgICAgIC8vYXJlYSAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRoaXMgbGluZSB0byB0dXJuIGludG8gYSBmaWxsZWQgYXJlYSBjaGFydC5cclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcbiAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
