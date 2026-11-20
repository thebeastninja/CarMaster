import Img from './Img.jsx'
import { pick } from '../data/images.js'
import { useProgress } from '../context/ProgressContext.jsx'
import Tachometer from './Tachometer.jsx'

export default function Hero({ next }) {
  const { state, percent, doneCount, totalLessons } = useProgress()
  const started = doneCount > 0
  return (
    <section className="relative overflow-hidden">
      <Img src={pick('sports', 0, 2000)} alt="Sports car" className="absolute inset-0 h-full w-full" imgClassName="opacity-40" decorative />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
      <div className="container-x relative grid items-center gap-8 py-10 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div className="max-w-2xl animate-fadeUp">
          <div className="eyebrow mb-4">6 levels · {totalLessons} lessons · 4 games</div>
          <h1 className="h-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            From <span className="text-gradient">Zero</span><br />to Car <span className="text-gradient">Pro</span>.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            {state.name ? `Welcome back, ${state.name}. ` : ''}Learn how cars really work, from the four-stroke cycle to F1 aerodynamics. Interactive animations, {''}
            a 140+ real-car encyclopedia, arcade games, real repair prices and a certificate at the end.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <a href={next ? `#/learn/${next.id}` : '#/learn'} className="btn-primary !px-4 !py-3 text-base sm:!px-6">
              {started ? 'Continue learning' : 'Start Level 1'} →
            </a>
            <a href="#/arcade" className="btn-ghost !px-4 !py-3 text-base sm:!px-6">🎮 Arcade</a>
          </div>
          {started && (
            <div className="mt-8 flex items-center gap-4 text-sm text-zinc-400">
              <div className="h-2 w-48 overflow-hidden rounded-full bg-white/10"><div className="h-full bg-gradient-to-r from-racing-500 to-amberx-500" style={{ width: `${percent}%` }} /></div>
              <span>{percent}% complete · {doneCount}/{totalLessons} lessons</span>
            </div>
          )}
        </div>
        <div className="mx-auto w-60 sm:w-72 lg:w-full lg:max-w-[420px]"><Tachometer /></div>
      </div>
    </section>
  )
}
