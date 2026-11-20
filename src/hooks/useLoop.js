import { useEffect, useRef, useState } from 'react'

/**
 * requestAnimationFrame loop. Calls step(dtSeconds) each frame while running.
 * Returns a frame counter that changes each tick so components re-render.
 */
export function useLoop(running, step) {
  const stepRef = useRef(step)
  stepRef.current = step
  const [, setTick] = useState(0)
  useEffect(() => {
    if (!running) return
    let raf
    let last = performance.now()
    const loop = (now) => {
      const dt = Math.max(0, Math.min(0.05, (now - last) / 1000))
      last = now
      stepRef.current(dt)
      setTick((t) => (t + 1) % 1e6)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [running])
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mq) return
    setReduced(mq.matches)
    const on = () => setReduced(mq.matches)
    mq.addEventListener?.('change', on)
    return () => mq.removeEventListener?.('change', on)
  }, [])
  return reduced
}
