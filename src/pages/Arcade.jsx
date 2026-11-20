import { useProgress } from '../context/ProgressContext.jsx'
import GuessCar from './arcade/GuessCar.jsx'
import TopTrumps from './arcade/TopTrumps.jsx'
import DragRace from './arcade/DragRace.jsx'
import RevLab from './arcade/RevLab.jsx'

const GAMES = [
  { id: 'drag', title: 'Drag Race', icon: '🚦', tag: 'Reflexes', desc: 'Pick any two real cars, nail the Christmas tree and race the quarter mile. Physics from real 0–100 times.', grad: 'from-emerald-500/30 to-lime-400/10', stat: (a) => `${a?.wins || 0} wins`, Component: DragRace },
  { id: 'guess', title: 'Guess the Car', icon: '👀', tag: 'Spotting', desc: 'A blurred real photo and clues. Name the car with as few clues as possible.', grad: 'from-racing-500/30 to-amberx-500/10', stat: (a) => `Best ${a?.best || 0} pts`, Component: GuessCar },
  { id: 'trumps', title: 'Higher or Lower', icon: '🃏', tag: 'Specs', desc: 'More horsepower? Quicker 0–100? Pricier? Build the longest streak of correct calls.', grad: 'from-sky-500/30 to-indigo-500/10', stat: (a) => `Best streak ${a?.best || 0}`, Component: TopTrumps },
  { id: 'rev', title: 'Rev Lab', icon: '🔊', tag: 'Sound', desc: 'Hold to rev a V8, V10, V12, flat-6, rotary or EV and hear why they all sound different.', grad: 'from-fuchsia-500/30 to-racing-500/10', stat: (a) => (a?.best ? 'Limiter hit ✓' : 'Hit the limiter!'), Component: RevLab },
]

export default function Arcade({ sub, query = {} }) {
  const { state } = useProgress()
  const game = GAMES.find((g) => g.id === sub)

  if (game) {
    const { Component } = game
    return (
      <div className="container-x max-w-3xl py-6 sm:py-10">
        <a href="#/arcade" className="text-sm text-zinc-500 hover:text-white">← Arcade</a>
        <h1 className="h-display mb-4 mt-1 text-2xl text-white sm:text-4xl">{game.icon} {game.title}</h1>
        <Component query={query} />
      </div>
    )
  }

  return (
    <div className="container-x py-8 sm:py-14">
      <div className="eyebrow mb-2">Arcade</div>
      <h1 className="h-display text-4xl text-white sm:text-5xl">Learn by <span className="text-gradient">playing</span>.</h1>
      <p className="mt-3 max-w-2xl text-zinc-400">Four games built on real cars and real physics. Earn XP and unlock arcade badges.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {GAMES.map((g) => (
          <a key={g.id} href={`#/arcade/${g.id}`} className={`card card-hover group relative overflow-hidden bg-gradient-to-br ${g.grad} p-6`}>
            <div className="absolute -right-6 -top-6 text-[120px] opacity-20 transition group-hover:scale-110 group-hover:opacity-30">{g.icon}</div>
            <span className="chip">{g.tag}</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white">{g.title}</h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-300">{g.desc}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm font-semibold text-amberx-400">{g.stat(state.arcade?.[g.id])}</span>
              <span className="btn-primary !py-2">Play →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
