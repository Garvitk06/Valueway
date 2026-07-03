"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Target, Compass, Award } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { H1, H2, H3, Body, Eyebrow } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

// Social SVG LinkedIn Icon
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

const milestones = [
  {
    year: "2018",
    title: "Company Foundation",
    description: "Valueway HRC is established in New Delhi to bridge critical executive shortages in early cloud tech sectors.",
  },
  {
    year: "2020",
    title: "Remote Capacity Scaling",
    description: "Engineered high-performance remote digital staffing pipelines during massive global changes.",
  },
  {
    year: "2022",
    title: "Talent Matching Platform",
    description: "Built proprietary data matching audits evaluating skill metrics and team cultural compatibility.",
  },
  {
    year: "2024",
    title: "International Expansion",
    description: "Opened regional offices in Singapore and London to run international cross-border search pools.",
  },
  {
    year: "2026",
    title: "Next-Gen AI Audits",
    description: "Incorporated advanced predictive models and client-readiness analytics in organization design product pipelines.",
  },
];

const team = [
  {
    name: "Sameer Kalra",
    title: "Founder & Managing Partner",
    tag: "Executive Search",
    initials: "SK",
    bio: "Sameer has over 15 years of experience in board and C-suite placements globally, guiding high-growth firms through strategic hiring loops.",
  },
  {
    name: "Dr. Evelyn Cole",
    title: "Consultant Director",
    tag: "Healthcare & BioTech",
    initials: "EC",
    bio: "Evelyn leads bio-sciences recruitment, bringing clinical-operations planning expertise from clinical trial oversight systems.",
  },
  {
    name: "Kenji Tanaka",
    title: "Senior Talent Architect",
    tag: "IT & Software",
    initials: "KT",
    bio: "Kenji specializes in deep-tech software engineering, SaaS scaling pipelines, and AI engineering executive searches.",
  },
  {
    name: "Sarah Jenkins",
    title: "Lead Advisor",
    tag: "BFSI & Fintech",
    initials: "SJ",
    bio: "Sarah advises banking partners and fintech unicorns on leadership pipeline design, equity structures, and growth models.",
  },
];

const testimonials = [
  {
    quote: "Valueway sourced our entire engineering leadership team in under 3 weeks. Absolute game-changers in C-suite recruitment.",
    author: "Marcus Chen",
    role: "VP Engineering, bioHealth",
  },
  {
    quote: "Their compliance auditing and payroll solutions saved us countless hours during global contractor expansions.",
    author: "Sophia Martinez",
    role: "Head of Talent, ApexCorp",
  },
  {
    quote: "The placement process was extremely professional. They found my ideal Director role in under 12 days.",
    author: "David Thorne",
    role: "Director of Product, Nexus Systems",
  },
];

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideTimer = useRef<NodeJS.Timeout | null>(null);

  const stopSlideShow = useCallback(() => {
    if (slideTimer.current) {
      clearInterval(slideTimer.current);
    }
  }, []);

  const startSlideShow = useCallback(() => {
    stopSlideShow();
    slideTimer.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5500);
  }, [stopSlideShow]);

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, [startSlideShow, stopSlideShow]);

  const handlePrevSlide = () => {
    stopSlideShow();
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startSlideShow();
  };

  const handleNextSlide = () => {
    stopSlideShow();
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
    startSlideShow();
  };

  const handleDotClick = (idx: number) => {
    stopSlideShow();
    setActiveSlide(idx);
    startSlideShow();
  };

  // Team Card slide-up variants
  const overlayVariants = {
    initial: { opacity: 0, y: "100%" },
    hover: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <title>About Us | Valueway HRC</title>
      <meta name="description" content="Explore Valueway's organizational mission, milestones timeline chronology, and executive placements recruitment advisors." />
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[100px] animate-blob-1" />
          <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-950/5 blur-[120px] animate-blob-2" />
        </div>

        {/* Hero Section */}
        <Section padding="md" direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Valueway Blueprint</Eyebrow>
            <H1 className="mb-4 text-white text-glow">Redefining Talent Architectures</H1>
            <Body className="text-neutral-400">
              {"We integrate strategic human resources consultancy with modern technical execution to construct organizations prepared for digital acceleration."}
            </Body>
          </div>

          {/* Grid Split Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Our Mission</H2>
              <Body className="text-neutral-300 leading-relaxed">
                {"Founded in 2018, Valueway HRC set out to solve the critical gap between hyper-growth technical requirements and static recruitment matrices. We believe organizations achieve optimum scale when executive talent, regulatory compliance audits, and culture profiles are data-aligned."}
              </Body>
              <Body className="text-neutral-300 leading-relaxed">
                {"Today, we manage talent searches across North America, Europe, and Asia-Pacific. Leveraging next-generation talent analytics pools, our planners locate niche executive capabilities and align contract staffing operations seamlessly."}
              </Body>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card glow className="bg-zinc-950/40 p-6 flex flex-col items-start">
                <Target className="w-8 h-8 text-accent mb-4" />
                <H3 className="text-white text-base font-bold mb-2">Targeted Precision</H3>
                <Body className="text-xs text-neutral-400">
                  {"Locating specialized tech, financial, and clinical brains with precision matching methodologies."}
                </Body>
              </Card>

              <Card glow className="bg-zinc-950/40 p-6 flex flex-col items-start">
                <Compass className="w-8 h-8 text-accent mb-4" />
                <H3 className="text-white text-base font-bold mb-2">Compliance Driven</H3>
                <Body className="text-xs text-neutral-400">
                  {"Strict alignment with cross-border regulations, tax laws, and payroll compliance frameworks."}
                </Body>
              </Card>

              <Card glow className="bg-zinc-950/40 p-6 flex flex-col items-start">
                <Users className="w-8 h-8 text-accent mb-4" />
                <H3 className="text-white text-base font-bold mb-2">Human Integration</H3>
                <Body className="text-xs text-neutral-400">
                  {"Balancing technical capabilities with deep cultural segment compatibility models."}
                </Body>
              </Card>

              <Card glow className="bg-zinc-950/40 p-6 flex flex-col items-start">
                <Award className="w-8 h-8 text-accent mb-4" />
                <H3 className="text-white text-base font-bold mb-2">Verified Delivery</H3>
                <Body className="text-xs text-neutral-400">
                  {"Demonstrated placement histories resulting in a 95% retention metric across C-suite hires."}
                </Body>
              </Card>
            </div>
          </div>
        </Section>

        {/* Milestones timeline */}
        <Section padding="lg" direction="up" className="border-t border-zinc-900/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Eyebrow>Chronology</Eyebrow>
            <H2>Timeline & Milestones</H2>
            <Body className="mt-2 text-neutral-400">
              How we scaled from a specialized Silicon Valley search group to a global talent advisory firm.
            </Body>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={cn(
                      "flex flex-col lg:flex-row relative items-start lg:items-center justify-between",
                      isEven ? "lg:flex-row-reverse" : ""
                    )}
                  >
                    {/* Circle Node */}
                    <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full border-2 border-accent bg-background z-10 -translate-x-1/2" />

                    {/* Content Card container */}
                    <div className="w-full lg:w-[45%] pl-10 lg:pl-0">
                      <Card glow className="bg-zinc-950/50 p-6 border-zinc-900 hover:border-accent/30 transition-all duration-300">
                        <span className="font-display text-2xl font-bold text-accent mb-2 block">{item.year}</span>
                        <h4 className="text-white font-display font-semibold mb-2">{item.title}</h4>
                        <Body className="text-sm text-neutral-400 leading-relaxed">{item.description}</Body>
                      </Card>
                    </div>
                    {/* Empty block to balance grid */}
                    <div className="hidden lg:block w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Team Grid */}
        <Section padding="lg" direction="up" className="border-t border-zinc-900/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Eyebrow>Leadership</Eyebrow>
            <H2>Our Team of Consultants</H2>
            <Body className="mt-2 text-neutral-400">
              Meet the human resource experts and tech recruiters piloting our capacity search operations.
            </Body>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial="initial"
                whileHover="hover"
                className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40 p-6 flex flex-col justify-between group min-h-[360px]"
              >
                {/* Visual Avatar Placeholder */}
                <div className="w-full h-44 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center mb-4 text-zinc-700 text-3xl font-display font-bold select-none relative overflow-hidden">
                  {member.initials}
                  {/* Subtle Grid Accent in background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35" />
                </div>

                {/* Details */}
                <div className="flex-grow flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
                    {member.tag}
                  </span>
                  <h4 className="text-lg font-display font-semibold text-white mb-0.5">{member.name}</h4>
                  <p className="text-xs text-neutral-500 mb-4">{member.title}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-zinc-900/60">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest">LinkedIn Profile</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-neutral-400 hover:text-white hover:border-accent/30 transition-all duration-300"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Hover slide bio overlay */}
                <motion.div
                  variants={overlayVariants}
                  className="absolute inset-0 bg-zinc-950 p-6 flex flex-col justify-between border border-accent/25 rounded-xl z-20"
                >
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-display font-semibold text-white mb-0.5">{member.name}</h4>
                      <p className="text-xs text-accent font-medium">{member.title}</p>
                    </div>
                    <Body className="text-xs sm:text-sm text-neutral-305 text-neutral-400 leading-relaxed">
                      {member.bio}
                    </Body>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-900/80">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Connect</span>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-neutral-400 hover:text-white hover:border-accent/30 transition-all duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Testimonials Slider */}
        <Section padding="lg" direction="up" className="border-t border-zinc-900/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
          <div className="text-center mb-12">
            <Eyebrow>Endorsements</Eyebrow>
            <H2>Success Stories</H2>
          </div>

          <div className="relative max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md shadow-2xl overflow-hidden min-h-[250px] flex flex-col justify-between">
            {/* Subtle decorative quote logo in background */}
            <span className="absolute top-4 left-6 text-7xl font-serif text-accent/5 select-none font-bold">“</span>

            <div className="relative flex-grow flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-center space-y-6"
                >
                  <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 leading-relaxed font-sans italic max-w-2xl mx-auto">
                    {`"${testimonials[activeSlide].quote}"`}
                  </p>
                  <div>
                    <span className="text-base font-semibold text-white block">
                      {testimonials[activeSlide].author}
                    </span>
                    <span className="text-xs text-accent font-medium">
                      {testimonials[activeSlide].role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-900/60">
              {/* Arrow navigation */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevSlide}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-neutral-400 hover:text-white border border-zinc-850 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-neutral-400 hover:text-white border border-zinc-850 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Dots index */}
              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      idx === activeSlide ? "bg-accent w-6" : "bg-zinc-800 hover:bg-zinc-700"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
