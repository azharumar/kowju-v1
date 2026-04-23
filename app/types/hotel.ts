/** Normalized hotel / NAP shape for UI, JSON-LD, and future CMS adapters. */

export interface HotelAddress {
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

export interface HotelGeo {
  latitude: number
  longitude: number
}

export interface HotelLocaleOption {
  code: string
  label: string
  /** Compact label for the top bar (e.g. ENG). Falls back to `label`. */
  shortLabel?: string
}

export interface HotelSite {
  name: string
  legalName: string
  /** E.164 (no spaces) for `tel:` links and schema.org `telephone` */
  telephone: string
  /** Human-readable phone for display (single canonical format sitewide). */
  telephoneDisplay: string
  email: string
  url: string
  address: HotelAddress
  geo: HotelGeo
  sameAs: string[]
  /** One line for header / ribbons; same string can be reused elsewhere. */
  airportProximityNote: string
  locales: HotelLocaleOption[]
}
