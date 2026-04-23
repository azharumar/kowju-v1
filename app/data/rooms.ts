import type { RoomCardDetail } from "~/components/base/BaseRoomCard.vue"

export type RoomRecord = {
  order: number
  slug: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  gallery: { src: string; alt: string; width?: number; height?: number }[]
  /** Typical rate band (property data sheet). */
  priceRange: string
  details: RoomCardDetail[]
}

/** Lucide-derived samples from `design-system/icon-samples.json` → `public/icons/samples/`. */
function icon(file: string) {
  return `/icons/samples/${file}`
}

export const rooms: RoomRecord[] = [
  {
    order: 1,
    slug: "deluxe-king-room",
    title: "Deluxe King",
    description:
      "About 215 sq ft (20 sq m) with one king bed. Sleeps up to two adults and two children.",
    priceRange: "₹4,500–6,000",
    imageSrc: "/images/rooms_suites_02_deluxe_king_room.png",
    imageAlt: "Deluxe king guest room with king bed",
    gallery: [
      {
        src: "/images/deluxe_king_room_01.png",
        alt: "Deluxe king room with king bed and accent wall",
      },
      {
        src: "/images/deluxe_king_room_02.png",
        alt: "Deluxe king room TV console and bathroom entry",
      },
      {
        src: "/images/deluxe_king_room_03.png",
        alt: "Deluxe king room corner view with window curtains",
      },
      {
        src: "/images/deluxe_king_room_04.png",
        alt: "Deluxe king room bed-facing view",
      },
      {
        src: "/images/deluxe_king_room_05.png",
        alt: "Deluxe king room vanity and mirror area",
      },
      {
        src: "/images/deluxe_king_room_06.png",
        alt: "Deluxe king room seating and interior detail",
      },
    ],
    details: [
      { iconSrc: icon("king-bed.svg"), label: "1 King Bed" },
      { iconSrc: icon("floor-area.svg"), label: "215 sq ft" },
      { iconSrc: icon("people-group.svg"), label: "2 Adults + 2 Child" },
    ],
  },
  {
    order: 2,
    slug: "premium-king-room",
    title: "Premium King",
    description:
      "About 270 sq ft (25 sq m) with one king bed and space for an extra bed. Sleeps up to two adults and two children, plus one extra bed.",
    priceRange: "₹5,000–6,500",
    imageSrc: "/images/rooms_suites_04_premium_king_room.png",
    imageAlt: "Premium king room with king bed",
    gallery: [
      {
        src: "/images/rooms_suites_04_premium_king_room.png",
        alt: "Premium king room with king bed",
      },
    ],
    details: [
      { iconSrc: icon("king-bed.svg"), label: "1 King Bed" },
      { iconSrc: icon("floor-area.svg"), label: "270 sq ft" },
      { iconSrc: icon("people-group.svg"), label: "2 Adults + 2 Child + 1 Extra Bed" },
    ],
  },
  {
    order: 3,
    slug: "premium-twin-room",
    title: "Premium Twin",
    description:
      "About 270 sq ft (25 sq m) with two twin beds and optional extra bed. Ideal for two adults.",
    priceRange: "₹5,000–6,500",
    imageSrc: "/images/rooms_suites_05_premium_twin_room.png",
    imageAlt: "Premium twin room with two twin beds",
    gallery: [
      {
        src: "/images/rooms_suites_05_premium_twin_room.png",
        alt: "Premium twin room with two twin beds",
      },
    ],
    details: [
      { iconSrc: icon("twin-bed.svg"), label: "2 Twin Beds" },
      { iconSrc: icon("floor-area.svg"), label: "270 sq ft" },
      { iconSrc: icon("people-group.svg"), label: "2 Adults + 1 Extra Bed" },
    ],
  },
  {
    order: 4,
    slug: "family-room",
    title: "Family Room",
    description:
      "About 325 sq ft (30 sq m) with one king and one twin bed—suited for families and groups needing up to three adult guests. Up to three adults, two children, and one extra bed.",
    priceRange: "₹5,500–7,000",
    imageSrc: "/images/rooms_suites_03_family_room.png",
    imageAlt: "Family room with king and twin beds",
    gallery: [
      {
        src: "/images/rooms_suites_03_family_room.png",
        alt: "Family room with king and twin beds",
      },
    ],
    details: [
      { iconSrc: icon("multi-level-beds.svg"), label: "1 King + 1 Twin Bed" },
      { iconSrc: icon("floor-area.svg"), label: "325 sq ft" },
      { iconSrc: icon("people-group.svg"), label: "3 Adults + 2 Child + 1 Extra Bed" },
    ],
  },
  {
    order: 5,
    slug: "suite-room",
    title: "Suite Room",
    description:
      "About 430 sq ft (40 sq m) with separate living and bedroom areas and individual TVs. One king bed; sleeps up to two adults and two children with one extra bed.",
    priceRange: "₹7,000–9,000",
    imageSrc: "/images/rooms_suites_06_suites_room.png",
    imageAlt: "Suite with separate living area and bedroom",
    gallery: [
      {
        src: "/images/rooms_suites_06_suites_room.png",
        alt: "Suite room with separate living area and bedroom",
      },
    ],
    details: [
      { iconSrc: icon("king-bed.svg"), label: "1 King Bed" },
      { iconSrc: icon("floor-area.svg"), label: "430 sq ft" },
      { iconSrc: icon("people-group.svg"), label: "2 Adults + 2 Child + 1 Extra Bed" },
    ],
  },
]

export function getRoomBySlug(slug: string): RoomRecord | undefined {
  return rooms.find((r) => r.slug === slug)
}

export function getAdjacentRoomsBySlug(
  slug: string,
): { previous: RoomRecord; next: RoomRecord } | undefined {
  if (!rooms.length) {
    return undefined
  }

  const orderedRooms = [...rooms].sort((a, b) => a.order - b.order)
  const currentIndex = orderedRooms.findIndex((room) => room.slug === slug)

  if (currentIndex === -1) {
    return undefined
  }

  const previousIndex =
    (currentIndex - 1 + orderedRooms.length) % orderedRooms.length
  const nextIndex = (currentIndex + 1) % orderedRooms.length

  return {
    previous: orderedRooms[previousIndex]!,
    next: orderedRooms[nextIndex]!,
  }
}
