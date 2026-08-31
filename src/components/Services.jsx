import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Dumbbell, Medal, UserRound, Users } from 'lucide-react'
import { WA_LINK } from '../lib/data'

const services = [
  {
    icon: Dumbbell,
    title: 'Musculación y entrenamiento funcional',
    desc: 'Planes personalizados para ganar fuerza, mejorar la técnica y moverte mejor en el día a día.',
    tag: 'Plan personalizado',
    color: '#1E6FEB',
  },
  {
    icon: Medal,
    title: 'Clases de Taekwondo',
    desc: 'Formación completa para niños, adolescentes y adultos. Disciplina, respeto y confianza desde el primer día.',
    tag: 'Todas las edades',
    color: '#E63946',
  },
  {
    icon: UserRound,
    title: 'Entrenamiento personal 1 a 1',
    desc: 'Seguimiento individual con un profe que arma tu plan según tu objetivo y tu ritmo.',
    tag: 'Atención exclusiva',
    color: '#5FD4F0',
  },
  {
    icon: Users,
    title: 'Clases grupales',
    desc: 'Entrená en grupo con la energía de la comunidad. Cupos limitados para sostener la atención personalizada.',
    tag: 'Consultá disponibilidad',
    color: '#5FD4F0',
  },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 2) * 0.15,
      }}
      className="glass-card rounded-3xl p-8 flex flex-col group cursor-default"
      onMouseMove={(e) => {
        if (reduced) return
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        e.currentTarget.style.setProperty('--rx', `${y * -6}deg`)
        e.currentTarget.style.setProperty('--ry', `${x * 8}deg`)
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty('--rx', '0deg')
        e.currentTarget.style.setProperty('--ry', '0deg')
      }}
      style={{
        transform:
          'perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
        transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <span
          className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg"
          style={{ background: service.color, boxShadow: `0 8px 24px ${service.color}40` }}
        >
          <Icon className="h-8 w-8" />
        </span>
        <span className="text-xs px-3 py-1.5 rounded-full glass text-cyan-ice">
          {service.tag}
        </span>
      </div>

      <h3 className="font-heading text-2xl font-semibold text-white mb-3">
        {service.title}
      </h3>
      <p className="text-silver leading-relaxed flex-1">{service.desc}</p>

      <div className="mt-6 pt-6 border-t border-white/5">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-ice text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
        >
          Consultar
          <span aria-hidden>→</span>
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <section id="servicios" className="relative bg-blue-deep py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-ice/5 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={reduced ? false : { opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-ice text-sm font-semibold tracking-widest uppercase mb-4 inline-block">
            Servicios
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Elegí tu camino
          </h2>
          <div className="glow-line max-w-xs mx-auto mb-6" />
          <p className="text-silver text-lg">
            Entrenamiento físico, arte marcial o ambos. Empezá con una{' '}
            <span className="text-white font-medium">
              evaluación física inicial gratuita
            </span>
            .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
