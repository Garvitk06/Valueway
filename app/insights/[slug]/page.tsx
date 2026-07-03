import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Section } from "@/components/ui/section";
import { Card, CardTitle } from "@/components/ui/card";
import { H1, H2, Body } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/share-buttons";
import { getInsightBySlug, getAllInsights } from "@/lib/markdown";

interface InsightDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const articles = getAllInsights();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: InsightDetailPageProps) {
  const article = getInsightBySlug(params.slug);
  if (!article) return { title: "Article Not Found | Valueway HRC" };

  return {
    title: `${article.title} | Valueway HRC`,
    description: article.excerpt,
  };
}

export default function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <Section padding="md" className="text-center">
            <H2 className="text-white mb-4">Article Not Found</H2>
            <Body className="mb-6">The article you are looking for does not exist or has been removed.</Body>
            <Link href="/insights">
              <Button variant="primary">Back to Insights</Button>
            </Link>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  // Related articles (up to 2, excluding current slug)
  const allArticles = getAllInsights();
  const relatedArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-24 relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[100px] animate-blob-1" />
          <div className="absolute bottom-[10%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-purple-950/5 blur-[120px] animate-blob-2" />
        </div>

        <Section padding="lg" direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Insights
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start mt-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold text-accent bg-accent/5 border border-accent/15 uppercase tracking-wider mb-4">
                  {article.category}
                </span>
                <H1 className="mb-4 text-white text-glow leading-tight">{article.title}</H1>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-neutral-600" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-neutral-600" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Cover Image Placeholder */}
              <div className="w-full h-64 sm:h-96 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-800 font-display text-5xl font-bold select-none relative overflow-hidden">
                {article.title[0]}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25" />
              </div>

              {/* compiled HTML content styling */}
              <div
                className="text-neutral-300 leading-relaxed text-sm sm:text-base space-y-6 [&_h1]:text-white [&_h1]:font-display [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4 [&_h2]:text-white [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:text-neutral-300 [&_a]:text-accent [&_a]:hover:underline"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
              />

              {/* Share buttons */}
              <ShareButtons title={article.title} />
            </div>

            {/* Sidebar Column: Table of Contents */}
            {article.toc.length > 0 && (
              <div className="hidden lg:block lg:col-span-1 sticky top-32">
                <Card glow className="border-zinc-900 bg-zinc-950/40 p-6 space-y-4">
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {article.toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-xs font-medium text-neutral-400 hover:text-accent hover:translate-x-1 transition-all duration-300"
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </Card>
              </div>
            )}
          </div>

          {/* Related Articles Segment */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-zinc-900/60 pt-16 mt-16">
              <H2 className="text-2xl font-bold text-white mb-8">Related Insights</H2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map((rel) => (
                  <Link href={`/insights/${rel.slug}`} key={rel.slug} className="group">
                    <Card glow className="flex flex-col md:flex-row p-0 overflow-hidden hover:border-accent/40 transition-all duration-300 h-full">
                      <div className="w-full md:w-1/3 h-44 md:h-auto bg-gradient-to-br from-zinc-900 to-zinc-950 border-r border-zinc-900 flex items-center justify-center text-zinc-700 text-3xl font-display font-bold select-none relative overflow-hidden shrink-0">
                        {rel.title[0]}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-25" />
                      </div>
                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold text-accent bg-accent/5 border border-accent/15 uppercase tracking-wider mb-2">
                            {rel.category}
                          </span>
                          <CardTitle className="group-hover:text-accent transition-colors duration-300 text-white text-base mb-2">
                            {rel.title}
                          </CardTitle>
                          <Body className="text-xs text-neutral-400 line-clamp-2">
                            {rel.excerpt}
                          </Body>
                        </div>
                        <span className="text-xs text-accent flex items-center gap-1.5 mt-4 group-hover:translate-x-1 transition-transform duration-300">
                          Read Post
                        </span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Section>
      </main>

      <Footer />
    </div>
  );
}
