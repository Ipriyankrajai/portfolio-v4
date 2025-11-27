import Link from "next/link";
import { BLOG_POSTS } from "@/config";
import { SectionShell } from "@/components/section-shell";
import { MagicCard } from "@/components/ui/magic-card";
import BlurFade from "@/components/ui/blur-fade";
import { ArrowRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <SectionShell id="blog" className="pt-24 pb-16">
        <div className="flex flex-col space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500 pb-2">
              Blog
            </h1>
            <p className="max-w-[600px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Thoughts, ideas, and guides on web development and technology.
            </p>
          </BlurFade>

          <div className="flex flex-col gap-6">
            {BLOG_POSTS.map((post, id) => (
              <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="rounded-lg bg-gradient-to-br from-neutral-500/50 to-neutral-950 to-90% p-px transition-all duration-300 hover:from-neutral-400/50 hover:to-neutral-900/80">
                    <MagicCard
                      wrapperClassName="rounded-lg px-6 py-5 bg-gradient-to-br from-neutral-900 to-neutral-950 to-90%"
                      className="flex flex-col gap-4 rounded-lg"
                      gradientColor="#262626"
                    >
                      <article className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-sm text-neutral-500">
                          <div className="flex items-center gap-3">
                            <time dateTime={post.date} className="font-medium text-neutral-400">
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
                        </div>
                        
                        <div className="space-y-2">
                          <h2 className="text-xl font-bold text-neutral-100 group-hover:text-white transition-colors flex items-center gap-2">
                            {post.title}
                            <ArrowRight className="size-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-neutral-400" />
                          </h2>
                          <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">
                            {post.description}
                          </p>
                        </div>
                      </article>
                    </MagicCard>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
