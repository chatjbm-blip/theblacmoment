"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Clock,
  Calendar,
  Tag,
  ExternalLink,
  ChevronRight,
  ListMusic,
  Headphones,
} from "lucide-react";
import Link from "next/link";

const episodes = [
  {
    id: 1,
    number: "EP 08",
    title: "Finding Light In Life's Darkest Moments",
    description:
      "A powerful conversation about resilience, hope, and the strength we find when we need it most. Cornelius sits down with guests who've walked through the valley and emerged with testimony.",
    youtubeId: "0oWAiwtskP0",
    duration: "45:23",
    date: "Mar 15, 2026",
    category: "Inspirational",
  },
  {
    id: 2,
    number: "EP 02",
    title: "Empathy: The Journey Through Grief",
    description:
      "Navigating the complex landscape of loss and discovering how empathy connects us all. An emotional deep dive into what it means to truly walk in someone else's shoes.",
    youtubeId: "8UppcyyTPCI",
    duration: "38:17",
    date: "Feb 28, 2026",
    category: "Culture & Society",
  },
  {
    id: 3,
    number: "EP 05",
    title: "From Depression to Revolution",
    description:
      "Transforming personal struggles into a catalyst for change and collective action. This episode explores how pain can become the fuel for revolutionary thinking and living.",
    youtubeId: "Ow_A1VUMz6E",
    duration: "52:08",
    date: "Feb 14, 2026",
    category: "The Grind",
  },
];

export default function StreamPage() {
  const [activeEpisode, setActiveEpisode] = useState(0);
  const currentEp = episodes[activeEpisode];

  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#E47D08]/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-sm font-medium mb-6">
            <Headphones size={14} />
            Stream Now
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Catch the <span className="gradient-text">Vibe</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Stream live episodes and catch up on conversations that matter.
            Click any episode below to start watching.
          </p>
        </motion.div>

        {/* Main Player */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06]">
            {/* Active Video */}
            <div className="relative aspect-video bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEp.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${currentEp.youtubeId}?rel=0&autoplay=0`}
                    title={currentEp.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Now Playing Info */}
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-xs font-semibold">
                      {currentEp.number}
                    </span>
                    <span className="text-xs text-white/30 flex items-center gap-1">
                      <Clock size={10} />
                      {currentEp.duration}
                    </span>
                    <span className="text-xs text-white/20 flex items-center gap-1">
                      <Calendar size={10} />
                      {currentEp.date}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {currentEp.title}
                  </h2>
                  <p className="text-sm text-white/40 max-w-2xl">
                    {currentEp.description}
                  </p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${currentEp.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-[#E47D08]/30 transition-all group"
                >
                  <ExternalLink
                    size={18}
                    className="text-white/40 group-hover:text-[#FF8D28] transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Episode Playlist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ListMusic size={18} className="text-[#E47D08]" />
              Up Next
            </h3>
            <Link
              href="/gallery"
              className="text-sm text-[#E47D08] hover:text-[#FF8D28] transition-colors flex items-center gap-1"
            >
              View All Episodes
              <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {episodes.map((ep, i) => (
              <motion.button
                key={ep.id}
                onClick={() => setActiveEpisode(i)}
                whileHover={{ scale: 1.02 }}
                className={`text-left rounded-2xl p-5 transition-all duration-300 border ${
                  activeEpisode === i
                    ? "bg-[#E47D08]/10 border-[#E47D08]/30 shadow-lg shadow-[#E47D08]/10"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      activeEpisode === i
                        ? "bg-[#E47D08] text-white"
                        : "bg-[#E47D08]/10 text-[#FF8D28]"
                    }`}
                  >
                    {ep.number}
                  </span>
                  <span className="text-[10px] text-white/25 flex items-center gap-1">
                    <Clock size={9} />
                    {ep.duration}
                  </span>
                </div>
                <h4
                  className={`text-sm font-bold mb-1 line-clamp-2 ${
                    activeEpisode === i
                      ? "text-[#FF8D28]"
                      : "text-white group-hover:text-[#FF8D28]"
                  }`}
                >
                  {ep.title}
                </h4>
                <div className="flex items-center gap-1 text-[10px] text-white/20">
                  <Tag size={9} />
                  {ep.category}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.youtube.com/@TheBlacMoment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/20"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </motion.div>
      </div>
    </div>
  );
}
