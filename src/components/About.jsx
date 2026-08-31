import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HeartHandshake, ShieldCheck, Users } from 'lucide-react'

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Atención personalizada',
    text: 'Cada alumno entrena según su propia capacidad y objetivo. No hay una talla única: tu plan se adapta a vos.',
  },
  {
    icon: ShieldCheck,
    title: 'Respeto y disciplina',
    text: 'Valores del taekwondo aplicados a cada clase: respeto, constancia y superación personal.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    text: 'Un gimnasio de barrio con espíritu de familia, no una cadena anónima. Conocés a todos por nombre.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.15,
    },
  }),
}

function PillarCard({ pillar, index }) {
  const Icon = pillar.icon
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial={reducedMotion ? false : 'hidden'}
      animate={inView ? 'show' : 'hidden'}
      className="glass-card rounded-3xl p-8 group"
    >
      <div className="flex flex-col gap-5">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-electric to-cyan-ice text-white shadow-lg shadow-blue-electric/30">
          <Icon className="h-7 w-7" />
        </span>
        <h3 className="font-heading text-2xl font-semibold text-white">
          {pillar.title}
        </h3>
        <p className="text-silver leading-relaxed">{pillar.text}</p>
      </div>
      <div className="mt-6 h-px w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-cyan-ice/60 to-transparent" />
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <section id="nosotros" className="relative bg-graphite py-24 lg:py-32 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue-electric/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-ice text-sm font-semibold tracking-widest uppercase mb-4 inline-block">
            Sobre nosotros
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Más que entrenar:
            <br className="sm:hidden" /> una forma de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-ice to-blue-electric">
              superarse con respeto
            </span>
          </h2>
          <p className="text-silver text-lg leading-relaxed">
            Blue es un espacio donde el entrenamiento físico y la disciplina
            marcial conviven. Creemos que el progreso real nace de la constancia
            personalizada: cada uno avanza a su propio ritmo, con la guía cercana
            de un profe que te conoce.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
