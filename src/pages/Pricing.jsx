import { SectionHeader, Stat, money } from '../components/ui.jsx'
import PartsTable from '../components/PartsTable.jsx'
import Calculator from '../components/Calculator.jsx'
import { parts } from '../data/parts.js'
import { carTypes } from '../data/carTypes.js'
import { cars } from '../data/cars.js'

const SCHEDULE = [
  ['Every month', 'Tyre pressures, oil level, coolant, washer fluid, lights', '$0 (DIY)'],
  ['10,000–15,000 km / 1 yr', 'Oil & filter, inspection, cabin filter', '$90 – $250'],
  ['20,000–40,000 km', 'Engine air filter, brake pad check, tyre rotation', '$50 – $150'],
  ['Every 2 years', 'Brake fluid, wheel alignment check', '$130 – $250'],
  ['60,000–100,000 km', 'Spark plugs, transmission fluid, brake discs', '$300 – $900'],
  ['100,000–160,000 km', 'Timing belt + water pump, coolant, dampers', '$900 – $2,000'],
]

const TIPS = [
  ['Use an independent garage', 'Often 30–50% cheaper than dealers; in many regions it does not void your warranty if approved parts are used.'],
  ['Get three quotes', 'Prices for the same job can vary by 2× between garages.'],
  ['Read the fault code yourself', 'A $25 OBD-II reader tells you what is wrong before you walk in.'],
  ['Fix small problems early', 'A $150 CV boot today avoids a $450 axle tomorrow; a $200 coolant hose avoids a $2,000 head gasket.'],
  ['Choose OEM-equivalent parts', 'Brands like Bosch, Brembo, Bilstein, Denso and NGK are often the original suppliers at lower prices.'],
  ['Do the easy jobs', 'Air and cabin filters, wipers and bulbs take minutes and save labour charges.'],
]

const priceBand = (type) => {
  const list = cars.filter((c) => c.type === type && c.year >= 2020)
  if (!list.length) return null
  const ps = list.map((c) => c.priceUSD)
  return { min: Math.min(...ps), max: Math.max(...ps), n: list.length }
}

export default function Pricing() {
  const cheapest = [...parts].sort((a, b) => a.costUSD.avg - b.costUSD.avg)[0]
  const priciest = [...parts].sort((a, b) => b.costUSD.avg - a.costUSD.avg)[0]
  const diy = parts.filter((p) => p.difficulty === 'Easy').length
  return (
    <div className="container-x space-y-12 py-10 sm:py-14">
      <SectionHeader
        eyebrow="Pricing & Parts"
        title={<>Know the <span className="text-gradient">real cost</span> before the garage does</>}
        desc={`Average replacement costs for ${parts.length} parts in USD and EUR, what each part does, warning signs, DIY difficulty and lifespan. Plus a yearly running-cost calculator.`}
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Parts covered" value={parts.length} />
        <Stat label="DIY-friendly" value={diy} sub="rated Easy" />
        <Stat label="Cheapest job" value={money(cheapest.costUSD.avg)} sub={cheapest.name} />
        <Stat label="Biggest bill" value={money(priciest.costUSD.avg)} sub={priciest.name} />
      </div>

      <Calculator />

      <section>
        <h2 className="h-display mb-2 text-2xl text-white sm:text-3xl">Parts price guide</h2>
        <p className="mb-5 text-sm text-zinc-400">Tap any part to see what it does, the signs it is failing and a pro tip.</p>
        <PartsTable />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="font-display text-xl font-bold text-white">Typical maintenance schedule</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] text-sm">
              <thead><tr className="text-left text-xs uppercase tracking-wider text-zinc-500"><th className="pb-2">When</th><th className="pb-2">What</th><th className="pb-2 text-right">Cost</th></tr></thead>
              <tbody>
                {SCHEDULE.map(([w, what, c]) => (
                  <tr key={w} className="border-t border-white/[0.06]">
                    <td className="py-2.5 pr-3 font-semibold text-zinc-200">{w}</td>
                    <td className="py-2.5 pr-3 text-zinc-400">{what}</td>
                    <td className="py-2.5 text-right text-amberx-400">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <a href="#/learn/l5-3" className="mt-4 inline-block text-sm font-semibold text-racing-400">Full maintenance lesson →</a>
        </div>
        <div className="card p-6">
          <h2 className="font-display text-xl font-bold text-white">6 ways to pay less</h2>
          <ul className="mt-4 space-y-3">
            {TIPS.map(([t, d], i) => (
              <li key={t} className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-racing-500/15 font-display text-sm font-bold text-racing-300">{i + 1}</span>
                <span className="text-sm leading-6"><b className="text-white">{t}.</b> <span className="text-zinc-400">{d}</span></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="h-display mb-5 text-2xl text-white sm:text-3xl">What cars cost new</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {carTypes.map((t) => {
            const map = { 'Pickup Truck': 'Pickup', 'Minivan (MPV)': 'Minivan', 'Station Wagon': 'Wagon', 'Muscle Car': 'Muscle', 'Sports Car': 'Sports', 'Luxury Car': 'Luxury', 'Off-road / 4x4': 'Off-road', 'Classic Car': 'Classic' }
            const band = priceBand(map[t.name] || t.name)
            return (
              <div key={t.id} className="card p-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-white">{t.name}</span>
                  <span className="font-display font-bold text-amberx-400">{t.price}</span>
                </div>
                <p className="mt-1 text-xs text-zinc-500">e.g. {t.examples.slice(0, 3).join(', ')}</p>
                {band && <p className="mt-2 text-xs text-zinc-400">In our encyclopedia: {money(band.min)} – {money(band.max)} across {band.n} current models</p>}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
