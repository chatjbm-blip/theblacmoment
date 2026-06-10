"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Headphones, Radio, Globe } from "lucide-react";

const platforms = [
  {
    name: "YouTube",
    description:
      "Watch full episodes with video. Subscribe to The Blac Moment on YouTube for the complete visual experience, including exclusive behind-the-scenes content.",
    url: "https://www.youtube.com/@TheBlacMoment",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "#FF0000",
    bgColor: "from-red-600/20 to-red-900/10",
    stats: "234+ Subscribers",
    status: "Available Now",
  },
  {
    name: "Spotify",
    description:
      "Listen on the go. Stream all episodes of The Blac Moment on Spotify, perfect for your commute, workout, or those late-night reflection sessions.",
    url: "#",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    color: "#1DB954",
    bgColor: "from-green-600/20 to-green-900/10",
    stats: "Coming Soon",
    status: "Launching Soon",
  },
  {
    name: "Apple Podcasts",
    description:
      "For the Apple ecosystem. Enjoy The Blac Moment with all the features Apple Podcasts offers, including offline downloads and seamless device syncing.",
    url: "#",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
    color: "#872EC4",
    bgColor: "from-purple-600/20 to-purple-900/10",
    stats: "Coming Soon",
    status: "Launching Soon",
  },
];

export default function ChannelsPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E47D08]/3 rounded-full blur-[200px]" />
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
            <Radio size={14} />
            Channels
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Us on{" "}
            <span className="gradient-text">Your Platform</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Wherever you tune in, The Blac Moment is there. Choose your
            preferred platform and subscribe to never miss an episode.
          </p>
        </motion.div>

        {/* Platform Detail Cards */}
        <div className="space-y-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div
                className={`rounded-3xl bg-gradient-to-r ${platform.bgColor} border border-white/[0.06] p-8 md:p-10 hover:border-white/10 transition-all duration-500`}
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${platform.color}15` }}
                  >
                    <div style={{ color: platform.color }}>
                      {platform.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-2xl font-bold text-white">
                        {platform.name}
                      </h2>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: `${platform.color}15`,
                          color: platform.color,
                        }}
                      >
                        {platform.status}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-xl">
                      {platform.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span
                        className="flex items-center gap-1.5 font-medium"
                        style={{ color: platform.color }}
                      >
                        <Headphones size={14} />
                        {platform.stats}
                      </span>
                      <span className="text-white/20 flex items-center gap-1.5">
                        <Globe size={14} />
                        All Episodes
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shrink-0"
                    style={{
                      backgroundColor: platform.color,
                      color: "#fff",
                    }}
                  >
                    {platform.status === "Available Now" ? (
                      <>
                        Listen Now
                        <ExternalLink size={16} />
                      </>
                    ) : (
                      <>
                        Notify Me
                        <ExternalLink size={16} />
                      </>
                    )}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="rounded-3xl bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 max-w-2xl mx-auto">
            <Headphones size={32} className="text-[#E47D08] mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Prefer another platform?
            </h3>
            <p className="text-sm text-white/40 mb-6">
              We&apos;re always expanding. Let us know where you listen and
              we&apos;ll prioritize getting The Blac Moment on your platform of
              choice.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E47D08] hover:bg-[#FF8D28] text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Request a Platform
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
