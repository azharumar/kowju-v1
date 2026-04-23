export type OfferRecord = {
  slug: string
  title: string
  imageSrc: string
  imageAlt: string
}

export const offers: OfferRecord[] = [
  {
    slug: "weekend-stay",
    title: "Weekend Stay",
    imageSrc: "/images/home_page_06_dining_experience.png",
    imageAlt: "Weekend stay offer",
  },
  {
    slug: "early-bird",
    title: "Early Bird",
    imageSrc: "/images/home_page_07_events_meetings.png",
    imageAlt: "Early bird booking offer",
  },
]

export function getOfferBySlug(slug: string): OfferRecord | undefined {
  return offers.find((o) => o.slug === slug)
}
