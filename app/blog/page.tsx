import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { siteConfig } from "@/config";
import { SectionShell } from "@/components/section-shell";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/section-reveal";
import { ArrowRight } from "lucide-react";

const BLOG_TITLE = "Blog";
const BLOG_DESCRIPTION =
  "Practical guides on building robust systems, leveraging AI, and writing better software.";
const ogImageUrl = `${siteConfig.url}/api/og?title=${encodeURIComponent(
  BLOG_TITLE
)}&description=${encodeURIComponent(BLOG_DESCRIPTION)}`;

export const metadata: Metadata = {
  title: "Blog | " + siteConfig.title,
  description: BLOG_DESCRIPTION,
  openGraph: {
    title: "Blog | " + siteConfig.title,
    description: BLOG_DESCRIPTION,
    url: siteConfig.url + "/blog",
    siteName: siteConfig.title,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: BLOG_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | " + siteConfig.title,
    description: BLOG_DESCRIPTION,
    images: [ogImageUrl],
  },
  alternates: {
    canonical: siteConfig.url + "/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <SectionShell id="blog" className="pt-24 pb-16">
        <div className="flex flex-col space-y-8">
          <SectionReveal>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl/tight pb-2">
              Blog
            </h1>
            <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Practical guides on building robust systems, leveraging AI, and
              writing better software.
            </p>
          </SectionReveal>

          <StaggerContainer className="flex flex-col gap-4">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="glass-card-hover px-6 py-5">
                    <article className="flex flex-col gap-3">
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <div className="flex flex-wrap items-center gap-3">
                          <time
                            dateTime={post.date}
                            className="font-mono text-xs font-medium text-neutral-500"
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
                      </div>

                      <div className="space-y-2">
                        <h2 className="font-heading text-xl font-bold text-neutral-100 group-hover:text-white transition-colors duration-200 ease-out-expo flex items-center gap-2">
                          {post.title}
                          <ArrowRight className="size-4 opacity-0 -translate-x-2 transition-all duration-300 ease-out-expo group-hover:opacity-100 group-hover:translate-x-0 text-neutral-500" />
                        </h2>
                        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </article>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionShell>
    </div>
  );
}
