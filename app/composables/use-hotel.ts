import { readonly } from 'vue'
import { defaultHotel } from '~/data/hotel-defaults'
import type { HotelSite } from '~/types/hotel'

/**
 * Canonical hotel / NAP data for UI, structured data, and future CMS hydration.
 * Swap implementation to fetch + map from Strapi/Directus without changing consumers.
 */
export function useHotel(): Readonly<HotelSite> {
  return readonly(defaultHotel) as Readonly<HotelSite>
}
