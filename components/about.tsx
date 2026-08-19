import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "./section-shell";
import { SOCIAL_LINKS } from "@/config";

export function About() {
  return (
    <SectionShell className="flex flex-col gap-4 overflow-hidden">
      <h2 className="mb-2 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
        About&nbsp;me
      </h2>

      <p>
        I&apos;m a dedicated software engineer driven by curiosity, detail-oriented
        precision, and a passion for innovation. I thrive at the intersection of
        modern web technologies and Generative AI, constantly experimenting with
        new ideas to solve real-world problems by automating processes using
        artificial intelligence. Throughout my career, I&apos;ve developed
        high-quality, performant, accessible, and scalable software solutions.
      </p>

      <p>
        While my core expertise lies in frontend development—ensuring
        accessibility, scalability, and performance—I also have substantial
        experience in backend systems, databases like PostgreSQL and MySQL, and
        frameworks such as NestJS. Recently, my work has expanded into creating
        intelligent agents and automating workflows with Generative AI tools
        like GPT models, LangChain, and LlamaIndex. In my free time, I enjoy
        contributing to open-source projects, further exploring the
        possibilities of AI-driven applications.
      </p>

      <p>You can find me on:</p>

      <ul
        aria-label="Social and contact links"
        className="flex items-center gap-5 pb-1"
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
                  "tap-target size-auto rounded-full hover:bg-transparent active:bg-transparent"
                )}
              >
                <span className="sr-only">{link.name}</span>
                <Icon className="size-5 text-neutral-300 transition-colors duration-200 hover:text-white" />
              </Link>
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
