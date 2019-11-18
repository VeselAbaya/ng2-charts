import { TestResultInterface } from '../test-result.enum';

export interface LineChartDatasetInterface {
  data: number[];
  testResult: TestResultInterface;
}
