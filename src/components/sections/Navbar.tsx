"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Stream Now", href: "/stream" },
  { label: "Gallery", href: "/gallery" },
  { label: "The Host", href: "/host" },
  { label: "Channels", href: "/channels" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-2 shadow-lg shadow-black/20"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="The Blac Moment Logo"
              className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const isCTA = link.label === "Contact Us";

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isCTA
                      ? "bg-[#E47D08] text-white hover:bg-[#FF8D28]"
                      : active
                      ? "text-[#FF8D28] bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {active && !isCTA && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E47D08]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10 touch-target"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu — Full screen overlay for better mobile UX */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              style={{ top: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-0 md:hidden glass border-b border-white/5 mobile-nav-safe"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileOpen(false)}>
                  <img
                    src="/images/logo.png"
                    alt="The Blac Moment"
                    className="h-8 w-auto"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 touch-target"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </Button>
              </div>

              {/* Nav Links */}
              <div className="px-4 pb-6 pt-2 space-y-1">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  const isCTA = link.label === "Contact Us";

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`flex items-center w-full text-left px-4 py-3.5 text-base font-medium rounded-xl transition-colors touch-target no-select ${
                          isCTA
                            ? "bg-[#E47D08] text-white hover:bg-[#FF8D28] text-center justify-center mt-3"
                            : active
                            ? "text-[#FF8D28] bg-white/5"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                        {active && !isCTA && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#E47D08]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
