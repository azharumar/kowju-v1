export type BookDirectBenefitId =
  | "best-rate"
  | "flexible-stay"
  | "transfers"
  | "room-preferences"
  | "gst-invoice"
  | "guest-support";

export interface BookDirectBenefit {
  id: BookDirectBenefitId;
  title: string;
  summary: string;
  iconClass: string;
}

export const bookDirectBenefits: BookDirectBenefit[] = [
  {
    id: "best-rate",
    title: "Best rate guarantee",
    summary:
      "Rates on our official channels are designed to match or beat typical third-party listings for the same stay dates and room type.",
    iconClass: "pi pi-tags",
  },
  {
    id: "flexible-stay",
    title: "Priority on changes",
    summary:
      "When you book direct, our front office can see your reservation in full context and work with you on early arrival, late departure, or date changes subject to availability.",
    iconClass: "pi pi-clock",
  },
  {
    id: "transfers",
    title: "Complimentary airport transfers",
    summary:
      "Eligible direct bookings include coordinated pickup and drop for Calicut International Airport on a scheduled basis—confirm timing when you reserve.",
    iconClass: "pi pi-car",
  },
  {
    id: "room-preferences",
    title: "Room notes that stick",
    summary:
      "High floor, quiet wing, twin layout, or accessibility needs—tell us at booking and we attach the request to your reservation for the team to honour when possible.",
    iconClass: "pi pi-home",
  },
  {
    id: "gst-invoice",
    title: "GST-ready invoicing",
    summary:
      "Corporate travellers can request a GST-compliant invoice with company details captured before arrival so checkout stays quick.",
    iconClass: "pi pi-file",
  },
  {
    id: "guest-support",
    title: "One team end to end",
    summary:
      "From confirmation to arrival, the same property team handles amendments—no middle layer between you and the hotel.",
    iconClass: "pi pi-users",
  },
];

/** Copy for the book-direct strip inside `SectionRoomOffers` (home, rooms listing, room detail). */
export const bookDirectStrip = {
  overline: "Book direct",
  message:
    "Official reservations keep your stay with our team—competitive rates, clearer communication, and perks reserved for direct bookings.",
  benefitsHref: "/book-direct",
  benefitsLabel: "See all benefits",
} as const;

export const bookDirectPageIntroParagraphs = [
  "Reserving through our official website or reservations desk keeps your stay details with the team that will welcome you on arrival—so requests, changes, and special occasions stay clear and actionable.",
  "Below is how booking direct typically benefits guests at Kowju Airport Hotel Calicut. Exact inclusions depend on the rate and dates you choose; our reservations team confirms everything in writing when you book.",
] as const;
