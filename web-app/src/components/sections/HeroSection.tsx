"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Mic2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageStore } from "@/store/page-store";

export default function HeroSection() {
  const { setPage } = usePageStore();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E47D08]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF8D28]/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E47D08]/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E47D08]/10 border border-[#E47D08]/20 text-[#FF8D28] text-sm font-medium">
                <Mic2 size={14} />
                New Episode Every Weekend
              </span>
            </motion.div>

            {/* Headings */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              >
                Unfiltered{" "}
                <span className="gradient-text">conversations.</span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              >
                Raw perspectives.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              >
                <span className="gradient-text">Bold Stories</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed"
            >
              Stories you actually want to hear from actionists around the world
              that drives impact. Hosted by the man behind The Blac Shrec,{" "}
              <span className="text-[#FF8D28] font-medium">
                Cornelius Kayode
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => setPage("gallery")}
                className="bg-[#E47D08] hover:bg-[#FF8D28] text-white px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-[#E47D08]/25 transition-all duration-300 hover:shadow-[#E47D08]/40 hover:scale-105"
              >
                <Play size={18} className="mr-2" />
                Listen To New Episodes
              </Button>
              <Button
                onClick={() => setPage("contact")}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-8 py-6 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Be A Guest Now
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "8+", label: "Episodes" },
                { value: "234+", label: "Subscribers" },
                { value: "3", label: "Seasons" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Decorative grid cells */}
            <div className="grid grid-cols-2 gap-4 p-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src="/images/collage-1.jpeg"
                  alt="Podcast session"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl mt-8"
              >
                <img
                  src="/images/collage-2.jpeg"
                  alt="Podcast session"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl -mt-8"
              >
                <img
                  src="/images/collage-3.jpeg"
                  alt="Podcast session"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl bg-gradient-to-br from-[#E47D08] to-[#FF8D28] flex items-center justify-center shadow-2xl"
              >
                <div className="text-center p-4">
                  <Play
                    size={48}
                    className="text-white mx-auto mb-2"
                    fill="white"
                  />
                  <p className="text-white font-semibold text-sm">
                    Stream Now
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass rounded-2xl px-5 py-3 flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-white/80">
                Live Now
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#E47D08] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
