import Link from "next/link";
import { portfolio, profile } from "@/lib/content";
import { Footer, Nav } from "@/components/Chrome";
import { DashboardGallery } from "@/components/DashboardGallery";

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--color-gold)]">
            Archive / 00
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl tracking-[-0.04em] md:text-8xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-mute)]">
            Interactive analytics, case work, product builds, and live projects. Explore the
            Tableau dashboards below, alongside strategy and transformation work.
          </p>

          <section id="agentguard" aria-labelledby="agentguard-title" className="mt-16 scroll-mt-28 border border-[var(--color-line)] bg-[var(--color-ink-2)] p-6 md:p-10">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-gold)]">Featured build / AI governance</p>
            <h2 id="agentguard-title" className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-[-0.03em] md:text-5xl">AgentGuard</h2>
            <p className="mt-3 text-lg text-[var(--color-gold-2)]">AI agent security &amp; governance dashboard</p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--color-mute)]">An interactive product prototype for investigating agent risk, reviewing permissions, assigning ownership, and managing access approvals. Microsoft Fluent–inspired design combines colorful navigation with responsive layouts for desktop and phone.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[['Discover', 'Search the agent inventory', '#479ef5'], ['Investigate', 'Review risk & permissions', '#b99be6'], ['Govern', 'Manage owners & approvals', '#4ec9b0'], ['Respond', 'Apply controls & review audit events', '#e7bb64']].map(([label, detail, color]) => <div key={label} className="border border-[var(--color-line)] p-4" style={{borderTop: `3px solid ${color}`}}><p className="text-sm font-semibold" style={{color}}>{label}</p><p className="mt-2 text-xs text-[var(--color-mute)]">{detail}</p></div>)}
            </div>
            <p className="mt-5 max-w-3xl text-xs leading-relaxed text-[var(--color-mute)]">Built with ChatGPT assistance. Synthetic demonstration data; actions affect the browser session only. No production systems are connected.</p>
            <a href="/dashboards/agentguard.html" target="_blank" rel="noopener noreferrer" className="mt-7 inline-block border border-[var(--color-gold)] px-5 py-3 font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-gold)]">Explore interactive demo ↗<span className="sr-only"> (opens in a new tab)</span></a>
          </section>

          <DashboardGallery />

          <h2 className="mt-20 font-[family-name:var(--font-display)] text-4xl tracking-[-0.03em]">
            Case work &amp; builds
          </h2>

          <div className="mt-8 space-y-4">
            {portfolio.map((item, i) => (
              <article
                key={item.title}
                className="grid gap-8 border border-[var(--color-line)] bg-[rgba(18,18,24,0.55)] p-8 transition hover:border-[var(--color-gold)] md:grid-cols-12"
              >
                <p className="font-mono text-[11px] text-[var(--color-signal)] md:col-span-2">
                  0{i + 1}
                </p>
                <div className="md:col-span-10">
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-mute)]">
                    {item.status} · {item.tag}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-[-0.03em]">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[var(--color-mute)]">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border border-dashed border-[var(--color-gold)]/40 p-10 text-center">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-gold)]">
              Slot reserved
            </p>
            <p className="mt-4 font-[family-name:var(--font-serif)] text-3xl italic">
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
