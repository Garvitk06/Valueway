"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Clock3, Network, ShieldCheck, Quote } from "lucide-react";
import { Section } from "./ui/section";
import { Card } from "./ui/card";
import { Eyebrow, H2, Body } from "./ui/typography";

const pillars = [
  {
    icon: Network,
    title: "Referral-First Network",
    description:
      "We don't rely solely on job portals. Our referral-driven pipeline delivers an above-average selection ratio and significantly lower dropout rates.",
  },
  {
    icon: Clock3,
    title: "Industry-Best TAT",
    description:
      "Our response time to source any profile is faster than the competition — most mandates are fulfilled within 14 business days.",
  },
  {
    icon: Database,
    title: "In-House Database",
    description:
      "Our ever-growing proprietary database of pre-audited candidates across verticals means you never start from zero.",
  },
  {
    icon: ShieldCheck,
    title: "Ethics & Compliance",
    description:
      "Ethics and Compliance are not a policy — they are the way we work. We follow all regulatory guidelines and never misrepresent.",
  },
];

export function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <Section
      padding="lg"
      direction="up"
      className="border-t border-zinc-900/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      id="why"
    >
      <div className="mb-14 text-center md:text-left">
        <Eyebrow>Why Valueway</Eyebrow>
        <H2>The Valueway Difference</H2>
        <Body className="mt-3 max-w-2xl">
          We act as a preferred recruitment partner for Indian and global companies operating in India —
          driven by references, speed, and an unwavering commitment to ethics.
        </Body>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <motion.div key={pillar.title} variants={itemVariants}>
              <Card
                glow
                className="h-full flex flex-col p-6 hover:border-accent/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center mb-5 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-background group-hover:border-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Values strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md p-8 sm:p-10 overflow-hidden"
      >
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/4 blur-3xl rounded-full pointer-events-none" />

        <Quote className="w-8 h-8 text-accent/30 mb-4" />

        <p className="text-lg sm:text-xl font-display font-medium text-white leading-relaxed max-w-3xl">
          &ldquo;Domain specialist, proactive and focused teams spread across verticals ensure we
          find the best talent through customised recruitment solutions based on your professional
          and cultural fit requirements.&rdquo;
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-8 sm:gap-16">
          {[
            { label: "Transparency", detail: "We do not misrepresent — ever. This core value differentiates us from every competitor." },
            { label: "Partnership", detail: "We understand your need and that drives us. Valued, client-oriented solutions build lasting relationships." },
            { label: "Confidentiality", detail: "We value trust and keep every client's information strictly confidential." },
          ].map((val) => (
            <div key={val.label} className="flex-1">
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">
                {val.label}
              </span>
              <p className="text-sm text-neutral-400 leading-relaxed">{val.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
