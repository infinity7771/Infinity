"use client"

import { ArrowUpRight } from "lucide-react"
import { DISCORD_URL } from "../navbar"
import { Starfield } from "../starfield"

export function FinalCtaSection() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-32 md:py-48">
      {/* Nebula background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: "url('/images/nebula.jpg')" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/60 to-[#020617]"
      />

      <Starfield />

      {/* Glow shifted left */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(2,6,23,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-end gap-10 md:grid-cols-[1.4fr_0.6fr]">
          {/* Left: title */}
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
              Únete Ahora
            </p>
            <h2
              className="text-balance text-6xl font-black leading-[0.88] tracking-tight md:text-[9rem]"
              style={{
                background:
                  "linear-gradient(180deg, #ffffff 0%, #60a5fa 70%, #1d4ed8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(59,130,246,0.3))",
              }}
            >
              Entra a
              <br />
              Infinity.
            </h2>
          </div>

          {/* Right: description + CTA */}
          <div className="flex flex-col items-start gap-6 md:pl-6">
            <p className="max-w-xs text-pretty leading-relaxed text-slate-400">
              Súmate a la comunidad: glads, clips, varios juegos, risas y calls con gente activa todos los días.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-950 transition hover:bg-slate-100"
            >
              Unirse a Infinity
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="flex flex-col gap-1 text-[10px] uppercase tracking-[0.3em] text-slate-500">
              <span>Gratis para siempre</span>
              <span>Comunidad activa</span>
              <span>24/7 online</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">∞</span>
          <span className="font-black tracking-[0.2em] text-white">INFINITY</span>
          <span className="text-slate-600">· Comunidad TSB</span>
        </div>
        <span>© {new Date().getFullYear()} Infinity. Hecho por la comunidad.</span>
      </footer>
    </section>
  )
}
