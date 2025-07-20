import { notFound } from 'next/navigation';
import { fetchTimesheets } from '@/routes/dashboard';

interface WeekDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WeekDetails({ params }: WeekDetailsProps) {
  const { data: timesheets } = await fetchTimesheets();
  const weekNumber =  parseInt((await params).id);
  const timesheet = timesheets?.find((ts: any) => ts.week === weekNumber);

  if (!timesheet) {
    notFound();
  }
console.log(timesheet.days)
  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">This week's timeheets</h2>
      
      </div>
      
      <div className="">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{timesheet.date}</h3>

          </div>
        </div>

        <div className="space-y-6">
          {timesheet.days.map((day: any) => (
            <div key={day.date} className="border rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-3">
                {new Date(day.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  day: 'numeric' 
                })}
              </h4>
              
              {day.timeEntries.length > 0 ? (
                <div className="space-y-3">
                  {day.timeEntries.map((entry: any) => (
                    <div key={entry.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium">{entry.project}</p>
                        <p className="text-sm text-gray-600">{entry.taskDescription}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded">
                          {entry.workType}
                        </span>
                      </div>
                      <span className="font-medium">{entry.hours}h</span>
                    </div>
                  ))}
                  <div className="text-right mt-2 text-sm text-gray-500">
                    Total: {day.totalHours} hours
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No time entries for this day.</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Week {timesheet.week} • {timesheet.days.length} days • {timesheet.days.reduce((sum: number, day: any) => sum + day.totalHours, 0)} total hours
          </div>
          {timesheet.action === 'Update' && (
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Update Timesheet
            </button>
          )}
          {timesheet.action === 'Create' && (
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Create Timesheet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}