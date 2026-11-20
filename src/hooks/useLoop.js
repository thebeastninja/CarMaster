import { useEffect, useRef, useState } from 'react'

/** Tracks whether an element is on screen (and the tab is visible). */
export function useInView(ref, rootMargin = '100px') {
  const [inView, setInView] = useState(true)
  const [pageVisible, setPageVisible] = useState(() => typeof document === 'undefined' || !document.hidden)
  useEffect(() => {
    const onVis = () => setPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])
  useEffect(() => {
    const el = ref?.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, rootMargin])
  return inView && pageVisible
}

/**
 * requestAnimationFrame loop. Calls step(dtSeconds) each frame while running.
 * Pass a ref to automatically pause while the element is off-screen or the tab is hidden
 * (saves battery on phones).
 */
export function useLoop(running, step, ref) {
  const stepRef = useRef(step)
  stepRef.current = step
  const [, setTick] = useState(0)
  const visible = useInView(ref)
  const active = running && visible
  useEffect(() => {
    if (!active) return
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
  }, [active])
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
