"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center font-display rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none tracking-wide",
          // Sizes
          {
            "px-4 py-2 text-xs md:text-sm": size === "sm",
            "px-6 py-3 text-sm md:text-base": size === "md",
            "px-8 py-4 text-base md:text-lg": size === "lg",
          },
          // Variants
          {
            // Primary: Teal background, dark text, glow on hover
            "bg-accent text-background hover:bg-accent/90 shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_25px_rgba(20,184,166,0.35)]":
              variant === "primary",
            // Secondary: Bordered off-white, light background hover, subtle outline
            "border border-zinc-800 bg-zinc-900/50 text-foreground hover:bg-zinc-800 hover:border-zinc-700 hover:text-white":
              variant === "secondary",
            // Ghost: Transparent background, accent hover border and text shade
            "bg-transparent text-neutral-400 hover:text-white hover:bg-white/5":
              variant === "ghost",
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
