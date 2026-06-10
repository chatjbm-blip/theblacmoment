import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

// ─── Types ────────────────────────────────────────────────────────

export interface ContactSubmission {
  name: string;
  email: string;
  description: string;
  becomeGuest: boolean;
  becomeSponsor: boolean;
  invite: boolean;
  createdAt: Timestamp;
}

export interface Subscriber {
  email: string;
  createdAt: Timestamp;
  source: string; // 'footer' | 'subscribe-banner'
}

export interface Episode {
  id: string;
  number: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  date: string;
  category: string;
  season: number;
  isFeatured: boolean;
  thumbnailUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarUrl?: string;
}

// ─── Contact Submissions ──────────────────────────────────────────

export async function submitContact(data: Omit<ContactSubmission, "createdAt">) {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting contact:", error);
    return { success: false, error: "Failed to submit contact form" };
  }
}

// ─── Subscribers ──────────────────────────────────────────────────

export async function addSubscriber(
  email: string,
  source: string = "footer"
): Promise<{ success: boolean; id?: string; error?: string; alreadySubscribed?: boolean }> {
  try {
    // Check if email already exists
    const q = query(collection(db, "subscribers"), where("email", "==", email), limit(1));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      return { success: false, alreadySubscribed: true, error: "This email is already subscribed" };
    }

    const docRef = await addDoc(collection(db, "subscribers"), {
      email,
      source,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return { success: false, error: "Failed to subscribe" };
  }
}

// ─── Episodes ─────────────────────────────────────────────────────

export async function getEpisodes(): Promise<Episode[]> {
  try {
    const q = query(collection(db, "episodes"), orderBy("date", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Episode[];
  } catch (error) {
    console.error("Error fetching episodes:", error);
    return [];
  }
}

export async function getEpisodeById(id: string): Promise<Episode | null> {
  try {
    const docRef = doc(db, "episodes", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Episode;
    }
    return null;
  } catch (error) {
    console.error("Error fetching episode:", error);
    return null;
  }
}

export async function getEpisodesByCategory(category: string): Promise<Episode[]> {
  try {
    const q = query(
      collection(db, "episodes"),
      where("category", "==", category),
      orderBy("date", "desc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Episode[];
  } catch (error) {
    console.error("Error fetching episodes by category:", error);
    return [];
  }
}

// ─── Testimonials ─────────────────────────────────────────────────

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const q = query(collection(db, "testimonials"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Testimonial[];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

// ─── Analytics ────────────────────────────────────────────────────

export async function trackEvent(event: string, data?: Record<string, unknown>) {
  try {
    await addDoc(collection(db, "analytics"), {
      event,
      data: data || {},
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error tracking event:", error);
  }
}
