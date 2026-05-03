import type { RouteLocationRaw } from "vue-router";

/** One label + value row (e.g. cuisines, dietary options). */
export type DiningDetailRow = {
  term: string;
  value: string;
};

export const diningOverviewOverline = "Restaurant";

export const diningOverviewTitle = "Skypol Diner";

/** Conversion-first copy for `/dining` (page body). */
export const diningOverviewIntroParagraphs = [
  "All-day dining with Indian, Chinese, and continental options. Vegetarian, non-vegetarian, and Jain meals are available on request.",
];

export const diningOverviewDetailRows: DiningDetailRow[] = [
  { term: "Cuisines", value: "Indian, Chinese, Continental" },
  { term: "Dietary options", value: "Vegetarian, Non-vegetarian" },
  { term: "Special diets", value: "Jain food available on request" },
  {
    term: "Dining format",
    value: "Breakfast buffet, à la carte for the rest of the day",
  },
];

export const diningOverviewCtaPrimary: {
  label: string;
  to: RouteLocationRaw;
} = {
  label: "View Menu",
  to: "/documents/restaurant-menu.pdf",
};

export const diningOverviewCtaSecondary: {
  label: string;
  to: RouteLocationRaw;
} = {
  label: "In-Room Dining Menu",
  to: "/documents/in-room-dining-menu.pdf",
};

/*
 * SEO-first intro (landing / long-form), optional:
 * "Enjoy all-day dining at our restaurant with a wide selection of Indian,
 * Chinese, and continental cuisine. From breakfast buffets to à la carte
 * lunch and dinner, the menu offers both vegetarian and non-vegetarian
 * options. Jain food is also available on request, making it a convenient
 * choice for guests with specific dietary preferences."
 */
