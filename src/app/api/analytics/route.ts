import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, data } = body;

    if (!event) {
      return NextResponse.json({ error: "Event name is required" }, { status: 400 });
    }

    // Analytics should never block the user experience
    try {
      await addDoc(collection(db, "analytics"), {
        event: String(event),
        data: data || {},
        timestamp: serverTimestamp(),
      });
    } catch {
      // Silently fail for analytics
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ success: true }, { status: 201 });
  }
}
