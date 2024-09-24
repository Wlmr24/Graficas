import { Component, Input } from '@angular/core';

import { ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrl: './grafica-barra.component.css'
})
export class GraficaBarraComponent {

  @Input() isHorizontal:boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
   responsive: true,
   indexAxis: 'x'
  };
  public barChartType = 'bar' as const;

  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {data: []}
    ]
  };

  
  // labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  // datasets: [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Poblacion A', backgroundColor: '#651FDB' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Poblacion B', backgroundColor: '#DB1FD2'},
  //   { data: [42, 28, 20, 15, 16, 35, 100], label: 'Poblacion C', backgroundColor: '#A31FDB'},
  // ],

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

constructor () {}
  ngOnInit(): void {
    this.barChartOptions!.indexAxis = this.isHorizontal ? 'y' : 'x';
  }

}
