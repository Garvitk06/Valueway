import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Component = "h1", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight",
          className
        )}
        {...props}
      />
    );
  }
);
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Component = "h2", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-display text-3xl md:text-4xl font-semibold tracking-tight text-white leading-snug",
          className
        )}
        {...props}
      />
    );
  }
);
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Component = "h3", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-display text-2xl md:text-3xl font-medium tracking-tight text-white leading-snug",
          className
        )}
        {...props}
      />
    );
  }
);
H3.displayName = "H3";

export const H4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, as: Component = "h4", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-display text-xl md:text-2xl font-medium tracking-tight text-white/90",
          className
        )}
        {...props}
      />
    );
  }
);
H4.displayName = "H4";

export const Body = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, as: Component = "p", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-sans text-base md:text-lg text-neutral-400 leading-relaxed",
          className
        )}
        {...props}
      />
    );
  }
);
Body.displayName = "Body";

export const Eyebrow = React.forwardRef<HTMLSpanElement, TypographyProps>(
  ({ className, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "font-sans text-xs md:text-sm font-semibold tracking-widest text-accent uppercase block mb-2",
          className
        )}
        {...props}
      />
    );
  }
);
Eyebrow.displayName = "Eyebrow";
