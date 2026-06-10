import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Fallback episodes when Firestore is empty or unavailable
const fallbackEpisodes = [
  {
    id: "1",
    number: "EP 08",
    title: "Finding Light In Life's Darkest Moments",
    description:
      "A powerful conversation about resilience, hope, and the strength we find when we need it most. Cornelius sits down with guests who've walked through the valley and emerged with testimony.",
    youtubeId: "0oWAiwtskP0",
    duration: "45:23",
    date: "Mar 15, 2026",
    category: "Inspirational",
    season: 1,
    isFeatured: true,
  },
  {
    id: "2",
    number: "EP 02",
    title: "Empathy: The Journey Through Grief",
    description:
      "Navigating the complex landscape of loss and discovering how empathy connects us all. An emotional deep dive into what it means to truly walk in someone else's shoes.",
    youtubeId: "8UppcyyTPCI",
    duration: "38:17",
    date: "Feb 28, 2026",
    category: "Culture & Society",
    season: 1,
    isFeatured: false,
  },
  {
    id: "3",
    number: "EP 05",
    title: "From Depression to Revolution",
    description:
      "Transforming personal struggles into a catalyst for change and collective action. This episode explores how pain can become the fuel for revolutionary thinking and living.",
    youtubeId: "Ow_A1VUMz6E",
    duration: "52:08",
    date: "Feb 14, 2026",
    category: "The Grind",
    season: 1,
    isFeatured: true,
  },
  {
    id: "4",
    number: "EP 07",
    title: "The Art of Showing Up",
    description:
      "What does it really mean to be present? We explore the radical act of showing up for yourself and your community, even when it's hardest.",
    youtubeId: "",
    duration: "41:55",
    date: "Mar 8, 2026",
    category: "Actionist",
    season: 1,
    isFeatured: false,
  },
  {
    id: "5",
    number: "EP 06",
    title: "Unlearning the Hustle Myth",
    description:
      "We've been sold the idea that endless grinding equals success. Let's unpack why that's a trap and what a healthier relationship with ambition looks like.",
    youtubeId: "",
    duration: "47:32",
    date: "Mar 1, 2026",
    category: "The Grind",
    season: 1,
    isFeatured: false,
  },
  {
    id: "6",
    number: "EP 04",
    title: "Cultural Code-Switching",
    description:
      "The invisible dance many of us perform daily — adapting our language, behavior, and identity to fit different spaces. When is it survival and when is it self-betrayal?",
    youtubeId: "",
    duration: "39:45",
    date: "Feb 21, 2026",
    category: "Culture & Society",
    season: 1,
    isFeatured: false,
  },
  {
    id: "7",
    number: "EP 03",
    title: "Building While Broken",
    description:
      "Some of the most impactful movements were born from brokenness. We talk to actionists who built something meaningful in their hardest seasons.",
    youtubeId: "",
    duration: "50:11",
    date: "Feb 14, 2026",
    category: "Actionist",
    season: 1,
    isFeatured: false,
  },
  {
    id: "8",
    number: "EP 01",
    title: "Welcome to The Blac Moment",
    description:
      "The inaugural episode where Cornelius lays it all on the table — what this podcast is about, why it matters, and what you can expect from every conversation moving forward.",
    youtubeId: "",
    duration: "33:28",
    date: "Feb 7, 2026",
    category: "Lifestyle",
    season: 1,
    isFeatured: true,
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let q = query(collection(db, "episodes"), orderBy("date", "desc"));

    if (category && category !== "All") {
      q = query(q, where("category", "==", category));
    }

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      let filtered = [...fallbackEpisodes];
      if (category && category !== "All") {
        filtered = filtered.filter((ep) => ep.category === category);
      }
      return NextResponse.json({ episodes: filtered, source: "fallback" });
    }

    const episodes = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ episodes, source: "firestore" });
  } catch (error) {
    console.error("Episodes API error:", error);
    return NextResponse.json({ episodes: fallbackEpisodes, source: "fallback" });
  }
}
