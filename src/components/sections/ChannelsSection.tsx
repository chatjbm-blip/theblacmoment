"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const platforms = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@TheBlacMoment",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "#FF0000",
    subscribers: "234+",
  },
  {
    name: "Spotify",
    url: "#",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    color: "#1DB954",
    subscribers: "Coming Soon",
  },
  {
    name: "Apple Podcasts",
    url: "#",
    icon: (
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    color: "#872EC4",
    subscribers: "Coming Soon",
  },
];

export default function ChannelsSection() {
  return (
    <section id="channels" className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-[#E47D08]/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Listen Everywhere
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Find Us on{" "}
            <span className="gradient-text">Your Platform</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto">
            Wherever you tune in, The Blac Moment is there. Subscribe on your
            favorite platform.
          </p>
        </motion.div>

        {/* Platform Cards — Horizontal scroll on mobile, grid on desktop */}
        <div className="md:hidden">
          <div className="mobile-scroll gap-4 pb-4 -mx-4 px-4">
            {platforms.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="w-[240px] sm:w-[260px] shrink-0 group rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 text-center transition-all duration-500 mobile-press"
              >
                <div
                  className="inline-flex p-3 sm:p-4 rounded-2xl mb-4 transition-colors"
                  style={{ backgroundColor: `${platform.color}15` }}
                >
                  <div style={{ color: platform.color }}>{platform.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">
                  {platform.name}
                </h3>
                <p className="text-xs text-white/40">{platform.subscribers}</p>
                <div
                  className="mt-3 text-sm font-medium"
                  style={{ color: platform.color }}
                >
                  Listen Now
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 p-8 text-center transition-all duration-500 hover:shadow-2xl"
              style={{
                boxShadow: `0 0 0 rgba(0,0,0,0)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px ${platform.color}15`;
                (e.currentTarget as HTMLElement).style.borderColor = `${platform.color}40`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                (e.currentTarget as HTMLElement).style.borderColor = `rgba(255,255,255,0.06)`;
              }}
            >
              <div
                className="inline-flex p-4 rounded-2xl mb-5 transition-colors"
                style={{ backgroundColor: `${platform.color}15` }}
              >
                <div style={{ color: platform.color }}>{platform.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {platform.name}
              </h3>
              <p className="text-sm text-white/40">{platform.subscribers}</p>
              <div
                className="mt-4 text-sm font-medium transition-colors"
                style={{ color: platform.color }}
              >
                Listen Now →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
