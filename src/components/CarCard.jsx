import Img from './Img.jsx'
import { compactMoney } from './ui.jsx'

const fuelColor = {
  Petrol: 'text-orange-300 border-orange-500/30 bg-orange-500/10',
  Diesel: 'text-yellow-200 border-yellow-500/30 bg-yellow-500/10',
  Hybrid: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
  Electric: 'text-sky-300 border-sky-500/30 bg-sky-500/10',
}

export default function CarCard({ car, onOpen }) {
  return (
    <button onClick={() => onOpen(car)} className="card card-hover group flex flex-col overflow-hidden text-left">
      <div className="relative">
        <Img wiki={car.wiki} width={640} alt={car.name} className="aspect-[16/10] w-full" imgClassName="group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink-850 to-transparent" />
        <span className={`absolute left-3 top-3 rounded-full border px-2 py-0.5 text-[11px] font-bold backdrop-blur ${fuelColor[car.fuelType]}`}>{car.fuelType}</span>
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-semibold text-zinc-200 backdrop-blur">{car.year}</span>
      </div>
      <div className="flex flex-1 flex-col p-4 pt-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{car.brand} · {car.type}</div>
        <h3 className="mt-0.5 font-display text-lg font-bold leading-tight text-white group-hover:text-racing-300">{car.name}</h3>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <Spec label="HP" value={car.horsepower.toLocaleString()} />
          <Spec label="0–100" value={car.zeroTo100 ? `${car.zeroTo100}s` : '—'} />
          <Spec label="Top" value={`${car.topSpeed}`} unit="km/h" />
        </div>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="truncate text-zinc-500">{car.engine}</span>
          <span className="ml-2 shrink-0 font-display font-bold text-amberx-400">{compactMoney(car.priceUSD)}</span>
        </div>
      </div>
    </button>
  )
}

function Spec({ label, value, unit }) {
  return (
    <div className="rounded-lg bg-white/[0.03] px-1 py-1.5">
      <div className="font-display text-base font-bold text-white">{value}{unit && <span className="ml-0.5 text-[10px] font-medium text-zinc-500">{unit}</span>}</div>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">{label}</div>
    </div>
  )
}
