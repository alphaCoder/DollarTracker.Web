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
                ngOnInit() {
                    this.options = {
                        chart: {
                            type: 'pieChart',
                            height: 500,
                            x: function (d) { return d.key; },
                            y: function (d) { return d.y; },
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
                    this.data = [
                        {
                            key: "One",
                            y: 5
                        },
                        {
                            key: "Two",
                            y: 2
                        },
                        {
                            key: "Three",
                            y: 9
                        },
                        {
                            key: "Four",
                            y: 7
                        },
                        {
                            key: "Five",
                            y: 4
                        },
                        {
                            key: "Six",
                            y: 3
                        },
                        {
                            key: "Seven",
                            y: .5
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9jaGFydGRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFLRSxRQUFRO29CQUVOLElBQUksQ0FBQyxPQUFPLEdBQUc7d0JBQ2QsS0FBSyxFQUFFOzRCQUNOLElBQUksRUFBRSxVQUFVOzRCQUNoQixNQUFNLEVBQUUsR0FBRzs0QkFDWCxDQUFDLEVBQUUsVUFBUyxDQUFDLElBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDOzRCQUM3QixDQUFDLEVBQUUsVUFBUyxDQUFDLElBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDOzRCQUMzQixVQUFVLEVBQUUsS0FBSzs0QkFDakIsUUFBUSxFQUFFLEdBQUc7NEJBQ2IsY0FBYyxFQUFFLElBQUk7NEJBQ3BCLGtCQUFrQixFQUFFLEtBQUs7NEJBQ3pCLE1BQU0sRUFBRTtnQ0FDTixNQUFNLEVBQUU7b0NBQ04sR0FBRyxFQUFFLENBQUM7b0NBQ04sS0FBSyxFQUFFLEVBQUU7b0NBQ1QsTUFBTSxFQUFFLENBQUM7b0NBQ1QsSUFBSSxFQUFFLENBQUM7aUNBQ1I7NkJBQ0Y7eUJBQ0Y7cUJBQ0EsQ0FBQztvQkFFRixJQUFJLENBQUMsSUFBSSxHQUFLO3dCQUNkOzRCQUNFLEdBQUcsRUFBRSxLQUFLOzRCQUNWLENBQUMsRUFBRSxDQUFDO3lCQUNMO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxLQUFLOzRCQUNWLENBQUMsRUFBRSxDQUFDO3lCQUNMO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxPQUFPOzRCQUNaLENBQUMsRUFBRSxDQUFDO3lCQUNMO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxNQUFNOzRCQUNYLENBQUMsRUFBRSxDQUFDO3lCQUNMO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxNQUFNOzRCQUNYLENBQUMsRUFBRSxDQUFDO3lCQUNMO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxLQUFLOzRCQUNWLENBQUMsRUFBRSxDQUFDO3lCQUNMO3dCQUNEOzRCQUNFLEdBQUcsRUFBRSxPQUFPOzRCQUNaLENBQUMsRUFBRSxFQUFFO3lCQUNOO3FCQUNGLENBQUM7Z0JBQ0YsQ0FBQztnQkFHRCxTQUFTO29CQUNQLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBQyxJQUFJLEdBQUcsRUFBRSxFQUNwQixHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUVYLGlEQUFpRDtvQkFDakQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLEdBQUcsR0FBRyxFQUFDLENBQUMsQ0FBQzt3QkFDdEUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxFQUFFLEdBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUM7b0JBQ25FLENBQUM7b0JBRUQsK0RBQStEO29CQUMvRCxNQUFNLENBQUM7d0JBQ0w7NEJBQ0UsTUFBTSxFQUFFLEdBQUc7NEJBQ1gsR0FBRyxFQUFFLFdBQVc7NEJBQ2hCLEtBQUssRUFBRSxTQUFTLENBQUUsK0NBQStDO3lCQUNsRTt3QkFDRDs0QkFDRSxNQUFNLEVBQUUsR0FBRzs0QkFDWCxHQUFHLEVBQUUsYUFBYTs0QkFDbEIsS0FBSyxFQUFFLFNBQVM7eUJBQ2pCO3dCQUNEOzRCQUNFLE1BQU0sRUFBRSxJQUFJOzRCQUNaLEdBQUcsRUFBRSxtQkFBbUI7NEJBQ3hCLEtBQUssRUFBRSxTQUFTOzRCQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFNLDRFQUE0RTt5QkFDN0Y7cUJBQ0YsQ0FBQztnQkFDSixDQUFDO1lBRUgsQ0FBQztZQXRHRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixVQUFVLEVBQUUsQ0FBQyxlQUFJLENBQUM7b0JBQ2xCLFFBQVEsRUFBRTs7OztHQUlUO2lCQUNGLENBQUM7O3lCQUFBO1lBQ0YsaUNBNkZDLENBQUEiLCJmaWxlIjoiY2hhcnRzL2NoYXJ0ZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7bnZEM30gZnJvbSAnbmcyLW52RDMnO1xyXG5kZWNsYXJlIGxldCBkMzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjaGFydC1kZW1vJyxcclxuICBkaXJlY3RpdmVzOiBbbnZEM10sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgPlxyXG4gICAgICA8bnZkMyBbb3B0aW9uc109XCJvcHRpb25zXCIgW2RhdGFdPVwiZGF0YVwiPjwvbnZkMz5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXJ0RGVtbyB7XHJcbiAgb3B0aW9ucztcclxuICBkYXRhO1xyXG4gIGNoYXJ0VHlwZTtcclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIFxyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgIGNoYXJ0OiB7XHJcbiAgICAgIHR5cGU6ICdwaWVDaGFydCcsXHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICB4OiBmdW5jdGlvbihkKXtyZXR1cm4gZC5rZXk7fSxcclxuICAgICAgeTogZnVuY3Rpb24oZCl7cmV0dXJuIGQueTt9LFxyXG4gICAgICBzaG93TGFiZWxzOiBmYWxzZSxcclxuICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgbGFiZWxUaHJlc2hvbGQ6IDAuMDEsXHJcbiAgICAgIGxhYmVsU3VuYmVhbUxheW91dDogZmFsc2UsXHJcbiAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgdG9wOiA1LFxyXG4gICAgICAgICAgcmlnaHQ6IDM1LFxyXG4gICAgICAgICAgYm90dG9tOiA1LFxyXG4gICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIHRoaXMuZGF0YSA9ICAgW1xyXG4gICAge1xyXG4gICAgICBrZXk6IFwiT25lXCIsXHJcbiAgICAgIHk6IDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJUd29cIixcclxuICAgICAgeTogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcIlRocmVlXCIsXHJcbiAgICAgIHk6IDlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJGb3VyXCIsXHJcbiAgICAgIHk6IDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJGaXZlXCIsXHJcbiAgICAgIHk6IDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJTaXhcIixcclxuICAgICAgeTogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcIlNldmVuXCIsXHJcbiAgICAgIHk6IC41XHJcbiAgICB9XHJcbiAgXTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgc2luQW5kQ29zKCkge1xyXG4gICAgdmFyIHNpbiA9IFtdLHNpbjIgPSBbXSxcclxuICAgICAgY29zID0gW107XHJcbiAgXHJcbiAgICAvL0RhdGEgaXMgcmVwcmVzZW50ZWQgYXMgYW4gYXJyYXkgb2Yge3gseX0gcGFpcnMuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICAgIHNpbi5wdXNoKHt4OiBpLCB5OiBNYXRoLnNpbihpLzEwKX0pO1xyXG4gICAgICBzaW4yLnB1c2goe3g6IGksIHk6IGkgJSAxMCA9PSA1ID8gbnVsbCA6IE1hdGguc2luKGkvMTApICowLjI1ICsgMC41fSk7XHJcbiAgICAgIGNvcy5wdXNoKHt4OiBpLCB5OiAuNSAqIE1hdGguY29zKGkvMTArIDIpICsgTWF0aC5yYW5kb20oKSAvIDEwfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvL0xpbmUgY2hhcnQgZGF0YSBzaG91bGQgYmUgc2VudCBhcyBhbiBhcnJheSBvZiBzZXJpZXMgb2JqZWN0cy5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZXM6IHNpbiwgICAgICAvL3ZhbHVlcyAtIHJlcHJlc2VudHMgdGhlIGFycmF5IG9mIHt4LHl9IGRhdGEgcG9pbnRzXHJcbiAgICAgICAga2V5OiAnU2luZSBXYXZlJywgLy9rZXkgIC0gdGhlIG5hbWUgb2YgdGhlIHNlcmllcy5cclxuICAgICAgICBjb2xvcjogJyNmZjdmMGUnICAvL2NvbG9yIC0gb3B0aW9uYWw6IGNob29zZSB5b3VyIG93biBsaW5lIGNvbG9yLlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWVzOiBjb3MsXHJcbiAgICAgICAga2V5OiAnQ29zaW5lIFdhdmUnLFxyXG4gICAgICAgIGNvbG9yOiAnIzJjYTAyYydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlczogc2luMixcclxuICAgICAgICBrZXk6ICdBbm90aGVyIHNpbmUgd2F2ZScsXHJcbiAgICAgICAgY29sb3I6ICcjNzc3N2ZmJyxcclxuICAgICAgICBhcmVhOiB0cnVlICAgICAgLy9hcmVhIC0gc2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdGhpcyBsaW5lIHRvIHR1cm4gaW50byBhIGZpbGxlZCBhcmVhIGNoYXJ0LlxyXG4gICAgICB9XHJcbiAgICBdO1xyXG4gIH1cclxuICBcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
