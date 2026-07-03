"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Card, CardTitle } from "./ui/card";
import { Body } from "./ui/typography";
import { ArticleMeta } from "@/lib/markdown";
import { cn } from "@/lib/utils";

interface InsightsListProps {
  articles: ArticleMeta[];
}

export function InsightsList({ articles }: InsightsListProps) {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

  const filteredArticles = useMemo(() => {
    if (category === "All") return articles;
    return articles.filter((a) => a.category === category);
  }, [category, articles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300",
              category === cat
                ? "bg-accent/15 border-accent text-accent glow-accent"
                : "bg-zinc-950/20 border-zinc-900 text-neutral-400 hover:text-white hover:border-zinc-800"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Articles */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article) => (
            <motion.div
              key={article.slug}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Link href={`/insights/${article.slug}`} className="block h-full group">
                <Card glow className="h-full flex flex-col justify-between hover:border-accent/40 transition-all duration-300 p-0 overflow-hidden">
                  <div>
                    {/* Placeholder image */}
                    <div className="w-full h-44 bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-zinc-900 flex items-center justify-center text-zinc-700 text-3xl font-display font-bold select-none relative overflow-hidden">
                      {article.title[0]}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-25" />
                    </div>
                    
                    <div className="p-6 pb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-accent bg-accent/5 border border-accent/15 uppercase tracking-wider mb-3">
                        {article.category}
                      </span>
                      <CardTitle className="group-hover:text-accent transition-colors duration-300 text-white text-base sm:text-lg mb-2">
                        {article.title}
                      </CardTitle>
                      <Body className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </Body>
                    </div>
                  </div>

                  <div className="p-6 pt-2">
                    <div className="flex items-center justify-between text-xs text-neutral-500 font-semibold border-t border-zinc-900/60 pt-4">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-accent transition-transform duration-300 group-hover:translate-x-1.5">
                        Read Article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
