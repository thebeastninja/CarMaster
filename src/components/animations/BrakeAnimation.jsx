import { useEffect, useRef, useState } from 'react'
import { useLoop } from '../../hooks/useLoop.js'
import { AnimFrame, Slider } from './Controls.jsx'
import { useProgress } from '../../context/ProgressContext.jsx'

const MAX_DECEL = 34 // km/h per second at full pedal (~0.95 g)

export default function BrakeAnimation() {
  const { seeAnimation } = useProgress()
  useEffect(() => { seeAnimation('brakes') }, [seeAnimation])

  const [force, setForce] = useState(0.7)
  const [holding, setHolding] = useState(false)
  const [abs, setAbs] = useState(true)
  const sim = useRef({ speed: 100, rot: 0, temp: 20, t: 0, dist: 0, locked: false, absActive: false, applied: 0, stopDist: null })

  const frameRef = useRef(null)
  useLoop(true, (dt) => {
    const s = sim.current
    s.t += dt
    const target = holding ? force : 0
    s.applied += (target - s.applied) * Math.min(1, dt * 12)
    let p = s.applied
    s.locked = false
    s.absActive = false
    if (p > 0.82 && s.speed > 5) {
      if (abs) {
        s.absActive = true
        p = 0.78 + 0.17 * (Math.sin(s.t * 2 * Math.PI * 12) > 0 ? 1 : 0)
      } else {
        s.locked = true
      }
    }
    const decel = s.locked ? MAX_DECEL * 0.68 : MAX_DECEL * Math.min(p, 0.95)
    const before = s.speed
    s.speed = Math.max(0, s.speed - decel * dt)
    if (holding && before > 0) s.dist += ((before + s.speed) / 2 / 3.6) * dt
    if (before > 0 && s.speed === 0 && holding && s.stopDist === null) s.stopDist = s.dist
    if (!s.locked) s.rot = (s.rot + s.speed * dt * 9) % 360
    s.temp += (p * before * dt * 1.6) - (s.temp - 20) * dt * 0.25
  }, frameRef)

  const s = sim.current
  const p = s.applied
  const padGap = 10 - p * 9
  const heat = Math.min(1, (s.temp - 20) / 420)
  const discColor = `rgb(${Math.round(110 + heat * 145)}, ${Math.round(110 - heat * 50)}, ${Math.round(118 - heat * 90)})`

  const accelerate = () => { Object.assign(sim.current, { speed: 100, dist: 0, stopDist: null }) }

  const svg = (
    <svg viewBox="0 0 520 330" className="w-full max-w-[560px]" role="img" aria-label="Hydraulic disc brake diagram">
      <defs>
        <radialGradient id="glow"><stop offset="0" stopColor="#ff4d1f" stopOpacity={heat * 0.8} /><stop offset="1" stopColor="#ff4d1f" stopOpacity="0" /></radialGradient>
      </defs>
      {/* Pedal */}
      <g transform={`rotate(${p * 22} 60 70)`}>
        <rect x="55" y="70" width="10" height="140" rx="4" fill="#71717a" />
        <rect x="32" y="200" width="56" height="16" rx="6" fill="#d4d4d8" />
      </g>
      <circle cx="60" cy="70" r="7" fill="#a1a1aa" />
      <text x="20" y="250" className="fill-zinc-400 text-[11px] font-semibold">BRAKE PEDAL</text>
      {/* Pushrod & booster */}
      <line x1="64" y1="110" x2={110 + p * 16} y2="110" stroke="#a1a1aa" strokeWidth="5" />
      <circle cx="140" cy="110" r="30" fill="#2a2e37" stroke="#3a3f4b" strokeWidth="2" />
      <text x="140" y="155" textAnchor="middle" className="fill-zinc-500 text-[10px]">BOOSTER</text>
      {/* Master cylinder */}
      <rect x="172" y="96" width="70" height="28" rx="5" fill="#3a3f4b" />
      <rect x="176" y="100" width={8 + p * 30} height="20" fill="#a1a1aa" />
      <rect x="196" y="78" width="26" height="18" rx="3" fill="#facc15" opacity=".7" />
      <text x="207" y="70" textAnchor="middle" className="fill-zinc-400 text-[10px]">MASTER CYL.</text>
      {/* Brake line */}
      <path d="M242 110 H300 V60 H372" fill="none" stroke="#1f2937" strokeWidth="9" />
      <path d="M242 110 H300 V60 H372" fill="none" stroke={`rgba(250,204,21,${0.25 + p * 0.75})`} strokeWidth="5" strokeDasharray={p > 0.05 ? '10 6' : '0'} style={{ animation: p > 0.05 ? 'flow .5s linear infinite' : 'none' }} />
      <text x="250" y="140" className="fill-zinc-500 text-[10px]">FLUID: {Math.round(p * 120)} bar</text>

      {/* Disc */}
      <circle cx="400" cy="200" r="118" fill="url(#glow)" />
      <g transform={`rotate(${s.rot} 400 200)`}>
        <circle cx="400" cy="200" r="95" fill={discColor} stroke="#27272a" strokeWidth="3" />
        <circle cx="400" cy="200" r="70" fill="none" stroke="rgba(0,0,0,.25)" strokeWidth="1" />
        {Array.from({ length: 18 }).map((_, i) => {
          const ang = (i / 18) * Math.PI * 2
          return <circle key={i} cx={400 + Math.cos(ang) * 82} cy={200 + Math.sin(ang) * 82} r="3.2" fill="#18181b" />
        })}
        <circle cx="400" cy="200" r="42" fill="#3f3f46" />
        {Array.from({ length: 5 }).map((_, i) => {
          const ang = (i / 5) * Math.PI * 2
          return <circle key={i} cx={400 + Math.cos(ang) * 24} cy={200 + Math.sin(ang) * 24} r="5" fill="#d4d4d8" />
        })}
        <rect x="397" y="108" width="6" height="14" fill="#ff4d1f" />
      </g>
      {/* Caliper */}
      <path d="M340 70 Q400 34 460 70 L452 104 Q400 78 348 104 Z" fill="#e63a10" />
      <text x="400" y="66" textAnchor="middle" className="fill-black font-display text-[13px] font-bold">CALIPER</text>
      {/* Cross-section inset */}
      <g transform="translate(22 268)">
        <rect width="220" height="56" rx="8" fill="rgba(0,0,0,.35)" stroke="#2a2e37" />
        <text x="10" y="14" className="fill-zinc-500 text-[9px] font-semibold">CROSS-SECTION: PADS CLAMP THE DISC</text>
        <rect x="104" y="20" width="12" height="32" fill={discColor} />
        <rect x={104 - padGap - 10} y="23" width="10" height="26" fill="#a16207" />
        <rect x={104 - padGap - 26} y="21" width="16" height="30" fill="#71717a" />
        <rect x={116 + padGap} y="23" width="10" height="26" fill="#a16207" />
        <rect x={116 + padGap + 10} y="21" width="16" height="30" fill="#71717a" />
      </g>
    </svg>
  )

  const status = s.locked ? { t: 'WHEELS LOCKED: SKIDDING!', c: 'text-red-400' } : s.absActive ? { t: 'ABS ACTIVE: PULSING', c: 'text-amberx-400' } : p > 0.05 ? { t: 'BRAKING', c: 'text-racing-300' } : s.speed > 0 ? { t: 'ROLLING', c: 'text-emerald-300' } : { t: 'STOPPED', c: 'text-zinc-400' }

  const side = (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Gauge label="Speed" value={`${Math.round(s.speed)}`} unit="km/h" />
        <Gauge label="Disc temp" value={`${Math.round(s.temp)}`} unit="°C" warn={s.temp > 300} />
        <Gauge label="Braking dist." value={`${s.dist.toFixed(1)}`} unit="m" />
        <Gauge label="Last stop" value={s.stopDist ? s.stopDist.toFixed(1) : '—'} unit="m" />
      </div>
      <div className={`rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-center font-display text-sm font-bold tracking-wider ${status.c}`}>{status.t}</div>
      <ol className="space-y-1.5 text-sm text-zinc-400">
        <li><b className="text-zinc-200">1.</b> Your foot pushes the pedal; the booster multiplies the force.</li>
        <li><b className="text-zinc-200">2.</b> The master cylinder pressurises brake fluid.</li>
        <li><b className="text-zinc-200">3.</b> Fluid pushes caliper pistons, clamping pads onto the disc.</li>
        <li><b className="text-zinc-200">4.</b> Friction turns motion into heat. Watch the disc glow!</li>
      </ol>
      <p className="text-xs text-zinc-500">Try a full-force stop with ABS off: the wheel locks, the car skids, and the stopping distance grows.</p>
    </div>
  )

  return (
    <AnimFrame
      frameRef={frameRef}
      title="How Brakes Work"
      subtitle="Hold the brake button. Compare stops with ABS on and off."
      side={side}
      controls={
        <>
          <button
            className={`btn select-none ${holding ? 'bg-red-600 text-white' : 'bg-red-500/90 text-white hover:bg-red-500'} !px-6`}
            onPointerDown={(e) => { try { e.currentTarget.setPointerCapture?.(e.pointerId) } catch { /* synthetic event */ } setHolding(true) }}
            onPointerUp={() => setHolding(false)}
            onPointerCancel={() => setHolding(false)}
            onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setHolding(true) } }}
            onKeyUp={() => setHolding(false)}
          >
            🛑 Hold to brake
          </button>
          <button className="btn-ghost" onClick={accelerate}>🚀 Back to 100 km/h</button>
          <button className={`btn ${abs ? 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border border-red-500/40 bg-red-500/10 text-red-300'}`} onClick={() => setAbs(!abs)}>
            ABS: {abs ? 'ON' : 'OFF'}
          </button>
          <Slider label="Pedal force" value={force} min={0.1} max={1} onChange={setForce} format={(v) => `${Math.round(v * 100)}%`} />
        </>
      }
    >
      {svg}
    </AnimFrame>
  )
}

export function Gauge({ label, value, unit, warn }) {
  return (
    <div className={`rounded-xl border p-3 ${warn ? 'border-red-500/40 bg-red-500/10' : 'border-white/[0.07] bg-white/[0.03]'}`}>
      <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{label}</div>
      <div className="font-display text-2xl font-bold text-white">{value}<span className="ml-1 text-xs font-medium text-zinc-500">{unit}</span></div>
    </div>
  )
}
