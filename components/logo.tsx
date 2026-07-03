import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none text-left", className)}>
      {/* Atom Icon SVG */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Slanted Orbits */}
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="6"
          transform="rotate(30 20 20)"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-zinc-500 dark:text-zinc-600 opacity-60"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="6"
          transform="rotate(90 20 20)"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-zinc-500 dark:text-zinc-600 opacity-60"
        />
        <ellipse
          cx="20"
          cy="20"
          rx="17"
          ry="6"
          transform="rotate(150 20 20)"
          stroke="currentColor"
          strokeWidth="1.2"
          className="text-zinc-500 dark:text-zinc-600 opacity-60"
        />

        {/* Orbiting Electrons (Teal) */}
        <circle cx="20" cy="3" r="2.2" fill="#14B8A6" />
        <circle cx="34.7" cy="28.5" r="2.2" fill="#14B8A6" />
        <circle cx="5.3" cy="28.5" r="2.2" fill="#14B8A6" />

        {/* Central Core (Yellow) */}
        <circle cx="20" cy="20" r="4.8" fill="#FACC15" />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display font-bold text-base sm:text-lg tracking-[0.16em] text-accent uppercase leading-none">
            Valueway
          </span>
          <span className="text-[7px] font-bold text-neutral-500 dark:text-neutral-450 uppercase tracking-[0.08em] leading-none mt-1">
            Human Resource Consultants
          </span>
        </div>
      )}
    </div>
  );
}
