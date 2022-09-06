import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-chartJS',
  templateUrl: './chartJS.component.html',
  styleUrls: ['./chartJS.component.css']
})
export class ChartJSComponent implements OnInit {
  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  data = {
    labels: this.labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 7, 5, 3, 11, 8, 0],
    // data:[{x:10,y:6,r:20}]
    }]
  };
  constructor() { }

  ngOnInit() {
   this.createGraph(this.labels,this.data,'line');  
  }

  createGraph(label:string[],data:{},GraphType:string){
    const myChart = new Chart(
      'myChart',
      {
       type: GraphType,
       data: this.data,
       options: {
        scales: {
          yAxes: [{
            ticks: {
                beginAtZero: true,
                max:20
            }
        }]
      }
       }
     }
     );
  }
}
