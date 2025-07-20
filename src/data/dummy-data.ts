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

const getStartOfWeek = (date: Date): Date => {
  const startOfWeek = new Date(date);
  const day = startOfWeek.getDay();
  const daysToMonday = day === 0 ? -6 : 1 - day;
  startOfWeek.setDate(date.getDate() + daysToMonday);
  return startOfWeek;
};

const getWeeksInMonth = (month: number, year: number): Date[] => {
  const weeks: Date[] = [];
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  let currentWeekStart = getStartOfWeek(firstDay);

  while (currentWeekStart <= lastDay) {
    weeks.push(new Date(currentWeekStart));
    currentWeekStart.setDate(currentWeekStart.getDate() + 7);
  }

  return weeks;
};

const generateDays = (weekStartDate: Date, month: number, targetHours: number): DayTimesheet[] => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return days.map((dayName, index) => {
    const date = new Date(weekStartDate);
    date.setDate(weekStartDate.getDate() + index + 1);

    let dayHours = 0;
    let timeEntries: TimeEntry[] = [];

    const isInTargetMonth = date.getMonth() === month - 1;

    if (isInTargetMonth) {
      const hoursPerWeekday = Math.floor(targetHours / 5);
      const remainder = targetHours % 5;

      dayHours = index < remainder ? hoursPerWeekday + 1 : hoursPerWeekday;

      if (dayHours > 0) {
        timeEntries = generateTimeEntries(Math.min(3, Math.max(1, Math.ceil(dayHours / 2))));

        if (timeEntries.length > 0) {
          const currentTotal = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
          if (currentTotal !== dayHours) {
            timeEntries[timeEntries.length - 1].hours += dayHours - currentTotal;
          }
        }
      }
    }

    const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);

    return {
      date: date.toISOString().split('T')[0],
      dayOfWeek: dayName,
      timeEntries,
      totalHours
    };
  });
};

const generateWeek = (weekStartDate: Date, weekIndex: number, month: number, targetHours: number): Timesheet => {
  const days = generateDays(weekStartDate, month, targetHours);
  const { status, action } = getWeekStatusAndAction(days);

  const endDate = new Date(weekStartDate);
  endDate.setDate(weekStartDate.getDate() + 4);

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return { day, month, year };
  };

  const start = formatDate(weekStartDate);
  const end = formatDate(endDate);

  let formattedDate: string;
  if (start.month === end.month && start.year === end.year) {
    formattedDate = `${start.day} - ${end.day} ${end.month}, ${end.year}`;
  } else if (start.year === end.year) {
    formattedDate = `${start.day} ${start.month} - ${end.day} ${end.month}, ${end.year}`;
  } else {
    formattedDate = `${start.day} ${start.month} ${start.year} - ${end.day} ${end.month} ${end.year}`;
  }

  return {
    week: weekIndex + 1,
    date: formattedDate,
    status,
    action,
    days
  };
};

const generateMonthlyTimesheets = (month: number, year: number): Timesheet[] => {
  const weeks = getWeeksInMonth(month, year);

  const hourPatterns = [
    40,
    32,
    0,

  ];

  return weeks.map((weekStart, index) => {
    const hours = hourPatterns[index % hourPatterns.length];
    return generateWeek(weekStart, index, month, hours);
  });
};

export const timesheets: Timesheet[] = generateMonthlyTimesheets(1, 2024);

