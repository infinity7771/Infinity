"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react"

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.35)
  const [muted, setMuted] = useState(false)
  const [expanded, setExpanded] = useState(false)

  // Apply volume / muted state to the audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume
    }
  }, [volume, muted])

  // Try to autoplay on mount. If the browser blocks it (very likely),
  // fall back to the first user interaction (click / scroll / key / touch).
  useEffect(() => {
    const el = audioRef.current
    if (!el) return

    let cancelled = false

    const tryPlay = async () => {
      if (cancelled) return
      try {
        await el.play()
        if (!cancelled) setIsPlaying(true)
      } catch {
        // blocked, wait for user gesture
      }
    }

    // Attempt immediate playback
    tryPlay()

    const onGesture = async () => {
      try {
        await el.play()
        setIsPlaying(true)
      } catch {
        // ignore, user can click the player button
      }
      removeListeners()
    }

    const events: (keyof WindowEventMap)[] = [
      "pointerdown",
      "keydown",
      "scroll",
      "touchstart",
    ]
    const removeListeners = () => {
      events.forEach((ev) => window.removeEventListener(ev, onGesture))
    }
    events.forEach((ev) =>
      window.addEventListener(ev, onGesture, { once: true, passive: true })
    )

    // Keep UI in sync if the audio starts/pauses from elsewhere
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    el.addEventListener("play", onPlay)
    el.addEventListener("pause", onPause)

    return () => {
      cancelled = true
      removeListeners()
      el.removeEventListener("play", onPlay)
      el.removeEventListener("pause", onPause)
    }
  }, [])

  const togglePlay = async () => {
    const el = audioRef.current
    if (!el) return
    try {
      if (isPlaying) {
        el.pause()
      } else {
        await el.play()
      }
    } catch {
      // ignored
    }
  }

  const toggleMute = () => setMuted((m) => !m)

  return (
    <>
      <audio ref={audioRef} src="/audio/infi.mp3" loop preload="auto" />

      <div
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 p-1.5 pl-2 backdrop-blur-xl transition-all hover:border-blue-400/30"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="flex items-center gap-2 px-2">
          <div className="relative flex h-6 w-6 items-center justify-center">
            <Music className="h-3.5 w-3.5 text-blue-300" />
            {isPlaying && (
              <span className="absolute inset-0 animate-ping rounded-full bg-blue-500/20" />
            )}
          </div>
          <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:inline">
            Infinity
          </span>
        </div>

        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-950 transition hover:bg-blue-100"
        >
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5 fill-current" />
          ) : (
            <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
          )}
        </button>

        <div
          className={`flex items-center overflow-hidden transition-all duration-300 ${
            expanded ? "w-36 opacity-100 pr-2" : "w-0 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-300 transition hover:text-white"
          >
            {muted || volume === 0 ? (
              <VolumeX className="h-3.5 w-3.5" />
            ) : (
              <Volume2 className="h-3.5 w-3.5" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={muted ? 0 : volume}
            onChange={(e) => {
              const v = Number(e.target.value)
              setVolume(v)
              if (v > 0 && muted) setMuted(false)
            }}
            aria-label="Volumen"
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-blue-400"
          />
        </div>
      </div>
    </>
  )
}
