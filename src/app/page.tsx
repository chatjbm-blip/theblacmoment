"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePageStore } from "@/store/page-store";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Ticker from "@/components/ui-custom/Ticker";
import StreamSection from "@/components/sections/StreamSection";
import AboutSection from "@/components/sections/AboutSection";
import HostSection from "@/components/sections/HostSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SubscribeBanner from "@/components/sections/SubscribeBanner";
import ChannelsSection from "@/components/sections/ChannelsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import AudioPlayer from "@/components/ui-custom/AudioPlayer";
import ScrollProgress from "@/components/ui-custom/ScrollProgress";
import GalleryPage from "@/components/pages/GalleryPage";
import StreamPage from "@/components/pages/StreamPage";
import HostPage from "@/components/pages/HostPage";
import ChannelsPage from "@/components/pages/ChannelsPage";
import ContactPage from "@/components/pages/ContactPage";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <StreamSection />
      <AboutSection />
      <HostSection />
      <TestimonialsSection />
      <SubscribeBanner />
      <ChannelsSection />
      <ContactSection />
    </>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export default function Home() {
  const { currentPage } = usePageStore();

  const renderPage = () => {
    switch (currentPage) {
      case "gallery":
        return <GalleryPage />;
      case "stream":
        return <StreamPage />;
      case "host":
        return <HostPage />;
      case "channels":
        return <ChannelsPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <AudioPlayer />
    </div>
  );
}
