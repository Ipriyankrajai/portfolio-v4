"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/utils/nav";
import { useIsScrolled } from "@/hooks/use-is-scrolled";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function MobileNav() {
  const { isScrolled } = useIsScrolled();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="fixed right-4 top-4 z-50 flex items-center gap-4 rounded-full border p-2 shadow-xl sm:hidden">
          <div
            className={cn(
              "backdrop",
              !isScrolled && "bg-gradient-to-r from-neutral-900 to-background"
            )}
          />
          <div className="backdrop-edge" />
          <button className="flex items-center justify-center text-sm font-medium text-neutral-300 transition-colors hover:text-white">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-xl border-neutral-800 bg-neutral-950/90 backdrop-blur-sm sm:hidden">
        <VisuallyHidden>
          <DialogTitle>Navigation Menu</DialogTitle>
        </VisuallyHidden>
        <nav className="flex flex-col gap-4 p-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-neutral-300 transition-colors hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </DialogContent>
    </Dialog>
  );
}
