import { SignOutButton } from "@/components/auth/sign-out";
import { fetchTimesheets } from './fetch-timesheets';
import Link from 'next/link';

function StatusBadge({ status }: { status: string }) {
  const color =
    status === 'COMPLETED'
      ? 'bg-green-100 text-green-700'
      : status === 'INCOMPLETE'
      ? 'bg-yellow-100 text-yellow-800'
      : 'bg-pink-100 text-pink-700';
  return (
    <span className={`px-3 py-1 rounded text-xs font-semibold ${color}`}>{status}</span>
  );
}

export default async function Dashboard() {
  const timesheets = await fetchTimesheets();
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