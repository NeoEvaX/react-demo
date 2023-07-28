import { env } from "@/env.mjs";
import sql from "mssql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await sql.connect(env.DATABASE_URL);
    const results = await sql.query`select TOP 500 * from deal`;
    return NextResponse.json(results.recordset, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: `There was an error verifying user. ${err}` },
      { status: 500 },
    );
  }
}
