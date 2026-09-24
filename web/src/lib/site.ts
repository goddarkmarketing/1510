import { asset } from '@/lib/asset'

export const WA_URL = 'https://wa.me/66902691898'

export const navLinks = [
  { to: '/', key: 'home' as const },
  { to: '/tours', key: 'tours' as const },
  { to: '/private-tour', key: 'private' as const },
  { to: '/fleet', key: 'fleet' as const },
  { to: '/gallery', key: 'gallery' as const },
  { to: '/faq', key: 'faq' as const },
  { to: '/contact', key: 'contact' as const },
]

export const galleryImages = [
  asset('images/gallery-1.jpg'),
  asset('images/package-3.jpg'),
  asset('images/hero.png'),
  asset('images/gallery-2.jpg'),
  asset('images/package-1.jpg'),
  asset('images/package-5.jpg'),
  asset('images/package-2.jpg'),
  asset('images/banner.png'),
  asset('images/package-4.jpg'),
]

export const tourImages = [
  asset('images/tour-card-1.png'),
  asset('images/tour-card-2.png'),
  asset('images/package-3.jpg'),
  asset('images/tour-card-3.png'),
]

export const fleetImages = [
  {
    src: asset('images/package-3.jpg'),
    title: 'Sea-Doo GTX PRO 130',
    specs: ['130 HP', 'Comfort seat', 'Up to 2 guests'],
  },
  {
    src: asset('images/package-1.jpg'),
    title: 'Tour Ready Fleet',
    specs: ['Life jackets', 'Guided convoy', 'Photo stops'],
  },
  {
    src: asset('images/gallery-2.jpg'),
    title: 'Open Water Performance',
    specs: ['Stable hull', 'Easy handling', 'Beginner friendly'],
  },
]
