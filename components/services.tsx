"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Users, Briefcase, GraduationCap, TrendingUp, Coins, ArrowRight } from "lucide-react";
import { Section } from "./ui/section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Eyebrow, H2, Body } from "./ui/typography";

const services = [
  {
    slug: "executive-search",
    title: "Executive Search",
    description: "C-suite and leadership talent scouting.",
    details: "Locating executive leaders who drive digital acceleration and organizational excellence.",
    icon: Search,
  },
  {
    slug: "permanent-staffing",
    title: "Permanent Staffing",
    description: "End-to-end recruitment for vital roles.",
    details: "High-quality, curated hiring pipeline aligning skilled professionals with company culture.",
    icon: Users,
  },
  {
    slug: "contract-staffing",
    title: "Contract Staffing",
    description: "Agile, scalable contractor pools.",
    details: "Flexible workforce options to adapt rapidly to changing market and project demands.",
    icon: Briefcase,
  },
  {
    slug: "campus-hiring",
    title: "Campus Hiring",
    description: "Early talent programs and recruitment.",
    details: "Connecting industry leaders with fresh minds from top universities across the globe.",
    icon: GraduationCap,
  },
  {
    slug: "hr-consulting",
    title: "HR Consulting",
    description: "Blueprint organizational redesigns.",
    details: "Performance engineering, culture restructuring, and strategic capacity mapping.",
    icon: TrendingUp,
  },
  {
    slug: "payroll-solutions",
    title: "Payroll Solutions",
    description: "Compliant automated financial operations.",
    details: "End-to-end salary processing, benefits management, and multi-country tax compliance.",
    icon: Coins,
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Section padding="lg" direction="up" className="border-t border-zinc-900/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-14 text-center md:text-left">
        <Eyebrow>Capabilities</Eyebrow>
        <H2>Human Capital Services</H2>
        <Body className="mt-3 max-w-xl">
          Engineered to scale. Our core staffing and consultancy products leverage data intelligence to deliver premium talent outcomes.
        </Body>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.slug} variants={itemVariants} className="h-full">
              <Link href={`/services/${service.slug}`} className="block h-full group">
                <Card glow className="h-full flex flex-col justify-between hover:border-accent/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center mb-4 text-accent transition-colors group-hover:bg-accent group-hover:text-background group-hover:border-accent duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {service.details}
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest">
                      Explore Service
                    </span>
                    <span className="text-accent flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
