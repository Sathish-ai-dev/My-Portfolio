import { useEffect, useState } from 'react'

/**
 * Reactively tracks whether a CSS media query matches (e.g. '(max-width: 767px)').
 * Updates as the viewport resizes / device orientation changes.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (e) => setMatches(e.matches)

    setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}
