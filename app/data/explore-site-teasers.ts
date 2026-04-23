export type ExploreSiteTeaserId = "rooms" | "dining" | "venues";

export interface ExploreSiteTeaser {
  id: ExploreSiteTeaserId;
  to: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleSuffix: string;
  description: string;
  linkLabel: string;
}

export const exploreSiteTeasers: ExploreSiteTeaser[] = [
  {
    id: "rooms",
    to: "/rooms",
    imageSrc: "/images/rooms_suites_01.png",
    imageAlt: "Hotel rooms and suites interior",
    title: "Rooms",
    titleSuffix: " & suites",
    description: "Restful spaces with practical amenities for short or longer stays.",
    linkLabel: "View rooms",
  },
  {
    id: "dining",
    to: "/dining",
    imageSrc: "/images/dining_experience_01.png",
    imageAlt: "Dining experience at the hotel",
    title: "Dining",
    titleSuffix: "",
    description: "All-day flavors from quick bites to relaxed meals.",
    linkLabel: "Explore dining",
  },
  {
    id: "venues",
    to: "/meetings-events",
    imageSrc: "/images/events_meetings_01.png",
    imageAlt: "Meetings and events space at the hotel",
    title: "Meetings",
    titleSuffix: " & events",
    description: "Flexible venues for business gatherings and celebrations.",
    linkLabel: "View venues",
  },
];
