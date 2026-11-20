import { useMemo, useState } from 'react'
import { calcProfiles, USD_TO_EUR } from '../data/parts.js'
import { Slider } from './animations/Controls.jsx'
import { money } from './ui.jsx'

const STYLES = { Gentle: 0.85, Normal: 1, Spirited: 1.25 }
const COLORS = ['#ff4d1f', '#ff9f1c', '#facc15', '#38bdf8', '#a78bfa', '#34d399']

export default function Calculator() {
  const [type, setType] = useState('Sedan')
  const [km, setKm] = useState(15000)
  const [age, setAge] = useState(5)
  const [style, setStyle] = useState('Normal')
  const [fuelPrice, setFuelPrice] = useState(1.6)
  const [elecPrice, setElecPrice] = useState(0.25)
  const [includeInsurance, setIncludeInsurance] = useState(true)
  const [cur, setCur] = useState('USD')

  const p = calcProfiles[type]
  const result = useMemo(() => {
    const ageF = 1 + Math.max(0, age - 3) * 0.07 // older cars need more repairs
    const s = STYLES[style]
    const service = p.base * (0.7 + 0.3 * ageF)
    const wear = km * p.perKm * ageF * s
    const tyres = km * p.tyres * s
    const energy = p.ev ? (km / 100) * p.kwh * elecPrice : (km / 100) * p.fuelL * s * fuelPrice
    const insurance = includeInsurance ? p.insurance : 0
    const unexpected = (service + wear) * (age > 8 ? 0.35 : age > 4 ? 0.2 : 0.08)
    const items = [
      ['Scheduled servicing', service],
      ['Wear parts (brakes, filters, fluids)', wear],
      ['Tyres', tyres],
      ['Unexpected repairs buffer', unexpected],
      [p.ev ? 'Electricity' : 'Fuel', energy],
      ...(includeInsurance ? [['Insurance (typical)', insurance]] : []),
    ]
    const total = items.reduce((a, [, v]) => a + v, 0)
    return { items, total, maintenance: service + wear + tyres + unexpected }
  }, [p, km, age, style, fuelPrice, elecPrice, includeInsurance])

  const conv = (v) => (cur === 'EUR' ? v * USD_TO_EUR : v)

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col gap-2 border-b border-white/[0.06] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="eyebrow">Calculator</div>
          <h3 className="font-display text-xl font-bold text-white">Yearly Running Cost Estimator</h3>
        </div>
        <div className="inline-flex self-start rounded-xl border border-white/10 p-1">
          {['USD', 'EUR'].map((c) => <button key={c} onClick={() => setCur(c)} className={`rounded-lg px-3 py-1 text-sm font-bold ${cur === c ? 'bg-racing-500 text-black' : 'text-zinc-400'}`}>{c}</button>)}
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="space-y-5 p-5">
          <label className="block">
            <span className="label">Car type</span>
            <select className="input" value={type} onChange={(e) => setType(e.target.value)}>
              {Object.keys(calcProfiles).map((k) => <option key={k}>{k}</option>)}
            </select>
          </label>
          <Slider label="Yearly distance" value={km} min={2000} max={60000} step={1000} onChange={setKm} format={(v) => `${v.toLocaleString()} km`} />
          <Slider label="Car age" value={age} min={0} max={20} step={1} onChange={setAge} format={(v) => `${v} year${v === 1 ? '' : 's'}`} />
          <div>
            <span className="label">Driving style</span>
            <div className="flex gap-2">{Object.keys(STYLES).map((k) => <button key={k} onClick={() => setStyle(k)} className={`chip ${style === k ? 'chip-active' : ''}`}>{k}</button>)}</div>
          </div>
          {p.ev ? (
            <Slider label="Electricity price" value={elecPrice} min={0.08} max={0.7} onChange={setElecPrice} format={(v) => `$${v.toFixed(2)}/kWh`} />
          ) : (
            <Slider label="Fuel price" value={fuelPrice} min={0.8} max={2.5} onChange={setFuelPrice} format={(v) => `$${v.toFixed(2)}/L`} />
          )}
          <label className="flex items-center gap-2 text-sm text-zinc-300">
            <input type="checkbox" checked={includeInsurance} onChange={(e) => setIncludeInsurance(e.target.checked)} className="h-4 w-4 accent-racing-500" />
            Include typical insurance
          </label>
        </div>
        <div className="border-t border-white/[0.06] bg-black/20 p-5 lg:border-l lg:border-t-0">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">Estimated yearly cost</div>
          <div className="font-display text-5xl font-bold text-white">{money(conv(result.total), cur)}</div>
          <div className="mt-1 text-sm text-zinc-400">
            ≈ {money(conv(result.total / 12), cur)}/month · {money(conv((result.total / km) * 100), cur)} per 100 km
          </div>
          <div className="mt-1 text-sm text-zinc-500">Maintenance & repairs only: <b className="text-amberx-400">{money(conv(result.maintenance), cur)}</b>/year</div>
          <div className="mt-5 flex h-4 overflow-hidden rounded-full">
            {result.items.map(([k, v], i) => <div key={k} style={{ width: `${(v / result.total) * 100}%`, background: COLORS[i] }} title={k} />)}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {result.items.map(([k, v], i) => (
              <li key={k} className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 text-zinc-300"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: COLORS[i] }} />{k}</span>
                <span className="font-semibold text-white">{money(conv(v), cur)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-5 text-zinc-500">
            Estimates use typical independent-garage prices and do not include depreciation, financing, tax or parking. Older cars get a higher repair buffer; spirited driving wears brakes and tyres faster.
          </p>
        </div>
      </div>
    </div>
  )
}
