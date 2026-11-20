import { Suspense, lazy, useEffect } from 'react'
import { useRoute } from './hooks/useRoute.js'
import Navbar, { BottomNav, Logo, NAV } from './components/Navbar.jsx'
import { Toast } from './components/ui.jsx'
import Confetti from './components/Confetti.jsx'
import Home from './pages/Home.jsx'

// Every page except the dashboard is code-split so the first load on a phone is small.
const Learn = lazy(() => import('./pages/Learn.jsx'))
const LessonView = lazy(() => import('./pages/LessonView.jsx'))
const Encyclopedia = lazy(() => import('./pages/Encyclopedia.jsx'))
const Garage = lazy(() => import('./pages/Garage.jsx'))
const EnginesLab = lazy(() => import('./pages/EnginesLab.jsx'))
const Pricing = lazy(() => import('./pages/Pricing.jsx'))
const QuizCenter = lazy(() => import('./pages/QuizCenter.jsx'))
const Arcade = lazy(() => import('./pages/Arcade.jsx'))

// Warm up the most likely next pages once the browser is idle.
function usePrefetch() {
  useEffect(() => {
    const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 1500))
    const id = idle(() => { import('./pages/Learn.jsx'); import('./pages/LessonView.jsx'); import('./pages/Encyclopedia.jsx'); import('./pages/Arcade.jsx') })
    return () => window.cancelIdleCallback?.(id)
  }, [])
}

function PageLoader() {
  return (
    <div className="container-x flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3 text-sm text-zinc-500">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-racing-500 border-t-transparent" /> Warming up the engine…
      </div>
    </div>
  )
}

export default function App() {
  const { path, query } = useRoute()
  const [section, sub] = path
  usePrefetch()

  let page
  switch (section) {
    case undefined: page = <Home />; break
    case 'learn': page = sub ? <LessonView id={sub} /> : <Learn query={query} />; break
    case 'encyclopedia': page = <Encyclopedia query={query} />; break
    case 'garage': page = <Garage query={query} />; break
    case 'engines': page = <EnginesLab />; break
    case 'pricing': page = <Pricing />; break
    case 'quiz': page = <QuizCenter sub={sub} />; break
    case 'arcade': page = <Arcade sub={sub} query={query} />; break
    default: page = <Home />
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar current={section ?? ''} />
      <main className="flex-1 pb-24 lg:pb-0" key={path.join('/')}>
        <Suspense fallback={<PageLoader />}>{page}</Suspense>
      </main>
      <footer className="no-print hidden border-t border-white/[0.06] bg-ink-950/60 lg:block">
        <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-zinc-500">An interactive course that takes you from knowing nothing about cars to thinking like a pro mechanic, enthusiast and smart buyer.</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {NAV.map((n) => <a key={n.to} href={`#${n.to}`} className="text-zinc-400 hover:text-white">{n.label}</a>)}
          </nav>
        </div>
        <div className="container-x pb-8 text-xs text-zinc-600">
          Car photos come from Wikipedia / Wikimedia Commons under their respective free licences. Specs and prices are approximate and for education only; always consult your owner&apos;s manual and a qualified mechanic. Progress is saved in your browser.
        </div>
      </footer>
      <BottomNav current={section ?? ''} />
      <Toast />
      <Confetti />
    </div>
  )
}
