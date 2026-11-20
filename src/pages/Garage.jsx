import { useState } from 'react'
import { SectionHeader } from '../components/ui.jsx'
import { ANIMATIONS } from '../components/animations/index.jsx'
import CarExplorer from '../components/CarExplorer.jsx'
import { useProgress } from '../context/ProgressContext.jsx'

const ORDER = ['fourStroke', 'gearbox', 'drivetrain', 'brakes', 'turbo']
const LESSON_FOR = { fourStroke: 'l2-1', gearbox: 'l2-2', drivetrain: 'l2-3', brakes: 'l2-4', turbo: 'l3-6' }

export default function Garage({ query }) {
  const [active, setActive] = useState(ORDER.includes(query.anim) ? query.anim : 'fourStroke')
  const { state } = useProgress()
  const { Component, title } = ANIMATIONS[active]
  const seen = ORDER.filter((k) => state.animationsSeen[k]).length

  return (
    <div className="container-x py-10 sm:py-14">
      <SectionHeader
        eyebrow="Interactive Garage"
        title={<>See how cars <span className="text-gradient">actually work</span></>}
        desc="Explore a car cut-away, then play with live animations of the engine, gearbox, drivetrain, brakes and turbo. Slow them down, pause them and experiment."
        right={<div className="chip">🧪 {seen}/{ORDER.length} animations tried · Lab Technician badge at 5</div>}
      />

      <CarExplorer />

      <div className="mt-12">
        <h2 className="h-display mb-4 text-2xl text-white sm:text-3xl">Animation lab</h2>
        <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-2 no-scrollbar">
          {ORDER.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${active === k ? 'border-racing-500/60 bg-racing-500/10 text-white' : 'border-white/[0.07] bg-white/[0.02] text-zinc-400 hover:text-white'}`}
            >
              <span>{ANIMATIONS[k].icon}</span>{ANIMATIONS[k].title}
              {state.animationsSeen[k] && <span className="text-emerald-400">✓</span>}
            </button>
          ))}
        </div>
        <div key={active} className="animate-fadeUp">
          <Component />
        </div>
        <div className="mt-4 text-sm text-zinc-500">
          Want the full theory behind the {title.toLowerCase()}? <a className="font-semibold text-racing-400 hover:text-racing-300" href={`#/learn/${LESSON_FOR[active]}`}>Read the lesson →</a>
        </div>
      </div>
    </div>
  )
}
