"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
};

export const ScrollButton = ({ direction, onClick, disabled }: Props) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
    className={`
      w-8 h-8 rounded-full flex items-center justify-center
      border border-zinc-700/60 text-zinc-400
      hover:border-accent/60 hover:text-accent hover:bg-accent/5
      transition-all duration-200
      disabled:opacity-20 disabled:pointer-events-none
    `}
  >
    {direction === "left" ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
  </button>
);
