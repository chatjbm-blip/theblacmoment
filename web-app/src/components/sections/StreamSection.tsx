"use client";

import React from "react";
import { motion } from "framer-motion";

const episodes = [
  {
    id: 1,
    number: "EP 08",
    title: "Finding Light In Life's Darkest Moments",
    description:
      "A powerful conversation about resilience, hope, and the strength we find when we need it most.",
    youtubeId: "0oWAiwtskP0",
    duration: "45:23",
    date: "Mar 2026",
    category: "Inspirational",
  },
  {
    id: 2,
    number: "EP 02",
    title: "Empathy: The Journey Through Grief",
    description:
      "Navigating the complex landscape of loss and discovering how empathy connects us all.",
    youtubeId: "8UppcyyTPCI",
    duration: "38:17",
    date: "Feb 2026",
    category: "Culture & Society",
  },
  {
    id: 3,
    number: "EP 05",
    title: "From Depression to Revolution",
    description:
      "Transforming personal struggles into a catalyst for change and collective action.",
    youtubeId: "Ow_A1VUMz6E",
    duration: "52:08",
    date: "Feb 2026",
    category: "The Grind",
  },
];

export default function StreamSection() {
  return (
    <section id="stream" className="relative py-24 md:py-32 bg-[#050505]">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E47D08]/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-sm font-medium mb-6">
            Stream Now
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Catch the{" "}
            <span className="gradient-text">Vibe</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Stream live episodes and catch up on conversations that matter.
          </p>
        </motion.div>

        {/* Episodes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode, i) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="rounded-3xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-[#E47D08]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#E47D08]/10">
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${episode.youtubeId}?rel=0`}
                    title={episode.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-xs font-semibold">
                      {episode.number}
                    </span>
                    <span className="text-xs text-white/30">{episode.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF8D28] transition-colors duration-300 line-clamp-2">
                    {episode.title}
                  </h3>
                  <p className="text-sm text-white/40 line-clamp-2">
                    {episode.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-white/30 font-medium">
                      {episode.duration}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/40">
                      {episode.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.youtube.com/@TheBlacMoment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Watch on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}
