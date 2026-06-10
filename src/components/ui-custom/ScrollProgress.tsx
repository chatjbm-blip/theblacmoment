"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "stream", label: "Stream" },
  { id: "about", label: "About" },
  { id: "host", label: "Host" },
  { id: "channels", label: "Channels" },
  { id: "contact", label: "Contact" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackTop(window.scrollY > 500);

      // Determine active section
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar at top */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-[#E47D08] to-[#FF8D28]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Side navigation dots (desktop only) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              document
                .getElementById(section.id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3 justify-end"
            aria-label={`Go to ${section.label}`}
          >
            <span className="text-xs font-medium text-white/0 group-hover:text-white/60 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              {section.label}
            </span>
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-[#E47D08] scale-150 shadow-lg shadow-[#E47D08]/50"
                  : "bg-white/20 group-hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Back to top button — positioned above audio player on mobile */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-24 sm:bottom-20 right-4 sm:right-6 z-50 p-3 rounded-full bg-[#E47D08] hover:bg-[#FF8D28] text-white shadow-lg shadow-[#E47D08]/30 transition-all duration-300 mobile-press touch-target"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
