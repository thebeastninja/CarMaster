import { useEffect, useState } from 'react'

// Tiny hash router: #/learn/l2-1 -> { path: ['learn','l2-1'] }
function parse() {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const [pathPart, queryPart] = raw.split('?')
  const path = pathPart.split('/').filter(Boolean)
  const query = Object.fromEntries(new URLSearchParams(queryPart || ''))
  return { path, query }
}

export function useRoute() {
  const [route, setRoute] = useState(parse)
  useEffect(() => {
    const onHash = () => {
      setRoute(parse())
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}

export function navigate(to) {
  window.location.hash = to.startsWith('#') ? to : `#${to}`
}
