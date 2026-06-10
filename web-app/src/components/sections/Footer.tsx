"use client";

import React from "react";
import { motion } from "framer-motion";
import { Youtube, Instagram, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Stream Now", href: "#stream" },
  { label: "The Host", href: "#host" },
  { label: "Channels", href: "#channels" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  {
    icon: Youtube,
    href: "https://www.youtube.com/@TheBlacMoment",
    label: "YouTube",
  },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img
              src="/images/logo.png"
              alt="The Blac Moment Logo"
              className="h-10 w-auto"
            />
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Unfiltered conversations. Raw perspectives. Bold stories from
              actionists around the world.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[#E47D08]/30 hover:bg-[#E47D08]/10 transition-all duration-300 group"
                >
                  <social.icon
                    size={16}
                    className="text-white/40 group-hover:text-[#FF8D28] transition-colors"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-white/40 hover:text-[#FF8D28] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-white/40">
              Subscribe to get notified about new episodes and exclusive
              content.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#E47D08]/50"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-[#E47D08] hover:bg-[#FF8D28] text-white text-sm font-semibold transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            Copyright &copy; 2026. All Rights Reserved The Blac Moment
          </p>
          <p className="text-xs text-white/20">
            Made with passion for authentic conversations
          </p>
        </div>
      </div>
    </footer>
  );
}
