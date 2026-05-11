import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutUs,
  head: () => ({
    meta: [
      { title: "About Us — IIIP UniKL RCMP" },
      { name: "description", content: "Learn more about IIIP UniKL RCMP and our mission to empower future leaders through global, industrial and institutional partnerships." },
    ],
  }),
});

function AboutUs() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground" style={{ background: "var(--gradient-warm)" }}>
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--bokeh)" }} />

      {/* Header with back button */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-10 pt-10 md:px-16">
        <button
          onClick={() => router.navigate({ to: "/" })}
          className="group mb-8 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </button>

        <div className="animate-fade-in">
          <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-foreground/50">
            About Us
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground">
            IIIP UNIKL RCMP
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-foreground/70">
            A premier ecosystem of partnerships connecting students, industry and institutions.
            Shaping the next generation of globally adaptive leaders.
          </p>
        </div>
      </section>

      {/* Staff Image Section */}
      <section className="relative z-10 mx-auto mt-16 max-w-[1400px] px-10 md:px-16">
        <div className="overflow-hidden rounded-3xl" style={{ boxShadow: "var(--shadow-soft)" }}>
          <img
            src="/iiip.png"
            alt="IIIP UniKL RCMP Staff"
            className="h-auto w-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.currentTarget.src = "data:image/svg+xml,%3Csvg width='800' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23f3f4f6' width='800' height='400'/%3E%3Ctext fill='%239ca3af' font-family='Arial' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EStaff Image%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
      </section>

      {/* Description Section */}
      <section className="relative z-10 mx-auto mt-16 max-w-[1400px] px-10 pb-24 md:px-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="animate-fade-in">
            <h2 className="mb-6 text-2xl font-light tracking-tight text-foreground">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed text-foreground/70">
              IIIP UniKL RCMP is dedicated to fostering comprehensive partnerships that bridge the gap between academia, industry, and global institutions. We strive to create an ecosystem where students can develop practical skills, industries can access top talent, and institutions can collaborate on innovative solutions.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="mb-6 text-2xl font-light tracking-tight text-foreground">
              Our Vision
            </h2>
            <p className="text-base leading-relaxed text-foreground/70">
              To become the leading hub for international, industrial, and institutional partnerships in medical education, producing graduates who are not only academically excellent but also industry-ready and globally competitive.
            </p>
          </div>
        </div>

        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="mb-8 text-3xl font-light tracking-tight text-foreground">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-foreground/10 p-6" style={{ background: "var(--glass-bg)" }}>
              <h3 className="mb-3 text-lg font-medium text-foreground">Excellence</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                Committed to maintaining the highest standards in education, research, and partnership development.
              </p>
            </div>
            <div className="rounded-2xl border border-foreground/10 p-6" style={{ background: "var(--glass-bg)" }}>
              <h3 className="mb-3 text-lg font-medium text-foreground">Innovation</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                Embracing creative solutions and cutting-edge approaches to meet evolving industry needs.
              </p>
            </div>
            <div className="rounded-2xl border border-foreground/10 p-6" style={{ background: "var(--glass-bg)" }}>
              <h3 className="mb-3 text-lg font-medium text-foreground">Collaboration</h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                Building strong, sustainable partnerships that benefit all stakeholders in our ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}