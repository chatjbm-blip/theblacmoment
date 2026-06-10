import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AudioPlayer from "@/components/ui-custom/AudioPlayer";
import ScrollProgress from "@/components/ui-custom/ScrollProgress";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theblacmoment.com"),
  title: "The Blac Moment — Unfiltered Conversations. Raw Perspectives. Bold Stories.",
  description:
    "The Blac Moment isn't just another podcast — it's a deep dive into culture, lifestyle, and the chaotic beauty of modern life. Hosted by Cornelius Kayode.",
  keywords: [
    "The Blac Moment",
    "podcast",
    "Cornelius Kayode",
    "Blac Shrec",
    "culture",
    "lifestyle",
    "unfiltered conversations",
  ],
  authors: [{ name: "Cornelius Kayode" }],
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "The Blac Moment",
    description: "Unfiltered conversations. Raw perspectives. Bold Stories.",
    type: "website",
    images: ["/images/banner-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Blac Moment",
    description: "Unfiltered conversations. Raw perspectives. Bold Stories.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col bg-black">
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <AudioPlayer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
