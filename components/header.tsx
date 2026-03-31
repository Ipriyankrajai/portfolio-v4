"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/utils/nav";
import { useIsScrolled } from "@/hooks/use-is-scrolled";

export function Header() {
  const { isScrolled } = useIsScrolled();

  return (
    <nav aria-label="Site navigation" className="fixed z-50 w-screen">
      <ul className="absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-4 rounded-full border px-[22px] py-2 shadow-xl">
        <div
          className={cn(
            "backdrop",
            !isScrolled && "bg-gradient-to-r from-neutral-900 to-background"
          )}
        />
        <div className="backdrop-edge" />
        {NAV_ITEMS.map((item) => (
          <li key={item.title}>
            <Link
              href={item.link}
              className="rounded-sm px-1 py-0.5 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              {item.title}
            </Link>
          </li>
        ))}

        {/* Blog — separate page, styled as button to signal navigation away */}
        <li className="hidden sm:list-item">
          <Link
            href="/blog"
            className="blog-nav-btn group relative inline-flex items-center gap-1 rounded-full border border-neutral-700 bg-white/[0.06] px-3 py-1 text-sm font-medium text-neutral-200 transition-all duration-200 hover:border-neutral-500 hover:bg-white/[0.1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 active:scale-[0.97]"
          >
            Blog
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="arrow-icon transition-transform duration-200 group-hover:translate-x-[2px]"
              aria-hidden="true"
            >
              <path
                d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
