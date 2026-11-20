import { useEffect, useState } from 'react'
import Img from '../components/Img.jsx'
import Markdown from '../components/Markdown.jsx'
import Quiz from '../components/Quiz.jsx'
import { ANIMATIONS } from '../components/animations/index.jsx'
import { getLesson, getNextLesson, getPrevLesson, levels, wordCount } from '../data/lessons.js'
import { useProgress } from '../context/ProgressContext.jsx'

export default function LessonView({ id }) {
  const lesson = getLesson(id)
  const { state, openLesson, completeLesson, recordQuiz } = useProgress()
  const [readPct, setReadPct] = useState(0)

  useEffect(() => { if (lesson) openLesson(lesson.id) }, [lesson?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setReadPct(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [id])

  if (!lesson) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="h-display text-3xl text-white">Lesson not found</h1>
        <a href="#/learn" className="btn-primary mt-6">Back to Learn</a>
      </div>
    )
  }

  const level = levels.find((l) => l.id === lesson.level)
  const prev = getPrevLesson(lesson.id)
  const next = getNextLesson(lesson.id)
  const done = state.completed[lesson.id]
  const Anim = lesson.animation && ANIMATIONS[lesson.animation]?.Component

  const onQuizFinish = (score) => {
    recordQuiz(lesson.id, score)
    if (score >= 3) completeLesson(lesson.id)
  }

  return (
    <div>
      <div className="no-print fixed left-0 right-0 top-16 z-30 h-0.5 bg-transparent">
        <div className="h-full bg-gradient-to-r from-racing-500 to-amberx-500" style={{ width: `${readPct}%` }} />
      </div>
      <header className="relative overflow-hidden">
        <Img src={lesson.image.replace('w=1200', 'w=1800')} alt={lesson.title} className="absolute inset-0 h-full w-full" imgClassName="opacity-35" decorative />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" />
        <div className="container-x relative py-12 sm:py-16">
          <nav className="text-sm text-zinc-400">
            <a href="#/learn" className="hover:text-white">Learn</a> <span className="mx-1">/</span>
            <a href={`#/learn?level=${level.id}`} className="hover:text-white">Level {level.id}: {level.title}</a>
          </nav>
          <h1 className="h-display mt-3 max-w-3xl text-4xl text-white sm:text-5xl">{lesson.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-zinc-300">{lesson.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="chip">⏱ {lesson.minutes} min read</span>
            <span className="chip">📝 {wordCount(lesson)} words</span>
            <span className="chip">❓ 5-question quiz</span>
            {Anim && <span className="chip chip-active">▶ Interactive</span>}
            {done && <span className="chip border-emerald-500/30 bg-emerald-500/10 text-emerald-300">✓ Completed</span>}
          </div>
        </div>
      </header>

      <div className="container-x grid gap-10 pb-16 lg:grid-cols-[1fr_280px]">
        <article className="min-w-0">
          <div className="max-w-3xl">
            <Markdown source={lesson.content} />
          </div>

          {Anim && (
            <div className="mt-10">
              <Anim />
            </div>
          )}

          <div className="mt-10 max-w-3xl card border-racing-500/20 p-6">
            <div className="eyebrow mb-3">Key takeaways</div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {lesson.keyPoints.map((k) => (
                <li key={k} className="flex gap-3 text-sm leading-6 text-zinc-200">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-racing-500/20 text-[11px] text-racing-300">✓</span>{k}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 max-w-3xl">
            <h2 className="h-display mb-2 text-2xl text-white">Test yourself</h2>
            <p className="mb-5 text-sm text-zinc-400">Score 3/5 or more to complete the lesson. +10 XP for each new correct answer, +50 XP for completing.</p>
            <Quiz key={lesson.id} questions={lesson.quiz} onFinish={onQuizFinish} />
            {!done && (
              <button className="mt-4 text-sm text-zinc-500 underline-offset-4 hover:text-zinc-300 hover:underline" onClick={() => completeLesson(lesson.id)}>
                Skip quiz and mark as complete
              </button>
            )}
          </div>

          <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {prev ? (
              <a href={`#/learn/${prev.id}`} className="card card-hover p-4">
                <div className="text-xs text-zinc-500">← Previous</div>
                <div className="font-display font-bold text-white">{prev.title}</div>
              </a>
            ) : <div />}
            {next && (
              <a href={`#/learn/${next.id}`} className="card card-hover p-4 text-right">
                <div className="text-xs text-zinc-500">Next lesson →</div>
                <div className="font-display font-bold text-white">{next.title}</div>
              </a>
            )}
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 card p-4">
            <div className="eyebrow mb-3">Level {level.id}: {level.title}</div>
            <ol className="space-y-1">
              {level.lessons.map((l, i) => (
                <li key={l.id}>
                  <a href={`#/learn/${l.id}`} className={`flex items-start gap-2 rounded-lg px-2 py-2 text-sm ${l.id === lesson.id ? 'bg-racing-500/10 text-white' : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-200'}`}>
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-bold ${state.completed[l.id] ? 'bg-emerald-500 text-black' : 'bg-white/[0.07]'}`}>{state.completed[l.id] ? '✓' : i + 1}</span>
                    <span className="leading-snug">{l.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  )
}
