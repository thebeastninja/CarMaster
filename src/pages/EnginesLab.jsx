import { useState } from 'react'
import { SectionHeader } from '../components/ui.jsx'
import EngineAnimation from '../components/EngineAnimation.jsx'
import EngineSchematic from '../components/EngineSchematic.jsx'
import PowerCurve from '../components/PowerCurve.jsx'
import TurboAnimation from '../components/animations/TurboAnimation.jsx'
import { engineTypes, engineParts } from '../data/engines.js'
import { cars } from '../data/cars.js'

export default function EnginesLab() {
  const [sel, setSel] = useState(engineTypes[4])
  const match = (e) => {
    const key = { i3: /I3/, i4: /\bI4\b/, i6: /\bI6\b/, v6: /\bV6\b/, v8: /\bV8\b/, v10: /V10/, v12: /V12/, flat4: /flat-4/, flat6: /flat-6/, rotary: /rotary/i, diesel: /diesel/i, electric: /electric/i, hybrid: /hybrid|PHEV/i }[e.id]
    return cars.filter((c) => key.test(c.engine)).sort((a, b) => b.horsepower - a.horsepower).slice(0, 6)
  }
  const examples = match(sel)

  return (
    <div className="container-x space-y-12 py-10 sm:py-14">
      <SectionHeader
        eyebrow="Engines Lab"
        title={<>Inside the <span className="text-gradient">heart</span> of the car</>}
        desc="Watch the four-stroke cycle in slow motion, compare every engine layout, explore power curves and see forced induction in action."
      />

      <EngineAnimation />

      <section>
        <h2 className="h-display mb-2 text-2xl text-white sm:text-3xl">Engine layouts</h2>
        <p className="mb-5 text-sm text-zinc-400">Click a layout. Lit cylinders show a simplified firing sequence.</p>
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {engineTypes.map((e) => (
              <button key={e.id} onClick={() => setSel(e)} className={`card card-hover flex flex-col items-center p-3 text-center ${sel.id === e.id ? '!border-racing-500/60 bg-racing-500/[0.06]' : ''}`}>
                <EngineSchematic layout={e.layout} cylinders={e.cylinders} size={84} animate={sel.id === e.id} />
                <div className="mt-1 font-display text-base font-bold text-white">{e.name}</div>
                <div className="text-[11px] text-zinc-500">{e.size}</div>
              </button>
            ))}
          </div>
          <div key={sel.id} className="card animate-fadeUp self-start p-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-ink-900 p-2"><EngineSchematic layout={sel.layout} cylinders={sel.cylinders} size={96} /></div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">{sel.name}</h3>
                <div className="text-sm text-zinc-500">{sel.size}</div>
              </div>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <Info k="Firing interval" v={sel.firing} />
              <Info k="Balance" v={sel.balance} />
              <Info k="Sound" v={sel.sound} />
              <Info k="Cylinders" v={sel.cylinders || '—'} />
            </dl>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <ul className="space-y-1">{sel.pros.map((p) => <li key={p} className="text-emerald-300/90">+ {p}</li>)}</ul>
              <ul className="space-y-1">{sel.cons.map((p) => <li key={p} className="text-red-300/90">− {p}</li>)}</ul>
            </div>
            <div className="mt-4 text-sm"><span className="text-zinc-500">Famous examples: </span><span className="text-zinc-200">{sel.examples.join(', ')}</span></div>
            {examples.length > 0 && (
              <div className="mt-4">
                <div className="label">In the Encyclopedia</div>
                <div className="flex flex-wrap gap-1.5">
                  {examples.map((c) => <a key={c.id} href={`#/encyclopedia?car=${c.id}`} className="chip hover:border-racing-500/50">{c.name} · {c.horsepower} hp</a>)}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <PowerCurve />

      <TurboAnimation />

      <section>
        <h2 className="h-display mb-5 text-2xl text-white sm:text-3xl">Engine parts glossary</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {engineParts.map((p, i) => (
            <div key={p.name} className="card p-4">
              <div className="font-mono text-xs text-racing-400">{String(i + 1).padStart(2, '0')}</div>
              <div className="font-display text-lg font-bold text-white">{p.name}</div>
              <p className="mt-1 text-sm leading-6 text-zinc-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card grid gap-6 p-6 md:grid-cols-3">
        {[
          ['Naturally aspirated', 'Breathes at 1 bar. Instant, linear response. Needs size or high rpm for power.', 'Porsche 911 GT3 · 4.0 L flat-6 · 518 hp'],
          ['Turbocharged', 'Exhaust-driven compressor. Big power from small engines, some lag.', 'Toyota GR Yaris · 1.6 L I3 · 300 hp'],
          ['Supercharged', 'Belt-driven compressor. Instant boost, but costs engine power.', 'Dodge Challenger Hellcat · 6.2 L V8 · 717 hp'],
        ].map(([t, d, e]) => (
          <div key={t}>
            <div className="eyebrow">{t}</div>
            <p className="mt-2 text-sm leading-6 text-zinc-300">{d}</p>
            <p className="mt-2 text-xs text-zinc-500">{e}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

function Info({ k, v }) {
  return (
    <div className="rounded-lg bg-white/[0.03] px-3 py-2">
      <dt className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{k}</dt>
      <dd className="text-zinc-200">{v}</dd>
    </div>
  )
}
