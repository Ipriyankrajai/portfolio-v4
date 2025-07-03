import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/section-shell";
import { EXPERIENCES, type Experience } from "@/config";

function ExperienceItem({
  experience,
  isSubExperience = false,
}: {
  experience: Experience;
  isSubExperience?: boolean;
}) {
  return (
    <div className={cn("space-y-4")}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="rounded-full border border-neutral-700/50 p-1">
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
                  "h-auto gap-1.5 self-start p-0 text-base font-semibold text-neutral-100 transition-colors duration-200 hover:bg-transparent hover:text-white hover:underline active:bg-transparent"
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
            <p className="text-sm text-neutral-400">{experience.designation}</p>
            {isSubExperience && (
              <p className="text-xs text-neutral-500">Product of OpenXcell</p>
            )}
          </div>
        </div>
        <p className="text-sm text-neutral-400 shrink-0">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>

      {/* Render sub-experiences */}
      {experience.subExperiences && experience.subExperiences.length > 0 && (
        <div className="space-y-4 border-l-2 border-neutral-700/50 pl-6 ml-6">
          {experience.subExperiences.map((subExp) => (
            <ExperienceItem
              key={subExp.companyName}
              experience={subExp}
              isSubExperience={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export async function Experience() {
  return (
    <SectionShell id="experience" className="pt-20">
      <h2 className="mb-8 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
        Work experience
      </h2>
      <ul className="flex flex-col gap-6">
        {EXPERIENCES.map((experience) => (
          <li key={experience.companyName}>
            <ExperienceItem experience={experience} />
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
