"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { NAV_ITEMS } from "@/utils/nav";
import { PROJECTS, SOCIAL_LINKS } from "@/config";

const EMAIL = "priyankcodez@gmail.com";

type PostRef = { title: string; slug: string };

type Command = {
  id: string;
  group: string;
  label: string;
  hint: string;
  run: () => void;
};

const GROUP_ORDER = ["NAVIGATE", "BLOG", "PROJECTS", "CONNECT"];

export function SiteChrome({ posts }: { posts: PostRef[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
        setQuery("");
      }
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const commands = useMemo<Command[]>(() => {
    const goToSection = (hash: string) => {
      if (pathname === "/") {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(`/#${hash}`);
      }
    };

    return [
      ...NAV_ITEMS.map((item) => ({
        id: `nav-${item.title}`,
        group: "NAVIGATE",
        label: item.title,
        hint: "↓",
        run: () => goToSection(item.link.replace("/#", "")),
      })),
      {
        id: "blog-index",
        group: "BLOG",
        label: "All posts",
        hint: "→",
        run: () => router.push("/blog"),
      },
      ...posts.map((post) => ({
        id: `post-${post.slug}`,
        group: "BLOG",
        label: post.title,
        hint: "→",
        run: () => router.push(`/blog/${post.slug}`),
      })),
      ...PROJECTS.map((project) => ({
        id: `project-${project.id}`,
        group: "PROJECTS",
        label: `${project.name} — live`,
        hint: "↗",
        run: () => window.open(project.demo_url, "_blank", "noopener,noreferrer"),
      })),
      {
        id: "resume",
        group: "CONNECT",
        label: "Resume",
        hint: "↗",
        run: () => window.open("/resume.pdf", "_blank", "noopener,noreferrer"),
      },
      ...SOCIAL_LINKS.map((social) => ({
        id: `social-${social.name}`,
        group: "CONNECT",
        label: social.name,
        hint: "↗",
        run: () => window.open(social.link, "_blank", "noopener,noreferrer"),
      })),
      {
        id: "email",
        group: "CONNECT",
        label: `Copy email — ${EMAIL}`,
        hint: "⏎",
        run: () => {},
      },
    ];
  }, [pathname, posts, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.group}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  const groups = GROUP_ORDER.map((name) => ({
    name,
    items: filtered.filter((command) => command.group === name),
  })).filter((group) => group.items.length > 0);

  const runCommand = (command: Command) => {
    if (command.id === "email") {
      navigator.clipboard?.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
        close();
      }, 1200);
      return;
    }
    command.run();
    close();
  };

  return (
    <>
      <nav className="topbar" aria-label="Site navigation">
        <Link className="wordmark" href="/">
          <span className="mark">PR</span>
          <span>
            PRIYANK
            <br />
            <i>RAJAI</i>
          </span>
        </Link>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link key={item.title} href={item.link}>
              {item.title}
            </Link>
          ))}
          <Link href="/blog">
            Blog<span>→</span>
          </Link>
        </div>
        <button
          className="command-trigger"
          onClick={() => setOpen(true)}
          aria-label="Open command palette"
        >
          <span>⌘</span> K <b>Command</b>
        </button>
      </nav>

      {open && (
        <div className="palette-backdrop" role="presentation" onClick={close}>
          <div
            className="palette"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="palette-input">
              <span>⌘</span>
              <input
                autoFocus
                placeholder="Type a command or search..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && filtered.length > 0) {
                    runCommand(filtered[0]);
                  }
                }}
              />
            </div>
            <div className="palette-groups">
              {groups.length === 0 && (
                <p className="palette-empty">NO RESULTS — ESC TO CLOSE</p>
              )}
              {groups.map((group) => (
                <div className="palette-group" key={group.name}>
                  <small>{group.name}</small>
                  {group.items.map((command) => (
                    <button key={command.id} onClick={() => runCommand(command)}>
                      {command.id === "email" && copied
                        ? "Email copied ✓"
                        : command.label}
                      <kbd>{command.hint}</kbd>
                    </button>
                  ))}
                </div>
              ))}
            </div>
            <div className="palette-footer">
              <span>ESC TO CLOSE</span>
              <span>PRIYANK OS / 4.0</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
