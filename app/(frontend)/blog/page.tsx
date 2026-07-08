import type { Metadata } from "next";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Insights & Resources | VASP Digital Blog",
  description: "Digital marketing tips, guides, and insights for local businesses in London, Ontario and the GTA.",
  alternates: { canonical: "/blog" },
};

function getLexicalText(node: any): string {
  if (!node) return "";
  let text = "";
  if (node.text) {
    text += node.text + " ";
  }
  if (node.children) {
    for (const child of node.children) {
      text += getLexicalText(child);
    }
  }
  return text;
}

function calculateReadTime(body: any): string {
  if (!body) return "3 min read";
  const text = getLexicalText(body.root || body);
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min read`;
}

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise });
  const postsRes = await payload.find({
    collection: "blog-posts",
    sort: "-date",
    limit: 100,
  });

  const formattedPosts = postsRes.docs.map((post) => ({
    slug: post.slug,
    category: post.category,
    readTime: calculateReadTime(post.body),
    title: post.title,
    summary: post.summary,
  }));

  return <BlogClient posts={formattedPosts} />;
}


