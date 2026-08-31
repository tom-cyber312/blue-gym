import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Droplets, Menu, X } from 'lucide-react'
import { NAV_LINKS, WA_LINK } from '../lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'glass-strong shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-electric to-cyan-ice text-white shadow-lg shadow-blue-electric/30 group-hover:shadow-blue-electric/50 transition-all duration-300">
            <Droplets className="h-5 w-5" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            Blue
            <span className="text-cyan-ice">.</span>
            <span className="hidden sm:inline text-silver font-normal text-sm ml-1.5">
              Centro de Entrenamiento
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-silver hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-ice transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-blue-electric text-white text-sm font-semibold hover:bg-blue-500 transition-colors duration-300 shadow-lg shadow-blue-electric/30 hover:shadow-blue-electric/50"
          >
            Clase de prueba
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden glass-strong mx-4 mt-3 rounded-2xl p-5 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white py-2 hover:text-cyan-ice transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3 rounded-xl bg-blue-electric text-white text-center font-semibold"
          >
            Clase de prueba
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
