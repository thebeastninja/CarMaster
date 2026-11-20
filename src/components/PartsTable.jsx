import { useMemo, useState } from 'react'
import { parts, partCategories } from '../data/parts.js'
import { Pill, money } from './ui.jsx'

const DIFF_TONE = { Easy: 'easy', Medium: 'medium', Hard: 'hard' }

export default function PartsTable() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('All')
  const [diff, setDiff] = useState('All')
  const [cur, setCur] = useState('USD')
  const [sort, setSort] = useState('avg-desc')
  const [open, setOpen] = useState(null)

  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    const r = parts.filter((p) => (cat === 'All' || p.category === cat) && (diff === 'All' || p.difficulty === diff) && (!s || `${p.name} ${p.what} ${p.signs.join(' ')}`.toLowerCase().includes(s)))
    const by = { 'avg-desc': (a, b) => b.costUSD.avg - a.costUSD.avg, 'avg-asc': (a, b) => a.costUSD.avg - b.costUSD.avg, name: (a, b) => a.name.localeCompare(b.name) }
    return r.sort(by[sort])
  }, [q, cat, diff, sort])

  const cost = (p) => (cur === 'USD' ? p.costUSD : p.costEUR)
  const maxAvg = Math.max(...parts.map((p) => p.costUSD.high))

  return (
    <div className="card overflow-hidden">
      <div className="space-y-3 border-b border-white/[0.06] p-4">
        <div className="flex flex-col gap-3 md:flex-row">
          <input className="input md:flex-1" placeholder="Search parts or symptoms (e.g. 'squeal', 'overheating')…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search parts" />
          <select className="input md:w-48" value={diff} onChange={(e) => setDiff(e.target.value)} aria-label="DIY difficulty">
            {['All', 'Easy', 'Medium', 'Hard'].map((d) => <option key={d} value={d}>{d === 'All' ? 'Any DIY difficulty' : `DIY: ${d}`}</option>)}
          </select>
          <select className="input md:w-52" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
            <option value="avg-desc">Most expensive first</option>
            <option value="avg-asc">Cheapest first</option>
            <option value="name">Name A–Z</option>
          </select>
          <div className="inline-flex shrink-0 rounded-xl border border-white/10 p-1">
            {['USD', 'EUR'].map((c) => <button key={c} onClick={() => setCur(c)} className={`rounded-lg px-3 py-1.5 text-sm font-bold ${cur === c ? 'bg-racing-500 text-black' : 'text-zinc-400'}`}>{c === 'USD' ? '$ USD' : '€ EUR'}</button>)}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['All', ...partCategories].map((c) => <button key={c} onClick={() => setCat(c)} className={`chip ${cat === c ? 'chip-active' : ''}`}>{c}</button>)}
        </div>
      </div>

      <div className="hidden grid-cols-[2fr_1.6fr_0.8fr_1.2fr_32px] gap-4 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500 md:grid">
        <span>Part</span><span>Replacement cost (low · avg · high)</span><span>DIY</span><span>Lifespan</span><span />
      </div>
      <ul className="divide-y divide-white/[0.05]">
        {list.map((p) => {
          const c = cost(p)
          const isOpen = open === p.id
          return (
            <li key={p.id}>
              <button onClick={() => setOpen(isOpen ? null : p.id)} className="grid w-full grid-cols-1 gap-2 px-4 py-3.5 text-left transition hover:bg-white/[0.03] md:grid-cols-[2fr_1.6fr_0.8fr_1.2fr_32px] md:items-center md:gap-4" aria-expanded={isOpen}>
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.05] text-xl">{p.icon}</span>
                  <span>
                    <span className="block font-semibold text-white">{p.name}</span>
                    <span className="block text-xs text-zinc-500">{p.category}</span>
                  </span>
                </span>
                <span>
                  <span className="flex items-baseline gap-2 text-sm">
                    <span className="text-zinc-500">{money(c.low, cur)}</span>
                    <span className="font-display text-lg font-bold text-amberx-400">{money(c.avg, cur)}</span>
                    <span className="text-zinc-500">{money(c.high, cur)}</span>
                  </span>
                  <span className="relative mt-1 block h-1.5 rounded-full bg-white/[0.06]">
                    <span className="absolute h-full rounded-full bg-gradient-to-r from-racing-600/70 to-amberx-500/70" style={{ left: `${Math.sqrt(p.costUSD.low / maxAvg) * 100}%`, width: `${(Math.sqrt(p.costUSD.high / maxAvg) - Math.sqrt(p.costUSD.low / maxAvg)) * 100}%` }} />
                  </span>
                </span>
                <span><Pill tone={DIFF_TONE[p.difficulty]}>{p.difficulty}</Pill></span>
                <span className="text-sm text-zinc-400">{p.lifespan}</span>
                <span className={`hidden text-zinc-500 transition md:block ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              {isOpen && (
                <div className="grid animate-fadeUp gap-4 bg-black/20 px-4 pb-5 pt-1 md:grid-cols-3">
                  <div><div className="label">What it does</div><p className="text-sm leading-6 text-zinc-300">{p.what}</p></div>
                  <div>
                    <div className="label">Signs it&apos;s failing</div>
                    <ul className="space-y-1 text-sm text-zinc-300">{p.signs.map((s) => <li key={s} className="flex gap-2"><span className="text-red-400">⚠</span>{s}</li>)}</ul>
                  </div>
                  <div>
                    <div className="label">Pro tip</div>
                    <p className="text-sm leading-6 text-zinc-300">{p.tip}</p>
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>
      {!list.length && <div className="p-10 text-center text-zinc-500">No parts match your search.</div>}
      <div className="border-t border-white/[0.06] px-4 py-3 text-xs text-zinc-500">
        Costs are typical totals including parts and labour for mainstream cars. Premium, performance and luxury cars often cost 1.5–3× more. Labour rates vary widely by country and city.
      </div>
    </div>
  )
}
