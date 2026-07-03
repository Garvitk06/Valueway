"use client";

import React from "react";
import { Counter } from "./ui/counter";
import { Section } from "./ui/section";

const stats = [
  { value: 500, suffix: "+", label: "Talent Placements" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 20, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Retention Rate" },
];

export function StatsBar() {
  return (
    <Section padding="sm" direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-16 mb-20 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center p-4 relative"
          >
            {/* Split dividers for desktop */}
            {idx < 3 && (
              <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-zinc-850 bg-zinc-800/60" />
            )}
            
            <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-400 uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
