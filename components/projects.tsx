import Link from "next/link";
import { ExternalLink, GitFork, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubIcon } from "@/components/icons/github-icon";
import { SectionShell } from "@/components/section-shell";
import { PROJECTS } from "@/config";

export async function Projects() {
  return (
    <SectionShell id="projects" className="pt-20">
      <h2 className="mb-8 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="rounded-lg bg-gradient-to-br from-neutral-500/50 to-neutral-950 to-90% p-px"
          >
            <MagicCard
              wrapperClassName="rounded-lg px-4 pb-4 pt-3 bg-gradient-to-br from-neutral-900 to-neutral-950 to-90%"
              className="flex flex-col gap-2 rounded-lg"
            >
              <div className="mb-2 flex items-center justify-between">
                <Link
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-auto p-0 text-base font-semibold hover:bg-transparent hover:underline active:bg-transparent"
                  )}
                >
                  {project.name}
                </Link>

                <div className="flex items-center gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "tap-target h-auto p-0 hover:bg-transparent active:bg-transparent"
                          )}
                        >
                          <span className="sr-only">
                            View source code of {project.name}
                          </span>
                          <GitHubIcon className="size-4" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gradient-to-t from-neutral-800 to-neutral-950">
                        View source code
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "tap-target h-auto p-0 hover:bg-transparent active:bg-transparent"
                          )}
                        >
                          <span className="sr-only">
                            Visit website of {project.name}
                          </span>
                          <ExternalLink className="size-4" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gradient-to-t from-neutral-800 to-neutral-950">
                        Visit website
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <p className="text-neutral-100">{project.description}</p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5">
                  <Star className="size-4 text-neutral-400" />
                  <span
                    aria-hidden="true"
                    className="text-sm font-medium text-neutral-400"
                  >
                    {project.stargazers_count}
                  </span>
                  <span className="sr-only">
                    {`${project.stargazers_count} stars`}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <GitFork className="size-4 text-neutral-400" />
                  <span
                    aria-hidden="true"
                    className="text-sm font-medium text-neutral-400"
                  >
                    {project.forks_count}
                  </span>
                  <span className="sr-only">
                    {`${project.forks_count} forks`}
                  </span>
                </div>
              </div>

              <ul
                aria-label="Tech stack"
                className="mt-2 flex flex-wrap items-center gap-2"
              >
                {project.tags?.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-neutral-700/50 bg-accent px-1.5 py-0.5 text-xs font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </MagicCard>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
