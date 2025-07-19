export async function fetchTimesheets() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/timesheets`, { cache: "no-store" });
    if (!res.ok) throw new Error('Failed to fetch timesheets');
    return res.json();
  }