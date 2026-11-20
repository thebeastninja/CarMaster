import Hero from '../components/Hero.jsx'
import Img from '../components/Img.jsx'
import { ProgressBar, Ring, compactMoney } from '../components/ui.jsx'
import { useProgress, BADGES } from '../context/ProgressContext.jsx'
import { levels, allLessons, getLesson, getNextLesson } from '../data/lessons.js'
import { factOfTheDay } from '../data/facts.js'
import { carOfTheDay } from '../data/cars.js'

const SECTIONS = [
  { href: '#/learn', icon: '📘', title: 'Learn', desc: '54 structured lessons from total beginner to pro.' },
  { href: '#/encyclopedia', icon: '🚗', title: 'Car Encyclopedia', desc: '140+ famous cars with full specs, filters and search.' },
  { href: '#/garage', icon: '🔧', title: 'Interactive Garage', desc: 'Animations of engines, brakes, gearboxes, turbos and drivetrains.' },
  { href: '#/engines', icon: '🔥', title: 'Engines Lab', desc: 'Every engine layout, power curves and how parts fit together.' },
  { href: '#/pricing', icon: '💲', title: 'Pricing & Parts', desc: 'Real repair costs for 40+ parts and a yearly cost calculator.' },
  { href: '#/quiz', icon: '🏆', title: 'Quiz & Certification', desc: 'Earn badges and the CarMaster Pro Certificate.' },
  { href: '#/arcade', icon: '🎮', title: 'Arcade', desc: 'Drag races, Guess the Car, Higher or Lower and the Rev Lab.' },
]

export function useNextLesson() {
  const { state } = useProgress()
  const last = state.lastLesson && getLesson(state.lastLesson)
  if (last && !state.completed[last.id]) return last
  const firstUndone = allLessons.find((l) => !state.completed[l.id])
  if (last) {
    const after = getNextLesson(last.id)
    if (after && !state.completed[after.id]) return after
  }
  return firstUndone
}

export default function Home() {
  const { state, percent, doneCount, totalLessons, rank, nextRank } = useProgress()
  const next = useNextLesson()
  const car = carOfTheDay()
  const fact = factOfTheDay()
  const earned = BADGES.filter((b) => state.badges[b.id])
  const rankPct = nextRank ? ((state.xp - rank.min) / (nextRank.min - rank.min)) * 100 : 100

  return (
    <div>
      <Hero next={next} />
      <div className="container-x -mt-8 space-y-8 pb-16 sm:-mt-12">
        {/* Progress tracker */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="card flex flex-col items-center gap-6 p-6 sm:flex-row lg:col-span-2">
            <Ring value={percent} size={128}>
              <div>
                <div className="font-display text-3xl font-bold text-white">{percent}%</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Course</div>
              </div>
            </Ring>
            <div className="min-w-0 flex-1">
              <div className="eyebrow">Your progress</div>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-3">
                <span className="font-display text-2xl font-bold text-white">{rank.icon} {rank.name}</span>
                <span className="text-sm text-zinc-500">{state.xp.toLocaleString()} XP</span>
              </div>
              <ProgressBar value={rankPct} className="mt-3" />
              <div className="mt-1.5 text-xs text-zinc-500">{nextRank ? `${(nextRank.min - state.xp).toLocaleString()} XP to ${nextRank.name}` : 'Maximum rank reached!'}</div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <MiniStat label="Lessons" value={`${doneCount}/${totalLessons}`} />
                <MiniStat label="Streak" value={`🔥 ${state.streak}`} />
                <MiniStat label="Badges" value={`${earned.length}/${BADGES.length}`} />
              </div>
            </div>
          </div>
          {/* Continue learning */}
          <div className="card flex flex-col overflow-hidden">
            {next ? (
              <>
                <Img src={next.image} wiki={next.wiki} width={640} alt={next.title} className="h-32 w-full" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="eyebrow">Continue learning</div>
                  <div className="mt-1 text-xs text-zinc-500">Level {next.level} · {next.levelTitle}</div>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">{next.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{next.summary}</p>
                  <a href={`#/learn/${next.id}`} className="btn-primary mt-auto self-start">Resume →</a>
                </div>
              </>
            ) : (
              <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                <div className="text-5xl">🏁</div>
                <h3 className="mt-3 font-display text-xl font-bold text-white">All lessons complete!</h3>
                <a href="#/quiz" className="btn-primary mt-4">Take the Final Exam</a>
              </div>
            )}
          </div>
        </div>

        {/* Fact + Featured car */}
        <div className="grid gap-4 lg:grid-cols-5">
          <div className="card relative overflow-hidden p-6 lg:col-span-2">
            <div className="absolute -right-6 -top-6 text-[120px] opacity-[0.06]">💡</div>
            <div className="eyebrow">Daily car fact</div>
            <p className="mt-3 font-display text-xl font-semibold leading-snug text-white">{fact}</p>
            <div className="mt-4 text-xs text-zinc-500">A new fact every day. Come back tomorrow to keep your streak alive.</div>
          </div>
          <a href={`#/encyclopedia?car=${car.id}`} className="card card-hover group grid overflow-hidden sm:grid-cols-2 lg:col-span-3">
            <Img wiki={car.wiki} alt={car.name} className="h-56 w-full sm:h-full" imgClassName="group-hover:scale-105" />
            <div className="p-6">
              <div className="eyebrow">Featured car of the day</div>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">{car.name}</h3>
              <div className="text-sm text-zinc-500">{car.year} · {car.country} · {car.type}</div>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-300">{car.description}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <MiniStat label="HP" value={car.horsepower} />
                <MiniStat label="0–100" value={car.zeroTo100 ? `${car.zeroTo100}s` : '—'} />
                <MiniStat label="Price" value={compactMoney(car.priceUSD)} />
              </div>
            </div>
          </a>
        </div>

        {/* Arcade promo */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            ['drag', '🚦', 'Drag Race', 'Race any two real cars', 'from-emerald-500/25'],
            ['guess', '👀', 'Guess the Car', 'Blurred photo + clues', 'from-racing-500/25'],
            ['trumps', '🃏', 'Higher or Lower', 'Spec-sheet showdown', 'from-sky-500/25'],
            ['rev', '🔊', 'Rev Lab', 'Hear a V12 scream', 'from-fuchsia-500/25'],
          ].map(([id, icon, title, desc, grad]) => (
            <a key={id} href={`#/arcade/${id}`} className={`card card-hover relative overflow-hidden bg-gradient-to-br ${grad} to-transparent p-4`}>
              <div className="text-3xl">{icon}</div>
              <div className="mt-2 font-display text-lg font-bold leading-tight text-white">{title}</div>
              <div className="text-xs text-zinc-400">{desc}</div>
            </a>
          ))}
        </div>

        {/* Levels overview */}
        <div>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="h-display text-2xl text-white sm:text-3xl">Your road to Pro</h2>
            <a href="#/learn" className="text-sm font-semibold text-racing-400 hover:text-racing-300">All levels →</a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {levels.map((lvl) => {
              const done = lvl.lessons.filter((l) => state.completed[l.id]).length
              return (
                <a key={lvl.id} href={`#/learn?level=${lvl.id}`} className="card card-hover p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{lvl.icon}</span>
                    <span className="chip">Level {lvl.id} · {lvl.tag}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">{lvl.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{lvl.description}</p>
                  <ProgressBar value={(done / lvl.lessons.length) * 100} thin className="mt-4" />
                  <div className="mt-1.5 text-xs text-zinc-500">{done}/{lvl.lessons.length} lessons</div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Sections */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href} className="card card-hover flex items-start gap-4 p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-racing-500/20 to-amberx-500/10 text-2xl">{s.icon}</div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="text-sm text-zinc-400">{s.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Badges */}
        <div className="card p-6">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="font-display text-xl font-bold text-white">Badges</h2>
            <a href="#/quiz" className="text-sm font-semibold text-racing-400">View all →</a>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
            {BADGES.map((b) => {
              const has = state.badges[b.id]
              return (
                <div key={b.id} title={b.desc} className={`flex w-24 shrink-0 flex-col items-center rounded-xl border p-3 text-center ${has ? 'border-racing-500/40 bg-racing-500/10' : 'border-white/[0.06] opacity-40 grayscale'}`}>
                  <span className="text-3xl">{b.icon}</span>
                  <span className="mt-1 text-[11px] font-semibold leading-tight text-zinc-200">{b.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/[0.04] px-2 py-2">
      <div className="font-display text-lg font-bold text-white">{value}</div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{label}</div>
    </div>
  )
}
