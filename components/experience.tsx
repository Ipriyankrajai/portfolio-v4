import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/section-shell";
import {
  SectionReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/section-reveal";
import { EXPERIENCES, type Experience } from "@/config";

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className={cn("space-y-4")}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="rounded-full border border-white/10 p-1">
            <Image
              src={experience.companyImageUrl}
              alt={`${experience.companyName} logo`}
              width={36}
              height={36}
              className="size-9 rounded-full"
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-1">
            {experience.companyLink ? (
              <Link
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "h-auto gap-1.5 self-start p-0 text-base font-semibold text-neutral-100 transition-colors duration-200 ease-out-expo hover:bg-transparent hover:text-white hover:underline active:bg-transparent"
                )}
              >
                {experience.companyName}
                <ExternalLink className="size-4" />
              </Link>
            ) : (
              <span className="text-base font-semibold text-neutral-100">
                {experience.companyName}
              </span>
            )}
            <p className="text-sm text-neutral-500">{experience.designation}</p>
            {experience.subLabel && (
              <p className="text-xs text-neutral-600">{experience.subLabel}</p>
            )}
          </div>
        </div>
        <p className="mt-1 font-mono text-xs text-neutral-500 sm:mt-0 sm:shrink-0">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>

      {experience.subExperiences && experience.subExperiences.length > 0 && (
        <div className="space-y-4 border-l border-white/10 pl-6 ml-6">
          {experience.subExperiences.map((subExp) => (
            <ExperienceItem key={subExp.companyName} experience={subExp} />
          ))}
        </div>
      )}
    </div>
  );
}

export async function Experience() {
  return (
    <SectionShell id="experience" className="pt-20">
      <SectionReveal>
        <h2 className="mb-8 font-heading text-xl font-bold tracking-tight text-white lg:text-2xl">
          Work experience
        </h2>
      </SectionReveal>

      <StaggerContainer className="flex flex-col gap-4">
        {EXPERIENCES.map((experience) => (
          <StaggerItem key={experience.companyName}>
            <div className="glass-card-hover px-5 py-4">
              <ExperienceItem experience={experience} />
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  );
}
