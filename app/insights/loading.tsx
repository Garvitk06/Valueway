import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Eyebrow, H1, Body } from "@/components/ui/typography";

export default function InsightsLoading() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[100px]" />
        </div>

        <Section padding="lg" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Eyebrow>Resources</Eyebrow>
            <H1 className="mb-4 text-white text-glow">Valueway Insights</H1>
            <Body className="text-neutral-400">
              Loading blueprints, compensation analyses, and strategic organizational reports...
            </Body>
          </div>

          {/* Category Tabs Skeleton */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="w-24 h-9 bg-zinc-900 rounded-full animate-pulse" />
            ))}
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Card key={idx} className="bg-zinc-950/50 border-zinc-900 p-0 overflow-hidden flex flex-col justify-between min-h-[360px]">
                <div>
                  {/* Featured image placeholder */}
                  <div className="w-full h-44 bg-zinc-900 animate-pulse" />
                  
                  <div className="p-6 pb-2 space-y-4">
                    {/* Category tag */}
                    <div className="w-20 h-5 bg-zinc-900 rounded-full animate-pulse" />
                    {/* Title */}
                    <div className="w-5/6 h-6 bg-zinc-900 rounded animate-pulse" />
                    {/* Excerpt */}
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-zinc-900 rounded animate-pulse" />
                      <div className="w-4/5 h-4 bg-zinc-900 rounded animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-2">
                  <div className="flex items-center justify-between border-t border-zinc-900/60 pt-4">
                    <div className="w-20 h-4 bg-zinc-900 rounded animate-pulse" />
                    <div className="w-24 h-4 bg-zinc-900 rounded animate-pulse" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
