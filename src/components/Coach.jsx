import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, GraduationCap, HeartHandshake, Target } from 'lucide-react'

const highlights = [
  {
    icon: HeartHandshake,
    text: 'Trato personalizado que respeta las capacidades de cada alumno',
  },
  {
    icon: GraduationCap,
    text: 'Trayectoria docente en taekwondo, reconocida por la comunidad',
  },
  {
    icon: Target,
    text: 'Entrenamientos adaptados a cada objetivo, con constancia y método',
  },
]

export default function Coach() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const reduced = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <section id="equipo" className="relative bg-graphite py-24 lg:py-32 overflow-hidden">
      <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-blue-electric/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image / placeholder */}
          <motion.div
            ref={ref}
            initial={reduced ? false : { opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass-strong">
              {/* Stylized placeholder with initials + belt */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-deep via-graphite to-blue-deep" />
              <div className="absolute inset-0 [background:radial-gradient(circle_at_70%_20%,rgba(30,111,235,0.25),transparent_60%)]" />

              {/* Taekwondo belt ribbon accent */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-1/2 bg-gradient-to-b from-red-tkd to-red-tkd/60 rounded-l-full" />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="h-28 w-28 rounded-full bg-gradient-to-br from-blue-electric to-cyan-ice flex items-center justify-center text-4xl font-heading font-bold text-white shadow-2xl shadow-blue-electric/40 mb-6">
                  Prof.
                </div>
                <h3 className="font-heading text-3xl font-bold text-white mb-2">
                  Tu profe de confianza
                </h3>
                <p className="text-silver text-sm max-w-[240px]">
                  Dirección, docencia y entrenamiento personalizado en un mismo
                  espacio.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 glass-strong rounded-2xl p-4 animate-float-delay">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-bold">4.8</span>
              </div>
              <p className="text-xs text-silver mt-1">Valorado por sus alumnos</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <span className="text-cyan-ice text-sm font-semibold tracking-widest uppercase mb-4 inline-block">
              El profe
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Un profe que te conoce{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-ice to-blue-electric">
                de verdad
              </span>
            </h2>
            <p className="text-silver text-lg leading-relaxed mb-8">
              En Blue no sos un número más. El trato es cercano, respetuoso y
              pensado para respetar las capacidades de cada alumno. La persona
              que te guía es la misma que te corrige, te motiva y celebra tus
              avances: una docente con vocación, muy valorada por toda la
              comunidad.
            </p>

            <div className="grid gap-4 mb-9">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <motion.div
                    key={i}
                    initial={reduced ? false : { opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.3 + i * 0.12,
                    }}
                    className="flex items-center gap-4 glass-card rounded-2xl px-5 py-4"
                  >
                    <span className="h-11 w-11 flex-none flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-electric to-cyan-ice text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-white/90 leading-snug">{h.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
