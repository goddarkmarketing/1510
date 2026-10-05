import { PageHero } from '@/components/layout/page-hero'
import { ReviewGrid, type ReviewClip } from '@/components/review-videos'
import { useLocale } from '@/context/locale'
import { reviewVideos } from '@/lib/site'

export function ReviewsPage() {
  const { t } = useLocale()
  const clips: ReviewClip[] = reviewVideos.map((video, index) => ({
    src: video.src,
    poster: video.poster,
    name: t.reviews.clips[index]?.name ?? '',
    from: t.reviews.clips[index]?.from ?? '',
    text: t.reviews.clips[index]?.text ?? '',
  }))

  return (
    <>
      <PageHero
        eyebrow={t.reviews.videoEyebrow}
        title={t.reviews.pageTitle}
        description={t.reviews.pageLead}
        image="images/hero-gallery.png"
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <ReviewGrid clips={clips} />
      </section>
    </>
  )
}
