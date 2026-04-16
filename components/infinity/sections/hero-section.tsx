"use client"

import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Starfield } from "../starfield"
import { DISCORD_URL } from "../navbar"

export function HeroSection() {
  const goTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full flex-col overflow-hidden px-6 pb-20 pt-32 md:pt-40"
    >
      {/* Nebula background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/nebula.jpg')" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#020617]/60 to-[#020617]"
      />

      <Starfield />

      {/* Soft radial glow, moved to bottom-right to break symmetry */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-[-10%] h-[700px] w-[700px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(2,6,23,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        {/* Eyebrow pinned to top-left */}
        <div className="mb-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-300 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
          Comunidad TSB · Roblox
        </div>

        <div className="grid items-end gap-10 md:grid-cols-[1.3fr_0.7fr]">
          {/* Left: title + copy */}
          <div>
            <h1
              className="text-balance text-[18vw] font-black leading-[0.82] tracking-tight md:text-[10rem] lg:text-[12rem]"
              style={{
                background:
                  "linear-gradient(180deg, #ffffff 0%, #60a5fa 60%, #1d4ed8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(59,130,246,0.35))",
              }}
            >
              INFINITY
            </h1>

            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-slate-400 md:text-lg">
              La comunidad de <span className="text-white">The Strongest Battlegrounds</span>.
              Glads 5v5, tryouts, tops, creadores y una plataforma hecha para mejorar juntos.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] transition hover:bg-blue-400"
              >
                Unirse al Discord
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button
                onClick={() => goTo("sobre")}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
              >
                Descubre Más
                <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right: vertical stats card */}
          <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Estado · En vivo
            </p>
            <div className="mt-5 flex flex-col divide-y divide-white/10">
              {[
                { value: "169", label: "Miembros" },
                { value: "1.2k", label: "Visitas" },
                { value: "136", label: "Activos" },
              ].map((s) => (
                <div key={s.label} className="flex items-end justify-between py-4 first:pt-0 last:pb-0">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
                    {s.label}
                  </span>
                  <span className="text-3xl font-black text-white md:text-4xl">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* Scroll indicator bottom-left instead of centered */}
      <div className="relative z-10 mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-500">
        <span className="h-px w-12 bg-slate-700" />
        Scroll
        <ArrowDown className="h-3 w-3 animate-bounce" />
      </div>
    </section>
  )
}
