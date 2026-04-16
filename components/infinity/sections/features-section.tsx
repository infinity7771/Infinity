"use client"

import { Starfield } from "../starfield"

const FEATURES = [
  {
    n: "01",
    title: "Glads 5v5",
    desc: "Peleas oficiales entre equipos. Cada uno pone a sus 5 mejores representantes en un enfrentamiento organizado por Infinity.",
    preview: (
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/5 px-3 py-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Equipo A</span>
          <span className="text-2xl font-black text-white">N/A</span>
          <span className="text-[10px] text-slate-500">próximamente</span>
        </div>
        <div className="text-xl font-black text-white">VS</div>
        <div className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Equipo B</span>
          <span className="text-2xl font-black text-white">N/A</span>
          <span className="text-[10px] text-slate-500">próximamente</span>
        </div>
      </div>
    ),
  },
  {
    n: "02",
    title: "Creadores de Contenido",
    desc: "Infinity integra a creadores de TSB. YouTube, TikTok, clips, guías y highlights — pronto oficiales en la comunidad.",
    preview: (
      <div className="grid grid-cols-2 gap-2">
        {[
          { tag: "YouTube", val: "N/A" },
          { tag: "TikTok", val: "N/A" },
          { tag: "Clips/mes", val: "N/A" },
          { tag: "Views/mes", val: "N/A" },
        ].map((s) => (
          <div
            key={s.tag}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
          >
            <div className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
              {s.tag}
            </div>
            <div className="mt-1 text-lg font-black text-white">{s.val}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    n: "03",
    title: "Tutoriales",
    desc: "Estamos preparando videos con combos, techs y estrategias de los mejores jugadores de la comunidad.",
    preview: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Guía</div>
            <div className="mt-1 text-sm font-medium text-white">Combos básicos TSB</div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-400">
            Pronto
          </span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Techs</div>
            <div className="mt-1 text-sm font-medium text-white">Top 5 techs 2026</div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-400">
            Pronto
          </span>
        </div>
      </div>
    ),
  },
  {
    n: "04",
    title: "Tienda Roblox",
    desc: "Vamos a diseñar nuestra propia ropa de Roblox y publicarla aquí. Luce los colores de Infinity dentro del juego.",
    preview: (
      <div className="grid grid-cols-2 gap-2">
        {[
          { tag: "Hoodie", val: "N/A" },
          { tag: "Tee", val: "N/A" },
          { tag: "Pants", val: "N/A" },
          { tag: "Drop", val: "N/A" },
        ].map((s) => (
          <div
            key={s.tag}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
          >
            <div className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
              {s.tag}
            </div>
            <div className="mt-1 text-sm font-bold text-white">{s.val}</div>
            <div className="mt-0.5 text-[9px] uppercase tracking-widest text-slate-600">próximamente</div>
          </div>
        ))}
      </div>
    ),
  },
]

export function FeaturesSection() {
  return (
    <section id="funciones" className="relative w-full overflow-hidden px-6 py-32 md:py-40">
      <Starfield />

      <div className="relative mx-auto max-w-6xl">
        {/* Header aligned right for variety */}
        <div className="mb-20 flex justify-end">
          <div className="max-w-2xl text-right">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
              Funciones Principales
            </p>
            <h2 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Todo lo que
              <br />
              <span className="text-slate-500">necesitas para competir.</span>
            </h2>
          </div>
        </div>

        {/* Alternating rows instead of symmetric grid */}
        <div className="flex flex-col gap-8">
          {FEATURES.map((f, i) => {
            const isEven = i % 2 === 0
            return (
              <article
                key={f.n}
                className="group relative grid gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-blue-400/30 md:grid-cols-[0.9fr_1.1fr] md:p-10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl transition group-hover:bg-blue-500/15"
                />

                {/* Text side alternates */}
                <div className={`relative flex flex-col justify-between ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-black leading-none text-slate-700 md:text-7xl">
                      {f.n}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-white md:text-3xl">{f.title}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-slate-400">{f.desc}</p>
                  </div>
                </div>

                {/* Preview side */}
                <div
                  className={`relative rounded-2xl border border-white/10 bg-slate-950/40 p-5 backdrop-blur-sm md:p-6 ${
                    isEven ? "md:order-2" : "md:order-1"
                  }`}
                >
                  {f.preview}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
