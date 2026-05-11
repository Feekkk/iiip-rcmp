import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Building2, Target, Sparkles, Handshake, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/ace/OurTeam')({
  component: OurTeam,
  head: () => ({
    meta: [
      { title: "Our Team | Advancement and Continuing Education" },
      { name: "description", content: "Meet the expert instructors and staff behind ACE UniKL RCMP's success." },
    ],
  }),
})

function OurTeam() {
  const router = useRouter()

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground" style={{ background: "var(--gradient-warm)" }}>
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--bokeh)" }} />
      
      <section className="relative z-10 px-10 py-20 md:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <button
              onClick={() => router.navigate({ to: '/ace' })}
              className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-foreground/60 hover:text-foreground transition-colors"
            >
              ← Back to ACE
            </button>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
                <Building2 className="h-4 w-4" />
                About ACE
              </p>
              <h1 className="text-[clamp(2.75rem,6.5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground">
                Advancing People,
                <br />
                Strengthening Organizations
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
                Committed to empowering professionals and communities through lifelong learning, practical training and evidence-based public health initiatives. 
                Our work supports workforce upskilling, promotes cross‑sector collaboration and accelerates knowledge transfer between academia and industry. 
              </p>
            </div>

            <div>
              <div
                className="group relative overflow-hidden rounded-3xl border border-foreground/15"
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(28px) saturate(140%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(140%)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-red-700/10 to-transparent" />
                  <div className="h-[320px] w-full overflow-hidden rounded-2xl">
                    <img src={`${import.meta.env.BASE_URL}ace-about.jpeg`} alt="ACE Team" className="h-full w-full object-cover" />
                  </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-foreground/15 bg-foreground/[0.06] p-8 md:p-10">
            <h2 className="text-3xl font-bold text-foreground">What We Do</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-foreground/15 bg-foreground/[0.04] p-5">
                <h3 className="font-semibold text-foreground">Flexible Learning Solutions</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Deliver flexible, modular learning to accommodate working professionals.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/15 bg-foreground/[0.04] p-5">
                <h3 className="font-semibold text-foreground">Strategic Partnerships</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Partner with industry and healthcare providers to ensure relevance.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/15 bg-foreground/[0.04] p-5">
                <h3 className="font-semibold text-foreground">Community Upskilling Initiatives</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Maintain recognised provider status (HRD Corp claimable programmes) and procurement registration to support public-sector access.
                </p>
              </div>
              <div className="rounded-xl border border-foreground/15 bg-foreground/[0.04] p-5">
                <h3 className="font-semibold text-foreground">Future Skills Labs</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  Hands-on workshops focused on digital, technical, and workplace capabilities for tomorrow's economy.
                </p>
              </div>
            </div>
            <button
              onClick={() => router.navigate({ to: '/ace/OurServices' })}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}