import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    // Sync anchor navigation with Lenis
    function handleClick(e) {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const id = target.getAttribute('href')
      if (id === '#') return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: -72, duration: 1.2 })
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}
