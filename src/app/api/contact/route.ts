import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Message from "@/models/Message";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    await dbConnect();
    const newMessage = await Message.create({ name, email, message });

    return NextResponse.json({ success: true, message: "Message sent successfully!", data: newMessage }, { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
