"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Briefcase, ChevronDown, Clock } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { H1, Body, Eyebrow } from "@/components/ui/typography";
import { jobs } from "@/lib/jobs";

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");
  const [seniority, setSeniority] = useState("All");

  const industries = ["All", ...Array.from(new Set(jobs.map((j) => j.industry)))];
  const locations = ["All", ...Array.from(new Set(jobs.map((j) => j.location)))];
  const types = ["All", ...Array.from(new Set(jobs.map((j) => j.type)))];
  const seniorities = ["All", ...Array.from(new Set(jobs.map((j) => j.seniority)))];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase()) ||
        job.industry.toLowerCase().includes(search.toLowerCase());

      const matchesIndustry = industry === "All" || job.industry === industry;
      const matchesLocation = location === "All" || job.location === location;
      const matchesType = type === "All" || job.type === type;
      const matchesSeniority = seniority === "All" || job.seniority === seniority;

      return matchesSearch && matchesIndustry && matchesLocation && matchesType && matchesSeniority;
    });
  }, [search, industry, location, type, seniority]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <title>Careers Portal | Valueway HRC</title>
      <meta name="description" content="Explore and apply to elite career vacancies in technology, finance, C-suite operations, and executive leadership managed by Valueway HRC." />
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] animate-blob-1" />
          <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-purple-950/5 blur-[130px] animate-blob-2" />
        </div>

        {/* Hero Section */}
        <Section padding="sm" direction="none" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Eyebrow>Careers</Eyebrow>
            <H1 className="mb-4 text-white text-glow">Open Opportunities</H1>
            <Body className="text-neutral-400">
              {"Build the future of digital architecture with our partner companies. Scout for premium tech, healthcare, BFSI, and executive placements."}
            </Body>
          </div>

          {/* Search & Filters Container */}
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md shadow-2xl mb-10 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs by keyword, title, or industry..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent transition-colors"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-neutral-500" />
            </div>

            {/* Dropdowns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Industry Filter */}
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest pl-1">Industry</span>
                <div className="relative">
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full appearance-none bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                  >
                    {industries.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                </div>
              </div>

              {/* Location Filter */}
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest pl-1">Location</span>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full appearance-none bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                </div>
              </div>

              {/* Job Type Filter */}
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest pl-1">Job Type</span>
                <div className="relative">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full appearance-none bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                  >
                    {types.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                </div>
              </div>

              {/* Seniority Filter */}
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest pl-1">Seniority</span>
                <div className="relative">
                  <select
                    value={seniority}
                    onChange={(e) => setSeniority(e.target.value)}
                    className="w-full appearance-none bg-zinc-900 border border-zinc-800 text-sm text-neutral-300 rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent cursor-pointer"
                  >
                    {seniorities.map((sen) => (
                      <option key={sen} value={sen}>
                        {sen}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Jobs List Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 min-h-[300px]">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card glow className="h-full flex flex-col justify-between group hover:border-accent/40 transition-all duration-300">
                      <CardHeader className="mb-3">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold text-accent bg-accent/5 border border-accent/15">
                            {job.industry}
                          </span>
                          <span className="text-xs text-neutral-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {job.posted}
                          </span>
                        </div>
                        <CardTitle className="group-hover:text-accent transition-colors duration-300 text-white">
                          {job.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow pb-4">
                        <Body className="text-sm text-neutral-450 mb-4 line-clamp-2">
                          {job.description}
                        </Body>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500 font-medium">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-neutral-600" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4 text-neutral-600" />
                            {job.type}
                          </span>
                          <span className="text-accent/80 font-semibold font-display">
                            {job.salary}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-2 border-t border-zinc-900/60 justify-between items-center">
                        <span className="text-xs text-neutral-500 uppercase tracking-widest">
                          {job.seniority} Level
                        </span>
                        <Link href={`/careers/${job.id}`}>
                          <Button variant="secondary" size="sm" className="font-semibold text-xs py-2 px-4">
                            {"View Details"}
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full flex flex-col items-center justify-center text-center p-12 bg-zinc-950/20 border border-zinc-900 rounded-2xl"
                >
                  <Body className="text-neutral-500">
                    {"No positions match your search criteria. Try modifying your filter options."}
                  </Body>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
