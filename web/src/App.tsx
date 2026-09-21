import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/site-layout'
import { LocaleProvider } from '@/context/locale'
import { ContactPage } from '@/pages/contact-page'
import { FaqPage } from '@/pages/faq-page'
import { FleetPage } from '@/pages/fleet-page'
import { GalleryPage } from '@/pages/gallery-page'
import { HomePage } from '@/pages/home-page'
import { PrivateTourPage } from '@/pages/private-tour-page'
import { ToursPage } from '@/pages/tours-page'

export default function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="tours" element={<ToursPage />} />
            <Route path="private-tour" element={<PrivateTourPage />} />
            <Route path="fleet" element={<FleetPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  )
}
