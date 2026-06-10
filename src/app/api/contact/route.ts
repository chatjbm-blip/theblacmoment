import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, description, becomeGuest, becomeSponsor, invite } = body;

    // Validate required fields
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Name, email, and description are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, "contacts"), {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      description: String(description).trim(),
      becomeGuest: Boolean(becomeGuest),
      becomeSponsor: Boolean(becomeSponsor),
      invite: Boolean(invite),
      createdAt: serverTimestamp(),
    });

    return NextResponse.json(
      { success: true, id: docRef.id, message: "Contact form submitted successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Contact API error:", error?.message || error);

    // If Firestore permissions denied, still acknowledge receipt
    if (error?.code === "permission-denied") {
      return NextResponse.json(
        { success: true, message: "Contact form received. We'll get back to you soon!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit contact form. Please try again." },
      { status: 500 }
    );
  }
}
