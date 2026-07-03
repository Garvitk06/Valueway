"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, UserPlus, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { H1, Body } from "./ui/typography";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Blob 1 (Teal Accent) */}
        <div className="absolute top-[12%] left-[10%] w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] rounded-full bg-accent/10 blur-[90px] md:blur-[120px] animate-blob-1" />
        {/* Blob 2 (Deep Violet) */}
        <div className="absolute bottom-[8%] right-[10%] w-[55vw] h-[55vw] md:w-[40vw] md:h-[40vw] rounded-full bg-purple-950/10 blur-[100px] md:blur-[130px] animate-blob-2" />
        {/* Subtle Cyber Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0e_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_75%,transparent_100%)] opacity-40" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center py-12 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Eyebrow Label */}
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-accent bg-accent/5 border border-accent/15 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              {"Transparency • Partnership • Confidentiality"}
            </span>
          </motion.div>

          {/* Bold Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <H1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              Connecting <span className="text-accent text-glow">Exceptional Talent</span> with Exceptional Companies
            </H1>
          </motion.div>

          {/* Subheading text */}
          <motion.div variants={itemVariants} className="mb-10 max-w-2xl">
            <Body className="text-base sm:text-lg md:text-xl text-neutral-400 font-sans leading-relaxed text-balance">
              {"Transparent Partnerships. Absolute Confidentiality. Executive Precision. Sourcing the high-performance organizational architectures of tomorrow."}
            </Body>
          </motion.div>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link href="/hire-talent" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full flex items-center justify-center gap-2 group font-semibold"
              >
                <UserPlus className="w-5 h-5 shrink-0" />
                {"I'm Hiring"}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/careers" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full flex items-center justify-center gap-2 group font-semibold"
              >
                <FileText className="w-5 h-5 shrink-0" />
                {"I'm Looking for a Job"}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
