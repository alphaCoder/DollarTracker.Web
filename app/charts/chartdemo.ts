import {Component, Input} from '@angular/core';

import {nvD3} from 'ng2-nvD3';
declare let d3: any;

@Component({
  selector: 'chart-demo',
  directives: [nvD3],
  template: `
    <div >
      <nvd3 [options]="options" [data]="data"></nvd3>
     </div>
  `
})
export class ChartDemo {
  options;
  @Input() data = [];
  chartType;
  
  ngOnInit(){
    
    this.options = {
     chart: {
      type: 'pieChart',
      height: 500,
      x: function(d){return d.label;},
      y: function(d){return d.value;},
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
    var sin = [],sin2 = [],
      cos = [];
  
    //Data is represented as an array of {x,y} pairs.
    for (var i = 0; i < 100; i++) {
      sin.push({x: i, y: Math.sin(i/10)});
      sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
      cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
    }
  
    //Line chart data should be sent as an array of series objects.
    return [
      {
        values: sin,      //values - represents the array of {x,y} data points
        key: 'Sine Wave', //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
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
        area: true      //area - set to true if you want this line to turn into a filled area chart.
      }
    ];
  }
  
}
