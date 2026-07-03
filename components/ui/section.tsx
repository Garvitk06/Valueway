"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<HTMLMotionProps<"section">, "ref"> {
  children: React.ReactNode;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  animateOnce?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      children,
      padding = "md",
      delay = 0,
      direction = "up",
      animateOnce = true,
      ...props
    },
    ref
  ) => {
    // Determine translation values based on reveal direction
    const getDirectionOffset = () => {
      switch (direction) {
        case "up":
          return { y: 30 };
        case "down":
          return { y: -30 };
        case "left":
          return { x: 30 };
        case "right":
          return { x: -30 };
        default:
          return {};
      }
    };

    const initial = {
      opacity: 0,
      ...getDirectionOffset(),
    };

    const animate = {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Premium easeOutExpo transition curve
        delay,
      },
    };

    return (
      <motion.section
        ref={ref}
        initial={initial}
        whileInView={animate}
        viewport={{ once: animateOnce, margin: "-10% 0px -10% 0px" }}
        className={cn(
          "w-full relative",
          {
            "py-0": padding === "none",
            "py-12 md:py-16": padding === "sm",
            "py-16 md:py-24": padding === "md",
            "py-24 md:py-36": padding === "lg",
            "py-32 md:py-48": padding === "xl",
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

Section.displayName = "Section";
