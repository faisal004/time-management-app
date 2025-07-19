export type TimesheetStatus = 'COMPLETED' | 'INCOMPLETE' | 'MISSING';

export interface Timesheet {
  week: number;
  date: string;
  status: TimesheetStatus;
  action: 'View' | 'Update' | 'Create';
}