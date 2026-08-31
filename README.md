# Blue Centro de Entrenamiento — Landing Page

Landing page single-page (scroll vertical) para **Blue Centro de Entrenamiento**,
un centro deportivo en Esperanza, Santa Fe, con clases de taekwondo y
entrenamiento personalizado.

> ⭐ 4.8 / 5 · 33 opiniones en Google

## Stack

- **React + Vite** — base del proyecto
- **Tailwind CSS v4** — estilos y paleta custom (azul profundo, azul eléctrico, cian)
- **Framer Motion** — transiciones de UI
- **React Three Fiber / Three.js** — fondo 3D del hero (blobs + partículas), lazy-loaded
- **Lenis** — smooth scroll
- **GSAP** (dependencia de @react-three/drei) — utilidades de animación

## Características

- Hero 100vh con fondo 3D animado, badge de rating (4.8 ★) y doble CTA
- Glassmorphism "liquid glass" en tarjetas, navbar y formularios
- Secciones: Nosotros, Servicios, El Profe, Opiniones, Horarios/Ubicación, Contacto
- Microinteracciones on-scroll, parallax con mouse en tarjetas
- Respeta `prefers-reduced-motion`
- Mobile-first y responsive
- Links directos a WhatsApp (wa.me) e Instagram

## Datos reales del negocio

- **Dirección:** Paraguay 1395, Esperanza, Santa Fe, Argentina
- **Teléfono / WhatsApp:** 03496 15-41-7439
- **Horario:** cierra 21:00 hs · resto por turno (consultar)
- **Instagram:** botón "Seguinos en Instagram"

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```
