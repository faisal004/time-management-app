import { Timesheet, DayTimesheet, TimeEntry, TimesheetStatus, WorkType } from "@/types/timesheets";

const generateTimeEntries = (count: number): TimeEntry[] => {
  const projects = ['Project A', 'Project B', 'Project C', 'Project D'];
  const workTypes: WorkType[] = ['BUG', 'FEATURE', 'MAINTENANCE', 'TESTING', 'DOCUMENTATION', 'MEETING'];
  const tasks = [
    'Fixed login issues',
    'Implemented new feature',
    'Code refactoring',
    'Unit testing',
    'Documentation update',
    'Team meeting',
    'Bug fixes',
    'Performance optimization'
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `entry-${i + 1}`,
    project: projects[Math.floor(Math.random() * projects.length)],
    workType: workTypes[Math.floor(Math.random() * workTypes.length)],
    taskDescription: tasks[Math.floor(Math.random() * tasks.length)],
    hours: Math.floor(Math.random() * 4) + 1 
  }));
};

const generateDays = (weekNumber: number): DayTimesheet[] => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const baseDate = new Date(2024, 0, weekNumber * 7);
  
  return days.map((day, index) => {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + index);
    const timeEntries = generateTimeEntries(Math.floor(Math.random() * 3) + 1);
    const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
    
    return {
      date: date.toISOString().split('T')[0],
      dayOfWeek: day,
      timeEntries,
      totalHours
    };
  });
};

export const timesheets: Timesheet[] = [
  {
    week: 1,
    date: '1 - 5 January, 2024',
    status: 'COMPLETED',
    action: 'View',
    days: generateDays(1)
  },
  {
    week: 2,
    date: '8 - 12 January, 2024',
    status: 'COMPLETED',
    action: 'View',
    days: generateDays(2)
  },
  {
    week: 3,
    date: '15 - 19 January, 2024',
    status: 'INCOMPLETE',
    action: 'Update',
    days: generateDays(3)
  },
  {
    week: 4,
    date: '22 - 26 January, 2024',
    status: 'MISSING',
    action: 'Create',
    days: []
  }
];