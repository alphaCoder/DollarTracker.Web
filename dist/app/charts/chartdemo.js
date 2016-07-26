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
                            legend: "right"
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

//# sourceMappingURL=data:application/json;base64,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LFNBQVM7NEJBQ2hCLElBQUksRUFBRSxJQUFJLENBQU0sNEVBQTRFO3lCQUM3RjtxQkFDRixDQUFDO2dCQUNKLENBQUM7WUFFSCxDQUFDO1lBcEZDO2dCQUFDLFlBQUssRUFBRTs7bURBQUE7WUFYVjtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixVQUFVLEVBQUUsQ0FBQyxlQUFJLENBQUM7b0JBQ2xCLFFBQVEsRUFBRTs7OztHQUlUO2lCQUNGLENBQUM7O3lCQUFBO1lBQ0YsaUNBc0ZDLENBQUEiLCJmaWxlIjoiY2hhcnRzL2NoYXJ0ZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge252RDN9IGZyb20gJ25nMi1udkQzJztcclxuZGVjbGFyZSBsZXQgZDM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY2hhcnQtZGVtbycsXHJcbiAgZGlyZWN0aXZlczogW252RDNdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPG52ZDMgW29wdGlvbnNdPVwib3B0aW9uc1wiIFtkYXRhXT1cImRhdGFcIj48L252ZDM+XHJcbiAgICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhcnREZW1vIHtcclxuICBvcHRpb25zO1xyXG4gIEBJbnB1dCgpIGRhdGEgPSBbXTtcclxuICBjaGFydFR5cGU7XHJcbiAgXHJcbiAgbmdPbkluaXQoKXtcclxuICAgIFxyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgIGNoYXJ0OiB7XHJcbiAgICAgIHR5cGU6ICdwaWVDaGFydCcsXHJcbiAgICAgIGhlaWdodDogNTAwLFxyXG4gICAgICB4OiBmdW5jdGlvbihkKXtyZXR1cm4gZC5sYWJlbDt9LFxyXG4gICAgICB5OiBmdW5jdGlvbihkKXtyZXR1cm4gZC52YWx1ZTt9LFxyXG4gICAgICBzaG93TGFiZWxzOiBmYWxzZSxcclxuICAgICAgZHVyYXRpb246IDUwMCxcclxuICAgICAgbGFiZWxUaHJlc2hvbGQ6IDAuMDIsXHJcbiAgICAgIGxhYmVsU3VuYmVhbUxheW91dDogZmFsc2UsXHJcbiAgICAgIGxlZ2VuZDogXCJyaWdodFwiXHJcbiAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gIC8vICAgdGhpcy5kYXRhID0gICBbXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIGtleTogXCJPbmVcIixcclxuICAvLyAgICAgeTogNVxyXG4gIC8vICAgfSxcclxuICAvLyAgIHtcclxuICAvLyAgICAga2V5OiBcIlR3b1wiLFxyXG4gIC8vICAgICB5OiAyXHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBrZXk6IFwiVGhyZWVcIixcclxuICAvLyAgICAgeTogOVxyXG4gIC8vICAgfSxcclxuICAvLyAgIHtcclxuICAvLyAgICAga2V5OiBcIkZvdXJcIixcclxuICAvLyAgICAgeTogN1xyXG4gIC8vICAgfSxcclxuICAvLyAgIHtcclxuICAvLyAgICAga2V5OiBcIkZpdmVcIixcclxuICAvLyAgICAgeTogNFxyXG4gIC8vICAgfSxcclxuICAvLyAgIHtcclxuICAvLyAgICAga2V5OiBcIlNpeFwiLFxyXG4gIC8vICAgICB5OiAzXHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBrZXk6IFwiU2V2ZW5cIixcclxuICAvLyAgICAgeTogLjVcclxuICAvLyAgIH1cclxuICAvLyBdO1xyXG4gIH1cclxuICBcclxuICBcclxuICBzaW5BbmRDb3MoKSB7XHJcbiAgICB2YXIgc2luID0gW10sc2luMiA9IFtdLFxyXG4gICAgICBjb3MgPSBbXTtcclxuICBcclxuICAgIC8vRGF0YSBpcyByZXByZXNlbnRlZCBhcyBhbiBhcnJheSBvZiB7eCx5fSBwYWlycy5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgc2luLnB1c2goe3g6IGksIHk6IE1hdGguc2luKGkvMTApfSk7XHJcbiAgICAgIHNpbjIucHVzaCh7eDogaSwgeTogaSAlIDEwID09IDUgPyBudWxsIDogTWF0aC5zaW4oaS8xMCkgKjAuMjUgKyAwLjV9KTtcclxuICAgICAgY29zLnB1c2goe3g6IGksIHk6IC41ICogTWF0aC5jb3MoaS8xMCsgMikgKyBNYXRoLnJhbmRvbSgpIC8gMTB9KTtcclxuICAgIH1cclxuICBcclxuICAgIC8vTGluZSBjaGFydCBkYXRhIHNob3VsZCBiZSBzZW50IGFzIGFuIGFycmF5IG9mIHNlcmllcyBvYmplY3RzLlxyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlczogc2luLCAgICAgIC8vdmFsdWVzIC0gcmVwcmVzZW50cyB0aGUgYXJyYXkgb2Yge3gseX0gZGF0YSBwb2ludHNcclxuICAgICAgICBrZXk6ICdTaW5lIFdhdmUnLCAvL2tleSAgLSB0aGUgbmFtZSBvZiB0aGUgc2VyaWVzLlxyXG4gICAgICAgIGNvbG9yOiAnI2ZmN2YwZScgIC8vY29sb3IgLSBvcHRpb25hbDogY2hvb3NlIHlvdXIgb3duIGxpbmUgY29sb3IuXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZXM6IGNvcyxcclxuICAgICAgICBrZXk6ICdDb3NpbmUgV2F2ZScsXHJcbiAgICAgICAgY29sb3I6ICcjMmNhMDJjJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWVzOiBzaW4yLFxyXG4gICAgICAgIGtleTogJ0Fub3RoZXIgc2luZSB3YXZlJyxcclxuICAgICAgICBjb2xvcjogJyM3Nzc3ZmYnLFxyXG4gICAgICAgIGFyZWE6IHRydWUgICAgICAvL2FyZWEgLSBzZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0aGlzIGxpbmUgdG8gdHVybiBpbnRvIGEgZmlsbGVkIGFyZWEgY2hhcnQuXHJcbiAgICAgIH1cclxuICAgIF07XHJcbiAgfVxyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
