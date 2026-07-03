"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, MapPin, Briefcase, Clock } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { H1, H2, Body, Eyebrow } from "@/components/ui/typography";
import { ApplyModal } from "@/components/apply-modal";
import { jobs } from "@/lib/jobs";

export default function JobDetailPage() {
  const params = useParams();
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const job = jobs.find((j) => j.id === params?.id);

  if (!job) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <title>Position Not Found | Valueway HRC</title>
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <Section padding="md" className="text-center">
            <H2 className="text-white mb-4">Position Not Found</H2>
            <Body className="mb-6">The career opportunity you are looking for does not exist or has been filled.</Body>
            <Link href="/careers">
              <Button variant="primary">Back to Careers</Button>
            </Link>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <title>{`${job.title} | Careers | Valueway HRC`}</title>
      <meta name="description" content={job.description} />
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[100px] animate-blob-1" />
          <div className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-950/5 blur-[120px] animate-blob-2" />
        </div>

        <Section padding="lg" direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <div className="mb-6">
            <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Careers
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-8">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Eyebrow>{job.industry} Division</Eyebrow>
                <H1 className="mb-4 text-white text-glow leading-tight">{job.title}</H1>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-neutral-600" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-neutral-600" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-neutral-600" />
                    {job.posted}
                  </span>
                </div>
              </div>

              {/* Role Description */}
              <div className="border-t border-zinc-900/60 pt-6">
                <H2 className="text-xl md:text-2xl font-semibold text-white mb-4">Role Description</H2>
                <Body className="text-base text-neutral-350 leading-relaxed">
                  {job.description}
                </Body>
              </div>

              {/* Responsibilities */}
              <div>
                <H2 className="text-xl md:text-2xl font-semibold text-white mb-4">Key Responsibilities</H2>
                <ul className="space-y-3.5">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-neutral-300 text-sm md:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <H2 className="text-xl md:text-2xl font-semibold text-white mb-4">Requirements & Qualifications</H2>
                <ul className="space-y-3.5">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-neutral-300 text-sm md:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Summary Sidebar Column */}
            <div>
              <Card glow className="border-accent/15 bg-zinc-950/50 p-8 space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3">Job Summary</h3>
                  <div className="space-y-4 text-sm text-neutral-300">
                    <div className="flex justify-between py-2 border-b border-zinc-900/60">
                      <span className="text-neutral-400">Salary Range</span>
                      <span className="font-semibold text-white font-display">{job.salary}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-900/60">
                      <span className="text-neutral-400">Seniority Level</span>
                      <span className="font-semibold text-white">{job.seniority}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-900/60">
                      <span className="text-neutral-400">Industry</span>
                      <span className="font-semibold text-white">{job.industry}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-neutral-400">Job Type</span>
                      <span className="font-semibold text-white">{job.type}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="primary" className="w-full font-semibold" onClick={() => setIsApplyOpen(true)}>
                    {"Apply Now"}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      </main>

      <Footer />

      {/* Apply Modal Drawer */}
      <ApplyModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} jobTitle={job.title} />
    </div>
  );
}
