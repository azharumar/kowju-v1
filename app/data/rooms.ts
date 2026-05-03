import type { RoomCardDetail } from "~/components/base/BaseRoomCard.vue"

const ROOM_FACILITY_GROUP_ORDER = [
  "room",
  "climate",
  "technology",
  "bathroom",
  "onrequest",
] as const
type RoomFacilityGroupKey = (typeof ROOM_FACILITY_GROUP_ORDER)[number]

const ROOM_FACILITY_ITEMS: { group: RoomFacilityGroupKey; label: string }[] = [
  { group: "room", label: "10 inch orthopedic mattress" },
  { group: "room", label: "Work desk" },
  { group: "room", label: "Wardrobe" },
  { group: "room", label: "Tea & coffee maker" },
  { group: "room", label: "24 hour room service" },
  { group: "climate", label: "Air conditioner" },
  { group: "climate", label: "Ceiling fan" },
  { group: "climate", label: "Air purifier" },
  { group: "technology", label: "55 inch Smart TV" },
  { group: "technology", label: "High-speed Wi-Fi" },
  { group: "technology", label: "Electronic safe locker" },
  { group: "bathroom", label: "Japanese toilet with auto bidet" },
  { group: "bathroom", label: "Rain shower & shower cubicle" },
  { group: "bathroom", label: "24 hour hot water" },
  { group: "bathroom", label: "Shave mirror" },
  { group: "onrequest", label: "Iron & board" },
  { group: "onrequest", label: "Hair dryer" },
]

export type RoomRecord = {
  order: number
  slug: string
  title: string
  description: string
  about?: {
    eyebrow: string
    facts: {
      occupancy: string
      bedding: string
      size: string
    }
    paragraphs: string[]
    facilities: {
      groupOrder: RoomFacilityGroupKey[]
      items: { group: RoomFacilityGroupKey; label: string }[]
    }
  }
  imageSrc: string
  imageAlt: string
  gallery: { src: string; alt: string; width?: number; height?: number }[]
  /** Indicative nightly band in INR; listing converts with fixed factors. */
  priceNightlyInr: { min: number; max: number }
  details: RoomCardDetail[]
}

/** Lucide-derived samples from `design-system/icon-samples.json` → `public/icons/samples/`. */
function icon(file: string) {
  return `/icons/samples/${file}`
}

export const rooms: RoomRecord[] = [
  {
    order: 3,
    slug: "deluxe-king-room",
    title: "Deluxe King",
    description:
      "About 215 sq ft (20 sq m) with one king bed. Sleeps up to two adults and two children.",
    about: {
      eyebrow: "About",
      facts: {
        occupancy: "2 Adults + 2 Child",
        bedding: "01 King Bed",
        size: "215 sqft",
      },
      paragraphs: [
        "Designed for short stays, business travel, and airport transit, the Deluxe King Room offers a calm and well balanced environment just 10 minutes from Calicut International Airport.",
        "A comfortable king size bed anchors the space, while efficient lighting, controlled air conditioning, and noise conscious design help you unwind after travel or a long day.",
        "Ideal for couples, solo travelers, and small families, the Deluxe King Room balances simplicity, comfort, and functionality for a dependable stay.",
      ],
      facilities: {
        groupOrder: [...ROOM_FACILITY_GROUP_ORDER],
        items: [...ROOM_FACILITY_ITEMS],
      },
    },
    priceNightlyInr: { min: 4500, max: 6000 },
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
      {
        iconSrc: icon("check-in-door.svg"),
        label: "Bedroom · Vestibule · Bathroom",
      },
      { iconSrc: icon("floor-area.svg"), label: "215 sq ft" },
      { iconSrc: icon("people-group.svg"), label: "2 Adults + 2 Child" },
    ],
  },
  {
    order: 1,
    slug: "premium-king-room",
    title: "Premium King",
    description:
      "About 270 sq ft (25 sq m) with one king bed and space for an extra bed. Sleeps up to two adults and two children, plus one extra bed.",
    about: {
      eyebrow: "About",
      facts: {
        occupancy: "2 Adults + 2 Child + 1 Extra Bed",
        bedding: "01 King Bed",
        size: "270 sqft",
      },
      paragraphs: [
        "The Premium King Room offers extra floor area for guests who prefer more space while staying close to the airport.",
        "The layout supports short and extended stays with a king bed, practical storage, and comfortable seating for in-room downtime.",
        "It is well suited for couples and small families needing flexibility with optional extra bed arrangements.",
      ],
      facilities: {
        groupOrder: [...ROOM_FACILITY_GROUP_ORDER],
        items: [...ROOM_FACILITY_ITEMS],
      },
    },
    priceNightlyInr: { min: 5000, max: 6500 },
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
      {
        iconSrc: icon("check-in-door.svg"),
        label: "Bedroom · Vestibule · Bathroom",
      },
      { iconSrc: icon("floor-area.svg"), label: "270 sq ft" },
      { iconSrc: icon("people-group.svg"), label: "2 Adults + 2 Child + 1 Extra Bed" },
    ],
  },
  {
    order: 4,
    slug: "premium-twin-room",
    title: "Premium Twin",
    description:
      "About 270 sq ft (25 sq m) with two twin beds and optional extra bed. Ideal for two adults.",
    about: {
      eyebrow: "About",
      facts: {
        occupancy: "2 Adults + 1 Extra Bed",
        bedding: "02 Twin Beds",
        size: "270 sqft",
      },
      paragraphs: [
        "The Premium Twin Room is designed for guests who prefer separate bedding without compromising on comfort or space.",
        "With two twin beds and practical in-room amenities, it works well for colleagues, friends, and short-stop travelers.",
        "An optional extra bed can be arranged based on availability, making it a flexible choice for changing travel plans.",
      ],
      facilities: {
        groupOrder: [...ROOM_FACILITY_GROUP_ORDER],
        items: [...ROOM_FACILITY_ITEMS],
      },
    },
    priceNightlyInr: { min: 5000, max: 6500 },
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
      {
        iconSrc: icon("check-in-door.svg"),
        label: "Bedroom · Vestibule · Bathroom",
      },
      { iconSrc: icon("floor-area.svg"), label: "270 sq ft" },
      { iconSrc: icon("people-group.svg"), label: "2 Adults + 1 Extra Bed" },
    ],
  },
  {
    order: 2,
    slug: "family-room",
    title: "Family Room",
    description:
      "About 325 sq ft (30 sq m) with one king and one twin bed—suited for families and groups needing up to three adult guests. Up to three adults, two children, and one extra bed.",
    about: {
      eyebrow: "About",
      facts: {
        occupancy: "3 Adults + 2 Child + 1 Extra Bed",
        bedding: "01 King + 01 Twin Bed",
        size: "325 sqft",
      },
      paragraphs: [
        "The Family Room provides additional space and mixed bedding for group and family travel near Calicut airport.",
        "Its layout combines a king bed and a twin bed, giving everyone a practical and comfortable sleeping setup.",
        "This room type is ideal for guests who want to stay together in one unit without sacrificing day-to-day convenience.",
      ],
      facilities: {
        groupOrder: [...ROOM_FACILITY_GROUP_ORDER],
        items: [...ROOM_FACILITY_ITEMS],
      },
    },
    priceNightlyInr: { min: 5500, max: 7000 },
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
      {
        iconSrc: icon("check-in-door.svg"),
        label: "Bedroom · Vestibule · Bathroom",
      },
      { iconSrc: icon("floor-area.svg"), label: "325 sq ft" },
      { iconSrc: icon("people-group.svg"), label: "3 Adults + 2 Child + 1 Extra Bed" },
    ],
  },
  {
    order: 5,
    slug: "suite-room",
    title: "Kowju Suite",
    description:
      "About 430 sq ft (40 sq m) with separate living and bedroom areas and individual TVs. One king bed; sleeps up to two adults and two children with one extra bed.",
    about: {
      eyebrow: "About",
      facts: {
        occupancy: "2 Adults + 2 Child + 1 Extra Bed",
        bedding: "01 King Bed",
        size: "430 sqft",
      },
      paragraphs: [
        "The Kowju Suite offers generous space with separate living and sleeping zones for longer or more relaxed stays.",
        "Designed for comfort and privacy, it is a strong fit for families and business travelers who need room to work or unwind.",
        "A king bed, practical amenities, and thoughtful zoning make it easy to settle in during transit or extended visits.",
      ],
      facilities: {
        groupOrder: [...ROOM_FACILITY_GROUP_ORDER],
        items: [...ROOM_FACILITY_ITEMS],
      },
    },
    priceNightlyInr: { min: 7000, max: 9000 },
    imageSrc: "/images/rooms_suites_06_suites_room.png",
    imageAlt: "Suite with separate living area and bedroom",
    gallery: [
      {
        src: "/images/rooms_suites_06_suites_room.png",
        alt: "Kowju suite with separate living area and bedroom",
      },
    ],
    details: [
      { iconSrc: icon("king-bed.svg"), label: "1 King Bed" },
      {
        iconSrc: icon("sofa.svg"),
        label: "Bedroom · Living room · Vestibule · Bathroom",
      },
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
