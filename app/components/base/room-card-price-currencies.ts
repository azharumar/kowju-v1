/** Display order for room listing currency selector. */
export const ROOM_CARD_PRICE_CURRENCIES = ["USD", "AED", "EUR", "INR"] as const;

export type RoomCardPriceCurrency =
  (typeof ROOM_CARD_PRICE_CURRENCIES)[number];
