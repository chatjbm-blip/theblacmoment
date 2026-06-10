"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Flame } from "lucide-react";

const categories = [
  {
    icon: Globe,
    title: "Culture & Society",
    description:
      "Deep dives into the cultural shifts and societal dynamics that shape our world.",
  },
  {
    icon: Zap,
    title: "Actionist",
    description:
      "Spotlighting the changemakers who turn conviction into impact every single day.",
  },
  {
    icon: Flame,
    title: "The Grind",
    description:
      "Raw stories of hustle, resilience, and the relentless pursuit of purpose.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#E47D08]/8 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/cornelius-host.jpeg"
                  alt="The Blac Moment Podcast Session"
                  className="w-full h-[280px] sm:h-[350px] md:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating overlay card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-2 sm:-right-4 md:-right-8 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 max-w-[200px] sm:max-w-[240px]"
              >
                <p className="text-xs sm:text-sm text-white/70 italic leading-relaxed">
                  &ldquo;In a world full of soundbites, we&apos;re looking for the
                  moments to spotlight actionists.&rdquo;
                </p>
              </motion.div>

              {/* Floating category badges — hidden on small mobile */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-4 sm:top-6 -left-2 sm:-left-4 md:-left-8 flex flex-col gap-1.5 sm:gap-2"
              >
                {["Culture & Society", "Actionist", "The Grind"].map(
                  (cat, i) => (
                    <span
                      key={cat}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#E47D08]/90 text-white text-[10px] sm:text-xs font-semibold shadow-lg backdrop-blur-sm"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {cat}
                    </span>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                About The Podcast
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                More Than Just a{" "}
                <span className="gradient-text">Podcast</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              In a world full of soundbites, we&apos;re looking for the Moment. The
              Blac Moment isn&apos;t just another podcast; it&apos;s a deep dive into
              culture, lifestyle, and the chaotic beauty of modern life. Cornelius
              brings the same energy you know from The Blac Shrec, but this time,
              he&apos;s turning the volume up. Whether we are dissecting trending
              topics, interviewing game-changers, or just venting about the
              absurdity of adulthood, we promise one thing:{" "}
              <span className="text-[#FF8D28] font-semibold">Authenticity</span>.
            </p>

            {/* Category Cards */}
            <div className="grid gap-3 sm:gap-4">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#E47D08]/20 transition-all duration-300 group mobile-press"
                >
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#E47D08]/10 group-hover:bg-[#E47D08]/20 transition-colors">
                    <cat.icon size={18} className="text-[#FF8D28] sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base mb-0.5 sm:mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/40">{cat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
