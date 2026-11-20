import { useEffect, useRef } from 'react'

const listeners = new Set()
const COLORS = ['#ff4d1f', '#ff9f1c', '#ffd166', '#ffffff', '#38bdf8', '#34d399']

/** Fire a burst of confetti (and a little phone vibration). */
export function fireConfetti(power = 1) {
  listeners.forEach((fn) => fn(power))
  buzz([30, 40, 60])
}

/** Haptic feedback on phones that support it. */
export function buzz(pattern = 15) {
  try { navigator.vibrate?.(pattern) } catch { /* unsupported */ }
}

export default function Confetti() {
  const canvas = useRef(null)
  const parts = useRef([])
  const raf = useRef(0)

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const c = canvas.current
    const ctx = c.getContext('2d')
    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      c.width = window.innerWidth * dpr
      c.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      parts.current = parts.current.filter((p) => p.life > 0 && p.y < window.innerHeight + 40)
      for (const p of parts.current) {
        p.vy += 0.25; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 1
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.globalAlpha = Math.min(1, p.life / 40)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.rot * 2)))
        ctx.restore()
      }
      if (parts.current.length) raf.current = requestAnimationFrame(tick)
      else raf.current = 0
    }

    const burst = (power) => {
      if (reduced) return
      const W = window.innerWidth, H = window.innerHeight
      const n = Math.round((W < 640 ? 90 : 160) * power)
      for (let i = 0; i < n; i++) {
        const fromLeft = i % 2 === 0
        parts.current.push({
          x: fromLeft ? 0 : W, y: H * 0.75,
          vx: (fromLeft ? 1 : -1) * (4 + Math.random() * 9), vy: -(9 + Math.random() * 11),
          w: 6 + Math.random() * 6, h: 8 + Math.random() * 8, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
          color: COLORS[i % COLORS.length], life: 140 + Math.random() * 60,
        })
      }
      if (!raf.current) raf.current = requestAnimationFrame(tick)
    }
    listeners.add(burst)
    return () => { listeners.delete(burst); window.removeEventListener('resize', resize); cancelAnimationFrame(raf.current) }
  }, [])

  return <canvas ref={canvas} className="pointer-events-none fixed inset-0 z-[60] h-full w-full" aria-hidden="true" />
}
