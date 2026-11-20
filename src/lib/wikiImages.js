import { useEffect, useState } from 'react'

/**
 * Real photos from Wikipedia / Wikimedia Commons.
 * Titles are queued and resolved in batches of up to 50 with one request
 * (action=query&prop=pageimages), then cached in memory + localStorage.
 * Result per title: an image URL, or null when the article has no image.
 */
const API = 'https://en.wikipedia.org/w/api.php'
const KEY = 'cm-wiki-img-v2'
const TTL = 1000 * 60 * 60 * 24 * 14 // 2 weeks
const SIZE = 960

const cache = new Map()
const listeners = new Map()
let queue = new Set()
let timer = null

try {
  const raw = JSON.parse(localStorage.getItem(KEY) || '{}')
  if (raw.t && Date.now() - raw.t < TTL) Object.entries(raw.d || {}).forEach(([k, v]) => cache.set(k, v))
} catch { /* ignore */ }

function persist() {
  try {
    const d = {}
    cache.forEach((v, k) => { if (v !== undefined) d[k] = v })
    localStorage.setItem(KEY, JSON.stringify({ t: Date.now(), d }))
  } catch { /* ignore */ }
}

function emit(title) {
  const set = listeners.get(title)
  if (set) set.forEach((fn) => fn(cache.get(title)))
}

async function fetchBatch(titles) {
  const params = new URLSearchParams({
    action: 'query', format: 'json', formatversion: '2', origin: '*', redirects: '1',
    prop: 'pageimages', piprop: 'thumbnail', pithumbsize: String(SIZE), titles: titles.join('|'),
  })
  try {
    const res = await fetch(`${API}?${params}`)
    if (!res.ok) throw new Error(res.status)
    const json = await res.json()
    const q = json.query || {}
    // Map requested title -> final page title through normalisation and redirects
    const hop = new Map()
    ;(q.normalized || []).forEach((n) => hop.set(n.from, n.to))
    ;(q.redirects || []).forEach((r) => hop.set(r.from, r.to))
    const resolve = (t) => { let x = t; for (let i = 0; i < 4 && hop.has(x); i++) x = hop.get(x); return x }
    const byTitle = new Map((q.pages || []).map((p) => [p.title, p.thumbnail?.source || null]))
    titles.forEach((t) => cache.set(t, byTitle.get(resolve(t)) ?? null))
  } catch {
    // Offline or blocked: mark as unavailable for this session only (not persisted)
    titles.forEach((t) => cache.set(t, null))
    titles.forEach(emit)
    return
  }
  titles.forEach(emit)
  persist()
}

function flush() {
  timer = null
  const all = [...queue]
  queue = new Set()
  for (let i = 0; i < all.length; i += 50) fetchBatch(all.slice(i, i + 50))
}

export function requestWikiImage(title) {
  if (!title || cache.has(title)) return
  queue.add(title)
  cache.set(title, undefined)
  if (!timer) timer = setTimeout(flush, 40)
}

export function getWikiImage(title) {
  return cache.get(title)
}

/** Returns undefined while loading, null if none, or the URL. */
export function useWikiImage(title) {
  const [url, setUrl] = useState(() => (title ? cache.get(title) : null))
  useEffect(() => {
    if (!title) { setUrl(null); return }
    requestWikiImage(title)
    setUrl(cache.get(title))
    const fn = (v) => setUrl(v)
    if (!listeners.has(title)) listeners.set(title, new Set())
    listeners.get(title).add(fn)
    return () => listeners.get(title)?.delete(fn)
  }, [title])
  return url
}

/** Prefetch many titles at once (one network request per 50). */
export function prefetchWikiImages(titles) {
  titles.forEach(requestWikiImage)
}

/** Resize a Wikimedia thumbnail URL to a given width. */
export function sizedWiki(url, w) {
  if (!url) return url
  return url.replace(/\/(\d+)px-([^/]+)$/, `/${w}px-$2`)
}
