import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    // The portfolio renders its core projects statically, so an unreachable
    // database degrades to "no extra projects" rather than a client-side error.
    console.error("Failed to fetch projects:", error);
    return NextResponse.json([], { status: 200 });
  }
}
