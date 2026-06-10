"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Instagram,
  Twitter,
  Mic2,
  Award,
  Users,
  Heart,
  Quote,
} from "lucide-react";

const milestones = [
  {
    icon: Mic2,
    title: "8+ Episodes",
    description: "Deep conversations with actionists across the globe",
  },
  {
    icon: Users,
    title: "234+ Subscribers",
    description: "A growing community of authentic listeners",
  },
  {
    icon: Award,
    title: "Unapologetic",
    description: "No scripts, no filters — just raw, real talk",
  },
  {
    icon: Heart,
    title: "Impact Driven",
    description: "Spotlighting stories that drive change",
  },
];

const quotes = [
  {
    text: "I built a platform on being unapologetically myself.",
    context: "On authenticity",
  },
  {
    text: "No scripts. No filters. Just Cornelius.",
    context: "The Blac Moment promise",
  },
  {
    text: "We're looking for the moments to spotlight actionists.",
    context: "The mission",
  },
];

export default function HostPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E47D08]/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#FF8D28]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-sm font-medium mb-6">
            <Mic2 size={14} />
            The Host
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            The Voice Behind{" "}
            <span className="gradient-text">the Mic</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/30 font-light italic">
            You know him as The Blac Shrec.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative max-w-[400px] mx-auto lg:mx-0">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-[2rem] border-2 border-[#E47D08]/20" />
              <div className="absolute -inset-8 rounded-[2.5rem] border border-[#E47D08]/10" />

              {/* Main Portrait */}
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#E47D08]/10">
                <img
                  src="/images/host-portrait.jpeg"
                  alt="Cornelius Kayode - Host of The Blac Moment"
                  className="w-full h-[500px] md:h-[600px] object-cover object-top"
                />
              </div>

              {/* Name card */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass rounded-2xl px-8 py-4 text-center min-w-[240px]"
              >
                <p className="font-bold text-white text-lg">
                  Cornelius Kayode
                </p>
                <p className="text-sm text-[#FF8D28]">
                  Host & Creator · The Blac Shrec
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                Cornelius Kayode is a creator, a visionary, and a voice that
                refuses to be put in a box. With a unique blend of humor and
                insight, Cornelius has built a platform on being unapologetically
                himself.
              </p>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                On The Blac Moment, he steps out from behind the keyboard and up
                to the microphone to connect with you on a deeper level.{" "}
                <span className="text-white font-medium">
                  No scripts. No filters. Just Cornelius.
                </span>
              </p>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed">
                Whether he&apos;s dissecting trending topics, interviewing
                game-changers, or just venting about the absurdity of adulthood,
                one thing remains constant:{" "}
                <span className="text-[#FF8D28] font-semibold">
                  Authenticity
                </span>
                .
              </p>
            </div>

            {/* Quote Cards */}
            <div className="space-y-3">
              {quotes.map((q, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <Quote
                    size={20}
                    className="text-[#E47D08]/40 shrink-0 mt-1"
                  />
                  <div>
                    <p className="text-white/70 italic text-sm md:text-base">
                      &ldquo;{q.text}&rdquo;
                    </p>
                    <p className="text-[10px] text-[#FF8D28] mt-1">
                      {q.context}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center"
                >
                  <m.icon
                    size={20}
                    className="text-[#FF8D28] mx-auto mb-2"
                  />
                  <p className="font-bold text-white text-sm">{m.title}</p>
                  <p className="text-[10px] text-white/30 mt-1">
                    {m.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.youtube.com/@TheBlacMoment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-medium hover:bg-red-600/20 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600/10 border border-pink-600/20 text-pink-500 text-sm font-medium hover:bg-pink-600/20 transition-all"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600/10 border border-sky-600/20 text-sky-500 text-sm font-medium hover:bg-sky-600/20 transition-all"
              >
                <Twitter size={16} />
                Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
