"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  glow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, glow = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/40 backdrop-blur-md p-6 transition-colors duration-300 hover:border-accent/40 group",
          {
            "shadow-[0_0_30px_rgba(20,184,166,0.02)] hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]": glow,
          },
          className
        )}
        {...props}
      >
        {/* Futuristic glowing corner decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 group-hover:bg-accent/10" />
        
        {children}
      </motion.div>
    );
  }
);
Card.displayName = "Card";

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />
);
CardHeader.displayName = "CardHeader";

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("font-display text-lg md:text-xl font-semibold text-white tracking-tight", className)} {...props} />
);
CardTitle.displayName = "CardTitle";

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-neutral-400 leading-relaxed", className)} {...props} />
);
CardDescription.displayName = "CardDescription";

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-neutral-300 text-sm md:text-base leading-relaxed", className)} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center mt-6 pt-4 border-t border-zinc-900/60", className)} {...props} />
);
CardFooter.displayName = "CardFooter";
