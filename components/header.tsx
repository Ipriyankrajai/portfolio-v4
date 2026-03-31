"use client";

import Link from "next/link";

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
      </ul>
    </nav>
  );
}
