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
  automobile: {
    title: "Automobile & EV Sector",
    desc: "Automotive engineering, EV technology, and OEM leadership talent.",
    details: "Placing top-tier automotive professionals — from EV powertrain engineers to OEM plant directors — as the industry transitions toward electric and autonomous mobility.",
    metrics: ["80+ EV Placements", "OEM Network Access", "Tier-1 Supplier Reach"],
  },
  aviation: {
    title: "Aviation & Aerospace",
    desc: "Airlines, MRO operations, and aerospace engineering leadership.",
    details: "Connecting airlines and aerospace companies with certified aviation professionals, senior operations managers, and MRO specialists across commercial and defence sectors.",
    metrics: ["45+ Senior Pilots Placed", "MRO Specialist Pool", "DGCA-Cleared Candidates"],
  },
  construction: {
    title: "Construction & Infrastructure",
    desc: "Real estate development, civil engineering, and infrastructure leadership.",
    details: "Staffing major construction and real estate projects with project directors, civil engineers, and infrastructure VPs capable of delivering large-scale developments on time.",
    metrics: ["120+ Projects Staffed", "Pan-India Reach", "RERA-Compliant Hiring"],
  },
  education: {
    title: "Education & Ed-Tech",
    desc: "Academic leadership, ed-tech platforms, and L&D specialist placement.",
    details: "Sourcing academic deans, curriculum designers, ed-tech product managers, and L&D directors for universities, K-12 groups, and high-growth edtech startups.",
    metrics: ["60+ Institutional Heads", "Ed-Tech Startup Network", "NAAC-Aligned Sourcing"],
  },
  engineering: {
    title: "Engineering & Heavy Equipment",
    desc: "Precision engineering, heavy equipment, and industrial operations talent.",
    details: "Recruiting operations directors, mechanical engineers, and plant heads for heavy engineering firms, precision manufacturers, and capital equipment companies.",
    metrics: ["95+ Precision Placements", "ISO-Certified Sourcing", "Multi-Plant Coverage"],
  },
  logistics: {
    title: "Logistics & Supply Chain",
    desc: "3PL, freight, and end-to-end supply chain leadership.",
    details: "Building supply chain leadership teams for 3PL providers, e-commerce fulfilment companies, and global freight operators — from warehouse leads to national logistics heads.",
    metrics: ["150+ Supply Chain Leaders", "3PL Partner Network", "Pan-India Distribution Reach"],
  },
  media: {
    title: "Media & Entertainment",
    desc: "Advertising, digital media, and entertainment industry talent.",
    details: "Placing creative VPs, PR directors, media buying heads, and content strategists for broadcasters, digital agencies, and entertainment studios.",
    metrics: ["70+ Creative Directors", "OTT & Broadcast Reach", "98% Role Acceptance Rate"],
  },
  "oil-gas": {
    title: "Oil, Gas & Energy",
    desc: "Upstream, midstream, and downstream energy sector leadership.",
    details: "Recruiting refinery heads, upstream directors, and energy consultants for oil & gas majors and renewable energy companies across India and the Gulf.",
    metrics: ["40+ Energy Executives", "Gulf & Domestic Reach", "HSE-Compliant Sourcing"],
  },
  telecom: {
    title: "Telecom & 5G Networks",
    desc: "Network infrastructure, 5G rollout, and telecom operations leadership.",
    details: "Sourcing 5G rollout leads, network architects, and operations heads for telecom operators, tower companies, and equipment vendors driving India's connectivity expansion.",
    metrics: ["110+ 5G Placements", "Tower Co. Network", "DoT-Cleared Profiles"],
  },
  travel: {
    title: "Travel & Hospitality",
    desc: "Hotels, travel tech, and tourism operations leadership.",
    details: "Placing hotel general managers, travel tech architects, and operations directors for hospitality groups, OTAs, and tourism boards across leisure and business travel segments.",
    metrics: ["85+ Hospitality Leads", "Star Property Network", "95% Guest-Score Alignment"],
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
