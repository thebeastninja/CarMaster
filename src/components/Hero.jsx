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
      <div className="container-x relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:py-28">
        <div className="max-w-2xl animate-fadeUp">
          <div className="eyebrow mb-4">The complete car course · 6 levels · {totalLessons} lessons</div>
          <h1 className="h-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            From <span className="text-gradient">Zero</span><br />to Car <span className="text-gradient">Pro</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            {state.name ? `Welcome back, ${state.name}. ` : ''}Learn how cars really work, from the four-stroke cycle to F1 aerodynamics. Interactive animations, {''}
            a 140+ car encyclopedia, real repair prices and a certificate at the end.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={next ? `#/learn/${next.id}` : '#/learn'} className="btn-primary !px-6 !py-3 text-base">
              {started ? 'Continue learning' : 'Start Level 1'} →
            </a>
            <a href="#/garage" className="btn-ghost !px-6 !py-3 text-base">Explore the Garage</a>
          </div>
          {started && (
            <div className="mt-8 flex items-center gap-4 text-sm text-zinc-400">
              <div className="h-2 w-48 overflow-hidden rounded-full bg-white/10"><div className="h-full bg-gradient-to-r from-racing-500 to-amberx-500" style={{ width: `${percent}%` }} /></div>
              <span>{percent}% complete · {doneCount}/{totalLessons} lessons</span>
            </div>
          )}
        </div>
        <div className="hidden justify-center lg:flex"><Tachometer /></div>
      </div>
    </section>
  )
}
