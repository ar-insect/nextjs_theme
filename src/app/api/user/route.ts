import { NextResponse } from "next/server";
import { getUserById, listUsers } from "@/lib/db";

export async function GET() {
  const users = await listUsers();
  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  const body = await request.json();
  const id = typeof body.id === "string" ? body.id : "1";
  const user = await getUserById(id);
  return NextResponse.json({ user });
}
