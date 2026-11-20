import { useEffect, useRef, useState } from 'react'
import { useLoop } from '../../hooks/useLoop.js'
import { AnimFrame, Slider } from './Controls.jsx'
import { useProgress } from '../../context/ProgressContext.jsx'

// Side-view, 5-speed + reverse manual gearbox. Radii are in SVG px and also
// define the real ratios (meshing gears share surface speed).
const IN_Y = 100, LAY_Y = 220
const CM = { x: 150, rIn: 40, rLay: 70 }
const GEARS = {
  1: { x: 270, rOut: 75, rLay: 35 },
  2: { x: 322, rOut: 65, rLay: 45 },
  3: { x: 205, rOut: 55, rLay: 55 },
  5: { x: 392, rOut: 38, rLay: 72 },
  R: { x: 444, rOut: 60, rLay: 30, idler: 15 },
}
const COLLARS = { A: { x: 296, gears: ['1', '2'] }, B: { x: 178, gears: ['3', '4'] }, C: { x: 418, gears: ['5', 'R'] } }
const FINAL_DRIVE = 3.9
const TYRE_CIRC = 2.0 // metres

const layFactor = CM.rIn / CM.rLay
const outFactor = (g) => {
  if (g === 'N') return 0
  if (g === '4') return 1
  const d = GEARS[g]
  const f = layFactor * (d.rLay / d.rOut)
  return g === 'R' ? -f : f
}
const ratioOf = (g) => (g === 'N' ? null : Math.abs(1 / outFactor(g)))

function GearSide({ x, cy, r, angle, w = 16, active, color = '#71717a' }) {
  // Teeth drawn as stripes that scroll at surface speed (angle in radians × r).
  const spacing = 7
  const off = ((angle * r) % spacing + spacing) % spacing
  const lines = []
  for (let y = cy - r - spacing + off; y < cy + r; y += spacing) lines.push(y)
  const id = `g${x}-${cy}`
  return (
    <g>
      <clipPath id={id}><rect x={x - w / 2} y={cy - r} width={w} height={r * 2} rx="3" /></clipPath>
      <rect x={x - w / 2} y={cy - r} width={w} height={r * 2} rx="3" fill={active ? '#ff6a3d' : color} stroke={active ? '#ffb547' : '#27272a'} strokeWidth={active ? 2 : 1} />
      <g clipPath={`url(#${id})`}>
        {lines.map((y, i) => <line key={i} x1={x - w / 2} x2={x + w / 2} y1={y} y2={y} stroke="rgba(0,0,0,.35)" strokeWidth="2" />)}
      </g>
    </g>
  )
}

export default function GearboxAnimation() {
  const { seeAnimation } = useProgress()
  useEffect(() => { seeAnimation('gearbox') }, [seeAnimation])

  const [gear, setGear] = useState('N')
  const [clutch, setClutch] = useState(false) // true = pedal pressed (disengaged)
  const [rpm, setRpm] = useState(2500)
  const [grind, setGrind] = useState(false)
  const s = useRef({ engine: 0, input: 0, lay: 0, out: {}, output: 0, inputSpeed: 1 })

  const frameRef = useRef(null)
  useLoop(true, (dt) => {
    const st = s.current
    const engineW = (rpm / 60) * 2 * Math.PI * 0.05 // slowed for visibility
    // Input shaft follows the engine when the clutch is engaged, coasts down when pressed
    const targetIn = clutch ? 0 : 1
    st.inputSpeed += (targetIn - st.inputSpeed) * Math.min(1, dt * (clutch ? 1.5 : 4))
    const inW = engineW * st.inputSpeed
    st.engine += engineW * dt
    st.input += inW * dt
    st.lay -= inW * layFactor * dt
    for (const g of ['1', '2', '3', '5', 'R']) {
      st.out[g] = (st.out[g] || 0) + inW * outFactor(g) * dt
    }
    st.output += inW * outFactor(gear) * dt
  }, frameRef)

  const shift = (g) => {
    if (g === gear) return
    if (!clutch && g !== 'N') {
      setGrind(true)
      setTimeout(() => setGrind(false), 900)
      return
    }
    setGear(g)
  }

  const st = s.current
  const ratio = ratioOf(gear)
  const outRpm = !clutch && gear !== 'N' ? rpm / ratio : 0
  const kmh = Math.round((outRpm / FINAL_DRIVE) * TYRE_CIRC * 0.06)

  // Collar offsets
  const collarShift = (c) => {
    if (!COLLARS[c].gears.includes(gear)) return 0
    const targetX = gear === '4' ? CM.x : GEARS[gear].x
    return Math.sign(targetX - COLLARS[c].x) * 12
  }
  const powerPath = []
  if (gear !== 'N' && !clutch) {
    if (gear === '4') powerPath.push(`M20 ${IN_Y} H500`)
    else {
      const d = GEARS[gear]
      powerPath.push(`M20 ${IN_Y} H${CM.x} V${LAY_Y} H${d.x} V${IN_Y} H500`)
    }
  }

  const svg = (
    <svg viewBox="0 0 520 320" className={`w-full max-w-[600px] ${grind ? 'animate-[shake_.15s_linear_3]' : ''}`} role="img" aria-label={`Manual gearbox in ${gear === 'N' ? 'neutral' : `gear ${gear}`}`}>
      {/* Housing */}
      <rect x="110" y="26" width="400" height="270" rx="18" fill="rgba(255,255,255,.015)" stroke="#2a2e37" strokeDasharray="6 6" />
      {/* Engine flywheel + clutch */}
      <GearSide x={30} cy={IN_Y} r={46} angle={st.engine} w={14} color="#3f3f46" />
      <text x="30" y="166" textAnchor="middle" className="fill-zinc-500 text-[9px] font-semibold">ENGINE</text>
      <rect x={clutch ? 58 : 44} y={IN_Y - 38} width="10" height="76" rx="3" fill={clutch ? '#52525b' : '#a16207'} style={{ transition: 'x .25s' }} />
      <text x="54" y="48" textAnchor="middle" className="fill-zinc-500 text-[9px] font-semibold">CLUTCH</text>
      {/* Shafts */}
      <line x1="20" y1={IN_Y} x2="155" y2={IN_Y} stroke="#9ca3af" strokeWidth="8" />
      <line x1="160" y1={IN_Y} x2="505" y2={IN_Y} stroke="#9ca3af" strokeWidth="8" />
      <line x1="135" y1={LAY_Y} x2="460" y2={LAY_Y} stroke="#6b7280" strokeWidth="8" />
      {powerPath.map((d, i) => <path key={i} d={d} fill="none" stroke="#ff4d1f" strokeWidth="3" strokeDasharray="10 8" style={{ animation: 'flow .5s linear infinite' }} opacity=".9" />)}
      {/* Constant mesh */}
      <GearSide x={CM.x} cy={IN_Y} r={CM.rIn} angle={st.input} active={!clutch && gear !== 'N'} color="#8b8b94" />
      <GearSide x={CM.x} cy={LAY_Y} r={CM.rLay} angle={-st.lay} active={!clutch && gear !== 'N' && gear !== '4'} />
      {/* Gear pairs */}
      {Object.entries(GEARS).map(([g, d]) => (
        <g key={g}>
          <GearSide x={d.x} cy={IN_Y} r={d.rOut} angle={st.out[g] || 0} active={gear === g && !clutch} color="#8b8b94" />
          <GearSide x={d.x} cy={LAY_Y} r={d.rLay} angle={-st.lay} active={gear === g && !clutch} />
          {d.idler && <GearSide x={d.x + 18} cy={IN_Y + d.rOut + d.idler} r={d.idler} angle={-(st.out[g] || 0)} w={10} active={gear === g && !clutch} color="#52525b" />}
          <text x={d.x} y="314" textAnchor="middle" className={`font-display text-[13px] font-bold ${gear === g ? 'fill-racing-400' : 'fill-zinc-500'}`}>{g}</text>
        </g>
      ))}
      <text x={CM.x} y="314" textAnchor="middle" className={`font-display text-[13px] font-bold ${gear === '4' ? 'fill-racing-400' : 'fill-zinc-500'}`}>4 (direct)</text>
      {/* Selector collars (dog clutches) */}
      {Object.entries(COLLARS).map(([c, d]) => (
        <g key={c} transform={`translate(${collarShift(c)} 0)`} style={{ transition: 'transform .25s' }}>
          <rect x={d.x - 7} y={IN_Y - 22} width="14" height="44" rx="3" fill="#facc15" opacity=".85" />
          <line x1={d.x} y1={IN_Y - 22} x2={d.x} y2="30" stroke="#facc15" strokeWidth="3" opacity=".6" />
        </g>
      ))}
      <text x="505" y="86" textAnchor="end" className="fill-zinc-400 text-[9px] font-semibold">OUTPUT →</text>
      <text x="300" y="20" textAnchor="middle" className="fill-yellow-400/70 text-[9px] font-semibold">SELECTOR FORKS</text>
      <text x="470" y={LAY_Y + 4} className="fill-zinc-500 text-[9px] font-semibold">LAYSHAFT</text>
      <text x="84" y="90" className="fill-zinc-400 text-[9px] font-semibold">INPUT</text>
    </svg>
  )

  const H = [['1', '3', '5'], ['2', '4', 'R']]
  const side = (
    <div className="space-y-4">
      <div className="mx-auto w-56">
        <div className="relative rounded-2xl border border-white/10 bg-black/40 p-3">
          <div className="grid grid-cols-3 gap-x-6 gap-y-10">
            {H[0].map((g) => <ShiftBtn key={g} g={g} gear={gear} onClick={shift} />)}
            {H[1].map((g) => <ShiftBtn key={g} g={g} gear={gear} onClick={shift} />)}
          </div>
          <div className="pointer-events-none absolute inset-x-8 top-1/2 h-0.5 -translate-y-1/2 bg-white/10" />
          <button onClick={() => setGear('N')} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 text-xs font-bold ${gear === 'N' ? 'bg-racing-500 text-black' : 'bg-ink-700 text-zinc-300'}`}>N</button>
        </div>
      </div>
      {grind && <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-center text-sm font-bold text-red-300">KRRRCH! Press the clutch before shifting.</div>}
      <div className="grid grid-cols-2 gap-3 text-center">
        <Box label="Gear ratio" value={ratio ? `${ratio.toFixed(2)}:1` : '—'} />
        <Box label="Torque ×" value={ratio ? `${(ratio * FINAL_DRIVE).toFixed(1)}×` : '—'} />
        <Box label="Output" value={`${Math.round(outRpm)}`} unit="rpm" />
        <Box label="Road speed" value={gear === 'R' && kmh ? `R ${kmh}` : kmh} unit="km/h" />
      </div>
      <p className="text-sm leading-6 text-zinc-400">
        Gears on the output shaft spin freely. A sliding <b className="text-yellow-300">dog collar</b> locks the chosen gear to the shaft. Low gears multiply torque; 4th connects input straight to output (1:1); 5th is an overdrive.
      </p>
    </div>
  )

  return (
    <AnimFrame
      frameRef={frameRef}
      title="Manual Transmission"
      subtitle="Press the clutch, pick a gear on the shifter, release the clutch and watch the power flow."
      side={side}
      controls={
        <>
          <button className={`btn ${clutch ? 'bg-amberx-500 text-black' : 'btn-ghost'}`} onClick={() => setClutch(!clutch)}>
            🦶 Clutch: {clutch ? 'PRESSED (disengaged)' : 'Released (engaged)'}
          </button>
          <Slider label="Engine speed" value={rpm} min={800} max={7000} step={50} onChange={setRpm} format={(v) => `${v} rpm`} />
        </>
      }
    >
      {svg}
    </AnimFrame>
  )
}

function ShiftBtn({ g, gear, onClick }) {
  const active = g === gear
  return (
    <button onClick={() => onClick(g)} className={`grid h-11 w-11 place-items-center justify-self-center rounded-full font-display text-lg font-bold transition ${active ? 'bg-gradient-to-br from-racing-500 to-amberx-500 text-black shadow-glow' : 'bg-ink-700 text-zinc-200 hover:bg-ink-600'}`}>
      {g}
    </button>
  )
}

function Box({ label, value, unit }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-2.5">
      <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{label}</div>
      <div className="font-display text-xl font-bold text-white">{value}{unit && <span className="ml-1 text-[11px] text-zinc-500">{unit}</span>}</div>
    </div>
  )
}
