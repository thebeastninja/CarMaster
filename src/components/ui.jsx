import { useEffect } from 'react'
import { useProgress } from '../context/ProgressContext.jsx'

export function ProgressBar({ value, className = '', thin }) {
  return (
    <div className={`${thin ? 'h-1.5' : 'h-2.5'} w-full overflow-hidden rounded-full bg-white/[0.06] ${className}`}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-racing-600 via-racing-500 to-amberx-500 transition-all duration-700"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  )
}

export function Ring({ value, size = 120, stroke = 10, children }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ringGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff4d1f" /><stop offset="100%" stopColor="#ff9f1c" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,.07)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2} cy={size / 2} r={r} stroke="url(#ringGrad)" strokeWidth={stroke} fill="none" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)} style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">{children}</div>
    </div>
  )
}

export function SectionHeader({ eyebrow, title, desc, right }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
        <h1 className="h-display text-3xl text-white sm:text-4xl md:text-5xl">{title}</h1>
        {desc && <p className="mt-3 text-base leading-7 text-zinc-400">{desc}</p>}
      </div>
      {right}
    </div>
  )
}

export function Stat({ label, value, sub }) {
  return (
    <div className="card p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</div>
      <div className="stat-num mt-1">{value}</div>
      {sub && <div className="mt-0.5 text-xs text-zinc-500">{sub}</div>}
    </div>
  )
}

export function Toast() {
  const { toast, clearToast } = useProgress()
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(clearToast, 3500)
    return () => clearTimeout(t)
  }, [toast, clearToast])
  if (!toast) return null
  return (
    <div className="no-print fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 animate-pop">
      <div className="card flex items-center gap-3 border-racing-500/40 p-4 shadow-glow">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-racing-500/30 to-amberx-500/20 text-2xl">{toast.icon}</div>
        <div className="min-w-0">
          <div className="text-xs font-bold uppercase tracking-wider text-racing-400">{toast.type === 'badge' ? 'Badge unlocked! +100 XP' : 'Nice work'}</div>
          <div className="font-display text-lg font-bold text-white">{toast.name}</div>
          <div className="truncate text-sm text-zinc-400">{toast.desc}</div>
        </div>
      </div>
    </div>
  )
}

export function Pill({ children, tone = 'default' }) {
  const tones = {
    default: 'border-white/10 bg-white/[0.04] text-zinc-300',
    easy: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    medium: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    hard: 'border-red-500/30 bg-red-500/10 text-red-300',
    accent: 'border-racing-500/40 bg-racing-500/10 text-racing-300',
  }
  return <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>{children}</span>
}

export const money = (n, cur = 'USD') =>
  new Intl.NumberFormat(cur === 'EUR' ? 'de-DE' : 'en-US', { style: 'currency', currency: cur, maximumFractionDigits: 0 }).format(n)

export const compactMoney = (n) => {
  if (n >= 1e6) return `$${(n / 1e6).toFixed(n >= 1e7 ? 0 : 1)}M`
  if (n >= 1e3) return `$${Math.round(n / 1e3)}k`
  return `$${n}`
}
