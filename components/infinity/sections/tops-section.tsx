"use client"

import { Trophy, Crown, Medal, Award } from "lucide-react"
import { Starfield } from "../starfield"

const TOP_PLAYERS = [
  { pos: 1, name: "N/A", score: "—", tag: "Próximamente" },
  { pos: 2, name: "N/A", score: "—", tag: "Próximamente" },
  { pos: 3, name: "N/A", score: "—", tag: "Próximamente" },
  { pos: 4, name: "N/A", score: "—", tag: "Próximamente" },
  { pos: 5, name: "N/A", score: "—", tag: "Próximamente" },
]

const CATEGORIES = [
  {
    icon: Crown,
    title: "Top Jugadores",
    desc: "Los mejores de la comunidad según desempeño en glads.",
  },
  {
    icon: Medal,
    title: "Top Equipos",
    desc: "Ranking oficial de equipos que compiten en glads 5v5.",
  },
  {
    icon: Award,
    title: "Top Creadores",
    desc: "Los creadores más activos de Infinity en YouTube y TikTok.",
  },
]

function posStyles(pos: number) {
  if (pos === 1) return { text: "text-yellow-400", border: "border-yellow-400/30", bg: "bg-yellow-400/5" }
  if (pos === 2) return { text: "text-slate-300", border: "border-slate-300/20", bg: "bg-slate-300/5" }
  if (pos === 3) return { text: "text-orange-400", border: "border-orange-400/25", bg: "bg-orange-400/5" }
  return { text: "text-slate-500", border: "border-white/10", bg: "bg-white/[0.02]" }
}

export function TopsSection() {
  return (
    <section id="tops" className="relative w-full overflow-hidden px-6 py-32 md:py-40">
      {/* Nebula background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/nebula.jpg')" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]"
      />

      <Starfield />

      <div className="relative mx-auto max-w-6xl">
        {/* Centered heading — different rhythm from other sections */}
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
            Rankings Oficiales
          </p>
          <h2 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Los Tops
            <br />
            <span className="text-slate-500">de Infinity.</span>
          </h2>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-slate-400">
            Las tablas oficiales con los mejores jugadores, equipos y creadores.
            Se publicarán conforme arranquen las glads y tryouts.
          </p>
        </div>

        {/* Categories as horizontal row on top */}
        <div className="grid gap-3 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-blue-400/30 hover:bg-white/[0.04]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl transition group-hover:bg-blue-500/15"
              />
              <div className="relative flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-300">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard full width below */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-300">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white md:text-2xl">Top 5 Jugadores</h3>
                <p className="text-xs text-slate-500">Actualización semanal</p>
              </div>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Próximamente
            </span>
          </div>

          <div className="grid gap-2 md:grid-cols-[1fr_1fr]">
            {TOP_PLAYERS.map((p) => {
              const s = posStyles(p.pos)
              return (
                <div
                  key={p.pos}
                  className={`flex items-center justify-between rounded-2xl border ${s.border} ${s.bg} px-4 py-4 transition hover:bg-white/[0.04]`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-10 text-xl font-black ${s.text}`}>
                      {"#" + p.pos}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">{p.name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500">
                        {p.tag}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-black text-white">{p.score}</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500">
                      puntos
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
