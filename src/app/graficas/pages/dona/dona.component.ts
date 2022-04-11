import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  
  colors: Color[] = [
    '#0075ED',
    '#00BAF7',
    '#00E0DB',
    '#00F7AD',
    '#00ED63'
  ]

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [350, 450, 100, 200], backgroundColor: this.colors }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';



  constructor() { }

  ngOnInit(): void {
  }

}
