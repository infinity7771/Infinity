"use client"

import { Swords, Target, Users, Zap } from "lucide-react"
import { Starfield } from "../starfield"

const CARDS = [
  {
    icon: Swords,
    title: "Glads 5v5",
    text: "Enfrentamientos oficiales entre equipos: cada uno pone a sus 5 mejores representantes a pelear en The Strongest Battlegrounds.",
  },
  {
    icon: Target,
    title: "Tryouts",
    text: "Un evaluador mide tu nivel en combate 1v1 y te da feedback real para seguir creciendo como jugador.",
  },
  {
    icon: Users,
    title: "Varios Juegos",
    text: "No solo TSB. Jugamos de todo entre todos, nos metemos en call, nos reímos y pasamos el rato.",
  },
  {
    icon: Zap,
    title: "Plataforma Total",
    text: "Tops, tutoriales, contenido y tienda de ropa Roblox — todo lo que un jugador serio de TSB necesita.",
  },
]

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative w-full overflow-hidden px-6 py-32 md:py-40"
    >
      {/* Nebula background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/images/nebula.jpg')" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]"
      />

      <Starfield />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Cards on the left (bento) */}
        <div className="order-2 grid grid-cols-2 gap-3 lg:order-1">
          {CARDS.map((c, i) => (
            <div
              key={c.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-blue-400/30 hover:bg-white/[0.04] ${
                i === 0 ? "col-span-2" : ""
              }`}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20"
              />
              <div className="relative">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-300">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white md:text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Heading on the right, sticky feel */}
        <div className="order-1 lg:order-2 lg:pl-8">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
            ¿Qué es Infinity?
          </p>
          <h2 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Una comunidad,
            <br />
            <span className="text-slate-500">no un clan.</span>
          </h2>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-slate-400">
            Infinity no es un clan. Es una comunidad donde puedes conocer gente, competir y mejorar.
            No solo jugamos The Strongest Battlegrounds — nos juntamos en call, nos reímos y jugamos
            varios juegos entre todos. Participa en glads con tu equipo o entra a tryouts, donde un
            evaluador mide tu nivel en combate y te da feedback para seguir creciendo.
          </p>

          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
            <span className="h-px w-10 bg-slate-700" />
            Varios juegos · Calls 24/7
          </div>
        </div>
      </div>
    </section>
  )
}
