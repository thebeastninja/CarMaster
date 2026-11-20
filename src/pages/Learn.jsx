import { useEffect, useState } from 'react'
import LessonCard from '../components/LessonCard.jsx'
import { ProgressBar, SectionHeader } from '../components/ui.jsx'
import { levels } from '../data/lessons.js'
import { useProgress } from '../context/ProgressContext.jsx'

export default function Learn({ query }) {
  const { state, percent } = useProgress()
  const initial = Number(query.level) || levels.find((l) => l.lessons.some((x) => !state.completed[x.id]))?.id || 1
  const [active, setActive] = useState(initial)
  useEffect(() => { if (query.level) setActive(Number(query.level)) }, [query.level])
  const lvl = levels.find((l) => l.id === active)
  const done = lvl.lessons.filter((l) => state.completed[l.id]).length

  return (
    <div className="container-x py-10 sm:py-14">
      <SectionHeader
        eyebrow="Curriculum"
        title={<>Zero to <span className="text-gradient">Pro</span> in 6 levels</>}
        desc="Each lesson has in-depth teaching content, key takeaways, many with interactive animations, and a 5-question quiz. Complete lessons to earn XP and badges."
        right={<div className="w-full max-w-xs"><div className="mb-1 flex justify-between text-xs text-zinc-500"><span>Overall</span><span>{percent}%</span></div><ProgressBar value={percent} /></div>}
      />
      <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 no-scrollbar">
        {levels.map((l) => {
          const d = l.lessons.filter((x) => state.completed[x.id]).length
          const full = d === l.lessons.length
          return (
            <button
              key={l.id}
              onClick={() => setActive(l.id)}
              className={`flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${active === l.id ? 'border-racing-500/60 bg-racing-500/10' : 'border-white/[0.07] bg-white/[0.02] hover:border-white/20'}`}
            >
              <span className="text-2xl">{full ? '✅' : l.icon}</span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500">Level {l.id} · {l.tag}</span>
                <span className="block font-display text-base font-bold text-white">{l.title}</span>
                <span className="block text-xs text-zinc-500">{d}/{l.lessons.length} done</span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="mb-6 card flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
        <div className="text-5xl">{lvl.icon}</div>
        <div className="flex-1">
          <div className="eyebrow">Level {lvl.id} · {lvl.tag}</div>
          <h2 className="font-display text-2xl font-bold text-white">{lvl.title}</h2>
          <p className="mt-1 text-sm text-zinc-400">{lvl.description}</p>
        </div>
        <div className="w-full sm:w-48">
          <ProgressBar value={(done / lvl.lessons.length) * 100} />
          <div className="mt-1 text-right text-xs text-zinc-500">{done}/{lvl.lessons.length} lessons</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {lvl.lessons.map((lesson, i) => <LessonCard key={lesson.id} lesson={lesson} number={i + 1} />)}
      </div>
    </div>
  )
}
