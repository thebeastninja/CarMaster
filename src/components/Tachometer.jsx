import { useRef } from 'react'
import { useLoop, usePrefersReducedMotion } from '../hooks/useLoop.js'
import { useProgress } from '../context/ProgressContext.jsx'

// Decorative rev counter for the hero. The needle "blips" the throttle; the
// centre shows course progress like a gear indicator.
const START = 225, SWEEP = 270, MAX = 8

const polar = (cx, cy, r, deg) => {
  const a = ((deg - 90) * Math.PI) / 180
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
}
const arc = (cx, cy, r, a0, a1) => {
  const [x0, y0] = polar(cx, cy, r, a0)
  const [x1, y1] = polar(cx, cy, r, a1)
  return `M${x0} ${y0} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1}`
}

export default function Tachometer() {
  const reduced = usePrefersReducedMotion()
  const { percent, rank } = useProgress()
  const t = useRef(0)
  const frameRef = useRef(null)
  useLoop(!reduced, (dt) => { t.current += dt }, frameRef)
  const time = t.current
  const cycle = time % 4
  // idle → rev up → shift → settle
  const rpm = reduced ? 3 : cycle < 1.6 ? 0.9 + (cycle / 1.6) ** 1.6 * 6.4 : cycle < 1.9 ? 7.3 - (cycle - 1.6) * 12 : 3.7 - Math.min(1, (cycle - 1.9) / 1.6) * 2.8
  const needle = START + (Math.max(0, Math.min(MAX, rpm)) / MAX) * SWEEP + Math.sin(time * 40) * 0.6
  const cx = 200, cy = 200

  return (
    <svg ref={frameRef} viewBox="0 0 400 400" className="w-full max-w-[420px] drop-shadow-[0_0_60px_rgba(255,77,31,0.25)]" aria-hidden="true">
      <defs>
        <radialGradient id="tachBg" cx="50%" cy="45%"><stop offset="0" stopColor="#1f2229" /><stop offset="1" stopColor="#07080a" /></radialGradient>
        <linearGradient id="tachArc" x1="0" x2="1"><stop offset="0" stopColor="#ff9f1c" /><stop offset="1" stopColor="#ff4d1f" /></linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r="190" fill="url(#tachBg)" stroke="#2a2e37" strokeWidth="3" />
      <circle cx={cx} cy={cy} r="176" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
      {/* Redline band */}
      <path d={arc(cx, cy, 160, START + (6.5 / MAX) * SWEEP, START + SWEEP)} stroke="#e63a10" strokeWidth="14" fill="none" />
      {/* Live arc */}
      <path d={arc(cx, cy, 142, START, Math.max(START + 0.5, needle))} stroke="url(#tachArc)" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".85" />
      {/* Ticks */}
      {Array.from({ length: MAX * 4 + 1 }).map((_, i) => {
        const v = i / 4
        const deg = START + (v / MAX) * SWEEP
        const major = i % 4 === 0
        const [x0, y0] = polar(cx, cy, major ? 150 : 158, deg)
        const [x1, y1] = polar(cx, cy, 168, deg)
        const [tx, ty] = polar(cx, cy, 124, deg)
        return (
          <g key={i}>
            <line x1={x0} y1={y0} x2={x1} y2={y1} stroke={v >= 6.5 ? '#ff6a3d' : '#a1a1aa'} strokeWidth={major ? 3 : 1.5} />
            {major && <text x={tx} y={ty + 7} textAnchor="middle" className="font-display" fontSize="22" fontWeight="700" fill={v >= 6.5 ? '#ff6a3d' : '#e4e4e7'}>{v}</text>}
          </g>
        )
      })}
      <text x={cx} y={cy - 58} textAnchor="middle" fontSize="11" letterSpacing="3" fill="#71717a">× 1000 RPM</text>
      {/* Centre display */}
      <text x={cx} y={cy + 52} textAnchor="middle" fontSize="11" letterSpacing="3" fill="#ff6a3d" fontWeight="700">COURSE</text>
      <text x={cx} y={cy + 100} textAnchor="middle" className="font-display" fontSize="50" fontWeight="700" fill="#fff">{percent}<tspan fontSize="24" fill="#a1a1aa">%</tspan></text>
      <text x={cx} y={cy + 126} textAnchor="middle" fontSize="12" fill="#a1a1aa">{rank.icon} {rank.name}</text>
      {/* Needle */}
      <g transform={`rotate(${needle} ${cx} ${cy})`}>
        <path d={`M${cx - 4} ${cy + 22} L${cx} ${cy - 165} L${cx + 4} ${cy + 22} Z`} fill="#ff4d1f" />
      </g>
      <circle cx={cx} cy={cy} r="16" fill="#16181d" stroke="#3a3f4b" strokeWidth="3" />
      {/* Shift light */}
      <circle cx={cx} cy={cy - 92} r="7" fill={rpm > 6.8 ? '#ff4d1f' : '#2a2e37'} style={{ filter: rpm > 6.8 ? 'drop-shadow(0 0 8px #ff4d1f)' : 'none' }} />
      
    </svg>
  )
}
