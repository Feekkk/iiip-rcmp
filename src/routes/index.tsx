import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroBuilding from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IIIP UniKL RCMP — International, Industrial & Institutional Partnership" },
      { name: "description", content: "IIIP UniKL RCMP unites global, industrial and institutional partnerships to empower future leaders through ACE, IL, TEKNOPUTRA, UIO and CWAL." },
    ],
  }),
});

const links = [
  { id: "ACE", title: "Academic & Corporate Engagement", desc: "Strategic alliances bridging academia with leading corporations to co-create knowledge, talent pipelines and applied research." },
  { id: "IL", title: "Industrial Linkages", desc: "Curated partnerships with industry leaders enabling internships, real-world projects and industry-driven curricula." },
  { id: "TEKNOPUTRA", title: "Innovation & Entrepreneurship", desc: "A launchpad nurturing student innovators, technopreneurs and breakthrough ventures from concept to market." },
  { id: "UIO", title: "University–Industry Office", desc: "The single gateway connecting industry needs with university capabilities — research, consultancy and talent." },
  { id: "CWAL", title: "Centre for Work & Adaptive Learning", desc: "Adaptive, work-integrated learning programs preparing graduates for evolving global workplaces." },
];

const stats = [
  { kpi: "42+", label: "Global Reach" },
  { kpi: "300+", label: "Industry Ready" },
  { kpi: "15K", label: "Empowering Leadership" },
];

function Index() {
  const [hover, setHover] = useState<string | null>(null);
  const active = links.find((l) => l.id === hover);

  return (
    <main
      className="relative min-h-screen overflow-hidden text-foreground"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--bokeh)" }} />

      {/* top bar */}
      <header className="relative z-20 flex items-center justify-between px-10 py-8 md:px-16">
        <div className="text-[11px] font-medium uppercase tracking-[0.32em] text-foreground/70">
          UniKL · RCMP
        </div>
        <nav className="hidden gap-10 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground/60 md:flex">
          <a href="#" className="transition hover:text-foreground">About</a>
          <a href="#" className="transition hover:text-foreground">Programs</a>
          <a href="#" className="transition hover:text-foreground">Contact</a>
        </nav>
      </header>

      {/* hero */}
      <section className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-10 pb-24 pt-10 md:px-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
        <div className="flex flex-col justify-between">
          <div className="animate-fade-in">
            <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-foreground/50">
              International · Industrial · Institutional
            </div>
            <h1 className="text-[clamp(3rem,7.5vw,7rem)] font-light leading-[0.95] tracking-[-0.04em] text-foreground">
              IIIP
              <span className="block font-extralight text-foreground/80">UniKL RCMP</span>
            </h1>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-foreground/65">
              A premier ecosystem of partnerships connecting students, industry and institutions —
              shaping the next generation of globally adaptive leaders.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-[28px]" style={{ boxShadow: "var(--shadow-soft)" }}>
            <img
              src={heroBuilding}
              alt="Modern university glass atrium with collaborative meeting space lit by warm sunlight"
              width={1920}
              height={1080}
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
          </div>
        </div>

        {/* nav list + glass card */}
        <div
          className="relative flex flex-col justify-center"
          onMouseLeave={() => setHover(null)}
        >
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onMouseEnter={() => setHover(l.id)}
                  className={`group flex w-full items-center justify-between border-b border-foreground/10 py-5 text-left transition-all duration-300 ${
                    hover === l.id ? "pl-4" : "pl-0"
                  }`}
                >
                  <span
                    className={`text-2xl font-light tracking-[0.04em] transition-colors duration-300 md:text-3xl ${
                      hover === l.id ? "text-foreground" : "text-foreground/55"
                    }`}
                  >
                    {l.id}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-[0.3em] transition-all duration-300 ${
                      hover === l.id ? "translate-x-0 text-foreground/70 opacity-100" : "translate-x-2 opacity-0"
                    }`}
                  >
                    Explore →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* glass description card */}
          <div
            className={`pointer-events-none mt-8 rounded-2xl border p-7 transition-all duration-500 ${
              active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{
              background: "var(--glass-bg)",
              borderColor: "var(--glass-border)",
              backdropFilter: "blur(28px) saturate(140%)",
              WebkitBackdropFilter: "blur(28px) saturate(140%)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="text-[10px] font-medium uppercase tracking-[0.35em] text-foreground/50">
              {active?.id ?? "—"}
            </div>
            <div className="mt-2 text-lg font-light tracking-tight text-foreground">
              {active?.title ?? ""}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {active?.desc ?? ""}
            </p>
          </div>
        </div>
      </section>

      {/* footer stats */}
      <footer className="relative z-10 border-t border-foreground/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px bg-foreground/10 px-0 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start gap-3 px-10 py-12 md:px-16"
              style={{ background: "transparent" }}
            >
              <div className="text-4xl font-extralight tracking-tight text-foreground md:text-5xl">
                {s.kpi}
              </div>
              <div className="text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/55">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-6 text-[10px] uppercase tracking-[0.3em] text-foreground/40 md:px-16">
          <span>© IIIP UniKL RCMP</span>
          <span>Empowering Leadership · Globally</span>
        </div>
      </footer>
    </main>
  );
}
