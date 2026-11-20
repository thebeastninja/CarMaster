import { useEffect, useMemo, useRef, useState } from 'react'
import CarCard from '../components/CarCard.jsx'
import Img from '../components/Img.jsx'
import { SectionHeader, money } from '../components/ui.jsx'
import { cars, carTypesList, brandsList, countriesList, fuelsList } from '../data/cars.js'
import { carTypes } from '../data/carTypes.js'
import { useProgress } from '../context/ProgressContext.jsx'

const PRICE_BUCKETS = [
  { id: 'all', label: 'Any price', min: 0, max: Infinity },
  { id: 'u30', label: 'Under $30k', min: 0, max: 30000 },
  { id: '30-60', label: '$30k – $60k', min: 30000, max: 60000 },
  { id: '60-150', label: '$60k – $150k', min: 60000, max: 150000 },
  { id: '150-1m', label: '$150k – $1M', min: 150000, max: 1000000 },
  { id: '1m', label: '$1M+', min: 1000000, max: Infinity },
]
const SORTS = {
  name: { label: 'Name A–Z', fn: (a, b) => a.name.localeCompare(b.name) },
  hp: { label: 'Most powerful', fn: (a, b) => b.horsepower - a.horsepower },
  accel: { label: 'Quickest 0–100', fn: (a, b) => (a.zeroTo100 || 99) - (b.zeroTo100 || 99) },
  speed: { label: 'Top speed', fn: (a, b) => b.topSpeed - a.topSpeed },
  priceAsc: { label: 'Price: low to high', fn: (a, b) => a.priceUSD - b.priceUSD },
  priceDesc: { label: 'Price: high to low', fn: (a, b) => b.priceUSD - a.priceUSD },
  year: { label: 'Newest', fn: (a, b) => b.year - a.year },
}

export default function Encyclopedia({ query }) {
  const [tab, setTab] = useState(query.tab === 'types' ? 'types' : 'models')
  const [search, setSearch] = useState('')
  const [type, setType] = useState(query.type || 'All')
  const [brand, setBrand] = useState('All')
  const [fuel, setFuel] = useState('All')
  const [country, setCountry] = useState('All')
  const [price, setPrice] = useState('all')
  const [minHp, setMinHp] = useState(0)
  const [sort, setSort] = useState('hp')
  const [open, setOpen] = useState(null)
  const [compare, setCompare] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const [limit, setLimit] = useState(24)
  const sentinel = useRef(null)
  const { viewCar } = useProgress()

  useEffect(() => {
    if (query.car) {
      const c = cars.find((x) => x.id === query.car)
      if (c) setOpen(c)
    }
  }, [query.car])

  useEffect(() => { if (open) viewCar(open.id) }, [open, viewCar])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const pb = PRICE_BUCKETS.find((p) => p.id === price)
    return cars
      .filter((c) => (type === 'All' || c.type === type) && (brand === 'All' || c.brand === brand) && (fuel === 'All' || c.fuelType === fuel) && (country === 'All' || c.country === country))
      .filter((c) => c.priceUSD >= pb.min && c.priceUSD < pb.max && c.horsepower >= minHp)
      .filter((c) => !q || `${c.name} ${c.brand} ${c.type} ${c.engine} ${c.country} ${c.year}`.toLowerCase().includes(q))
      .sort(SORTS[sort].fn)
  }, [search, type, brand, fuel, country, price, minHp, sort])

  useEffect(() => { setLimit(24) }, [search, type, brand, fuel, country, price, minHp, sort])
  useEffect(() => {
    const el = sentinel.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setLimit((l) => l + 24) }, { rootMargin: '600px' })
    io.observe(el)
    return () => io.disconnect()
  }, [tab, filtered.length, limit])

  const reset = () => { setSearch(''); setType('All'); setBrand('All'); setFuel('All'); setCountry('All'); setPrice('all'); setMinHp(0) }
  const toggleCompare = (c) => setCompare((prev) => (prev.find((x) => x.id === c.id) ? prev.filter((x) => x.id !== c.id) : prev.length >= 3 ? prev : [...prev, c]))

  return (
    <div className="container-x py-10 sm:py-14">
      <SectionHeader
        eyebrow="Car Encyclopedia"
        title={<>Every kind of car, <span className="text-gradient">decoded</span></>}
        desc={`${cars.length} famous cars from ${countriesList.length} countries with full specs, plus a guide to every body type. Filter, sort, search and compare.`}
      />
      <div className="mb-6 inline-flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
        {[['models', `Car models (${cars.length})`], ['types', `Car types (${carTypes.length})`]].map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={`rounded-lg px-4 py-2 text-sm font-semibold ${tab === k ? 'bg-gradient-to-r from-racing-500 to-amberx-500 text-black' : 'text-zinc-300'}`}>{l}</button>
        ))}
      </div>

      {tab === 'types' ? (
        <TypesGuide onPick={(t) => { if (t === 'Electric' || t === 'Hybrid') { setType('All'); setFuel(t) } else { setType(t); setFuel('All') } setTab('models') }} />
      ) : (
        <>
          <div className="card mb-6 p-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
                <input className="input !pl-9" placeholder="Search by name, brand, engine, country, year…" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search cars" />
              </div>
              <select className="input sm:w-56" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort">
                {Object.entries(SORTS).map(([k, s]) => <option key={k} value={k}>{s.label}</option>)}
              </select>
              <button className="btn-ghost sm:hidden" onClick={() => setShowFilters(!showFilters)}>⚙ Filters</button>
            </div>
            <div className={`${showFilters ? 'grid' : 'hidden'} mt-4 gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-6`}>
              <Select label="Type" value={type} onChange={setType} options={['All', ...carTypesList]} />
              <Select label="Brand" value={brand} onChange={setBrand} options={['All', ...brandsList]} />
              <Select label="Fuel" value={fuel} onChange={setFuel} options={['All', ...fuelsList]} />
              <Select label="Country" value={country} onChange={setCountry} options={['All', ...countriesList]} />
              <label><span className="label">Price</span>
                <select className="input" value={price} onChange={(e) => setPrice(e.target.value)}>{PRICE_BUCKETS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}</select>
              </label>
              <label><span className="label">Min power: {minHp} hp</span>
                <input type="range" min="0" max="1500" step="50" value={minHp} onChange={(e) => setMinHp(Number(e.target.value))} className="mt-3 w-full" />
              </label>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {fuelsList.map((f) => <button key={f} onClick={() => setFuel(fuel === f ? 'All' : f)} className={`chip ${fuel === f ? 'chip-active' : ''}`}>{f}</button>)}
              <span className="mx-1 w-px bg-white/10" />
              {['Sports', 'Supercar', 'Hypercar', 'SUV', 'Classic', 'Muscle'].map((t) => <button key={t} onClick={() => setType(type === t ? 'All' : t)} className={`chip ${type === t ? 'chip-active' : ''}`}>{t}</button>)}
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between text-sm text-zinc-400">
            <span><b className="text-white">{filtered.length}</b> cars</span>
            <button onClick={reset} className="text-racing-400 hover:text-racing-300">Reset filters</button>
          </div>

          {filtered.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.slice(0, limit).map((c) => <CarCard key={c.id} car={c} onOpen={setOpen} />)}
            </div>
          ) : null}
          {filtered.length > limit && (
            <div ref={sentinel} className="mt-6 flex justify-center"><button className="btn-ghost" onClick={() => setLimit(limit + 24)}>Show more ({filtered.length - limit} left)</button></div>
          )}
          {!filtered.length && (
            <div className="card p-12 text-center text-zinc-400">No cars match these filters. <button className="text-racing-400" onClick={reset}>Reset</button></div>
          )}
        </>
      )}

      {open && <CarModal car={open} onClose={() => setOpen(null)} compare={compare} toggleCompare={toggleCompare} />}
      {compare.length > 0 && <CompareTray cars={compare} onRemove={toggleCompare} onClear={() => setCompare([])} />}
    </div>
  )
}

function Select({ label, value, onChange, options }) {
  return (
    <label><span className="label">{label}</span>
      <select className="input" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}

function CarModal({ car, onClose, compare, toggleCompare }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])
  const inCompare = compare.find((x) => x.id === car.id)
  const specs = [
    ['Engine', car.engine], ['Power', `${car.horsepower.toLocaleString()} hp`], ['Torque', car.torque ? `${car.torque.toLocaleString()} Nm` : '—'],
    ['Transmission', car.transmission], ['Drivetrain', car.drivetrain], ['0–100 km/h', car.zeroTo100 ? `${car.zeroTo100} s` : 'n/a'],
    ['Top speed', `${car.topSpeed} km/h`], ['Fuel', car.fuelType], ['Year', car.year], ['Country', car.country], ['Type', car.type],
    ['Price', `${money(car.priceUSD)}${car.type === 'Classic' || car.year < 2020 ? ' (est. value)' : ''}`],
  ]
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={onClose} role="dialog" aria-modal="true" aria-label={car.name}>
      <div className="card max-h-[92vh] w-full max-w-4xl animate-fadeUp overflow-y-auto rounded-b-none sm:rounded-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <Img wiki={car.wiki} width={1280} eager alt={car.name} className="aspect-[16/9] w-full sm:aspect-[16/7]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-transparent" />
          <button onClick={onClose} className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-xl text-white backdrop-blur hover:bg-black/80" aria-label="Close">×</button>
          <div className="absolute bottom-4 left-5 right-5">
            <div className="text-sm font-semibold uppercase tracking-wider text-racing-300">{car.brand} · {car.year}</div>
            <h2 className="h-display text-3xl text-white sm:text-4xl">{car.name}</h2>
          </div>
        </div>
        <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="leading-7 text-zinc-300">{car.description}</p>
            <div className="mt-5 rounded-xl border border-amberx-500/30 bg-amberx-500/[0.07] p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amberx-400">💡 Fun fact</div>
              <p className="mt-1 text-sm leading-6 text-zinc-200">{car.funFact}</p>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <Big label="Power" value={car.horsepower.toLocaleString()} unit="hp" />
              <Big label="0–100" value={car.zeroTo100 || '—'} unit={car.zeroTo100 ? 's' : ''} />
              <Big label="Top speed" value={car.topSpeed} unit="km/h" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <button className={inCompare ? 'btn-primary' : 'btn-ghost'} onClick={() => toggleCompare(car)}>{inCompare ? '✓ In compare' : '+ Compare'}</button>
              <a className="btn-ghost" href={`https://en.wikipedia.org/wiki/${encodeURIComponent(car.wiki.replace(/ /g, '_'))}`} target="_blank" rel="noreferrer">📖 Wikipedia</a>
              <a className="btn-ghost" href={`#/arcade/drag?car=${car.id}`}>🚦 Drag race it</a>
            </div>
          </div>
          <dl className="divide-y divide-white/[0.06] rounded-xl border border-white/[0.07] text-sm">
            {specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 px-4 py-2.5">
                <dt className="text-zinc-500">{k}</dt><dd className="text-right font-medium text-zinc-100">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function Big({ label, value, unit }) {
  return (
    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
      <div className="font-display text-2xl font-bold text-white">{value}<span className="ml-0.5 text-xs text-zinc-500">{unit}</span></div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{label}</div>
    </div>
  )
}

function CompareTray({ cars: list, onRemove, onClear }) {
  const [expanded, setExpanded] = useState(false)
  const rows = [
    ['Power', (c) => `${c.horsepower} hp`, (c) => c.horsepower, 'max'],
    ['Torque', (c) => (c.torque ? `${c.torque} Nm` : '—'), (c) => c.torque, 'max'],
    ['0–100 km/h', (c) => (c.zeroTo100 ? `${c.zeroTo100} s` : '—'), (c) => c.zeroTo100 || 99, 'min'],
    ['Top speed', (c) => `${c.topSpeed} km/h`, (c) => c.topSpeed, 'max'],
    ['Engine', (c) => c.engine], ['Drivetrain', (c) => c.drivetrain], ['Transmission', (c) => c.transmission], ['Fuel', (c) => c.fuelType],
    ['Price', (c) => money(c.priceUSD), (c) => c.priceUSD, 'min'],
  ]
  return (
    <div className="fixed inset-x-0 bottom-[calc(62px+env(safe-area-inset-bottom))] z-30 border-t border-white/10 bg-ink-900/95 backdrop-blur-xl lg:bottom-0">
      <div className="container-x py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="shrink-0 text-sm font-semibold text-white">Compare ({list.length}/3)</span>
            {list.map((c) => <button key={c.id} onClick={() => onRemove(c)} className="chip shrink-0">{c.name} ×</button>)}
          </div>
          <div className="flex shrink-0 gap-2">
            <button className="btn-primary !py-2" onClick={() => setExpanded(!expanded)}>{expanded ? 'Hide' : 'Compare'}</button>
            <button className="btn-ghost !py-2" onClick={onClear}>Clear</button>
          </div>
        </div>
        {expanded && (
          <div className="mt-3 max-h-[50vh] overflow-auto rounded-xl border border-white/[0.07]">
            <table className="w-full min-w-[520px] text-sm">
              <thead><tr className="bg-white/[0.04]"><th className="px-3 py-2 text-left text-zinc-500">Spec</th>{list.map((c) => <th key={c.id} className="px-3 py-2 text-left font-display text-white">{c.name}</th>)}</tr></thead>
              <tbody>
                {rows.map(([label, fmt, val, best]) => {
                  const vals = val ? list.map(val) : []
                  const target = best === 'max' ? Math.max(...vals) : best === 'min' ? Math.min(...vals) : null
                  return (
                    <tr key={label} className="border-t border-white/[0.05]">
                      <td className="px-3 py-2 text-zinc-500">{label}</td>
                      {list.map((c, i) => <td key={c.id} className={`px-3 py-2 ${target !== null && vals[i] === target && list.length > 1 ? 'font-bold text-emerald-300' : 'text-zinc-200'}`}>{fmt(c)}</td>)}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

function TypesGuide({ onPick }) {
  const typeMap = { 'Pickup Truck': 'Pickup', 'Minivan (MPV)': 'Minivan', 'Station Wagon': 'Wagon', 'Muscle Car': 'Muscle', 'Sports Car': 'Sports', 'Luxury Car': 'Luxury', 'Off-road / 4x4': 'Off-road', 'Classic Car': 'Classic' }
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {carTypes.map((t) => {
        const filterType = t.id === 'electric' ? 'Electric' : t.id === 'hybrid' ? 'Hybrid' : typeMap[t.name] || t.name
        const byFuel = t.id === 'electric' || t.id === 'hybrid'
        const count = cars.filter((c) => (byFuel ? c.fuelType === filterType : c.type === filterType)).length
        return (
          <div key={t.id} className="card flex flex-col overflow-hidden sm:flex-row">
            <Img wiki={t.wiki} width={480} alt={t.name} className="h-40 w-full shrink-0 sm:h-auto sm:w-44" />
            <div className="flex-1 p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-white">{t.name}</h3>
                <span className="chip shrink-0">{t.price}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-400"><b className="text-zinc-200">History: </b>{t.history}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400"><b className="text-zinc-200">Best for: </b>{t.bestFor}</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <ul className="space-y-1">{t.pros.map((p) => <li key={p} className="text-emerald-300/90">+ {p}</li>)}</ul>
                <ul className="space-y-1">{t.cons.map((p) => <li key={p} className="text-red-300/90">− {p}</li>)}</ul>
              </div>
              <div className="mt-3 text-xs text-zinc-500">Famous examples: {t.examples.join(', ')}</div>
              {count > 0 && <button onClick={() => onPick(filterType)} className="mt-3 text-sm font-semibold text-racing-400 hover:text-racing-300">See {count} {t.name.toLowerCase()} models →</button>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
