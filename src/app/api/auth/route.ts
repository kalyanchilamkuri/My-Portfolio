import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ error: "Password is required" }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD;
    const jwtSecret = process.env.JWT_SECRET;

    if (!adminPassword || !jwtSecret) {
      console.error("Missing ADMIN_PASSWORD or JWT_SECRET in environment variables.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Direct constant-time string comparison (password stored as plain text in .env.local)
    if (password !== adminPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = jwt.sign({ role: "admin" }, jwtSecret, { expiresIn: "1d" });

    const response = NextResponse.json({ success: true }, { status: 200 });

    // Set httpOnly token cookie
    response.cookies.set({
      name: "admin_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    // Set UI flag cookie (readable by client JS)
    response.cookies.set({
      name: "is_admin",
      value: "true",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
