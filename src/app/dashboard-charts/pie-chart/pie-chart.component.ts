import { Component, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { TestResultTitle } from '../test-result.enum';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { PieChartDatasetInterface } from './pie-chart-dataset.interface';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {
  @ViewChild(BaseChartDirective, {static: true}) chartDirective: BaseChartDirective;
  @Input('datasets') rawDatasets: PieChartDatasetInterface[] = [];

  datasets: ChartDataSets[] = [{data: []}];
  colors = [{backgroundColor: []}];
  labels = [];
  chartOptions: ChartOptions = {
    legend: {display: false},
    tooltips: {enabled: false},
    onHover: (event: MouseEvent, activeElements: Array<any>) => {
      if (activeElements[0]) { // only one element can be active
        this.renderer.setStyle(this.chartDirective.chart.canvas, 'cursor', 'pointer');
        this.onLabelHover(activeElements[0]._view.label);
      } else {
        this.renderer.setStyle(this.chartDirective.chart.canvas, 'cursor', 'auto');
        this.onLabelHover(null);
      }
    }
  };

  activeDataIndex: number = null;
  allTestsCount: number = null;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    this.labels = this.rawDatasets.map(rawDataset => rawDataset.details.title);
    this.colors = [{backgroundColor: this.rawDatasets.map(rawDataset => rawDataset.details.color)}];
    this.allTestsCount = this.rawDatasets.map(rawDataset => rawDataset.value).reduceRight((a, b) => a + b, 0);
    if (!this.datasets[0].data.length || !this.rawDatasets || !this.rawDatasets.length) {
      this.datasets = [
        {
          data: this.rawDatasets.length ? this.rawDatasets.map(rawDataset => rawDataset.value) : [1],
          borderWidth: 0
        },
        {data: []},
      ];
      return;
    }

    // needed to manually changes all that values because chart.js updates chart not smoothly if creates new object
    this.datasets[0].data = this.rawDatasets.length ? this.rawDatasets.map(rawDataset => rawDataset.value) : [1];
  }

  onLabelHover(title: string) {
    const index = this.labels.findIndex(label => label === title);
    this.activeDataIndex = index !== null ? index : null;
  }
}
