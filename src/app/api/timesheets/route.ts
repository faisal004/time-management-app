import { timesheets } from "@/data/dummy-data";

export async function GET() {


    return new Response(JSON.stringify(timesheets), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
   