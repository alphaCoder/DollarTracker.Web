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
    var ChartDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_nvD3_1_1) {
                ng2_nvD3_1 = ng2_nvD3_1_1;
            }],
        execute: function() {
            let ChartDemo = class ChartDemo {
                constructor() {
                    this.data = [];
                }
                ngOnInit() {
                    this.options = {
                        chart: {
                            type: 'pieChart',
                            height: 500,
                            x: function (d) { return d.label; },
                            y: function (d) { return d.value; },
                            showLabels: false,
                            duration: 500,
                            labelThreshold: 0.02,
                            labelSunbeamLayout: false,
                            legend: {
                                margin: {
                                    top: 5,
                                    right: 35,
                                    bottom: 5,
                                    left: 0
                                }
                            }
                        }
                    };
                    //   this.data =   [
                    //   {
                    //     key: "One",
                    //     y: 5
                    //   },
                    //   {
                    //     key: "Two",
                    //     y: 2
                    //   },
                    //   {
                    //     key: "Three",
                    //     y: 9
                    //   },
                    //   {
                    //     key: "Four",
                    //     y: 7
                    //   },
                    //   {
                    //     key: "Five",
                    //     y: 4
                    //   },
                    //   {
                    //     key: "Six",
                    //     y: 3
                    //   },
                    //   {
                    //     key: "Seven",
                    //     y: .5
                    //   }
                    // ];
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
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], ChartDemo.prototype, "data", void 0);
            ChartDemo = __decorate([
                core_1.Component({
                    selector: 'chart-demo',
                    directives: [ng2_nvD3_1.nvD3],
                    template: `
    <div >
      <nvd3 [options]="options" [data]="data"></nvd3>
     </div>
  `
                }), 
                __metadata('design:paramtypes', [])
            ], ChartDemo);
            exports_1("ChartDemo", ChartDemo);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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LEVBQUUsYUFBYTs0QkFDbEIsS0FBSyxFQUFFLFNBQVM7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxJQUFJOzRCQUNaLEdBQUcsRUFBRSxtQkFBbUI7NEJBQ3hCLEtBQUssRUFBRSxTQUFTOzRCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFNLDRFQUE0RTt5QkFDN0Y7cUJBQ0YsQ0FBQztnQkFDSixDQUFDO1lBRUgsQ0FBQztZQTNGQztnQkFBQyxZQUFLLEVBQUU7O21EQUFBO1lBWFY7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsVUFBVSxFQUFFLENBQUMsZUFBSSxDQUFDO29CQUNsQixRQUFRLEVBQUU7Ozs7R0FJVDtpQkFDRixDQUFDOzt5QkFBQTtZQUNGLGlDQTZGQyxDQUFBIiwiZmlsZSI6ImNoYXJ0cy9jaGFydGRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtudkQzfSBmcm9tICduZzItbnZEMyc7XHJcbmRlY2xhcmUgbGV0IGQzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NoYXJ0LWRlbW8nLFxyXG4gIGRpcmVjdGl2ZXM6IFtudkQzXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIDxudmQzIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBbZGF0YV09XCJkYXRhXCI+PC9udmQzPlxyXG4gICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXJ0RGVtbyB7XHJcbiAgb3B0aW9ucztcclxuICBASW5wdXQoKSBkYXRhID0gW107XHJcbiAgY2hhcnRUeXBlO1xyXG4gIFxyXG4gIG5nT25Jbml0KCl7XHJcbiAgICBcclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICBjaGFydDoge1xyXG4gICAgICB0eXBlOiAncGllQ2hhcnQnLFxyXG4gICAgICBoZWlnaHQ6IDUwMCxcclxuICAgICAgeDogZnVuY3Rpb24oZCl7cmV0dXJuIGQubGFiZWw7fSxcclxuICAgICAgeTogZnVuY3Rpb24oZCl7cmV0dXJuIGQudmFsdWU7fSxcclxuICAgICAgc2hvd0xhYmVsczogZmFsc2UsXHJcbiAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgIGxhYmVsVGhyZXNob2xkOiAwLjAyLFxyXG4gICAgICBsYWJlbFN1bmJlYW1MYXlvdXQ6IGZhbHNlLFxyXG4gICAgICBsZWdlbmQ6IHtcclxuICAgICAgICBtYXJnaW46IHtcclxuICAgICAgICAgIHRvcDogNSxcclxuICAgICAgICAgIHJpZ2h0OiAzNSxcclxuICAgICAgICAgIGJvdHRvbTogNSxcclxuICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgLy8gICB0aGlzLmRhdGEgPSAgIFtcclxuICAvLyAgIHtcclxuICAvLyAgICAga2V5OiBcIk9uZVwiLFxyXG4gIC8vICAgICB5OiA1XHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBrZXk6IFwiVHdvXCIsXHJcbiAgLy8gICAgIHk6IDJcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGtleTogXCJUaHJlZVwiLFxyXG4gIC8vICAgICB5OiA5XHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBrZXk6IFwiRm91clwiLFxyXG4gIC8vICAgICB5OiA3XHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBrZXk6IFwiRml2ZVwiLFxyXG4gIC8vICAgICB5OiA0XHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBrZXk6IFwiU2l4XCIsXHJcbiAgLy8gICAgIHk6IDNcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGtleTogXCJTZXZlblwiLFxyXG4gIC8vICAgICB5OiAuNVxyXG4gIC8vICAgfVxyXG4gIC8vIF07XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHNpbkFuZENvcygpIHtcclxuICAgIHZhciBzaW4gPSBbXSxzaW4yID0gW10sXHJcbiAgICAgIGNvcyA9IFtdO1xyXG4gIFxyXG4gICAgLy9EYXRhIGlzIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5IG9mIHt4LHl9IHBhaXJzLlxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgICBzaW4ucHVzaCh7eDogaSwgeTogTWF0aC5zaW4oaS8xMCl9KTtcclxuICAgICAgc2luMi5wdXNoKHt4OiBpLCB5OiBpICUgMTAgPT0gNSA/IG51bGwgOiBNYXRoLnNpbihpLzEwKSAqMC4yNSArIDAuNX0pO1xyXG4gICAgICBjb3MucHVzaCh7eDogaSwgeTogLjUgKiBNYXRoLmNvcyhpLzEwKyAyKSArIE1hdGgucmFuZG9tKCkgLyAxMH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy9MaW5lIGNoYXJ0IGRhdGEgc2hvdWxkIGJlIHNlbnQgYXMgYW4gYXJyYXkgb2Ygc2VyaWVzIG9iamVjdHMuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWVzOiBzaW4sICAgICAgLy92YWx1ZXMgLSByZXByZXNlbnRzIHRoZSBhcnJheSBvZiB7eCx5fSBkYXRhIHBvaW50c1xyXG4gICAgICAgIGtleTogJ1NpbmUgV2F2ZScsIC8va2V5ICAtIHRoZSBuYW1lIG9mIHRoZSBzZXJpZXMuXHJcbiAgICAgICAgY29sb3I6ICcjZmY3ZjBlJyAgLy9jb2xvciAtIG9wdGlvbmFsOiBjaG9vc2UgeW91ciBvd24gbGluZSBjb2xvci5cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlczogY29zLFxyXG4gICAgICAgIGtleTogJ0Nvc2luZSBXYXZlJyxcclxuICAgICAgICBjb2xvcjogJyMyY2EwMmMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZXM6IHNpbjIsXHJcbiAgICAgICAga2V5OiAnQW5vdGhlciBzaW5lIHdhdmUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzc3NzdmZicsXHJcbiAgICAgICAgYXJlYTogdHJ1ZSAgICAgIC8vYXJlYSAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRoaXMgbGluZSB0byB0dXJuIGludG8gYSBmaWxsZWQgYXJlYSBjaGFydC5cclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcbiAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
