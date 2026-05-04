export type OfferRecord = {
  slug: string
  title: string
  /** Short teaser for cards and hero lead. */
  description: string
  imageSrc: string
  imageAlt: string
}

export const offers: OfferRecord[] = [
  {
    slug: "weekend-stay",
    title: "Weekend stay",
    description:
      "Two nights near the airport with late checkout on Sunday subject to availability—ideal for a short city break or visiting family.",
    imageSrc: "/images/home_page_06_dining_experience.png",
    imageAlt: "Weekend stay offer at the hotel",
  },
  {
    slug: "early-bird",
    title: "Early bird",
    description:
      "Book fourteen days ahead and lock in a preferential nightly rate on select room types, confirmed in writing at reservation.",
    imageSrc: "/images/home_page_07_events_meetings.png",
    imageAlt: "Early bird booking offer",
  },
  {
    slug: "airport-transit-bundle",
    title: "Airport transit bundle",
    description:
      "Coordinated pickup and drop for Calicut International Airport paired with a restful night before or after your flight.",
    imageSrc: "/images/rooms_suites_01.png",
    imageAlt: "Guest room prepared for airport travellers",
  },
  {
    slug: "extended-stay-saver",
    title: "Extended stay saver",
    description:
      "Stay four nights or more and benefit from a reduced nightly average on eligible categories—perfect for project teams and relocations.",
    imageSrc: "/images/home_page_04_rooms_suites.png",
    imageAlt: "Comfortable suite living area for longer stays",
  },
  {
    slug: "dining-credit-package",
    title: "Dining credit package",
    description:
      "Includes a fixed in-house dining allowance to use toward restaurant meals or in-room dining during your stay.",
    imageSrc: "/images/dining_experience_01.png",
    imageAlt: "Hotel dining experience",
  },
  {
    slug: "family-weeknight",
    title: "Family weeknight",
    description:
      "Connecting or twin-friendly layouts with extra bedding where available, priced for midweek family travel from Sunday to Thursday.",
    imageSrc: "/images/rooms_suites_03_family_room.png",
    imageAlt: "Family room setup",
  },
]

export function getOfferBySlug(slug: string): OfferRecord | undefined {
  return offers.find((o) => o.slug === slug)
}
