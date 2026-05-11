import { createFileRoute } from '@tanstack/react-router'
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

export const Route = createFileRoute('/ace/SocialMedia')({
  component: SocialMedia,
  head: () => ({
    meta: [
      { title: "Social Media — ACE | Advancement and Continuing Education" },
      { name: "description", content: "Connect with ACE community through our social media platforms." },
    ],
  }),
})

function SocialMedia() {
  const platforms = [
    {
      icon: Facebook,
      title: "Facebook",
      handle: "@ACE_UniKL",
      followers: "15.2K",
      description: "Join our Facebook community for daily updates and networking opportunities."
    },
    {
      icon: Twitter,
      title: "Twitter",
      handle: "@ACE_Rcmp",
      followers: "8.7K",
      description: "Follow us for real-time updates and industry insights."
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      handle: "ACE UniKL RCMP",
      followers: "22.1K",
      description: "Connect professionally and explore career opportunities."
    },
    {
      icon: Instagram,
      title: "Instagram",
      handle: "@ace_unikl",
      followers: "12.5K",
      description: "Visual stories from our programs and community events."
    },
    {
      icon: Youtube,
      title: "YouTube",
      handle: "ACE UniKL Channel",
      followers: "5.3K",
      description: "Watch webinars, tutorials, and success stories."
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
              Social Media
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-foreground/70">
              Stay connected with our community across all social platforms for the latest updates and networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon
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
                  <div className="mb-6 h-16 w-16 rounded-xl bg-orange-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-orange-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{platform.title}</h3>
                  <p className="mb-4 text-sm font-medium text-orange-400">{platform.handle}</p>
                  <p className="mb-2 text-base leading-relaxed text-foreground/70">{platform.description}</p>
                  <div className="text-sm font-medium text-orange-400">{platform.followers} followers</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}