import { Droplets, MapPin, Phone, Clock } from 'lucide-react'
import { BUSINESS, WA_LINK } from '../lib/data'
import InstagramIcon from './InstagramIcon'

export default function Footer() {
  return (
    <footer className="relative bg-blue-deep border-t border-white/5">
      <div className="glow-line" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#top" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-electric to-cyan-ice text-white">
                <Droplets className="h-5 w-5" />
              </span>
              <span className="font-heading text-lg font-bold text-white">
                Blue<span className="text-cyan-ice">.</span>
              </span>
            </a>
            <p className="text-silver text-sm leading-relaxed">
              Centro de entrenamiento con clases de taekwondo y entrenamiento
              personalizado en Esperanza, Santa Fe.
            </p>
            <p className="text-white/90 font-medium mt-4">{BUSINESS.tagline}</p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'El profe', href: '#equipo' },
                { label: 'Opiniones', href: '#opiniones' },
                { label: 'Horarios', href: '#horarios' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-silver hover:text-cyan-ice transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cyan-ice flex-none mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Paraguay+1395+Esperanza+Santa+Fe+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver hover:text-white transition-colors text-sm"
                >
                  {BUSINESS.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-ice flex-none" />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver hover:text-white transition-colors text-sm"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="h-5 w-5 text-cyan-ice flex-none" />
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver hover:text-white transition-colors text-sm"
                >
                  Seguinos en Instagram
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-cyan-ice flex-none" />
                <span className="text-silver text-sm">
                  {BUSINESS.closeTime} · {BUSINESS.schedule}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Clase de prueba
            </h4>
            <p className="text-silver text-sm mb-5">
              Reseñas que nos respaldan:{' '}
              <span className="text-white font-semibold">
                {BUSINESS.rating} ★
              </span>{' '}
              · {BUSINESS.reviews}.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 rounded-xl bg-blue-electric text-white text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              Reservá tu clase
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver text-xs">
            © {new Date().getFullYear()} {BUSINESS.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-silver text-xs">
            Cuerpo fuerte, mente firme. 💙
          </p>
        </div>
      </div>
    </footer>
  )
}
