import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { siteConfig } from "@/config";
import { SectionShell } from "@/components/section-shell";
import { SectionReveal } from "@/components/ui/section-reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

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
    <div className="min-h-[calc(100vh-4rem)]">
      <SectionShell id="blog-post" className="pt-24 pb-16">
        <SectionReveal>
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "mb-8 text-neutral-500 hover:text-neutral-200 transition-colors duration-200 ease-out-expo"
            )}
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Blog
          </Link>
        </SectionReveal>

        <article className="max-w-2xl mx-auto">
          {post.image && (
            <SectionReveal delay={0.05}>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </SectionReveal>
          )}

          <SectionReveal delay={post.image ? 0.1 : 0.05}>
            <div className="flex flex-col space-y-4 mb-8 border-b border-white/10 pb-8">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <time
                  dateTime={post.date}
                  className="font-mono text-xs text-neutral-500 font-medium"
                >
                  {post.date}
                </time>
                <span className="text-neutral-700">•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs font-medium text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                {post.title}
              </h1>
            </div>
          </SectionReveal>

          <SectionReveal delay={post.image ? 0.15 : 0.1}>
            <div className="prose prose-lg prose-invert prose-neutral max-w-none prose-headings:font-heading prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-p:leading-relaxed prose-p:text-neutral-400 prose-p:my-6 prose-a:text-neutral-200 prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-white prose-strong:text-white prose-code:text-neutral-300 prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-pre:my-8 prose-pre:p-5 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit prose-ul:my-6 prose-ol:my-6 prose-li:my-3 prose-hr:my-10 prose-hr:border-white/10 prose-table:my-8 prose-table:w-full prose-table:border-collapse prose-thead:border-b prose-thead:border-white/10 prose-th:py-3 prose-th:px-4 prose-th:text-left prose-th:text-neutral-200 prose-th:font-semibold prose-td:py-3 prose-td:px-4 prose-td:text-neutral-400 prose-tr:border-b prose-tr:border-white/10">
              {post.content}
            </div>
          </SectionReveal>
        </article>
      </SectionShell>
    </div>
  );
}
