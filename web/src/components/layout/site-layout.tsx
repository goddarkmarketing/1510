import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { FloatingContact } from '@/components/floating-contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function SiteLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1 pt-16 sm:pt-[72px]">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  )
}
