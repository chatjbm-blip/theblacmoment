/**
 * Firestore Seed Script
 *
 * Populates the Firestore database with initial episode data,
 * testimonials, and other content for The Blac Moment.
 *
 * Usage:
 *   npx tsx scripts/seed-firestore.ts
 *
 * Or with Firebase Admin credentials:
 *   GOOGLE_APPLICATION_CREDENTIALS=path/to/serviceAccountKey.json npx tsx scripts/seed-firestore.ts
 */

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

// ─── Firebase Admin Initialization ───────────────────────────────

const projectId = "theblacmoment-2c18e";

try {
  initializeApp({
    projectId,
    // If GOOGLE_APPLICATION_CREDENTIALS is set, the Admin SDK will use it automatically.
    // Otherwise, we rely on the default project ID for local emulation / testing.
  });
} catch {
  // Already initialized
}

const db = getFirestore();

// ─── Episode Data ────────────────────────────────────────────────

const episodes = [
  {
    number: "EP 08",
    title: "Finding Light In Life's Darkest Moments",
    description:
      "A powerful conversation about resilience, hope, and the strength we find when we need it most. Cornelius sits down with guests who've walked through the valley and emerged with testimony. This episode dives deep into how people navigate their darkest chapters — from losing loved ones to facing career-ending setbacks — and still find reasons to keep going. It's not about toxic positivity; it's about the raw, messy, beautiful process of healing.",
    youtubeId: "0oWAiwtskP0",
    duration: "45:23",
    date: "Mar 15, 2026",
    category: "Inspirational",
    season: 1,
    isFeatured: true,
  },
  {
    number: "EP 07",
    title: "The Art of Showing Up",
    description:
      "What does it really mean to be present? We explore the radical act of showing up for yourself and your community, even when it's hardest. From canceling plans out of anxiety to the guilt of not being there for a friend — this episode gets real about the tension between self-care and community care, and why sometimes just being there is the most revolutionary thing you can do.",
    youtubeId: "",
    duration: "41:55",
    date: "Mar 8, 2026",
    category: "Actionist",
    season: 1,
    isFeatured: false,
  },
  {
    number: "EP 06",
    title: "Unlearning the Hustle Myth",
    description:
      "We've been sold the idea that endless grinding equals success. Let's unpack why that's a trap and what a healthier relationship with ambition looks like. This episode challenges the glorification of burnout culture and explores what happens when you choose rest without guilt. Guests share their journeys of stepping back and discovering that success isn't always measured in output.",
    youtubeId: "",
    duration: "47:32",
    date: "Mar 1, 2026",
    category: "The Grind",
    season: 1,
    isFeatured: false,
  },
  {
    number: "EP 05",
    title: "From Depression to Revolution",
    description:
      "Transforming personal struggles into a catalyst for change and collective action. This episode explores how pain can become the fuel for revolutionary thinking and living. Cornelius talks with individuals who turned their mental health battles into movements, proving that sometimes the deepest wounds produce the most powerful advocates for change.",
    youtubeId: "Ow_A1VUMz6E",
    duration: "52:08",
    date: "Feb 14, 2026",
    category: "The Grind",
    season: 1,
    isFeatured: true,
  },
  {
    number: "EP 04",
    title: "Cultural Code-Switching",
    description:
      "The invisible dance many of us perform daily — adapting our language, behavior, and identity to fit different spaces. When is it survival and when is it self-betrayal? This episode explores the psychological toll of code-switching, who benefits from it, and how to navigate professional and social spaces without losing yourself in the process.",
    youtubeId: "",
    duration: "39:45",
    date: "Feb 21, 2026",
    category: "Culture & Society",
    season: 1,
    isFeatured: false,
  },
  {
    number: "EP 03",
    title: "Building While Broken",
    description:
      "Some of the most impactful movements were born from brokenness. We talk to actionists who built something meaningful in their hardest seasons. From community organizers working through grief to entrepreneurs launching businesses while battling depression — this episode is proof that your pain doesn't disqualify your purpose.",
    youtubeId: "",
    duration: "50:11",
    date: "Feb 14, 2026",
    category: "Actionist",
    season: 1,
    isFeatured: false,
  },
  {
    number: "EP 02",
    title: "Empathy: The Journey Through Grief",
    description:
      "Navigating the complex landscape of loss and discovering how empathy connects us all. An emotional deep dive into what it means to truly walk in someone else's shoes. This episode features raw, unscripted conversations about the universal experience of grief — and why our culture's discomfort with it leaves so many people suffering in silence.",
    youtubeId: "8UppcyyTPCI",
    duration: "38:17",
    date: "Feb 28, 2026",
    category: "Culture & Society",
    season: 1,
    isFeatured: false,
  },
  {
    number: "EP 01",
    title: "Welcome to The Blac Moment",
    description:
      "The inaugural episode where Cornelius lays it all on the table — what this podcast is about, why it matters, and what you can expect from every conversation moving forward. This is the foundation. The thesis. The reason this space exists. If you're new here, start here. If you've been here from day one, you already know.",
    youtubeId: "",
    duration: "33:28",
    date: "Feb 7, 2026",
    category: "Lifestyle",
    season: 1,
    isFeatured: true,
  },
];

// ─── Testimonial Data ────────────────────────────────────────────

const testimonials = [
  {
    name: "Amina Johnson",
    role: "Community Organizer",
    text: "The Blac Moment isn't just a podcast — it's a movement. Cornelius has a way of making you feel seen, heard, and challenged all at once. Every episode leaves me thinking for days.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "Entrepreneur & Listener",
    text: "I stumbled on this podcast during a really low point. Episode 5 literally changed how I view my own struggles. This show is doing something rare — creating space for real talk without the fluff.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Mental Health Advocate",
    text: "Finally, a podcast that doesn't shy away from the uncomfortable. The conversations are raw, the guests are authentic, and Cornelius brings a perspective you won't find anywhere else.",
    rating: 5,
  },
];

// ─── Seed Function ───────────────────────────────────────────────

async function seed() {
  console.log("Seeding Firestore database...\n");

  // Seed Episodes
  console.log("Seeding episodes...");
  const episodesRef = db.collection("episodes");
  let episodeCount = 0;

  for (const episode of episodes) {
    try {
      const docRef = await episodesRef.add({
        ...episode,
        createdAt: FieldValue.serverTimestamp(),
      });
      episodeCount++;
      console.log(`  OK ${episode.number}: ${episode.title} -> ${docRef.id}`);
    } catch (error: any) {
      console.error(`  FAIL ${episode.number}: ${error.message}`);
    }
  }

  // Seed Testimonials
  console.log("\nSeeding testimonials...");
  const testimonialsRef = db.collection("testimonials");
  let testimonialCount = 0;

  for (const testimonial of testimonials) {
    try {
      const docRef = await testimonialsRef.add({
        ...testimonial,
        createdAt: FieldValue.serverTimestamp(),
      });
      testimonialCount++;
      console.log(`  OK ${testimonial.name} -> ${docRef.id}`);
    } catch (error: any) {
      console.error(`  FAIL ${testimonial.name}: ${error.message}`);
    }
  }

  console.log(`\nSeeding complete!`);
  console.log(`  Episodes: ${episodeCount}/${episodes.length}`);
  console.log(`  Testimonials: ${testimonialCount}/${testimonials.length}`);
  console.log(`  Total documents: ${episodeCount + testimonialCount}`);

  process.exit(0);
}

seed().catch((error) => {
  console.error("Fatal error during seeding:", error);
  process.exit(1);
});
