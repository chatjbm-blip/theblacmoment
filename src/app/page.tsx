"use client";

import React from "react";
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <Ticker />
        <StreamSection />
        <AboutSection />
        <HostSection />
        <TestimonialsSection />
        <SubscribeBanner />
        <ChannelsSection />
        <ContactSection />
      </main>

      <Footer />
      <AudioPlayer />
    </div>
  );
}
