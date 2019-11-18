import { TestResultColor } from '../test-result.enum';
import { ChartOptions } from 'chart.js';

export const lineChartOptions: ChartOptions = {
  responsive: true,
  responsiveAnimationDuration: 200,
  legend: {display: false},
  animation: {
    duration: 200
  },
  tooltips: {
    mode: 'x',
    intersect: true,
    backgroundColor: 'rgba(255, 255, 255, .7)',
    bodyFontColor: 'black',
    titleFontColor: 'black',
    borderColor: TestResultColor.Default,
    borderWidth: 1,
    cornerRadius: 2,
    caretSize: 0,
    caretPadding: 4,
    position: 'nearest'
  },
  scales: {
    display: true,
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
        zeroLineColor: 'black',
        color: 'black'
      },
      ticks: {
        padding: 5,
        fontSize: 12,
        fontColor: 'black',
      }
    }],
    yAxes: [{
      gridLines: {
        drawOnChartArea: false,
        zeroLineColor: 'black',
        color: 'black'
      },
      ticks: {
        padding: 5,
        fontSize: 12,
        fontColor: 'black'
      }
    }]
  },
};
