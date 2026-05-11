import { createFileRoute } from '@tanstack/react-router'
import { Calendar, Clock, Users, MapPin, Video } from 'lucide-react'

export const Route = createFileRoute('/ace/Calendar')({
  component: CalendarPage,
  head: () => ({
    meta: [
      { title: "Calendar — ACE | Advancement and Continuing Education" },
      { name: "description", content: "View upcoming events, training schedules, and important dates at ACE UniKL RCMP." },
    ],
  }),
})

function CalendarPage() {
  const events = [
    {
      icon: Calendar,
      title: "Leadership Workshop",
      date: "Dec 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Training Room A",
      type: "Workshop"
    },
    {
      icon: Users,
      title: "Networking Session",
      date: "Dec 18, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Main Hall",
      type: "Networking"
    },
    {
      icon: Video,
      title: "Webinar: Digital Skills",
      date: "Dec 20, 2024",
      time: "10:00 AM - 11:30 AM",
      location: "Online",
      type: "Webinar"
    },
    {
      icon: Clock,
      title: "Certification Exam",
      date: "Dec 22, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Exam Center",
      type: "Assessment"
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
              Calendar
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-foreground/70">
              Stay updated with our upcoming events, training sessions, and important deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => {
              const Icon = event.icon
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
                  <div className="mb-6 h-16 w-16 rounded-xl bg-purple-900/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="mb-4 text-sm font-medium text-purple-400">{event.type}</div>
                  <h3 className="mb-4 text-xl font-semibold text-foreground">{event.title}</h3>
                  <div className="space-y-2 text-base text-foreground/70">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} color="#a855f7" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-purple-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}