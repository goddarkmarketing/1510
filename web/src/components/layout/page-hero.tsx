import { Badge } from '@/components/ui/badge'
import { asset } from '@/lib/asset'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  eyebrow: string
  title: string
  description?: string
  image?: string
  className?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  image = 'images/hero.png',
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate flex h-[240px] items-center overflow-hidden sm:h-[280px] lg:h-[320px]',
        className,
      )}
    >
      <img
        src={asset(image)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/90 via-blue-deep/70 to-blue-deep/35" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge className="bg-accent text-accent-foreground hover:bg-accent">
          {eyebrow}
        </Badge>
        <h1 className="mt-3 line-clamp-2 max-w-3xl text-3xl font-extrabold text-white sm:mt-4 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
