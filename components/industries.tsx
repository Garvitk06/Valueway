"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Building2, Activity, Cpu, Factory, ShoppingBag, Package, 
  Car, Plane, HardHat, BookOpen, Wrench, Truck, Megaphone, Flame, Radio, Palmtree 
} from "lucide-react";
import { Section } from "./ui/section";
import { Card } from "./ui/card";
import { Eyebrow, H2, Body } from "./ui/typography";

const industries = [
  {
    slug: "bfsi",
    title: "BFSI",
    description: "Fintech & Banking",
    icon: Building2,
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "BioTech & Pharma",
    icon: Activity,
  },
  {
    slug: "it-tech",
    title: "IT & Tech",
    description: "Software & SaaS",
    icon: Cpu,
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Industrial Tech",
    icon: Factory,
  },
  {
    slug: "retail",
    title: "Retail",
    description: "E-Commerce Systems",
    icon: ShoppingBag,
  },
  {
    slug: "fmcg",
    title: "FMCG",
    description: "Consumer Goods",
    icon: Package,
  },
  {
    slug: "automobile",
    title: "Automobile",
    description: "Auto & EV Sector",
    icon: Car,
  },
  {
    slug: "aviation",
    title: "Aviation",
    description: "Airlines & Aerospace",
    icon: Plane,
  },
  {
    slug: "construction",
    title: "Construction",
    description: "Real Estate & Infra",
    icon: HardHat,
  },
  {
    slug: "education",
    title: "Education",
    description: "Ed-Tech & Training",
    icon: BookOpen,
  },
  {
    slug: "engineering",
    title: "Engineering",
    description: "Heavy Equipment",
    icon: Wrench,
  },
  {
    slug: "logistics",
    title: "Logistics",
    description: "Supply Chain",
    icon: Truck,
  },
  {
    slug: "media",
    title: "Media",
    description: "Ad & Entertainment",
    icon: Megaphone,
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    description: "Energy & Resources",
    icon: Flame,
  },
  {
    slug: "telecom",
    title: "Telecom",
    description: "Networks & 5G",
    icon: Radio,
  },
  {
    slug: "travel",
    title: "Travel",
    description: "Hospitality & Tourism",
    icon: Palmtree,
  },
];

export function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section padding="lg" direction="up" className="border-t border-zinc-900/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-14 text-center md:text-left">
        <Eyebrow>Sectors</Eyebrow>
        <H2>Industries We Serve</H2>
        <Body className="mt-3 max-w-xl">
          Deep domain specialization. We source leadership and technical talent across every critical industry in India and beyond.
        </Body>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5"
      >
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <motion.div key={industry.slug} variants={itemVariants} className="h-full">
              <Link href={`/industries/${industry.slug}`} className="block h-full group">
                <Card glow className="h-full flex flex-col items-center justify-center p-6 text-center hover:border-accent/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-neutral-400 transition-all duration-300 group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-sm font-semibold text-white tracking-wide group-hover:text-accent transition-colors duration-300 mb-1">
                    {industry.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-sans tracking-wide">
                    {industry.description}
                  </p>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
