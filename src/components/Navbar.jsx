import { useState } from 'react'
import { useProgress } from '../context/ProgressContext.jsx'

export const NAV = [
  { to: '/', key: '', label: 'Dashboard', short: 'Home', icon: '🏠' },
  { to: '/learn', key: 'learn', label: 'Learn', short: 'Learn', icon: '📘' },
  { to: '/encyclopedia', key: 'encyclopedia', label: 'Encyclopedia', short: 'Cars', icon: '🚗' },
  { to: '/arcade', key: 'arcade', label: 'Arcade', short: 'Arcade', icon: '🎮' },
  { to: '/garage', key: 'garage', label: 'Garage', short: 'Garage', icon: '🔧' },
  { to: '/engines', key: 'engines', label: 'Engines Lab', short: 'Engines', icon: '🔥' },
  { to: '/pricing', key: 'pricing', label: 'Pricing & Parts', short: 'Prices', icon: '💲' },
  { to: '/quiz', key: 'quiz', label: 'Quiz & Cert', short: 'Quiz', icon: '🏆' },
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
  const { state, rank } = useProgress()
  return (
    <header className="no-print sticky top-0 z-40 pt-[env(safe-area-inset-top)] border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
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
                {n.short}
                {active && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-gradient-to-r from-racing-500 to-amberx-500" />}
              </a>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#/quiz" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5" title={rank.name}>
            <span className="text-base">{rank.icon}</span>
            <span className="text-xs leading-tight">
              <span className="block font-semibold text-white">{state.xp.toLocaleString()} XP</span>
              <span className="block text-zinc-500">🔥 {state.streak} day{state.streak === 1 ? '' : 's'}</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

const TABS = ['', 'learn', 'encyclopedia', 'arcade']

/** Phone-style bottom tab bar (hidden on large screens). */
export function BottomNav({ current }) {
  const [more, setMore] = useState(false)
  const tabs = NAV.filter((n) => TABS.includes(n.key))
  const rest = NAV.filter((n) => !TABS.includes(n.key))
  const moreActive = rest.some((n) => n.key === current)
  return (
    <>
      {more && (
        <div className="no-print fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" onClick={() => setMore(false)}>
          <div className="absolute inset-x-3 bottom-[calc(76px+env(safe-area-inset-bottom))] animate-fadeUp rounded-2xl border border-white/10 bg-ink-900 p-3 shadow-card" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-2 gap-2">
              {rest.map((n) => (
                <a key={n.to} href={`#${n.to}`} onClick={() => setMore(false)} className={`flex items-center gap-3 rounded-xl px-4 py-4 text-sm font-semibold ${current === n.key ? 'bg-racing-500/15 text-racing-300' : 'bg-white/[0.04] text-zinc-200 active:bg-white/10'}`}>
                  <span className="text-xl">{n.icon}</span>{n.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      <nav className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-ink-950/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden" aria-label="Tabs">
        <div className="grid grid-cols-5">
          {tabs.map((n) => {
            const active = current === n.key
            return (
              <a key={n.to} href={`#${n.to}`} onClick={() => setMore(false)} className={`relative flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold ${active ? 'text-white' : 'text-zinc-500'}`}>
                {active && <span className="absolute top-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-racing-500 to-amberx-500" />}
                <span className={`text-xl transition ${active ? 'scale-110' : 'grayscale-[60%]'}`}>{n.icon}</span>{n.short}
              </a>
            )
          })}
          <button onClick={() => setMore(!more)} className={`relative flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold ${moreActive || more ? 'text-white' : 'text-zinc-500'}`}>
            {moreActive && <span className="absolute top-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-racing-500 to-amberx-500" />}
            <span className="text-xl">{more ? '✕' : '☰'}</span>More
          </button>
        </div>
      </nav>
    </>
  )
}
