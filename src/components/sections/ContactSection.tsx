"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    becomeGuest: true,
    becomeSponsor: false,
    invite: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
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
        becomeGuest: true,
        becomeSponsor: false,
        invite: false,
      });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E47D08]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#E47D08]/3 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E47D08]/10 text-[#FF8D28] text-sm font-medium mb-6">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Let&apos;s{" "}
                <span className="gradient-text">Talk</span>
              </h2>
            </div>

            <p className="text-lg text-white/60 leading-relaxed">
              Got a topic suggestion? Want to sponsor an episode? Think you have
              what it takes to be a guest on The Blac Moment? Reach out.
            </p>

            {/* Quick contact info */}
            <div className="space-y-4">
              {[
                {
                  title: "Become a Guest",
                  desc: "Share your story with our audience",
                },
                {
                  title: "Sponsor an Episode",
                  desc: "Reach actionists who drive impact",
                },
                {
                  title: "Topic Suggestions",
                  desc: "Ideas that deserve a conversation",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#E47D08] shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl bg-white/[0.03] border border-white/[0.06] p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Thank You!
                  </h3>
                  <p className="text-white/50">
                    Your message has been received. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/70 text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-white/[0.04] border-white/10 text-white placeholder:text-white/25 focus:border-[#E47D08]/50 focus:ring-[#E47D08]/20 rounded-xl h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/70 text-sm">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-white/[0.04] border-white/10 text-white placeholder:text-white/25 focus:border-[#E47D08]/50 focus:ring-[#E47D08]/20 rounded-xl h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="description"
                      className="text-white/70 text-sm"
                    >
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about yourself or projects"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="bg-white/[0.04] border-white/10 text-white placeholder:text-white/25 focus:border-[#E47D08]/50 focus:ring-[#E47D08]/20 rounded-xl min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    {[
                      {
                        id: "guest",
                        label: "Become A Guest",
                        field: "becomeGuest" as const,
                      },
                      {
                        id: "sponsor",
                        label: "Become A Sponsor",
                        field: "becomeSponsor" as const,
                      },
                      {
                        id: "invite",
                        label: "Invite",
                        field: "invite" as const,
                      },
                    ].map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3"
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
                        <Label
                          htmlFor={item.id}
                          className="text-white/60 text-sm cursor-pointer"
                        >
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E47D08] hover:bg-[#FF8D28] text-white font-semibold h-12 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#E47D08]/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Submit
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
