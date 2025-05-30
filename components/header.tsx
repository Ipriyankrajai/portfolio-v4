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
          <li key={item.title} className="last:hidden last:sm:list-item">
            <Link
              href={item.link}
              className="rounded-sm px-1 py-0.5 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
