// CarMaster service worker: offline app shell + cached real car photos.
const VERSION = 'cm-v3'
const SHELL = `${VERSION}-shell`
const ASSETS = `${VERSION}-assets`
const IMAGES = `${VERSION}-images`
const MAX_IMAGES = 400

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(['./', './index.html', './manifest.webmanifest', './icons/icon-192.png'])).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  )
})

async function trim(cacheName, max) {
  const c = await caches.open(cacheName)
  const keys = await c.keys()
  for (let i = 0; i < keys.length - max; i++) await c.delete(keys[i])
}

self.addEventListener('fetch', (e) => {
  const req = e.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)

  // Page navigations: network first, fall back to cached shell (works offline)
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((res) => { caches.open(SHELL).then((c) => c.put('./index.html', res.clone())); return res }).catch(() => caches.match('./index.html')))
    return
  }

  // Hashed build assets: cache first (they never change)
  if (url.origin === self.location.origin) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(ASSETS).then((c) => c.put(req, copy)) }
      return res
    })))
    return
  }

  // Real car photos from Wikimedia: cache first, keep the latest few hundred
  if (url.hostname === 'upload.wikimedia.org' || url.hostname === 'images.unsplash.com') {
    e.respondWith(caches.open(IMAGES).then((c) => c.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok || res.type === 'opaque') { c.put(req, res.clone()); trim(IMAGES, MAX_IMAGES) }
      return res
    }))))
    return
  }

  // Google Fonts: stale-while-revalidate
  if (url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(caches.open(ASSETS).then((c) => c.match(req).then((hit) => {
      const net = fetch(req).then((res) => { c.put(req, res.clone()); return res }).catch(() => hit)
      return hit || net
    })))
  }
})
