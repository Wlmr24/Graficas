import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrl: './dona-http.component.css'
})
export class DonaHttpComponent implements OnInit{

  constructor (private graficasService : GraficasService) {}
  
  ngOnInit(): void {
    this.graficasService.GetDataDona()
    .subscribe ( data =>{
      const Labels = Object.keys(data)
      const values = Object.values(data)
       // Asignar las etiquetas y los datos a la gráfica
       this.doughnutChartLabels = Labels;
       this.doughnutChartData.datasets[0].data = values; // Asigna los valores a la data
 
       // Notifica a Chart.js que los datos han cambiado
       this.doughnutChartData.labels = Labels; 

       this.doughnutChartData.datasets[0].backgroundColor = this.getColors(Labels.length);
      console.log(Labels);
    })
  }

  public doughnutChartLabels: string[] = []
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [],backgroundColor: []}],
  };
  public doughnutChartType: ChartType = 'doughnut';

  private getColors(count: number): string[] {
    const colorPalette = ['#1B6AE0', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];
    const colors = [];

    for (let i = 0; i < count; i++) {
      colors.push(colorPalette[i % colorPalette.length]); // Cicla a través de la paleta
    }
    return colors; 
   }
}
