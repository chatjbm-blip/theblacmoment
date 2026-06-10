"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function HostSection() {
  return (
    <section id="host" className="relative py-16 sm:py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[#E47D08]/5 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-xs sm:text-sm font-medium">
              The Host
            </span>

            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                The Voice Behind{" "}
                <span className="gradient-text">the Mic</span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/40 font-light italic">
                You know him as The Blac Shrec.
              </p>
            </div>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed">
              Cornelius Kayode is a creator, a visionary, and a voice that
              refuses to be put in a box. With a unique blend of humor and
              insight, Cornelius has built a platform on being unapologetically
              himself. On The Blac Moment, he steps out from behind the keyboard
              and up to the microphone to connect with you on a deeper level.{" "}
              <span className="text-white font-medium">
                No scripts. No filters. Just Cornelius.
              </span>
            </p>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.youtube.com/@TheBlacMoment"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-[#E47D08]/30 hover:bg-[#E47D08]/10 transition-all duration-300 group touch-target mobile-press"
                aria-label="YouTube"
              >
                <ExternalLink
                  size={20}
                  className="text-white/40 group-hover:text-[#FF8D28] transition-colors"
                />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-[#E47D08]/30 hover:bg-[#E47D08]/10 transition-all duration-300 group touch-target mobile-press"
                aria-label="Instagram"
              >
                <Instagram
                  size={20}
                  className="text-white/40 group-hover:text-[#FF8D28] transition-colors"
                />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-[#E47D08]/30 hover:bg-[#E47D08]/10 transition-all duration-300 group touch-target mobile-press"
                aria-label="Twitter"
              >
                <Twitter
                  size={20}
                  className="text-white/40 group-hover:text-[#FF8D28] transition-colors"
                />
              </a>
            </div>

            <Link
              href="/host"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-[#E47D08] hover:bg-[#FF8D28] text-white text-sm sm:text-base font-semibold transition-all duration-300 mobile-press shadow-lg shadow-[#E47D08]/20"
            >
              Read More
            </Link>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-[320px] sm:max-w-[400px]">
              {/* Decorative ring — simplified on mobile */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-[1.5rem] sm:rounded-[2rem] border-2 border-[#E47D08]/20" />
              <div className="absolute -inset-6 sm:-inset-8 rounded-[2rem] sm:rounded-[2.5rem] border border-[#E47D08]/10 hidden sm:block" />

              {/* Image */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#E47D08]/10">
                <img
                  src="/images/host-portrait.jpeg"
                  alt="Cornelius Kayode - Host of The Blac Moment"
                  className="w-full h-[350px] sm:h-[400px] md:h-[550px] object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Name card overlay */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl sm:rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3 text-center min-w-[180px] sm:min-w-[200px]"
              >
                <p className="font-bold text-white text-sm sm:text-base">Cornelius Kayode</p>
                <p className="text-[10px] sm:text-xs text-[#FF8D28]">Host & Creator</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
