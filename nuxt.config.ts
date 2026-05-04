import { locationDetailPaths } from "./app/data/locations";
import { offers } from "./app/data/offers";
import { rooms } from "./app/data/rooms";

const isProduction = process.env.NODE_ENV === "production";
const isIndexable =
  process.env.NUXT_SITE_INDEXABLE === undefined
    ? isProduction
    : process.env.NUXT_SITE_INDEXABLE === "true";

const staticRoutes = [
  "/",
  "/amenities",
  "/book-direct",
  "/contact",
  "/location",
  "/dining",
  "/meetings-events",
  "/hotel-policies",
  "/privacy-policy",
  "/faq",
  "/rooms",
  "/offers",
];

const dynamicRoutes = [
  ...rooms.map((room) => `/rooms/${room.slug}`),
  ...offers.map((offer) => `/offers/${offer.slug}`),
  ...locationDetailPaths(),
];

const allRoutes = [...staticRoutes, ...dynamicRoutes];

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    pageTransition: { name: "page" },
  },
  devtools: { enabled: !isProduction },
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
  // Static-first rendering: every known route is pre-built into HTML at build time.
  // Anything else still SSRs on demand. Mirrors Astro's "ship HTML, hydrate islands" model.
  routeRules: {
    "/design-system": { robots: false, prerender: false },
    ...Object.fromEntries(allRoutes.map((path) => [path, { prerender: true }])),
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: allRoutes,
    },
    compressPublicAssets: { gzip: true, brotli: true },
  },
  robots: {
    disallow: isIndexable ? [] : ["/"],
  },
  sitemap: {
    urls: allRoutes,
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
    payloadExtraction: true,
    headNext: true,
  },
  features: {
    inlineStyles: true,
  },
  primevue: {
    importTheme: { from: "~/themes/kowju.preset.ts" },
    options: {
      ripple: false,
      inputVariant: "filled",
    },
  },
  vite: {
    build: {
      target: "esnext",
      cssMinify: "lightningcss",
    },
  },
  sourcemap: {
    server: false,
    client: false,
  },
});
