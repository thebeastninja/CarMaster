import { useState } from 'react'
import Quiz from '../components/Quiz.jsx'
import { SectionHeader, ProgressBar, Stat } from '../components/ui.jsx'
import { useProgress, BADGES, RANKS } from '../context/ProgressContext.jsx'
import { allLessons, levels } from '../data/lessons.js'
import { Logo } from '../components/Navbar.jsx'

const EXAM_SIZE = 30
const PASS = 80

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Shuffle options while keeping track of the correct answer
const shuffleOptions = (q) => {
  const order = shuffle(q.o.map((_, i) => i))
  return { ...q, o: order.map((i) => q.o[i]), a: order.indexOf(q.a) }
}

function buildExam() {
  // Balanced: 5 questions from each level, randomised
  const perLevel = EXAM_SIZE / levels.length
  return levels.flatMap((lvl) => shuffle(lvl.lessons.flatMap((l) => l.quiz)).slice(0, perLevel)).map(shuffleOptions)
}

export default function QuizCenter({ sub }) {
  if (sub === 'exam') return <Exam />
  if (sub === 'certificate') return <CertificatePage />
  if (sub === 'quick') return <QuickQuiz />
  return <Overview />
}

function Overview() {
  const { state, doneCount, totalLessons, rank, nextRank, reset } = useProgress()
  const quizzesTaken = Object.keys(state.quizScores).length
  const perfect = Object.values(state.quizScores).filter((v) => v === 5).length
  const avg = quizzesTaken ? (Object.values(state.quizScores).reduce((a, b) => a + b, 0) / quizzesTaken).toFixed(1) : '—'
  const ready = doneCount >= Math.ceil(totalLessons * 0.5)

  return (
    <div className="container-x space-y-10 py-10 sm:py-14">
      <SectionHeader
        eyebrow="Quiz & Certification"
        title={<>Prove it. Earn the <span className="text-gradient">Pro Certificate</span>.</>}
        desc="Every lesson ends with a quiz. Earn XP, climb the ranks, collect badges and pass the Final Exam to become a certified CarMaster Pro."
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Total XP" value={state.xp.toLocaleString()} sub={`${rank.icon} ${rank.name}`} />
        <Stat label="Lessons" value={`${doneCount}/${totalLessons}`} />
        <Stat label="Quizzes taken" value={quizzesTaken} sub={`${perfect} perfect · avg ${avg}/5`} />
        <Stat label="Streak" value={`🔥 ${state.streak}`} sub={`Best: ${state.bestStreak} days`} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="card relative overflow-hidden p-6 lg:col-span-2">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-racing-500/20 blur-3xl" />
          <div className="eyebrow">Final Exam</div>
          <h2 className="mt-1 font-display text-3xl font-bold text-white">CarMaster Pro Certification</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
            {EXAM_SIZE} questions drawn from all six levels. Score {PASS}% or more to earn your personalised certificate, the <b className="text-white">Pro Mechanic</b> badge and +500 XP. You can retake it as often as you like.
          </p>
          {!ready && <p className="mt-3 text-sm text-amberx-400">Recommended: complete at least half the course first ({doneCount}/{Math.ceil(totalLessons * 0.5)}).</p>}
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="#/quiz/exam" className="btn-primary">Start the Final Exam →</a>
            {state.exam?.passed && <a href="#/quiz/certificate" className="btn-ghost">🎓 View certificate</a>}
            <a href="#/quiz/quick" className="btn-ghost">⚡ Quick 10-question quiz</a>
          </div>
          {state.exam && (
            <p className="mt-4 text-sm text-zinc-500">
              Last result: <b className={state.exam.passed ? 'text-emerald-400' : 'text-red-400'}>{state.exam.score}/{state.exam.total}</b> on {new Date(state.exam.date).toLocaleDateString()}
            </p>
          )}
        </div>
        <div className="card p-6">
          <div className="eyebrow mb-3">Rank ladder</div>
          <ol className="space-y-2">
            {RANKS.map((r) => {
              const active = r.name === rank.name
              const reached = state.xp >= r.min
              return (
                <li key={r.name} className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${active ? 'bg-racing-500/15 text-white' : reached ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  <span>{r.icon} {r.name}</span><span className="font-mono text-xs">{r.min.toLocaleString()} XP</span>
                </li>
              )
            })}
          </ol>
          {nextRank && <ProgressBar value={((state.xp - rank.min) / (nextRank.min - rank.min)) * 100} className="mt-4" thin />}
        </div>
      </div>

      <section>
        <h2 className="h-display mb-4 text-2xl text-white">Badges ({Object.keys(state.badges).length}/{BADGES.length})</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {BADGES.map((b) => {
            const date = state.badges[b.id]
            return (
              <div key={b.id} className={`card flex flex-col items-center p-4 text-center ${date ? 'border-racing-500/40' : 'opacity-50'}`}>
                <div className={`grid h-16 w-16 place-items-center rounded-full text-3xl ${date ? 'bg-gradient-to-br from-racing-500/30 to-amberx-500/20 shadow-glow' : 'bg-white/[0.04] grayscale'}`}>{b.icon}</div>
                <div className="mt-2 font-display font-bold text-white">{b.name}</div>
                <div className="mt-0.5 text-xs text-zinc-500">{b.desc}</div>
                {date && <div className="mt-1 text-[10px] font-semibold text-racing-400">Earned {date}</div>}
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <h2 className="h-display mb-4 text-2xl text-white">Lesson quizzes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {levels.map((lvl) => (
            <div key={lvl.id} className="card p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white">{lvl.icon} Level {lvl.id}: {lvl.title}</h3>
              </div>
              <ul className="space-y-1">
                {lvl.lessons.map((l) => {
                  const s = state.quizScores[l.id]
                  return (
                    <li key={l.id}>
                      <a href={`#/learn/${l.id}`} className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm hover:bg-white/[0.04]">
                        <span className="truncate text-zinc-300">{l.title}</span>
                        <span className={`ml-2 shrink-0 font-mono text-xs ${s === 5 ? 'text-emerald-400' : s !== undefined ? 'text-amberx-400' : 'text-zinc-600'}`}>{s !== undefined ? `${s}/5` : '—'}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <button
          className="text-sm text-zinc-600 underline-offset-4 hover:text-red-400 hover:underline"
          onClick={() => { if (window.confirm('Reset all progress, XP, badges and your certificate? This cannot be undone.')) reset() }}
        >
          Reset all progress
        </button>
      </div>
    </div>
  )
}

function QuickQuiz() {
  const { state } = useProgress()
  const [qs, setQs] = useState(() => {
    const pool = allLessons.filter((l) => state.completed[l.id])
    return shuffle((pool.length >= 3 ? pool : allLessons).flatMap((l) => l.quiz)).slice(0, 10).map(shuffleOptions)
  })
  return (
    <div className="container-x max-w-3xl py-10 sm:py-14">
      <a href="#/quiz" className="text-sm text-zinc-500 hover:text-white">← Quiz & Certification</a>
      <h1 className="h-display mb-6 mt-2 text-3xl text-white">⚡ Quick Quiz</h1>
      <Quiz key={qs.map((q) => q.q).join('').length + qs[0].q} questions={qs} title="Quick Quiz" onRetry={() => setQs(shuffle(allLessons.flatMap((l) => l.quiz)).slice(0, 10).map(shuffleOptions))} />
    </div>
  )
}

function Exam() {
  const { state, setName, recordExam } = useProgress()
  const [name, setLocalName] = useState(state.name || '')
  const [started, setStarted] = useState(false)
  const [questions, setQuestions] = useState(buildExam)
  const [result, setResult] = useState(null)

  const begin = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    setName(name.trim())
    setQuestions(buildExam())
    setStarted(true)
    setResult(null)
  }

  const finish = (score) => {
    const pct = Math.round((score / questions.length) * 100)
    const exam = { score, total: questions.length, pct, passed: pct >= PASS, date: new Date().toISOString(), name: name.trim(), id: Math.random().toString(36).slice(2, 10).toUpperCase() }
    recordExam(exam)
    setResult(exam)
  }

  return (
    <div className="container-x max-w-3xl py-10 sm:py-14">
      <a href="#/quiz" className="text-sm text-zinc-500 hover:text-white">← Quiz & Certification</a>
      <h1 className="h-display mb-2 mt-2 text-3xl text-white sm:text-4xl">CarMaster <span className="text-gradient">Final Exam</span></h1>
      <p className="mb-6 text-zinc-400">{EXAM_SIZE} questions across all six levels · pass mark {PASS}%</p>

      {!started ? (
        <form onSubmit={begin} className="card space-y-4 p-6">
          <label className="block">
            <span className="label">Your name (printed on your certificate)</span>
            <input className="input" value={name} onChange={(e) => setLocalName(e.target.value)} placeholder="e.g. Alex Rivera" maxLength={48} required />
          </label>
          <ul className="space-y-1 text-sm text-zinc-400">
            <li>• Instant feedback after every answer</li>
            <li>• Questions and answer orders are randomised each attempt</li>
            <li>• Pass to unlock the Pro Mechanic badge and +500 XP</li>
          </ul>
          <button className="btn-primary" type="submit" disabled={!name.trim()}>Start exam →</button>
        </form>
      ) : (
        <>
          <Quiz key={questions[0].q + questions.length} questions={questions} title="Final Exam" passMark={PASS} onFinish={finish} onRetry={() => { setQuestions(buildExam()); setResult(null) }} />
          {result?.passed && (
            <div className="mt-6 card animate-pop border-emerald-500/40 p-6 text-center">
              <div className="text-5xl">🎓</div>
              <h2 className="mt-2 font-display text-2xl font-bold text-white">Congratulations, {result.name}!</h2>
              <p className="mt-1 text-zinc-400">You are now a certified CarMaster Pro.</p>
              <a href="#/quiz/certificate" className="btn-primary mt-4">View your certificate →</a>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function CertificatePage() {
  const { state } = useProgress()
  const exam = state.exam
  if (!exam?.passed) {
    return (
      <div className="container-x py-24 text-center">
        <div className="text-5xl">🔒</div>
        <h1 className="h-display mt-3 text-3xl text-white">Certificate locked</h1>
        <p className="mt-2 text-zinc-400">Pass the Final Exam with {PASS}% or more to unlock your certificate.</p>
        <a href="#/quiz/exam" className="btn-primary mt-6">Take the exam</a>
      </div>
    )
  }
  return (
    <div className="container-x py-10 sm:py-14">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <a href="#/quiz" className="text-sm text-zinc-500 hover:text-white">← Quiz & Certification</a>
        <button className="btn-primary" onClick={() => window.print()}>🖨 Print / Save as PDF</button>
      </div>
      <Certificate exam={exam} xp={state.xp} lessons={Object.keys(state.completed).length} />
    </div>
  )
}

export function Certificate({ exam, xp, lessons }) {
  return (
    <div className="print-area relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-amberx-500/40 bg-gradient-to-br from-ink-850 via-ink-900 to-black p-2 shadow-glow">
      <div className="relative rounded-[20px] border border-white/10 px-6 py-10 text-center sm:px-14 sm:py-14">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-racing-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amberx-500/15 blur-3xl" />
        <div className="relative">
          <div className="flex justify-center"><Logo /></div>
          <div className="mt-8 font-display text-sm font-bold uppercase tracking-[0.4em] text-amberx-400">Certificate of Achievement</div>
          <h1 className="h-display mt-2 text-4xl text-white sm:text-6xl">CarMaster <span className="text-gradient">Pro</span></h1>
          <p className="mt-8 text-sm uppercase tracking-widest text-zinc-500">This certifies that</p>
          <div className="mx-auto mt-2 max-w-xl border-b border-white/20 pb-3 font-display text-3xl font-bold text-white sm:text-5xl">{exam.name}</div>
          <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-300">
            has successfully completed the <b className="text-white">CarMaster: From Zero to Pro</b> Final Exam, demonstrating professional-level knowledge of automotive engineering, engines, drivetrains, car cultures of the world, ownership, maintenance, tuning and motorsport.
          </p>
          <div className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-3">
            <div><div className="font-display text-3xl font-bold text-white">{exam.pct}%</div><div className="text-[10px] uppercase tracking-widest text-zinc-500">Score</div></div>
            <div><div className="font-display text-3xl font-bold text-white">{lessons}</div><div className="text-[10px] uppercase tracking-widest text-zinc-500">Lessons</div></div>
            <div><div className="font-display text-3xl font-bold text-white">{xp.toLocaleString()}</div><div className="text-[10px] uppercase tracking-widest text-zinc-500">XP</div></div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-widest text-zinc-500">Date</div>
              <div className="font-semibold text-zinc-200">{new Date(exam.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>
            <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-amberx-500/70 bg-gradient-to-br from-racing-500/30 to-amberx-500/20 text-4xl shadow-glow">🏆</div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-zinc-500">Certificate ID</div>
              <div className="font-mono font-semibold text-zinc-200">CM-{exam.id || 'PRO'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
