import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alumna de taekwondo',
    stars: 5,
    delay: 0,
    quote:
      'Se nota que es una excelente profesora. El ambiente del gimnasio es muy bueno y siempre se aprende algo nuevo.',
  },
  {
    name: 'Alumno de musculación',
    stars: 5,
    delay: 1,
    quote:
      'Trato muy personalizado: respetan tus capacidades y tu ritmo en todo momento. Se nota el respeto por cada alumno.',
  },
  {
    name: 'Padre de alumno',
    stars: 5,
    delay: 2,
    quote:
      'Excelente para la formación de los más chicos. Más que técnica, aprenden disciplina, respeto y confianza.',
  },
  {
    name: 'Alumna de entrenamiento personal',
    stars: 4,
    delay: 3,
    quote:
      'Un espacio familiar donde el profe te conoce por nombre. Se avanza con constancia y sin presiones.',
  },
]

function TestimonialCard({ t }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: t.delay * 0.12,
      }}
      className="glass-card rounded-3xl p-7 flex flex-col animate-float"
      style={{ animationDelay: `${t.delay * 0.9}s` }}
    >
      <Quote className="h-8 w-8 text-cyan-ice/40 mb-4" />
      <p className="text-white/90 leading-relaxed flex-1 mb-6">{t.quote}</p>
      <div className="flex items-center justify-between pt-5 border-t border-white/5">
        <div>
          <p className="font-semibold text-white">{t.name}</p>
          <p className="text-xs text-silver mt-1">Reseña en Google</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < t.stars
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-silver/40'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <section
      id="opiniones"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-deep to-graphite"
    >
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-blue-electric/10 blur-[130px]" />
      <div className="absolute bottom-20 left-0 h-80 w-80 rounded-full bg-cyan-ice/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={reduced ? false : { opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-ice text-sm font-semibold tracking-widest uppercase mb-4 inline-block">
            Opiniones
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Lo que dicen los que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-ice to-blue-electric">
              entrenan acá
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.8</span>
            <span className="text-silver">· 33 opiniones en Google</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name + t.delay} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
