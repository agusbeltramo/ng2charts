import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  colors: Color[] = [
    '#0075ED',
    '#00BAF7',
    '#00E0DB',
    '#00F7AD',
    '#00ED63'
  ]

  public doughnutChartLabels!: string[];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe(data => {
    //     const labels = Object.keys(data);
    //     const values = Object.values(data);

    //     this.doughnutChartData = {
    //       labels: labels,
    //       datasets: [
    //         { data: values, backgroundColor: this.colors }
    //       ]
    //     }
    //   });

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, values}) => {
        this.doughnutChartData = {
          labels: labels,
          datasets: [{ data: values, backgroundColor: this.colors }]
        }
      });


  }


}
