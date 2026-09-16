import Link from "next/link";
import { portfolio, profile } from "@/lib/content";
import { Footer, Nav } from "@/components/Chrome";

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--color-gold)]">
            Archive / 00
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl md:text-8xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-mute)]">
            A holding space for case work, product builds, and live projects. The Amadeus engagement
            is in motion; additional studies will land here as they clear confidentiality.
          </p>

          <div className="mt-16 space-y-4">
            {portfolio.map((item, i) => (
              <article
                key={item.title}
                className="grid gap-8 border border-[var(--color-line)] p-8 md:grid-cols-12"
              >
                <p className="font-mono text-[11px] text-[var(--color-gold)] md:col-span-2">
                  0{i + 1}
                </p>
                <div className="md:col-span-10">
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-mute)]">
                    {item.status} · {item.tag}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl">{item.title}</h2>
                  <p className="mt-4 max-w-2xl text-[var(--color-mute)]">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border border-dashed border-[var(--color-gold)]/40 p-10 text-center">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-gold)]">
              Slot reserved
            </p>
            <p className="mt-4 font-[family-name:var(--font-display)] text-3xl">
              Next case study — drop files here when ready.
            </p>
            <p className="mt-3 text-sm text-[var(--color-mute)]">
              This page is wired for future work. Link decks, product URLs, or write-ups without
              changing the architecture.
            </p>
            <Link
              href={`mailto:${profile.email}`}
              className="mt-8 inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-gold)]"
            >
              Brief a collaboration →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
