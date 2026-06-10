"use client";

import React from "react";

const tickerItems = [
  "UNFILTERED CONVERSATIONS",
  "RAW PERSPECTIVES",
  "BOLD STORIES",
  "CULTURE & SOCIETY",
  "ACTIONIST",
  "THE GRIND",
  "THE BLAC MOMENT",
  "NEW EPISODES WEEKLY",
  "CORNELIUS KAYODE",
  "NO SCRIPTS",
  "NO FILTERS",
  "AUTHENTICITY",
];

export default function Ticker() {
  return (
    <div className="relative overflow-hidden py-4 bg-[#E47D08]">
      <div className="flex whitespace-nowrap marquee">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-4 text-sm font-bold text-white/90 uppercase tracking-wider"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
