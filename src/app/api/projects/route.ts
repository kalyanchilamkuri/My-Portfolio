import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json(projects, { status: 200 });
  } catch { // eslint-disable-next-line

    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}
