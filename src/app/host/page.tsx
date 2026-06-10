import HostPage from "@/components/pages/HostPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Host — The Blac Moment",
  description:
    "Meet Cornelius Kayode, the voice behind The Blac Moment. Creator, visionary, and unapologetic storyteller.",
};

export default function HostRoute() {
  return <HostPage />;
}
