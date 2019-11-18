export enum BugStatusTitle {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  InReview = 'In Review',
  InTest = 'In Test',
  ToTest = 'To Test',
  Done = 'Done',
  Close = 'Close'
}

export enum BugStatusColor {
  ToDo = '#102937',
  InProgress = '#215B7A',
  InReview = '#577282',
  InTest = '#99ACB6',
  ToTest = '#ACC0CB',
  Done = '#DCE1E3',
  Close = '#D7E8F5'
}

export const BugStatus = {
  ToDo: {
    title: BugStatusTitle.ToDo,
    color: BugStatusColor.ToDo
  },
  InProgress: {
    title: BugStatusTitle.InProgress,
    color: BugStatusColor.InProgress
  },
  InReview: {
    title: BugStatusTitle.InReview,
    color: BugStatusColor.InReview
  },
  InTest: {
    title: BugStatusTitle.InTest,
    color: BugStatusColor.InTest
  },
  ToTest: {
    title: BugStatusTitle.ToTest,
    color: BugStatusColor.ToTest
  },
  Done: {
    title: BugStatusTitle.Done,
    color: BugStatusColor.Done
  },
  Close: {
    title: BugStatusTitle.Close,
    color: BugStatusColor.Close
  }
};

export interface BugStatusInterface {
  title: BugStatusTitle;
  color: BugStatusColor;
}
