"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { H1, H2, Body, Eyebrow } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

const servicesMap: Record<string, { title: string; desc: string; bullets: string[] }> = {
  "executive-search": {
    title: "Executive Search",
    desc: "C-suite and leadership talent scouting. Locating executive leaders who drive digital acceleration and organizational excellence.",
    bullets: ["Board Director Recruitment", "C-Suite Advisory Search", "Global Leadership Sourcing", "Succession Planning Consultation"],
  },
  "permanent-staffing": {
    title: "Permanent Staffing",
    desc: "End-to-end recruitment for vital roles. High-quality, curated hiring pipeline aligning skilled professionals with company culture.",
    bullets: ["Cultural Compatibility Auditing", "Full Lifecycle Candidate Mapping", "Direct Hire Placement", "Niche Skill Sourcing"],
  },
  "contract-staffing": {
    title: "Contract Staffing",
    desc: "Agile, scalable contractor pools. Flexible workforce options to adapt rapidly to changing market and project demands.",
    bullets: ["Rapid Resource Deployment", "Contract-to-Hire Transitions", "Payroll Management Integration", "Regulatory Compliance Handling"],
  },
  "campus-hiring": {
    title: "Campus Hiring",
    desc: "Early talent programs and recruitment. Connecting industry leaders with fresh minds from top universities across the globe.",
    bullets: ["University Relations Coordination", "Hackathon and Case Event Recruiting", "Internship Program Setup", "Structured Graduate Onboarding"],
  },
  "hr-consulting": {
    title: "HR Consulting",
    desc: "Blueprint organizational redesigns. Performance engineering, culture restructuring, and strategic capacity mapping.",
    bullets: ["Compensation & Benefits Design", "Culture Transformation Blueprints", "HR Tech Stack Integrations", "Performance Management Frameworks"],
  },
  "payroll-solutions": {
    title: "Payroll Solutions",
    desc: "Compliant automated financial operations. End-to-end salary processing, benefits management, and multi-country tax compliance.",
    bullets: ["Automated Tax Withholding", "Global PEO & Employer of Record Services", "Self-Service Employee Portals", "Consolidated Compliance Audits"],
  },
};

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = servicesMap[slug] || {
    title: "Dynamic Service Module",
    desc: "Innovative, custom-tailored HR consultancy product designed to fulfill specific business demands.",
    bullets: ["Custom Requirements Audits", "Data-Driven Matching Systems", "High Touch Strategic Support"],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[100px] animate-blob-1" />
          <div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-purple-950/5 blur-[120px] animate-blob-2" />
        </div>

        <Section padding="lg" direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2">
              <Eyebrow>Valueway Service</Eyebrow>
              <H1 className="mb-6 text-white text-glow">{service.title}</H1>
              <Body className="text-lg text-neutral-400 mb-8 leading-relaxed">
                {service.desc}
              </Body>

              <div className="space-y-4">
                <H2 className="text-xl md:text-2xl mb-4 font-semibold text-white">What We Deliver</H2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-4 bg-zinc-950/40 border border-zinc-900 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm font-medium text-neutral-300">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card glow className="border-accent/15 bg-zinc-950/50 p-8">
                <H2 className="text-lg md:text-xl font-bold mb-4 text-white">Scale with Valueway</H2>
                <Body className="text-sm text-neutral-400 mb-6">
                  {"Ready to deploy next-generation human resources programs in your organization? Let's custom build your solution parameters."}
                </Body>
                <div className="space-y-4">
                  <Button variant="primary" className="w-full">
                    {"Request Consultation"}
                  </Button>
                  <Button variant="secondary" className="w-full">
                    {"Download Brochure"}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
