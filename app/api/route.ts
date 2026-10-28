import { NextRequest, NextResponse } from "next/server";

export function GET() {
  console.log("GET request received");
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const message = `Hello ${body.designation} ${body.name}! Welcome to ${body.class} class.`;

  return NextResponse.json({
    welcomeNote: message,
  });
}

export function PUT() {
  console.log("PUT request received");
}

export function DELETE() {
  console.log("DELETE request received");
}
