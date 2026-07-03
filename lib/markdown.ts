import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDirectory = path.join(process.cwd(), "content/insights");

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
}

export interface ArticleDetail extends ArticleMeta {
  contentHtml: string;
  toc: Array<{ text: string; id: string }>;
}

// Slugify helper to create IDs for TOC anchors
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function getAllInsights(): ArticleMeta[] {
  // Ensure the directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allArticles = fileNames
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("."))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled Article",
        excerpt: data.excerpt || "",
        category: data.category || "General",
        date: data.date || "",
        readTime: data.readTime || "3 min read",
        coverImage: data.coverImage || "",
      };
    });

  // Sort articles by date descending
  return allArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getInsightBySlug(slug: string): ArticleDetail | null {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Compile markdown content to HTML
  // Type assertion since marked can return a promise or string
  const contentHtml = marked.parse(content) as string;

  // Extract H2 headings for Table of Contents (headings starting with "## ")
  const lines = content.split("\n");
  const toc: Array<{ text: string; id: string }> = [];

  lines.forEach((line) => {
    if (line.startsWith("## ")) {
      const text = line.replace("## ", "").trim();
      const id = slugify(text);
      toc.push({ text, id });
    }
  });

  return {
    slug,
    title: data.title || "Untitled Article",
    excerpt: data.excerpt || "",
    category: data.category || "General",
    date: data.date || "",
    readTime: data.readTime || "3 min read",
    coverImage: data.coverImage || "",
    contentHtml,
    toc,
  };
}
