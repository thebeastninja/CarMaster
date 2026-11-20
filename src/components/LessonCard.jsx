import Img from './Img.jsx'
import { useProgress } from '../context/ProgressContext.jsx'

export default function LessonCard({ lesson, number, locked }) {
  const { state } = useProgress()
  const done = state.completed[lesson.id]
  const best = state.quizScores[lesson.id]
  return (
    <a
      href={`#/learn/${lesson.id}`}
      className={`card card-hover group flex overflow-hidden ${locked ? 'opacity-70' : ''}`}
    >
      <Img src={lesson.image} alt={lesson.title} className="hidden h-auto w-36 shrink-0 sm:block" imgClassName="group-hover:scale-105" />
      <div className="flex min-w-0 flex-1 flex-col p-4">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <span className="font-display font-bold text-racing-400">LESSON {number}</span>
          <span>·</span>
          <span>{lesson.minutes} min</span>
          {lesson.animation && <><span>·</span><span className="text-amberx-400">▶ Interactive</span></>}
        </div>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug text-white group-hover:text-racing-300">{lesson.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{lesson.summary}</p>
        <div className="mt-auto flex items-center gap-2 pt-3">
          {done ? (
            <span className="chip border-emerald-500/30 bg-emerald-500/10 text-emerald-300">✓ Completed</span>
          ) : (
            <span className="chip">Not started</span>
          )}
          {best !== undefined && <span className="chip">Quiz best: {best}/5</span>}
        </div>
      </div>
    </a>
  )
}
