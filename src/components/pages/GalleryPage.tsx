"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Play,
  Clock,
  Calendar,
  Tag,
  Grid3X3,
  List,
  SlidersHorizontal,
  X,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "All" | "Culture & Society" | "Actionist" | "The Grind" | "Inspirational" | "Lifestyle";
type SortOption = "newest" | "oldest" | "popular";
type ViewMode = "grid" | "list";

interface Episode {
  id: string;
  number: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  date: string;
  category: string;
  season: number;
  isFeatured: boolean;
}

// Fallback episodes if API fails
const fallbackEpisodes: Episode[] = [
  {
    id: "1",
    number: "EP 08",
    title: "Finding Light In Life's Darkest Moments",
    description:
      "A powerful conversation about resilience, hope, and the strength we find when we need it most. Cornelius sits down with guests who've walked through the valley and emerged with testimony.",
    youtubeId: "0oWAiwtskP0",
    duration: "45:23",
    date: "Mar 15, 2026",
    category: "Inspirational",
    season: 1,
    isFeatured: true,
  },
  {
    id: "2",
    number: "EP 02",
    title: "Empathy: The Journey Through Grief",
    description:
      "Navigating the complex landscape of loss and discovering how empathy connects us all. An emotional deep dive into what it means to truly walk in someone else's shoes.",
    youtubeId: "8UppcyyTPCI",
    duration: "38:17",
    date: "Feb 28, 2026",
    category: "Culture & Society",
    season: 1,
    isFeatured: false,
  },
  {
    id: "3",
    number: "EP 05",
    title: "From Depression to Revolution",
    description:
      "Transforming personal struggles into a catalyst for change and collective action. This episode explores how pain can become the fuel for revolutionary thinking and living.",
    youtubeId: "Ow_A1VUMz6E",
    duration: "52:08",
    date: "Feb 14, 2026",
    category: "The Grind",
    season: 1,
    isFeatured: true,
  },
  {
    id: "4",
    number: "EP 07",
    title: "The Art of Showing Up",
    description:
      "What does it really mean to be present? We explore the radical act of showing up for yourself and your community, even when it's hardest.",
    youtubeId: "",
    duration: "41:55",
    date: "Mar 8, 2026",
    category: "Actionist",
    season: 1,
    isFeatured: false,
  },
  {
    id: "5",
    number: "EP 06",
    title: "Unlearning the Hustle Myth",
    description:
      "We've been sold the idea that endless grinding equals success. Let's unpack why that's a trap and what a healthier relationship with ambition looks like.",
    youtubeId: "",
    duration: "47:32",
    date: "Mar 1, 2026",
    category: "The Grind",
    season: 1,
    isFeatured: false,
  },
  {
    id: "6",
    number: "EP 04",
    title: "Cultural Code-Switching",
    description:
      "The invisible dance many of us perform daily — adapting our language, behavior, and identity to fit different spaces. When is it survival and when is it self-betrayal?",
    youtubeId: "",
    duration: "39:45",
    date: "Feb 21, 2026",
    category: "Culture & Society",
    season: 1,
    isFeatured: false,
  },
  {
    id: "7",
    number: "EP 03",
    title: "Building While Broken",
    description:
      "Some of the most impactful movements were born from brokenness. We talk to actionists who built something meaningful in their hardest seasons.",
    youtubeId: "",
    duration: "50:11",
    date: "Feb 14, 2026",
    category: "Actionist",
    season: 1,
    isFeatured: false,
  },
  {
    id: "8",
    number: "EP 01",
    title: "Welcome to The Blac Moment",
    description:
      "The inaugural episode where Cornelius lays it all on the table — what this podcast is about, why it matters, and what you can expect from every conversation moving forward.",
    youtubeId: "",
    duration: "33:28",
    date: "Feb 7, 2026",
    category: "Lifestyle",
    season: 1,
    isFeatured: true,
  },
];

const categories: Category[] = [
  "All",
  "Culture & Society",
  "Actionist",
  "The Grind",
  "Inspirational",
  "Lifestyle",
];

// Date parsing helper
function parseDate(dateStr: string): Date {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date(2026, 0, 1) : d;
}

export default function GalleryPage() {
  const [episodes, setEpisodes] = useState<Episode[]>(fallbackEpisodes);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState<number>(0);

  // Fetch episodes from API
  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const res = await fetch("/api/episodes");
        const data = await res.json();
        if (data.episodes && data.episodes.length > 0) {
          setEpisodes(data.episodes);
        }
      } catch {
        // Use fallback episodes
        console.log("Using fallback episodes");
      } finally {
        setIsLoading(false);
      }
    }
    fetchEpisodes();
  }, []);

  const filteredEpisodes = useMemo(() => {
    let result = [...episodes];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((ep) => ep.category === selectedCategory);
    }

    // Filter by season
    if (selectedSeason > 0) {
      result = result.filter((ep) => ep.season === selectedSeason);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (ep) =>
          ep.title.toLowerCase().includes(q) ||
          ep.description.toLowerCase().includes(q) ||
          ep.category.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "newest") {
      result.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
    } else if (sortBy === "oldest") {
      result.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
    } else {
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [episodes, searchQuery, selectedCategory, sortBy, selectedSeason]);

  const featuredEpisodes = episodes.filter((ep) => ep.isFeatured);

  return (
    <div className="min-h-screen bg-black pt-20 sm:pt-24 pb-28 sm:pb-32">
      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-72 md:w-96 h-72 md:h-96 bg-[#E47D08]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-72 md:w-96 h-72 md:h-96 bg-[#FF8D28]/8 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Grid3X3 size={14} />
            Episode Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Every <span className="gradient-text">Moment</span> Matters
          </h1>
          <p className="text-base sm:text-lg text-white/50 max-w-2xl">
            Browse through our complete collection of conversations. Filter by
            category, search by keyword, or sort to find exactly what resonates
            with you.
          </p>
        </motion.div>

        {/* Loading state */}
        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 size={32} className="text-[#E47D08] animate-spin" />
          </div>
        ) : (
          <>
            {/* Featured Episodes Carousel — only show on default view */}
            {selectedCategory === "All" && !searchQuery && featuredEpisodes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-10 sm:mb-16"
              >
                <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E47D08] animate-pulse" />
                  Featured Episodes
                </h2>
                {/* Mobile: horizontal scroll */}
                <div className="md:hidden">
                  <div className="mobile-scroll gap-3 pb-2 -mx-4 px-4">
                    {featuredEpisodes.map((ep, i) => (
                      <motion.div
                        key={ep.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        className="w-[280px] sm:w-[300px] shrink-0 group relative rounded-2xl overflow-hidden cursor-pointer mobile-press"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E47D08]/80 via-[#FF8D28]/60 to-[#E47D08]/40" />
                        <div className="relative p-5 sm:p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
                              {ep.number}
                            </span>
                            <span className="text-white/60 text-[10px] sm:text-xs">
                              {ep.duration}
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 line-clamp-2">
                            {ep.title}
                          </h3>
                          <p className="text-xs text-white/70 line-clamp-2 mb-3">
                            {ep.description}
                          </p>
                          <div className="flex items-center gap-2 text-white/60 text-[10px]">
                            <Calendar size={10} />
                            {ep.date}
                            <span className="mx-1">·</span>
                            <Tag size={10} />
                            {ep.category}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Desktop: grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-4">
                  {featuredEpisodes.map((ep, i) => (
                    <motion.div
                      key={ep.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#E47D08]/80 via-[#FF8D28]/60 to-[#E47D08]/40" />
                      <div className="relative p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm">
                            {ep.number}
                          </span>
                          <span className="text-white/60 text-xs">
                            {ep.duration}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                          {ep.title}
                        </h3>
                        <p className="text-sm text-white/70 line-clamp-2 mb-4">
                          {ep.description}
                        </p>
                        <div className="flex items-center gap-2 text-white/60 text-xs">
                          <Calendar size={12} />
                          {ep.date}
                          <span className="mx-1">·</span>
                          <Tag size={12} />
                          {ep.category}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Search & Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 sm:mb-8 space-y-3 sm:space-y-4"
            >
              {/* Main Search Bar */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="relative flex-1">
                  <Search
                    size={16}
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-white/30"
                  />
                  <input
                    type="search"
                    placeholder="Search episodes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl pl-9 sm:pl-11 pr-4 py-3 sm:py-3.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#E47D08]/50 focus:ring-1 focus:ring-[#E47D08]/20 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors touch-target"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="flex gap-2">
                  {/* Sort Dropdown */}
                  <div className="relative flex-1 sm:flex-none">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      className="appearance-none w-full bg-white/[0.04] border border-white/[0.08] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 sm:py-3.5 pr-8 sm:pr-10 text-xs sm:text-sm text-white/70 focus:outline-none focus:border-[#E47D08]/50 cursor-pointer"
                    >
                      <option value="newest" className="bg-black">Newest</option>
                      <option value="oldest" className="bg-black">Oldest</option>
                      <option value="popular" className="bg-black">Popular</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
                    />
                  </div>

                  {/* View Toggle — desktop only */}
                  <div className="hidden sm:flex bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-3.5 transition-colors ${
                        viewMode === "grid"
                          ? "bg-[#E47D08]/20 text-[#FF8D28]"
                          : "text-white/30 hover:text-white/60"
                      }`}
                      aria-label="Grid view"
                    >
                      <Grid3X3 size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-3.5 transition-colors ${
                        viewMode === "list"
                          ? "bg-[#E47D08]/20 text-[#FF8D28]"
                          : "text-white/30 hover:text-white/60"
                      }`}
                      aria-label="List view"
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Pills — scrollable on mobile */}
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 sm:shrink ${
                      selectedCategory === cat
                        ? "bg-[#E47D08] text-white shadow-lg shadow-[#E47D08]/20"
                        : "bg-white/[0.04] text-white/50 hover:bg-white/[0.08] hover:text-white/70 border border-white/[0.06]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}

                {/* Season Filter */}
                <div className="flex gap-1.5 sm:gap-2 ml-1 sm:ml-2 shrink-0">
                  {[0, 1].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSeason(s)}
                      className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                        selectedSeason === s
                          ? "bg-white/10 text-white border border-white/20"
                          : "bg-transparent text-white/30 hover:text-white/50 border border-transparent"
                      }`}
                    >
                      {s === 0 ? "All" : `S${s}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results count */}
              <div className="flex items-center justify-between">
                <p className="text-xs sm:text-sm text-white/30">
                  Showing{" "}
                  <span className="text-[#FF8D28] font-medium">
                    {filteredEpisodes.length}
                  </span>{" "}
                  of {episodes.length}
                  {selectedCategory !== "All" && (
                    <span>
                      {" "}in <span className="text-white/50">{selectedCategory}</span>
                    </span>
                  )}
                </p>
                {(selectedCategory !== "All" ||
                  searchQuery ||
                  selectedSeason > 0) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                      setSelectedSeason(0);
                      setSortBy("newest");
                    }}
                    className="text-[10px] sm:text-xs text-[#E47D08] hover:text-[#FF8D28] transition-colors flex items-center gap-1 touch-target"
                  >
                    <X size={10} />
                    Clear
                  </button>
                )}
              </div>
            </motion.div>

            {/* Episodes — always grid on mobile for best touch experience */}
            <AnimatePresence mode="wait">
              {filteredEpisodes.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 sm:py-24"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.04] flex items-center justify-center mx-auto mb-4">
                    <Filter size={24} className="text-white/20" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white/40 mb-2">
                    No episodes found
                  </h3>
                  <p className="text-xs sm:text-sm text-white/20">
                    Try adjusting your filters or search query
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
                >
                  {filteredEpisodes.map((ep, i) => (
                    <EpisodeCard key={ep.id} episode={ep} index={i} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}

/* ─── Sub-components ──────────────────────────────────────────── */

function EpisodeCard({ episode, index }: { episode: Episode; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      className="group rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E47D08]/30 overflow-hidden transition-all duration-500 mobile-press"
    >
      {/* Thumbnail / Embed */}
      <div className="relative aspect-video bg-white/[0.03]">
        {episode.youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${episode.youtubeId}?rel=0`}
            title={episode.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#E47D08]/10 to-[#FF8D28]/5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E47D08]/20 flex items-center justify-center group-hover:bg-[#E47D08]/30 transition-colors">
              <Play
                size={16}
                className="text-[#FF8D28] ml-0.5 sm:w-5 sm:h-5"
                fill="currentColor"
              />
            </div>
          </div>
        )}
        {/* Featured badge */}
        {episode.isFeatured && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 sm:px-2 py-0.5 rounded-full bg-[#E47D08] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-[8px] sm:text-[10px] font-semibold">
            {episode.number}
          </span>
          <span className="text-[8px] sm:text-[10px] text-white/25 flex items-center gap-0.5">
            <Clock size={8} />
            {episode.duration}
          </span>
        </div>
        <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF8D28] transition-colors line-clamp-2 leading-snug">
          {episode.title}
        </h3>
        <p className="text-[10px] sm:text-xs text-white/35 line-clamp-2 leading-relaxed hidden sm:block">
          {episode.description}
        </p>
        <div className="flex items-center justify-between pt-0.5 sm:pt-1">
          <span className="text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-white/[0.04] text-white/30">
            {episode.category}
          </span>
          <span className="text-[8px] sm:text-[10px] text-white/20">{episode.date}</span>
        </div>
      </div>
    </motion.div>
  );
}
