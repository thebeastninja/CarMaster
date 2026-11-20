import { useMemo, useState } from 'react'

// Torque tables: [rpm, Nm]. EV uses constant torque then constant power.
export const PROFILES = {
  na: { label: 'High-revving NA 2.0 I4', color: '#38bdf8', max: 9000, table: [[1000, 150], [3000, 180], [6000, 205], [7500, 220], [8300, 212], [9000, 195]] },
  turbo: { label: 'Turbo 2.0 I4', color: '#ff6a3d', max: 7000, table: [[1000, 200], [1600, 370], [4500, 370], [5500, 345], [6500, 300], [7000, 270]] },
  diesel: { label: 'Diesel 3.0 I6', color: '#facc15', max: 5000, table: [[1000, 330], [1500, 650], [2500, 650], [3500, 560], [4400, 420], [5000, 330]] },
  v8: { label: 'NA 5.0 V8', color: '#a78bfa', max: 7500, table: [[1000, 360], [2500, 450], [4250, 540], [5500, 525], [7000, 470], [7500, 440]] },
  ev: { label: 'EV motor (220 kW)', color: '#34d399', max: 16000, table: null, ev: { torque: 420, power: 220 } },
}

export function torqueAt(p, rpm) {
  if (p.ev) {
    const base = (p.ev.power * 9549) / p.ev.torque
    return rpm <= base ? p.ev.torque : (p.ev.power * 9549) / rpm
  }
  const t = p.table
  if (rpm <= t[0][0]) return t[0][1] * (rpm / t[0][0])
  for (let i = 1; i < t.length; i++) {
    if (rpm <= t[i][0]) {
      const [r0, v0] = t[i - 1], [r1, v1] = t[i]
      return v0 + ((rpm - r0) / (r1 - r0)) * (v1 - v0)
    }
  }
  return t[t.length - 1][1]
}

const hpAt = (p, rpm) => (torqueAt(p, rpm) * rpm) / 9549 * 1.341

export default function PowerCurve() {
  const [key, setKey] = useState('turbo')
  const p = PROFILES[key]
  const [rpm, setRpm] = useState(4000)
  const r = Math.min(rpm, p.max)
  const W = 560, H = 280, PAD = { l: 44, r: 44, t: 16, b: 32 }

  const { tPath, hPath, maxT, maxH, peakT, peakH } = useMemo(() => {
    const pts = []
    for (let x = 0; x <= p.max; x += p.max / 120) pts.push(x)
    const ts = pts.map((x) => torqueAt(p, Math.max(x, 1)))
    const hs = pts.map((x) => hpAt(p, Math.max(x, 1)))
    const maxT = Math.max(...ts) * 1.15
    const maxH = Math.max(...hs) * 1.15
    const sx = (x) => PAD.l + (x / p.max) * (W - PAD.l - PAD.r)
    const syT = (v) => H - PAD.b - (v / maxT) * (H - PAD.t - PAD.b)
    const syH = (v) => H - PAD.b - (v / maxH) * (H - PAD.t - PAD.b)
    const path = (vals, sy) => vals.map((v, i) => `${i ? 'L' : 'M'}${sx(pts[i]).toFixed(1)} ${sy(v).toFixed(1)}`).join(' ')
    const iT = ts.indexOf(Math.max(...ts)), iH = hs.indexOf(Math.max(...hs))
    return { tPath: path(ts, syT), hPath: path(hs, syH), maxT, maxH, peakT: [pts[iT], ts[iT]], peakH: [pts[iH], hs[iH]] }
  }, [p])

  const sx = (x) => PAD.l + (x / p.max) * (W - PAD.l - PAD.r)
  const syT = (v) => H - PAD.b - (v / maxT) * (H - PAD.t - PAD.b)
  const syH = (v) => H - PAD.b - (v / maxH) * (H - PAD.t - PAD.b)
  const tNow = torqueAt(p, Math.max(r, 1))
  const hNow = hpAt(p, Math.max(r, 1))

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-white/[0.06] px-5 py-4">
        <div className="eyebrow">Interactive chart</div>
        <h3 className="font-display text-xl font-bold text-white">Horsepower vs Torque</h3>
        <p className="mt-1 text-sm text-zinc-400">Power = Torque × rpm ÷ 9,549 (kW). Drag the rpm slider and compare engine types.</p>
      </div>
      <div className="grid lg:grid-cols-[1.5fr_1fr]">
        <div className="p-4">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Torque and power curves for ${p.label}`}>
            {[0.25, 0.5, 0.75, 1].map((f) => <line key={f} x1={PAD.l} x2={W - PAD.r} y1={H - PAD.b - f * (H - PAD.t - PAD.b)} y2={H - PAD.b - f * (H - PAD.t - PAD.b)} stroke="rgba(255,255,255,.06)" />)}
            {Array.from({ length: 5 }).map((_, i) => {
              const x = (p.max / 4) * i
              return <text key={i} x={sx(x)} y={H - 10} textAnchor="middle" className="fill-zinc-500 text-[10px]">{Math.round(x / 100) / 10}k</text>
            })}
            <text x={PAD.l - 8} y={PAD.t + 8} textAnchor="end" className="fill-amberx-400 text-[10px] font-bold">Nm</text>
            <text x={W - PAD.r + 8} y={PAD.t + 8} className="fill-racing-400 text-[10px] font-bold">hp</text>
            {[0.5, 1].map((f) => <text key={f} x={PAD.l - 6} y={syT(maxT * f / 1.15) + 3} textAnchor="end" className="fill-zinc-500 text-[9px]">{Math.round(maxT * f / 1.15)}</text>)}
            {[0.5, 1].map((f) => <text key={f} x={W - PAD.r + 6} y={syH(maxH * f / 1.15) + 3} className="fill-zinc-500 text-[9px]">{Math.round(maxH * f / 1.15)}</text>)}
            <path d={tPath} fill="none" stroke="#ff9f1c" strokeWidth="3" />
            <path d={hPath} fill="none" stroke="#ff4d1f" strokeWidth="3" />
            <circle cx={sx(peakT[0])} cy={syT(peakT[1])} r="4" fill="#ff9f1c" />
            <circle cx={sx(peakH[0])} cy={syH(peakH[1])} r="4" fill="#ff4d1f" />
            <line x1={sx(r)} x2={sx(r)} y1={PAD.t} y2={H - PAD.b} stroke="#fff" strokeOpacity=".4" strokeDasharray="4 4" />
            <circle cx={sx(r)} cy={syT(tNow)} r="6" fill="#ff9f1c" stroke="#000" strokeWidth="2" />
            <circle cx={sx(r)} cy={syH(hNow)} r="6" fill="#ff4d1f" stroke="#000" strokeWidth="2" />
            <text x={PAD.l + 6} y={H - PAD.b - 6} className="fill-zinc-500 text-[10px]">rpm →</text>
          </svg>
          <input type="range" min="500" max={p.max} step="50" value={r} onChange={(e) => setRpm(Number(e.target.value))} className="mt-2 w-full" aria-label="Engine rpm" />
        </div>
        <div className="space-y-4 border-t border-white/[0.06] p-5 lg:border-l lg:border-t-0">
          <div className="flex flex-wrap gap-2">
            {Object.entries(PROFILES).map(([k, v]) => <button key={k} onClick={() => setKey(k)} className={`chip ${key === k ? 'chip-active' : ''}`}>{v.label}</button>)}
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-white/[0.04] p-3"><div className="font-display text-xl font-bold text-white">{Math.round(r)}</div><div className="text-[10px] uppercase tracking-wider text-zinc-500">rpm</div></div>
            <div className="rounded-xl bg-amberx-500/10 p-3"><div className="font-display text-xl font-bold text-amberx-400">{Math.round(tNow)}</div><div className="text-[10px] uppercase tracking-wider text-zinc-500">Nm</div></div>
            <div className="rounded-xl bg-racing-500/10 p-3"><div className="font-display text-xl font-bold text-racing-400">{Math.round(hNow)}</div><div className="text-[10px] uppercase tracking-wider text-zinc-500">hp</div></div>
          </div>
          <div className="text-sm leading-6 text-zinc-400">
            <p><span className="font-semibold text-amberx-400">Peak torque</span> {Math.round(peakT[1])} Nm at {Math.round(peakT[0])} rpm · <span className="font-semibold text-racing-400">Peak power</span> {Math.round(peakH[1])} hp at {Math.round(peakH[0])} rpm.</p>
            <p className="mt-2 font-mono text-xs text-zinc-500">{Math.round(tNow)} Nm × {Math.round(r)} rpm ÷ 9549 = {((tNow * r) / 9549).toFixed(0)} kW ≈ {Math.round(hNow)} hp</p>
            <p className="mt-2">{key === 'diesel' ? 'Diesels make huge torque early but run out of revs, so peak power is modest.' : key === 'na' ? 'NA engines build power with rpm. Peak power arrives near the redline, so you must rev them.' : key === 'ev' ? 'EVs make full torque from zero rpm, then hold constant power as torque falls. That is why they launch so hard.' : key === 'turbo' ? 'Turbo engines have a flat torque plateau, making them strong and easy to drive at any rpm.' : 'Big V8s combine strong torque everywhere with high peak power.'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
