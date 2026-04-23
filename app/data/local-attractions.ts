export interface LocalAttraction {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  /** Distance and typical travel time from the hotel (display only). */
  distanceLabel: string;
}

export const localAttractions: LocalAttraction[] = [
  {
    id: "mini-ooty",
    title: "Mini Ooty",
    description:
      "A peaceful hill viewpoint surrounded by greenery, Mini Ooty offers cool air, misty landscapes, and a calm atmosphere ideal for a short nature break.",
    imageSrc: "/images/home_page_09_things_to_do.png",
    imageAlt: "Misty green hills at Mini Ooty viewpoint",
    distanceLabel: "45 km · about 1 hr 10 min drive",
  },
  {
    id: "vallikunnu-beach",
    title: "Vallikunnu Beach",
    description:
      "A peaceful beach in Malappuram, known for its coconut lined shores, calm sands, and natural surroundings.",
    imageSrc: "/images/home_page_10_things_to_do.png",
    imageAlt: "Sandy beach with waves and coconut palms",
    distanceLabel: "22 km · about 35 min drive",
  },
  {
    id: "kottakunnu-park",
    title: "Kottakunnu Park",
    description:
      "A landscaped hilltop park offering a mix of recreational rides, eateries, green spaces, city views, and nearby historical temples making it a popular local hangout.",
    imageSrc: "/images/home_page_11_things_to_do.png",
    imageAlt: "Hilltop park walkway overlooking the valley",
    distanceLabel: "18 km · about 30 min drive",
  },
];
