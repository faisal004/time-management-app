import { auth } from "@/auth";
import { timesheets } from "@/data/dummy-data";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  // TODO : Add authentication

  // const session = await auth();
  // const token = session?.token;
  // console.log(session)
  // if (!session || !token) {
  //   return NextResponse.json(
  //     { error: 'Unauthorized' },
  //     { status: 401 }
  //   );
  // }
  

  return NextResponse.json(timesheets, {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}