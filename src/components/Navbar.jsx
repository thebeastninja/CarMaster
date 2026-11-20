import { useState } from 'react'
import { useProgress } from '../context/ProgressContext.jsx'

export const NAV = [
  { to: '/', key: '', label: 'Dashboard', icon: '🏠' },
  { to: '/learn', key: 'learn', label: 'Learn', icon: '📘' },
  { to: '/encyclopedia', key: 'encyclopedia', label: 'Encyclopedia', icon: '🚗' },
  { to: '/garage', key: 'garage', label: 'Garage', icon: '🔧' },
  { to: '/engines', key: 'engines', label: 'Engines Lab', icon: '🔥' },
  { to: '/pricing', key: 'pricing', label: 'Pricing & Parts', icon: '💲' },
  { to: '/quiz', key: 'quiz', label: 'Quiz & Cert', icon: '🏆' },
]

export function Logo({ small }) {
  return (
    <a href="#/" className="group flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-racing-500 to-amberx-500 shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M12 3a9 9 0 1 0 9 9" /><path d="M12 12l5-5" /><circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      </span>
      {!small && (
        <span className="leading-none">
          <span className="block font-display text-xl font-bold tracking-wide text-white">CAR<span className="text-gradient">MASTER</span></span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">Zero to Pro</span>
        </span>
      )}
    </a>
  )
}

export default function Navbar({ current }) {
  const [open, setOpen] = useState(false)
  const { state, rank } = useProgress()
  return (
    <header className="no-print sticky top-0 z-40 border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((n) => {
            const active = current === n.key
            return (
              <a
                key={n.to}
                href={`#${n.to}`}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${active ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
              >
                {n.label}
                {active && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-gradient-to-r from-racing-500 to-amberx-500" />}
              </a>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#/quiz" className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 sm:flex" title={rank.name}>
            <span className="text-base">{rank.icon}</span>
            <span className="text-xs leading-tight">
              <span className="block font-semibold text-white">{state.xp.toLocaleString()} XP</span>
              <span className="block text-zinc-500">🔥 {state.streak} day{state.streak === 1 ? '' : 's'}</span>
            </span>
          </a>
          <button className="btn-ghost !px-3 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/[0.06] bg-ink-950/95 lg:hidden" aria-label="Mobile">
          <div className="container-x grid grid-cols-2 gap-2 py-3 sm:grid-cols-3">
            {NAV.map((n) => (
              <a
                key={n.to}
                href={`#${n.to}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-medium ${current === n.key ? 'bg-racing-500/15 text-racing-300' : 'bg-white/[0.03] text-zinc-300'}`}
              >
                <span>{n.icon}</span>{n.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
