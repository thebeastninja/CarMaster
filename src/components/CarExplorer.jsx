import { useState } from 'react'

// Clickable car cut-away. Coordinates refer to the 800×360 viewBox.
export const HOTSPOTS = [
  { id: 'engine', name: 'Engine', x: 205, y: 165, color: '#ff4d1f', what: 'Burns fuel to create rotation. Pistons push a crankshaft around, thousands of times a minute.', how: 'Four strokes: intake, compression, power and exhaust. More cylinders and displacement generally mean more power.', life: '250,000–400,000 km with regular oil changes', link: '#/engines' },
  { id: 'radiator', name: 'Radiator', x: 105, y: 175, color: '#38bdf8', what: 'Removes engine heat by passing hot coolant through thin aluminium fins cooled by air.', how: 'A water pump circulates coolant; a thermostat opens when warm; a fan pulls air when you are slow.', life: '150,000–250,000 km', link: '#/learn/l2-9' },
  { id: 'battery', name: '12 V Battery', x: 270, y: 135, color: '#a3e635', what: 'Starts the engine and powers electronics when the engine is off.', how: 'Lead-acid or AGM chemistry stores ~12.6 V; the alternator recharges it while driving.', life: '4–6 years', link: '#/learn/l2-10' },
  { id: 'transmission', name: 'Transmission', x: 300, y: 205, color: '#facc15', what: 'Multiplies the engine\'s torque through gears so the car can pull away and cruise efficiently.', how: 'Manual, automatic (torque converter), CVT or dual-clutch. Low gears = more force; high gears = more speed.', life: '200,000–300,000 km', link: '#/learn/l2-2' },
  { id: 'steering', name: 'Steering', x: 345, y: 140, color: '#c084fc', what: 'Turns the front wheels when you turn the steering wheel.', how: 'Rack-and-pinion converts rotation into side-to-side motion; an electric motor assists you.', life: 'Rack 150,000–250,000 km', link: '#/learn/l2-6' },
  { id: 'brakes', name: 'Brakes', x: 165, y: 270, color: '#ef4444', what: 'Stop the car by clamping pads onto spinning discs, turning motion into heat.', how: 'Hydraulic fluid multiplies your pedal force. ABS stops the wheels locking so you can still steer.', life: 'Pads 30,000–70,000 km, discs 60,000–120,000 km', link: '#/learn/l2-4' },
  { id: 'suspension', name: 'Suspension', x: 615, y: 225, color: '#f472b6', what: 'Keeps tyres on the road and isolates you from bumps.', how: 'Springs hold the car up, dampers stop it bouncing, anti-roll bars limit body roll in corners.', life: 'Dampers 80,000–150,000 km', link: '#/learn/l2-5' },
  { id: 'wheels', name: 'Wheels & Tyres', x: 640, y: 282, color: '#fb923c', what: 'The only contact with the road. Every force passes through four hand-sized contact patches.', how: 'Read the sidewall (e.g. 225/45 R17 94W). Keep pressures correct and tread above 3 mm.', life: '40,000–80,000 km or 6–10 years', link: '#/learn/l2-7' },
  { id: 'fuel', name: 'Fuel Tank', x: 545, y: 230, color: '#fde047', what: 'Stores fuel safely, usually in front of the rear axle for crash protection.', how: 'An in-tank electric pump sends fuel forward to the injectors at 3–6 bar (or much higher for direct injection).', life: 'Pump 150,000–250,000 km', link: '#/learn/l3-8' },
  { id: 'exhaust', name: 'Exhaust & Catalyst', x: 445, y: 262, color: '#a1a1aa', what: 'Carries away exhaust gas, cleans it and reduces noise.', how: 'Manifold → catalytic converter (Pt, Pd, Rh) → resonator → muffler → tailpipe.', life: 'Cat 160,000+ km; muffler 100,000–200,000 km', link: '#/learn/l2-8' },
  { id: 'differential', name: 'Differential', x: 640, y: 210, color: '#2dd4bf', what: 'Splits power between left and right wheels and lets them rotate at different speeds in corners.', how: 'A set of bevel gears. Limited-slip diffs send more torque to the wheel with more grip.', life: 'Often the life of the car (change the oil)', link: '#/learn/l2-3' },
]

export default function CarExplorer({ compact }) {
  const [sel, setSel] = useState(HOTSPOTS[0])
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-white/[0.06] px-5 py-4">
        <div className="eyebrow">Car Explorer</div>
        <h3 className="font-display text-xl font-bold text-white">Click any part of the car</h3>
      </div>
      <div className={`grid ${compact ? '' : 'lg:grid-cols-[1.6fr_1fr]'}`}>
        <div className="grid-bg relative bg-ink-900/60 p-3 sm:p-6">
          <svg viewBox="0 0 800 360" className="w-full" role="img" aria-label="Car cut-away diagram with clickable components">
            <defs>
              <linearGradient id="bodyG" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#ff4d1f" stopOpacity=".22" /><stop offset="1" stopColor="#ff4d1f" stopOpacity=".05" />
              </linearGradient>
            </defs>
            {/* Ground */}
            <line x1="20" y1="322" x2="780" y2="322" stroke="#2a2e37" strokeWidth="2" />
            {/* Body outline */}
            <path d="M60 250 Q58 200 110 188 L250 160 Q300 100 380 92 L520 90 Q590 94 650 150 L730 175 Q760 185 760 230 L760 262 L700 262 A62 62 0 0 0 580 262 L230 262 A62 62 0 0 0 110 262 L60 262 Z" fill="url(#bodyG)" stroke="#ff6a3d" strokeWidth="2.5" strokeOpacity=".7" />
            {/* Windows */}
            <path d="M285 160 Q320 112 385 106 L440 105 L440 160 Z" fill="#0ea5e9" fillOpacity=".12" stroke="#38bdf8" strokeOpacity=".35" />
            <path d="M455 105 L515 104 Q570 108 615 160 L455 160 Z" fill="#0ea5e9" fillOpacity=".12" stroke="#38bdf8" strokeOpacity=".35" />
            {/* Seats */}
            <path d="M400 230 L400 175 Q402 165 412 168 L420 230 Z" fill="#3f3f46" />
            <path d="M520 230 L520 175 Q522 165 532 168 L540 230 Z" fill="#3f3f46" />
            {/* Engine bay contents */}
            <rect x="160" y="150" width="90" height="62" rx="8" fill="#2a2e37" stroke={sel.id === 'engine' ? '#ff4d1f' : '#3f3f46'} strokeWidth="2" />
            {[0, 1, 2, 3].map((i) => <rect key={i} x={170 + i * 20} y="156" width="14" height="22" rx="3" fill="#3f3f46" />)}
            <rect x="92" y="150" width="20" height="60" rx="3" fill="#0f172a" stroke={sel.id === 'radiator' ? '#38bdf8' : '#334155'} strokeWidth="2" />
            <rect x="255" y="122" width="32" height="24" rx="3" fill="#1a2e05" stroke={sel.id === 'battery' ? '#a3e635' : '#3f6212'} strokeWidth="2" />
            <path d="M250 190 L340 200 L340 222 L250 214 Z" fill="#3f3f46" stroke={sel.id === 'transmission' ? '#facc15' : '#52525b'} strokeWidth="2" />
            {/* Prop shaft & diff */}
            <line x1="340" y1="214" x2="630" y2="214" stroke="#52525b" strokeWidth="6" />
            <circle cx="640" cy="214" r="15" fill="#2a2e37" stroke={sel.id === 'differential' ? '#2dd4bf' : '#52525b'} strokeWidth="2" />
            {/* Steering column */}
            <line x1="345" y1="140" x2="300" y2="200" stroke={sel.id === 'steering' ? '#c084fc' : '#52525b'} strokeWidth="5" />
            <circle cx="350" cy="136" r="14" fill="none" stroke={sel.id === 'steering' ? '#c084fc' : '#71717a'} strokeWidth="4" />
            {/* Exhaust */}
            <path d="M210 214 Q230 255 300 255 L700 255 L760 250" fill="none" stroke={sel.id === 'exhaust' ? '#e4e4e7' : '#52525b'} strokeWidth="6" />
            <rect x="420" y="246" width="50" height="18" rx="7" fill="#3f3f46" />
            <rect x="660" y="244" width="44" height="20" rx="8" fill="#3f3f46" />
            {/* Fuel tank */}
            <rect x="505" y="218" width="80" height="30" rx="8" fill="#422006" stroke={sel.id === 'fuel' ? '#fde047' : '#713f12'} strokeWidth="2" />
            {/* Wheels */}
            {[170, 640].map((cx) => (
              <g key={cx}>
                <circle cx={cx} cy="270" r="52" fill="#0c0d10" stroke={sel.id === 'wheels' ? '#fb923c' : '#27272a'} strokeWidth="14" />
                <circle cx={cx} cy="270" r="30" fill="#1f2229" stroke="#52525b" strokeWidth="3" />
                <circle cx={cx} cy="270" r="22" fill="none" stroke={sel.id === 'brakes' ? '#ef4444' : '#71717a'} strokeWidth="5" />
                <circle cx={cx} cy="270" r="5" fill="#a1a1aa" />
                <path d={`M${cx - 18} 236 q18 -10 36 0`} stroke={sel.id === 'brakes' ? '#ef4444' : '#b91c1c'} strokeWidth="7" fill="none" />
              </g>
            ))}
            {/* Suspension springs */}
            {[170, 640].map((cx) => (
              <polyline key={cx} points={`${cx + 28},190 ${cx + 18},196 ${cx + 38},202 ${cx + 18},208 ${cx + 38},214 ${cx + 18},220 ${cx + 38},226 ${cx + 28},232`} fill="none" stroke={sel.id === 'suspension' ? '#f472b6' : '#71717a'} strokeWidth="3" />
            ))}
            {/* Hotspots */}
            {HOTSPOTS.map((h) => {
              const active = sel.id === h.id
              return (
                <g key={h.id} onClick={() => setSel(h)} className="cursor-pointer" role="button" tabIndex={0} aria-label={h.name} onKeyDown={(e) => e.key === 'Enter' && setSel(h)}>
                  <circle cx={h.x} cy={h.y} r={active ? 15 : 11} fill={h.color} fillOpacity=".18">
                    <animate attributeName="r" values={active ? '14;20;14' : '10;15;10'} dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" values=".35;.05;.35" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={h.x} cy={h.y} r="7" fill={h.color} stroke="#000" strokeWidth="2" />
                  {active && <text x={h.x} y={h.y - 22} textAnchor="middle" className="font-display text-[15px] font-bold" fill={h.color}>{h.name}</text>}
                </g>
              )
            })}
          </svg>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {HOTSPOTS.map((h) => (
              <button key={h.id} onClick={() => setSel(h)} className={`chip ${sel.id === h.id ? 'chip-active' : ''}`}>
                <span className="h-2 w-2 rounded-full" style={{ background: h.color }} />{h.name}
              </button>
            ))}
          </div>
        </div>
        <div key={sel.id} className="animate-fadeUp border-t border-white/[0.06] p-5 lg:border-l lg:border-t-0">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ background: sel.color }} />
            <h4 className="font-display text-2xl font-bold text-white">{sel.name}</h4>
          </div>
          <div className="mt-4 space-y-4 text-sm leading-6">
            <div><div className="label">What it does</div><p className="text-zinc-300">{sel.what}</p></div>
            <div><div className="label">How it works</div><p className="text-zinc-300">{sel.how}</p></div>
            <div><div className="label">Typical lifespan</div><p className="text-zinc-300">{sel.life}</p></div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href={sel.link} className="btn-ghost">Learn more →</a>
            <a href="#/pricing" className="btn-ghost">Repair prices</a>
          </div>
        </div>
      </div>
    </div>
  )
}
