export enum TestResultTitle {
  Passed = 'Passed',
  Failed = 'Failed',
  Blocked = 'Blocked',
  Broken = 'Broken',
  Skipped = 'Skipped',
  NotStart = 'Not Start',
}

export enum TestResultColor {
  Passed = '#47C2B1',
  Failed = '#E13838',
  Blocked = '#FF8C4B',
  Broken = '#FFC876',
  Skipped = '#577282',
  NotStart = '#DCE1E3',
  Default = '#E6E6E6',
  Active = '#58C2F1'
}

export const TestResult = {
  Passed: {
    title: TestResultTitle.Passed,
    color: TestResultColor.Passed
  },
  Failed: {
    title: TestResultTitle.Failed,
    color: TestResultColor.Failed
  },
  Blocked: {
    title: TestResultTitle.Blocked,
    color: TestResultColor.Blocked
  },
  Broken: {
    title: TestResultTitle.Broken,
    color: TestResultColor.Broken
  },
  Skipped: {
    title: TestResultTitle.Skipped,
    color: TestResultColor.Skipped
  },
  NotStart: {
    title: TestResultTitle.NotStart,
    color: TestResultColor.NotStart
  }
};

export interface TestResultInterface {
  title: TestResultTitle;
  color: TestResultColor;
}
