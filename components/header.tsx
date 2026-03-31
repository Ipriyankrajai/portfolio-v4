"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/utils/nav";
import { useIsScrolled } from "@/hooks/use-is-scrolled";
import { useActiveSection } from "@/hooks/use-active-section";

export function Header() {
  const { isScrolled } = useIsScrolled();
  const activeSection = useActiveSection();

  return (
    <nav aria-label="Site navigation" className="fixed z-50 w-screen">
      <ul className="absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-4 rounded-full border px-[22px] py-2 shadow-xl">
        <div
          className={cn(
            "backdrop transition-[background-color] duration-300 ease-out-expo",
            !isScrolled && "bg-gradient-to-r from-neutral-900 to-background"
          )}
        />
        <div className="backdrop-edge" />
        {NAV_ITEMS.map((item) => {
          const sectionId = item.link.replace("/#", "").replace("/", "");
          const isActive = activeSection === sectionId;

          return (
            <li key={item.title} className="relative last:hidden last:sm:list-item">
              <Link
                href={item.link}
                className={cn(
                  "rounded-sm px-1 py-0.5 text-sm font-medium transition-colors duration-200 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100",
                  isActive
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                )}
              >
                {item.title}
              </Link>
              <span
                className="nav-active-dot"
                data-active={isActive}
                aria-hidden="true"
              />
            </li>
          );
        })}

        {/* Blog — separate page, visually distinct */}
        <li className="relative ml-1 hidden sm:list-item">
          <Link
            href="/blog"
            className="group relative inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.05] px-3 py-1 text-sm font-medium text-neutral-300 transition-all duration-200 ease-out-expo hover:border-accent-pop/40 hover:bg-accent-pop/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 active:scale-[0.97]"
          >
            Blog
            <ArrowUpRight
              className="h-3 w-3 opacity-50 transition-all duration-200 ease-out-expo group-hover:translate-x-[1px] group-hover:-translate-y-[1px] group-hover:opacity-100"
              strokeWidth={2.5}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
