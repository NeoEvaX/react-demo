import { env } from "@/env.mjs";
import sql from "mssql";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const sqlConfig: sql.config = {
    user: env.DB_USER,
    password: env.DB_PWD,
    database: env.DB_NAME,
    server: env.DB_HOST,
    port: env.DB_PORT,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      //encrypt: true, // for azure
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };
  try {
    await sql.connect(sqlConfig);
    const results = await sql.query`select TOP 500 * from deal`;
    return NextResponse.json(results.recordset, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: `There was an error verifying user. ${err}` },
      { status: 500 },
    );
  }
}
