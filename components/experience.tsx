import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/section-shell";
import { EXPERIENCES } from "@/config";

export async function Experience() {
  return (
    <SectionShell id="experience" className="pt-20">
      <h2 className="mb-6 bg-gradient-to-r from-neutral-300 to-neutral-700 bg-clip-text text-xl font-bold text-transparent lg:text-2xl">
        Work experience
      </h2>

      <ul className="flex flex-col gap-5">
        {EXPERIENCES.map((experience) => (
          <li key={experience.companyName} className="flex justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-full border p-1">
                <Image
                  src={experience.companyImageUrl}
                  alt={`${experience.companyName} logo`}
                  width={36}
                  height={36}
                  className="size-9 rounded-full border-border"
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
                      "h-auto gap-1.5 self-start p-0 text-base font-semibold hover:bg-transparent hover:underline active:bg-transparent"
                    )}
                  >
                    {experience.companyName}
                    <ExternalLink className="size-4" />
                  </Link>
                ) : (
                  <span className="font-semibold">
                    {experience.companyName}
                  </span>
                )}

                <p className="text-sm text-neutral-400">
                  {experience.designation}
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-400">
              {experience.startDate} - {experience.endDate}
            </p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
