import { useEffect, useRef, useState } from 'react'
import { useLoop } from '../../hooks/useLoop.js'
import { AnimFrame, Slider } from './Controls.jsx'
import { Gauge } from './BrakeAnimation.jsx'
import { useProgress } from '../../context/ProgressContext.jsx'

const MODES = {
  turbo: { label: 'Turbo', desc: 'Exhaust gas spins a turbine, which drives the compressor on the same shaft. Free energy, but it takes time to spool up (turbo lag).' },
  super: { label: 'Supercharger', desc: 'The compressor is belt-driven by the crankshaft. Boost arrives instantly with engine speed, but it costs engine power to drive it.' },
  na: { label: 'Naturally Aspirated', desc: 'No compressor. The engine breathes at atmospheric pressure: instant, linear response but less power per litre.' },
}

function Wheel({ cx, cy, r, angle, color, blades = 8 }) {
  return (
    <g transform={`rotate(${angle} ${cx} ${cy})`}>
      <circle cx={cx} cy={cy} r={r} fill="#18181b" stroke={color} strokeWidth="2" />
      {Array.from({ length: blades }).map((_, i) => {
        const a = (i / blades) * 360
        return <path key={i} d={`M${cx} ${cy} q ${r * 0.55} ${-r * 0.2} ${r * 0.9} ${-r * 0.05}`} stroke={color} strokeWidth="3" fill="none" transform={`rotate(${a} ${cx} ${cy})`} />
      })}
      <circle cx={cx} cy={cy} r={r * 0.22} fill={color} />
    </g>
  )
}

export default function TurboAnimation() {
  const { seeAnimation } = useProgress()
  useEffect(() => { seeAnimation('turbo') }, [seeAnimation])

  const [mode, setMode] = useState('turbo')
  const [throttle, setThrottle] = useState(0.3)
  const [maxBoost, setMaxBoost] = useState(1.2)
  const sim = useRef({ rpm: 1500, spool: 0, boost: 0, angle: 0, ex: 0, inn: 0, belt: 0, bov: 0, lastThrottle: 0.3, wastegate: 0 })

  useLoop(true, (dt) => {
    const s = sim.current
    const targetRpm = 900 + throttle * 6100
    s.rpm += (targetRpm - s.rpm) * Math.min(1, dt * 2.2)
    const load = s.rpm / 7000
    if (mode === 'turbo') {
      // Exhaust energy ∝ rpm × throttle; turbo spools with lag
      const energy = Math.max(0, load * (0.3 + throttle * 1.2) - 0.18)
      s.spool += (Math.min(1.25, energy) - s.spool) * Math.min(1, dt * 1.1)
      const raw = Math.max(0, s.spool * 2.1 - 0.15)
      s.wastegate = raw > maxBoost ? Math.min(1, (raw - maxBoost) * 3) : 0
      s.boost = Math.min(raw, maxBoost) * (throttle > 0.05 ? 1 : 0.1)
    } else if (mode === 'super') {
      s.spool = load
      s.wastegate = 0
      s.boost = Math.min(maxBoost, load * maxBoost * 1.25) * (0.35 + throttle * 0.65)
    } else {
      s.spool = 0; s.boost = 0; s.wastegate = 0
    }
    // Blow-off valve: sudden lift with boost
    if (mode !== 'na' && s.lastThrottle - throttle > 0.25 && s.boost > 0.3) s.bov = 1
    s.bov = Math.max(0, s.bov - dt * 1.4)
    s.lastThrottle += (throttle - s.lastThrottle) * Math.min(1, dt * 3)
    const turboRpm = mode === 'turbo' ? s.spool * 180000 : mode === 'super' ? s.rpm * 2.6 : 0
    s.angle = (s.angle + (turboRpm / 60) * 360 * dt * 0.004) % 360
    s.ex += dt * (20 + load * 160)
    s.inn += dt * (15 + (load + s.boost * 0.5) * 140)
    s.belt += dt * s.rpm * 0.03
    s.turboRpm = turboRpm
  })

  const s = sim.current
  const hp = Math.round(160 * (s.rpm / 6000) * (s.rpm > 6200 ? 0.97 : 1) * (1 + s.boost) * (mode === 'super' ? 0.9 : 1) * (0.25 + throttle * 0.75))
  const compActive = mode !== 'na'
  const turbActive = mode === 'turbo'
  const exColor = '#ff6a3d'
  const inColor = s.boost > 0.2 ? '#7dd3fc' : '#bae6fd'

  const svg = (
    <svg viewBox="0 0 520 330" className="w-full max-w-[600px]" role="img" aria-label={`${MODES[mode].label} diagram`}>
      {/* Air filter */}
      <rect x="452" y="18" width="56" height="34" rx="8" fill="#27272a" stroke="#3f3f46" />
      <text x="480" y="39" textAnchor="middle" className="fill-zinc-400 text-[9px] font-semibold">AIR FILTER</text>
      {/* Intake path: filter → compressor → intercooler → manifold */}
      <path id="intakePath" d="M480 52 V96 H452 M410 110 H120 V70 M120 70 H70 V210 H120 V150 H230 V128" fill="none" stroke="#1f2937" strokeWidth="14" strokeLinejoin="round" />
      <path d="M480 52 V96 H452" fill="none" stroke={inColor} strokeWidth="3" strokeDasharray="6 10" strokeDashoffset={-s.inn} />
      {compActive && <path d="M410 110 H120 V70 H70 V210 H120 V150 H230 V128" fill="none" stroke={inColor} strokeWidth="3" strokeDasharray="6 10" strokeDashoffset={-s.inn} opacity={0.4 + Math.min(0.6, s.boost)} />}
      {!compActive && <path d="M452 96 H120 V150 H230 V128" fill="none" stroke={inColor} strokeWidth="3" strokeDasharray="6 10" strokeDashoffset={-s.inn} />}
      {/* Intercooler */}
      <rect x="56" y="64" width="28" height="152" rx="5" fill="#0f172a" stroke={compActive ? '#38bdf8' : '#334155'} strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="58" x2="82" y1={74 + i * 12} y2={74 + i * 12} stroke="#334155" />)}
      <text x="70" y="232" textAnchor="middle" className="fill-sky-400/80 text-[9px] font-semibold">INTERCOOLER</text>
      {/* Engine */}
      <rect x="160" y="128" width="170" height="110" rx="12" fill="#2a2e37" stroke="#3a3f4b" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => {
        const phase = (s.belt * 0.6 + i * 180) % 720
        const fire = phase < 60
        return <circle key={i} cx={186 + i * 40} cy={176} r="15" fill={fire ? '#ff6a3d' : '#16181d'} stroke="#52525b" strokeWidth="2" opacity={fire ? 0.6 + throttle * 0.4 : 1} />
      })}
      <text x="245" y="222" textAnchor="middle" className="fill-zinc-400 text-[10px] font-semibold">ENGINE · {Math.round(s.rpm)} rpm</text>
      {/* Crank pulley + belt for supercharger */}
      <g transform={`rotate(${s.belt} 190 256)`}><circle cx="190" cy="256" r="14" fill="#3f3f46" stroke="#71717a" strokeWidth="2" /><line x1="190" y1="244" x2="190" y2="268" stroke="#a1a1aa" strokeWidth="2" /></g>
      {mode === 'super' && (
        <path d="M176 256 L396 118 M204 260 L426 128" stroke="#facc15" strokeWidth="3" strokeDasharray="8 6" strokeDashoffset={-s.belt * 0.4} opacity=".85" />
      )}
      {/* Exhaust manifold → turbine → downpipe */}
      <path d="M330 200 H372 V236 H398" fill="none" stroke="#1f2937" strokeWidth="14" />
      <path d="M330 200 H372 V236 H398" fill="none" stroke={exColor} strokeWidth="3" strokeDasharray="6 10" strokeDashoffset={-s.ex} />
      <path d="M432 270 V318" fill="none" stroke="#1f2937" strokeWidth="14" />
      <path d="M432 270 V318" fill="none" stroke="#a1a1aa" strokeWidth="3" strokeDasharray="6 10" strokeDashoffset={-s.ex} />
      {/* Wastegate bypass */}
      {turbActive && (
        <g>
          <path d="M372 236 V300 H424" fill="none" stroke="#1f2937" strokeWidth="8" />
          <path d="M372 236 V300 H424" fill="none" stroke={exColor} strokeWidth="2" strokeDasharray="5 8" strokeDashoffset={-s.ex} opacity={s.wastegate} />
          <rect x="364" y={252 - s.wastegate * 8} width="16" height="6" rx="2" fill="#facc15" />
          <text x="300" y="312" className={`text-[9px] font-bold ${s.wastegate > 0.05 ? 'fill-yellow-300' : 'fill-zinc-600'}`}>WASTEGATE {s.wastegate > 0.05 ? 'OPEN' : 'CLOSED'}</text>
        </g>
      )}
      {/* Turbo / supercharger unit */}
      <rect x="426" y="136" width="12" height="82" fill={turbActive ? '#a1a1aa' : '#3f3f46'} />
      <circle cx="432" cy="110" r="34" fill="#0f172a" stroke={compActive ? '#38bdf8' : '#334155'} strokeWidth="3" />
      <Wheel cx={432} cy={110} r={24} angle={compActive ? s.angle : 0} color={compActive ? '#7dd3fc' : '#334155'} />
      <text x="432" y="62" textAnchor="middle" className="fill-sky-300 text-[10px] font-bold">{mode === 'super' ? 'SUPERCHARGER' : 'COMPRESSOR'}</text>
      <circle cx="432" cy="240" r="34" fill="#1c1917" stroke={turbActive ? '#ff6a3d' : '#3f3f46'} strokeWidth="3" />
      <Wheel cx={432} cy={240} r={24} angle={turbActive ? -s.angle : 0} color={turbActive ? '#fb923c' : '#3f3f46'} />
      <text x="474" y="212" className="fill-orange-300 text-[10px] font-bold">{turbActive ? 'TURBINE' : ''}</text>
      {/* Blow-off valve */}
      {s.bov > 0.05 && (
        <g opacity={s.bov}>
          <text x="300" y="96" className="fill-white font-display text-[16px] font-bold">PSSHHH!</text>
          <path d="M300 104 q-20 -10 -40 0 M300 104 q-20 -20 -45 -14" stroke="#e0f2fe" strokeWidth="2" fill="none" />
          <text x="300" y="80" className="fill-zinc-400 text-[9px]">blow-off valve</text>
        </g>
      )}
      <text x="140" y="100" className="fill-sky-300/80 text-[9px] font-semibold">{compActive ? 'COMPRESSED AIR' : 'AIR AT 1 BAR'}</text>
    </svg>
  )

  const side = (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.entries(MODES).map(([k, m]) => (
          <button key={k} onClick={() => setMode(k)} className={`chip ${mode === k ? 'chip-active' : ''}`}>{m.label}</button>
        ))}
      </div>
      <p className="text-sm leading-6 text-zinc-400">{MODES[mode].desc}</p>
      <div className="grid grid-cols-2 gap-3">
        <Gauge label="Boost" value={s.boost.toFixed(2)} unit="bar" />
        <Gauge label={mode === 'super' ? 'Blower speed' : 'Turbo speed'} value={Math.round((s.turboRpm || 0) / 1000)} unit="k rpm" />
        <Gauge label="Engine" value={Math.round(s.rpm)} unit="rpm" />
        <Gauge label="Power (est.)" value={hp} unit="hp" />
      </div>
      <div>
        <div className="mb-1 flex justify-between text-xs text-zinc-500"><span>Boost</span><span>max {maxBoost.toFixed(1)} bar</span></div>
        <div className="h-3 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-racing-500" style={{ width: `${(s.boost / 1.8) * 100}%` }} />
        </div>
      </div>
      <p className="text-xs text-zinc-500">Tip: in Turbo mode, slam the throttle from 0 to 100% and watch the boost lag behind. Then lift off quickly to hear the blow-off valve.</p>
    </div>
  )

  return (
    <AnimFrame
      title="Turbo vs Supercharger vs NA"
      subtitle="Control the throttle and see how forced induction crams air into the engine."
      side={side}
      controls={
        <>
          <button className="btn-ghost" onClick={() => setThrottle(1)}>Floor it</button>
          <button className="btn-ghost" onClick={() => setThrottle(0)}>Lift off</button>
          <Slider label="Throttle" value={throttle} min={0} max={1} onChange={setThrottle} format={(v) => `${Math.round(v * 100)}%`} />
          <Slider label="Max boost (wastegate)" value={maxBoost} min={0.6} max={1.8} onChange={setMaxBoost} format={(v) => `${v.toFixed(1)} bar`} />
        </>
      }
    >
      {svg}
    </AnimFrame>
  )
}
