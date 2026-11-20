import { useEffect, useMemo, useState } from 'react'
import Img from '../../components/Img.jsx'
import { cars } from '../../data/cars.js'
import { prefetchWikiImages } from '../../lib/wikiImages.js'
import { useProgress } from '../../context/ProgressContext.jsx'
import { buzz, fireConfetti } from '../../components/Confetti.jsx'
import { ProgressBar } from '../../components/ui.jsx'

const ROUNDS = 10
const POINTS = [100, 75, 50, 25]
const BLUR = [22, 14, 7, 2]
const shuffle = (a) => [...a].sort(() => Math.random() - 0.5)

function redact(text, car) {
  const words = [car.brand, ...car.name.split(/[\s()]+/).filter((w) => w.length > 2)]
  return words.reduce((t, w) => t.replace(new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '▇▇▇'), text)
}

function makeRounds() {
  const picks = shuffle(cars).slice(0, ROUNDS)
  return picks.map((car) => {
    const sameType = shuffle(cars.filter((c) => c.id !== car.id && c.brand !== car.brand && c.type === car.type))
    const others = shuffle(cars.filter((c) => c.id !== car.id && c.brand !== car.brand))
    const decoys = [...sameType, ...others].filter((c, i, arr) => arr.findIndex((x) => x.id === c.id) === i).slice(0, 3)
    return { car, options: shuffle([car, ...decoys]) }
  })
}

export default function GuessCar() {
  const { recordArcade, state } = useProgress()
  const [rounds, setRounds] = useState(makeRounds)
  const [i, setI] = useState(0)
  const [clues, setClues] = useState(1)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => { prefetchWikiImages(rounds.map((r) => r.car.wiki)) }, [rounds])

  const r = rounds[i]
  const car = r?.car
  const clueList = useMemo(() => car ? [
    `🌍 From ${car.country}, ${car.year}`,
    `🚗 ${car.type} · ${car.fuelType} · ${car.drivetrain}`,
    `⚙️ ${car.engine} · ${car.horsepower.toLocaleString()} hp · ${car.zeroTo100 ? `0–100 in ${car.zeroTo100}s` : `top speed ${car.topSpeed} km/h`}`,
    `💡 ${redact(car.funFact, car)}`,
  ] : [], [car])

  const choose = (c) => {
    if (picked) return
    setPicked(c)
    if (c.id === car.id) { setScore((s) => s + POINTS[clues - 1]); buzz(15) } else buzz([50, 40, 50])
  }

  const next = () => {
    if (i + 1 >= ROUNDS) {
      setDone(true)
      recordArcade('guess', { score, xp: Math.round(score / 10) })
      if (score >= 600) fireConfetti(1)
      return
    }
    setI(i + 1); setClues(1); setPicked(null)
  }

  const restart = () => { setRounds(makeRounds()); setI(0); setClues(1); setPicked(null); setScore(0); setDone(false) }

  if (done) {
    const best = state.arcade?.guess?.best || 0
    return (
      <div className="card animate-fadeUp p-8 text-center">
        <div className="text-6xl">{score >= 800 ? '🏆' : score >= 500 ? '🏁' : '🔧'}</div>
        <div className="mt-3 font-display text-5xl font-bold text-white">{score}<span className="text-xl text-zinc-500"> / {ROUNDS * 100}</span></div>
        <p className="mt-2 text-zinc-400">{score >= 800 ? 'Elite car spotter. Respect.' : score >= 500 ? 'Solid eye for metal!' : 'Keep studying the Encyclopedia!'}</p>
        <p className="mt-1 text-sm text-zinc-500">Best: {Math.max(best, score)} · +{Math.round(score / 10)} XP</p>
        <button className="btn-primary mt-6" onClick={restart}>Play again</button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-400">Round <b className="text-white">{i + 1}</b>/{ROUNDS}</span>
        <span className="font-display text-xl font-bold text-amberx-400">{score} pts</span>
      </div>
      <ProgressBar value={(i / ROUNDS) * 100} thin />
      <div className="card overflow-hidden">
        <div className="relative">
          <div className="overflow-hidden" style={{ filter: picked ? 'none' : `blur(${BLUR[clues - 1]}px) saturate(1.2)`, transition: 'filter .6s ease' }}>
            <Img wiki={car.wiki} width={800} eager alt={picked ? car.name : 'Mystery car'} className="aspect-[16/10] w-full scale-110" />
          </div>
          {!picked && <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">❓ Worth {POINTS[clues - 1]} pts</div>}
          {picked && (
            <div className={`absolute inset-x-0 bottom-0 animate-fadeUp p-4 ${picked.id === car.id ? 'bg-emerald-600/90' : 'bg-red-600/90'}`}>
              <div className="font-display text-xl font-bold text-white">{picked.id === car.id ? `✅ +${POINTS[clues - 1]}! ` : '❌ It was the '}{car.name}</div>
              <div className="text-sm text-white/80">{car.description}</div>
            </div>
          )}
        </div>
        <div className="space-y-2 p-4">
          {clueList.slice(0, picked ? 4 : clues).map((c) => <div key={c} className="animate-fadeUp rounded-xl bg-white/[0.04] px-3 py-2 text-sm text-zinc-200">{c}</div>)}
          {!picked && clues < 4 && <button className="text-sm font-semibold text-racing-400" onClick={() => setClues(clues + 1)}>+ Reveal another clue (−25 pts)</button>}
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {r.options.map((o) => {
          const state2 = !picked ? '' : o.id === car.id ? 'border-emerald-500 bg-emerald-500/15' : picked.id === o.id ? 'border-red-500 bg-red-500/15' : 'opacity-40'
          return (
            <button key={o.id} onClick={() => choose(o)} disabled={!!picked} className={`card px-4 py-4 text-left font-display text-lg font-bold text-white transition active:scale-[.98] ${state2}`}>
              {o.name}
            </button>
          )
        })}
      </div>
      {picked && <button className="btn-primary w-full !py-4 text-base" onClick={next}>{i + 1 >= ROUNDS ? 'See final score' : 'Next car →'}</button>}
    </div>
  )
}
