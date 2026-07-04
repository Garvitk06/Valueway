"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Activity, Cpu, Factory, ShoppingBag, Package,
  Car, Plane, HardHat, BookOpen, Wrench, Truck, Megaphone, Flame, Radio, Palmtree,
} from "lucide-react";
import { Section } from "./ui/section";
import { Card } from "./ui/card";
import { ScrollButton } from "./ui/scroll-button";
import { Eyebrow, H2, Body } from "./ui/typography";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const industries = [
  { slug: "bfsi",         title: "BFSI",          description: "Fintech & Banking",        icon: Building2, stat: "100+ Placed CFOs",          roles: ["Investment Banker", "Compliance Head", "Fintech Lead"] },
  { slug: "healthcare",   title: "Healthcare",     description: "BioTech & Pharma",         icon: Activity,  stat: "40+ Hospital Systems",        roles: ["Medical Director", "Pharma Head", "Clinical Lead"] },
  { slug: "it-tech",      title: "IT & Tech",      description: "Software & SaaS",          icon: Cpu,       stat: "500+ Placed Engineers",       roles: ["AI/ML Specialist", "SaaS Architect", "VP of Engineering"] },
  { slug: "manufacturing",title: "Manufacturing",  description: "Industrial Tech",          icon: Factory,   stat: "20+ Smart Factories",         roles: ["Robotics Expert", "Plant Head", "Supply Chain Director"] },
  { slug: "retail",       title: "Retail",         description: "E-Commerce Systems",       icon: ShoppingBag,stat:"30+ E-Com Unicorns",          roles: ["E-Commerce VP", "Omni-Channel Lead", "Product Manager"] },
  { slug: "fmcg",         title: "FMCG",           description: "Consumer Goods",           icon: Package,   stat: "50+ Global Brands",           roles: ["Brand Director", "Sales Head", "Logistics Lead"] },
  { slug: "automobile",   title: "Automobile",     description: "Auto & EV Sector",         icon: Car,       stat: "80+ EV Placements",           roles: ["EV Engineer", "OEM Director", "Design Lead"] },
  { slug: "aviation",     title: "Aviation",       description: "Airlines & Aerospace",     icon: Plane,     stat: "45+ Senior Pilots Placed",    roles: ["Aviation VP", "MRO Lead", "Aerospace Engineer"] },
  { slug: "construction", title: "Construction",   description: "Real Estate & Infra",      icon: HardHat,   stat: "120+ Projects Staffed",       roles: ["Project Director", "Civil Lead", "Infrastructure VP"] },
  { slug: "education",    title: "Education",      description: "Ed-Tech & Training",       icon: BookOpen,  stat: "60+ Institutional Heads",     roles: ["Academic Dean", "Ed-Tech Lead", "L&D Director"] },
  { slug: "engineering",  title: "Engineering",    description: "Heavy Equipment",          icon: Wrench,    stat: "95+ Precision Placements",    roles: ["Operations Director", "Mechanical Engineer", "Plant Head"] },
  { slug: "logistics",    title: "Logistics",      description: "Supply Chain",             icon: Truck,     stat: "150+ Supply Chain Leaders",   roles: ["3PL Director", "Logistics Head", "Warehouse Lead"] },
  { slug: "media",        title: "Media",          description: "Ad & Entertainment",       icon: Megaphone, stat: "70+ Creative Directors",      roles: ["Creative VP", "PR Director", "Media Buying Head"] },
  { slug: "oil-gas",      title: "Oil & Gas",      description: "Energy & Resources",       icon: Flame,     stat: "40+ Energy Executives",       roles: ["Refinery Head", "Upstream Director", "Energy Consultant"] },
  { slug: "telecom",      title: "Telecom",        description: "Networks & 5G",            icon: Radio,     stat: "110+ 5G Placements",          roles: ["5G Rollout Lead", "Network Architect", "Operations Head"] },
  { slug: "travel",       title: "Travel",         description: "Hospitality & Tourism",    icon: Palmtree,  stat: "85+ Hospitality Leads",       roles: ["Hotel GM", "Travel Tech Architect", "Operations Director"] },
];

/* ─────────────────────────────────────────────
   Magnetic-tilt card wrapper
   Uses a ref + onPointerMove → direct style mutation
   (no React state, no layout reflow, GPU-only)
───────────────────────────────────────────── */
const MAX_TILT = 6; // degrees

function TiltCard({
  children,
  disabled,
  className,
}: {
  children: React.ReactNode;
  disabled: boolean;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (disabled || e.pointerType !== "mouse") return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5; // -0.5 → 0.5
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      const rotateY =  x * MAX_TILT * 2;
      const rotateX = -y * MAX_TILT * 2;
      el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    [disabled],
  );

  const handleLeave = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.4s ease";
    el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
    // Remove transition override after reset so hover feels snappy again
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 420);
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={className}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function Industries() {
  const [activeSlug, setActiveSlug]     = React.useState<string | null>(null);
  const [isMobile, setIsMobile]         = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const containerRef                    = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft]   = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);
  const [query, setQuery]               = React.useState("");

  /* Detect touch-primary device */
  React.useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* Detect prefers-reduced-motion */
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  /* Scroll button state */
  const updateScrollButtons = React.useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  }, []);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, [updateScrollButtons]);

  const scroll = (offset: number) =>
    containerRef.current?.scrollBy({ left: offset, behavior: "smooth" });

  /* ── Search filter ── */
  const matches = (industry: (typeof industries)[number]) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      industry.title.toLowerCase().includes(q) ||
      industry.description.toLowerCase().includes(q) ||
      industry.roles.some((r) => r.toLowerCase().includes(q))
    );
  };

  /* ── Framer Motion variants (respect reduced-motion) ── */
  const containerVariants = reducedMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
      };

  const itemVariants = reducedMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
        },
      };

  /* ── Card expand: spring config (instant if reduced-motion) ── */
  const expandSpring = reducedMotion
    ? { type: "tween" as const, duration: 0 }
    : { type: "spring" as const, stiffness: 300, damping: 30 };

  /* ── Mobile tap handler ── */
  const handleCardClick = (e: React.MouseEvent, slug: string) => {
    const isTouch = (e.nativeEvent as PointerEvent).pointerType === "touch" || isMobile;
    if (!isTouch) return;
    const isExploreButton = (e.target as HTMLElement).closest(".explore-btn") !== null;
    if (isExploreButton) return;
    e.preventDefault();
    setActiveSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <Section
      id="industries"
      padding="lg"
      direction="up"
      className="border-t border-zinc-900/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* ── Header + desktop arrow buttons ── */}
      <div className="mb-10 flex items-end justify-between">
        <div className="text-center md:text-left">
          <Eyebrow>Sectors</Eyebrow>
          <H2>Industries We Serve</H2>
          <Body className="mt-3 max-w-xl">
            Deep domain specialization. We source leadership and technical talent across every critical industry in India and beyond.
          </Body>
        </div>
        <div className="hidden md:flex items-center gap-2 pb-2 shrink-0">
          <ScrollButton direction="left"  onClick={() => scroll(-300)} disabled={!canScrollLeft}  />
          <ScrollButton direction="right" onClick={() => scroll(300)}  disabled={!canScrollRight} />
        </div>
      </div>

      {/* ── Live search filter ── */}
      <div className="mb-6 relative max-w-xs">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </span>
        <input
          id="industry-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search industries…"
          className="w-full rounded-full bg-zinc-900/70 border border-zinc-800 pl-9 pr-10 py-2 text-sm text-white placeholder-zinc-500 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute inset-y-0 right-3 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Scroll wrapper with edge gradients ── */}
      <div className="relative">
        {canScrollLeft && (
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        )}
        {canScrollRight && (
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
        )}

        {/* stagger-in container — plays once */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 sm:px-6 lg:px-8"
        >
          {industries.map((industry) => {
            const Icon    = industry.icon;
            const isActive = activeSlug === industry.slug;
            const isMatch  = matches(industry);

            return (
              <motion.div
                key={industry.slug}
                variants={itemVariants}
                animate={{
                  opacity: isMatch ? 1 : 0.15,
                  scale:   isMatch ? 1 : 0.93,
                  filter:  isMatch ? "grayscale(0%)" : "grayscale(80%)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="min-h-full snap-start"
                layout
              >
                {/*
                  TiltCard wraps the whole clickable area.
                  Tilt is disabled on mobile or when reducedMotion is on.
                */}
                <TiltCard disabled={isMobile || reducedMotion} className="h-full">
                  <Link
                    href={`/industries/${industry.slug}`}
                    onClick={(e) => handleCardClick(e, industry.slug)}
                    onPointerEnter={(e) => {
                      if (e.pointerType === "mouse") setActiveSlug(industry.slug);
                    }}
                    onPointerLeave={(e) => {
                      if (e.pointerType === "mouse") setActiveSlug(null);
                    }}
                    className="block min-h-full group outline-none"
                  >
                    <Card
                      layout
                      glow
                      whileHover={undefined}
                      animate={{
                        scale: isActive ? 1.02 : 1,
                        y:     isActive ? -6   : 0,
                      }}
                      transition={expandSpring}
                      className="min-h-full flex flex-col items-center justify-start pt-8 pb-6 px-5 text-center hover:border-accent/40 transition-colors duration-300"
                    >
                      {/* Icon */}
                      <motion.div
                        layout="position"
                        className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-neutral-400 transition-colors duration-300 group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>

                      {/* Title */}
                      <motion.h4
                        layout="position"
                        className="font-display text-sm font-semibold text-white tracking-wide group-hover:text-accent transition-colors duration-300 mb-1"
                      >
                        {industry.title}
                      </motion.h4>

                      {/* Subtitle */}
                      <motion.p
                        layout="position"
                        className="text-[11px] text-neutral-500 font-sans tracking-wide"
                      >
                        {industry.description}
                      </motion.p>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: reducedMotion ? 0 : -8 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: reducedMotion
                                ? { duration: 0 }
                                : {
                                    y:       { type: "spring", stiffness: 300, damping: 25 },
                                    opacity: { duration: 0.2, delay: 0.05 },
                                  },
                            }}
                            exit={{
                              opacity: 0,
                              y: reducedMotion ? 0 : -8,
                              transition: reducedMotion
                                ? { duration: 0 }
                                : { y: { duration: 0.15 }, opacity: { duration: 0.15 } },
                            }}
                            className="w-full flex flex-col items-center"
                          >
                            {/* Divider */}
                            <div className="w-12 h-px bg-zinc-800/80 my-3" />

                            {/* Stat */}
                            <div className="text-xs font-semibold text-accent mb-2">
                              {industry.stat}
                            </div>

                            {/* Role pills */}
                            <div className="text-[10px] mb-3 flex flex-wrap justify-center gap-1.5 px-2">
                              {industry.roles.map((role, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 rounded-full bg-accent/5 border border-accent/15 text-accent/90 font-sans font-medium"
                                >
                                  {role}
                                </span>
                              ))}
                            </div>

                            {/* Explore link */}
                            <span className="explore-btn inline-flex items-center text-xs font-semibold text-accent group-hover:text-white transition-colors duration-200 mt-1">
                              Explore →
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
