import { useRoute } from './hooks/useRoute.js'
import Navbar, { Logo, NAV } from './components/Navbar.jsx'
import { Toast } from './components/ui.jsx'
import Home from './pages/Home.jsx'
import Learn from './pages/Learn.jsx'
import LessonView from './pages/LessonView.jsx'
import Encyclopedia from './pages/Encyclopedia.jsx'
import Garage from './pages/Garage.jsx'
import EnginesLab from './pages/EnginesLab.jsx'
import Pricing from './pages/Pricing.jsx'
import QuizCenter from './pages/QuizCenter.jsx'

export default function App() {
  const { path, query } = useRoute()
  const [section, sub] = path

  let page
  switch (section) {
    case undefined: page = <Home />; break
    case 'learn': page = sub ? <LessonView id={sub} /> : <Learn query={query} />; break
    case 'encyclopedia': page = <Encyclopedia query={query} />; break
    case 'garage': page = <Garage query={query} />; break
    case 'engines': page = <EnginesLab />; break
    case 'pricing': page = <Pricing />; break
    case 'quiz': page = <QuizCenter sub={sub} />; break
    default: page = <Home />
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar current={section ?? ''} />
      <main className="flex-1" key={path.join('/')}>{page}</main>
      <footer className="no-print border-t border-white/[0.06] bg-ink-950/60">
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
          Specs and prices are approximate and for education only; always consult your owner&apos;s manual and a qualified mechanic. Progress is saved in your browser.
        </div>
      </footer>
      <Toast />
    </div>
  )
}
