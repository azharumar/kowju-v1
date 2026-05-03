import type { RoomCardPriceCurrency } from "~/components/base/room-card-price-currencies";

/** INR per 1 unit of foreign currency (fixed; swap when CMS publishes FX). */
const INR_PER_FOREIGN: Record<Exclude<RoomCardPriceCurrency, "INR">, number> = {
  USD: 83,
  AED: 22.5,
  EUR: 90,
};

function formatInrInt(n: number): string {
  return Math.round(n).toLocaleString("en-IN");
}

/** Formats an indicative nightly min–max band from INR source into the chosen currency. */
export function formatRoomNightlyBand(
  minInr: number,
  maxInr: number,
  currency: RoomCardPriceCurrency,
): string {
  if (currency === "INR") {
    return `₹${formatInrInt(minInr)}–${formatInrInt(maxInr)}`;
  }
  const rate = INR_PER_FOREIGN[currency];
  const lo = Math.round(minInr / rate);
  const hi = Math.round(maxInr / rate);
  if (currency === "USD") return `$${lo}–${hi}`;
  if (currency === "EUR") return `€${lo}–${hi}`;
  return `AED ${lo}–${hi}`;
}
