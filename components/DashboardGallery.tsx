"use client";

import { useState } from "react";

const dashboards = [
  {
    id: "aviation",
    title: "Aviation Safety Overview",
    subtitle: "Accident patterns · 2012–2021",
    copy: "Explore accident severity, geography, aircraft categories, and flight phases. Use country, year, and injury-level filters to investigate patterns across 12,368 recorded accidents.",
    image: "/dashboards/aviation-safety.png",
    alt: "Aviation safety dashboard with accident metrics, a world map, and annual trends",
    url: "https://public.tableau.com/app/profile/anil.yadav2018/viz/Aviation_Safety_Ready/AviationSafetyDashboard",
    embed: "https://public.tableau.com/views/Aviation_Safety_Ready/AviationSafetyDashboard?:embed=y&:showVizHome=no&:toolbar=yes",
    width: 1200,
    height: 1140,
  },
  {
    id: "resume",
    title: "Interactive Career & Resume",
    subtitle: "Career trajectory · Skills · Measurable impact",
    copy: "A visual exploration of my experience across the Indian Army, Amazon, and technology. Select career or domain bars to connect roles, skills, and reported outcomes.",
    image: "/dashboards/interactive-resume.png",
    alt: "Interactive resume dashboard showing career trajectory, experience mix, and capabilities",
    url: "https://public.tableau.com/app/profile/anil.yadav2018/viz/Anil_Resume_Ready/AnilYadavResume",
    embed: "https://public.tableau.com/views/Anil_Resume_Ready/AnilYadavResume?:embed=y&:showVizHome=no&:toolbar=yes",
    width: 1300,
    height: 1356,
  },
];

export function DashboardGallery() {
  const [active, setActive] = useState<string | null>(null);
  const selected = dashboards.find((dashboard) => dashboard.id === active);

  return (
    <section id="analytics" aria-labelledby="analytics-title" className="mt-16 scroll-mt-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-gold)]">
            Live projects / Tableau Public
          </p>
          <h2 id="analytics-title" className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-[-0.03em] md:text-5xl">
            Analytics &amp; dashboards
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--color-mute)]">
          From data to a story you can explore. Two interactive Tableau projects, built with
          ChatGPT assistance.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {dashboards.map((dashboard, index) => (
          <article key={dashboard.id} className="flex flex-col border border-[var(--color-line)] bg-[var(--color-ink-2)] transition hover:border-[var(--color-gold)]">
            <a href={dashboard.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${dashboard.title} on Tableau Public (new tab)`} className="block overflow-hidden border-b border-[var(--color-line)] bg-white">
              <img src={dashboard.image} alt={dashboard.alt} width={1470} height={779} loading="lazy" className="aspect-[16/9] w-full object-cover object-top transition duration-500 hover:scale-[1.02]" />
            </a>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <div className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.2em] uppercase">
                <span className="text-[var(--color-signal)]">0{index + 1} / Data analytics</span>
                <span className="flex items-center gap-2 text-[var(--color-gold)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" aria-hidden="true" />Live</span>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl tracking-[-0.03em]">{dashboard.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-gold-2)]">{dashboard.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-mute)]">{dashboard.copy}</p>
              <p className="mt-6 font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--color-mute)]">Tableau · Excel · Visual storytelling</p>
              <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-[var(--color-line)] pt-5">
                <a href={dashboard.url} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-gold)]">
                  Explore dashboard ↗<span className="sr-only"> (opens in a new tab)</span>
                </a>
                <button type="button" aria-expanded={active === dashboard.id} aria-controls="dashboard-viewer" onClick={() => setActive(active === dashboard.id ? null : dashboard.id)} className="hidden cursor-pointer font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--color-paper)] lg:inline-block">
                  {active === dashboard.id ? "Close preview −" : "Explore here +"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selected && (
        <div id="dashboard-viewer" className="mt-6 hidden border border-[var(--color-gold)] lg:block">
          <div className="flex items-center justify-between gap-4 bg-[var(--color-panel)] p-5">
            <h3 className="text-lg">{selected.title}</h3>
            <button type="button" onClick={() => setActive(null)} className="cursor-pointer font-mono text-xs text-[var(--color-gold)]">Close preview ×</button>
          </div>
          <div className="overflow-x-auto bg-white">
            <iframe key={selected.id} title={`${selected.title} — interactive Tableau dashboard`} src={selected.embed} width={selected.width} height={selected.height} loading="lazy" allowFullScreen className="block border-0" />
          </div>
        </div>
      )}
    </section>
  );
}
