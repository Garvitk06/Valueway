"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { H1, H2, Body, Eyebrow } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

const industriesMap: Record<string, { title: string; desc: string; metrics: string[]; details: string }> = {
  bfsi: {
    title: "BFSI Sector",
    desc: "Fintech, Investment Banking, and Insurance talent search.",
    details: "Connecting highly analytical financial brains, regulatory compliance officers, and fintech developers with premier institutions.",
    metrics: ["100+ Placed CFOs", "98% Compliance Audits", "Custom Talent Pools"],
  },
  healthcare: {
    title: "Healthcare & Life Sciences",
    desc: "BioTech, Pharma, and Hospital leadership solutions.",
    details: "Enabling clinical search parameters, operational excellence frameworks, and pharmaceutical executive hunt operations.",
    metrics: ["40+ Hospital Systems", "120+ Biotech Scopes", "Global Resources"],
  },
  "it-tech": {
    title: "IT & Technology Services",
    desc: "Software Engineering, SaaS leadership, and Cloud architects.",
    details: "Building tech teams for hyper-scale platforms. We specialize in deep technical sourcing for AI, cloud infrastructure, and core software engineering.",
    metrics: ["500+ Engineers Placed", "Silicon Valley Network", "Agile Pipeline Sync"],
  },
  manufacturing: {
    title: "Manufacturing & Industrial",
    desc: "Automotive, robotics, and industrial technology pipelines.",
    details: "Scaling supply chain leadership, robotics engineers, quality compliance metrics directors, and factory operations heads.",
    metrics: ["20+ Smart Factories", "Supply Chain Focus", "ISO Audited Sourcing"],
  },
  retail: {
    title: "Retail & E-Commerce",
    desc: "Digital commerce transformation and omni-channel logistics leaders.",
    details: "Matching retail systems builders, product managers, and digital growth executives with global brands.",
    metrics: ["30+ E-Com Unicorns", "Omni-Channel Talent", "96% Engagement Rate"],
  },
  fmcg: {
    title: "FMCG & Consumer Goods",
    desc: "Fast-Moving Consumer Goods distribution and product managers.",
    details: "Helping global consumer brands scale supply chain logistics, marketing directors, and brand operations heads.",
    metrics: ["50+ Global Brands", "Supply Chain Scaler", "94% Candidate Retention"],
  },
};

export default function IndustryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const industry = industriesMap[slug] || {
    title: "Dynamic Industry Division",
    desc: "Tailored recruitment operations mapping to customized vertical industries.",
    details: "Aligning deep domain skill sets with complex corporate operational directives globally.",
    metrics: ["Diverse Talent Network", "Custom Sourcing Audits", "Strategic Placements"],
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[100px] animate-blob-1" />
          <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-purple-950/5 blur-[120px] animate-blob-2" />
        </div>

        <Section padding="lg" direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-450 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mt-8">
            <div className="lg:col-span-2">
              <Eyebrow>Valueway Industry Scope</Eyebrow>
              <H1 className="mb-6 text-white text-glow">{industry.title}</H1>
              <Body className="text-lg text-neutral-400 mb-8 leading-relaxed">
                {industry.desc}
              </Body>
              <Body className="text-base text-neutral-300 mb-8 leading-relaxed">
                {industry.details}
              </Body>

              <div className="space-y-4">
                <H2 className="text-xl md:text-2xl mb-4 font-semibold text-white">Division Highlights</H2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {industry.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col p-5 bg-zinc-950/40 border border-zinc-900 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-accent mb-3" />
                      <span className="text-sm font-semibold text-white mb-1">{metric}</span>
                      <span className="text-xs text-neutral-500">Verified Result</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card glow className="border-accent/15 bg-zinc-950/50 p-8">
                <H2 className="text-lg md:text-xl font-bold mb-4 text-white">Scale Sector Capacity</H2>
                <Body className="text-sm text-neutral-400 mb-6">
                  {"Deploy custom executive searches or project capacity scaling matching this business sector."}
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
