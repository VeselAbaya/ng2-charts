interface PieChartDatasetDetailsInterface {
  title: string;
  color: string;
}

export interface PieChartDatasetInterface {
  value: number;
  details: PieChartDatasetDetailsInterface;
}
