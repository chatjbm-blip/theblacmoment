import StreamPage from "@/components/pages/StreamPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stream Now — The Blac Moment",
  description:
    "Stream live episodes and catch up on conversations that matter. Watch The Blac Moment on YouTube.",
};

export default function StreamRoute() {
  return <StreamPage />;
}
