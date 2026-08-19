import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { siteConfig } from "@/config";

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
    <div className="page-shell">
      <div className="section-heading reveal">
        <div>
          <p className="eyebrow">
            BLOG <span>{String(posts.length).padStart(2, "0")} POSTS</span>
          </p>
          <h1 className="display-title">
            The <i>blog.</i>
          </h1>
        </div>
        <span className="section-index">GUIDES / NOTES</span>
      </div>
      <p className="muted-copy reveal reveal-delay-1" style={{ marginTop: 30 }}>
        {BLOG_DESCRIPTION}
      </p>

      <div className="post-list">
        {posts.map((post, index) => (
          <Link
            href={`/blog/${post.slug}`}
            className="post-row reveal"
            key={post.slug}
            style={{ animationDelay: `${0.15 + index * 0.07}s` }}
          >
            <time dateTime={post.date}>{post.date}</time>
            <div>
              <h3>{post.title}</h3>
              <p className="post-desc">{post.description}</p>
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <span className="post-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
