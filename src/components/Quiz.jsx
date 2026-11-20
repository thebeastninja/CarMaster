import { useState } from 'react'
import { ProgressBar } from './ui.jsx'

const LETTERS = ['A', 'B', 'C', 'D']

/**
 * Multiple-choice quiz with instant feedback.
 * questions: [{ q, o: [options], a: correctIndex, e: explanation }]
 */
export default function Quiz({ questions, onFinish, title = 'Lesson Quiz', passMark, onRetry, compact }) {
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [answers, setAnswers] = useState([])
  const [done, setDone] = useState(false)

  const q = questions[idx]
  const score = answers.filter((a, i) => a === questions[i].a).length

  const choose = (i) => {
    if (picked !== null) return
    setPicked(i)
    setAnswers((prev) => [...prev, i])
  }

  const next = () => {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1)
      setPicked(null)
    } else {
      setDone(true)
      onFinish?.(answers.filter((a, i) => a === questions[i].a).length)
    }
  }

  const restart = () => {
    setIdx(0); setPicked(null); setAnswers([]); setDone(false)
    onRetry?.()
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100)
    const passed = passMark ? pct >= passMark : true
    return (
      <div className="card animate-fadeUp p-6 sm:p-8">
        <div className="text-center">
          <div className="text-5xl">{pct === 100 ? '🏆' : pct >= 60 ? '🏁' : '🔧'}</div>
          <div className="mt-3 font-display text-4xl font-bold text-white">{score} / {questions.length}</div>
          <p className="mt-1 text-zinc-400">
            {pct === 100 ? 'Perfect lap! Flawless.' : pct >= 80 ? 'Excellent driving!' : pct >= 60 ? 'Solid result, keep going.' : 'A few things to review. Try again!'}
          </p>
          {passMark && (
            <p className={`mt-2 text-sm font-semibold ${passed ? 'text-emerald-400' : 'text-red-400'}`}>
              {passed ? `Passed (≥ ${passMark}% required)` : `Not passed: ${passMark}% required`}
            </p>
          )}
        </div>
        {!compact && (
          <div className="mt-6 space-y-2">
            {questions.map((qq, i) => {
              const ok = answers[i] === qq.a
              return (
                <details key={i} className={`rounded-xl border px-4 py-3 text-sm ${ok ? 'border-emerald-500/20 bg-emerald-500/[0.05]' : 'border-red-500/25 bg-red-500/[0.06]'}`}>
                  <summary className="cursor-pointer list-none font-medium text-zinc-200">
                    <span className="mr-2">{ok ? '✅' : '❌'}</span>{qq.q}
                  </summary>
                  <div className="mt-2 text-zinc-400">
                    Correct answer: <span className="font-semibold text-white">{qq.o[qq.a]}</span>
                    <div className="mt-1">{qq.e}</div>
                  </div>
                </details>
              )
            })}
          </div>
        )}
        <div className="mt-6 flex justify-center gap-3">
          <button className="btn-ghost" onClick={restart}>↻ Retry</button>
        </div>
      </div>
    )
  }

  return (
    <div className="card p-5 sm:p-7">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <div className="eyebrow">{title}</div>
          <div className="mt-1 text-sm text-zinc-500">Question {idx + 1} of {questions.length}</div>
        </div>
        <div className="font-display text-lg font-bold text-white">{score} pts</div>
      </div>
      <ProgressBar value={(idx / questions.length) * 100} thin />
      <h3 className="mt-6 font-display text-xl font-bold text-white sm:text-2xl">{q.q}</h3>
      <div className="mt-5 grid gap-3">
        {q.o.map((opt, i) => {
          const isCorrect = i === q.a
          const isPicked = picked === i
          let style = 'border-white/10 bg-white/[0.03] hover:border-racing-500/50 hover:bg-racing-500/[0.06]'
          if (picked !== null) {
            if (isCorrect) style = 'border-emerald-500/60 bg-emerald-500/10'
            else if (isPicked) style = 'border-red-500/60 bg-red-500/10'
            else style = 'border-white/5 bg-white/[0.02] opacity-60'
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={picked !== null}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium text-zinc-100 transition ${style}`}
            >
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg font-display text-sm font-bold ${picked !== null && isCorrect ? 'bg-emerald-500 text-black' : picked !== null && isPicked ? 'bg-red-500 text-white' : 'bg-white/[0.06] text-zinc-300'}`}>
                {picked !== null && isCorrect ? '✓' : picked !== null && isPicked ? '✕' : LETTERS[i]}
              </span>
              {opt}
            </button>
          )
        })}
      </div>
      {picked !== null && (
        <div className="mt-5 animate-fadeUp">
          <div className={`rounded-xl border px-4 py-3 text-sm ${picked === q.a ? 'border-emerald-500/30 bg-emerald-500/[0.07] text-emerald-200' : 'border-red-500/30 bg-red-500/[0.07] text-red-200'}`}>
            <span className="font-bold">{picked === q.a ? 'Correct! ' : 'Not quite. '}</span>
            <span className="text-zinc-300">{q.e}</span>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="btn-primary" onClick={next}>{idx + 1 < questions.length ? 'Next question →' : 'See results'}</button>
          </div>
        </div>
      )}
    </div>
  )
}
