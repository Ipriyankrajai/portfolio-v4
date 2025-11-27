import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { siteConfig } from "@/config";
import { SectionShell } from "@/components/section-shell";
import BlurFade from "@/components/ui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
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
    <div className="min-h-[calc(100vh-4rem)]">
      <SectionShell id="blog-post" className="pt-24 pb-16">
        <BlurFade delay={0.04}>
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mb-8 text-neutral-400 hover:text-neutral-100 transition-colors"
            )}
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Blog
          </Link>
        </BlurFade>

        <article className="max-w-2xl mx-auto">
          <BlurFade delay={0.08}>
            <div className="flex flex-col space-y-4 mb-8 border-b border-neutral-800 pb-8">
              <div className="flex items-center gap-3 text-sm">
                <time
                  dateTime={post.date}
                  className="text-neutral-400 font-medium"
                >
                  {post.date}
                </time>
                <span className="text-neutral-700">•</span>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-neutral-700/50 bg-neutral-800/50 px-2 py-0.5 text-xs font-medium text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-100">
                {post.title}
              </h1>
            </div>
          </BlurFade>

          <BlurFade delay={0.12}>
            <div className="prose prose-invert prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-neutral-300 prose-a:text-neutral-100 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-neutral-200 prose-code:bg-neutral-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800">
              {post.content}
            </div>
          </BlurFade>
        </article>
      </SectionShell>
    </div>
  );
}
