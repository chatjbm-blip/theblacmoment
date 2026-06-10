import ChannelsPage from "@/components/pages/ChannelsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Channels — The Blac Moment",
  description:
    "Find The Blac Moment on your preferred platform — YouTube, Spotify, Apple Podcasts, and more.",
};

export default function ChannelsRoute() {
  return <ChannelsPage />;
}
