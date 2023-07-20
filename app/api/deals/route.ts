import sql from "mssql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await sql.connect(
      "Server=192.168.1.46,1433;database=Tradeparency_Development;trustServerCertificate=true;User Id=sa;Password=Journey before destination;"
    );
    const results = await sql.query`select TOP 500 * from deal`;
    return NextResponse.json(results.recordset, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: `There was an error verifying user. ${err}` },
      { status: 500 }
    );
  }
}
