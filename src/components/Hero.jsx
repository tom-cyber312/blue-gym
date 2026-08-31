import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronDown, Sparkles } from 'lucide-react'
import { BUSINESS, WA_LINK } from '../lib/data'
import InstagramIcon from './InstagramIcon'

const HeroBackground = lazy(() => import('./HeroBackground'))

function HeroBackgroundFallback() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-deep via-blue-deep to-graphite" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-blue-electric/25 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-cyan-ice/15 blur-[120px]" />
    </div>
  )
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.4 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false)
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)

    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 },
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-blue-deep"
    >
      <Suspense fallback={<HeroBackgroundFallback />}>
        <HeroBackground active={inView} />
      </Suspense>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-20 flex-1 flex flex-col justify-center">
        <motion.div
          key={reducedMotion ? 'static' : 'anim'}
          variants={container}
          initial={reducedMotion ? false : 'hidden'}
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="mb-6 inline-flex">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-cyan-ice" />
              <span className="text-silver">Centro deportivo · Taekwondo · Personalizado</span>
            </span>
          </motion.div>

          <motion.h1
            variants={reducedMotion ? undefined : item}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white mb-6"
          >
            Blue
            <br />
            <span className="bg-gradient-to-r from-cyan-ice via-blue-300 to-blue-electric bg-clip-text text-transparent">
              Centro de Entrenamiento
            </span>
          </motion.h1>

          <motion.p
            variants={reducedMotion ? undefined : item}
            className="text-xl sm:text-2xl text-white/90 mb-8 font-light max-w-xl"
          >
            {BUSINESS.tagline}
          </motion.p>

          <motion.p
            variants={reducedMotion ? undefined : item}
            className="text-base sm:text-lg text-silver mb-10 max-w-xl leading-relaxed"
          >
            Gimnasio de barrio con espíritu de familia: entrenamiento personalizado
            y formación en taekwondo, con respeto por el ritmo de cada alumno.
          </motion.p>

          <motion.div
            variants={reducedMotion ? undefined : item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl bg-blue-electric text-white font-semibold text-center hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-electric/40 hover:shadow-blue-electric/60 animate-pulse-glow"
            >
              Reservá tu clase de prueba
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl glass text-white font-semibold text-center hover:border-cyan-ice/40 hover:bg-white/5 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <InstagramIcon className="h-5 w-5" />
              Ver Instagram
            </a>
          </motion.div>
        </motion.div>

        {/* Rating badge - floating liquid glass */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-6 top-28 lg:right-12 lg:top-1/3 animate-float"
        >
          <div className="glass-strong rounded-2xl p-5 shadow-xl shadow-black/30 min-w-[160px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="font-bold text-white text-lg">{BUSINESS.rating}</span>
            </div>
            <p className="text-sm text-silver">{BUSINESS.reviews} en Google</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#nosotros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-silver group"
      >
        <span className="text-xs tracking-widest uppercase group-hover:text-white transition-colors">
          Descubrí
        </span>
        <span className="animate-bounce-arrow">
          <ChevronDown className="h-6 w-6" />
        </span>
      </motion.a>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-graphite" />
    </section>
  )
}
