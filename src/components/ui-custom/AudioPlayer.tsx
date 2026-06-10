"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  ListMusic,
  X,
} from "lucide-react";
import Link from "next/link";

interface Track {
  title: string;
  episode: string;
  duration: string;
  youtubeId: string;
}

const tracks: Track[] = [
  {
    title: "Finding Light In Life's Darkest Moments",
    episode: "EP 08",
    duration: "45:23",
    youtubeId: "0oWAiwtskP0",
  },
  {
    title: "Empathy: The Journey Through Grief",
    episode: "EP 02",
    duration: "38:17",
    youtubeId: "8UppcyyTPCI",
  },
  {
    title: "From Depression to Revolution",
    episode: "EP 05",
    duration: "52:08",
    youtubeId: "Ow_A1VUMz6E",
  },
];

export default function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.3;
        });
      }, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setProgress(0);
  };
  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
  };

  const track = tracks[currentTrack];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-40 audio-player-bar"
    >
      <div className="glass border-t border-white/[0.06]">
        {/* Mobile: Expanded Track List as full sheet */}
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-white/[0.06] max-h-60 sm:max-h-48 overflow-y-auto"
          >
            <div className="flex items-center justify-between px-4 py-2 md:hidden">
              <span className="text-xs text-white/40 font-medium">Up Next</span>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 text-white/40 hover:text-white transition-colors touch-target"
                aria-label="Close track list"
              >
                <X size={16} />
              </button>
            </div>
            {tracks.map((t, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentTrack(i);
                  setProgress(0);
                  setIsExpanded(false);
                }}
                className={`w-full flex items-center justify-between px-4 sm:px-6 py-3 text-sm hover:bg-white/[0.03] transition-colors mobile-press touch-target ${
                  i === currentTrack
                    ? "text-[#FF8D28] bg-[#E47D08]/5"
                    : "text-white/60"
                }`}
              >
                <span className="truncate mr-3">
                  <span className="text-white/30 mr-2 sm:mr-3">{t.episode}</span>
                  <span className="text-xs sm:text-sm">{t.title}</span>
                </span>
                <span className="text-white/30 text-xs shrink-0">{t.duration}</span>
              </button>
            ))}
          </motion.div>
        )}

        {/* Mobile progress bar (thin, at the very top of the player) */}
        <div className="md:hidden h-0.5 bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#E47D08] to-[#FF8D28]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Player Controls */}
        <div className="px-3 sm:px-4 py-2.5 sm:py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4">
            {/* Track Info */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
              <Link
                href="/stream"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#E47D08] to-[#FF8D28] flex items-center justify-center shrink-0 mobile-press"
                aria-label="Go to stream page"
              >
                <Play size={14} className="text-white ml-0.5" fill="white" />
              </Link>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-medium text-white truncate">
                  {track.title}
                </p>
                <p className="text-[10px] sm:text-xs text-white/30">
                  {track.episode} · {track.duration}
                </p>
              </div>
            </div>

            {/* Mobile: Compact controls */}
            <div className="flex items-center gap-1 sm:gap-2 md:hidden">
              <button
                onClick={prevTrack}
                className="p-2 text-white/40 hover:text-white transition-colors touch-target"
                aria-label="Previous track"
              >
                <SkipBack size={16} />
              </button>
              <button
                onClick={togglePlay}
                className="p-2.5 rounded-full bg-[#E47D08] hover:bg-[#FF8D28] text-white transition-all duration-300 mobile-press touch-target"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={16} />
                ) : (
                  <Play size={16} className="ml-0.5" />
                )}
              </button>
              <button
                onClick={nextTrack}
                className="p-2 text-white/40 hover:text-white transition-colors touch-target"
                aria-label="Next track"
              >
                <SkipForward size={16} />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 text-white/40 hover:text-white transition-colors touch-target"
                aria-label={isExpanded ? "Close track list" : "Open track list"}
              >
                <ListMusic size={16} />
              </button>
            </div>

            {/* Desktop: Full controls */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={prevTrack}
                className="p-2 text-white/40 hover:text-white transition-colors"
                aria-label="Previous track"
              >
                <SkipBack size={16} />
              </button>
              <button
                onClick={togglePlay}
                className="p-2.5 rounded-full bg-[#E47D08] hover:bg-[#FF8D28] text-white transition-all duration-300 hover:scale-110"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={16} />
                ) : (
                  <Play size={16} className="ml-0.5" />
                )}
              </button>
              <button
                onClick={nextTrack}
                className="p-2 text-white/40 hover:text-white transition-colors"
                aria-label="Next track"
              >
                <SkipForward size={16} />
              </button>
            </div>

            {/* Desktop: Progress Bar */}
            <div className="hidden md:flex items-center gap-3 flex-1">
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#E47D08] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-white/30 tabular-nums w-10 text-right">
                {Math.floor(progress * 0.45)}:{String(Math.floor((progress * 27) % 60)).padStart(2, "0")}
              </span>
            </div>

            {/* Desktop: Extra Controls */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 text-white/40 hover:text-white transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 text-white/40 hover:text-white transition-colors"
                aria-label="Expand track list"
              >
                <ListMusic size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
