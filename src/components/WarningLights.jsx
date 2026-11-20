import { useState } from 'react'
import { warningLights } from '../data/warningLights.js'

const COLORS = { red: '#ef4444', amber: '#f59e0b', green: '#22c55e', blue: '#3b82f6' }
const URGENCY = { red: 'Stop safely now', amber: 'Check soon', green: 'Information', blue: 'Information' }

// Simplified dashboard glyphs (24×24, stroke-based)
const GLYPHS = {
  oil: <><path d="M3 14h9l4-4 5 1-5 6H5z" /><path d="M7 14v-3h4" /><path d="M20 15c0 1.2-.8 2-1.5 2S17 16.2 17 15s1.5-3 1.5-3 1.5 1.8 1.5 3z" /></>,
  temp: <><path d="M12 3v11" /><circle cx="12" cy="17" r="3" /><path d="M12 7h3M12 10h3" /><path d="M4 21c2-1 3 1 5 0s3 1 5 0 3 1 5 0" /></>,
  battery: <><rect x="3" y="7" width="18" height="12" rx="1.5" /><path d="M7 7V5h2v2M15 7V5h2v2" /><path d="M6 13h4M16 11v4M14 13h4" /></>,
  brake: <><circle cx="12" cy="12" r="6" /><path d="M12 9v3.5M12 15h.01" /><path d="M4.5 6.5a10 10 0 0 0 0 11M19.5 6.5a10 10 0 0 1 0 11" /></>,
  airbag: <><circle cx="8" cy="5" r="2" /><path d="M8 8l-2 6h5l2 5" /><path d="M6 14l-1 6" /><circle cx="17" cy="11" r="4.5" /></>,
  steering: <><circle cx="11" cy="12" r="7" /><circle cx="11" cy="12" r="2" /><path d="M4 12h5M13 12h5M11 14v5" /><path d="M21 6v5M21 14h.01" /></>,
  seatbelt: <><circle cx="12" cy="4.5" r="2" /><path d="M9 21V10a3 3 0 0 1 6 0v11" /><path d="M8 9l8 8" /></>,
  door: <><path d="M5 18V8l5-4h9v14z" /><path d="M5 12h14" /><path d="M14 15h3" /></>,
  engine: <><path d="M4 10h2V8h6v2h3l2-2h2v9h-2l-2-2h-2v3H7l-2-2H4z" /><path d="M8 8V6h4" /><path d="M2 12v3" /></>,
  tpms: <><path d="M5 18a8 8 0 1 1 14 0" /><path d="M5 18l1 2h12l1-2" /><path d="M12 8v5M12 15.5h.01" /></>,
  abs: <><circle cx="12" cy="12" r="8" /><text x="12" y="15" textAnchor="middle" fontSize="7" fontWeight="700" stroke="none" fill="currentColor">ABS</text></>,
  esc: <><path d="M6 10l2-4h8l2 4v4H6z" /><circle cx="8.5" cy="14" r="1" /><circle cx="15.5" cy="14" r="1" /><path d="M6 19c1.5-1.5 3 1.5 4.5 0M13.5 19c1.5-1.5 3 1.5 4.5 0" /></>,
  glow: <><path d="M5 9c0-2 2-2 2 0v6c0 2 2 2 2 0V9c0-2 2-2 2 0v6c0 2 2 2 2 0V9c0-2 2-2 2 0v6c0 2 2 2 2 0" /></>,
  dpf: <><rect x="4" y="7" width="16" height="10" rx="2" /><path d="M7 10h.01M10 12h.01M13 10h.01M16 13h.01M8 14h.01M12 15h.01" /></>,
  fuel: <><rect x="4" y="4" width="10" height="16" rx="1" /><path d="M6 8h6" /><path d="M14 9l3 2v6a1.5 1.5 0 0 0 3 0V8l-3-3" /></>,
  service: <><path d="M14.5 5.5a4 4 0 0 0-5 5L4 16l3 3 5.5-5.5a4 4 0 0 0 5-5L15 11l-2-2z" /></>,
  lowbeam: <><path d="M10 6c-4 0-6 3-6 6s2 6 6 6c2 0 3-3 3-6s-1-6-3-6z" /><path d="M15 9l5 1.5M15 12l5 1.5M15 15l5 1.5" /></>,
  highbeam: <><path d="M10 6c-4 0-6 3-6 6s2 6 6 6c2 0 3-3 3-6s-1-6-3-6z" /><path d="M15 8h6M15 12h6M15 16h6" /></>,
  cruise: <><path d="M5 17a8 8 0 1 1 14 0" /><path d="M12 13l4-4" /><circle cx="12" cy="13" r="1.3" /></>,
  ready: <><path d="M6 10l2-4h8l2 4v5H6z" /><circle cx="8.5" cy="15" r="1" /><circle cx="15.5" cy="15" r="1" /><path d="M11 18l2-3h-2l2-3" /></>,
}

export function LightIcon({ icon, color, size = 40 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={COLORS[color]} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ color: COLORS[color], filter: `drop-shadow(0 0 6px ${COLORS[color]}88)` }}>
      {GLYPHS[icon]}
    </svg>
  )
}

export default function WarningLights() {
  const [sel, setSel] = useState(warningLights[0])
  const [filter, setFilter] = useState('all')
  const list = warningLights.filter((l) => filter === 'all' || l.color === filter || (filter === 'green' && l.color === 'blue'))
  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-white/[0.06] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="eyebrow">Interactive guide</div>
          <h3 className="font-display text-xl font-bold text-white">Dashboard Warning Lights</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[['all', 'All'], ['red', '🔴 Red'], ['amber', '🟠 Amber'], ['green', '🟢 Info']].map(([k, l]) => (
            <button key={k} onClick={() => setFilter(k)} className={`chip ${filter === k ? 'chip-active' : ''}`}>{l}</button>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-[1.4fr_1fr]">
        <div className="grid grid-cols-3 gap-2 bg-black/40 p-4 sm:grid-cols-4 md:grid-cols-5">
          {list.map((l) => (
            <button
              key={l.id}
              onClick={() => setSel(l)}
              className={`flex flex-col items-center gap-2 rounded-xl border p-3 transition ${sel.id === l.id ? 'border-white/25 bg-white/[0.07]' : 'border-transparent hover:bg-white/[0.04]'}`}
              aria-label={l.name}
            >
              <LightIcon icon={l.icon} color={l.color} />
              <span className="text-center text-[11px] leading-tight text-zinc-400">{l.name}</span>
            </button>
          ))}
        </div>
        <div key={sel.id} className="animate-fadeUp border-t border-white/[0.06] p-5 lg:border-l lg:border-t-0">
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-black/60"><LightIcon icon={sel.icon} color={sel.color} size={44} /></div>
            <div>
              <h4 className="font-display text-2xl font-bold text-white">{sel.name}</h4>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: COLORS[sel.color] }}>{URGENCY[sel.color]}</span>
            </div>
          </div>
          <div className="mt-5 space-y-4 text-sm leading-6">
            <div><div className="label">What it means</div><p className="text-zinc-300">{sel.meaning}</p></div>
            <div><div className="label">What to do</div><p className="text-zinc-300">{sel.action}</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
