import Link from "next/link";
import { ExternalLink, GitFork, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GitHubIcon } from "@/components/icons/github-icon";
import { SectionShell } from "@/components/section-shell";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/section-reveal";
import { PROJECTS } from "@/config";

export async function Projects() {
  return (
    <SectionShell id="projects" className="pt-20">
      <SectionReveal>
        <h2 className="mb-8 font-heading text-xl font-bold tracking-tight text-white lg:text-2xl">
          Projects
        </h2>
      </SectionReveal>

      <StaggerContainer className="grid grid-cols-1 gap-4">
        {PROJECTS.map((project) => (
          <StaggerItem key={project.id}>
            <div className="glass-card-hover px-5 py-4">
              <div className="mb-2 flex items-center justify-between">
                <Link
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-auto p-0 text-base font-semibold text-white hover:bg-transparent hover:underline active:bg-transparent"
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
                          <GitHubIcon className="size-4 text-neutral-500 transition-colors duration-200 hover:text-white" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className="glass-card border-white/10">
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
                          <ExternalLink className="size-4 text-neutral-500 transition-colors duration-200 hover:text-white" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent className="glass-card border-white/10">
                        Visit website
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed">{project.description}</p>

              <div className="mt-3 flex items-center gap-6">
                <div className="flex items-center gap-1.5">
                  <Star className="size-3.5 text-neutral-500" />
                  <span
                    aria-hidden="true"
                    className="text-xs font-medium text-neutral-500"
                  >
                    {project.stargazers_count}
                  </span>
                  <span className="sr-only">
                    {`${project.stargazers_count} stars`}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <GitFork className="size-3.5 text-neutral-500" />
                  <span
                    aria-hidden="true"
                    className="text-xs font-medium text-neutral-500"
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
                className="mt-3 flex flex-wrap items-center gap-2"
              >
                {project.tags?.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-neutral-400 transition-colors duration-200 ease-out-expo hover:border-white/20 hover:text-neutral-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
