import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import BlogPostTemplate from "@/components/templates/BlogPostTemplate";
import RichText from "@/components/ui/RichText";

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const posts = await payload.find({
    collection: "blog-posts",
    limit: 100,
  });
  return posts.docs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  const posts = await payload.find({
    collection: "blog-posts",
    where: { slug: { equals: slug } },
  });
  const post = posts.docs[0];
  if (!post) return {};
  return {
    title: `${post.title} | VASP Digital Blog`,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });
  
  const posts = await payload.find({
    collection: "blog-posts",
    where: { slug: { equals: slug } },
  });
  const post = posts.docs[0];
  if (!post) notFound();

  // Fetch related posts (same category first)
  const relatedPostsRes = await payload.find({
    collection: "blog-posts",
    where: {
      and: [
        { slug: { not_equals: slug } },
        { category: { equals: post.category } }
      ]
    },
    limit: 3,
  });
  
  let relatedPosts = relatedPostsRes.docs;
  if (relatedPosts.length < 3) {
    const extraRes = await payload.find({
      collection: "blog-posts",
      where: { slug: { not_equals: slug } },
      limit: 3 - relatedPosts.length,
    });
    relatedPosts = [...relatedPosts, ...extraRes.docs];
  }

  const formattedRelated = relatedPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
  }));

  const templateConfig = {
    slug: post.slug,
    title: post.title,
    category: post.category,
    date: post.date,
    author: post.author,
    body: <RichText content={post.body} />,
    related: formattedRelated,
  };

  return <BlogPostTemplate config={templateConfig} />;
}
