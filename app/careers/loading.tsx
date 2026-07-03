import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Eyebrow, H1, Body } from "@/components/ui/typography";

export default function CareersLoading() {
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
            <Eyebrow>Opportunities</Eyebrow>
            <H1 className="mb-4 text-white text-glow">Careers Portal</H1>
            <Body className="text-neutral-400">
              Loading available positions across tech, executive placements, and industry sectors...
            </Body>
          </div>

          {/* Search/Filter Skeleton */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 bg-zinc-950/40 p-4 rounded-xl border border-zinc-900">
            <div className="flex-grow h-11 bg-zinc-900 rounded-lg animate-pulse" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
              <div className="w-full md:w-32 h-11 bg-zinc-900 rounded-lg animate-pulse" />
              <div className="w-full md:w-32 h-11 bg-zinc-900 rounded-lg animate-pulse" />
              <div className="w-full md:w-32 h-11 bg-zinc-900 rounded-lg animate-pulse" />
              <div className="w-full md:w-32 h-11 bg-zinc-900 rounded-lg animate-pulse" />
            </div>
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Card key={idx} className="bg-zinc-950/50 border-zinc-900 p-6 flex flex-col justify-between min-h-[300px]">
                <div className="space-y-4">
                  {/* Top Category Badge */}
                  <div className="w-24 h-5 bg-zinc-900 rounded-full animate-pulse" />
                  {/* Job Title */}
                  <div className="w-3/4 h-6 bg-zinc-900 rounded animate-pulse" />
                  {/* Summary */}
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-zinc-900 rounded animate-pulse" />
                    <div className="w-5/6 h-4 bg-zinc-900 rounded animate-pulse" />
                  </div>
                </div>

                <div className="space-y-4 mt-6 pt-4 border-t border-zinc-900/60">
                  {/* Meta items */}
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-4 bg-zinc-900 rounded animate-pulse" />
                    <div className="w-20 h-4 bg-zinc-900 rounded animate-pulse" />
                  </div>
                  {/* Button */}
                  <div className="w-full h-10 bg-zinc-900 rounded-lg animate-pulse" />
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
