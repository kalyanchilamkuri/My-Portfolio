import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Achievement from "@/models/Achievement";

export async function GET() {
  try {
    await dbConnect();
    const achievements = await Achievement.find({}).sort({ createdAt: -1 });
    return NextResponse.json(achievements, { status: 200 });
  } catch { // eslint-disable-next-line

    return NextResponse.json({ error: "Failed to fetch achievements" }, { status: 500 });
  }
}
