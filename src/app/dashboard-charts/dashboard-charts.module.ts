import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    LoaderModule
  ],
  exports: [
    LineChartComponent,
    PieChartComponent
  ]
})
export class DashboardChartsModule {}
