import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-energy-chart',
  templateUrl: './energy-characteristic-chart.component.html',
})
export class EnergyCharacteristicChartComponent {
  @Input()
  public lineChartData: ChartDataSets[] = [];

  @Input()
  public lineChartLabels: Label[] = [];

  @Input()
  public lineChartOptions = {
    responsive: true,
  };

  @Input()
  public lineChartColors: Color[] = [];

  @Input()
  public lineChartLegend = true;

  @Input()
  public lineChartPlugins = [];

  @Input()
  public lineChartType = 'line';
}
