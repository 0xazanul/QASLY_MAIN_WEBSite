import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<Response> {
  const payload = await request.json();
  // Here you can forward to an email service, Slack, or CRM.
  // For now, just return OK to unblock the UI.
  return NextResponse.json({ ok: true, received: payload }, { status: 200 });
}


