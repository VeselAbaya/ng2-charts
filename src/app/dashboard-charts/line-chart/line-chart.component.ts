import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { BaseChartDirective, Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { TestResultColor } from '../test-result.enum';
import { lineChartOptions } from './line-chart-options';
import { LineChartDatasetInterface } from './line-chart-dataset.interface';

@Component({
  selector: 'app-line-chart',
  styleUrls: ['line-chart.component.scss'],
  templateUrl: 'line-chart.component.html'
})
export class LineChartComponent implements OnChanges {
  @ViewChild(BaseChartDirective, {static: true}) baseChartDirective: BaseChartDirective;
  @Input('datasets') rawDatasets: LineChartDatasetInterface[] = [];
  @Input() labels: Label[] = [];
  private activeDatasetIndex: number = null;
  datasets: ChartDataSets[] = [{data: []}];
  chartOptions = lineChartOptions;

  // TODO: needed to implement change detection for rawDatasets via ngDoCheck
  ngOnChanges(changes: SimpleChanges) {
    if (!this.datasets.some(x => x.data.length) || !this.rawDatasets || !this.rawDatasets.some(x => x.data.length)) {
      this.datasets = this.genChartDatasets(this.rawDatasets);
      return;
    }

    // needed to manually changes all that values because line-chart.js updates line-chart not smoothly if creates new object
    for (let i = 0; i < this.rawDatasets.length; i++) {
      this.datasets[i].data = this.rawDatasets[i].data;
      this.datasets[i].label = this.rawDatasets[i].testResult.title;
      this.datasets[i].borderColor = this.rawDatasets[i].testResult.color;
      this.datasets[i].pointBackgroundColor = this.rawDatasets[i].testResult.color;
      this.datasets[i].pointBorderColor = this.rawDatasets[i].testResult.color;
    }

    this.baseChartDirective.update();
  }

  genChartDatasets(rawDatasets: LineChartDatasetInterface[]): ChartDataSets[] {
    if (rawDatasets && rawDatasets.some(rawDataset => rawDataset.data.length)) {
      return rawDatasets.map(rawDataset => {
        return {
          data: rawDataset.data,
          label: rawDataset.testResult.title,
          fill: false,
          borderColor: rawDataset.testResult.color,
          borderWidth: 2,
          pointRadius: 2.5,
          pointBackgroundColor: rawDataset.testResult.color,
          pointBorderColor: rawDataset.testResult.color,
        };
      });
    } else {
      return [{data: []}]; // must return that default value. Else line-chart.js brakes
    }
  }

  setDatasetColor(datasetIndex: number, color: TestResultColor) {
    this.baseChartDirective.datasets[datasetIndex].borderColor = color;
    this.baseChartDirective.datasets[datasetIndex].pointBorderColor = color;
    this.baseChartDirective.datasets[datasetIndex].pointBackgroundColor = color;
  }

  restoreDatasetsColor() {
    for (let i = 0; i !== this.rawDatasets.length; ++i) {
      this.setDatasetColor(i, this.rawDatasets[i].testResult.color);
    }

    this.baseChartDirective.update();
  }

  resetDatasetsColor() {
    const datasets = this.baseChartDirective.datasets;
    for (let i = 0; i !== datasets.length; ++i) {
      this.setDatasetColor(i, TestResultColor.Default);
    }

    this.baseChartDirective.update();
  }

  onLegendLabelClick(datasetIndex: number) {
    if (this.activeDatasetIndex === datasetIndex) {
      this.restoreDatasetsColor();
      this.activeDatasetIndex = null;
      return;
    }

    this.resetDatasetsColor();
    this.setDatasetColor(datasetIndex, TestResultColor.Active);

    this.activeDatasetIndex = datasetIndex;
    this.baseChartDirective.update();
  }
}
