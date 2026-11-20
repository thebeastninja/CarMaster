import { useEffect, useState } from 'react'

// Small schematic of a cylinder layout with cylinders lighting in sequence.
export default function EngineSchematic({ layout, cylinders, size = 140, animate = true }) {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (!animate) return
    const t = setInterval(() => setTick((x) => x + 1), 220)
    return () => clearInterval(t)
  }, [animate])

  const n = Math.max(cylinders, 1)
  const firing = tick % Math.max(n, 1)
  const cyl = (i, x, y, r = 9) => (
    <circle key={i} cx={x} cy={y} r={r} fill={i === firing ? '#ff6a3d' : '#16181d'} stroke={i === firing ? '#ffb547' : '#52525b'} strokeWidth="2" style={{ transition: 'fill .15s' }} />
  )

  let content
  if (layout === 'inline') {
    const gap = Math.min(22, 110 / n)
    const start = 50 - ((n - 1) * gap) / 2
    content = (
      <>
        <rect x={start - 14} y="38" width={(n - 1) * gap + 28} height="24" rx="8" fill="#2a2e37" />
        {Array.from({ length: n }).map((_, i) => cyl(i, start + i * gap, 50))}
        <line x1={start - 18} y1="72" x2={start + (n - 1) * gap + 18} y2="72" stroke="#71717a" strokeWidth="3" />
      </>
    )
  } else if (layout === 'v') {
    const per = n / 2
    const gap = Math.min(20, 90 / per)
    const start = 50 - ((per - 1) * gap) / 2
    content = (
      <>
        <path d="M50 78 L20 30 M50 78 L80 30" stroke="#2a2e37" strokeWidth="18" strokeLinecap="round" />
        {Array.from({ length: per }).map((_, i) => cyl(i * 2, start + i * gap - 12, 40 + i * 3, 7))}
        {Array.from({ length: per }).map((_, i) => cyl(i * 2 + 1, start + i * gap + 12, 40 + i * 3, 7))}
        <circle cx="50" cy="80" r="5" fill="#71717a" />
      </>
    )
  } else if (layout === 'flat') {
    const per = n / 2
    const gap = 22
    const start = 50 - ((per - 1) * gap) / 2
    content = (
      <>
        <rect x="44" y="20" width="12" height="60" rx="4" fill="#71717a" />
        {Array.from({ length: per }).map((_, i) => (
          <g key={i}>
            <rect x="8" y={start + i * gap - 8} width="34" height="16" rx="5" fill="#2a2e37" />
            <rect x="58" y={start + i * gap - 8} width="34" height="16" rx="5" fill="#2a2e37" />
            {cyl(i * 2, 22, start + i * gap, 7)}
            {cyl(i * 2 + 1, 78, start + i * gap, 7)}
          </g>
        ))}
      </>
    )
  } else if (layout === 'rotary') {
    const a = tick * 20
    content = (
      <>
        <ellipse cx="50" cy="50" rx="38" ry="30" fill="#2a2e37" stroke="#52525b" strokeWidth="2" />
        <g transform={`rotate(${a} 50 50)`}>
          <path d="M50 26 Q66 50 71 62 Q50 66 29 62 Q34 50 50 26z" fill={tick % 3 === 0 ? '#ff6a3d' : '#71717a'} />
        </g>
        <circle cx="50" cy="52" r="4" fill="#d4d4d8" />
      </>
    )
  } else if (layout === 'electric') {
    content = (
      <>
        <circle cx="50" cy="50" r="34" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
        {Array.from({ length: 12 }).map((_, i) => {
          const ang = (i / 12) * Math.PI * 2
          const on = i % 3 === tick % 3
          return <rect key={i} x={50 + Math.cos(ang) * 26 - 3} y={50 + Math.sin(ang) * 26 - 3} width="6" height="6" fill={on ? '#7dd3fc' : '#1e3a8a'} transform={`rotate(${(i / 12) * 360} ${50 + Math.cos(ang) * 26} ${50 + Math.sin(ang) * 26})`} />
        })}
        <g transform={`rotate(${tick * 30} 50 50)`}><rect x="36" y="46" width="28" height="8" rx="3" fill="#38bdf8" /></g>
        <circle cx="50" cy="50" r="5" fill="#e0f2fe" />
      </>
    )
  } else {
    content = (
      <>
        <rect x="8" y="34" width="50" height="30" rx="8" fill="#2a2e37" />
        {Array.from({ length: 4 }).map((_, i) => cyl(i, 16 + i * 11, 49, 5))}
        <circle cx="76" cy="49" r="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
        <path d="M58 49 H60" stroke="#facc15" strokeWidth="3" />
        <text x="76" y="53" textAnchor="middle" className="fill-sky-300 text-[11px] font-bold">⚡</text>
      </>
    )
  }

  return <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">{content}</svg>
}
