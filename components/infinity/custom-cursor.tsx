"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show on devices with fine pointer
    if (typeof window === "undefined") return
    if (!window.matchMedia("(pointer: fine)").matches) return
    setVisible(true)

    const onMove = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      if (target.closest("a, button, [data-cursor-hover]")) {
        setHover(true)
      }
    }

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      if (target.closest("a, button, [data-cursor-hover]")) {
        setHover(false)
      }
    }

    window.addEventListener("mousemove", onMove)
    document.addEventListener("mouseover", onOver)
    document.addEventListener("mouseout", onOut)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed z-[999] text-xl text-blue-500 transition-transform duration-100 ${
        hover ? "scale-[1.8]" : "scale-100"
      }`}
      style={{
        transform: "translate(-50%, -50%)",
        left: 0,
        top: 0,
      }}
    >
      <span style={{ display: "block", transform: hover ? "scale(1.8)" : "scale(1)" }}>∞</span>
    </div>
  )
}
