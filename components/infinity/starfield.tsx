"use client"

import { useEffect, useState } from "react"

type Shooting = {
  id: number
  top: string
  left: string
  angle: number
  tx: number
  ty: number
  duration: number
  length: number
}

type Star = {
  id: number
  top: string
  left: string
  size: number
  delay: number
  duration: number
}

function randomShooting(id: number): Shooting {
  const angle = -15 - Math.random() * 25 // -15 to -40 deg
  const distance = 600 + Math.random() * 500
  const rad = (angle * Math.PI) / 180
  return {
    id,
    top: `${Math.random() * 60}%`,
    left: `${Math.random() * 60}%`,
    angle,
    tx: Math.cos(rad) * distance + distance,
    ty: Math.sin(rad) * distance + distance * 0.3,
    duration: 1.2 + Math.random() * 0.8,
    length: 120 + Math.random() * 120,
  }
}

export function Starfield() {
  const [shootings, setShootings] = useState<Shooting[]>([])
  const [twinkles, setTwinkles] = useState<Star[]>([])

  useEffect(() => {
    // Generate twinkling stars once
    const stars: Star[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() < 0.8 ? 1 : 2,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 4,
    }))
    setTwinkles(stars)

    // Periodically spawn shooting stars
    let counter = 0
    const spawn = () => {
      const s = randomShooting(counter++)
      setShootings((prev) => [...prev, s])
      // Remove after animation ends
      setTimeout(() => {
        setShootings((prev) => prev.filter((x) => x.id !== s.id))
      }, s.duration * 1000 + 100)
    }

    // First one soon, then random intervals
    const first = setTimeout(spawn, 1500)
    const interval = setInterval(() => {
      if (Math.random() < 0.9) spawn()
    }, 3500)

    return () => {
      clearTimeout(first)
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base static starfield */}
      <div
        className="absolute left-0 top-0 h-[200%] w-[200%] opacity-[0.12] animate-[moveStars_80s_linear_infinite]"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Twinkling stars */}
      {twinkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            boxShadow: "0 0 6px rgba(147, 197, 253, 0.8)",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootings.map((s) => (
        <span
          key={s.id}
          className="absolute block"
          style={{
            top: s.top,
            left: s.left,
            width: s.length,
            height: 2,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(147,197,253,0.9) 50%, #ffffff 100%)",
            filter: "drop-shadow(0 0 6px rgba(96,165,250,0.9))",
            // @ts-expect-error CSS custom props
            "--angle": `${s.angle}deg`,
            "--tx": `${s.tx}px`,
            "--ty": `${s.ty}px`,
            animation: `shooting ${s.duration}s linear forwards`,
            transformOrigin: "left center",
          }}
        />
      ))}
    </div>
  )
}
