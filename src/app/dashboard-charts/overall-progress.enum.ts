export enum OverallProgressTitle {
  Completed = 'Completed',
  NotCompleted = 'Not Completed'
}

export enum OverallProgressColor {
  Completed = '#215B7A',
  NotCompleted = '#DCE1E3'
}

export const OverallProgress = {
  Completed: {
    title: OverallProgressTitle.Completed,
    color: OverallProgressColor.Completed
  },
  NotCompleted: {
    title: OverallProgressTitle.NotCompleted,
    color: OverallProgressColor.NotCompleted
  },
};

export interface OverallProgressInterface {
  title: OverallProgressTitle;
  color: OverallProgressColor;
}
