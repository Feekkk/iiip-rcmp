import { createFileRoute } from '@tanstack/react-router'
import { Mail, Calendar, TrendingUp, Bell, Star } from 'lucide-react'

export const Route = createFileRoute('/ace/Newsletters')({
  component: Newsletters,
  head: () => ({
    meta: [
      { title: "Newsletters — ACE | Advancement and Continuing Education" },
      { name: "description", content: "Stay updated with the latest news and insights from ACE UniKL RCMP." },
    ],
  }),
})

function Newsletters() {
  const newsletters = [
    {
      icon: Mail,
      title: "Weekly Digest",
      description: "Get curated content delivered to your inbox every week with the latest industry trends and ACE updates.",
      frequency: "Every Monday"
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Deep analysis of industry trends, research findings, and professional development opportunities.",
      frequency: "Monthly"
    },
    {
      icon: Calendar,
      title: "Event Updates",
      description: "Never miss important deadlines, registration dates, and upcoming training opportunities.",
      frequency: "As needed"
    },
    {
      icon: Bell,
      title: "Announcements",
      description: "Breaking news about new programs, partnerships, and institutional achievements.",
      frequency: "Real-time"
    },
    {
      icon: Star,
      title: "Success Stories",
      description: "Inspiring stories from our alumni and their career achievements after completing ACE programs.",
      frequency: "Quarterly"
    }
  ]

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground" style={{ background: "var(--gradient-warm)" }}>
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--bokeh)" }} />
      
      <section className="relative z-10 px-10 py-20 md:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-8">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-foreground/60 hover:text-foreground transition-colors"
            >
              ← Back to ACE
            </button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-[clamp(3rem,7.5vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground mb-6">
              Newsletters
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-foreground/70">
              Stay connected with our community through regular updates, insights, and success stories from ACE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletters.map((newsletter, index) => {
              const Icon = newsletter.icon
              return (
                <div
                  key={index}
                  className="group rounded-2xl border p-8 transition-all hover:scale-105"
                  style={{
                    background: "var(--glass-bg)",
                    borderColor: "var(--glass-border)",
                    backdropFilter: "blur(28px) saturate(140%)",
                    WebkitBackdropFilter: "blur(28px) saturate(140%)",
                    boxShadow: "var(--shadow-soft)"
                  }}
                >
                  <div className="mb-6 h-16 w-16 rounded-xl bg-green-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-foreground">{newsletter.title}</h3>
                  <p className="mb-4 text-base leading-relaxed text-foreground/70">{newsletter.description}</p>
                  <div className="text-sm font-medium text-green-400">{newsletter.frequency}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}