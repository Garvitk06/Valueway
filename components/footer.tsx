"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

interface NewsletterInput {
  email: string;
}

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);



const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: LinkedinIcon, href: "https://linkedin.com/in/valueway-human-resorce-consultants-99629a143", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com/@valuewayHRC", label: "Twitter" },
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterInput>();

  const onSubmit = async (data: NewsletterInput) => {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Newsletter subscription:", data.email);
    setSubscribed(true);
    reset();
  };

  return (
    <footer className="w-full bg-[#080809] border-t border-zinc-900 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xs">
              {"Transparent Partnerships. Absolute Confidentiality. Executive Precision. Sourcing the high-performance talent networks of tomorrow."}
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-neutral-400 hover:text-white border border-zinc-900 hover:border-zinc-800 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-250"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 text-sm text-neutral-450 text-neutral-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>DLF Cyber City, Building 10, Tower B, Gurugram, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+919728100300" className="hover:text-white transition-colors">
                  +91 97281 00300
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@valuewayhrc.com" className="hover:text-white transition-colors">
                  info@valuewayhrc.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
              Subscribe to Insights
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Stay ahead of talent trends and organizational blueprints.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col space-y-2"
                >
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full px-4 py-3 bg-zinc-950/60 border rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors disabled:opacity-50",
                        errors.email ? "border-red-500/80" : "border-zinc-800 hover:border-zinc-700"
                      )}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute right-2 top-2 p-1.5 rounded bg-accent/10 text-accent hover:bg-accent hover:text-background transition-colors disabled:opacity-50"
                      aria-label="Subscribe"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  {errors.email && (
                    <span className="text-xs text-red-400/90 font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center space-x-2 text-accent bg-accent/5 border border-accent/20 rounded-lg p-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">Subscription activated!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-zinc-900/60 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Valueway HRC. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-neutral-350 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-neutral-350 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
