import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { H1, Body, Eyebrow } from "@/components/ui/typography";
import { InsightsList } from "@/components/insights-list";
import { getAllInsights } from "@/lib/markdown";

export const metadata = {
  title: "Insights & Reports | Valueway HRC",
  description: "Organizational scaling structures, compensation reports, and technical sourcing blueprints.",
};

export default function InsightsPage() {
  const articles = getAllInsights();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] animate-blob-1" />
          <div className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-purple-950/5 blur-[130px] animate-blob-2" />
        </div>

        {/* Hero Area */}
        <Section padding="sm" direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Eyebrow>Resources</Eyebrow>
            <H1 className="mb-4 text-white text-glow">Valueway Insights</H1>
            <Body className="text-neutral-400">
              {"Blueprints, compensation analyses, and strategic reports on human capital scaling in modern sectors."}
            </Body>
          </div>

          {/* Mount Client filter list */}
          <InsightsList articles={articles} />
        </Section>
      </main>

      <Footer />
    </div>
  );
}
