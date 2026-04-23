import type { HotelSite } from "~/types/hotel";

/** Static defaults; replace via CMS adapter + `useHotel()` when API is wired. */
export const defaultHotel: HotelSite = {
  name: "Kowju Airport Hotel Calicut",
  legalName: "ABDUN NAZIR PUTTEKKADAN",
  telephone: "+914832711010",
  telephoneDisplay: "+91 4832711010",
  email: "hello@kowjuhotels.com",
  url: "https://kowjuhotels.com/",
  address: {
    streetAddress: "Aeropolis, Pazhayangadi Road",
    addressLocality: "Kondotty",
    addressRegion: "Kerala",
    postalCode: "673638",
    addressCountry: "IN",
  },
  geo: {
    latitude: 11.1481307,
    longitude: 75.9603317,
  },
  sameAs: [
    "https://www.instagram.com/kowjuairport_hotel/",
    "https://www.facebook.com/KowjuCalicut/",
    "https://www.youtube.com/@KowjuAirportHotelCalicut",
    "https://www.linkedin.com/company/kowjucalicut/",
    "https://maps.app.goo.gl/oAFiJgcTaxziRfPw5",
  ],
  airportProximityNote: "3 km from Calicut International Airport",
  locales: [{ code: "en", label: "English", shortLabel: "ENG" }],
};
