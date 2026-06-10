"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import Ticker from "@/components/ui-custom/Ticker";
import StreamSection from "@/components/sections/StreamSection";
import AboutSection from "@/components/sections/AboutSection";
import HostSection from "@/components/sections/HostSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SubscribeBanner from "@/components/sections/SubscribeBanner";
import ChannelsSection from "@/components/sections/ChannelsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
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
