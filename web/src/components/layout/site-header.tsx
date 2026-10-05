import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { LanguageMenu } from '@/components/language-menu'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useLocale } from '@/context/locale'
import { asset } from '@/lib/asset'
import { navLinks, WA_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all',
        scrolled
          ? 'border-border bg-white/95 shadow-sm backdrop-blur'
          : 'border-transparent bg-white',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img
            src={asset('images/logo.jpg')}
            alt="GI JET SKI TOURS"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="min-w-0 leading-tight">
            <p className="text-sm font-extrabold tracking-wide text-primary sm:text-base">
              GI JET SKI TOURS
            </p>
            <p className="hidden text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:block">
              Ride · Explore · Discover
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-[13px] font-semibold transition',
                  isActive
                    ? 'bg-secondary text-primary'
                    : 'text-foreground/75 hover:bg-muted hover:text-primary',
                )
              }
            >
              {t.nav[item.key]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            render={<a href={WA_URL} target="_blank" rel="noreferrer" />}
            className="hidden bg-accent text-accent-foreground hover:bg-orange-hot sm:inline-flex"
          >
            {t.nav.book}
          </Button>

          <LanguageMenu />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="xl:hidden"
                  aria-label="Menu"
                />
              }
            >
              <Menu size={18} />
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] max-w-sm p-0">
              <SheetHeader className="border-b border-border p-4 text-left">
                <SheetTitle>GI JET SKI TOURS</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-3">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'rounded-xl px-4 py-3 text-sm font-semibold',
                        isActive
                          ? 'bg-secondary text-primary'
                          : 'text-foreground/80 hover:bg-muted',
                      )
                    }
                  >
                    {t.nav[item.key]}
                  </NavLink>
                ))}
                <Button
                  render={<a href={WA_URL} target="_blank" rel="noreferrer" />}
                  className="mt-3 bg-accent text-accent-foreground hover:bg-orange-hot"
                  onClick={() => setOpen(false)}
                >
                  {t.nav.book}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
