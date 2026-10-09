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
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/30" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge className="bg-gold text-[#141414] hover:bg-gold">
          {eyebrow}
        </Badge>
        <h1 className="mt-3 line-clamp-2 max-w-3xl font-display text-3xl font-extrabold tracking-wide text-white uppercase italic sm:mt-4 sm:text-4xl lg:text-5xl">
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
