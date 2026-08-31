import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, CheckCircle } from 'lucide-react'
import { BUSINESS, WA_LINK } from '../lib/data'
import InstagramIcon from './InstagramIcon'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hola! Soy ${form.name}.${
      form.message ? ` Mensaje: ${form.message}` : ''
    }`
    window.open(
      `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
    )
    setSent(true)
  }

  const inputClass =
    'w-full rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md px-5 py-3.5 text-white placeholder:text-silver/70 focus:outline-none focus:border-cyan-ice/50 focus:bg-white/[0.07] transition-all duration-300'

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32 overflow-hidden bg-blue-deep"
    >
      {/* Intense liquid glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-blue-electric/20 blur-[130px] animate-float" />
        <div className="absolute bottom-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-ice/15 blur-[130px] animate-float-delay" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(95,212,240,0.1), transparent 60%)',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-cyan-ice text-sm font-semibold tracking-widest uppercase mb-4 inline-block">
            Sumate
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para empezar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-ice to-blue-electric">
              a tu ritmo
            </span>
            ?
          </h2>
          <p className="text-silver text-lg">
            Probá una clase o consultá por tu plan. Te respondemos por WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center gap-5"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-strong rounded-2xl p-7 hover:border-blue-electric/40 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <span className="h-14 w-14 flex-none rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-xl shadow-green-500/30">
                  <MessageCircle className="h-7 w-7" />
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    Escribinos por WhatsApp
                  </h3>
                  <p className="text-silver mt-1">{BUSINESS.phone}</p>
                </div>
                <span className="text-cyan-ice group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </a>

            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-strong rounded-2xl p-7 hover:border-cyan-ice/40 transition-all duration-500"
            >
              <div className="flex items-center gap-4">
                <span className="h-14 w-14 flex-none rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white flex items-center justify-center shadow-xl shadow-pink-500/30">
                  <InstagramIcon className="h-7 w-7" />
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-white">
                    Seguinos en Instagram
                  </h3>
                  <p className="text-silver mt-1">@blue.centrodeentrenamiento</p>
                </div>
                <span className="text-cyan-ice group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </a>

            <div className="glass-card rounded-2xl p-6 mt-2">
              <p className="text-silver text-sm leading-relaxed">
                <span className="text-cyan-ice font-medium">
                  Evaluación física inicial gratuita
                </span>{' '}
                para alumnos nuevos. Sin compromiso: vení, conocé el espacio y
                charlemos tu objetivo.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="glass-strong rounded-3xl p-8 lg:p-10"
          >
            <h3 className="font-heading text-2xl font-semibold text-white mb-6">
              Dejanos tu consulta
            </h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-5">
                  <CheckCircle className="h-9 w-9 text-green-400" />
                </span>
                <p className="text-white text-xl font-semibold mb-2">
                  ¡Gracias {form.name}!
                </p>
                <p className="text-silver">
                  Te redirigimos a WhatsApp para continuar la conversación.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-silver mb-2" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm text-silver mb-2" htmlFor="phone">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Ej: 03496 15-41-7439"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm text-silver mb-2" htmlFor="msg">
                    Mensaje
                  </label>
                  <textarea
                    id="msg"
                    rows="4"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="¿Qué te gustaría consultar? (clases, horarios, taekwondo...)"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-electric text-white font-semibold hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-electric/40"
                >
                  <Send className="h-5 w-5" />
                  Enviar por WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
