import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionShell } from "@/components/section-shell";
import { SectionReveal } from "@/components/ui/section-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SOCIAL_LINKS } from "@/config";

export function Contact() {
  return (
    <SectionShell id="contact" className="relative flex flex-col gap-6 py-32">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-48 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--accent-pop)/0.06)] blur-[100px]" />
      </div>

      <SectionReveal>
        <h2 className="font-heading text-center text-xl font-bold tracking-tight text-white lg:text-2xl">
          Contact
        </h2>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <p className="text-center text-neutral-400">
          Wanna know more about my work? Got any questions? <br /> Or just want to
          say hi? Go ahead.
        </p>
      </SectionReveal>

      <SectionReveal delay={0.15} className="self-center">
        <MagneticButton>
          <Link
            aria-label="Contact me via email"
            href="mailto:priyankcodez@gmail.com"
            className="btn-accent btn-press inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-semibold"
          >
            Contact
          </Link>
        </MagneticButton>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <ul
          aria-label="Social and contact links"
          className="mt-4 flex items-center gap-8 self-center justify-center"
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
      </SectionReveal>
    </SectionShell>
  );
}
