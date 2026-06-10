"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Loader2,
  Mail,
  User,
  MessageSquare,
  Mic2,
  Handshake,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactOptions = [
  {
    icon: Mic2,
    title: "Become a Guest",
    description:
      "Share your story with our audience. We're always looking for actionists with bold perspectives and authentic voices to join the conversation.",
    color: "#E47D08",
  },
  {
    icon: Handshake,
    title: "Sponsor an Episode",
    description:
      "Reach a community of engaged listeners who value authenticity. Partner with The Blac Moment for meaningful brand integration.",
    color: "#FF8D28",
  },
  {
    icon: MessageSquare,
    title: "Topic Suggestions",
    description:
      "Have a conversation that needs to happen? Suggest topics, guests, or stories that deserve to be heard on The Blac Moment.",
    color: "#FFB347",
  },
  {
    icon: Bell,
    title: "General Inquiry",
    description:
      "Questions about the podcast, collaboration ideas, press inquiries, or anything else — we'd love to hear from you.",
    color: "#D68D06",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    becomeGuest: false,
    becomeSponsor: false,
    invite: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        description: "",
        becomeGuest: false,
        becomeSponsor: false,
        invite: false,
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-32">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E47D08]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#E47D08]/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-sm font-medium mb-6">
            <Mail size={14} />
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Got a topic suggestion? Want to sponsor an episode? Think you have
            what it takes to be a guest on The Blac Moment? Reach out.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {contactOptions.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-all duration-300 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: `${opt.color}15` }}
              >
                <opt.icon size={20} style={{ color: opt.color }} />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1.5">
                {opt.title}
              </h3>
              <p className="text-xs text-white/35 leading-relaxed">
                {opt.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-white/[0.02] border border-white/[0.06] p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You!
                  </h3>
                  <p className="text-white/50 max-w-sm">
                    Your message has been received. We&apos;ll get back to you
                    as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-name"
                        className="text-white/60 text-sm flex items-center gap-1.5"
                      >
                        <User size={12} />
                        Name
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-[#E47D08]/50 focus:ring-[#E47D08]/20 rounded-xl h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact-email"
                        className="text-white/60 text-sm flex items-center gap-1.5"
                      >
                        <Mail size={12} />
                        Email Address
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-[#E47D08]/50 focus:ring-[#E47D08]/20 rounded-xl h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-desc"
                      className="text-white/60 text-sm flex items-center gap-1.5"
                    >
                      <MessageSquare size={12} />
                      Description
                    </Label>
                    <Textarea
                      id="contact-desc"
                      placeholder="Tell us about yourself or projects"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-[#E47D08]/50 focus:ring-[#E47D08]/20 rounded-xl min-h-[140px] resize-none"
                      required
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      {
                        id: "c-guest",
                        label: "Become A Guest",
                        field: "becomeGuest" as const,
                        icon: Mic2,
                      },
                      {
                        id: "c-sponsor",
                        label: "Become A Sponsor",
                        field: "becomeSponsor" as const,
                        icon: Handshake,
                      },
                      {
                        id: "c-invite",
                        label: "Invite",
                        field: "invite" as const,
                        icon: Bell,
                      },
                    ].map((item) => (
                      <label
                        key={item.id}
                        htmlFor={item.id}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-300 ${
                          formData[item.field]
                            ? "bg-[#E47D08]/10 border-[#E47D08]/30"
                            : "bg-white/[0.02] border-white/[0.06] hover:border-white/10"
                        }`}
                      >
                        <Checkbox
                          id={item.id}
                          checked={formData[item.field]}
                          onCheckedChange={(checked) =>
                            setFormData({
                              ...formData,
                              [item.field]: checked === true,
                            })
                          }
                          className="border-white/20 data-[state=checked]:bg-[#E47D08] data-[state=checked]:border-[#E47D08]"
                        />
                        <span
                          className={`text-sm ${
                            formData[item.field]
                              ? "text-[#FF8D28]"
                              : "text-white/50"
                          }`}
                        >
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E47D08] hover:bg-[#FF8D28] text-white font-semibold h-12 rounded-xl transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-[#E47D08]/20 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* FAQ-style info */}
            <div className="rounded-3xl bg-white/[0.02] border border-white/[0.06] p-6 space-y-5">
              <h3 className="font-bold text-white text-lg">
                Frequently Asked
              </h3>
              {[
                {
                  q: "How do I become a guest?",
                  a: "Fill out the form with 'Become A Guest' checked and tell us about yourself and what you'd bring to the conversation.",
                },
                {
                  q: "What does sponsorship include?",
                  a: "Sponsorship includes pre-roll mentions, mid-roll integration, and social media promotion. We believe in authentic partnerships.",
                },
                {
                  q: "How long until I hear back?",
                  a: "We typically respond within 48 hours. For urgent inquiries, please mark them in your description.",
                },
                {
                  q: "Can I suggest a topic anonymously?",
                  a: "Absolutely! You can submit topic suggestions without providing your real name — just use a valid email so we can follow up.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-1.5">
                  <p className="text-sm font-semibold text-white/80">
                    {item.q}
                  </p>
                  <p className="text-xs text-white/35 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="rounded-3xl bg-gradient-to-br from-[#E47D08]/10 to-[#FF8D28]/5 border border-[#E47D08]/20 p-6">
              <h3 className="font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-sm text-white/40 mb-4">
                For press inquiries and partnerships:
              </p>
              <a
                href="mailto:hello@theblacmoment.com"
                className="text-[#FF8D28] font-medium hover:underline text-sm"
              >
                hello@theblacmoment.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
