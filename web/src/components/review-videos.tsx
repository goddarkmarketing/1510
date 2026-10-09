import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
export type ReviewClip = {
  src: string
  poster: string
  name: string
  from: string
  text: string
}

function ReviewCard({
  clip,
  active,
  onPlay,
}: {
  clip: ReviewClip
  active: boolean
  onPlay: () => void
}) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-white ring-1 ring-foreground/10">
      <div className="relative aspect-video bg-blue-deep">
        {active ? (
          <video
            src={clip.src}
            poster={clip.poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            className="group relative block h-full w-full"
            onClick={onPlay}
            aria-label={clip.name}
          >
            <img
              src={clip.poster}
              alt=""
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/15" />
            <span className="absolute top-1/2 left-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-orange text-white shadow-lg transition group-hover:scale-105">
              <Play size={22} fill="currentColor" className="ml-0.5" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="px-4 py-3.5">
        <p className="text-sm font-extrabold text-blue-deep">{clip.name}</p>
        <p className="text-xs font-semibold text-gold">{clip.from}</p>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
          “{clip.text}”
        </p>
      </figcaption>
    </figure>
  )
}

export function ReviewSlider({ clips }: { clips: ReviewClip[] }) {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)

  const scrollByCard = (direction: number) => {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.86, 420), behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {clips.map((clip, index) => (
          <div
            key={clip.src}
            className="w-[84%] shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
          >
            <ReviewCard
              clip={clip}
              active={active === index}
              onPlay={() => setActive(index)}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Previous"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white text-blue-deep"
          onClick={() => scrollByCard(-1)}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white text-blue-deep"
          onClick={() => scrollByCard(1)}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export function ReviewGrid({ clips }: { clips: ReviewClip[] }) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {clips.map((clip, index) => (
        <ReviewCard
          key={clip.src}
          clip={clip}
          active={active === index}
          onPlay={() => setActive(index)}
        />
      ))}
    </div>
  )
}
