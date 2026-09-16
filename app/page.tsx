import Link from "next/link";
import { education, journey, portfolio, profile } from "@/lib/content";
import { Footer, Nav } from "@/components/Chrome";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Education />
        <WorkPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 md:pt-36">
      <div className="pointer-events-none absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(212,177,95,0.16),transparent_62%)]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(92,108,255,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-7xl">
        <p className="reveal font-mono text-[11px] tracking-[0.32em] uppercase text-[var(--color-gold)]">
          {profile.kicker}
        </p>
        <h1 className="reveal mt-6 font-[family-name:var(--font-display)] text-[16vw] leading-[0.8] font-medium tracking-[-0.04em] sm:text-8xl lg:text-[9.2rem]">
          {profile.firstName}{" "}
          <span className="italic text-[var(--color-gold-2)]">{profile.lastName}</span>
        </h1>
        <div className="mt-10 grid max-w-7xl gap-10 lg:grid-cols-12">
          <p className="max-w-2xl font-light text-lg leading-relaxed text-[var(--color-mute)] lg:col-span-7 lg:text-xl">
            {profile.headline}. Strategy and transformation across Defence, FinTech, and Automotive —
            AI automation with the discipline of command.
          </p>
          <div className="frame p-6 lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-gold)]">
              Stationed
            </p>
            <p className="mt-3 text-lg">{profile.location}</p>
            <p className="mt-1 text-[var(--color-mute)]">EPGP · IIM Bangalore · PMP®</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#journey"
                className="border border-[var(--color-gold)] px-5 py-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] transition hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)]"
              >
                Career journey
              </a>
              <Link
                href="/portfolio"
                className="border border-[var(--color-line)] px-5 py-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-paper)] transition hover:border-[var(--color-paper)]"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4">
          {profile.metrics.map((m) => (
            <div key={m.label} className="bg-[var(--color-ink)] px-5 py-7">
              <p className="font-[family-name:var(--font-display)] text-4xl text-[var(--color-gold-2)] md:text-5xl">
                {m.value}
              </p>
              <p className="mt-3 max-w-[12rem] font-mono text-[10px] leading-relaxed tracking-[0.16em] uppercase text-[var(--color-mute)]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-[var(--color-line)] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--color-gold)]">
            01 — About
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-tight md:text-6xl">
            Military precision.
            <br />
            <span className="italic text-[var(--color-gold-2)]">Boardroom tempo.</span>
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-[var(--color-mute)]">
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-4">
            {profile.skills.map((s) => (
              <span
                key={s}
                className="border border-[var(--color-line)] px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--color-paper)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="border-t border-[var(--color-line)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--color-gold)]">
              02 — Career journey
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl md:text-6xl">
              From the LAC to
              <span className="italic text-[var(--color-gold-2)]"> Amazon.</span>
            </h2>
          </div>
          <p className="max-w-sm font-mono text-[11px] leading-relaxed tracking-[0.14em] uppercase text-[var(--color-mute)]">
            Selected chapters. Impact over titles. Every posting taught a different kind of command.
          </p>
        </div>

        <ol className="mt-16">
          {journey.map((job, i) => (
            <li
              key={job.org + job.period}
              className="group grid gap-6 border-t border-[var(--color-line)] py-10 md:grid-cols-12"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] text-[var(--color-gold)]">{job.accent}</p>
                <p className="mt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--color-mute)]">
                  {job.period}
                </p>
                <p className="mt-2 text-sm text-[var(--color-mute)]">{job.place}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
                  {job.org}
                </h3>
                <p className="mt-1 text-[var(--color-gold-2)]">{job.role}</p>
                <ul className="mt-5 space-y-3 text-[var(--color-mute)]">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-2 h-px w-6 shrink-0 bg-[var(--color-gold)]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                {i === journey.length - 1 ? null : (
                  <div className="mt-8 h-px w-0 bg-[var(--color-gold)] transition-all duration-500 group-hover:w-24" />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="border-t border-[var(--color-line)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--color-gold)]">
          03 — Formation
        </p>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-5xl">
              Schools that
              <span className="italic text-[var(--color-gold-2)]"> sharpened the edge.</span>
            </h2>
            <ul className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {education.map((ed) => (
                <li key={ed.school} className="flex items-start justify-between gap-6 py-5">
                  <div>
                    <p className="text-lg">{ed.school}</p>
                    <p className="mt-1 text-sm text-[var(--color-mute)]">{ed.credential}</p>
                  </div>
                  <p className="shrink-0 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--color-gold)]">
                    {ed.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-[var(--color-line)] bg-[var(--color-ink-2)] p-8">
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)]">
              Honors
            </p>
            <ul className="mt-8 space-y-8">
              {profile.honors.map((h) => (
                <li key={h.title}>
                  <p className="font-[family-name:var(--font-display)] text-2xl">{h.title}</p>
                  <p className="mt-2 text-sm text-[var(--color-mute)]">{h.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-mute)]">
              Certifications
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.certifications.map((c) => (
                <span key={c} className="text-sm text-[var(--color-paper)]">
                  {c}
                  <span className="mx-2 text-[var(--color-gold)]">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkPreview() {
  return (
    <section className="border-t border-[var(--color-line)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--color-gold)]">
              04 — Portfolio
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl md:text-6xl">
              Work, <span className="italic text-[var(--color-gold-2)]">incoming.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] md:inline"
          >
            Open archive →
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {portfolio.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex min-h-[280px] flex-col justify-between border border-[var(--color-line)] bg-[rgba(16,16,19,0.55)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-gold)]"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-gold)]">
                  {item.status} · {item.tag}
                </p>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-mute)]">{item.copy}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--color-line)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--color-gold)]">
          05 — Contact
        </p>
        <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-tight md:text-7xl">
          Let’s talk strategy, product, and the next operating system of work.
        </h2>
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="bg-[var(--color-gold)] px-6 py-4 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-ink)]"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-[var(--color-line)] px-6 py-4 font-mono text-[11px] tracking-[0.22em] uppercase"
          >
            LinkedIn profile
          </a>
        </div>
      </div>
    </section>
  );
}
