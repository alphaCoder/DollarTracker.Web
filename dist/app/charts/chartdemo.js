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
                            labelThreshold: 0.01,
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
      <textarea>{{data|json}}</textarea>
    </div>
  `
                }), 
                __metadata('design:paramtypes', [])
            ], ChartDemo);
            exports_1("ChartDemo", ChartDemo);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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LEVBQUUsYUFBYTs0QkFDbEIsS0FBSyxFQUFFLFNBQVM7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxJQUFJOzRCQUNaLEdBQUcsRUFBRSxtQkFBbUI7NEJBQ3hCLEtBQUssRUFBRSxTQUFTOzRCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFNLDRFQUE0RTt5QkFDN0Y7cUJBQ0YsQ0FBQztnQkFDSixDQUFDO1lBRUgsQ0FBQztZQTNGQztnQkFBQyxZQUFLLEVBQUU7O21EQUFBO1lBWlY7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsVUFBVSxFQUFFLENBQUMsZUFBSSxDQUFDO29CQUNsQixRQUFRLEVBQUU7Ozs7O0dBS1Q7aUJBQ0YsQ0FBQzs7eUJBQUE7WUFDRixpQ0E2RkMsQ0FBQSIsImZpbGUiOiJjaGFydHMvY2hhcnRkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7bnZEM30gZnJvbSAnbmcyLW52RDMnO1xyXG5kZWNsYXJlIGxldCBkMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjaGFydC1kZW1vJyxcclxuICBkaXJlY3RpdmVzOiBbbnZEM10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgPlxyXG4gICAgICA8bnZkMyBbb3B0aW9uc109XCJvcHRpb25zXCIgW2RhdGFdPVwiZGF0YVwiPjwvbnZkMz5cclxuICAgICAgPHRleHRhcmVhPnt7ZGF0YXxqc29ufX08L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnREZW1vIHtcclxuICBvcHRpb25zO1xyXG4gIEBJbnB1dCgpIGRhdGEgPSBbXTtcclxuICBjaGFydFR5cGU7XHJcbiAgXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIFxyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgIGNoYXJ0OiB7XHJcbiAgICAgIHR5cGU6ICdwaWVDaGFydCcsXHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICB4OiBmdW5jdGlvbihkKXtyZXR1cm4gZC5sYWJlbDt9LFxyXG4gICAgICB5OiBmdW5jdGlvbihkKXtyZXR1cm4gZC52YWx1ZTt9LFxyXG4gICAgICBzaG93TGFiZWxzOiBmYWxzZSxcclxuICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgbGFiZWxUaHJlc2hvbGQ6IDAuMDEsXHJcbiAgICAgIGxhYmVsU3VuYmVhbUxheW91dDogZmFsc2UsXHJcbiAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgdG9wOiA1LFxyXG4gICAgICAgICAgcmlnaHQ6IDM1LFxyXG4gICAgICAgICAgYm90dG9tOiA1LFxyXG4gICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgfTtcclxuICBcclxuICAvLyAgIHRoaXMuZGF0YSA9ICAgW1xyXG4gIC8vICAge1xyXG4gIC8vICAgICBrZXk6IFwiT25lXCIsXHJcbiAgLy8gICAgIHk6IDVcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGtleTogXCJUd29cIixcclxuICAvLyAgICAgeTogMlxyXG4gIC8vICAgfSxcclxuICAvLyAgIHtcclxuICAvLyAgICAga2V5OiBcIlRocmVlXCIsXHJcbiAgLy8gICAgIHk6IDlcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGtleTogXCJGb3VyXCIsXHJcbiAgLy8gICAgIHk6IDdcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGtleTogXCJGaXZlXCIsXHJcbiAgLy8gICAgIHk6IDRcclxuICAvLyAgIH0sXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGtleTogXCJTaXhcIixcclxuICAvLyAgICAgeTogM1xyXG4gIC8vICAgfSxcclxuICAvLyAgIHtcclxuICAvLyAgICAga2V5OiBcIlNldmVuXCIsXHJcbiAgLy8gICAgIHk6IC41XHJcbiAgLy8gICB9XHJcbiAgLy8gXTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgc2luQW5kQ29zKCkge1xyXG4gICAgdmFyIHNpbiA9IFtdLHNpbjIgPSBbXSxcclxuICAgICAgY29zID0gW107XHJcbiAgXHJcbiAgICAvL0RhdGEgaXMgcmVwcmVzZW50ZWQgYXMgYW4gYXJyYXkgb2Yge3gseX0gcGFpcnMuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgIHNpbi5wdXNoKHt4OiBpLCB5OiBNYXRoLnNpbihpLzEwKX0pO1xyXG4gICAgICBzaW4yLnB1c2goe3g6IGksIHk6IGkgJSAxMCA9PSA1ID8gbnVsbCA6IE1hdGguc2luKGkvMTApICowLjI1ICsgMC41fSk7XHJcbiAgICAgIGNvcy5wdXNoKHt4OiBpLCB5OiAuNSAqIE1hdGguY29zKGkvMTArIDIpICsgTWF0aC5yYW5kb20oKSAvIDEwfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0xpbmUgY2hhcnQgZGF0YSBzaG91bGQgYmUgc2VudCBhcyBhbiBhcnJheSBvZiBzZXJpZXMgb2JqZWN0cy5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZXM6IHNpbiwgICAgICAvL3ZhbHVlcyAtIHJlcHJlc2VudHMgdGhlIGFycmF5IG9mIHt4LHl9IGRhdGEgcG9pbnRzXHJcbiAgICAgICAga2V5OiAnU2luZSBXYXZlJywgLy9rZXkgIC0gdGhlIG5hbWUgb2YgdGhlIHNlcmllcy5cclxuICAgICAgICBjb2xvcjogJyNmZjdmMGUnICAvL2NvbG9yIC0gb3B0aW9uYWw6IGNob29zZSB5b3VyIG93biBsaW5lIGNvbG9yLlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWVzOiBjb3MsXHJcbiAgICAgICAga2V5OiAnQ29zaW5lIFdhdmUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzJjYTAyYydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlczogc2luMixcclxuICAgICAgICBrZXk6ICdBbm90aGVyIHNpbmUgd2F2ZScsXHJcbiAgICAgICAgY29sb3I6ICcjNzc3N2ZmJyxcclxuICAgICAgICBhcmVhOiB0cnVlICAgICAgLy9hcmVhIC0gc2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdGhpcyBsaW5lIHRvIHR1cm4gaW50byBhIGZpbGxlZCBhcmVhIGNoYXJ0LlxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
