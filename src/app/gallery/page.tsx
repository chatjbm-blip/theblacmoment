import GalleryPage from "@/components/pages/GalleryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — The Blac Moment",
  description:
    "Browse every episode of The Blac Moment. Filter by category, search by keyword, or sort to find what resonates with you.",
};

export default function GalleryRoute() {
  return <GalleryPage />;
}
