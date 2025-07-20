import { auth } from "@/auth";

export async function fetchTimesheets() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const session = await auth();
  const token = session?.token;
  if (!session || !token) {
    return { data: null, error: 'Unauthorizedsdfasdf' };
  }
  try {
    const res = await fetch(`${baseUrl}/api/timesheets`, {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) {
      const error = await res.text();
      return { data: null, error: error || 'Failed to fetch timesheets' };
    }
    const data = await res.json();
    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Unknown error' };
  }
}