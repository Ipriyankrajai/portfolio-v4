"use client";

import Marquee from "@/components/ui/marquee";

import { SKILLS } from "./skills";
import { useHasTouchScreen } from "@/hooks/use-has-touch-screen";

export function SkillsMarquee() {
  const hasTouchScreen = useHasTouchScreen();

  return (
    <div className="relative mt-8 flex flex-col gap-3 overflow-hidden rounded-xl glass-card p-6 md:shadow-xl">
      <Marquee pauseOnHover={!hasTouchScreen} className="[--gap:1.5rem]">
        {SKILLS.map((skill) => {
          const Icon = skill.icon;

          return (
            <MarqueeItem key={skill.name}>
              <Icon className="size-7" />
            </MarqueeItem>
          );
        })}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover={!hasTouchScreen}
        className="[--gap:1.5rem]"
      >
        {SKILLS.map((skill) => {
          const Icon = skill.icon;

          return (
            <MarqueeItem key={skill.name}>
              <Icon className="size-7" />
            </MarqueeItem>
          );
        })}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#09090b]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#09090b]"></div>
    </div>
  );
}

function MarqueeItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-14 items-center justify-center rounded-xl border border-white/10 bg-white/5">
      {children}
    </div>
  );
}
