"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebola F.",
    role: "Listener since Episode 1",
    text: "The Blac Moment is the realest podcast out there. Cornelius doesn't hold back, and that's exactly what we need. Every episode feels like a conversation with a friend who truly gets it.",
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Community Member",
    text: "I've never heard a podcast that so perfectly balances humor with depth. From Depression to Revolution literally changed how I see my own struggles. This is must-listen content.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Podcast Enthusiast",
    text: "Raw, unfiltered, and absolutely necessary. The Blac Moment cuts through the noise and delivers conversations that actually matter. Cornelius has created something truly special.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#E47D08]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-[#FF8D28]/5 rounded-full blur-[120px]" />
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
            What People Say
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Voices from the{" "}
            <span className="gradient-text">Community</span>
          </h2>
        </motion.div>

        {/* Testimonials — Horizontal scroll on mobile, grid on desktop */}
        <div className="md:hidden">
          <div className="mobile-scroll gap-4 pb-4 -mx-4 px-4">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="w-[280px] sm:w-[300px] shrink-0 rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5"
              >
                <Quote
                  size={24}
                  className="text-[#E47D08]/20 mb-3"
                />
                <p className="text-white/60 leading-relaxed mb-4 text-sm">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className="text-[#E47D08] fill-[#E47D08]"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E47D08] to-[#FF8D28] flex items-center justify-center text-white font-bold text-xs">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-xs">
                      {testimonial.name}
                    </p>
                    <p className="text-[10px] text-white/30">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl bg-white/[0.03] border border-white/[0.06] p-6 md:p-8 hover:border-[#E47D08]/20 transition-all duration-500 group"
            >
              <Quote
                size={32}
                className="text-[#E47D08]/20 mb-4 group-hover:text-[#E47D08]/40 transition-colors"
              />
              <p className="text-white/60 leading-relaxed mb-6 text-sm md:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-[#E47D08] fill-[#E47D08]"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E47D08] to-[#FF8D28] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/30">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
