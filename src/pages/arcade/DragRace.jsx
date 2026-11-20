import { useEffect, useMemo, useRef, useState } from 'react'
import Img, { CarSilhouette } from '../../components/Img.jsx'
import { cars } from '../../data/cars.js'
import { dragProfile, QUARTER_MILE } from '../../lib/drag.js'
import { useProgress } from '../../context/ProgressContext.jsx'
import { buzz, fireConfetti } from '../../components/Confetti.jsx'

const SPEEDUP = 1.6 // race replays slightly faster than real time
const fast = cars.filter((c) => c.zeroTo100 && c.zeroTo100 < 6)
const rand = (a) => a[Math.floor(Math.random() * a.length)]
const sorted = [...cars].sort((a, b) => a.name.localeCompare(b.name))

export default function DragRace({ query = {} }) {
  const { recordArcade, state } = useProgress()
  const [mine, setMine] = useState(() => cars.find((c) => c.id === query.car) || cars.find((c) => c.id === 'nissan-gt-r-r35') || rand(fast))
  const [rival, setRival] = useState(() => cars.find((c) => c.id === 'tesla-model-s-plaid') || rand(fast))
  const [phase, setPhase] = useState('idle') // idle, staging, tree, racing, done, foul
  const [lights, setLights] = useState(0) // 0 none, 1-3 ambers, 4 green, -1 red
  const [rt, setRt] = useState(null)
  const [t, setT] = useState(0)
  const greenAt = useRef(0)
  const startAt = useRef(0)
  const timers = useRef([])
  const raf = useRef(0)
  const result = useRef(null)
  const ai = useRef(0.2)
  const trackRef = useRef(null)
  const phaseRef = useRef('idle')
  phaseRef.current = phase

  const pMine = useMemo(() => dragProfile(mine), [mine])
  const pRival = useMemo(() => dragProfile(rival), [rival])

  useEffect(() => () => { timers.current.forEach(clearTimeout); cancelAnimationFrame(raf.current) }, [])

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; cancelAnimationFrame(raf.current) }

  const stage = () => {
    clear()
    result.current = null
    ai.current = 0.1 + Math.random() * 0.25
    setRt(null); setT(0); setLights(0); setPhase('staging')
    trackRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const delay = 900 + Math.random() * 900
    timers.current.push(setTimeout(() => { setPhase('tree'); setLights(1) }, delay))
    timers.current.push(setTimeout(() => setLights(2), delay + 500))
    timers.current.push(setTimeout(() => setLights(3), delay + 1000))
    timers.current.push(setTimeout(() => { setLights(4); greenAt.current = performance.now(); buzz(30) }, delay + 1500))
    timers.current.push(setTimeout(() => { if (greenAt.current && !startAt.current) launch(true) }, delay + 1500 + 2500))
    greenAt.current = 0; startAt.current = 0
  }

  const run = () => {
    const loop = () => {
      const elapsed = ((performance.now() - startAt.current) / 1000) * SPEEDUP
      setT(elapsed)
      const myFinish = (rtRef.current ?? 0) + pMine.et
      const rivalFinish = ai.current + pRival.et
      if (elapsed > Math.max(myFinish, rivalFinish) + 0.3) {
        const win = myFinish < rivalFinish
        result.current = { win, myFinish, rivalFinish }
        setPhase('done')
        recordArcade('drag', { win, score: win ? 1 : 0, xp: win ? 25 : 5 })
        if (win) fireConfetti(1); else buzz([80, 60, 80])
        return
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)
  }
  const rtRef = useRef(null)

  const launch = (auto = false) => {
    const phase = phaseRef.current
    if (phase === 'staging' || (phase === 'tree' && !greenAt.current)) {
      // Jumped the start!
      clear(); setLights(-1); setPhase('foul'); buzz([200]); recordArcade('drag', { win: false }); return
    }
    if (phase !== 'tree' || startAt.current) return
    const reaction = auto ? 2 : (performance.now() - greenAt.current) / 1000
    rtRef.current = reaction
    setRt(reaction)
    startAt.current = greenAt.current // race clock starts at green for both
    setPhase('racing')
    buzz(20)
    run()
  }

  const posOf = (p, reaction) => {
    const tt = t - reaction
    return tt <= 0 ? { d: 0, v: 0 } : p.at(tt)
  }
  const me = phase === 'racing' || phase === 'done' ? posOf(pMine, rt ?? 0) : { d: 0, v: 0 }
  const them = phase === 'racing' || phase === 'done' ? posOf(pRival, ai.current) : { d: 0, v: 0 }
  const wins = state.arcade?.drag?.wins || 0
  const busy = phase === 'staging' || phase === 'tree' || phase === 'racing'

  return (
    <div className="space-y-4">
      {/* Car pickers */}
      <div className="grid grid-cols-2 gap-3">
        <Picker label="Your car" car={mine} onChange={setMine} disabled={busy} color="text-racing-400" />
        <Picker label="Opponent" car={rival} onChange={setRival} disabled={busy} color="text-sky-400" />
      </div>
      <button className="btn-ghost w-full" disabled={busy} onClick={() => { setMine(rand(cars)); setRival(rand(cars)); setPhase('idle') }}>🎲 Random matchup</button>

      {/* Track */}
      <div ref={trackRef} className="card scroll-mt-20 overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2 text-xs text-zinc-500">
          <span>¼ mile · 402 m</span>
          <span className="font-mono text-zinc-300">{phase === 'racing' || phase === 'done' ? `${t.toFixed(2)} s` : '0.00 s'}</span>
        </div>
        <div className="relative bg-[repeating-linear-gradient(90deg,#16181d_0,#16181d_38px,#1b1e24_38px,#1b1e24_76px)] px-2 py-3">
          <div className="absolute bottom-0 right-6 top-0 w-2 bg-[repeating-linear-gradient(0deg,#fff_0,#fff_8px,#000_8px,#000_16px)] opacity-80" />
          <Lane car={mine} pos={me.d / QUARTER_MILE} speed={me.v * 3.6} color="#ff4d1f" />
          <div className="my-2 border-t border-dashed border-yellow-500/40" />
          <Lane car={rival} pos={them.d / QUARTER_MILE} speed={them.v * 3.6} color="#38bdf8" />
        </div>
      </div>

      {/* Christmas tree + launch */}
      <div className="card flex items-center gap-4 p-4">
        <Tree lights={lights} phase={phase} />
        <div className="flex-1">
          {phase === 'idle' && <p className="text-sm text-zinc-400">Stage your car, wait for the ambers, then hit <b className="text-white">LAUNCH</b> the instant it goes green. Jump early and you red-light!</p>}
          {phase === 'staging' && <p className="font-display text-lg font-bold text-amberx-400">Staged… wait for it</p>}
          {phase === 'tree' && <p className="font-display text-lg font-bold text-white">{lights === 4 ? 'GO GO GO!' : 'Ready…'}</p>}
          {phase === 'racing' && <p className="text-sm text-zinc-400">Reaction time: <b className="font-mono text-white">{rt?.toFixed(3)} s</b></p>}
          {phase === 'foul' && <p className="font-display text-lg font-bold text-red-400">🔴 RED LIGHT! You jumped the start.</p>}
          {phase === 'done' && result.current && (
            <div className="animate-fadeUp">
              <p className={`font-display text-2xl font-bold ${result.current.win ? 'text-emerald-400' : 'text-red-400'}`}>{result.current.win ? '🏆 YOU WIN!' : '💨 You lost'}</p>
              <p className="text-xs text-zinc-400">by {Math.abs(result.current.myFinish - result.current.rivalFinish).toFixed(3)} s · drag wins: {wins}</p>
            </div>
          )}
        </div>
      </div>

      {busy && phase !== 'racing' ? (
        <button onPointerDown={() => launch()} className="h-24 w-full select-none rounded-2xl bg-gradient-to-r from-emerald-500 to-lime-400 font-display text-3xl font-bold tracking-widest text-black shadow-[0_0_40px_-6px_#22c55e] active:scale-[.98]">LAUNCH</button>
      ) : (
        <button onClick={stage} disabled={phase === 'racing'} className="btn-primary h-16 w-full text-lg">{phase === 'idle' ? '🚦 Stage & race' : '🔁 Race again'}</button>
      )}

      {(phase === 'done' || phase === 'foul') && (
        <div className="card overflow-x-auto p-4">
          <table className="w-full min-w-[320px] text-sm">
            <thead><tr className="text-left text-xs uppercase tracking-wider text-zinc-500"><th className="pb-2">Timeslip</th><th className="pb-2 text-racing-400">You</th><th className="pb-2 text-sky-400">Rival</th></tr></thead>
            <tbody className="font-mono">
              <tr className="border-t border-white/5"><td className="py-1.5 font-sans text-zinc-500">Reaction</td><td>{rt != null ? rt.toFixed(3) : 'FOUL'}</td><td>{ai.current.toFixed(3)}</td></tr>
              <tr className="border-t border-white/5"><td className="py-1.5 font-sans text-zinc-500">¼ mile ET</td><td>{pMine.et.toFixed(2)} s</td><td>{pRival.et.toFixed(2)} s</td></tr>
              <tr className="border-t border-white/5"><td className="py-1.5 font-sans text-zinc-500">Trap speed</td><td>{Math.round(pMine.trap)} km/h</td><td>{Math.round(pRival.trap)} km/h</td></tr>
              <tr className="border-t border-white/5"><td className="py-1.5 font-sans text-zinc-500">Power</td><td>{mine.horsepower} hp</td><td>{rival.horsepower} hp</td></tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-zinc-500">ETs are simulated from each car&apos;s real 0–100 km/h time and top speed. A quick reaction can beat a faster car: that&apos;s drag racing!</p>
        </div>
      )}
    </div>
  )
}

function Picker({ label, car, onChange, disabled, color }) {
  return (
    <label className="card block overflow-hidden">
      <Img wiki={car.wiki} width={480} alt={car.name} className="aspect-[16/10] w-full" />
      <div className="p-2.5">
        <span className={`text-[10px] font-bold uppercase tracking-wider ${color}`}>{label}</span>
        <select className="mt-1 w-full truncate rounded-lg border border-white/10 bg-ink-900 px-2 py-2 text-sm font-semibold text-white" value={car.id} disabled={disabled} onChange={(e) => onChange(cars.find((c) => c.id === e.target.value))}>
          {sorted.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>
    </label>
  )
}

function Lane({ car, pos, speed, color }) {
  const p = Math.min(1, pos)
  return (
    <div className="relative h-14">
      <div className="absolute top-1/2 -translate-y-1/2" style={{ left: `calc(${p * 100}% * 0.86)` }}>
        <div className="relative flex items-center">
          {speed > 30 && <div className="absolute right-full top-1/2 h-1 -translate-y-1/2 rounded-full" style={{ width: Math.min(80, speed / 3), background: `linear-gradient(90deg, transparent, ${color})` }} />}
          <CarSilhouette className="h-9 w-24" style={{ color }} />
        </div>
      </div>
      <div className="absolute right-10 top-0 rounded bg-black/60 px-1.5 text-[10px] font-semibold text-zinc-300">{car.name.length > 22 ? car.name.slice(0, 21) + '…' : car.name} · <span className="font-mono">{Math.round(speed)} km/h</span></div>
    </div>
  )
}

function Tree({ lights, phase }) {
  const dot = (on, color) => <span className={`block h-5 w-5 rounded-full sm:h-6 sm:w-6 border border-black/40 ${on ? '' : 'opacity-15'}`} style={{ background: color, boxShadow: on ? `0 0 16px ${color}` : 'none' }} />
  return (
    <div className="flex shrink-0 flex-col items-center gap-1.5 rounded-xl bg-black/60 px-2.5 py-2">
      {dot(phase !== 'idle', '#fde68a')}
      {dot(lights >= 1, '#f59e0b')}
      {dot(lights >= 2, '#f59e0b')}
      {dot(lights >= 3, '#f59e0b')}
      {dot(lights === 4, '#22c55e')}
      {dot(lights === -1, '#ef4444')}
    </div>
  )
}
