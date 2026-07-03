import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { H1, Body, Eyebrow } from "@/components/ui/typography";
import {
  Building2, Activity, Cpu, Factory, ShoppingBag, Package,
  Car, Plane, HardHat, BookOpen, Wrench, Truck, Megaphone, Flame, Radio, Palmtree,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Valueway HRC",
  description: "Valueway HRC serves 16+ industries across India — from IT & Tech, BFSI, and Healthcare to Automobile, Oil & Gas, Logistics, and more.",
};

const industries = [
  { slug: "bfsi", title: "BFSI", description: "Fintech & Banking", icon: Building2, detail: "Banking, Financial Services, Insurance, Fintech, and Capital Markets recruitment." },
  { slug: "healthcare", title: "Healthcare", description: "BioTech & Pharma", icon: Activity, detail: "Hospitals, Pharma, Biotech, Medical Devices, and Clinical Research talent." },
  { slug: "it-tech", title: "IT & Tech", description: "Software & SaaS", icon: Cpu, detail: "Software engineering, product, data science, cloud, and infrastructure talent." },
  { slug: "manufacturing", title: "Manufacturing", description: "Industrial Tech", icon: Factory, detail: "Plant operations, quality, supply chain, and industrial engineering talent." },
  { slug: "retail", title: "Retail", description: "E-Commerce Systems", icon: ShoppingBag, detail: "Retail operations, e-commerce, merchandising, and omni-channel talent." },
  { slug: "fmcg", title: "FMCG", description: "Consumer Goods", icon: Package, detail: "Brand management, sales, distribution, and marketing talent for consumer goods." },
  { slug: "automobile", title: "Automobile", description: "Auto & EV Sector", icon: Car, detail: "Automotive engineering, EV technology, dealership, and OEM talent." },
  { slug: "aviation", title: "Aviation", description: "Airlines & Aerospace", icon: Plane, detail: "Pilots, ground operations, MRO, and aerospace engineering professionals." },
  { slug: "construction", title: "Construction", description: "Real Estate & Infra", icon: HardHat, detail: "Civil engineering, project management, real estate, and infrastructure talent." },
  { slug: "education", title: "Education", description: "Ed-Tech & Training", icon: BookOpen, detail: "Academic leadership, ed-tech, L&D, and institutional management talent." },
  { slug: "engineering", title: "Engineering", description: "Heavy Equipment", icon: Wrench, detail: "Heavy industry, precision engineering, and equipment manufacturing roles." },
  { slug: "logistics", title: "Logistics", description: "Supply Chain", icon: Truck, detail: "Freight, warehousing, 3PL, last-mile delivery, and supply chain talent." },
  { slug: "media", title: "Media", description: "Ad & Entertainment", icon: Megaphone, detail: "Content creation, advertising, PR, media buying, and entertainment talent." },
  { slug: "oil-gas", title: "Oil & Gas", description: "Energy & Resources", icon: Flame, detail: "Upstream, downstream, refining, and energy sector executive talent." },
  { slug: "telecom", title: "Telecom", description: "Networks & 5G", icon: Radio, detail: "Network engineering, 5G rollout, telecom operations, and spectrum roles." },
  { slug: "travel", title: "Travel", description: "Hospitality & Tourism", icon: Palmtree, detail: "Hotels, airlines, travel tech, tour operations, and hospitality management." },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[5%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] animate-blob-1" />
          <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-purple-950/5 blur-[130px] animate-blob-2" />
        </div>

        <Section padding="sm" direction="none" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Sectors</Eyebrow>
            <H1 className="mb-4 text-white text-glow">Industries We Serve</H1>
            <Body className="text-neutral-400">
              Deep domain specialization across 16+ industries. Valueway HRC acts as a preferred recruitment partner
              for Indian and global companies operating in India.
            </Body>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link key={industry.slug} href={`/industries/${industry.slug}`} className="block group">
                  <Card
                    glow
                    className="h-full flex flex-col p-6 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center mb-4 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-background group-hover:border-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-xs text-accent/70 font-semibold uppercase tracking-wider mb-3">
                      {industry.description}
                    </p>
                    <p className="text-sm text-neutral-400 leading-relaxed flex-grow">
                      {industry.detail}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
