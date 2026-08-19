import type { CSSProperties } from "react";

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

const SKILLS = [
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

const SKILL_GROUPS = [
  {
    label: "INTERFACE",
    tone: "skill-cyan",
    items: ["TypeScript", "Next.js", "React.js", "TailwindCSS"],
  },
  {
    label: "SYSTEMS",
    tone: "skill-lime",
    items: ["Node.js", "Express.js", "NestJS"],
  },
  {
    label: "DATA",
    tone: "skill-orange",
    items: ["PostgreSQL", "MySQL", "Supabase", "Firebase", "Drizzle", "Prisma"],
  },
];

function MarqueeRow({
  items,
  reverse = false,
  duration,
}: {
  items: typeof SKILLS;
  reverse?: boolean;
  duration: string;
}) {
  return (
    <div className={reverse ? "marquee-row marquee-reverse" : "marquee-row"}>
      <div
        className="marquee-track"
        style={{ "--marquee-duration": duration } as CSSProperties}
      >
        {[...items, ...items].map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div className="skill-tile" key={`${skill.name}-${index}`} title={skill.name}>
              <Icon />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className="approach-section" id="skills">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / SKILLS</p>
          <h2>
            The <i>toolkit.</i>
          </h2>
        </div>
        <span className="section-index">{SKILLS.length} TOOLS</span>
      </div>

      <div className="approach-layout">
        <div className="skill-rows" aria-label="Skills">
          {SKILL_GROUPS.map((group) => (
            <div className={`skill-row ${group.tone}`} key={group.label}>
              <span>{group.label}</span>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>

        <div className="stack-map" aria-hidden="true">
          <div className="stack-line line-a" />
          <div className="stack-line line-b" />
          <div className="stack-node node-core">
            <span>CORE</span>
            <b>FULL-STACK</b>
          </div>
          <div className="stack-node node-front">
            <span>01</span>
            <b>INTERFACE</b>
            <small>React · Next.js</small>
          </div>
          <div className="stack-node node-back">
            <span>02</span>
            <b>SYSTEMS</b>
            <small>Node · NestJS</small>
          </div>
          <div className="stack-node node-ai">
            <span>03</span>
            <b>DATA</b>
            <small>Postgres · Prisma</small>
          </div>
        </div>
      </div>

      <div className="skills-marquee" aria-hidden="true">
        <MarqueeRow items={SKILLS} duration="45s" />
        <MarqueeRow items={[...SKILLS].reverse()} reverse duration="38s" />
      </div>
    </section>
  );
}
