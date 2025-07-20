import { notFound } from 'next/navigation';
import { fetchTimesheets } from '@/routes/dashboard';
import { Progress } from '@/components/ui/progress';
import { Ellipsis, Plus } from 'lucide-react';
import AddTaskModal from '@/components/dashboard/add-task-modal';

interface WeekDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function WeekDetails({ params }: WeekDetailsProps) {
    const { data: timesheets } = await fetchTimesheets();
    const weekNumber = parseInt((await params).id);
    const timesheet = timesheets?.find((ts: any) => ts.week === weekNumber);
    const totalWeekHours = timesheet.days.reduce((sum: number, day: any) => sum + day.totalHours, 0);

    if (!timesheet) {
        notFound();
    }
    return (
        <div className="max-w-5xl mx-auto mt-8 bg-white rounded-lg shadow md:p-6 p-4">
            <div className="flex md:flex-row flex-col justify-between items-center mb-6">
                <h2 className="text-2xl font-bold w-full">This week's timeheets</h2>
                <div className="text-center flex items-center flex-col  md:w-1/3 w-full">

                    <Progress value={totalWeekHours} max={40} showPercentage />

                </div>
            </div>

            <div className="">
                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-light">{timesheet.date}</h3>
                    </div>
                </div>

                <div className="space-y-6 ">
                    {timesheet.days.map((day: any) => (
                        <div key={day.date} className=" rounded-lg p-4 flex  md:flex-row flex-col justify-between items-start h-full gap-2 md:gap-7  ">
                            <div className="font-medium text-gray-900 md:mb-3 flex items-start justify-start  h-full md:w-[10%]">
                                {new Date(day.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                {day.timeEntries.length > 0 && (
                                    <div className="space-y-3">
                                        {day.timeEntries.map((entry: any) => (
                                            <div key={entry.id} className="flex justify-between items-center px-3 py-2 rounded border-[1px] border-[#E5E7EB]">
                                                <div className='w-full'>
                                                    <p className="text-lg font-semibold text-gray-600">{entry.taskDescription}</p>

                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <span className="font-light text-sm">{entry.hours}h</span>
                                                    <div className="inline-block  px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded w-fit whitespace-nowrap">
                                                        {entry.project}
                                                    </div>
                                                    <div>
                                                        <Ellipsis className='text-gray-500 size-4' />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                )}

                                <AddTaskModal />

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}