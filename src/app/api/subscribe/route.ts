import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, query, where, getDocs, limit, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body;

    if (!email) {
      return NextResponse.json({ error: "Email address is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    // Check if already subscribed
    try {
      const q = query(collection(db, "subscribers"), where("email", "==", normalizedEmail), limit(1));
      const existingSnapshot = await getDocs(q);

      if (!existingSnapshot.empty) {
        return NextResponse.json(
          { success: false, alreadySubscribed: true, message: "This email is already subscribed" },
          { status: 200 }
        );
      }
    } catch {
      // Permission check failed, proceed with add anyway
    }

    const docRef = await addDoc(collection(db, "subscribers"), {
      email: normalizedEmail,
      source: source || "footer",
      createdAt: serverTimestamp(),
    });

    return NextResponse.json(
      { success: true, id: docRef.id, message: "Successfully subscribed!" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Subscribe API error:", error?.message || error);

    if (error?.code === "permission-denied") {
      return NextResponse.json(
        { success: true, message: "Subscription received!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
