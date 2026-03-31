import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { siteConfig, SOCIAL_LINKS } from "@/config";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { SectionReveal } from "./ui/section-reveal";

export function Hero() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-screen-lg px-6 sm:px-16">
        <div className="relative flex h-svh flex-col justify-center">
          <SectionReveal>
            <span className="mb-4 inline-block font-mono text-sm font-medium text-[hsl(var(--accent-pop))] tracking-wide">
              Full Stack Developer
            </span>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Priyank Rajai.
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-400">
              I craft high-performance web applications with modern JavaScript
              frameworks and build AI-powered workflows and autonomous agents.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="mt-8 flex items-center gap-6">
              <Link
                href={`${siteConfig.url}/resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent btn-press inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold"
              >
                Resume
              </Link>

              <ul
                aria-label="Social links"
                className="flex items-center gap-4"
              >
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ size: "icon", variant: "ghost" }),
                          "tap-target size-auto rounded-full hover:bg-transparent active:bg-transparent group/social"
                        )}
                      >
                        <span className="sr-only">{link.name}</span>
                        <Icon className="size-5 text-neutral-500 transition-[color,transform] duration-200 ease-out-expo group-hover/social:text-white group-hover/social:scale-110" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SectionReveal>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="scroll-indicator flex flex-col items-center gap-1 text-neutral-600">
              <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
              <ChevronDown className="size-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
