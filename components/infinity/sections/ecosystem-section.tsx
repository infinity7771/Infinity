"use client"

import { MessageCircle, Youtube, Music2, ShirtIcon, GraduationCap, Trophy, ArrowUpRight } from "lucide-react"
import { Starfield } from "../starfield"
import { DISCORD_URL } from "../navbar"

const DISCORD_NODE = {
  icon: MessageCircle,
  title: "Discord",
  desc: "El corazón de la comunidad. Chat, anuncios, tryouts y glads en tiempo real.",
  href: DISCORD_URL,
}

const NODES = [
  { icon: Youtube, title: "YouTube", desc: "Highlights y tutoriales", href: "#" },
  { icon: Music2, title: "TikTok", desc: "Clips diarios de TSB", href: "#" },
  { icon: Trophy, title: "Tops", desc: "Rankings oficiales", href: "#tops" },
  { icon: GraduationCap, title: "Tutoriales", desc: "Videos próximamente", href: "#funciones" },
  { icon: ShirtIcon, title: "Tienda Roblox", desc: "Ropa oficial Infinity", href: "#funciones" },
]

export function EcosystemSection() {
  return (
    <section id="plataforma" className="relative w-full overflow-hidden px-6 py-32 md:py-40">
      <Starfield />

      <div className="relative mx-auto max-w-6xl">
        {/* Header block with inline stats on the right */}
        <div className="mb-16 grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
              Plataforma
            </p>
            <h2 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Toda la comunidad
              <br />
              <span className="text-slate-500">en un solo lugar.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { v: "169", l: "Miembros" },
              { v: "136", l: "Activos" },
              { v: "24/7", l: "Online" },
              { v: "∞", l: "Posibilidades" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4"
              >
                <span className="text-2xl font-black text-white md:text-3xl">{s.v}</span>
                <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento grid: Discord big card + 5 small */}
        <div className="grid gap-3 md:grid-cols-3 md:grid-rows-2">
          {/* Discord featured card, spans 2 columns + 2 rows on desktop */}
          <a
            href={DISCORD_NODE.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-400/30 bg-gradient-to-br from-blue-600/25 via-blue-500/10 to-transparent p-8 transition hover:border-blue-400/60 md:col-span-2 md:row-span-2 md:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl transition group-hover:bg-blue-500/35"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-500 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                  Principal
                </span>
                <ArrowUpRight className="h-6 w-6 text-blue-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div className="mt-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/40 bg-blue-500/20 text-white">
                <DISCORD_NODE.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="relative mt-10">
              <h3 className="text-3xl font-black text-white md:text-5xl">{DISCORD_NODE.title}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-slate-300">{DISCORD_NODE.desc}</p>
            </div>
          </a>

          {/* 5 small nodes */}
          {NODES.map((n) => {
            const isExternal = n.href.startsWith("http")
            const Cmp = n.href === "#" ? "div" : "a"
            return (
              <Cmp
                key={n.title}
                href={n.href === "#" ? undefined : n.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative flex items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-300">
                  <n.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-white">{n.title}</h3>
                  <p className="truncate text-xs text-slate-400">{n.desc}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:text-blue-300" />
              </Cmp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
