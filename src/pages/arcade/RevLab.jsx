import { useEffect, useRef, useState } from 'react'
import { useLoop } from '../../hooks/useLoop.js'
import { useProgress } from '../../context/ProgressContext.jsx'
import { buzz, fireConfetti } from '../../components/Confetti.jsx'

// Each engine: cylinders (firing pulses per 2 revs), idle/redline, how fast it revs,
// and the character of its synthesised sound.
const ENGINES = [
  { id: 'i4', name: 'Turbo Inline-4', car: 'Honda Civic Type R', cyl: 4, idle: 850, red: 7000, rate: 9000, wave: 'sawtooth', uneven: 0, bright: 1.0, turbo: true },
  { id: 'v8x', name: 'Cross-plane V8', car: 'Ford Mustang GT', cyl: 8, idle: 700, red: 7500, rate: 7000, wave: 'sawtooth', uneven: 0.55, bright: 0.7 },
  { id: 'v8f', name: 'Flat-plane V8', car: 'Ferrari F8 / Corvette Z06', cyl: 8, idle: 900, red: 8600, rate: 12000, wave: 'sawtooth', uneven: 0, bright: 1.3 },
  { id: 'v10', name: 'V10', car: 'Lexus LFA', cyl: 10, idle: 900, red: 9000, rate: 15000, wave: 'sawtooth', uneven: 0.1, bright: 1.5 },
  { id: 'v12', name: 'V12', car: 'Ferrari 12Cilindri', cyl: 12, idle: 900, red: 9500, rate: 11000, wave: 'sawtooth', uneven: 0, bright: 1.6 },
  { id: 'f6', name: 'Flat-6', car: 'Porsche 911 GT3', cyl: 6, idle: 900, red: 9000, rate: 12000, wave: 'square', uneven: 0.15, bright: 1.2 },
  { id: 'rot', name: 'Twin-rotor rotary', car: 'Mazda RX-7', cyl: 4, idle: 1000, red: 9000, rate: 13000, wave: 'square', uneven: 0.3, bright: 1.1, rotary: true },
  { id: 'ev', name: 'Electric motor', car: 'Porsche Taycan', cyl: 0, idle: 0, red: 16000, rate: 14000, wave: 'sine', uneven: 0, bright: 1, ev: true },
]

function makeNoise(ctx) {
  const buf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1
  const src = ctx.createBufferSource()
  src.buffer = buf
  src.loop = true
  return src
}

function buildAudio(engine) {
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) return null
  const ctx = new AC()
  const master = ctx.createGain(); master.gain.value = 0
  const comp = ctx.createDynamicsCompressor()
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 4
  const shaper = ctx.createWaveShaper()
  const curve = new Float32Array(1024)
  for (let i = 0; i < 1024; i++) { const x = (i / 1023) * 2 - 1; curve[i] = Math.tanh(x * 2.5) }
  shaper.curve = curve

  const osc1 = ctx.createOscillator(); osc1.type = engine.wave
  const osc2 = ctx.createOscillator(); osc2.type = engine.ev ? 'sine' : 'triangle'
  const sub = ctx.createOscillator(); sub.type = 'sine'
  const g1 = ctx.createGain(), g2 = ctx.createGain(), gs = ctx.createGain()
  g1.gain.value = 0.5; g2.gain.value = 0.25; gs.gain.value = engine.ev ? 0 : 0.35
  // Uneven firing (cross-plane V8 burble): amplitude-modulate at half the firing rate
  const am = ctx.createGain(); am.gain.value = 1
  const lfo = ctx.createOscillator(); lfo.type = 'square'
  const lfoGain = ctx.createGain(); lfoGain.gain.value = engine.uneven * 0.5
  lfo.connect(lfoGain).connect(am.gain)

  const noise = makeNoise(ctx)
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.2
  const gn = ctx.createGain(); gn.gain.value = engine.ev ? 0.02 : 0.12
  // Turbo whistle
  const whistle = ctx.createOscillator(); whistle.type = 'sine'
  const gw = ctx.createGain(); gw.gain.value = 0

  osc1.connect(g1).connect(am)
  osc2.connect(g2).connect(am)
  sub.connect(gs).connect(am)
  noise.connect(bp).connect(gn).connect(am)
  am.connect(shaper).connect(lp).connect(master)
  whistle.connect(gw).connect(master)
  master.connect(comp).connect(ctx.destination)
  ;[osc1, osc2, sub, lfo, noise, whistle].forEach((n) => n.start())

  return {
    ctx,
    set(rpm, load, cut) {
      const now = ctx.currentTime
      if (engine.ev) {
        const f = 120 + rpm * 0.12
        osc1.frequency.setTargetAtTime(f, now, 0.02)
        osc2.frequency.setTargetAtTime(f * 2.01, now, 0.02)
        lp.frequency.setTargetAtTime(6000, now, 0.05)
        bp.frequency.setTargetAtTime(2000, now, 0.05)
        master.gain.setTargetAtTime(0.05 + load * 0.18 + (rpm / 16000) * 0.1, now, 0.05)
        return
      }
      const fire = (rpm / 60) * (engine.cyl / 2) * (engine.rotary ? 1.5 : 1)
      osc1.frequency.setTargetAtTime(fire, now, 0.015)
      osc2.frequency.setTargetAtTime(fire * 2, now, 0.015)
      sub.frequency.setTargetAtTime(fire / 2, now, 0.015)
      lfo.frequency.setTargetAtTime(fire / 2, now, 0.015)
      bp.frequency.setTargetAtTime(fire * 3, now, 0.02)
      lp.frequency.setTargetAtTime(300 + (rpm / engine.red) * 3200 * engine.bright + load * 1400, now, 0.03)
      gw.gain.setTargetAtTime(engine.turbo ? Math.max(0, load * (rpm / engine.red) - 0.25) * 0.05 : 0, now, 0.2)
      whistle.frequency.setTargetAtTime(2500 + rpm * 0.6, now, 0.1)
      master.gain.setTargetAtTime(cut ? 0.05 : 0.18 + load * 0.35, now, cut ? 0.005 : 0.03)
    },
    stop() { try { master.gain.setTargetAtTime(0, ctx.currentTime, 0.05); setTimeout(() => ctx.close(), 300) } catch { /* closed */ } },
  }
}

export default function RevLab() {
  const { recordArcade } = useProgress()
  const [engine, setEngine] = useState(ENGINES[1])
  const [sound, setSound] = useState(true)
  const [holding, setHolding] = useState(false)
  const [peak, setPeak] = useState(0)
  const sim = useRef({ rpm: 0, load: 0, cut: false, cutT: 0, hitLimiter: false })
  const audio = useRef(null)
  const frame = useRef(null)
  const holdRef = useRef(false)
  holdRef.current = holding

  // (Re)build audio graph when engine changes (only after a user gesture created it)
  useEffect(() => {
    sim.current.rpm = engine.idle
    if (audio.current) { audio.current.stop(); audio.current = sound ? buildAudio(engine) : null }
    return undefined
  }, [engine]) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => audio.current?.stop(), [])
  useEffect(() => { if (!sound && audio.current) { audio.current.stop(); audio.current = null } }, [sound])

  useLoop(true, (dt) => {
    const s = sim.current
    const target = holdRef.current ? 1 : 0
    s.load += (target - s.load) * Math.min(1, dt * 10)
    const inertia = engine.rate * (0.25 + s.load)
    if (holdRef.current && !s.cut) s.rpm += inertia * dt * (1 - (s.rpm / (engine.red * 1.08)) ** 3)
    else s.rpm -= (engine.ev ? 6000 : 4200) * dt * (s.rpm > engine.idle ? 1 : 0)
    s.rpm = Math.max(engine.idle, s.rpm)
    // Rev limiter: cut fuel/spark briefly
    if (s.rpm >= engine.red) {
      s.cut = true; s.cutT = 0.06; s.rpm = engine.red
      if (!s.hitLimiter) { s.hitLimiter = true; recordArcade('rev', { score: 1, xp: 20 }); fireConfetti(0.5) }
      buzz(8)
    }
    if (s.cut) { s.cutT -= dt; s.rpm -= 1500 * dt; if (s.cutT <= 0) s.cut = false }
    if (s.rpm > peak) setPeak(Math.round(s.rpm))
    audio.current?.set(s.rpm, s.load, s.cut)
  }, frame)

  const start = () => {
    if (sound && !audio.current) audio.current = buildAudio(engine)
    audio.current?.ctx.resume?.()
    setHolding(true)
  }
  const s = sim.current
  const frac = Math.min(1, s.rpm / engine.red)
  const leds = 15

  return (
    <div ref={frame} className="space-y-4">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar">
        {ENGINES.map((e) => (
          <button key={e.id} onClick={() => { setEngine(e); setPeak(0) }} className={`shrink-0 rounded-xl border px-3 py-2 text-left ${engine.id === e.id ? 'border-racing-500/60 bg-racing-500/15' : 'border-white/[0.07] bg-white/[0.03]'}`}>
            <div className="font-display text-sm font-bold text-white">{e.name}</div>
            <div className="text-[10px] text-zinc-500">{e.car}</div>
          </button>
        ))}
      </div>

      <div className="card relative overflow-hidden p-5">
        <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(60% 80% at 50% 100%, rgba(255,77,31,${frac * 0.8}), transparent)` }} />
        {/* F1-style shift lights */}
        <div className="relative flex justify-center gap-1.5">
          {Array.from({ length: leds }).map((_, i) => {
            const on = frac > 0.55 + (i / leds) * 0.42
            const color = i < 5 ? '#22c55e' : i < 10 ? '#ef4444' : '#a855f7'
            const flash = s.cut || frac > 0.985
            return <span key={i} className="h-3 w-3 rounded-full sm:h-4 sm:w-4" style={{ background: on || flash ? (flash ? '#60a5fa' : color) : '#1f2229', boxShadow: on ? `0 0 10px ${color}` : 'none' }} />
          })}
        </div>
        <div className="relative mt-6 text-center">
          <div className="font-mono text-6xl font-bold tabular-nums text-white sm:text-7xl">{Math.round(s.rpm).toLocaleString()}</div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">{engine.ev ? 'motor rpm' : 'rpm'} · redline {engine.red.toLocaleString()}</div>
        </div>
        <div className="relative mt-5 h-4 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full rounded-full" style={{ width: `${frac * 100}%`, background: frac > 0.85 ? 'linear-gradient(90deg,#ff9f1c,#ef4444)' : 'linear-gradient(90deg,#22c55e,#ff9f1c)' }} />
          <div className="absolute inset-y-0 right-0 w-[8%] bg-red-600/40" />
        </div>
        <div className="relative mt-3 flex justify-between text-xs text-zinc-500">
          <span>{engine.ev ? 'No idle: electric motors stop at 0 rpm' : `Idle ${engine.idle} rpm`}</span>
          <span>Peak {peak.toLocaleString()}</span>
        </div>
        {s.cut && <div className="relative mt-2 text-center font-display text-lg font-bold text-red-400">⚡ REV LIMITER! ⚡</div>}
      </div>

      <button
        onPointerDown={(e) => { try { e.currentTarget.setPointerCapture?.(e.pointerId) } catch { /* synthetic event */ } start() }}
        onPointerUp={() => setHolding(false)}
        onPointerCancel={() => setHolding(false)}
        onContextMenu={(e) => e.preventDefault()}
        className={`h-28 w-full select-none rounded-2xl font-display text-3xl font-bold tracking-widest text-black transition active:scale-[.98] ${holding ? 'bg-gradient-to-r from-red-600 to-racing-500 shadow-[0_0_60px_-6px_#ff4d1f]' : 'bg-gradient-to-r from-racing-500 to-amberx-500 shadow-glow'}`}
        style={{ touchAction: 'none', WebkitTouchCallout: 'none' }}
      >
        {holding ? 'VRRRRRAAAP' : 'HOLD TO REV'}
      </button>
      <div className="flex items-center justify-between text-sm">
        <button className="chip" onClick={() => setSound(!sound)}>{sound ? '🔊 Sound on' : '🔇 Sound off'}</button>
        <span className="text-xs text-zinc-500">Turn your volume up. Sound is synthesised live.</span>
      </div>
      <div className="card p-4 text-sm leading-6 text-zinc-400">
        <b className="text-white">Why do engines sound different?</b> The pitch is the <i>firing frequency</i>: rpm ÷ 60 × cylinders ÷ 2. At 6,000 rpm a V8 fires 400 times a second and a V12 600 times, which is why V12s scream higher. A cross-plane V8&apos;s uneven firing between banks creates the famous burble; a flat-plane V8 fires evenly and wails. EVs have no combustion at all, just the whine of the motor and gears.
      </div>
    </div>
  )
}
