import { useEffect, useRef, useState } from 'react'
import { useLoop } from '../hooks/useLoop.js'
import { AnimFrame, PlayButton, Slider } from './animations/Controls.jsx'
import { useProgress } from '../context/ProgressContext.jsx'

const STROKES = [
  { name: 'Intake', nick: 'Suck', color: '#38bdf8', desc: 'Piston moves down, intake valve open. Air and fuel are drawn into the cylinder.' },
  { name: 'Compression', nick: 'Squeeze', color: '#f59e0b', desc: 'Both valves closed. Piston rises and compresses the mixture ~10:1.' },
  { name: 'Power', nick: 'Bang', color: '#ff4d1f', desc: 'Spark plug fires near TDC. Burning gas pushes the piston down: the only stroke that makes power.' },
  { name: 'Exhaust', nick: 'Blow', color: '#a1a1aa', desc: 'Exhaust valve opens. Piston rises and pushes burnt gas out to the exhaust.' },
]

// Geometry
const CX = 160, CY = 400, R = 45, L = 120, HEAD_Y = 195, BORE_L = 104, BORE_R = 216
const rad = (d) => (d * Math.PI) / 180

function pistonPinY(theta) {
  const t = rad(theta)
  return CY - (R * Math.cos(t) + Math.sqrt(L * L - (R * Math.sin(t)) ** 2))
}

// Valve lift profile (0..1) over a 180° window, starting slightly early/late for realism
const lift = (a, start, end) => {
  if (a < start || a > end) return 0
  return Math.sin(((a - start) / (end - start)) * Math.PI)
}

export default function EngineAnimation({ compact }) {
  const [playing, setPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)
  const angle = useRef(0)
  const [, force] = useState(0)
  const jump = (deg) => { angle.current = ((deg % 720) + 720) % 720; setPlaying(false); force((x) => x + 1) }
  const { seeAnimation } = useProgress()

  useEffect(() => { seeAnimation('fourStroke') }, [seeAnimation])

  // 1× = 120° of crank per second (one full cycle every 6 s)
  const frameRef = useRef(null)
  useLoop(playing, (dt) => { angle.current = (angle.current + dt * 120 * speed) % 720 }, frameRef)

  const a = ((angle.current % 720) + 720) % 720
  const strokeIdx = Math.floor(a / 180)
  const stroke = STROKES[strokeIdx]
  const within = (a % 180) / 180

  const pinY = pistonPinY(a % 360)
  const pistonTop = pinY - 22
  const crankX = CX + R * Math.sin(rad(a % 360))
  const crankY = CY - R * Math.cos(rad(a % 360))

  const inLift = lift(a, 0, 200) * 14
  const exLift = lift(a, 520, 720) * 14
  const spark = a > 345 && a < 375

  // Gas colour per stroke
  let gas = 'rgba(56,189,248,0.25)'
  if (strokeIdx === 1) gas = `rgba(245,158,11,${0.2 + within * 0.35})`
  if (strokeIdx === 2) gas = `rgba(255,${Math.round(120 + within * 40)},31,${0.85 - within * 0.55})`
  if (strokeIdx === 3) gas = `rgba(161,161,170,${0.45 - within * 0.3})`

  const svg = (
    <svg viewBox="0 0 320 470" className={`w-full ${compact ? 'max-w-[280px]' : 'max-w-[360px]'}`} role="img" aria-label={`Four-stroke engine, ${stroke.name} stroke`}>
      <defs>
        <linearGradient id="metal" x1="0" x2="1"><stop offset="0" stopColor="#3a3f4b" /><stop offset=".5" stopColor="#6b7280" /><stop offset="1" stopColor="#3a3f4b" /></linearGradient>
        <linearGradient id="pistonG" x1="0" x2="1"><stop offset="0" stopColor="#71717a" /><stop offset=".5" stopColor="#d4d4d8" /><stop offset="1" stopColor="#71717a" /></linearGradient>
        <radialGradient id="flash"><stop offset="0" stopColor="#fff7d6" /><stop offset=".4" stopColor="#ffb547" /><stop offset="1" stopColor="#ff4d1f" stopOpacity="0" /></radialGradient>
      </defs>

      {/* Intake & exhaust ports */}
      <path d="M20 120 H118 V180" fill="none" stroke="#1f2937" strokeWidth="26" />
      <path d="M302 120 H202 V180" fill="none" stroke="#1f2937" strokeWidth="26" />
      <path d="M20 120 H118 V180" fill="none" stroke="#38bdf8" strokeOpacity={inLift > 1 ? 0.6 : 0.12} strokeWidth="3" strokeDasharray="8 8" style={{ animation: inLift > 1 ? 'flow .6s linear infinite' : 'none' }} />
      <path d="M202 180 V120 H302" fill="none" stroke="#a1a1aa" strokeOpacity={exLift > 1 ? 0.7 : 0.12} strokeWidth="3" strokeDasharray="8 8" style={{ animation: exLift > 1 ? 'flow .6s linear infinite' : 'none' }} />
      <text x="22" y="104" className="fill-sky-400 text-[11px] font-semibold">AIR + FUEL IN</text>
      <text x="230" y="104" className="fill-zinc-400 text-[11px] font-semibold">EXHAUST</text>

      {/* Cylinder head */}
      <rect x="86" y="150" width="148" height="45" rx="6" fill="url(#metal)" />
      {/* Cylinder walls */}
      <rect x={BORE_L - 14} y={HEAD_Y} width="14" height="150" fill="#2a2e37" />
      <rect x={BORE_R} y={HEAD_Y} width="14" height="150" fill="#2a2e37" />
      {/* Water jacket hint */}
      <rect x={BORE_L - 10} y={HEAD_Y + 10} width="4" height="130" fill="#38bdf8" opacity=".25" />
      <rect x={BORE_R + 6} y={HEAD_Y + 10} width="4" height="130" fill="#38bdf8" opacity=".25" />

      {/* Combustion gas */}
      <rect x={BORE_L} y={HEAD_Y} width={BORE_R - BORE_L} height={Math.max(0, pistonTop - HEAD_Y)} fill={gas} />
      {spark && <circle cx="160" cy={HEAD_Y + 6} r="34" fill="url(#flash)" />}

      {/* Valves */}
      <g transform={`translate(0 ${inLift})`}>
        <rect x="128" y="128" width="5" height="62" fill="#d4d4d8" />
        <path d="M116 190 h29 l-4 6 h-21z" fill="#38bdf8" />
        <rect x="124" y="128" width="13" height="5" rx="2" fill="#9ca3af" />
      </g>
      <g transform={`translate(0 ${exLift})`}>
        <rect x="187" y="128" width="5" height="62" fill="#d4d4d8" />
        <path d="M175 190 h29 l-4 6 h-21z" fill="#fb923c" />
        <rect x="183" y="128" width="13" height="5" rx="2" fill="#9ca3af" />
      </g>
      {/* Camshaft lobes (rotate at half speed) */}
      <g transform={`rotate(${a / 2} 130 116)`}><ellipse cx="130" cy="112" rx="9" ry="13" fill="#52525b" /></g>
      <g transform={`rotate(${a / 2 + 90} 190 116)`}><ellipse cx="190" cy="112" rx="9" ry="13" fill="#52525b" /></g>

      {/* Spark plug */}
      <rect x="155" y="132" width="10" height="26" rx="2" fill="#e5e7eb" />
      <rect x="152" y="124" width="16" height="10" rx="2" fill="#9ca3af" />
      <rect x="158" y="158" width="4" height="8" fill={spark ? '#ffd166' : '#9ca3af'} />
      {spark && <path d="M160 168 l-6 10 l8 -2 l-4 12" stroke="#fff3b0" strokeWidth="2" fill="none" />}

      {/* Piston */}
      <rect x={BORE_L + 2} y={pistonTop} width={BORE_R - BORE_L - 4} height="44" rx="4" fill="url(#pistonG)" />
      <rect x={BORE_L + 2} y={pistonTop + 6} width={BORE_R - BORE_L - 4} height="3" fill="#52525b" />
      <rect x={BORE_L + 2} y={pistonTop + 13} width={BORE_R - BORE_L - 4} height="3" fill="#52525b" />
      <circle cx={CX} cy={pinY} r="6" fill="#3f3f46" />

      {/* Connecting rod */}
      <line x1={CX} y1={pinY} x2={crankX} y2={crankY} stroke="#a1a1aa" strokeWidth="12" strokeLinecap="round" />

      {/* Crankshaft */}
      <circle cx={CX} cy={CY} r="58" fill="#16181d" stroke="#2a2e37" strokeWidth="2" />
      <g transform={`rotate(${a % 360} ${CX} ${CY})`}>
        <path d={`M${CX - 30} ${CY + 18} A 40 40 0 0 0 ${CX + 30} ${CY + 18} L ${CX + 14} ${CY} L ${CX - 14} ${CY}z`} fill="#3f3f46" />
        <rect x={CX - 9} y={CY - R - 9} width="18" height={R + 18} rx="9" fill="#71717a" />
      </g>
      <circle cx={CX} cy={CY} r="9" fill="#a1a1aa" />
      <circle cx={crankX} cy={crankY} r="7" fill="#d4d4d8" />

      {/* Labels */}
      <text x="240" y={HEAD_Y + 12} className="fill-zinc-500 text-[10px]">TDC</text>
      <line x1="232" y1={HEAD_Y + 18} x2="250" y2={HEAD_Y + 18} stroke="#3a3f4b" />
      <text x="240" y={HEAD_Y + 116} className="fill-zinc-500 text-[10px]">BDC</text>
      <line x1="232" y1={HEAD_Y + 108} x2="250" y2={HEAD_Y + 108} stroke="#3a3f4b" />

      <rect x="10" y="20" width="300" height="38" rx="10" fill="rgba(0,0,0,.35)" stroke={stroke.color} strokeOpacity=".6" />
      <text x="24" y="45" className="font-display text-[17px] font-bold" fill={stroke.color}>{strokeIdx + 1}. {stroke.name.toUpperCase()}</text>
      <text x="296" y="45" textAnchor="end" className="fill-zinc-400 font-mono text-[12px]">{Math.round(a)}°</text>
    </svg>
  )

  const side = (
    <div className="space-y-3">
      {STROKES.map((s, i) => (
        <button
          key={s.name}
          onClick={() => jump(i * 180 + 1)}
          className={`w-full rounded-xl border p-3 text-left transition ${i === strokeIdx ? 'border-white/20 bg-white/[0.06]' : 'border-white/[0.06] hover:bg-white/[0.03]'}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display font-bold" style={{ color: s.color }}>{i + 1}. {s.name}</span>
            <span className="text-xs italic text-zinc-500">"{s.nick}"</span>
          </div>
          {(i === strokeIdx || !compact) && <p className="mt-1 text-sm leading-6 text-zinc-400">{s.desc}</p>}
          {i === strokeIdx && (
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full" style={{ width: `${within * 100}%`, background: s.color }} /></div>
          )}
        </button>
      ))}
      <p className="text-xs text-zinc-500">One full cycle = 720° of crank rotation (two turns). The camshaft turns at half speed.</p>
    </div>
  )

  const rpm = Math.round(speed * 20)
  return (
    <AnimFrame
      frameRef={frameRef}
      title="Four-Stroke Engine Cycle"
      subtitle="Watch the piston, valves, spark and crankshaft. Click a stroke to jump to it."
      side={side}
      controls={
        <>
          <PlayButton playing={playing} onClick={() => setPlaying(!playing)} />
          <button className="btn-ghost" onClick={() => jump(angle.current + 15)}>Step +15°</button>
          <Slider label="Speed" value={speed} min={0.1} max={3} onChange={setSpeed} format={(v) => `${v.toFixed(1)}× (~${rpm} rpm)`} />
        </>
      }
    >
      {svg}
    </AnimFrame>
  )
}
