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
    <div className="max-w-5xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Your Timesheets</h2>
      <div className="bg-white rounded-lg shadow p-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 text-xs border-b">
              <th className="py-2 px-3 text-left">WEEK #</th>
              <th className="py-2 px-3 text-left">DATE</th>
              <th className="py-2 px-3 text-left">STATUS</th>
              <th className="py-2 px-3 text-left">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {timesheets.map((row: any) => (
              <tr key={row.week} className="border-b last:border-0">
                <td className="py-2 px-3">{row.week}</td>
                <td className="py-2 px-3">{row.date}</td>
                <td className="py-2 px-3"><StatusBadge status={row.status} /></td>
                <td className="py-2 px-3">
                  {row.action === 'View' && <Link href="#" className="text-blue-600 hover:underline">View</Link>}
                  {row.action === 'Update' && <Link href="#" className="text-yellow-700 hover:underline">Update</Link>}
                  {row.action === 'Create' && <Link href="#" className="text-pink-600 hover:underline">Create</Link>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="text-center text-xs text-gray-400 mt-8">
        2024 tentwenty. All rights reserved.
      </footer>
    </div>
  );
}