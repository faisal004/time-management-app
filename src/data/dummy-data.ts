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
    hours: Math.floor(Math.random() * 4) + 1 // 1-4 hours per entry
  }));
};

const generateDays = (weekNumber: number, targetHours: number): DayTimesheet[] => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const baseDate = new Date(2024, 0, weekNumber * 7);
  
  const hoursPerDay = Math.floor(targetHours / 5);
  const remainder = targetHours % 5;
  
  return days.map((day, index) => {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + index);
    
    const dayHours = index < remainder ? hoursPerDay + 1 : hoursPerDay;
    const timeEntries = dayHours > 0 ? generateTimeEntries(Math.min(3, Math.max(1, Math.ceil(dayHours / 2)))) : [];
    
    if (index === days.length - 1) {
      const currentTotal = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
      if (timeEntries.length > 0 && currentTotal !== dayHours) {
        timeEntries[timeEntries.length - 1].hours += dayHours - currentTotal;
      }
    }
    
    const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
    
    return {
      date: date.toISOString().split('T')[0],
      dayOfWeek: day,
      timeEntries,
      totalHours
    };
  });
};

const getWeekStatusAndAction = (days: DayTimesheet[]) => {
  const totalHours = days.reduce((sum, day) => sum + day.totalHours, 0);
  
  if (totalHours === 0) {
    return { status: 'MISSING' as TimesheetStatus, action: 'Create' as const };
  } else if (totalHours >= 40) {
    return { status: 'COMPLETED' as TimesheetStatus, action: 'View' as const };
  } else {
    return { status: 'INCOMPLETE' as TimesheetStatus, action: 'Update' as const };
  }
};

const generateWeek = (weekNumber: number, targetHours: number) => {
  const days = generateDays(weekNumber, targetHours);
  const { status, action } = getWeekStatusAndAction(days);
  const startDate = new Date(2024, 0, (weekNumber - 1) * 7 + 1);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 4);
  
  const dateFormatter = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' });
  const formattedDate = `${dateFormatter.format(startDate)} - ${dateFormatter.format(endDate)}, ${startDate.getFullYear()}`;
  
  return {
    week: weekNumber,
    date: formattedDate,
    status,
    action,
    days
  };
};

export const timesheets: Timesheet[] = [
  generateWeek(1, 40),
  
  generateWeek(2, 40),
  
  generateWeek(3, 20),
  
  generateWeek(4, 0),
  
  generateWeek(5, 38)
];