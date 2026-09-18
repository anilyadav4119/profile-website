"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/content";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#journey", label: "Journey" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-[var(--color-line)] bg-[rgba(5,5,6,0.78)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-[11px] tracking-[0.32em] text-[var(--color-gold-2)]">
          AY / 27
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.href.includes("#") ? (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-mute)] transition hover:text-[var(--color-paper)]"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-mute)] transition hover:text-[var(--color-paper)]"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] sm:inline"
          >
            LinkedIn
          </a>
          <button
            type="button"
            className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-paper)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) =>
              l.href.includes("#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-[12px] tracking-[0.22em] uppercase text-[var(--color-paper)]"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-[12px] tracking-[0.22em] uppercase text-[var(--color-paper)]"
                >
                  {l.label}
                </Link>
              ),
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-mute)]">
          © {new Date().getFullYear()} {profile.name} · Bengaluru
        </p>
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-mute)]">
          Enterprise, with an edge.
        </p>
      </div>
    </footer>
  );
}
