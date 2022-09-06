import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { single } from 'src/app/data';
@Component({
  selector: 'app-ngx-chart',
  templateUrl: './ngx-chart.component.html',
  styleUrls: ['./ngx-chart.component.css']
})
export class NgxChartComponent implements OnInit {
  single?: any[];
  multi?: any[];

  view: [number,number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme:Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event:any) {
    console.log(event);
  }

  ngOnInit() {
  }

}
