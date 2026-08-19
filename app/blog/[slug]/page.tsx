import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { siteConfig } from "@/config";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const ogImageUrl = `${siteConfig.url}/api/og?title=${encodeURIComponent(
    post.title
  )}&description=${encodeURIComponent(
    post.description
  )}&tags=${encodeURIComponent(post.tags.join(", "))}&date=${encodeURIComponent(
    post.date
  )}`;

  return {
    title: `${post.title} | ${siteConfig.title}`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: "Priyank Rajai" }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.title,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="page-shell">
      <div className="article-wrap">
        <Link href="/blog" className="text-button back-link">
          <span>←</span> Back to blog
        </Link>

        <article>
          <header className="article-header reveal">
            <p className="eyebrow">
              {post.date} <span>{post.tags.join(" / ")}</span>
            </p>
            <h1 className="display-title">{post.title}</h1>
          </header>

          {post.image && (
            <figure className="article-image reveal reveal-delay-1">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                priority
              />
            </figure>
          )}

          <div className="article-body reveal reveal-delay-1">
            {post.content}
          </div>

          <footer className="article-footer">
            <Link href="/blog">← ALL POSTS</Link>
            <a href="#top">BACK TO TOP ↑</a>
          </footer>
        </article>
      </div>
    </div>
  );
}
