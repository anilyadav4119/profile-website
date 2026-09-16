import Link from "next/link";
import { profile } from "@/lib/content";

const links = [
  { href: "/#about", hash: "#about", label: "About" },
  { href: "/#journey", hash: "#journey", label: "Journey" },
  { href: "/portfolio", hash: null, label: "Portfolio" },
  { href: "/#contact", hash: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-[var(--color-line)] bg-[rgba(7,7,8,0.72)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-[11px] tracking-[0.28em] text-[var(--color-gold-2)]">
          AY / 27
        </Link>
        <nav className="flex items-center gap-5 md:gap-8">
          {links.map((l) =>
            l.hash ? (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-mute)] transition hover:text-[var(--color-paper)] md:text-[11px] md:tracking-[0.22em]"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-mute)] transition hover:text-[var(--color-paper)] md:text-[11px] md:tracking-[0.22em]"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)]"
        >
          LinkedIn
        </a>
      </div>
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
