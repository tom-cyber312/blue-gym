import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'
import { BUSINESS, WA_LINK } from '../lib/data'

function StylizedMap() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <div
      ref={ref}
      className="glass-strong rounded-[2rem] p-6 lg:p-8 overflow-hidden relative"
    >
      {/* Stylized streets background */}
      <div className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-deep via-graphite to-blue-deep">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* road grid */}
          <g stroke="#1E6FEB" strokeWidth="1.5" strokeOpacity="0.15" fill="none">
            <path d="M0 80 H400" />
            <path d="M0 160 H400" />
            <path d="M0 240 H400" />
            <path d="M100 0 V300" />
            <path d="M250 0 V300" />
            <path d="M0 0 Q 200 100 400 40" strokeOpacity="0.08" strokeWidth="3" />
          </g>
          {/* central glowing route */}
          <motion.path
            d="M40 260 C 140 260, 200 120, 360 90"
            stroke="#5FD4F0"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
        </svg>

        {/* Pin with bounce */}
        <motion.div
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: -40, scale: 0.6 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={
            reduced
              ? {}
              : { type: 'spring', stiffness: 170, damping: 12, delay: 0.4 }
          }
          className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative flex flex-col items-center">
            <span className="h-12 w-12 rounded-full bg-blue-electric flex items-center justify-center shadow-2xl shadow-blue-electric/60 animate-pulse-glow">
              <MapPin className="h-6 w-6 text-white" />
            </span>
            <span className="mt-2 px-3 py-1.5 rounded-lg glass text-xs text-white whitespace-nowrap shadow-lg">
              Paraguay 1395
            </span>
            <span className="mt-1 h-3 w-3 rotate-45 bg-blue-electric/70 -translate-y-[10px]" />
          </div>
        </motion.div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-cyan-ice mt-0.5 flex-none" />
          <p className="text-white/90">{BUSINESS.address}</p>
        </div>
      </div>
    </div>
  )
}

export default function Schedule() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  const scheduleRows = [
    { label: 'Lunes a Viernes', value: 'Por turno', note: '' },
    { label: 'Sábados', value: 'Por turno', note: '' },
    { label: 'Cierre', value: '21:00 hs', note: 'horario de cierre', highlight: true },
    { label: 'Otros turnos', value: 'Consultá por WhatsApp', note: '' },
  ]

  return (
    <section id="horarios" className="relative bg-graphite py-24 lg:py-32 overflow-hidden">
      <div className="absolute -top-40 right-1/3 h-96 w-96 rounded-full bg-blue-electric/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          ref={ref}
          initial={reduced ? false : { opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-ice text-sm font-semibold tracking-widest uppercase mb-4 inline-block">
            Horarios y ubicación
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Encontrános en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-ice to-blue-electric">
              Esperanza
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <StylizedMap />

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-electric to-cyan-ice flex items-center justify-center text-white">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  Horarios
                </h3>
              </div>

              <ul className="space-y-3">
                {scheduleRows.map((row) => (
                  <li
                    key={row.label}
                    className={`flex items-center justify-between rounded-xl px-5 py-4 ${
                      row.highlight
                        ? 'glass-strong border-white/10'
                        : 'bg-white/[0.03] hover:bg-white/[0.06] transition-colors'
                    }`}
                  >
                    <div>
                      <p className="text-white font-medium">{row.label}</p>
                      {row.note && (
                        <p className="text-xs text-silver mt-0.5">{row.note}</p>
                      )}
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        row.highlight ? 'text-cyan-ice' : 'text-silver'
                      }`}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-8 flex flex-col sm:flex-row sm:items-center gap-5">
              <span className="h-13 w-13 sm:h-14 sm:w-14 flex-none rounded-2xl bg-gradient-to-br from-blue-electric to-cyan-ice flex items-center justify-center text-white p-3">
                <Phone className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <p className="text-silver text-sm mb-1">Consultá horarios por turno</p>
                <p className="font-heading text-xl font-semibold text-white">
                  {BUSINESS.phone}
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-blue-electric text-white text-sm font-semibold text-center hover:bg-blue-500 transition-colors"
              >
                Escribinos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
