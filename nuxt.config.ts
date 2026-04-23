import { offers } from "./app/data/offers";
import { rooms } from "./app/data/rooms";

const isProduction = process.env.NODE_ENV === "production";
const isIndexable =
  process.env.NUXT_SITE_INDEXABLE === undefined
    ? isProduction
    : process.env.NUXT_SITE_INDEXABLE === "true";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    pageTransition: { name: "page" },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "nuxt-site-config",
    "nuxt-seo-utils",
    "nuxt-schema-org",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "nuxt-link-checker",
  ],
  site: {
    url: "https://kowjuhotels.com",
    name: "Kowju Airport Hotel Calicut",
  },
  routeRules: {
    "/design-system": { robots: false },
  },
  robots: {
    disallow: isIndexable ? [] : ["/"],
  },
  sitemap: {
    urls: [
      "/",
      "/amenities",
      "/contact",
      "/dining",
      "/meetings-events",
      "/hotel-policies",
      "/privacy-policy",
      "/rooms",
      "/offers",
      ...rooms.map((room) => `/rooms/${room.slug}`),
      ...offers.map((offer) => `/offers/${offer.slug}`),
    ],
  },
  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: [400, 500, 600],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
  experimental: {
    serverAppConfig: false,
  },
  primevue: {
    importTheme: { from: "~/themes/kowju.preset.ts" },
    options: {
      ripple: true,
      inputVariant: "filled",
    },
  },
});
