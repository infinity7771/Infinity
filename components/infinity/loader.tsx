"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [fade, setFade] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 1500)
    const hideTimer = setTimeout(() => setHidden(true), 2500)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background: "radial-gradient(circle, #020617, #000)",
      }}
      aria-hidden={fade}
    >
      <div className="mb-5 h-20 w-20 animate-spin rounded-full border-[3px] border-white/10 border-t-blue-500" />
      <h1
        className="text-5xl font-bold tracking-[0.4em] animate-pulse"
        style={{
          background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        INFINITY
      </h1>
    </div>
  )
}
