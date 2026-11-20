import { useEffect, useState } from 'react'
import Img from '../../components/Img.jsx'
import { cars } from '../../data/cars.js'
import { prefetchWikiImages } from '../../lib/wikiImages.js'
import { useProgress } from '../../context/ProgressContext.jsx'
import { buzz, fireConfetti } from '../../components/Confetti.jsx'
import { compactMoney } from '../../components/ui.jsx'

const STATS = [
  { key: 'horsepower', label: 'horsepower', more: 'More power', less: 'Less power', fmt: (v) => `${v.toLocaleString()} hp` },
  { key: 'topSpeed', label: 'top speed', more: 'Faster', less: 'Slower', fmt: (v) => `${v} km/h` },
  { key: 'zeroTo100', label: '0–100 km/h time', more: 'Slower launch', less: 'Quicker launch', fmt: (v) => `${v} s` },
  { key: 'priceUSD', label: 'price', more: 'Pricier', less: 'Cheaper', fmt: (v) => compactMoney(v) },
  { key: 'torque', label: 'torque', more: 'More torque', less: 'Less torque', fmt: (v) => `${v.toLocaleString()} Nm` },
  { key: 'year', label: 'model year', more: 'Newer', less: 'Older', fmt: (v) => v },
]
const pool = cars.filter((c) => c.zeroTo100 && c.torque)
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)]

function nextPair(left) {
  const stat = rand(STATS)
  let right
  for (let k = 0; k < 30; k++) { right = rand(pool); if (right.id !== left.id && right[stat.key] !== left[stat.key]) break }
  return { stat, right }
}

export default function TopTrumps() {
  const { recordArcade, state } = useProgress()
  const [left, setLeft] = useState(() => rand(pool))
  const [{ stat, right }, setPair] = useState(() => nextPair(left))
  const [streak, setStreak] = useState(0)
  const [result, setResult] = useState(null) // 'win' | 'lose'
  const [over, setOver] = useState(false)

  useEffect(() => { prefetchWikiImages(pool.map((c) => c.wiki)) }, [])

  const guess = (dir) => {
    if (result) return
    const ok = dir === 'more' ? right[stat.key] >= left[stat.key] : right[stat.key] <= left[stat.key]
    setResult(ok ? 'win' : 'lose')
    if (ok) {
      buzz(12)
      const s = streak + 1
      setStreak(s)
      if (s % 5 === 0) fireConfetti(0.6)
      setTimeout(() => { setLeft(right); setPair(nextPair(right)); setResult(null) }, 1100)
    } else {
      buzz([60, 40, 60])
      recordArcade('trumps', { score: streak, xp: streak * 5 })
      setTimeout(() => setOver(true), 1200)
    }
  }

  const restart = () => { const l = rand(pool); setLeft(l); setPair(nextPair(l)); setStreak(0); setResult(null); setOver(false) }
  const best = Math.max(state.arcade?.trumps?.best || 0, streak)

  if (over) {
    return (
      <div className="card animate-fadeUp p-8 text-center">
        <div className="text-6xl">{streak >= 10 ? '🧙' : streak >= 5 ? '🔥' : '💥'}</div>
        <div className="mt-3 font-display text-5xl font-bold text-white">{streak}</div>
        <div className="text-zinc-400">in a row · best {best}</div>
        <p className="mt-3 text-sm text-zinc-500">{right.name} has {stat.fmt(right[stat.key])} vs {stat.fmt(left[stat.key])} for the {left.name}.</p>
        <p className="mt-1 text-sm text-zinc-500">+{streak * 5} XP</p>
        <button className="btn-primary mt-6" onClick={restart}>Play again</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">Best streak: <b className="text-white">{best}</b></span>
        <span className="font-display text-2xl font-bold text-amberx-400">🔥 {streak}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Card car={left} stat={stat} reveal />
        <Card car={right} stat={stat} reveal={!!result} result={result} />
      </div>
      <div className="card p-4 text-center">
        <p className="text-sm text-zinc-400">Compared with the <b className="text-white">{left.name}</b>, does the <b className="text-white">{right.name}</b> have more or less <b className="text-racing-300">{stat.label}</b>?</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button onClick={() => guess('more')} disabled={!!result} className="btn-primary !py-4 text-base">▲ {stat.key === 'zeroTo100' ? 'Higher (slower)' : 'More'}</button>
          <button onClick={() => guess('less')} disabled={!!result} className="btn-ghost !py-4 text-base">▼ {stat.key === 'zeroTo100' ? 'Lower (quicker)' : 'Less'}</button>
        </div>
      </div>
    </div>
  )
}

function Card({ car, stat, reveal, result }) {
  return (
    <div className={`card overflow-hidden transition ${result === 'win' ? 'border-emerald-500 shadow-[0_0_30px_-8px_#10b981]' : result === 'lose' ? 'border-red-500 shadow-[0_0_30px_-8px_#ef4444]' : ''}`}>
      <Img wiki={car.wiki} width={480} alt={car.name} className="aspect-[16/10] w-full sm:aspect-[4/3]" />
      <div className="p-3">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{car.brand} · {car.year}</div>
        <div className="font-display text-base font-bold leading-tight text-white sm:text-lg">{car.name}</div>
        <div className={`mt-2 rounded-lg px-2 py-2 text-center font-display text-xl font-bold ${reveal ? 'bg-racing-500/15 text-racing-300' : 'bg-white/[0.04] text-zinc-600'}`}>
          {reveal ? stat.fmt(car[stat.key]) : '???'}
        </div>
      </div>
    </div>
  )
}
