import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { ComponentProps } from "react";

const CONTENT_PATH = path.join(process.cwd(), "content/blog");

// Custom components for MDX
const mdxComponents = {
  a: ({ href, children, ...props }: ComponentProps<"a">) => {
    const isExternal = href?.startsWith("http") || href?.startsWith("https");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
};

export interface BlogPostFrontmatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
}

export interface BlogPostMeta extends BlogPostFrontmatter {
  filePath: string;
}

export interface BlogPost extends BlogPostFrontmatter {
  content: React.ReactElement;
}

/**
 * Get all MDX files from the content/blog directory
 */
function getMdxFiles(): string[] {
  if (!fs.existsSync(CONTENT_PATH)) {
    return [];
  }
  return fs
    .readdirSync(CONTENT_PATH)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

/**
 * Get all blog posts metadata (without content) sorted by date
 */
export function getAllPosts(): BlogPostMeta[] {
  const files = getMdxFiles();

  const posts = files.map((fileName) => {
    const filePath = path.join(CONTENT_PATH, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: data.slug || fileName.replace(/\.mdx?$/, ""),
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      image: data.image,
      filePath: fileName,
    } as BlogPostMeta;
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get a single blog post by slug with compiled MDX content
 */
export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  const files = getMdxFiles();

  for (const fileName of files) {
    const filePath = path.join(CONTENT_PATH, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    const postSlug = data.slug || fileName.replace(/\.mdx?$/, "");

    if (postSlug === slug) {
      const { content, frontmatter } = await compileMDX<BlogPostFrontmatter>({
        source: fileContents,
        components: mdxComponents,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      });

      return {
        slug: frontmatter.slug || postSlug,
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
        tags: frontmatter.tags || [],
        image: frontmatter.image,
        content,
      };
    }
  }

  return undefined;
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map((post) => post.slug);
}

