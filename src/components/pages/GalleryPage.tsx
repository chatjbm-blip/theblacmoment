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
    <div className="min-h-screen bg-black pt-24 pb-32">
      {/* Background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E47D08]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF8D28]/8 rounded-full blur-[150px]" />
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
            <Grid3X3 size={14} />
            Episode Gallery
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Every <span className="gradient-text">Moment</span> Matters
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
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
            {/* Featured Episodes Carousel */}
            {selectedCategory === "All" && !searchQuery && featuredEpisodes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-16"
              >
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#E47D08] animate-pulse" />
                  Featured Episodes
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
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
              className="mb-8 space-y-4"
            >
              {/* Main Search Bar */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  />
                  <input
                    type="text"
                    placeholder="Search episodes by title, topic, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder:text-white/25 focus:outline-none focus:border-[#E47D08]/50 focus:ring-1 focus:ring-[#E47D08]/20 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="flex gap-2">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortOption)}
                      className="appearance-none bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-3.5 pr-10 text-sm text-white/70 focus:outline-none focus:border-[#E47D08]/50 cursor-pointer"
                    >
                      <option value="newest" className="bg-black">Newest First</option>
                      <option value="oldest" className="bg-black">Oldest First</option>
                      <option value="popular" className="bg-black">Most Popular</option>
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
                    />
                  </div>

                  {/* View Toggle */}
                  <div className="flex bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden">
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

                  {/* Filter Toggle (Mobile) */}
                  <Button
                    variant="ghost"
                    onClick={() => setShowFilters(!showFilters)}
                    className="sm:hidden bg-white/[0.04] border border-white/[0.08] rounded-2xl text-white/50 hover:text-white/80 hover:bg-white/[0.06]"
                  >
                    <SlidersHorizontal size={18} />
                  </Button>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-[#E47D08] text-white shadow-lg shadow-[#E47D08]/20"
                        : "bg-white/[0.04] text-white/50 hover:bg-white/[0.08] hover:text-white/70 border border-white/[0.06]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}

                {/* Season Filter */}
                <div className="flex gap-2 ml-2">
                  {[0, 1].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSeason(s)}
                      className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                        selectedSeason === s
                          ? "bg-white/10 text-white border border-white/20"
                          : "bg-transparent text-white/30 hover:text-white/50 border border-transparent"
                      }`}
                    >
                      {s === 0 ? "All Seasons" : `S${s}`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results count */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/30">
                  Showing{" "}
                  <span className="text-[#FF8D28] font-medium">
                    {filteredEpisodes.length}
                  </span>{" "}
                  of {episodes.length} episodes
                  {selectedCategory !== "All" && (
                    <span>
                      {" "}
                      in <span className="text-white/50">{selectedCategory}</span>
                    </span>
                  )}
                  {searchQuery && (
                    <span>
                      {" "}
                      matching &ldquo;
                      <span className="text-white/50">{searchQuery}</span>&rdquo;
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
                    className="text-xs text-[#E47D08] hover:text-[#FF8D28] transition-colors flex items-center gap-1"
                  >
                    <X size={12} />
                    Clear filters
                  </button>
                )}
              </div>
            </motion.div>

            {/* Episodes Grid/List */}
            <AnimatePresence mode="wait">
              {filteredEpisodes.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-24"
                >
                  <div className="w-16 h-16 rounded-full bg-white/[0.04] flex items-center justify-center mx-auto mb-4">
                    <Filter size={24} className="text-white/20" />
                  </div>
                  <h3 className="text-xl font-semibold text-white/40 mb-2">
                    No episodes found
                  </h3>
                  <p className="text-sm text-white/20">
                    Try adjusting your filters or search query
                  </p>
                </motion.div>
              ) : viewMode === "grid" ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                  {filteredEpisodes.map((ep, i) => (
                    <EpisodeCard key={ep.id} episode={ep} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  {filteredEpisodes.map((ep, i) => (
                    <EpisodeListItem key={ep.id} episode={ep} index={i} />
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
      className="group rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E47D08]/30 overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-[#E47D08]/5"
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
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#E47D08]/10 to-[#FF8D28]/5">
            <div className="w-12 h-12 rounded-full bg-[#E47D08]/20 flex items-center justify-center group-hover:bg-[#E47D08]/30 transition-colors">
              <Play
                size={20}
                className="text-[#FF8D28] ml-0.5"
                fill="currentColor"
              />
            </div>
          </div>
        )}
        {/* Featured badge */}
        {episode.isFeatured && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#E47D08] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-[10px] font-semibold">
            {episode.number}
          </span>
          <span className="text-[10px] text-white/25 flex items-center gap-1">
            <Clock size={10} />
            {episode.duration}
          </span>
        </div>
        <h3 className="text-sm font-bold text-white group-hover:text-[#FF8D28] transition-colors line-clamp-2 leading-snug">
          {episode.title}
        </h3>
        <p className="text-xs text-white/35 line-clamp-2 leading-relaxed">
          {episode.description}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-white/30">
            {episode.category}
          </span>
          <span className="text-[10px] text-white/20">{episode.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

function EpisodeListItem({
  episode,
  index,
}: {
  episode: Episode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      className="group flex items-center gap-4 md:gap-6 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E47D08]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#E47D08]/5 cursor-pointer"
    >
      {/* Play button */}
      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#E47D08] to-[#FF8D28] flex items-center justify-center shadow-lg shadow-[#E47D08]/20 group-hover:shadow-[#E47D08]/40 transition-all group-hover:scale-110">
        <Play size={20} className="text-white ml-0.5" fill="white" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-[10px] font-semibold">
            {episode.number}
          </span>
          <span className="text-[10px] text-white/25 hidden sm:inline">
            Season {episode.season}
          </span>
          {episode.isFeatured && (
            <span className="px-1.5 py-0.5 rounded-full bg-[#E47D08] text-white text-[8px] font-bold uppercase">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-[#FF8D28] transition-colors truncate">
          {episode.title}
        </h3>
        <p className="text-xs text-white/30 line-clamp-1 hidden md:block mt-0.5">
          {episode.description}
        </p>
      </div>

      {/* Meta */}
      <div className="shrink-0 text-right hidden sm:block">
        <p className="text-xs text-white/30 mb-1 flex items-center justify-end gap-1">
          <Clock size={10} />
          {episode.duration}
        </p>
        <p className="text-[10px] text-white/20 flex items-center justify-end gap-1">
          <Tag size={10} />
          {episode.category}
        </p>
      </div>
    </motion.div>
  );
}
