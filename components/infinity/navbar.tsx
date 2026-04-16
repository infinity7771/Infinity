"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export const DISCORD_URL = "https://discord.gg/ggD7t6k2rR"

const LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre", label: "Sobre" },
  { id: "funciones", label: "Funciones" },
  { id: "glads", label: "Glads" },
  { id: "tops", label: "Tops" },
  { id: "plataforma", label: "Plataforma" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("inicio")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // active section detection
      const offset = window.innerHeight / 2
      let current = "inicio"
      for (const l of LINKS) {
        const el = document.getElementById(l.id)
        if (el && el.getBoundingClientRect().top <= offset) {
          current = l.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="fixed left-0 right-0 top-4 z-40 flex justify-center px-4">
      <div
        className={`flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? "bg-slate-950/80 shadow-[0_0_30px_rgba(59,130,246,0.15)]" : "bg-slate-950/40"
        }`}
      >
        <button
          onClick={() => go("inicio")}
          className="mr-1 flex items-center gap-2 rounded-full px-3 py-2 text-sm font-black tracking-[0.2em] text-white transition hover:text-blue-300"
          aria-label="Ir al inicio"
        >
          <span className="text-blue-400 text-base">∞</span>
          <span className="hidden sm:inline">INFINITY</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all ${
                active === link.id
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 hidden rounded-full bg-blue-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(59,130,246,0.45)] transition hover:bg-blue-400 md:inline-flex"
        >
          Discord
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="ml-1 rounded-full p-2 text-slate-200 transition hover:bg-white/10 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-[68px] rounded-3xl border border-white/10 bg-slate-950/95 p-4 backdrop-blur-xl md:hidden">
          <nav className="grid gap-1">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-medium uppercase tracking-widest transition ${
                  active === link.id
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-2xl bg-blue-500 px-4 py-3 text-center text-sm font-bold uppercase tracking-widest text-white"
            >
              Unirse al Discord
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
