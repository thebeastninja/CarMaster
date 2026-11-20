export function PlayButton({ playing, onClick }) {
  return (
    <button className="btn-primary !px-4" onClick={onClick} aria-label={playing ? 'Pause' : 'Play'}>
      {playing ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M7 5v14l12-7z" /></svg>
      )}
      {playing ? 'Pause' : 'Play'}
    </button>
  )
}

export function Slider({ label, value, min, max, step = 0.01, onChange, format = (v) => v }) {
  return (
    <label className="flex min-w-[160px] flex-1 flex-col gap-1">
      <span className="flex justify-between text-xs font-semibold uppercase tracking-wider text-zinc-400">
        <span>{label}</span><span className="font-mono text-zinc-200">{format(value)}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(parseFloat(e.target.value))} />
    </label>
  )
}

export function AnimFrame({ title, subtitle, children, controls, side, frameRef }) {
  return (
    <div ref={frameRef} className="card overflow-hidden">
      <div className="flex flex-col gap-1 border-b border-white/[0.06] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="eyebrow">Interactive</div>
          <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        </div>
        {subtitle && <p className="max-w-md text-sm text-zinc-400">{subtitle}</p>}
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.35fr_1fr]">
        <div className="grid-bg relative flex items-center justify-center bg-ink-900/60 p-3 sm:p-5">{children}</div>
        <div className="border-t border-white/[0.06] p-5 lg:border-l lg:border-t-0">{side}</div>
      </div>
      {controls && <div className="flex flex-wrap items-end gap-4 border-t border-white/[0.06] px-5 py-4">{controls}</div>}
    </div>
  )
}
