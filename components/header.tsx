"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/utils/nav";
import { useIsScrolled } from "@/hooks/use-is-scrolled";

function Logo() {
  return (
    <motion.div
      className="group/logo relative flex items-center justify-center size-9 cursor-pointer"
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Outer border — static anchor */}
      <div className="absolute inset-0 rounded-[10px] border border-neutral-700/50 transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/logo:border-neutral-500/50" />
      {/* Inner container — lifts on hover */}
      <motion.div
        className="relative size-[30px] rounded-[7px] border-[1.5px] border-neutral-500 bg-neutral-900/80 flex items-center justify-center"
        whileHover={{
          y: -2,
          borderColor: "rgb(212 212 212)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        <span
          className="text-[14px] font-bold leading-none text-neutral-100 group-hover/logo:text-white select-none transition-colors duration-200"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          P
        </span>
      </motion.div>
    </motion.div>
  );
}

function MenuToggle({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <button
      onClick={toggle}
      className="relative z-50 flex h-8 w-8 items-center justify-center rounded-md text-neutral-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 sm:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="flex h-4 w-5 flex-col justify-between">
        <motion.span
          className="block h-[1.5px] w-full rounded-full bg-current"
          animate={
            isOpen ? { rotate: 45, y: 7, width: "100%" } : { rotate: 0, y: 0 }
          }
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        />
        <motion.span
          className="block h-[1.5px] w-full rounded-full bg-current"
          animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.15 }}
        />
        <motion.span
          className="block h-[1.5px] w-full rounded-full bg-current"
          animate={
            isOpen
              ? { rotate: -45, y: -7, width: "100%" }
              : { rotate: 0, y: 0 }
          }
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </button>
  );
}

export function Header() {
  const { isScrolled } = useIsScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav aria-label="Site navigation" className="fixed z-50 w-screen">
        {/* Desktop nav pill */}
        <ul
          className={cn(
            "absolute left-1/2 top-4 hidden -translate-x-1/2 items-center gap-4 rounded-full px-[22px] py-2 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] sm:flex",
            isScrolled
              ? "border border-white/[0.1] shadow-lg shadow-black/20"
              : "border border-white/[0.06] shadow-none"
          )}
        >
          <div
            className={cn(
              "backdrop transition-opacity duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
              isScrolled ? "opacity-100" : "opacity-0"
            )}
          />
          <div
            className={cn(
              "backdrop-edge transition-opacity duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
              isScrolled ? "opacity-100" : "opacity-0"
            )}
          />

          {/* Logo in desktop nav */}
          <li>
            <Link href="/">
              <Logo />
            </Link>
          </li>

          {/* Separator */}
          <li aria-hidden="true" className="h-4 w-px bg-neutral-700/50" />

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
          <li>
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

        {/* Mobile top bar */}
        <div
          className={cn(
            "flex items-center justify-between px-5 py-4 sm:hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
            isScrolled
              ? "bg-[hsl(var(--background)/0.4)] backdrop-blur-xl border-b border-white/[0.08] shadow-[0_1px_12px_rgba(0,0,0,0.3)]"
              : "bg-transparent border-b border-transparent"
          )}
        >
          <Link href="/" onClick={closeMobile}>
            <Logo />
          </Link>
          <MenuToggle
            isOpen={mobileOpen}
            toggle={() => setMobileOpen((o) => !o)}
          />
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-neutral-950/95 backdrop-blur-md sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.ul
              className="flex flex-col items-center gap-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                },
                closed: {
                  transition: {
                    staggerChildren: 0.03,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {[...NAV_ITEMS, { title: "Blog", link: "/blog" }].map((item) => (
                <motion.li
                  key={item.title}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 16 },
                  }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    href={item.link}
                    onClick={closeMobile}
                    className="text-2xl font-medium text-neutral-300 transition-colors duration-200 hover:text-white"
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
