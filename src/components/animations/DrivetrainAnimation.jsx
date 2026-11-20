import { useEffect, useRef, useState } from 'react'
import { useLoop } from '../../hooks/useLoop.js'
import { AnimFrame, Slider } from './Controls.jsx'
import { useProgress } from '../../context/ProgressContext.jsx'

const LAYOUTS = {
  FWD: { name: 'Front-Wheel Drive', split: [100, 0], weight: 0.62, examples: 'VW Golf, Honda Civic, Toyota Corolla', pros: ['Cheap & compact', 'More cabin space', 'Good in snow (weight over driven wheels)'], cons: ['Torque steer at high power', 'Understeer when pushed', 'Weight shifts off the fronts under acceleration'] },
  RWD: { name: 'Rear-Wheel Drive', split: [0, 100], weight: 0.48, examples: 'BMW 3 Series, Mazda MX-5, Ford Mustang', pros: ['Pure steering feel', 'Better balance', 'Weight transfer helps traction when accelerating'], cons: ['Less grip on ice/snow', 'Transmission tunnel', 'Can oversteer'] },
  AWD: { name: 'All-Wheel Drive', split: [40, 60], weight: 1, examples: 'Audi quattro, Subaru WRX, Tesla Dual Motor', pros: ['Best all-weather traction', 'Deploys big power', 'Automatic torque shifting'], cons: ['Heavier & more complex', 'Slightly higher fuel use', 'Does not help braking'] },
  '4WD': { name: 'Part-time 4WD (locked)', split: [50, 50], weight: 1, examples: 'Jeep Wrangler, Toyota Land Cruiser, Suzuki Jimny', pros: ['Maximum off-road traction', 'Low-range gearing', 'Locking diffs'], cons: ['Driveline wind-up on dry tarmac', 'Not for everyday road use', 'Heavier'] },
}
const SURFACES = { Dry: 1.0, Wet: 0.7, Snow: 0.3, Ice: 0.12 }

const W = { FL: [90, 110], FR: [270, 110], RL: [90, 350], RR: [270, 350] }

function Wheel({ x, y, phase, driven, slip, label }) {
  const off = ((phase % 12) + 12) % 12
  const id = `w-${label}`
  return (
    <g>
      <clipPath id={id}><rect x={x - 17} y={y - 36} width="34" height="72" rx="8" /></clipPath>
      <rect x={x - 17} y={y - 36} width="34" height="72" rx="8" fill="#111" stroke={slip ? '#ef4444' : driven ? '#ff6a3d' : '#3f3f46'} strokeWidth={driven ? 3 : 2} />
      <g clipPath={`url(#${id})`}>
        {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={x - 17} x2={x + 17} y1={y - 48 + i * 12 + off} y2={y - 48 + i * 12 + off} stroke="#3f3f46" strokeWidth="4" />)}
      </g>
      {slip && <text x={x} y={y + 54} textAnchor="middle" className="fill-red-400 text-[10px] font-bold">SPIN!</text>}
    </g>
  )
}

export default function DrivetrainAnimation() {
  const { seeAnimation } = useProgress()
  useEffect(() => { seeAnimation('drivetrain') }, [seeAnimation])

  const [layout, setLayout] = useState('AWD')
  const [surface, setSurface] = useState('Dry')
  const [throttle, setThrottle] = useState(0.6)
  const [corner, setCorner] = useState(false)
  const sim = useRef({ phase: { FL: 0, FR: 0, RL: 0, RR: 0 }, flow: 0, speed: 0 })

  const L = LAYOUTS[layout]
  const mu = SURFACES[surface]
  // Traction model: available accel ∝ grip × share of weight on driven wheels (+ rear weight transfer)
  const drivenWeight = layout === 'RWD' ? L.weight + 0.08 * throttle : layout === 'FWD' ? L.weight - 0.08 * throttle : 1
  const demand = throttle
  const available = mu * drivenWeight * 1.6
  const slipping = demand > available + 0.02
  // AWD adapts its split when slipping (sends torque to the axle with grip)
  const split = layout === 'AWD' && slipping ? [50, 50] : L.split
  const accel = Math.min(demand, available)

  useLoop(true, (dt) => {
    const s = sim.current
    s.speed += (accel * 120 - s.speed) * Math.min(1, dt * 0.8)
    const base = 30 + s.speed * 2.2
    s.flow += dt * (20 + throttle * 80)
    for (const k of Object.keys(W)) {
      const front = k.startsWith('F')
      const driven = front ? split[0] > 0 : split[1] > 0
      const outer = corner && k.endsWith('R') // turning left: right side is outer
      let v = base * (outer ? 1.15 : corner ? 0.87 : 1)
      if (driven && slipping) v *= 1 + (demand - available) * 4 * (layout === '4WD' || layout === 'AWD' ? 0.5 : 1)
      if (layout === '4WD' && corner) v = base // locked: all wheels forced to same speed
      s.phase[k] += v * dt
    }
  })

  const s = sim.current
  const frontDriven = split[0] > 0
  const rearDriven = split[1] > 0
  const windup = layout === '4WD' && corner && surface === 'Dry'
  const flowStyle = (on) => ({ strokeDasharray: '10 8', strokeDashoffset: -s.flow, opacity: on ? 1 : 0 })

  const svg = (
    <svg viewBox="0 0 360 470" className="w-full max-w-[340px]" role="img" aria-label={`${L.name} power flow diagram`}>
      {/* Body */}
      <rect x="100" y="40" width="160" height="390" rx="60" fill="#16181d" stroke="#2a2e37" strokeWidth="2" />
      <rect x="118" y="190" width="124" height="110" rx="18" fill="#0c0d10" stroke="#2a2e37" />
      <text x="180" y="250" textAnchor="middle" className="fill-zinc-600 text-[10px] font-semibold">CABIN</text>
      <text x="180" y="28" textAnchor="middle" className="fill-zinc-500 text-[10px] font-semibold">▲ FRONT</text>
      {/* Engine & gearbox */}
      <rect x="140" y="62" width="80" height="42" rx="8" fill="#3a3f4b" />
      <text x="180" y="88" textAnchor="middle" className="fill-zinc-200 text-[11px] font-bold">ENGINE</text>
      <rect x="160" y="118" width="40" height="44" rx="6" fill="#2a2e37" stroke="#52525b" />
      <text x="180" y="144" textAnchor="middle" className="fill-zinc-400 text-[8px] font-semibold">GEARBOX</text>
      {/* Shafts (static) */}
      <path d="M107 110 H253" stroke="#27272a" strokeWidth="7" />
      <path d="M107 350 H253" stroke="#27272a" strokeWidth="7" />
      {(rearDriven || layout !== 'FWD') && <path d="M180 162 V350" stroke="#27272a" strokeWidth="7" />}
      {/* Power flow */}
      <g stroke="#ff4d1f" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M180 104 V118" style={flowStyle(true)} />
        <path d="M180 118 V110 H107" style={flowStyle(frontDriven)} />
        <path d="M180 110 H253" style={flowStyle(frontDriven)} />
        {(layout === 'AWD' || layout === '4WD') && <path d="M180 162 V180" style={flowStyle(true)} />}
        <path d="M180 162 V350" style={flowStyle(rearDriven)} />
        <path d="M180 350 H107" style={flowStyle(rearDriven)} />
        <path d="M180 350 H253" style={flowStyle(rearDriven)} />
      </g>
      {/* Differentials */}
      <circle cx="180" cy="110" r="11" fill={frontDriven ? '#e63a10' : '#3f3f46'} />
      <circle cx="180" cy="350" r="13" fill={rearDriven ? '#e63a10' : '#3f3f46'} />
      {(layout === 'AWD' || layout === '4WD') && <rect x="166" y="174" width="28" height="22" rx="5" fill="#facc15" />}
      {(layout === 'AWD' || layout === '4WD') && <text x="210" y="190" className="fill-yellow-300 text-[9px] font-bold">{layout === 'AWD' ? 'CENTRE DIFF' : 'TRANSFER CASE'}</text>}
      <text x="200" y="114" className="fill-zinc-500 text-[8px]">front diff</text>
      <text x="198" y="372" className="fill-zinc-500 text-[8px]">rear diff</text>
      {/* Wheels */}
      {Object.entries(W).map(([k, [x, y]]) => {
        const driven = k.startsWith('F') ? frontDriven : rearDriven
        return <Wheel key={k} label={k} x={x} y={y} phase={s.phase[k]} driven={driven} slip={driven && slipping} />
      })}
      {/* Torque split labels */}
      <text x="180" y="458" textAnchor="middle" className="fill-zinc-300 font-display text-[15px] font-bold">Torque: {split[0]}% front / {split[1]}% rear</text>
      {corner && <text x="300" y="235" textAnchor="middle" className="fill-sky-300 text-[10px] font-bold">outer wheels</text>}
      {corner && <text x="300" y="248" textAnchor="middle" className="fill-sky-300 text-[10px] font-bold">turn faster →</text>}
      {windup && <text x="180" y="226" textAnchor="middle" className="fill-red-400 font-display text-[13px] font-bold">⚠ DRIVELINE WIND-UP</text>}
    </svg>
  )

  const side = (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-2">
        {Object.keys(LAYOUTS).map((k) => (
          <button key={k} onClick={() => setLayout(k)} className={`rounded-xl px-2 py-2 font-display text-sm font-bold ${layout === k ? 'bg-gradient-to-br from-racing-500 to-amberx-500 text-black' : 'bg-white/[0.05] text-zinc-300 hover:bg-white/[0.1]'}`}>{k}</button>
        ))}
      </div>
      <div>
        <div className="font-display text-lg font-bold text-white">{L.name}</div>
        <div className="text-xs text-zinc-500">e.g. {L.examples}</div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <ul className="space-y-1">{L.pros.map((p) => <li key={p} className="text-emerald-300/90">+ {p}</li>)}</ul>
        <ul className="space-y-1">{L.cons.map((p) => <li key={p} className="text-red-300/90">− {p}</li>)}</ul>
      </div>
      <div>
        <div className="mb-1 flex justify-between text-xs text-zinc-500"><span>Acceleration achieved</span><span>{Math.round((accel / Math.max(0.01, demand)) * 100)}% of demand</span></div>
        <div className="h-3 overflow-hidden rounded-full bg-white/[0.06]"><div className={`h-full rounded-full ${slipping ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ width: `${accel * 100}%` }} /></div>
        {slipping && <p className="mt-2 text-xs font-semibold text-red-300">Wheelspin: the driven tyres cannot transmit that much force on {surface.toLowerCase()} surface.</p>}
        {windup && <p className="mt-2 text-xs font-semibold text-red-300">A locked 4WD cannot let front and rear axles turn at different speeds in a corner. On dry tarmac the tyres scrub and parts are stressed.</p>}
      </div>
    </div>
  )

  return (
    <AnimFrame
      title="Where Does the Power Go?"
      subtitle="Choose a drivetrain and surface, then add throttle to see traction (and wheelspin)."
      side={side}
      controls={
        <>
          <div className="flex flex-wrap gap-2">
            {Object.keys(SURFACES).map((k) => <button key={k} onClick={() => setSurface(k)} className={`chip ${surface === k ? 'chip-active' : ''}`}>{k}</button>)}
          </div>
          <button className={`chip ${corner ? 'chip-active' : ''}`} onClick={() => setCorner(!corner)}>↰ Cornering</button>
          <Slider label="Throttle" value={throttle} min={0} max={1} onChange={setThrottle} format={(v) => `${Math.round(v * 100)}%`} />
        </>
      }
    >
      {svg}
    </AnimFrame>
  )
}
