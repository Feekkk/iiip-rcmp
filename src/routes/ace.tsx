import { createFileRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { MessageSquare, Calendar, Mail, Users as Team, Briefcase, Star, Check } from 'lucide-react'

export const Route = createFileRoute('/ace')({
  component: ACELayout,
  head: () => ({
    meta: [
      { title: "ACE - UniKL RCMP" },
      { name: "description", content: "Elevate your career with ACE - Advancement and Continuing Education at IIIP UniKL RCMP. Professional development courses and lifelong learning opportunities." },
    ],
  }),
})

function ACELayout() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  if (pathname !== '/ace' && pathname !== '/ace/') {
    return <Outlet />
  }

  return (
    <main
      className="relative min-h-screen overflow-hidden text-foreground"
      style={{ background: "var(--gradient-warm)" }}
    >
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--bokeh)" }} />
      
      {/* Header Section */}
      <header className="relative z-10 border-b border-foreground/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between px-10 py-2 md:flex-row md:px-16">
          {/* Logo Area - Three logo placeholders */}
          <div className="mb-4 flex items-center space-x-4 md:mb-0">
              <img src="ace.png" alt="ACE logo" className="h-16 w-auto object-contain" />
              <img src="hrd.png" alt="HRD logo" className="h-16 w-auto object-contain" />
              <img src="logo.png" alt="RCMP logo" className="h-16 w-auto object-contain" />
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button 
              className="rounded-lg border border-foreground/20 bg-foreground/10 px-4 py-2 text-foreground transition-colors hover:bg-foreground/20"
            >
              Staff Access
            </button>
            <button 
              className="rounded-lg px-4 py-2 text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "#493628" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-10 py-20 md:px-16">
        <div className="mx-auto max-w-[1400px] text-center">
          {/* Main Title */}
          <h1 className="text-[clamp(3rem,7.5vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground">
            Advancement and Continuing Education
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-3xl text-xl font-light leading-relaxed text-foreground/70">
            Extend UniKL's Excellence to the Community & Organisation at every stage of learning
          </p>

          {/* Main CTAs */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button 
              className="rounded-lg px-8 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:opacity-90"
              style={{ backgroundColor: "#493628" }}
            >
              Register Now
            </button>
            <button className="rounded-lg border border-foreground/20 bg-foreground/10 px-8 py-3 text-lg font-semibold text-foreground transition-all hover:scale-105 hover:bg-foreground/20">
              Contact Us
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex justify-center items-center space-x-8 text-foreground/60">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm"> Trusted by professionals </span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-500" />
              <span className="text-sm"> Proven Results </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Feature Boxes Section */}
      <section className="relative z-10 px-10 py-20 md:px-16">
        <div className="mx-auto max-w-[1400px]">
            {/* Service Icons */}
              <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16">
                {/* Our Services */}
                <Link
                  to="/ace/OurServices"
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-amber-700" />
                </Link>

                {/* Newsletters */}
                <Link
                  to="/ace/Newsletters"
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  <Mail className="h-8 w-8 sm:h-10 sm:w-10 text-amber-700" />
                </Link>

                {/* Calendar */}
                <Link
                  to="/ace/Calendar"
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-amber-700" />
                </Link>

                {/* Social Media */}
                <Link
                  to="/ace/SocialMedia"
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 text-amber-700" />
                </Link>

                {/* Our Team */}
                <Link
                  to="/ace/OurTeam"
                  className="cursor-pointer transition-transform hover:scale-110"
                >
                  <Team className="h-8 w-8 sm:h-10 sm:w-10 text-amber-700" />
                </Link>
              </div>
        </div>
      </section>
      {/* footer */}
      <footer className="relative z-10 border-t border-foreground/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 px-10 py-6 md:flex-row md:justify-between md:px-16 md:gap-0">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 text-center md:text-left">
              © IIIP UniKL Royal College of Medicine
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 text-center">
            Empowering Leadership · Globally
          </span>
        </div>
      </footer>
    </main>
  )
}
