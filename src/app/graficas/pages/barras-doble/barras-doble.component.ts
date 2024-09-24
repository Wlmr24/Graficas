import { Component, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styleUrl: './barras-doble.component.css'
})
export class BarrasDobleComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    indexAxis: 'x'
   };

  public barChartData: ChartData<'bar'> = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' , backgroundColor:'#9B2FEB'},
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B', backgroundColor:'#6030EB' },
    ],
  };

  public barChartData1: ChartData<'bar'> = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: '#2F78EB' },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
  }

  public randomize(): void {
    if (this.barChartData.datasets && this.barChartData1.datasets) {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    
    ];
    this.barChartData1.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.chart?.update(); 
  }
  else {
    console.error('datasets es undefined'); }
}
}
