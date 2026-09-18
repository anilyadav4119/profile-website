import Link from "next/link";
import { education, journey, portfolio, profile } from "@/lib/content";
import { Footer, Nav } from "@/components/Chrome";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
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
    <section
      className="relative overflow-hidden bg-cover bg-center px-6 pb-16 pt-28 md:pt-32"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(5,5,6,0.78) 0%, rgba(5,5,6,0.42) 48%, rgba(5,5,6,0.22) 100%), url('/brands/iimb-academic.jpg')",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-ink)] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="reveal font-mono text-[11px] tracking-[0.34em] uppercase text-[var(--color-gold)]">
          {profile.kicker}
        </p>

        <div className="mt-6 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <AffiliationMarks />
            <h1 className="reveal reveal-d1 mt-5 whitespace-nowrap font-[family-name:var(--font-display)] text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {profile.firstName}{" "}
              <span className="font-[family-name:var(--font-serif)] italic text-[var(--color-gold-2)]">
                {profile.lastName}
              </span>
            </h1>
            <p className="reveal reveal-d2 mt-8 max-w-xl text-lg font-light leading-relaxed text-[var(--color-mute)] lg:text-xl">
              {profile.headline}. Strategy and transformation across Defence, FinTech, and
              Automotive — AI automation with the discipline of command.
            </p>
            <div className="reveal reveal-d3 mt-8 flex flex-wrap gap-3">
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
              <a
                href={profile.linkedinPdf}
                className="border border-[var(--color-line)] px-5 py-3 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-mute)] transition hover:text-[var(--color-paper)]"
              >
                LinkedIn PDF
              </a>
            </div>
          </div>

          <div className="reveal reveal-d2 ml-auto w-full max-w-[300px] lg:col-span-5 lg:max-w-[280px]">
            <div className="flex justify-center">
              <div className="frame relative inline-block">
                <span className="corner-bl" />
                <span className="corner-br" />
                <div className="bg-white p-1.5">
                  <img
                    src={profile.photo}
                    alt={`${profile.name} professional portrait`}
                    width={1237}
                    height={1280}
                    className="block h-[120px] w-auto max-w-none object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start justify-between gap-4 border-t border-[var(--color-line)] pt-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--color-gold)]">
                  Stationed
                </p>
                <p className="mt-1 text-sm">{profile.location}</p>
              </div>
              <p className="text-right text-xs text-[var(--color-mute)]">
                EPGP · IIM Bangalore
                <br />
                PMP®
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4">
          {profile.metrics.map((m) => (
            <div key={m.label} className="bg-[var(--color-ink)] px-5 py-7">
              <p className="font-[family-name:var(--font-serif)] text-4xl italic text-[var(--color-gold-2)] md:text-5xl">
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

function AffiliationMarks() {
  const marks = [
    {
      src: "/brands/indian-army.svg",
      alt: "Indian Army",
      className: "h-11 w-11 object-contain sm:h-12 sm:w-12",
      wrap: "bg-[#efe8d8]",
    },
    {
      src: "/brands/amazon-wordmark.svg",
      alt: "Amazon",
      className: "mx-auto h-6 w-[6.75rem] object-contain object-center sm:h-7 sm:w-32",
      wrap: "bg-[#efe8d8]",
    },
    {
      src: "/brands/iimb-logo.svg",
      alt: "IIM Bangalore",
      className: "h-11 w-14 object-contain sm:h-12 sm:w-16",
      wrap: "bg-[#efe8d8]",
    },
  ];

  return (
    <div className="reveal flex flex-wrap items-center gap-3">
      {marks.map((m) => (
        <div
          key={m.alt}
          className={`flex h-14 items-center justify-center border border-[var(--color-line)] px-3 ${m.wrap}`}
          title={m.alt}
        >
          {/* SVGs keep original brand colour; next/image is unused here on purpose */}
          <img src={m.src} alt={m.alt} className={m.className} />
        </div>
      ))}
    </div>
  );
}

function Ticker() {
  const items = [...profile.ticker, ...profile.ticker];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track py-3">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 px-6 font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--color-mute)]"
          >
            <span className="text-[var(--color-signal)]">/</span>
            {item}
          </span>
        ))}
      </div>
    </div>
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
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1.05] tracking-[-0.03em] md:text-6xl">
            Military precision.
            <br />
            <span className="font-[family-name:var(--font-serif)] italic text-[var(--color-gold-2)]">
              Boardroom tempo.
            </span>
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-[var(--color-mute)] md:col-span-8">
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
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-[-0.03em] md:text-6xl">
              From the LAC to
              <span className="font-[family-name:var(--font-serif)] italic text-[var(--color-gold-2)]">
                {" "}
                Amazon.
              </span>
            </h2>
          </div>
          <p className="max-w-sm font-mono text-[11px] leading-relaxed tracking-[0.14em] uppercase text-[var(--color-mute)]">
            Selected chapters. Impact over titles. Every posting taught a different kind of command.
          </p>
        </div>

        <ol className="relative mt-16 md:before:absolute md:before:bottom-0 md:before:left-[5.4rem] md:before:top-0 md:before:w-px md:before:bg-[var(--color-line)]">
          {journey.map((job) => (
            <li
              key={job.org + job.period}
              className="group grid gap-6 border-t border-[var(--color-line)] py-10 md:grid-cols-12"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] text-[var(--color-signal)]">{job.accent}</p>
                <p className="mt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--color-mute)]">
                  {job.period}
                </p>
                <p className="mt-2 text-sm text-[var(--color-mute)]">{job.place}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-[-0.03em] md:text-4xl">
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
                <div className="mt-8 h-px w-0 bg-[var(--color-gold)] transition-all duration-500 group-hover:w-24" />
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
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-[-0.03em]">
              Schools that
              <span className="font-[family-name:var(--font-serif)] italic text-[var(--color-gold-2)]">
                {" "}
                sharpened the edge.
              </span>
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
                  <p className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.02em]">
                    {h.title}
                  </p>
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
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl tracking-[-0.03em] md:text-6xl">
              Work,{" "}
              <span className="font-[family-name:var(--font-serif)] italic text-[var(--color-gold-2)]">
                incoming.
              </span>
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
              className="group flex min-h-[280px] flex-col justify-between border border-[var(--color-line)] bg-[rgba(18,18,24,0.7)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-gold)]"
            >
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-gold)]">
                  {item.status} · {item.tag}
                </p>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl leading-tight tracking-[-0.03em]">
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
        <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[1.05] tracking-[-0.03em] md:text-7xl">
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
