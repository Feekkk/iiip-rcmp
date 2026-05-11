import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Award, Users, Clock, Target } from 'lucide-react'

export const Route = createFileRoute('/ace/OurServices')({
  component: OurServices,
  head: () => ({
    meta: [
      { title: "Our Services — ACE | Advancement and Continuing Education" },
      { name: "description", content: "Explore our comprehensive professional development courses and programs at ACE UniKL RCMP." },
    ],
  }),
})

function OurServices() {
  const services = [
    {
      icon: BookOpen,
      title: "Professional Development",
      description: "Enhance your skills with our industry-recognized professional development programs designed for career advancement."
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Earn valuable certifications that validate your expertise and boost your professional credibility."
    },
    {
      icon: Users,
      title: "Corporate Training",
      description: "Tailored training solutions for organizations looking to upskill their workforce."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Learn at your own pace with our flexible online and blended learning options."
    },
    {
      icon: Target,
      title: "Career Coaching",
      description: "Get personalized guidance from experienced career coaches to achieve your professional goals."
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
              Our Services
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-foreground/70">
              Discover our comprehensive range of professional development programs designed to elevate your career and expand your possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
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
                  <div className="mb-6 h-16 w-16 rounded-xl bg-blue-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-base leading-relaxed text-foreground/70">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}