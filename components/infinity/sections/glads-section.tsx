"use client"

import { Swords, Trophy, Users, Calendar } from "lucide-react"
import { Starfield } from "../starfield"
import { DISCORD_URL } from "../navbar"

const STEPS = [
  {
    icon: Users,
    title: "Cada equipo elige 5",
    text: "Los equipos ponen a sus 5 mejores representantes sobre la mesa.",
  },
  {
    icon: Calendar,
    title: "Se agenda la glad",
    text: "Staff de Infinity organiza fecha, hora y servidor oficial.",
  },
  {
    icon: Swords,
    title: "Pelean 5v5",
    text: "Enfrentamiento directo en TSB con reglas claras.",
  },
  {
    icon: Trophy,
    title: "Resultado oficial",
    text: "El resultado será publicado en nuestro servidor de Discord.",
  },
]

export function GladsSection() {
  return (
    <section id="glads" className="relative w-full overflow-hidden px-6 py-32 md:py-40">
      {/* Black hole background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/black-hole.jpg')" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/70 to-[#020617]"
      />

      <Starfield />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Sticky header on the left */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
            Formato Oficial
          </p>
          <h2 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Glads 5v5.
            <br />
            <span className="text-slate-500">Equipo contra equipo.</span>
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-slate-400">
            Una glad es una pelea oficial entre dos equipos. Cada uno pone a sus 5 mejores
            representantes y se enfrentan en TSB. El resultado decide quién sube en el ranking.
          </p>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_25px_rgba(59,130,246,0.45)] transition hover:bg-blue-400"
          >
            Añadir mi Equipo
          </a>
        </div>

        {/* Vertical timeline on the right */}
        <div className="relative">
          <div aria-hidden className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

          <ol className="flex flex-col gap-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative flex gap-5 pl-0">
                {/* Node */}
                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-slate-950 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.25)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-blue-400/30">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                    <span className="text-[10px] font-black tracking-widest text-slate-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
