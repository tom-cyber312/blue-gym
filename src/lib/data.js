export const BUSINESS = {
  name: 'Blue Centro de Entrenamiento',
  shortName: 'Blue',
  tagline: 'Disciplina que te transforma',
  rating: '4.8',
  reviews: '33 opiniones',
  address: 'Paraguay 1395, Esperanza, Santa Fe, Argentina',
  addressShort: 'Paraguay 1395, Esperanza, Santa Fe',
  phone: '03496 15-41-7439',
  phoneRaw: '0349615417439',
  whatsapp: '549349615417439',
  instagram: 'https://instagram.com',
  closeTime: 'Cierra 21:00 hs',
  schedule: 'Consultá horarios por turno',
}

export const WA_LINK = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  'Hola! Quiero consultar por los horarios y clases en Blue Centro de Entrenamiento.',
)}`

export const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Contacto', href: '#contacto' },
]
