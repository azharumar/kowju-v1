export interface NearbyLocation {
  slug: string;
  /** Short label (e.g. nav, admin). */
  name: string;
  /** Serif headline in footer journey list. */
  listTitle: string;
  /** Distance / time line; shown uppercase in UI (e.g. `4.3 km · ≈ 10 min`). */
  listMeta: string;
  /** Supporting sentence under the meta line. */
  listDescription: string;
  mapsQuery: string;
  pageTitle: string;
  pageDescription: string;
  intro: string;
  body: string;
}

const records: NearbyLocation[] = [
  {
    slug: "ccj",
    name: "CCJ",
    listTitle: "Calicut International Airport",
    listMeta: "4.3 km · ≈ 10 min",
    listDescription:
      "Free shared shuttle for staying guests, around the clock.",
    mapsQuery: "Calicut International Airport Karipur CCJ",
    pageTitle: "CCJ",
    pageDescription:
      "Calicut International Airport (CCJ) — distance, transfers, and what to expect from Kowju.",
    intro:
      "Placeholder destination page. Replace with CMS-driven copy, media, and structured data when the location library is wired.",
    body:
      "Terminal notes, shuttle pickup, typical drive time from the hotel, and luggage-friendly routes will be summarized here for guests.",
  },
  {
    slug: "kottakkal",
    name: "Kottakkal",
    listTitle: "Kottakkal Arya Vaidya Sala",
    listMeta: "≈ 47 km · ≈ 1 hr",
    listDescription:
      "Ayurveda hub on the Malabar interior — desk can arrange a car when you are ready.",
    mapsQuery: "Kottakkal Kerala",
    pageTitle: "Kottakkal",
    pageDescription:
      "Kottakkal and the Malabar interior — orientation for guests staying for treatment or family visits.",
    intro:
      "Placeholder destination page. Replace with CMS-driven copy when editorial content is available.",
    body:
      "Road time from Kondotty, long-stay context, and desk-arranged transport notes will appear in this block.",
  },
  {
    slug: "wayanad-ghats",
    name: "Wayanad ghats",
    listTitle: "Wayanad ghats",
    listMeta: "≈ 85 km · ≈ 2 hr 30 min",
    listDescription:
      "Hill-day planning from the coast: ghat segments, weather, and sensible turnaround times.",
    mapsQuery: "Wayanad ghat road Kerala",
    pageTitle: "Wayanad ghats",
    pageDescription:
      "The Wayanad ghat climb from the Malabar coast — planning a hill day from the hotel.",
    intro:
      "Placeholder destination page. Replace with CMS-driven copy when the excursions set is finalized.",
    body:
      "Drive segments, monsoon cautions, and sensible turnaround times from CCJ / Kondotty will be outlined here.",
  },
  {
    slug: "nit-calicut",
    name: "NIT Calicut",
    listTitle: "NIT Calicut",
    listMeta: "≈ 22 km · ≈ 35 min",
    listDescription:
      "Campus visits and events — typical taxi time from Kondotty and desk tips for busy weeks.",
    mapsQuery: "National Institute of Technology Calicut NITC",
    pageTitle: "NIT Calicut",
    pageDescription:
      "NIT Calicut (NITC) — useful for academic visitors and event guests basing at the airport hotel.",
    intro:
      "Placeholder destination page. Replace with CMS-driven copy when campus visit content is approved.",
    body:
      "Campus gates, typical taxi time from Kondotty, and event-week traffic patterns will be summarized here.",
  },
];

export function getLocationBySlug(slug: string): NearbyLocation | undefined {
  return records.find((l) => l.slug === slug);
}

export function mapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const footerNearbyLocations = records.map(
  ({ slug, listTitle, listMeta, listDescription }) => ({
    slug,
    listTitle,
    listMeta,
    listDescription,
  }),
);

export function locationDetailPaths(): string[] {
  return records.map((l) => `/locations/${l.slug}`);
}
