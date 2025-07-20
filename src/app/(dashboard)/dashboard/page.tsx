import { fetchTimesheets } from '@/routes/dashboard';
import { StatusBadge } from '@/utils/badge-color';
import Link from 'next/link';

export default async function Dashboard() {
  const { data: timesheets, error } = await fetchTimesheets();

  if (error !== null) {
    return (
      <div className="max-w-5xl mx-auto mt-8">
        <h2 className="text-xl font-bold mb-4">Your Timesheets</h2>
        <div className="bg-red-100 text-red-700 p-4 rounded">Error: {error}</div>
      </div>
    );
  }

  if (!timesheets) {
    return (
      <div className="max-w-5xl mx-auto mt-8">
        <h2 className="text-xl font-bold mb-4">Your Timesheets</h2>
        <div className="bg-gray-100 text-gray-700 p-4 rounded">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white rounded-lg shadow p-[24px]">
      <h2 className="text-xl font-bold mb-4">Your Timesheets</h2>
      <div className="bg-[#F9FAFB] rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead className='p-4'>
            <tr className="text-gray-500 text-xs border-b border-gray-200 h-[50px]">
              <th className="py-2 px-3 text-left min-w-[80px]">WEEK #</th>
              <th className="py-2 px-3 text-left min-w-[120px]">DATE</th>
              <th className="py-2 px-3 text-left min-w-[100px]">STATUS</th>
              <th className="py-2 px-3 text-left min-w-[100px]">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {timesheets.map((row: any) => (
              <tr key={row.week} className="border-b last:border-0 border-gray-200 h-[54px]">
                <td className="py-2 px-3">{row.week}</td>
                <td className="py-2 px-3 bg-white">{row.date}</td>
                <td className="py-2 px-3 bg-white"><StatusBadge status={row.status} /></td>
                <td className="py-2 px-3 bg-white">
                  {row.action === 'View' && (
                    <Link href={`/dashboard/${row.week}`} className="text-blue-600 hover:underline">
                      View
                    </Link>
                  )}
                  {row.action === 'Update' && (
                    <Link href={`/dashboard/${row.week}`} className="text-yellow-700 hover:underline">
                      Update
                    </Link>
                  )}
                  {row.action === 'Create' && (
                    <Link href={`/dashboard/${row.week}`} className="text-pink-600 hover:underline">
                      Create
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}