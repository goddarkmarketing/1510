import { asset } from '@/lib/asset'

export const WA_URL = 'https://wa.me/66902691898'

export const navLinks = [
  { to: '/', key: 'home' as const },
  { to: '/tours', key: 'tours' as const },
  { to: '/fleet', key: 'fleet' as const },
  { to: '/gallery', key: 'gallery' as const },
  { to: '/faq', key: 'faq' as const },
  { to: '/contact', key: 'contact' as const },
]

export const galleryImages = [
  asset('images/gallery-1.jpg'),
  asset('images/hero.png'),
  asset('images/gallery-2.jpg'),
  asset('images/package-2.jpg'),
  asset('images/package-4.jpg'),
]

export const tourImages = [
  asset('images/tour-morning.png'),
  asset('images/tour-afternoon.png'),
]

export const fleetImages = [
  {
    src: asset('images/fleet-gtx-pro.png'),
    title: 'Sea-Doo GTX PRO 130',
    specs: ['130 HP', 'Comfort seat', 'Up to 2 guests'],
  },
  {
    src: asset('images/fleet-tour-ready.png'),
    title: 'Tour Ready Fleet',
    specs: ['Life jackets', 'Guided convoy', 'Photo stops'],
  },
  {
    src: asset('images/gallery-2.jpg'),
    title: 'Open Water Performance',
    specs: ['Stable hull', 'Easy handling', 'Beginner friendly'],
  },
]
