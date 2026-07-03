"use client";

import React, { useState } from "react";
import { Link2, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
}

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareTwitter = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Check out this article from Valueway HRC: ${title}`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
    }
  };

  const shareLinkedin = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
    }
  };

  return (
    <div className="flex items-center space-x-3 pt-6 border-t border-zinc-900/60 mt-10">
      <span className="text-xs text-neutral-500 uppercase tracking-widest">Share Article</span>
      
      <button
        onClick={shareLinkedin}
        className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-neutral-400 hover:text-white border border-zinc-900 hover:border-zinc-800 transition-all duration-300"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon className="w-4 h-4" />
      </button>

      <button
        onClick={shareTwitter}
        className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-neutral-400 hover:text-white border border-zinc-900 hover:border-zinc-800 transition-all duration-300"
        aria-label="Share on Twitter"
      >
        <TwitterIcon className="w-4 h-4" />
      </button>

      <button
        onClick={handleCopy}
        className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-neutral-400 hover:text-white border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex items-center gap-1.5"
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">Copied</span>
          </>
        ) : (
          <Link2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
