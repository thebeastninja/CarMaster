import { useEffect, useState } from 'react'
import { useWikiImage, sizedWiki } from '../lib/wikiImages.js'

// Deterministic hue from a string, so fallbacks look varied but stable.
const hueOf = (s = '') => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7)

export function CarSilhouette({ className = '', style }) {
  return (
    <svg viewBox="0 0 200 80" className={className} style={style} aria-hidden="true">
      <path d="M8 58c0-6 3-10 10-12l28-6c10-12 24-20 46-20h22c18 0 30 8 42 18l22 4c8 2 14 6 14 14v6H8z" fill="currentColor" opacity=".9" />
      <path d="M62 38c8-8 18-12 30-12h18c12 0 22 4 30 12z" fill="#000" opacity=".35" />
      <circle cx="50" cy="62" r="13" fill="#0c0d10" stroke="currentColor" strokeWidth="4" />
      <circle cx="152" cy="62" r="13" fill="#0c0d10" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="62" r="4" fill="currentColor" />
      <circle cx="152" cy="62" r="4" fill="currentColor" />
    </svg>
  )
}

function Fallback({ label, className, decorative }) {
  const h = hueOf(label)
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `radial-gradient(120% 90% at 20% 10%, hsl(${(h + 10) % 360} 70% 22%), #0c0d10 70%)` }}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : label}
    >
      <div className="grid-bg absolute inset-0 opacity-60" />
      {!decorative && <CarSilhouette className="relative w-2/3 max-w-[260px]" style={{ color: `hsl(${h} 85% 58%)` }} />}
    </div>
  )
}

/**
 * Image with a cascade: real Wikipedia photo (wiki title) → Unsplash (src) → illustration.
 */
export default function Img({ src, wiki, alt = '', className = '', imgClassName = '', decorative = false, width = 960, eager = false, fit = 'cover' }) {
  const wikiUrl = useWikiImage(wiki)
  const [stage, setStage] = useState(0) // 0 wiki, 1 src, 2 fallback
  const [loaded, setLoaded] = useState(false)

  useEffect(() => { setStage(0); setLoaded(false) }, [wiki, src])

  let url = null
  if (stage === 0 && wiki) {
    if (wikiUrl === undefined) url = undefined // still resolving
    else if (wikiUrl) url = sizedWiki(wikiUrl, width)
  }
  if (url === null && stage <= 1 && src) url = src

  if (url === null) return <Fallback label={alt} className={className} decorative={decorative} />

  const onError = () => {
    setLoaded(false)
    if (stage === 0 && wikiUrl && src) setStage(1)
    else setStage(2)
  }
  if (stage === 2) return <Fallback label={alt} className={className} decorative={decorative} />

  return (
    <div className={`relative overflow-hidden bg-ink-800 ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-ink-700 to-ink-850" />}
      {url && (
        <img
          src={url}
          alt={decorative ? '' : alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={onError}
          className={`h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'} transition duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
        />
      )}
    </div>
  )
}
