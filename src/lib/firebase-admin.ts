import { initializeApp, getApps, cert } from "firebase-admin";
import { getFirestore, FieldValue as FV } from "firebase-admin/firestore";

let _adminAvailable = false;
let _adminChecked = false;

function getAdminApp() {
  const apps = getApps();
  if (apps.length > 0) return apps[0]!;

  return initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "theblacmoment-2c18e",
  });
}

// Check if admin credentials are available
async function checkAdminAvailable(): Promise<boolean> {
  if (_adminChecked) return _adminAvailable;
  _adminChecked = true;

  try {
    const app = getAdminApp();
    const db = getFirestore(app);
    // Try a lightweight read to check if credentials work
    await db.collection("_health_check").limit(1).get();
    _adminAvailable = true;
  } catch {
    _adminAvailable = false;
  }

  return _adminAvailable;
}

export async function getAdminDb() {
  const available = await checkAdminAvailable();
  if (!available) {
    throw new Error("Admin SDK credentials not available");
  }
  return getFirestore(getAdminApp());
}

export { FV as FieldValue };

// Force re-check (useful after credentials are set up)
export function resetAdminCheck() {
  _adminChecked = false;
  _adminAvailable = false;
}
