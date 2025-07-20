
export type TimesheetStatus = 'COMPLETED' | 'INCOMPLETE' | 'MISSING';
export type WorkType = 'BUG' | 'FEATURE' | 'MAINTENANCE' | 'TESTING' | 'DOCUMENTATION' | 'MEETING';
export interface TimeEntry {
  id: string;
  project: string; 
  workType: WorkType; 
  taskDescription: string; 
  hours: number; 
}
export interface DayTimesheet {
  date: string; 
  dayOfWeek: string;
  timeEntries: TimeEntry[];
  totalHours: number;
}

export interface Timesheet {
  week: number;
  date: string;
  status: TimesheetStatus;
  action: 'View' | 'Update' | 'Create';
  days: DayTimesheet[]; 
}


