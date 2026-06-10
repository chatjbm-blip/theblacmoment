"use client";

import React from "react";
import { motion } from "framer-motion";
import { Headphones, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SubscribeBanner() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] md:min-h-[550px]">
          {/* Background Image with Gradient */}
          <div className="absolute inset-0">
            <img
              src="/images/banner-image.jpg"
              alt="The Blac Moment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full min-h-[500px] md:min-h-[550px] p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#E47D08]/20">
                  <Headphones size={20} className="text-[#FF8D28]" />
                </div>
                <span className="text-[#FF8D28] text-sm font-semibold uppercase tracking-wider">
                  Never Miss a Moment
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                New episodes drop every{" "}
                <span className="gradient-text">weekend.</span>
              </h2>

              <p className="text-lg text-white/60">
                Subscribe now so you don&apos;t get left behind. Join the
                community of actionists who refuse to miss a beat.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E47D08] hover:bg-[#FF8D28] text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[#E47D08]/30"
                >
                  <Bell size={20} />
                  Subscribe Now
                </a>
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all duration-300"
                >
                  Listen Free
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Floating waveform decoration */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 right-8 hidden md:flex items-end gap-1"
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: [
                      Math.random() * 20 + 10,
                      Math.random() * 50 + 20,
                      Math.random() * 20 + 10,
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 bg-[#E47D08]/60 rounded-full"
                  style={{ height: 20 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
