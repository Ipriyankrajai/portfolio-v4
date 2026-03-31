import { DrizzleIcon } from "@/components/icons/drizzle-icon";
import { ExpressJsIcon } from "@/components/icons/expressjs-icon";
import { FirebaseIcon } from "@/components/icons/firebase-icon";
import { MySQLIcon } from "@/components/icons/mysql-icon";
import { NestJSIcon } from "@/components/icons/nestjs-icon";
import { NextJsIcon } from "@/components/icons/nextjs-icon";
import { NodeJsIcon } from "@/components/icons/nodejs-icon";
import { PostgreSQLIcon } from "@/components/icons/postgresql-icon";
import { PrismaIcon } from "@/components/icons/prisma-icon";
import { ReactJsIcon } from "@/components/icons/reactjs-icon";
import { SupabaseIcon } from "@/components/icons/supabase-icon";
import { TailwindCSSIcon } from "@/components/icons/tailwindcss-icon";
import { TypeScriptIcon } from "@/components/icons/typescript-icon";
import { SectionShell } from "@/components/section-shell";
import { SectionReveal } from "@/components/ui/section-reveal";

import { SkillsMarquee } from "./skills-marquee";

export const SKILLS = [
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "React.js", icon: ReactJsIcon },
  { name: "TailwindCSS", icon: TailwindCSSIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "Express.js", icon: ExpressJsIcon },
  { name: "NestJS", icon: NestJSIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "MySQL", icon: MySQLIcon },
  { name: "Supabase", icon: SupabaseIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Drizzle", icon: DrizzleIcon },
  { name: "Prisma", icon: PrismaIcon },
];

export function Skills() {
  return (
    <SectionShell id="skills" className="pt-20">
      <SectionReveal>
        <h2 className="mb-8 font-heading text-xl font-bold tracking-tight text-white lg:text-2xl">
          Skills
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <ul
          aria-label="Skills"
          className="flex flex-wrap items-center gap-3"
        >
          {SKILLS.map((skill) => {
            const Icon = skill.icon;

            return (
              <li
                key={skill.name}
                className="flex select-none items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-400 transition-[color,border-color,transform] duration-200 ease-out-expo hover:border-white/20 hover:text-white hover:scale-105"
              >
                <Icon className="size-4" />
                <span className="font-medium">{skill.name}</span>
              </li>
            );
          })}
        </ul>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <SkillsMarquee />
      </SectionReveal>
    </SectionShell>
  );
}
