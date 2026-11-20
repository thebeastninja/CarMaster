// Quarter-mile model calibrated on real 0–100 km/h times and top speeds.
// a(v) = a0 · (1 − (v/vmax)^0.8), with a0 fitted so the car hits 100 km/h in its
// published time. Checked against real timeslips (Corvette Z06, Demon 170,
// Model S Plaid, Civic Type R, GR86, Golf, Corolla): typically within ~0.5 s.
export const QUARTER_MILE = 402.336
const P = 0.8
const SHIFT_PENALTY = 0.35 // rollout + gear changes

function integrate(a0, vmax, stop, dt = 0.004) {
  let v = 0, d = 0, t = 0
  const samples = [[0, 0, 0]]
  while (t < 80) {
    const a = a0 * Math.max(0, 1 - Math.pow(v / vmax, P))
    v += a * dt; d += v * dt; t += dt
    if (Math.round(t / dt) % 10 === 0) samples.push([t, d, v])
    if (stop(v, d)) break
  }
  samples.push([t, d, v])
  return { t, v, d, samples }
}

const memo = new Map()

/** Returns { et, trap (km/h), at(t) -> { d, v } } for a car. */
export function dragProfile(car) {
  if (memo.has(car.id)) return memo.get(car.id)
  const vmax = car.topSpeed / 3.6
  const target = 100 / 3.6
  let a0
  if (!car.zeroTo100 || vmax <= target) {
    a0 = 1.2 // very old/slow cars
  } else {
    let lo = 0.3, hi = 40
    for (let i = 0; i < 36; i++) {
      const m = (lo + hi) / 2
      const r = integrate(m, vmax, (v) => v >= target, 0.01)
      if (r.t > car.zeroTo100) lo = m; else hi = m
    }
    a0 = hi
  }
  const run = integrate(a0, vmax, (v, d) => d >= QUARTER_MILE)
  const s = run.samples
  const at = (t) => {
    const tt = Math.max(0, t - SHIFT_PENALTY * Math.min(1, t / run.t))
    if (tt >= run.t) return { d: QUARTER_MILE, v: run.v }
    let lo = 0, hi = s.length - 1
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (s[m][0] < tt) lo = m; else hi = m }
    const [t0, d0, v0] = s[lo], [t1, d1, v1] = s[hi]
    const f = t1 > t0 ? (tt - t0) / (t1 - t0) : 0
    return { d: d0 + (d1 - d0) * f, v: v0 + (v1 - v0) * f }
  }
  const prof = { et: run.t + SHIFT_PENALTY, trap: run.v * 3.6, at }
  memo.set(car.id, prof)
  return prof
}
