import ContactPage from "@/components/pages/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — The Blac Moment",
  description:
    "Get in touch with The Blac Moment. Become a guest, sponsor an episode, or suggest a topic.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
