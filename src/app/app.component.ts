import { Component, OnInit } from '@angular/core';
import { TestResult, TestResultTitle } from './dashboard-charts/test-result.enum';
import { ChartOptions } from 'chart.js';
import { PieChartDatasetInterface } from './dashboard-charts/pie-chart/pie-chart-dataset.interface';
import { BugStatus } from './dashboard-charts/bug-status.enum';
import { OverallProgress } from './dashboard-charts/overall-progress.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /* line chart */
  datasets = [
    // {data: [31, 56, 32, 57, 89, 123], testResult: TestResult.Passed},
    // {data: [21, 13, 25, 26, 11, 9], testResult: TestResult.Failed},
    // {data: [23, 43, 45, 23, 43, 5], testResult: TestResult.Blocked},
    // {data: [12, 6, 34, 8, 12, 23], testResult: TestResult.Broken},
    // {data: [5, 23, 45, 87, 127, 54], testResult: TestResult.Skipped},
    // {data: [8, 18, 56, 6, 17, 47], testResult: TestResult.NotStart},
  ];

  labels = ['12.05.19', '17.05.19', '25.05.19', '03.06.19', '04.06.19', '13.06.19'];

  /* pie chart */
  pieChartTestsDatasets: PieChartDatasetInterface[] = [
    // {value: 59, testResult: TestResult.Passed},
    // {value: 9, testResult: TestResult.Failed},
    // {value: 3, testResult: TestResult.NotStart}
  ];

  pieChartBugsDatasets: PieChartDatasetInterface[] = [
    // {value: 33, details: BugStatus.ToDo},
    // {value: 23, details: BugStatus.InProgress},
    // {value: 8, details: BugStatus.InReview},
    // {value: 13, details: BugStatus.InTest},
    // {value: 26, details: BugStatus.ToTest},
    // {value: 56, details: BugStatus.Done},
    // {value: 54, details: BugStatus.Close}
  ];

  pieChartOverallDatasets: PieChartDatasetInterface[] = [
    {value: 69, details: OverallProgress.Completed},
    {value: 45, details: OverallProgress.NotCompleted}
  ];

  ngOnInit() {
    /* line */
    setTimeout(() => {
      this.datasets = [
        {data: [31, 56, 67, 57, 89, 123], testResult: TestResult.Passed},
        {data: [21, 56, 25, 26, 11, 9], testResult: TestResult.Failed},
        {data: [23, 43, 23, 23, 43, 5], testResult: TestResult.Blocked},
        {data: [12, 6, 34, 16, 12, 23], testResult: TestResult.Broken},
        {data: [5, 23, 45, 87, 127, 54], testResult: TestResult.Skipped},
        {data: [8, 18, 26, 6, 17, 47], testResult: TestResult.NotStart},
      ];
    }, 1000);

    setTimeout(() => {
      this.datasets = [
        {data: [31, 56, 32, 57, 89, 123], testResult: TestResult.Passed},
        {data: [21, 13, 25, 26, 11, 9], testResult: TestResult.Failed},
        {data: [23, 43, 45, 23, 43, 5], testResult: TestResult.Blocked},
        {data: [12, 6, 34, 8, 12, 23], testResult: TestResult.Broken},
        {data: [5, 23, 45, 87, 127, 54], testResult: TestResult.Skipped},
        {data: [8, 18, 56, 6, 17, 47], testResult: TestResult.NotStart},
      ];
    }, 1500);

    setTimeout(() => {
      this.datasets = [];
    }, 2500);

    setTimeout(() => {
      this.datasets = [
        {data: [31, 56, 32, 57, 89, 123], testResult: TestResult.Passed},
        {data: [21, 13, 25, 26, 11, 9], testResult: TestResult.Failed},
        {data: [23, 43, 45, 23, 43, 5], testResult: TestResult.Blocked},
        {data: [12, 6, 34, 8, 12, 23], testResult: TestResult.Broken},
        {data: [5, 23, 45, 87, 127, 54], testResult: TestResult.Skipped},
        {data: [8, 18, 56, 6, 17, 47], testResult: TestResult.NotStart},
      ];
    }, 3000);

    /* pie */
    setTimeout(() => {
      this.pieChartTestsDatasets = [
        {value: 59, details: TestResult.Passed},
        {value: 9, details: TestResult.Failed},
        {value: 3, details: TestResult.NotStart}
      ];

      this.pieChartBugsDatasets = [
        {value: 33, details: BugStatus.ToDo},
        {value: 23, details: BugStatus.InProgress},
        {value: 8, details: BugStatus.InReview},
        {value: 13, details: BugStatus.InTest},
        {value: 26, details: BugStatus.ToTest},
        {value: 56, details: BugStatus.Done},
        {value: 54, details: BugStatus.Close}
      ];
    }, 1000);

    setTimeout(() => {
      this.pieChartTestsDatasets = [
        {value: 34, details: TestResult.Passed},
        {value: 65, details: TestResult.Failed},
        {value: 6, details: TestResult.NotStart}
      ];

      this.pieChartBugsDatasets = [
        {value: 33, details: BugStatus.ToDo},
        {value: 23, details: BugStatus.InProgress},
        {value: 8, details: BugStatus.InReview},
        {value: 18, details: BugStatus.InTest},
        {value: 37, details: BugStatus.ToTest},
        {value: 59, details: BugStatus.Done},
        {value: 58, details: BugStatus.Close}
      ];
    }, 2000);
  }
}

